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
                    
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default About