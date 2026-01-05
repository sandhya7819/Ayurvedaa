'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { Search, Menu, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { t, language, setLanguage } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🌿</span>
                    <span className={styles.logoText}>Ayurveda Guide</span>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/herbs" className={styles.navLink}>{t('herbs')}</Link></li>
                        <li><Link href="/health-conditions" className={styles.navLink}>{t('conditions')}</Link></li>
                        <li><Link href="/medicines" className={styles.navLink}>{t('medicines')}</Link></li>
                        <li><Link href="/products" className={styles.navLink}>{t('products')}</Link></li>
                        <li><Link href="/doctors" className={styles.navLink}>{t('consult')}</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.langToggle}
                        onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                        title="Switch Language / भाषा बदलें"
                    >
                        <Languages size={16} />
                        <span>{language === 'en' ? 'EN' : 'HI'}</span>
                    </button>

                    <button className={styles.searchBtn} aria-label="Search">
                        <Search size={20} />
                    </button>
                    <Link href="/consult" className="btn btn-primary">
                        {t('consult')}
                    </Link>
                    <button className={styles.mobileMenuBtn} aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
