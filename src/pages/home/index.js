import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout'

const Homepage = () => {
    return (
        <MainLayout>
            <section className={styles.homepage}>
                <div className={styles.container}>
                    <h1>
                        Hi,<br/>
                        I'm <span className={styles.leter}>N</span>iki,
                        <br/>web developer
                    </h1>
                    <p>
                        Front End Developer / Drupal Developer / ReactJS / CMS specialist
                    </p>
                    <div className={styles.button}>
                        <a href="/contact">
                            Contact me!
                        </a>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Homepage