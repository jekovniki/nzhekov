import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsReact = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="MySQL" image="https://www.pngall.com/wp-content/uploads/2016/05/MySQL-Logo.png">
            <p>
                For the database management system, I use MySQL. I have used it from the beginning of my journey as a web developer.
                As a tool, it goes great with PHP and the other web development tools that I'm using.
            </p>
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsReact