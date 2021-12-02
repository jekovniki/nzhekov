import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsReact = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="NodeJS" image="https://nodejs.org/static/images/logo.svg">
            <p>
                When it comes to coding something - Javascript is my language. I have used it from the start
                of my web development career. In the beginning - as a way to breathe life into the websites
                by creating dynamic elements for the websites.
            </p>
            <p>
                However, later I discovered SPA(Single Page Applications) and I completed 
                a <a href="/static/media/ReactJS.1b193957.jpeg" target="_blank">ReactJS course</a>. This expanded
                my Front-End skills and I started building websites and apps with ReactJS.
            </p>
            <p>
                Working with my colleagues at Finovation helped me to improve my Javascript skills. 
                As a full-stack developer, I started building servers and API's with NodeJS. I started to use 
                the Javascript not only as a frontend but as a backend tool as well.
            </p>
            <p>
                As much as I love Javascript, if I am going to do something in a NodeJS App - I will definitely prefer
                Typescript. I can't describe how much using types and interfaces improved me as a developer. Knowing
                what a function should get/return makes the code a lot more secure and reduces mistakes and errors.
            </p>
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsReact