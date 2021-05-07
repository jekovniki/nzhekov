import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import SkillsPageRight from '../../components/skillsPageRight';


const SkillsPageLayout = ({children}) => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    {children}
                </div>
                <div className={styles.animation}>
                    <div className={styles.container}>
                        <SkillsPageRight />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default SkillsPageLayout