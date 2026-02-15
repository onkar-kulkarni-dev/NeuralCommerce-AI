import { useState } from 'react';
import styles from './Pricing.module.scss';
import PricingToggle from '../../common/toggle/Toggle';

const Pricing = () => {
    const data = [
        { id: 1, name: 'Starter', price: '$599/month', features: ['Basic AI optimization', 'Core analytics', 'Email support', 'Up to 10,000 orders/month'], buttonText: 'Get Started' },
        { id: 2, name: 'Growth', price: '$1,499/month', features: ['Advanced Neural engine', 'custom KPI dashboard', '24/7 priority support', 'Up to 100,000 orders/month', 'dedicated account manager'], buttonText: 'Start growth trial' },
        { id: 3, name: 'Enterprise', price: 'Contact us', features: ['Custom AI models', 'API Customization', 'on-site implementation', 'Unlimited scale', 'SLA guarantee'], buttonText: 'Contact Sales' },
    ]
    const [yearly, setYearly] = useState(false);

    const calculatePrice = (price: string) => {
        if (yearly && price.includes('/month')) {
            const monthlyPrice = parseInt(price.replace(/[^0-9]/g, ''));
            const annualPrice = Math.round(monthlyPrice * 12 * 0.8); // 20% discount for annual billing
            return `$${annualPrice.toLocaleString()}/year`;
        } else {
            return price;
        }
        return price;
    }
    return (
        <section>
            <h2 className={styles.title}>Scalable Enterprise Pricing</h2>
            <PricingToggle yearly={yearly} setYearly={setYearly} />
            <div className={styles.grid}>
                {data.map(plan => (
                    <div key={plan.id} className={plan.name == 'Growth' ? styles.growthPlanContainer : styles.planContainer}>
                        <div>
                            {plan.name == 'Growth' && <p className={styles.mostPopular}>Most popular</p>}
                            <h3 className={styles.name}>{plan.name}</h3>
                            <p className={styles.price}>{calculatePrice(plan.price)}</p>
                            <ul>
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <button className={plan.name == 'Growth' ? styles.growthBtn : styles.btn}>{plan.buttonText}</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing
