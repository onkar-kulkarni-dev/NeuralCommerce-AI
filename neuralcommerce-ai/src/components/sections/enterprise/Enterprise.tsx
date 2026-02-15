import styles from './Enterprise.module.scss';
import { MdKeyboardArrowRight } from "react-icons/md";
import InfraImg from '../../../assets/newinfra.png'

const Enterprise = () => {
    const data = [
        { id: 1, name: 'Multi-region deployment', desc: 'Low latency global infrastructure.' },
        { id: 2, name: 'Advanced security protocols', desc: 'ISO 27001 & SOC2 Type II compliant.' },
        { id: 3, name: 'SLA-backed uptime', desc: '99.99% guaranteed system availability.' },
        { id: 4, name: 'Dedicated AI optimization models', desc: 'Custom training for your specific domain.' },
        { id: 5, name: 'Scalable microservices arch', desc: 'Highly modular and easily extensible.' },
    ]
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Enterprise-Grade Infrastructure</h2>
            <div className={styles.content}>
                <div>
                    {data.map(item => (
                        <div key={item.id} className={styles.listContainer}>
                            <MdKeyboardArrowRight />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={InfraImg} alt="Enterprise" className={styles.image} />
            </div>
        </section>
    )
}

export default Enterprise
