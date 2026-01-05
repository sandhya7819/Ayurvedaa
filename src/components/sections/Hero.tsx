'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Mic } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import styles from './Hero.module.css';

// Mock Suggestions Data
const SUGGESTIONS = [
    { title: 'Ashwagandha', type: 'Herb', slug: '/herbs/ashwagandha' },
    { title: 'Diabetes Care', type: 'Condition', slug: '/health-conditions/diabetes' },
    { title: 'Triphala Churna', type: 'Medicine', slug: '/medicines/triphala' },
    { title: 'Immunity Booster', type: 'Condition', slug: '/health-conditions/immunity' },
    { title: 'Arthritis Relief', type: 'Condition', slug: '/health-conditions/arthritis' },
    { title: 'Tulsi (Holy Basil)', type: 'Herb', slug: '/herbs/tulsi' },
    { title: 'Digestive Health', type: 'Issue', slug: '/health-conditions/digestion' },
    { title: 'Brahmi', type: 'Herb', slug: '/herbs/brahmi' },
];

export default function Hero() {
    const { language: lang, t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const { isListening, isSupported, toggleListening, error } = useVoiceSearch({
        onResult: (transcript) => {
            setSearchTerm(transcript);
            setShowSuggestions(true);
        },
        lang
    });

    // Handle clicking outside to close suggestions
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredSuggestions = searchTerm.length > 0
        ? SUGGESTIONS.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()))
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
