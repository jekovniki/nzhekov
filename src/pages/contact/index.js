import React from 'react';
import styles from './index.module.scss';
import MainLayout from '../../components/mainLayout';
import ContactForm from '../../components/contactForm';

const Contact = () => {
    return (
        <MainLayout>
            <section className={styles.page}>
                <div className={styles.text}>
                    <div className={styles.container}>
                        <h1>
                            Contact me
                        </h1>
                        <p>
                            I’m interested in freelance opportunities – especially ambitious projects. 
                            However, if you have other request or question, don’t hesitate to use the form.
                        </p>
                    </div>
                </div>
                <div className={styles.animation}>
                    <div className={styles.container}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Contact