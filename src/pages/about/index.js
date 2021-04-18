import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';

const About = () => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    <div className={styles.container}>
                        <h2>
                            Me, Myself &amp; I
                        </h2>
                        <p>
                            I'm a Front-End Developer located in Bulgaria. I have a serious passion for UI effects, animations
                            and creative intuitive, dynamic user experiences.
                        </p>
                        <p>
                            Well-organised person, problem solver, independent employee with high attention to detail. Fan to all kinds
                            of sports(from ice hockey to motorsports), outdoor activities, video games, TV series and history books.
                        </p>
                        <p>
                            Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                        </p>
                    </div>
                </div>
                <div className={styles.animation}>
                    <div className={styles.container}>
                        <div className={styles.skills}>
                            <div className={styles.frontend}>
                                Front-end
                            </div>
                            <div className={styles.backend}>
                                Back-end
                            </div>
                            <div className={styles.react}>
                                ReactJS
                            </div>
                            <div className={styles.drupal}>
                                Drupal
                            </div>
                        </div>
                        <div className={styles.certificates}>
                            <div className={styles.pdf}>
                                ReactJS - June 2020
                            </div>
                            <div className={styles.pdf}>
                                Drupal 8 Site Building - October 2016
                            </div>
                            <div className={styles.pdf}>
                                Drupal Site Building - September 2015
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default About