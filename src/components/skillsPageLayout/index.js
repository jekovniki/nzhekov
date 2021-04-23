import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import SkillsPageContent from '../../components/skillsPageContent';

const SkillsPageLayout = ({children}) => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    <SkillsPageContent />
                </div>
                <div className={styles.animation}>
                    <div className={styles.container}>
                        {children}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default SkillsPageLayout