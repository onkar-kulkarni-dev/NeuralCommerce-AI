import styles from './Capabilities.module.scss';
import { LuBrainCircuit } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { GoShieldCheck } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";


const Capabilities = () => {
    const data = [
        { id: 1, name: 'Neural Personalization', desc: 'AI models that learn and adapt to every shopper journey in real-time.', icon: <LuBrainCircuit size={40} color='oklch(78.9% 0.154 211.53)' /> },
        { id: 2, name: 'Predictive Logistics', desc: 'Anticipate demand surges before they happen with global supply chain intelligence.', icon: <FiShoppingCart size={40} color='oklch(78.9% 0.154 211.53)' /> },
        { id: 3, name: 'Real-time Analytics', desc: 'Multi-dimensional data visualization with actionable business insights.', icon: <VscGraph size={40} color='oklch(78.9% 0.154 211.53)' /> },
        { id: 4, name: 'Enterprise Security', desc: 'Bank-grade encryption and autonomous fraud prevention protocols.', icon: <GoShieldCheck size={40} color='oklch(78.9% 0.154 211.53)' /> },
        { id: 5, name: 'Instant Integration', desc: 'Connect to your existing tech stack with 1-click cloud connectors.', icon: <BsLightningCharge size={40} color='oklch(78.9% 0.154 211.53)' /> },
        { id: 6, name: 'Global Scalability', desc: 'Edge-computed architecture ensuring sub-100ms response times worldwide.', icon: <RiGlobalLine size={40} color='oklch(78.9% 0.154 211.53)' /> },
    ]
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Autonomous Intelligence for Modern Commerce</h2>
            <p className={styles.subTitle}>Our platform replaces fragmented legacy tools with a unified AI core that drives growth automatically.</p>
            <div className={styles.grid}>
                {data.map(item => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.icon}>{item.icon}</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Capabilities
