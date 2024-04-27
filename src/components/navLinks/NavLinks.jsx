import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const NavLinks = () => {
    const [toggleAbout, setToggleAbout] = useState(false);
    const [toggleProjects, setToggleProjects] = useState(false);
    const [toggleProjects2, setToggleProjects2] = useState(false);

    return (
        <div className={styles.container}>
            <NavLink
                to="/home"
                className={styles.navlinkHome}
            >Home</NavLink>

            <div className={styles.parent}
                onClick={() => setToggleAbout(toggleAbout => !toggleAbout)}
            >About <span>+</span></div>
            {toggleAbout === true && <>
                <div className={styles.aboutNavlinksContainer}>
                    <NavLink to="/about/resume" className={styles.navlink}>Resume</NavLink>
                    <NavLink to="/about/contact" className={styles.navlink}>Contact</NavLink>
                </div>
            </>}

            <div className={styles.parent}
                onClick={() => setToggleProjects(toggleProjects => !toggleProjects)}
            >Projects <span>+</span></div>
            {toggleProjects === true && <>
                <div className={styles.projectsLinksContainer}>
                    <NavLink to="/projects/project1" className={styles.navlinkProject1}>Project 1</NavLink>
                    <div className={styles.project2}
                        onClick={() => setToggleProjects2(projects2 => !projects2)}
                    >Project2 <span>+</span></div>
                    {toggleProjects2 === true && <>
                        <div className={styles.projects2Container}>
                            <NavLink to="/projects/project2/project2a" className={styles.project2a}>Project 2 a</NavLink>
                            <NavLink to="/projects/project2/project2b" className={styles.project2b}>Project 2 b</NavLink>
                        </div>
                    </>}
                    <NavLink to="/projects/project3" className={styles.navlinkProject3}>Project 3</NavLink>
                </div>
            </>}
        </div>
    )
}

export default NavLinks

