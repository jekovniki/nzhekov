import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import emailjs from 'emailjs-com';


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y2dgigo', 'template_yy5wdwc', form.current, 'user_vcnrgia9o76ckKFw1MlhQ')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    const [isSubmit, submit] = useState("false");
    const ToggleClassSubmit = () => {
        submit(!isSubmit);
    };

    return (
        <div className={isSubmit ? "form" : "submitted"}>
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.twoColumns}>
                    <input type="text" name="user_name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div className={styles.singleColumn}>
                    <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className={styles.singleColumn}>
                    <textarea name="message" placeholder="Message"/>
                </div>
                <div className={styles.singleColumnSend}>
                    <input type="submit" className={styles.send} value="Send message" onClick={ToggleClassSubmit} />
                </div>
            </form>
            <div className={styles.success}>
                <p>
                    Email was successfully send!
                </p>
            </div>
        </div>
    )
}

export default ContactForm