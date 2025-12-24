import Link from 'next/link';
import { Search } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Discover the Power of <br />
                        <span className={styles.highlight}>Ayurvedic Healing</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Explore ancient wisdom for modern wellness. Find herbs, treatments,
                        and doctors tailored to your unique Dosha.
                    </p>

                    <div className={styles.searchBox}>
                        <div className={styles.inputWrapper}>
                            <Search className={styles.searchIcon} size={20} />
                            <input
                                type="text"
                                placeholder="Search for herbs, conditions, or medicines..."
                                className={styles.input}
                            />
                        </div>
                        <button className={styles.searchButton}>Search</button>
                    </div>

                    <div className={styles.tags}>
                        <span>Popular:</span>
                        <Link href="/herbs/ashwagandha" className={styles.tag}>Ashwagandha</Link>
                        <Link href="/health-conditions/diabetes" className={styles.tag}>Diabetes</Link>
                        <Link href="/medicines/triphala" className={styles.tag}>Triphala</Link>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundElement}></div>
        </section>
    );
}
