'use client';

import { Mail } from 'lucide-react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Join the Ayurveda Community</h2>
                    <p className={styles.text}>Get weekly tips on Dosha balancing, seasonal diet guides, and exclusive offers on our premium herbs.</p>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" className={styles.input} required />
                        <button type="submit" className={styles.button}>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
