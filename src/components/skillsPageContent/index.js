import React from 'react';
import styles from './index.module.scss';

const SkillsPageContent = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.content}>Skills &amp; Experience</h2>
            <p className={styles.content}>
                Since beginning my journey as a freelance developer nearly 10 years ago, 
                I've done remote work for agencies, consulted for startups, and collaborated with talented 
                people to create web products for both business and consumer use.
            </p>
            <p className={styles.content}>
                I create successful responsive websites that are fast, easy to use, and built with best practices.
                The main area of my expertise is front-end developmnet, HTML, CSS, JS, building small and medium
                web apps, custom plugins, features, animations, and coding interactive layouts.
            </p>
            <p className={styles.content}>
                I also have full-stack developer experience with popular open-source CMS like (Wordpress, Drupal,
                Adobe Experience Manager, Typo3, Shopify, Shopware and others).
            </p>
            <p className={styles.content}>
                Visit my LinkedIn profile for more details or just contact me.
            </p>
        </div>
    )
}

export default SkillsPageContent