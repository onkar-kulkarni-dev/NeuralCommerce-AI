import styles from "./Toggle.module.scss";

type ToggleProps = {
    yearly: boolean;
    setYearly: (checked: boolean) => void;
};

export default function PricingToggle({ yearly, setYearly }: ToggleProps) {
    return (
        <div className={styles.wrapper}>
            <span className={!yearly ? styles.activeLabel : ""}>
                Monthly
            </span>

            <div
                className={`${styles.switch} ${yearly ? styles.active : ""}`}
                onClick={() => setYearly(!yearly)}
            >
                <div className={styles.ball}></div>
            </div>

            <span className={yearly ? styles.activeLabel : ""}>
                Annual (-20%)
            </span>
        </div>
    );
}
