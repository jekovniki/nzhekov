import React from 'react';
import styles from './index.module.scss';

const SkillsPageContent = ({ image, title, children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.mainimage}><img src={image} /></div>
            <h2 className={styles.content}>{title}</h2>
            {children}
        </div>
    )
}

export default SkillsPageContent