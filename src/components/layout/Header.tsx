'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { Menu, Languages, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import UniversalSearch from '../search/UniversalSearch';

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
                        <li><Link href="/guides" className={styles.navLink}>{language === 'hi' ? 'गाइड्स' : 'Guides'}</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.langToggle}
                        onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                        title="Switch Language / भाषा बदलें"
                    >
                        <Languages size={18} />
                        <span>{language === 'en' ? 'EN' : 'HI'}</span>
                    </button>

                    <div className={styles.searchWrapper}>
                        <UniversalSearch />
                    </div>

                    <Link href="/auth/login" className={styles.iconBtn} title={language === 'hi' ? 'लॉगिन' : 'Login'}>
                        <User size={22} />
                    </Link>

                    <Link href="/consult" className="btn btn-primary" style={{ display: 'none' }}>
                        {/* Hidden on desktop as Doctors link exists, kept for logic if needed */}
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
