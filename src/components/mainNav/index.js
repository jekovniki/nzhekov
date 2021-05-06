import React, { useState } from 'react'
import styles from './index.module.scss'
import MenuLinks from '../menuLinks'
import NavLinks from '../../utils/navLinks'

const MainNav = () => {
    const links = NavLinks();

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };


    return (
        <header className={styles[`navigation`]}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <h2>Zh</h2>
                    </div>
                    <div className={styles.text}>
                        <h3>Niki</h3>
                    </div>
                    <div className={styles.small}>
                        Web Developer
                    </div>
                    <div className={styles[`mobile-burger`]} 
                        onClick={ToggleClass}>
                        <div className={isActive ? "line" : "line extend"}></div>
                        <div className={isActive ? "line" : "line extend"}></div>
                        <div className={isActive ? "line" : "line extend"}></div>
                    </div>
                </div>
                <div className={isActive ? "hide" : "show"}>
                    <MenuLinks links={links} />
                </div>
                <div className={styles.social}>
                    <p>facebook</p>
                </div>
            </div>
        </header>
    )
}

export default MainNav