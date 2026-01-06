'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Mic } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import styles from './Hero.module.css';

import { popularHerbs, healthConditions, medicines } from '@/lib/data';

// Combine real data for search
const getAllItems = (lang: string) => {
    const items: any[] = [];
    popularHerbs.forEach(h => items.push({ title: lang === 'hi' ? (h.name_hi || h.name) : h.name, type: 'Herb', slug: `/herbs/${h.slug}` }));
    healthConditions.forEach(c => items.push({ title: lang === 'hi' ? (c.name_hi || c.name) : c.name, type: 'Condition', slug: `/health-conditions/${c.slug}` }));
    medicines.forEach(m => items.push({ title: lang === 'hi' ? (m.name_hi || m.name) : m.name, type: 'Medicine', slug: `/medicines/${m.slug}` }));
    return items;
};

export default function Hero() {
    const { language: lang, t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeTab, setActiveTab] = useState<'All' | 'Herb' | 'Condition' | 'Medicine'>('All');
    const searchRef = useRef<HTMLDivElement>(null);

    const { isListening, isSupported, toggleListening, error } = useVoiceSearch({
        onResult: (transcript) => {
            setSearchTerm(transcript);
            setShowSuggestions(true);
        },
        lang
    });

    // Handle clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const allItems = getAllItems(lang);
    const filteredSuggestions = searchTerm.length > 0
        ? allItems.filter(s =>
            s.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (activeTab === 'All' || s.type === activeTab)
        ).slice(0, 6)
        : [];

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        {lang === 'en' ? (
                            <>Discover the Power of <br /><span className={styles.highlight}>Ayurvedic Healing</span></>
                        ) : (
                            <>आयुर्वेदिक चिकित्सा की <br /><span className={styles.highlight}> शक्ति की खोज करें</span></>
                        )}
                    </h1>
                    <p className={styles.subtitle}>
                        {t('hero_subtitle')}
                    </p>

                    {/* Search Tabs */}
                    <div className={styles.searchTabs} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', justifyContent: 'center' }}>
                        {['All', 'Herb', 'Condition', 'Medicine'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                style={{
                                    background: activeTab === tab ? '#10b981' : 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    backdropFilter: 'blur(5px)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {tab === 'All' ? (lang === 'hi' ? 'सभी' : 'All') : tab}
                                {tab === 'Herb' && (lang === 'hi' ? '(जड़ी-बूटियाँ)' : '')}
                                {tab === 'Condition' && (lang === 'hi' ? '(बीमारियाँ)' : '')}
                                {tab === 'Medicine' && (lang === 'hi' ? '(दवाइयाँ)' : '')}
                            </button>
                        ))}
                    </div>

                    {/* Search Container */}
                    <div className={styles.searchContainer} ref={searchRef}>
                        <div className={styles.searchBox}>
                            <div className={styles.inputWrapper}>
                                <Search className={styles.searchIcon} size={20} />
                                <input
                                    type="text"
                                    placeholder={isListening ? (lang === 'en' ? "Listening..." : "sun raha hoon...") : t('search_placeholder')}
                                    className={styles.input}
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setShowSuggestions(true);
                                    }}
                                    onFocus={() => setShowSuggestions(true)}
                                />
                                {isSupported && (
                                    <button
                                        className={`${styles.micBtn} ${isListening ? styles.listening : ''}`}
                                        title={isListening ? "Stop Listening" : t('voice_search')}
                                        onClick={toggleListening}
                                    >
                                        <Mic size={20} color={isListening ? '#D4AF37' : 'currentColor'} />
                                    </button>
                                )}
                            </div>
                            <button className={styles.searchButton}>
                                {t('search_btn')}
                            </button>
                        </div>
                        {error && (
                            <div style={{ color: '#ff6b6b', fontSize: '0.9rem', marginTop: '0.5rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                                {error}
                            </div>
                        )}

                        {/* Suggestions Dropdown */}
                        {showSuggestions && searchTerm.length > 0 && (
                            <div className={styles.suggestionsWrapper}>
                                {filteredSuggestions.length > 0 ? (
                                    filteredSuggestions.map((item, idx) => (
                                        <Link href={item.slug} key={idx} className={styles.suggestionItem}>
                                            <span>{item.title}</span>
                                            <span className={styles.suggestionType}>{t(item.type.toLowerCase())}</span>
                                        </Link>
                                    ))
                                ) : (
                                    <div className={styles.suggestionItem} style={{ cursor: 'default' }}>
                                        <span style={{ color: '#718096' }}>
                                            {t('no_results')}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Popular Tags */}
                    <div className={styles.tags}>
                        <span>{t('popular')}</span>
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
