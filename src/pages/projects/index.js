import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import project1 from '../../images/greenproperty1.png'
import projectLogo from '../../images/greenproperty-logo.png'
import project2 from '../../images/newcarsuperstore.png'
import project3 from '../../images/oxnardautofinance.png'
import project4 from '../../images/algeco-ro.png'
import project5 from '../../images/paramjute.png'
import project6 from '../../images/juteplanet.png'
import project7 from '../../images/lyubomislici.jpg'





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
                    <img src={project4} className={styles.img} 
                alt="Algeco Romania" title="Algeco Romania"/>
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
                <div className={styles.projects}>
                    <img src={project5} className={styles.img} 
                alt="Paramjute" title="Paramjute"/>
                    <div className={styles.view}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project6} className={styles.img} 
                alt="Juteplanet" title="Juteplanet"/>
                    <div className={styles.view}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project7} className={styles.img} 
                alt="Lyubomislici" title="Lyubomislici"/>
                    <div className={styles.view}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Projects