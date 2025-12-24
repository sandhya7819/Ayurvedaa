import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoIcon}>🌿</span>
                            <span className={styles.logoText}>Ayurveda Guide</span>
                        </Link>
                        <p className={styles.description}>
                            Modern wisdom from ancient roots. Your trusted companion for holistic healing and wellness.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Discover</h3>
                        <ul className={styles.links}>
                            <li><Link href="/herbs">Herbs A-Z</Link></li>
                            <li><Link href="/health-conditions">Health Conditions</Link></li>
                            <li><Link href="/medicines">Medicines</Link></li>
                            <li><Link href="/products">Curated Products</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Support</h3>
                        <ul className={styles.links}>
                            <li><Link href="/doctors">Find a Doctor</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer">Medical Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Stay Connected</h3>
                        <p className={styles.text}>Subscribe for seasonal health tips.</p>
                        <form className={styles.newsletter}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className={styles.input}
                            />
                            <button type="submit" className={styles.subscribeBtn}>Arrow</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Ayurveda Guide. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
