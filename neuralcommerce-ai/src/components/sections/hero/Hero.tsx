import GradientProgressBar from '../../common/progressbar/Progressbar';
import BrandsRibbon from './BrandsRibbon';
import styles from './Hero.module.scss';
import { TbActivityHeartbeat } from "react-icons/tb";


const Hero = () => {
    const data = [
        { label: 'Neural Node 1', percentage: 75 },
        { label: 'Neural Node 2', percentage: 80 },
        { label: 'Neural Node 3', percentage: 85 },
        { label: 'Neural Node 4', percentage: 90 },
    ]
    return (
        <section className={styles.container}>
            <div className={styles.contentContainer}>
                <div>
                    <p className={styles.heroTip}>next-gen ai commerce</p>
                    <h2 className={styles.title}>Powering Intelligent <span>E-Commerce at Scale</span></h2>
                    <p className={styles.subTitle}>Autonomous intelligence that optimizes conversion, logistics, and customer experience in real-time. Built for the modern enterprise.</p>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.primaryButton}>Start Free Trial</button>
                        <button className={styles.secondaryButton}>Watch Demo</button>
                    </div>
                </div>
                <div className={styles.terminalContainer}>
                    <div className={styles.terminalHeader}>
                        <TbActivityHeartbeat color='cyan' size={32} />
                        <p>core system active</p>
                    </div>
                    {data.map(({ label, percentage }) => (
                        <GradientProgressBar key={label} label={label} percentage={percentage} />
                    ))}
                </div>
            </div>
            <BrandsRibbon />
        </section>
    )
}

export default Hero
