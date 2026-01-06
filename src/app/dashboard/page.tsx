'use client';

import { useState, useEffect } from 'react';
import { User, Heart, Calendar, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function DashboardPage() {
    const { language } = useLanguage();
    const [dosha, setDosha] = useState<string | null>(null);

    useEffect(() => {
        const savedDosha = localStorage.getItem('userDosha');
        if (savedDosha) setDosha(savedDosha);
    }, []);

    const menuItems = [
        { icon: <User size={20} />, label: language === 'hi' ? 'प्रोफ़ाइल' : 'Profile', active: true },
        { icon: <Heart size={20} />, label: language === 'hi' ? 'सहेजे गए' : 'Saved Items', active: false },
        { icon: <Calendar size={20} />, label: language === 'hi' ? 'परामर्श' : 'Consultations', active: false },
        { icon: <Settings size={20} />, label: language === 'hi' ? 'सेटिंग्स' : 'Settings', active: false },
    ];

    const savedItems = [
        { title: 'Ashwagandha', type: 'Herb', date: '2 days ago' },
        { title: 'Diabetes Management', type: 'Condition', date: '1 week ago' },
        { title: 'Triphala Powder', type: 'Product', date: '2 weeks ago' },
    ];

    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.userCard}>
                            <div className={styles.avatar}>JD</div>
                            <div>
                                <h3 className={styles.userName}>John Doe</h3>
                                <p className={styles.userEmail}>john@example.com</p>
                            </div>
                        </div>
                        <nav className={styles.nav}>
                            {menuItems.map((item, idx) => (
                                <button key={idx} className={`${styles.navItem} ${item.active ? styles.active : ''}`}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </button>
                            ))}
                            <Link href="/auth/login" className={`${styles.navItem} ${styles.logout}`}>
                                <LogOut size={20} />
                                <span>{language === 'hi' ? 'लॉग आउट' : 'Logout'}</span>
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.main}>
                        <h1 className={styles.pageTitle}>{language === 'hi' ? 'मेरा डैशबोर्ड' : 'My Dashboard'}</h1>

                        {/* Stats Grid */}
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <h3>{language === 'hi' ? 'दोष प्रकार' : 'Dosha Type'}</h3>
                                <p className={styles.statValue}>{dosha || (language === 'hi' ? 'N/A' : 'N/A')}</p>
                                <Link href="/dosha-test" className={styles.statLink}>
                                    {dosha ? (language === 'hi' ? 'फिर से टेस्ट लें' : 'Retake Test') : (language === 'hi' ? 'टेस्ट लें' : 'Take Test')}
                                </Link>
                            </div>
                            <div className={styles.statCard}>
                                <h3>{language === 'hi' ? 'परामर्श' : 'Consultations'}</h3>
                                <p className={styles.statValue}>0</p>
                                <Link href="/doctors" className={styles.statLink}>{language === 'hi' ? 'बुक करें' : 'Book Now'}</Link>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{language === 'hi' ? 'हालिया गतिविधियां' : 'Recent Saved Items'}</h2>
                            <div className={styles.savedList}>
                                {savedItems.map((item, idx) => (
                                    <div key={idx} className={styles.savedItem}>
                                        <div className={styles.itemIcon}>{item.title[0]}</div>
                                        <div className={styles.itemInfo}>
                                            <h4>{item.title}</h4>
                                            <span>{item.type} • {item.date}</span>
                                        </div>
                                        <button className="btn btn-sm">{language === 'hi' ? 'देखें' : 'View'}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
