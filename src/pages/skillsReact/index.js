import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsReact = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="ReactJS" image="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91b
                mQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD
                0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0xNzEuODY
                4IDI1NmMwLTEzMy4xODUgNDQuMzM5LTIyNiA4NC4xMzItMjI2bDE1LjI2LTE1Ljc4Mi0xNS4yNi0xNC4yM
                ThjLTMyLjk1OSAwLTYyLjc4IDI4LjM2OS04My45NjkgNzkuODgxLTE5LjQ1MSA0Ny4yODctMzAuMTYzIDE
                wOS44MzQtMzAuMTYzIDE3Ni4xMTlzMTAuNzEyIDEyOC44MzIgMzAuMTYzIDE3Ni4xMTljMjEuMTg5IDUxL
                jUxMiA1MS4wMSA3OS44ODEgODMuOTY5IDc5Ljg4MWwxNS4yNi0xNi45MDItMTUuMjYtMTMuMDk4Yy0zOS4
                3OTMgMC04NC4xMzItOTIuODE1LTg0LjEzMi0yMjZ6IiBmaWxsPSIjMWVhN2E4Ii8+PGc+PGc+PHBhdGggZD
                0ibTMzOS45NjkgNzkuODgxYy0yMS4xODktNTEuNTEyLTUxLjAxLTc5Ljg4MS04My45NjktNzkuODgxdjMwY
                zM5Ljc5MyAwIDg0LjEzMiA5Mi44MTUgODQuMTMyIDIyNnMtNDQuMzM5IDIyNi04NC4xMzIgMjI2djMwYzMy
                Ljk1OSAwIDYyLjc4LTI4LjM2OSA4My45NjktNzkuODgxIDE5LjQ1MS00Ny4yODcgMzAuMTYzLTEwOS44MzQ
                gMzAuMTYzLTE3Ni4xMTlzLTEwLjcxMi0xMjguODMyLTMwLjE2My0xNzYuMTE5eiIgZmlsbD0iIzFhODA5Mi
                IvPjwvZz48Zz48cGF0aCBkPSJtNDUyLjc0OSAyNzAuNDcxYy0zMS4yMjctNDAuNDg4LTgwLjAzOC04MS4wM
                zktMTM3LjQ0Mi0xMTQuMTgxLTE5LjY2Ny0xMS4zNTUtMzkuNTgzLTIxLjQtNTkuMzA3LTI5Ljk3NXYzMi44N
                zJjMTQuNDUgNi43MjcgMjkuMjY3IDE0LjQwMSA0NC4zMDcgMjMuMDg0IDU0LjA5MyAzMS4yMzEgOTkuNzk1I
                DY5LjA2MSAxMjguNjg3IDEwNi41MjIgMjUuNzIzIDMzLjM1MyAzNC44MjQgNjIuMjcxIDI0Ljk2OSA3OS4zM
                zktMTcuNTcgMzAuNDMyLTk5LjU5NSAyNy43MzUtMTk3Ljk2Mi0xOS4xNjV2MzMuMDA2YzM5LjM5MSAxNy41ND
                YgNzguMTUxIDI5LjI5MiAxMTIuNzc5IDMzLjkzNyAxMC44NTMgMS40NTYgMjEuMDk3IDIuMTc2IDMwLjY3OSAy
                LjE3NiAzOS4xNTkgMCA2Ny4yNDUtMTIuMDIyIDgwLjQ4NC0zNC45NTUgMTYuNDgtMjguNTQ0IDYuODIyLTY4Lj
                U1NC0yNy4xOTQtMTEyLjY2eiIgZmlsbD0iIzBkNTM2MCIvPjxwYXRoIGQ9Im0yMTYuMTc1IDMyNy45OTJjLTU0L
                jA5My0zMS4yMzEtOTkuNzk1LTY5LjA2MS0xMjguNjg3LTEwNi41MjItMjUuNzIzLTMzLjM1My0zNC44MjQtNjIu
                MjcxLTI0Ljk2OS03OS4zMzkgNy41MzItMTMuMDQ1IDI2LjkwNS0yMC4wMDQgNTQuMzM1LTIwLjAwNCAzNS41ODM
                gMCA4NC43MjcgMTEuNzI2IDEzOS4xNDYgMzcuMDZ2LTMyLjg3MmMtMzcuODQ2LTE2LjQ1NC03NC45ODMtMjcuND
                kzLTEwOC4yOTgtMzEuOTYyLTU1LjIwNC03LjQwNS05NC42ODQgNC4yMzUtMTExLjE2NCAzMi43NzlzLTYuODIyID
                Y4LjU1NCAyNy4xOTQgMTEyLjY2YzMxLjIyNyA0MC40ODggODAuMDM4IDgxLjAzOSAxMzcuNDQyIDExNC4xODEgM
                TguMTc5IDEwLjQ5NiAzNi41NyAxOS44NjkgNTQuODI1IDI4di0zMy4wMDZjLTEzLjAyNi02LjIxMi0yNi4zMzYt
                MTMuMTg4LTM5LjgyNC0yMC45NzV6IiBmaWxsPSIjMWE4MDkyIi8+PC9nPjxnPjxwYXRoIGQ9Im0xMTIuMzczIDM4
                OC4xMzVjLTI3LjQyMi0uMDAyLTQ2LjgwNC02Ljk2MS01NC4zMzUtMjAuMDA0LTkuODU0LTE3LjA2OC0uNzUzLTQ1
                Ljk4NiAyNC45NjktNzkuMzM5IDI4Ljg5MS0zNy40NjEgNzQuNTkzLTc1LjI5MSAxMjguNjg3LTEwNi41MjIgMTUu
                MDQtOC42ODMgMjkuODU3LTE2LjM1OCA0NC4zMDctMjMuMDg0bDE1LjI2LTIxLjkyOS0xNS4yNjEtMTAuOTQzYy0x
                OS43MjQgOC41NzUtMzkuNjM5IDE4LjYyLTU5LjMwNyAyOS45NzUtNTcuNDA1IDMzLjE0My0xMDYuMjE2IDczLjY5
                My0xMzcuNDQyIDExNC4xODEtMzQuMDE2IDQ0LjEwNi00My42NzQgODQuMTE3LTI3LjE5NCAxMTIuNjYgMTMuMjQxI
                DIyLjkzNCA0MS4zMjEgMzQuOTU1IDgwLjQ4NCAzNC45NTUgOS41NzkgMCAxOS44MjktLjcyIDMwLjY3OS0yLjE3Ni
                AzNC42MjktNC42NDYgNzMuMzg4LTE2LjM5MiAxMTIuNzc5LTMzLjkzN2wxNS4yNi0yOC4wNDItMTUuMjU5LTQuOTU
                2Yy01Ni4yMDUgMjYuOC0xMDcuMDY4IDM5LjE2NC0xNDMuNjI3IDM5LjE2MXoiIGZpbGw9IiMyOGQzZDUiLz48cGF0
                aCBkPSJtMjA5LjY1IDI1NmMwIDI1LjU1OCAyMC43OTIgNDYuMzUgNDYuMzUgNDYuMzVsMjAuOTExLTQ0Ljk1MS0yMC
                45MTEtNDcuNzQ5Yy0yNS41NTggMC00Ni4zNSAyMC43OTItNDYuMzUgNDYuMzV6IiBmaWxsPSIjZmNiZTAwIi8+PHBhd
                GggZD0ibTMwMi4zNSAyNTZjMC0yNS41NTgtMjAuNzkyLTQ2LjM1LTQ2LjM1LTQ2LjM1djkyLjdjMjUuNTU4IDAgNDYu
                MzUtMjAuNzkyIDQ2LjM1LTQ2LjM1eiIgZmlsbD0iI2ZmOTAwMCIvPjwvZz48cGF0aCBkPSJtNDc1LjQ2MSAxMjcuMTM
                xYy0xNi40NzktMjguNTQ0LTU1Ljk1NC00MC4xODUtMTExLjE2NC0zMi43NzktMzMuMzE0IDQuNDY5LTcwLjQ1MSAxNS
                41MDgtMTA4LjI5NyAzMS45NjJ2MzIuODcyYzU0LjQyMi0yNS4zMzUgMTAzLjU2Mi0zNy4wNTkgMTM5LjE0Ni0zNy4wN
                TkgMjcuNDIyIDAgNDYuODA0IDYuOTYxIDU0LjMzNSAyMC4wMDQgOS44NTQgMTcuMDY4Ljc1MyA0NS45ODYtMjQuOTY5
                IDc5LjMzOS0yOC44OTEgMzcuNDYxLTc0LjU5MyA3NS4yOTEtMTI4LjY4NyAxMDYuNTIyLTEzLjQ4OCA3Ljc4Ny0yNi4
                4IDE0Ljc3Mi0zOS44MjUgMjAuOTgzdjMyLjk5OGMxOC4yNTUtOC4xMzEgMzYuNjQ2LTE3LjUwNSA1NC44MjUtMjggNT
                cuNDA1LTMzLjE0MyAxMDYuMjE2LTczLjY5MyAxMzcuNDQyLTExNC4xODEgMzQuMDE3LTQ0LjEwNyA0My42NzQtODQuM
                TE4IDI3LjE5NC0xMTIuNjYxeiIgZmlsbD0iIzFlYTdhOCIvPjwvZz48L2c+PC9zdmc+">
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