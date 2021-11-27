import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import SimpleMap from '../../components/googleMaps'

const Contact = () => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    <div className={styles.container}>
                        <h2>
                            Contact me
                        </h2>
                        <p>
                            I’m interested in freelance opportunities – especially ambitious projects. 
                            However, if you have other request or question, don’t hesitate to use the form.
                        </p>
                    </div>
                </div>
                <div className={styles.animation}>
                    <div className={styles.container}>
                        <SimpleMap />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Contact