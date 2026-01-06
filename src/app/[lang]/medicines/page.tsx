'use client';

import { medicines } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function MedicinesPage() {
    const { language } = useLanguage();

    const t = {
        title: language === 'hi' ? 'शास्त्रीय औषधियाँ' : 'Classical Medicines',
        subtitle: language === 'hi'
            ? 'समग्र उपचार के लिए समय-परीक्षित आयुर्वेदिक फॉर्मूलेशन।'
            : 'Time-tested Ayurvedic formulations for holistic healing.',
        readMore: language === 'hi' ? 'और पढ़ें' : 'Read More'
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{t.title}</h1>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {medicines.map((med) => (
                        <div key={med.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={med.image || '/images/product-generic.png'}
                                    alt={med.name}
                                    fill
                                    className={styles.cardImage}
                                />
                                <span className={styles.category}>{med.category}</span>
                            </div>

                            <div className={styles.cardContent}>
                                <h2 className={styles.name}>
                                    {language === 'hi' ? (med.name_hi || med.name) : med.name}
                                </h2>
                                <p className={styles.description}>
                                    {language === 'hi' ? (med.description_hi || med.description) : med.description}
                                </p>

                                <div className={styles.benefits}>
                                    {med.benefits.slice(0, 3).map((benefit, index) => (
                                        <span key={index} className={styles.badge}>{benefit}</span>
                                    ))}
                                </div>

                                <div className={styles.footer}>
                                    <Link href={`/${language}/medicines/${med.slug}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                        {t.readMore}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
