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
            <section className={styles.logo}>
                <svg x="0px" y="0px" width="33%" viewBox="0 0 23.631 23.631"><g><g>
		            <polygon 
                        points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969" 
                        />
		            <polygon 
                        points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662"
                    />
                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    <g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </section>
        </MainLayout>
        </div>
    )
}

export default Homepage