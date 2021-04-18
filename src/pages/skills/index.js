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
                                <div className={styles.tile}>
                                    <h3>
                                        Expert in the regulatory compliance department
                                    </h3>
                                    <h5>EF Asset Managemnt JSC.</h5>
                                    <p>
                                        09/2020 - Present
                                    </p>
                                    <p>Leading management company.</p>
                                </div>
                                <div className={styles.tile}>
                                    <h3>
                                        Website administrator
                                    </h3>
                                    <h5>Eurostar-BG Ltd.</h5>
                                    <p>
                                        01/2020 - 09/2020
                                    </p>
                                    <p>Content management company.</p>
                                </div>
                                <div className={styles.tile}>
                                    <h3>
                                        Website administrator
                                    </h3>
                                    <h5>Modo Ltd.</h5>
                                    <p>
                                        08/2016 - 12/2019
                                    </p>
                                    <p>Content management company.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Skills