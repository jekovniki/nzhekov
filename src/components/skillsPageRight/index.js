import React from 'react';
import styles from './index.module.scss';

const SkillsPageRight = () => {
    return (
        <div className={styles.rightColumn}>
            <div className={styles.skills}>
                <a className={styles['drupal']} href="/skills/drupal">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/
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
                                CjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                                <p>
                                    <strong>Drupal 7, Drupal 8 and Drupal 9</strong>
                                </p>
                            </a>
                            <a href="/skills" className={styles['html']}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMzAgMCA1MTIgNTEyI
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
                                jBoLTE0MS4zMDA3ODF2LTYwem0wIDAiLz48L2c+PC9zdmc+" />
                                <p>HTML</p>
                            </a>
                            <a href="/skills" className={styles['cssandscss']}>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLT
                                g4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9y
                                dCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxL
                                jEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms
                                9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwI
                                DAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGF
                                jZT0icHJlc2VydmUiPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzIxOTZGMzsiIHBvaW50cz0iMzIsMCA3M
                                i44LDQ2MC44IDI1Niw1MTIgNDM5LjEzNiw0NjAuODMyIDQ4MCwwICIvPg0KPHBvbHlnb24gc3R5bGU9ImZ
                                pbGw6I0ZBRkFGQTsiIHBvaW50cz0iMzkyLjc2OCwxNTAuNjg4IDM4Ny42MTYsMjA4LjU3NiAzNzIuMDY0L
                                DM4Mi4xMTIgMjU2LDQxNC4yMDggMjU1LjkwNCw0MTQuMjQgDQoJMTM5LjkwNCwzODIuMTEyIDEzMS44MDgs
                                MjkxLjM2IDE4OC42NCwyOTEuMzYgMTkyLjg2NCwzMzguNDMyIDI1NS45MzYsMzU1LjQ1NiAyNTUuOTY4LD
                                M1NS40MjQgMzE5LjEzNiwzMzguNCAzMjcuNzQ0LDI1OS45NjggDQoJMTI5LjA4OCwyNjAuNTEyIDEyMy40
                                NTYsMjA2Ljg4IDMzMi41MTIsMjA0LjQxNiAzMzYuNzM2LDE0Ny4wMDggMTE3Ljg1NiwxNDcuNjE2IDExNC4
                                xNzYsOTQuMjA4IDI1Niw5NC4yMDggMzk3LjgyNCw5NC4yMDggIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg
                                0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KP
                                C9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn
                                Pg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                                <p>
                                    <strong>CSS</strong>
                                </p>
                            </a>
                            <a href="/skills" className={styles['react']}>
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91b
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
                                TE4IDI3LjE5NC0xMTIuNjYxeiIgZmlsbD0iIzFlYTdhOCIvPjwvZz48L2c+PC9zdmc+" />
                                <p>ReactJS</p>
                            </a>
                            <a href="/skills" className={styles['javascript']}>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvL
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
                                PC9nPg0KPC9zdmc+DQo=" />
                            </a>
                            <a href="/skills" className={styles['aem']}>
                                <img src="https://pluralsight2.imgix.net/paths/images/adobeexperiencemanager-f92d95ea47.png"/>
                                <p>
                                    <strong>
                                        Adobe<br/>Experience<br/>Manager
                                    </strong>
                                </p>
                            </a>
                            <a href="/skills" className={styles['wordpress']}>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/
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
                                PC9zdmc+DQo=" />
                                <p>
                                    Wordpress
                                </p>
                            </a>
                            <a href="/skills" className={styles['e-spirit']}>
                                <img src="https://yt3.ggpht.com/ytc/AAUvwnjTAoGdRsXCqqyJz0phVBXWYMz_K49XC1Ob9RuF=s900-c-k-c0x00ffffff-no-rj" />
                                <p>
                                    e-Spirit
                                </p>
                            </a>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.tiles}>
                                <div className={styles.tile}>
                                    <h3>
                                        Expert in the regulatory compliance department
                                    </h3>
                                    <h5>EF Asset Managemnt JSC.</h5>
                                    <p>
                                        09/2020 - Present
                                    </p>
                                    <p>Leading management company.</p>
                                </div>
                                <div className={styles.tile}>
                                    <h3>
                                        Website administrator
                                    </h3>
                                    <h5>Eurostar-BG Ltd.</h5>
                                    <p>
                                        01/2020 - 09/2020
                                    </p>
                                    <p>Content management company.</p>
                                </div>
                                <div className={styles.tile}>
                                    <h3>
                                        Website administrator
                                    </h3>
                                    <h5>Modo Ltd.</h5>
                                    <p>
                                        08/2016 - 12/2019
                                    </p>
                                    <p>Content management company.</p>
                                </div>
                            </div>
                        </div>
            </div>
    )
}

export default SkillsPageRight