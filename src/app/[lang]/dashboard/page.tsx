'use client';

import { useState, useEffect } from 'react';
import { User, Heart, Calendar, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';
import { products } from '@/lib/data';
import { useBookmarks } from '@/hooks/useBookmarks';

export default function DashboardPage() {
    const { language } = useLanguage();
    const [dosha, setDosha] = useState<string | null>(null);
    const { bookmarks } = useBookmarks();
    const [bookmarkedItems, setBookmarkedItems] = useState<any[]>([]);

    useEffect(() => {
        const savedDosha = localStorage.getItem('userDosha');
        if (savedDosha) setDosha(savedDosha);
    }, []);

    // Filter products based on bookmarks
    useEffect(() => {
        if (bookmarks.length > 0) {
            // Find products that match the bookmarked IDs
            const items = products.filter(p => bookmarks.includes(p.id)).map(p => ({
                id: p.id,
                title: p.name,
                type: 'Product', // Or Herb if we had separate types
                image: p.image,
                date: 'Saved'
            }));
            setBookmarkedItems(items);
        } else {
            setBookmarkedItems([]);
        }
    }, [bookmarks]);

    const menuItems = [
        { icon: <User size={20} />, label: language === 'hi' ? 'प्रोफ़ाइल' : 'Profile', active: true },
        { icon: <Heart size={20} />, label: language === 'hi' ? 'सहेजे गए' : 'Saved Items', active: false },
        { icon: <Calendar size={20} />, label: language === 'hi' ? 'परामर्श' : 'Consultations', active: false },
        { icon: <Settings size={20} />, label: language === 'hi' ? 'सेटिंग्स' : 'Settings', active: false },
    ];

    // Simple recommendation logic based on Dosha
    const recommendedProducts = dosha
        ? products.filter(p => !bookmarks.includes(p.id)).slice(0, 3) // Just show 3 random products as recommendation for now, strictly filtering by dosha would need data tagging
        : [];

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

                        {/* Recent Saved Items */}
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{language === 'hi' ? 'सहेजे गए आइटम' : 'Saved Items'}</h2>
                            {bookmarkedItems.length > 0 ? (
                                <div className={styles.savedList}>
                                    {bookmarkedItems.map((item, idx) => (
                                        <div key={idx} className={styles.savedItem}>
                                            <div className={styles.itemIcon}>{item.title[0]}</div>
                                            <div className={styles.itemInfo}>
                                                <h4>{item.title}</h4>
                                                <span>{item.type}</span>
                                            </div>
                                            <Link href={`/${language}/medicines/${item.id}`} className="btn btn-sm">
                                                {language === 'hi' ? 'देखें' : 'View'}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ color: '#666' }}>
                                    {language === 'hi' ? 'कोई आइटम सहेजा नहीं गया।' : 'No items saved yet.'}
                                </p>
                            )}
                        </div>

                        {/* Recommended For You */}
                        {dosha && recommendedProducts.length > 0 && (
                            <div className={styles.section} style={{ marginTop: '2rem' }}>
                                <h2 className={styles.sectionTitle}>{language === 'hi' ? 'आपके लिए अनुशंसित' : 'Recommended For You'}</h2>
                                <div className={styles.savedList}>
                                    {recommendedProducts.map((p, idx) => (
                                        <div key={idx} className={styles.savedItem}>
                                            <div className={styles.itemIcon} style={{ background: '#e6fffa', color: '#047481' }}>R</div>
                                            <div className={styles.itemInfo}>
                                                <h4>{p.name}</h4>
                                                <span>{p.category}</span>
                                            </div>
                                            <Link href={`/${language}/medicines/${p.id}`} className="btn btn-sm">
                                                {language === 'hi' ? 'देखें' : 'View'}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
