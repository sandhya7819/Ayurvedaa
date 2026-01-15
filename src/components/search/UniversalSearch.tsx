'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, Sparkles, Command } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { popularHerbs, healthConditions, medicines, products } from '@/lib/data';
import VoiceSearch from './VoiceSearch';
import styles from './UniversalSearch.module.css';

// Type definitions
type SearchItem = {
    type: string;
    name: string;
    originalName: string; // To store English name for logic if needed
    slug: string;
    category: 'Herb' | 'Condition' | 'Medicine' | 'Product';
};

// Combine all data sources for search
const getAllSearchItems = (lang: string): SearchItem[] => {
    const items: SearchItem[] = [];

    popularHerbs.forEach(h => items.push({
        type: lang === 'hi' ? 'जड़ी-बूटी' : 'Herb',
        name: lang === 'hi' ? (h.name_hi || h.name) : h.name,
        originalName: h.name,
        slug: `/herbs/${h.slug}`,
        category: 'Herb'
    }));

    healthConditions.forEach(c => items.push({
        type: lang === 'hi' ? 'स्वास्थ्य स्थिति' : 'Condition',
        name: lang === 'hi' ? (c.name_hi || c.name) : c.name,
        originalName: c.name,
        slug: `/health-conditions/${c.slug}`,
        category: 'Condition'
    }));

    medicines.forEach(m => items.push({
        type: lang === 'hi' ? 'दवा' : 'Medicine',
        name: lang === 'hi' ? (m.name_hi || m.name) : m.name,
        originalName: m.name,
        slug: `/medicines/${m.slug}`,
        category: 'Medicine'
    }));

    products.forEach(p => items.push({
        type: lang === 'hi' ? 'उत्पाद' : 'Product',
        name: lang === 'hi' ? (p.name_hi || p.name) : p.name,
        originalName: p.name,
        slug: `/medicines/products/${p.slug}`, // Assuming product structure
        category: 'Product'
    }));

    return items;
};

// Popular searches data
const popularSearches = [
    { en: 'Ashwagandha', hi: 'अश्वगंधा', slug: '/herbs/ashwagandha' },
    { en: 'Diabetes', hi: 'मधुमेह', slug: '/health-conditions/diabetes' },
    { en: 'Hair Oil', hi: 'बालों का तेल', slug: '/products?search=hair' },
    { en: 'Immunity', hi: 'रोग प्रतिरोधक', slug: '/health-conditions/immunity' },
    { en: 'Triphala', hi: 'त्रिफला', slug: '/medicines/triphala-churna' },
];

export default function UniversalSearch() {
    const { language, setLanguage } = useLanguage();
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial data load
    const [allItems, setAllItems] = useState<SearchItem[]>([]);

    useEffect(() => {
        setAllItems(getAllSearchItems(language));
    }, [language]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (text: string) => {
        setQuery(text);
        if (text.length > 1) {
            const lowerText = text.toLowerCase();
            const filtered = allItems.filter(item =>
                item.name.toLowerCase().includes(lowerText) ||
                item.originalName.toLowerCase().includes(lowerText)
            ).slice(0, 8); // Limit results
            setResults(filtered);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(true); // Keep open for popular searches
        }
    };

    const handleSelect = (slug: string) => {
        router.push(`/${language}${slug.startsWith('/') ? slug : '/' + slug}`);
        setIsOpen(false);
        setQuery('');
        inputRef.current?.blur();
    };

    const clearSearch = () => {
        setQuery('');
        setResults([]);
        setIsOpen(true);
        inputRef.current?.focus();
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'hi' : 'en';
        setLanguage(newLang);
        // Will trigger useEffect to reload items
    };

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.inputWrapper}>
                <Search size={18} className={styles.searchIcon} />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && query.length > 0) {
                            router.push(`/${language}/search?q=${encodeURIComponent(query)}`);
                            setIsOpen(false);
                            setQuery('');
                        }
                    }}
                    placeholder={language === 'hi' ? "खोजें (जड़ी-बूटियाँ, बीमारियाँ...)" : "Search (Herbs, Conditions, Medicines)..."}
                    className={styles.input}
                />

                {/* Language Toggle Inside Search */}
                <button onClick={toggleLanguage} className={styles.langToggle} title="Switch Language">
                    {language === 'hi' ? 'अ/A' : 'A/अ'}
                </button>

                {query && (
                    <button onClick={clearSearch} className={styles.clearBtn} aria-label="Clear">
                        <X size={16} />
                    </button>
                )}
                <VoiceSearch onResult={handleSearch} />
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    {/* Results List */}
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <div
                                key={index}
                                className={styles.resultItem}
                                onClick={() => handleSelect(item.slug)}
                            >
                                <div className={styles.itemInfo}>
                                    <span className={styles.itemName}>{item.name}</span>
                                    <span className={styles.itemSub}>{language === 'hi' ? item.originalName : ''}</span>
                                </div>
                                <span className={styles.itemType}>{item.type}</span>
                            </div>
                        ))
                    ) : (
                        query.length > 1 ? (
                            <div className={styles.noResults}>
                                <Command size={24} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                                <p>{language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No results found'}</p>
                            </div>
                        ) : (
                            /* Popular Searches Section - Shown when query is empty or short */
                            <div className={styles.popularSection}>
                                <h4 className={styles.sectionTitle}>
                                    <TrendingUp size={14} />
                                    {language === 'hi' ? 'लोकप्रिय खोजें' : 'Popular Searches'}
                                </h4>
                                <div className={styles.tagsWrapper}>
                                    {popularSearches.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={styles.popularTag}
                                            onClick={() => handleSelect(tag.slug)}
                                        >
                                            <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                            {language === 'hi' ? tag.hi : tag.en}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
