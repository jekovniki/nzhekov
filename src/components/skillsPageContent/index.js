import React from 'react';
import styles from './index.module.scss';

const SkillsPageContent = ({ image, title, children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.mainimage}><img src={image} /></div>
            <h1 className={styles.content}>{title}</h1>
            {children}
        </div>
    )
}

export default SkillsPageContent