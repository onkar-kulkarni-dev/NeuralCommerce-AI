import React from 'react';
import styles from './Navbar.module.scss';
import logoUrl from '../../../assets/neuralcommerce-ai.svg';

const Navbar = () => {
    const data = [
        { id: 1, name: 'Capabilities', link: '/capabilities' },
        { id: 2, name: 'The Engine', link: '/engine' },
        { id: 3, name: 'Enterprise', link: '/enterprise' },
        { id: 4, name: 'Pricing', link: '/pricing' },
    ]
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logoUrl} alt="NeuralCommerce AI" className={styles.logo} />
                <p>NeuralCommerce AI</p>
            </div>
            {/* <div className={styles.navLinks}>
                {data.map((item) => (
                    <a key={item.id} href={item.link} className={styles.navLink}>{item.name}</a>
                ))}
            </div> */}
            <div className={styles.authButtons}>
                <button>Sign In</button>
                <button className={styles.getStarted}>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar