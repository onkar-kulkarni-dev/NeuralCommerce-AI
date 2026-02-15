import React from "react";
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section>
            <h2 className={styles.title}>Deploy AI-Driven Commerce Today</h2>
            <p className={styles.desc}>Join 500+ enterprises scaling their operations with NeuralCommerce AI.</p>
            <p className={styles.desc}>No complex migration, just instant performance.</p>
            <button className={styles.btn}>Get Started Now</button>
        </section>
    )
}

export default Contact