import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import project1 from '../../images/greenproperty1.png'
import projectLogo from '../../images/greenproperty-logo.png'
import project2 from '../../images/newcarsuperstore.png'
import project3 from '../../images/oxnardautofinance.png'

const Projects = () => {
    return (
        <MainLayout>
            <div className={styles.holder}>
                <div className={styles.projects}>
                    <img src={project1} className={styles.img} 
                    alt="Green Property Investments" title="Green Property Investments"/>
                    <div className={styles.view}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project2}  className={styles.img} 
                alt="New Car Superstore" title="New Car Superstore"/>
                    <div className={styles.view}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project3} className={styles.img} 
                alt="Oxnard Auto Finance" title="Oxnard Auto Finance"/>
                    <div className={styles.view}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Projects