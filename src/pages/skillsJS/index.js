import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsJS = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="Javascript" image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvL
                    Tg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG
                    9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSI
                    xLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxp
                    bms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94P
                    SIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbD
                    pzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U0QkE0MjsiIGQ9Ik01MTIsMjU2YzA
                    sMzMuMzUzLTYuMzc0LDY1LjIxMi0xNy45ODMsOTQuNDM4Yy02LjIwNywxNS42MzItMTMuOTA4LDMwLjUx
                    MS0yMi45MzYsNDQuNDUNCgljLTExLjI0MywxNy4zODctMjQuNTQ1LDMzLjMyMi0zOS41NDksNDcuNDQ5Y
                    y04Ljc4OCw4LjI4Ni0xOC4xNSwxNS45NDUtMjguMDM1LDIyLjkyNUMzNjEuODA2LDQ5NC43MDcsMzEwLj
                    kzLDUxMiwyNTYsNTEyDQoJcy0xMDUuODA2LTE3LjI5My0xNDcuNDk4LTQ2LjczOGMtMTIuMzcyLTguNzM
                    1LTIzLjkyOC0xOC41MjYtMzQuNTM0LTI5LjI2OEMyOC4yMzMsMzg5Ljc1NywwLDMyNi4xNjUsMCwyNTYN
                    CglTMjguMjMzLDEyMi4yNDMsNzMuOTY4LDc2LjAwNmMxMS4yMzMtMTEuMzY4LDIzLjUzMS0yMS42ODIsM
                    zYuNzI4LTMwLjc5M0MxNTEuOTcsMTYuNjk3LDIwMi4wMzEsMCwyNTYsMA0KCXMxMDQuMDMsMTYuNjk3LD
                    E0NS4zMDQsNDUuMjEzYzEwLjA4Myw2Ljk0OSwxOS42MzQsMTQuNjE4LDI4LjU4OCwyMi45MjVjMTUuNjg
                    0LDE0LjUwMywyOS41MzksMzAuOTYsNDEuMTksNDguOTc0DQoJYzkuMDI4LDEzLjkzOSwxNi43MjksMjgu
                    ODE4LDIyLjkzNiw0NC40NUM1MDUuNjI2LDE5MC43ODgsNTEyLDIyMi42NDcsNTEyLDI1NnoiLz4NCjxnP
                    g0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMkYyRjI7IiBkPSJNMzkxLjA1LDIzMi45N2MtNy4xMjUtMjAuNj
                    Y0LTM2LjM0MS0yMC42NjQtNDIuMDQtMy41NjNjLTUuNywxNy4xMDEsMTMuNTM5LDI3LjA3Niw0My40NjY
                    sMzcuMDUzDQoJCWMyOS45MjcsOS45NzYsNDguNDU0LDM2LjM0MSw0NC44OTEsNTkuODU0cy0xMy41Mzks
                    NTQuMTU0LTcyLjY4LDU0LjE1NGMtMzYuOTYzLDAtNTcuNTA1LTIzLjEwMy02Ny43MTQtNDAuNDI5bDMzL
                    jUxMS0yMC4xMzgNCgkJYzAsMCwxMS40MDEsMjQuMjI3LDMyLjc3NywyNC4yMjdjMjEuMzc3LDAsMjkuOT
                    I3LTcuMTI1LDI5LjkyNy0yMy41MTRjMC0xOS45NTEtNjkuMTE4LTI3LjA3Ni03OS44MDYtNjEuMjc5DQo
                    JCXMzLjU2My04Mi42NTYsNTMuNDQxLTc5LjA5NGMzMS4xNzUsMi4yMjcsNDguNzEsMTcuNTM1LDU3LjQ3
                    OCwyOC43MDNMMzkxLjA1LDIzMi45N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjJGMkYyOyIgZD0iT
                    TIzNS43MTQsMTgzLjgwNWMwLDAsMCwxMjAuNDIxLDAsMTM2LjgxYzAsMTYuMzg4LTE0LjI1MSwyNC45NC
                    0yOC41MDIsMjIuMDg5DQoJCWMtMTQuMjUxLTIuODUtMjAuNjY0LTE5Ljk1MS0yMC42NjQtMTkuOTUxbC0z
                    Mi43NzcsMjIuMDg5YzAsMCw3LjEyNSwzMi43NzcsNTIuMDE2LDM1LjYyOA0KCQljNDQuODkxLDIuODUsNz
                    AuNTQyLTI0LjIyNyw3MC41NDItNDcuMDI5czAtMTQ5LjYzNiwwLTE0OS42MzZMMjM1LjcxNCwxODMuODA1
                    TDIzNS43MTQsMTgzLjgwNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjJGMkYyOyIgZD0iTTczLjk2OC
                    w0NS4yMTN2MzkwLjc4MWMxMC42MDYsMTAuNzQyLDIyLjE2MiwyMC41MzIsMzQuNTM0LDI5LjI2OGgyOTQu
                    OTk2DQoJCWM5Ljg4NS02Ljk4LDE5LjI0Ny0xNC42MzksMjguMDM1LTIyLjkyNUg5Ni44OTNWNjguMTM4aD
                    M3NC4xODh2MzI2Ljc1YzkuMDI4LTEzLjkzOSwxNi43MjktMjguODE4LDIyLjkzNi00NC40NVY0NS4yMTNI
                    NzMuOTY4eiIvPg0KPC9nPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojM0Y0QTQzOyIgY3g9Ijg3Ljg1NSIgY3
                    k9IjMzOS4xNDMiIHI9IjQwLjYxNSIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+
                    DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg
                    0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0K
                    PC9nPg0KPC9zdmc+DQo=">
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

export default SkillsJS