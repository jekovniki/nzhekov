import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';

const Skills = () => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    <div className={styles.container}>
                        <h2>Skills &amp; Experience</h2>
                        <p>
                            Since beginning my journey as a freelance developer nearly 10 years ago, 
                            I've done remote work for agencies, consulted for startups, and collaborated with talented 
                            people to create web products for both business and consumer use.
                        </p>
                        <p>
                            I create successful responsive websites that are fast, easy to use, and built with best practices.
                            The main area of my expertise is front-end developmnet, HTML, CSS, JS, building small and medium
                            web apps, custom plugins, features, animations, and coding interactive layouts.
                        </p>
                        <p>
                            I also have full-stack developer experience with popular open-source CMS like (Wordpress, Drupal,
                            Adobe Experience Manager, Typo3, Shopify, Shopware and others).
                        </p>
                        <p>
                            Visit my LinkedIn profile for more details or just contact me.
                        </p>
                    </div>
                </div>
                <div className={styles.animation}>
                    <div className={styles.container}>
                        <div className={styles.skills}>
                            <div className={styles.charts}>
                                Test
                            </div>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.tiles}>
                                Test
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Skills