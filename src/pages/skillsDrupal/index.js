import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsDrupal = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="Drupal" image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/
                                Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIF
                                ZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwO
                                i8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweC
                                IgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjEzNiA1MTIuMTM2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDA
                                gMCA1MTIuMTM2IDUxMi4xMzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwM0E5RjQ7IiBk
                                PSJNMzQ2LjA3Myw4MS4xNDhjLTM0LjQxMi0yMS4zMDctNjUuNjIxLTQ3LjM5NS05Mi42OTMtNzcuNDgzYy0yLjM4NC0yLjY4MS
                                01LjkzMi00LjAyMS05LjQ5My0zLjU4NA0KCWMtMy41NjEsMC41MS02LjYyNSwyLjc4LTguMTQ5LDYuMDM3Yy0xMy43MTQsMjguN
                                jgzLTM0LjQ5Nyw1My40MDgtNjAuMzk1LDcxLjg1MUM4NC42NjUsMTA4LjI3NiwyMi45NjcsMTkyLjQ4NiwyMS40MDEsMjg4LjA4M
                                Q0KCWMzLjE1NiwxMjYuNTY0LDEwOC4wOTMsMjI2LjczMSwyMzQuNjY3LDIyNGMxMjYuNTc0LDIuNzMxLDIzMS41MTEtOTcuNDM2LD
                                IzNC42NjctMjI0DQoJQzQ4OS44NDEsMTk1Ljg1OSw0MzIuMzc5LDExMy42NjIsMzQ2LjA3Myw4MS4xNDh6Ii8+DQo8Zz4NCgk8cGF0
                                aCBzdHlsZT0iZmlsbDojRkFGQUZBOyIgZD0iTTQwNS40MDEsMjU2LjA4MWMtMjEuMTExLDEuNzU4LTQwLjc2OCwxMS40NjQtNTQuOTk
                                3LDI3LjE1Nw0KCQljLTcuODkzLDYuNC0xNy40OTMsMTQuMTIzLTI5LjUwNCwyMi45OTdjLTUzLjk5NS01MS4wNzItODcuNzAxLTcxLj
                                Q4OC0xMTguMTY1LTcxLjQ4OGMtNjUuOTYzLDAtOTYsNDQuMjI0LTk2LDg1LjMzMw0KCQljMCw0Ny4xMjgsMzguMjA1LDg1LjMzMyw4N
                                S4zMzMsODUuMzMzYzM5LjY4LDAsMTAyLjg2OS01MC4wMDUsMTI2LjQ4NS02OS45MzFjMTUuODUxLDE5LjczMyw1MC43NzMsNTkuMjY0L
                                Dc2LjE4MSw1OS4yNjQNCgkJYzMzLjA0NSwwLDUzLjMzMy00My40NzcsNTMuMzMzLTc0LjY2N0M0NDguMDY4LDI2Mi4zMTEsNDE4LjIwMS
                                wyNTYuMDgxLDQwNS40MDEsMjU2LjA4MXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkFGQUZBOyIgZD0iTTMyOS40NzYsNDI2Ljc0OGM
                                wLjQyNiwwLjAzMSwwLjg1NCwwLjAzMSwxLjI4LDBjNS40MzMsMC4wMzgsMTAuMDI2LTQuMDEzLDEwLjY2Ny05LjQwOA0KCQljMS4zODEtO
                                C4zODEtMC45NTYtMTYuOTQ3LTYuNC0yMy40NjdjLTYuNjYzLTYuOTA2LTE2LjA1MS0xMC40OTQtMjUuNjIxLTkuNzkyYy0yMC40NTEtMS4y
                                OC00MC4wMSw4LjU0LTUxLjIsMjUuNzA3DQoJCWMtMy4zNTQsNC44NDMtMi4xNDgsMTEuNDg4LDIuNjk1LDE0Ljg0MmM0LjY2OSwzLjIzNCwx
                                MS4wNTMsMi4yNDIsMTQuNTIxLTIuMjU2YzcuMTQ0LTExLjY5NiwyMC4zNDMtMTguMjgzLDMzLjk4NC0xNi45Ng0KCQljMy4zNzQtMC4zNzgs
                                Ni43NjUsMC41NTMsOS40NzIsMi42MDNjMS4yNzgsMi4wMjIsMS43MzYsNC40NTcsMS4yOCw2LjgwNWMtMC43MzYsNS44NDUsMy40MDUsMTEuM
                                TgsOS4yNSwxMS45MTYNCgkJQzMyOS40MjcsNDI2Ljc0MiwzMjkuNDUyLDQyNi43NDUsMzI5LjQ3Niw0MjYuNzQ4eiIvPg0KCTxwYXRoIHN0eWx
                                lPSJmaWxsOiNGQUZBRkE7IiBkPSJNMzMzLjg0OSw0NDAuNTI5Yy0xNy4wNjcsMTcuMDY3LTg3LjgwOCwxNC40NjQtMTAyLjI1MSwwYy00LjIzN
                                y00LjA5My0xMC45OS0zLjk3NS0xNS4wODMsMC4yNjINCgkJYy0zLjk5Myw0LjEzNC0zLjk5MywxMC42ODcsMCwxNC44MjFjMTkuOTk0LDEzLjQ
                                2Nyw0My45MjQsMTkuODQ0LDY3Ljk2OCwxOC4xMTJjMjIuOTUsMS43ODcsNDUuNzg5LTQuNjMyLDY0LjQ0OC0xOC4xMTINCgkJYzQuMDkzLTQu
                                MjM3LDMuOTc1LTEwLjk5LTAuMjYyLTE1LjA4M0MzNDQuNTM3LDQzNi41MzcsMzM3Ljk4Myw0MzYuNTM3LDMzMy44NDksNDQwLjUyOUwzMzMuO
                                DQ5LDQ0MC41Mjl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQ
                                o8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4N
                                CjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==">
            <p>
                Drupal is the CMS that started my journey in web development. I started working with it in 2015
                when I completed the <a href="/static/media/Drupal7.3232f96e.jpg" target="_blank">Drupal 
                Site Building course</a> in Software University in Bulgaria. A year later when Drupal 8 got more stable I completed the 
                <a href="/static/media/Drupal8.a6d529e9.jpeg" target="_blank">Drupal 8 Site Building course</a> 
                as well.
            </p>
            <p>
                I build custom themes for Drupal, so the websites for my clients can be as quick and light as
                possible. All the websites have SEO optimization and all the themes are responsive.
            </p>
            <p>
                I make sure that the websites are easy to manage by my clients. So after my work, they can add 
                content and use them as they need.
            </p>
            <p>
                Most of my freelance projects are Drupal 6, Drupal 7, and Drupal 8 websites. So this is my go-to CMS. Visit the projects page so you can see some of my work with Drupal. 
            </p>
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsDrupal