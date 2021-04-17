import React from 'react'
import styles from './index.module.scss'
import MenuLinks from '../menuLinks'
import NavLinks from '../../utils/navLinks'

const mainNav = () => {
    const links = NavLinks()

    return (
        <menu className={styles[`legal-nav`]}>
            <div className={styles.container}>
                <div className={styles.header}>
                    Test
                </div>
                <div className={styles.content}>
                    <h2>Test</h2>
                    <h4>Test</h4>
                </div>
                <MenuLinks links={links} />
            </div>
        </menu>
    )
}

export default mainNav