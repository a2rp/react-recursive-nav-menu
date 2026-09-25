import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import PageRoutes from "./pageRoutes";
import NavLinks from "./components/navLinks";

const links = [["Portfolio", "https://www.ashishranjan.net/", "↗"], ["GitHub", "https://github.com/a2rp", "GH"], ["CodePen", "https://codepen.io/ash1198", "CP"], ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", "in"], ["Facebook", "https://www.facebook.com/theash.ashish/", "f"], ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", "▶"], ["Email", "mailto:ash.ranjan09@gmail.com", "@"], ["Support", "https://a2rp-donation-page.netlify.app/", "♥"], ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", "☕"], ["Patreon", "https://patreon.com/a2rp", "P"]];

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle("menuOpen", navOpen); return () => document.body.classList.remove("menuOpen"); }, [navOpen]);
  return <div className={styles.container}>
    <header className={styles.header}><Link className={styles.brand} to="/home"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" /><span>Recursive Navigation</span></Link><button className={styles.menuButton} type="button" aria-label="Toggle navigation" aria-expanded={navOpen} onClick={() => setNavOpen((open) => !open)}>{navOpen ? "×" : "☰"}</button></header>
    <div className={styles.layout}><aside className={`${styles.navContainer} ${navOpen ? styles.navOpen : ""}`}><div className={styles.navHeading}>Navigation</div><NavLinks onNavigate={() => setNavOpen(false)} /></aside><main className={styles.main}><PageRoutes /></main></div>
    <footer className={styles.footer}><p>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p><nav aria-label="Links and support">{links.map(([label, href, icon]) => <a key={label} href={href} title={label} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{icon}</a>)}</nav></footer>
  </div>;
};

export default App;