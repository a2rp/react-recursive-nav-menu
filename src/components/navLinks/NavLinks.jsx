import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const linkClass = ({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`;
const NavLinks = ({ onNavigate }) => {
  const location = useLocation();
  const [aboutOpen, setAboutOpen] = useState(location.pathname.startsWith("/about"));
  const [projectsOpen, setProjectsOpen] = useState(location.pathname.startsWith("/projects"));
  const [projectTwoOpen, setProjectTwoOpen] = useState(location.pathname.includes("/projects/project2"));
  return <nav className={styles.container} aria-label="Primary navigation">
    <NavLink to="/home" className={linkClass} onClick={onNavigate}>Home</NavLink>
    <div className={styles.parentRow}><NavLink to="/about" className={linkClass} onClick={onNavigate}>About</NavLink><button type="button" className={styles.toggle} aria-label="Toggle About links" aria-expanded={aboutOpen} onClick={() => setAboutOpen((open) => !open)}>{aboutOpen ? "−" : "+"}</button></div>
    {aboutOpen && <div className={styles.nested}><NavLink to="/about/resume" className={linkClass} onClick={onNavigate}>Resume</NavLink><NavLink to="/about/contact" className={linkClass} onClick={onNavigate}>Contact</NavLink></div>}
    <div className={styles.parentRow}><NavLink to="/projects" className={linkClass} onClick={onNavigate}>Projects</NavLink><button type="button" className={styles.toggle} aria-label="Toggle Projects links" aria-expanded={projectsOpen} onClick={() => setProjectsOpen((open) => !open)}>{projectsOpen ? "−" : "+"}</button></div>
    {projectsOpen && <div className={styles.nested}><NavLink to="/projects/project1" className={linkClass} onClick={onNavigate}>Project 1</NavLink><div className={styles.parentRow}><NavLink to="/projects/project2" className={linkClass} onClick={onNavigate}>Project 2</NavLink><button type="button" className={styles.toggle} aria-label="Toggle Project 2 links" aria-expanded={projectTwoOpen} onClick={() => setProjectTwoOpen((open) => !open)}>{projectTwoOpen ? "−" : "+"}</button></div>{projectTwoOpen && <div className={styles.deepNested}><NavLink to="/projects/project2/project2a" className={linkClass} onClick={onNavigate}>Project 2A</NavLink><NavLink to="/projects/project2/project2b" className={linkClass} onClick={onNavigate}>Project 2B</NavLink></div>}<NavLink to="/projects/project3" className={linkClass} onClick={onNavigate}>Project 3</NavLink></div>}
  </nav>;
};
export default NavLinks;