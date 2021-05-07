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
                        <svg x="0px" y="0px" viewBox="0 0 23.631 23.631"><g><g>
		                    <polygon 
                            points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969" 
                            />
		                    <polygon 
                            points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662"
                            />
                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            <g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
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