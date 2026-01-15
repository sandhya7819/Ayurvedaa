'use client';

import { Lightbulb, Droplets, Flame } from 'lucide-react';
import styles from './DidYouKnow.module.css';

export default function DidYouKnow() {
    return (
        <section className={styles.section}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Did You Know?</h2>
                    <p className={styles.subtitle}>Ancient wisdom backed by modern science. Discover the fascinating facts of Ayurveda.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Flame size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Digestion is Key</h3>
                        <p className={styles.cardText}>According to Ayurveda, 80% of all diseases begin in the gut. A strong "Agni" (digestive fire) is essential for immunity and vitality.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Droplets size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Honey & Heat</h3>
                        <p className={styles.cardText}>Heating honey above 40°C makes it toxic (Ama) and clogs the channels of the body. Always consume honey raw or with lukewarm water.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Lightbulb size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Copper Water</h3>
                        <p className={styles.cardText}>Storing water in a copper vessel for 8 hours naturally kills harmful bacteria and charges the water with positive ions beneficial for health.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
