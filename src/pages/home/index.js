import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout'

const Homepage = () => {
    return (
        <div className={styles.home}>
            <MainLayout>
            <section className={styles.homepage}>
                <div className={styles.container}>
                    <h1>
                        <p className={styles.paragraph}>
                            <p className={styles.letter}>H</p>
                            <p className={styles.letter}>i</p>
                            <p className={styles.letter}>,</p>
                        </p>
                        <p className={styles.paragraph}>
                            <p className={styles.letter}>I</p><p className={styles.letter}>'</p>
                            <p className={styles.letter}>m</p> <p className={styles.letterMain}>N</p>
                            <p className={styles.letter}>i</p><p className={styles.letter}>k</p>
                            <p className={styles.letter}>i</p><p className={styles.letter}>,</p>
                        </p>
                        <p className={styles.paragraph}>
                            <p className={styles.letter}>w</p><p className={styles.letter}>e</p>
                            <p className={styles.letter}>b</p> <p className={styles.word}>developer</p>
                        </p>
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
        </div>
    )
}

export default Homepage