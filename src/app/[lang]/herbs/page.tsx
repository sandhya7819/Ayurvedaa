'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { popularHerbs } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HerbsPage() {
    const { language, t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDosha, setSelectedDosha] = useState('All');
    const [selectedLetter, setSelectedLetter] = useState('All');

    const filteredHerbs = popularHerbs.filter(herb => {
        const name = language === 'hi' ? (herb.name_hi || herb.name) : herb.name;
        const benefit = language === 'hi' ? (herb.benefit_hi || herb.benefit) : herb.benefit;

        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            benefit.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDosha = selectedDosha === 'All' || herb.dosha.includes(selectedDosha);
        const matchesLetter = selectedLetter === 'All' || name.startsWith(selectedLetter);

        return matchesSearch && matchesDosha && matchesLetter;
    });

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{language === 'hi' ? 'A-Z जड़ी-बूटी निर्देशिका' : 'A-Z Herbs Directory'}</h1>
                    <p className={styles.subtitle}>
                        {language === 'hi'
                            ? 'प्रकृति के सबसे शक्तिशाली उपचार पौधों की A-Z मार्गदर्शिका।'
                            : "Explore the A-Z guide of nature's most powerful healing plants."}
                    </p>
                </div>
            </div>

            <div className={`container ${styles.content}`}>
                {/* Controls */}
                <div className={styles.controls}>
                    <div className={styles.searchWrapper}>
                        <Search className={styles.searchIcon} size={20} />
                        <input
                            type="text"
                            placeholder={language === 'hi' ? "जड़ी-बूटी के नाम या लाभ से खोजें..." : "Search herbs by name or benefit..."}
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                if (e.target.value) setSelectedLetter('All');
                            }}
                        />
                    </div>

                    <div className={styles.filterWrapper}>
                        <Filter size={18} className={styles.filterIcon} />
                        <select
                            className={styles.filterSelect}
                            value={selectedDosha}
                            onChange={(e) => setSelectedDosha(e.target.value)}
                        >
                            <option value="All">{language === 'hi' ? 'सभी दोष' : 'All Doshas'}</option>
                            <option value="Vata">{language === 'hi' ? 'वात संतुलन' : 'Vata Balancing'}</option>
                            <option value="Pitta">{language === 'hi' ? 'पित्त संतुलन' : 'Pitta Balancing'}</option>
                            <option value="Kapha">{language === 'hi' ? 'कफ संतुलन' : 'Kapha Balancing'}</option>
                            <option value="Tridosha">{language === 'hi' ? 'त्रिदोष (तीनों)' : 'Tridosha (All 3)'}</option>
                        </select>
                    </div>
                </div>

                {/* Alphabet Filter */}
                <div className={styles.alphabetFilter}>
                    {['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map((char) => (
                        <button
                            key={char}
                            className={`${styles.alphaBtn} ${selectedLetter === char ? styles.activeAlpha : ''}`}
                            onClick={() => setSelectedLetter(char)}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {filteredHerbs.length > 0 ? (
                        filteredHerbs.map((herb) => (
                            <Link key={herb.id} href={`/${language}/herbs/${herb.slug}`} className={styles.card}>
                                <div className={styles.imagePlaceholder}>
                                    <Image
                                        src={herb.image}
                                        alt={herb.name}
                                        fill
                                        className={styles.cardImage}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.badges}>
                                        <span className={styles.benefitBadge}>
                                            {language === 'hi' ? (herb.benefit_hi || herb.benefit) : herb.benefit}
                                        </span>
                                        <span className={styles.doshaBadge}>{herb.dosha}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>
                                        {language === 'hi' ? (herb.name_hi || herb.name) : herb.name}
                                    </h3>
                                    <p className={styles.cardDesc}>
                                        {language === 'hi' ? (herb.description_hi || herb.description) : herb.description}
                                    </p>
                                    <span className={styles.readMore}>
                                        {language === 'hi' ? 'और पढ़ें →' : 'Read More →'}
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <p>{language === 'hi' ? 'आपकी खोज से मेल खाती कोई जड़ी-बूटी नहीं मिली।' : 'No herbs found matching your search.'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
