import Link from 'next/link';
import styles from './ConsultCTA.module.css';

export default function ConsultCTA() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Not sure what's right for you?</h2>
                    <p className={styles.text}>
                        Connect with certified Ayurvedic doctors for a personalized consultation.
                        Get a tailored diet, lifestyle, and herb plan.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/doctors" className="btn btn-primary">Book Online Consultation</Link>
                        <Link href="/dosha-test" className={styles.secondaryBtn}>Take Dosha Quiz</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
