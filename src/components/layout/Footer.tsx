'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

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
                            {t('footer_desc')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>{t('discover')}</h3>
                        <ul className={styles.links}>
                            <li><Link href="/herbs">{t('herbs_az')}</Link></li>
                            <li><Link href="/health-conditions">{t('conditions')}</Link></li>
                            <li><Link href="/medicines">{t('medicines')}</Link></li>
                            <li><Link href="/products">{t('curated_products')}</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>{t('support')}</h3>
                        <ul className={styles.links}>
                            <li><Link href="/doctors">{t('find_doctor')}</Link></li>
                            <li><Link href="/contact">{t('contact_us')}</Link></li>
                            <li><Link href="/privacy">{t('privacy_policy')}</Link></li>
                            <li><Link href="/disclaimer">{t('medical_disclaimer')}</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>{t('stay_connected')}</h3>
                        <p className={styles.text}>{t('subscribe_text')}</p>
                        <form className={styles.newsletter}>
                            <input
                                type="email"
                                placeholder={t('your_email')}
                                className={styles.input}
                            />
                            <button type="submit" className={styles.subscribeBtn}>→</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Ayurveda Guide. {t('rights_reserved')}</p>
                </div>
            </div>
        </footer>
    );
}
