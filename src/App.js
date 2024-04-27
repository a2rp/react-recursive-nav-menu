import React from "react";
import styles from "./styles.module.scss";
import PageRoutes from "./pageRoutes";
import NavLinks from "./components/navLinks";

const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <NavLinks />
            </div>
            <div className={styles.main}>
                <PageRoutes />
            </div>
        </div>
    )
}

export default App

