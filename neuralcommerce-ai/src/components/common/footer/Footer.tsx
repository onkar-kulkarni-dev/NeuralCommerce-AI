import styles from './Footer.module.scss';
import logoUrl from '../../../assets/neuralcommerce-ai.svg';

const Footer = () => {
    const data = [
        { id: 1, name: 'Platform', links: ['Features', 'Security', 'Integrations', 'Roadmap'] },
        { id: 2, name: 'Resources', links: ['Documentation', 'API Reference', 'Support', 'Blog'] },
        { id: 3, name: 'Legal', links: ['Privacy policy', 'Terms of service', 'Cookie policy'] },
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Column 1 */}
                <div className={styles.logoContainer}>
                    <div className={styles.logoWrapper}>
                        <img src={logoUrl} alt="NeuralCommerce AI" className={styles.logo} />
                        <p>NeuralCommerce AI</p>
                    </div>
                    <p className={styles.tagLine}>
                        The ultimate AI operating system for modern e-commerce enterprises.
                        Built for the future of trade.
                    </p>
                </div>

                {/* Columns 2–4 */}
                {data.map(section => (
                    <div key={section.id} className={styles.linkSection}>
                        <h4 className={styles.name}>{section.name}</h4>
                        <ul>
                            {section.links.map((link, index) => (
                                <li key={index} className={styles.link}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            <p className={styles.copyrights}>
                &copy; 2026 NeuralCommerce AI. All rights reserved.
            </p>
        </footer>
    );

}

export default Footer