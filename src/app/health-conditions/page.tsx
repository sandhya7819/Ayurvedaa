'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { healthConditions } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ConditionsPage() {
    const { language, t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredConditions = healthConditions.filter(condition => {
        const name = language === 'hi' ? (condition.name_hi || condition.name) : condition.name;
        const description = language === 'hi' ? (condition.description_hi || condition.description) : condition.description;

        return name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{language === 'hi' ? 'स्वास्थ्य स्थितियां' : 'Health Conditions'}</h1>
                    <p className={styles.subtitle}>
                        {language === 'hi'
                            ? 'अपनी स्वास्थ्य चिंताओं के लिए आयुर्वेदिक दृष्टिकोण और प्राकृतिक समाधान खोजें।'
                            : 'Find Ayurvedic perspectives and natural solutions for your health concerns.'}
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder={language === 'hi' ? "किसी स्थिति के लिए खोजें..." : "Search for a condition..."}
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.grid}>
                    {filteredConditions.map((condition) => (
                        <Link key={condition.id} href={`/health-conditions/${condition.slug}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={condition.image}
                                    alt={condition.name}
                                    fill
                                    className={styles.image}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    {language === 'hi' ? (condition.name_hi || condition.name) : condition.name}
                                </h3>
                                <p className={styles.cardDesc}>
                                    {language === 'hi' ? (condition.description_hi || condition.description) : condition.description}
                                </p>
                                <span className={styles.learnMore}>
                                    {language === 'hi' ? 'और जानें →' : 'Learn More →'}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
