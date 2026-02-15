import BrandsRibbon from './BrandsRibbon';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section>
            <p className={styles.heroTip}>next-gen ai commerce</p>
            <h2 className={styles.title}>Powering Intelligent <span>E-Commerce at Scale</span></h2>
            <p className={styles.subTitle}>Autonomous intelligence that optimizes conversion, logistics, and customer experience in real-time. Built for the modern enterprise.</p>
            <BrandsRibbon />
        </section>
    )
}

export default Hero
