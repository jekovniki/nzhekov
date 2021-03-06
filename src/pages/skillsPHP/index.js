import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsReact = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="PHP" image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png">
            <p>
                Since Drupal and WordPress are PHP-based - working properly with them requires some knowledge in PHP. So I have worked with PHP
                from the beginning. However, I use it mostly for the core functionalities of the CMS, some fields' inserting and etc. 
            </p>
            <p>
                Most of the time if something can be written with Javascript, I prefer Javascript.
            </p>
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsReact