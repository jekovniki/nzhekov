import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsHTML = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="HTML" image="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMzAgMCA1MTIgNTEyI
                iB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0wIDAgMzEuODAwNz
                gxIDQ0OC4xMDE1NjIgMTk0LjM5ODQzOCA2My44OTg0MzggMTk0LjM5ODQzNy02My44OTg0MzggMzE
                uODAwNzgyLTQ0OC4xMDE1NjJ6bTAgMCIgZmlsbD0iI2ZmNzgxNiIvPjxwYXRoIGQ9Im00NTIuMzk4N
                DM4IDAtMzEuODAwNzgyIDQ0OC4xMDE1NjItMTk0LjM5ODQzNyA2My44OTg0Mzh2LTUxMnptMCAwIiB
                maWxsPSIjZmY0YjAwIi8+PHBhdGggZD0ibTM2Ny41IDEzNmgtMjIyLjMwMDc4MWw1LjM5ODQzNyA3NW
                gyMTEuNTAzOTA2bC0xMi45MDIzNDMgMTgxLjU5NzY1Ni0xMjMgNDEuMTAxNTYzLTEyMy00MS4xMDE1N
                jMtNC4xOTkyMTktNjAuNTk3NjU2aDYwbDEuMTk5MjE5IDE2LjUgNjYgMjEuODk4NDM4IDY2LTIxLjg5O
                DQzOCA1LjM5ODQzNy03Ny41aC0yMDMuMDk3NjU2bC0xMy44MDA3ODEtMTk1aDI5MXptMCAwIiBmaWxsPS
                IjZWNlY2YxIi8+PGcgZmlsbD0iI2UyZTJlNyI+PHBhdGggZD0ibTM2Mi4xMDE1NjIgMjExLTEyLjkwMjM
                0MyAxODEuNTk3NjU2LTEyMyA0MS4xMDE1NjN2LTYzLjMwMDc4MWw2Ni0yMS44OTg0MzggNS4zOTg0Mzct
                NzcuNWgtNzEuMzk4NDM3di02MHptMCAwIi8+PHBhdGggZD0ibTM3MS42OTkyMTkgNzYtNC4xOTkyMTkgN
                jBoLTE0MS4zMDA3ODF2LTYwem0wIDAiLz48L2c+PC9zdmc+">
            <p>
                HTML and CSS are the backbone of web development. Being web developer, I always try
                to follow the best practices and to use the newest technology.
            </p>
            <p>
                I try to keep the HTML of a website as clean as possible and try to use HTML5 tags as much as I can.
                This way the websites are light and SEO friendly.
            </p>
            <p>
                About the CSS, most of the time I use SASS and compile it to CSS. However I have no problems using both.
                I try to keep the idea of typing as little CSS as possible. Most of the time I'm building my websites
                mobile first when using Flexbox. Apart from that I use Grid as well.
            </p>
            <p>I don't stick to one technology, I try to be as versatile as I can.</p>
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsHTML