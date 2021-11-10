import React, { useState } from 'react';
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
import project8 from '../../images/safelyleaveislam.png'
import project9 from '../../images/omegacanvas.png'
import greenpropertyFull from '../../images/greenproperty-page.webp'
import algecoFull from '../../images/algeco-page.webp'
import newcarFull from '../../images/newcarsuperstore-page.webp'
import oxnardFull from '../../images/oxnard-page.webp'
import paramjuteFull from '../../images/paramjute-page.webp'
import juteplanetFull from '../../images/juteplanet-page.webp'
import safelyleaveislamFull from '../../images/safelyleaveislam.webp'
import omegacanvasFull from '../../images/omegacanvas-page.webp'
 
const Projects = () => {
    
    const [isActiveGreen, setGreen] = useState("false");
    const ToggleClassGreen = () => {
        setGreen(!isActiveGreen);
    };

    const [isActiveAlgeco, setAlgeco] = useState("false");
    const ToggleClassAlgeco = () => {
        setAlgeco(!isActiveAlgeco);
    };

    const [isActiveNewCar, setNewCar] = useState("false");
    const ToggleClassNewCar = () => {
        setNewCar(!isActiveNewCar);
    };
    
    const [isActiveOxnard, setOxnard] = useState("false");
    const ToggleClassOxnard = () => {
        setOxnard(!isActiveOxnard);
    };

    const [isActiveParamjute, setParamjute] = useState("false");
    const ToggleClassParamjute = () => {
        setParamjute(!isActiveParamjute);
    };

    const [isActiveJuteplanet, setJuteplanet] = useState("false");
    const ToggleClassJuteplanet = () => {
        setJuteplanet(!isActiveJuteplanet);
    };

    const [isActiveLyubomislici, setLyubomislici] = useState("false");
    const ToggleClassLyubomislici = () => {
        setLyubomislici(!isActiveLyubomislici);
    };

    const [isActiveBook, setBook] = useState("false");
    const ToggleClassBook = () => {
        setBook(!isActiveBook);
    };

    const [isActiveOmegacanvas, setOmegacanvas] = useState("false");
    const ToggleClassOmegacanvas = () => {
        setOmegacanvas(!isActiveOmegacanvas);
    };

    return (
        <MainLayout>
            <div className={styles.holder}>
                <div className={styles.projects}>
                    <img src={project1} className={styles.img} 
                    alt="Green Property Investments" title="Green Property Investments"/>
                    <div className={styles.view} onClick={ToggleClassGreen}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project4} className={styles.img} 
                alt="Algeco Romania" title="Algeco Romania"/>
                    <div className={styles.view} onClick={ToggleClassAlgeco}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project2}  className={styles.img} 
                alt="New Car Superstore" title="New Car Superstore"/>
                    <div className={styles.view} onClick={ToggleClassNewCar}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project3} className={styles.img} 
                alt="Oxnard Auto Finance" title="Oxnard Auto Finance"/>
                    <div className={styles.view} onClick={ToggleClassOxnard}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project5} className={styles.img} 
                alt="Paramjute" title="Paramjute"/>
                    <div className={styles.view} onClick={ToggleClassParamjute}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project6} className={styles.img} 
                alt="Juteplanet" title="Juteplanet"/>
                    <div className={styles.view} onClick={ToggleClassJuteplanet}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project7} className={styles.img} 
                alt="Lyubomislici" title="Lyubomislici"/>
                    <div className={styles.view} onClick={ToggleClassLyubomislici}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project8} className={styles.img} 
                alt="Safelyleaveislam" title="Safelyleaveislam"/>
                    <div className={styles.view} onClick={ToggleClassBook}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.projects}>
                    <img src={project9} className={styles.img} 
                alt="Omegacanvas" title="Omegacanvas"/>
                    <div className={styles.view} onClick={ToggleClassOmegacanvas}><div><p>View<br/> project</p></div></div>
                    <div className={styles.content}>
                    </div>
                </div>
            </div>
            <div className={isActiveGreen ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassGreen}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={greenpropertyFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Green Property Investments</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveAlgeco ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassAlgeco}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={algecoFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Algeco Romania</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveNewCar ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassNewCar}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={newcarFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Newcar Superstore</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveOxnard ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassOxnard}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={oxnardFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Oxnard</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveParamjute ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassParamjute}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={paramjuteFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Paramjute</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveJuteplanet ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassJuteplanet}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={juteplanetFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Juteplanet</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveLyubomislici ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassLyubomislici}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={project7} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Lyubomislici</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveBook ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassBook}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={safelyleaveislamFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Safely Leave Islam</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className={isActiveOmegacanvas ? "overlay" : "overlay show"}>
                <div className={styles.close} onClick={ToggleClassOmegacanvas}>
                    <div className={styles.inner}>
                        <div className={styles.innerText}>Back</div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <img src={omegacanvasFull} className={styles.full}/>
                    <div className={styles.webInfo}>
                        <h2>Omegacanvas</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Projects