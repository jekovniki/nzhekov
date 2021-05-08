import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsWordpress = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="Wordpress" image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/
                                Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl
                                cnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDov
                                L3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiI
                                Hk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ0Ny42NzQgNDQ3LjY3NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwID
                                AgNDQ3LjY3NCA0NDcuNjc0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA3Njl
                                EOyIgZD0iTTEzNC4yODksMTM4LjE2aC0yNC43MjJsNjcuMzk5LDE5MC41MjFsMzcuNzMyLTEwNy44MjVsLTI5LjI1NC04Mi42
                                OTZIMTU5LjM2di0xOC4xNTRoMTE1LjUwOA0KCQl2MTguMTU0aC0yNy4wNDlsNjcuMzk4LDE5MC41MjFsMjQuMjI3LTY5LjIzN
                                GMzMS43ODEtODguNzAyLTI2LjA0OC0xMTYuMzMzLTI2LjA0OC0xMzYuMTI5czE2LjA0OC0zNS44NDMsMzUuODQzLTM1Ljg0Mw
                                0KCQljMS4wNzEsMCwyLjExMSwwLjA1OCwzLjEzLDAuMTUzYy0zMy41NDEtMzEuNjYzLTc4Ljc2OC01MS4wOC0xMjguNTM0LTU
                                xLjA4Yy02NS4wMjcsMC0xMjIuMzA2LDMzLjE0Ni0xNTUuODg0LDgzLjQ1OGg2Ni4zMzYNCgkJdjE4LjE1NEwxMzQuMjg5LDEzO
                                C4xNkwxMzQuMjg5LDEzOC4xNnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA3NjlEOyIgZD0iTTM2LjU0OCwyMjMuODM3YzA
                                sNzEuNzA0LDQwLjMwMiwxMzMuOTg2LDk5LjQ4MywxNjUuNDU4bC04NC41Mi0yMzguOTE5DQoJCUM0MS44ODMsMTcyLjkzMiwzN
                                i41NDgsMTk3Ljc2MSwzNi41NDgsMjIzLjgzN3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA3NjlEOyIgZD0iTTM4Ni44MzM
                                sMTMxLjU0N2MyLjY3OSwxNS43NzQsMS44NjgsMzMuNTAzLTIuMjQzLDUxLjMwMWgwLjc0NWwtMi44MzIsOC4wOTJsMCwwDQoJC
                                WMtMS42NzgsNS44NDMtMy43OTEsMTEuODItNi4xOTEsMTcuNjkzbC02NC40NDQsMTgwLjU0MWM1OS4wNTctMzEuNTEsOTkuMjU
                                2LTkzLjcyNSw5OS4yNTYtMTY1LjMzOA0KCQlDNDExLjEyNCwxOTAuMjc5LDQwMi4yOSwxNTguNzg4LDM4Ni44MzMsMTMxLjU0N
                                3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA3NjlEOyIgZD0iTTE2Ni4wNzUsNDAyLjAzM2MxOC4xOTUsNS44OTQsMzcuNjA
                                zLDkuMDkxLDU3Ljc2Miw5LjA5MWMxOS4yMjgsMCwzNy43NzctMi45MDIsNTUuMjM5LTguMjg1DQoJCWwtNTQuNzg0LTE1NC44N
                                jJMMTY2LjA3NSw0MDIuMDMzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDc2OUQ7IiBkPSJNMzgyLjExMyw2NS41NkMzMzk
                                uODM2LDIzLjI4MywyODMuNjI1LDAsMjIzLjgzNiwwUzEwNy44MzcsMjMuMjgzLDY1LjU2LDY1LjU2UzAsMTY0LjA0NywwLDIyM
                                y44MzcNCgkJYzAsNTkuNzg5LDIzLjI4MywxMTUuOTk5LDY1LjU2LDE1OC4yNzZzOTguNDg4LDY1LjU2LDE1OC4yNzcsNjUuNTZz
                                MTE1Ljk5OS0yMy4yODMsMTU4LjI3Ny02NS41Ng0KCQljNDIuMjc3LTQyLjI3Nyw2NS41Ni05OC40ODgsNjUuNTYtMTU4LjI3NkM0
                                NDcuNjczLDE2NC4wNDcsNDI0LjM5LDEwNy44MzcsMzgyLjExMyw2NS41NnogTTIyMy44MzYsNDMxLjg4Mw0KCQljLTExNC43MTcs
                                MC0yMDguMDQ2LTkzLjMyOS0yMDguMDQ2LTIwOC4wNDZTMTA5LjExOSwxNS43OSwyMjMuODM2LDE1Ljc5czIwOC4wNDYsOTMuMzMsM
                                jA4LjA0NiwyMDguMDQ3DQoJCVMzMzguNTU0LDQzMS44ODMsMjIzLjgzNiw0MzEuODgzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4
                                NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjx
                                nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K
                                PC9zdmc+DQo=">
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
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsWordpress