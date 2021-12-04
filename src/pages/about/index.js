import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import drupal7 from '../../pdf/Drupal7.jpg'
import drupal8 from '../../pdf/Drupal8.jpeg'
import reactjs from '../../pdf/ReactJS.jpeg'
import drupal7pdf from '../../pdf/Drupal7.pdf'
import drupal8pdf from '../../pdf/Drupal8.pdf'
import reactjspdf from '../../pdf/ReactJS.pdf'

const About = () => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    <div className={styles.container}>
                        <h1>
                            Me, Myself &amp; I
                        </h1>
                        <p>
                            I'm a Full-Stack Developer located in Bulgaria. I have a serious passion for Front-End - UI effects, animations
                            and creating intuitive, dynamic user experiences.
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
                                <div>
                                    Front-end
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.lineFront}>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.backend}>
                                <div>
                                    Back-end
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.lineBack}>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.react}>
                                <div>
                                    ReactJS
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.lineReact}>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.node}>
                                <div>
                                    NodeJS
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.lineNode}>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.drupal}>
                                <div>Drupal</div>
                                <div className={styles.line}>
                                    <div className={styles.lineDrupal}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.certificates}>
                            <div className={styles.pdf}>
                                <img src={reactjs}  className={styles.img} 
                                alt="ReactJS Certificate" title="ReactJS Certificate"/>
                                ReactJS - June 2020
                            </div>
                            <div className={styles.pdf}>
                                <img src={drupal8}  className={styles.img} 
                                alt="Drupal 8" title="Drupal 8"/>
                                Drupal 8 Site Building - October 2016
                            </div>
                            <div className={styles.pdf}>
                                <img src={drupal7}  className={styles.img} 
                                alt="Drupal Site Building" title="Drupal Site Building"/>
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