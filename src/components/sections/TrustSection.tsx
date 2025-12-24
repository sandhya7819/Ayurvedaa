import styles from './TrustSection.module.css';
import { ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';

export default function TrustSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <ShieldCheck size={48} className={styles.icon} strokeWidth={1.5} />
                        <h3>Authentic Information</h3>
                        <p>Verified by certified Ayurvedic practitioners and classical texts.</p>
                    </div>
                    <div className={styles.item}>
                        <Leaf size={48} className={styles.icon} strokeWidth={1.5} />
                        <h3>100% Natural Approach</h3>
                        <p>Focusing on holistic healing through nature's bounty.</p>
                    </div>
                    <div className={styles.item}>
                        <HeartHandshake size={48} className={styles.icon} strokeWidth={1.5} />
                        <h3>Community Trusted</h3>
                        <p>Helping thousands find their path to wellness since 2010.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
