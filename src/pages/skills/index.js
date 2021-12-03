import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';

const Skills = () => {
    return (
            <SkillsPageLayout>
                <SkillsPageContent title="Skills &amp; Experience">
                <p>
                    Since beginning my journey as a developer nearly 6 years ago, I've done remote work for 
                    clients all over the world to create web products for both business and consumer use. I was
                    able to work for big international companies full-time.
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
                    Visit my <a href="https://www.linkedin.com/in/nikolay-zhekov-529547167/" target="_blank">LinkedIn profile</a> for more details or just <a href="/contact">contact me</a>.
                </p>
                </SkillsPageContent>
            </SkillsPageLayout>
    )
}

export default Skills