import React from "react";
import styles from './Hero.module.scss';

export const BrandsRibbon = () => {
    const data = [
        { id: 1, name: 'NVIDIA' },
        { id: 2, name: 'Stripe' },
        { id: 3, name: 'Anthropic' },
        { id: 4, name: 'OpenAI' },
        { id: 5, name: 'Vercel' },
        { id: 6, name: 'AWS' },
    ]
    return (
        <div className={styles.brandsRibbon}>
            <p className={styles.brandsTitle}>Trusted by industry leaders</p>
            <div className={styles.brandsContainer}>
                {data.map((item) => (
                    <div key={item.id} className={styles.brand}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default BrandsRibbon