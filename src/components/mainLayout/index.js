import React from 'react'
import styles from './index.module.scss'
import MainNav from '../mainNav'

const MainLayout = ({children}) => {
    return (
        <section className={styles.main}>
            <div className={styles.navigation}>
                <MainNav />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}

export default MainLayout