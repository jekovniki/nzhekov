import React from 'react'
import styles from './index.module.scss'
import MenuLinks from '../menuLinks'
import NavLinks from '../../utils/navLinks'

const mainNav = () => {
    const links = NavLinks()

    return (
        <menu className={styles[`navigation`]}>
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
                </div>
                <MenuLinks links={links} />
                <div className={styles.social}>
                    <p>facebook</p>
                </div>
            </div>
        </menu>
    )
}

export default mainNav