'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { popularHerbs, healthConditions, medicines, products } from '@/lib/data';
import VoiceSearch from './VoiceSearch';
import styles from './UniversalSearch.module.css';

// Combine all data sources for search
const getAllSearchItems = (lang: string) => {
    const items: any[] = [];

    popularHerbs.forEach(h => items.push({
        type: 'Herb',
        name: lang === 'hi' ? (h.name_hi || h.name) : h.name,
        slug: `/herbs/${h.slug}`,
        original: h
    }));

    healthConditions.forEach(c => items.push({
        type: 'Condition',
        name: lang === 'hi' ? (c.name_hi || c.name) : c.name,
        slug: `/health-conditions/${c.slug}`,
        original: c
    }));

    medicines.forEach(m => items.push({
        type: 'Medicine',
        name: lang === 'hi' ? (m.name_hi || m.name) : m.name,
        slug: `/medicines/${m.slug}`,
        original: m
    }));

    products.forEach(p => items.push({
        type: 'Product',
        name: lang === 'hi' ? (p.name_hi || p.name) : p.name,
        slug: `/products/${p.id}`,
        original: p
    }));

    return items;
};

export default function UniversalSearch() {
    const { language } = useLanguage();
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const allItems = getAllSearchItems(language);

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
            const filtered = allItems.filter(item =>
                item.name.toLowerCase().includes(text.toLowerCase())
            ).slice(0, 8); // Limit results
            setResults(filtered);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    };

    const handleSelect = (slug: string) => {
        router.push(slug);
        setIsOpen(false);
        setQuery('');
    };

    const clearSearch = () => {
        setQuery('');
        setResults([]);
        setIsOpen(false);
    };

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.inputWrapper}>
                <Search size={18} className={styles.searchIcon} />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && query.length > 0) {
                            router.push(`/search?q=${encodeURIComponent(query)}`);
                            setIsOpen(false);
                            setQuery('');
                        }
                    }}
                    placeholder={language === 'hi' ? "खोजें (जड़ी-बूटियाँ, बीमारियाँ, दवाइयाँ)..." : "Search (Herbs, Conditions, Medicines)..."}
                    className={styles.input}
                />
                {query && (
                    <button onClick={clearSearch} className={styles.clearBtn} aria-label="Clear">
                        <X size={16} />
                    </button>
                )}
                <VoiceSearch onResult={handleSearch} />
            </div>

            {isOpen && results.length > 0 && (
                <div className={styles.dropdown}>
                    {results.map((item, index) => (
                        <div
                            key={index}
                            className={styles.resultItem}
                            onClick={() => handleSelect(item.slug)}
                        >
                            <span className={styles.itemName}>{item.name}</span>
                            <span className={styles.itemType}>{item.type}</span>
                        </div>
                    ))}
                </div>
            )}
            {isOpen && query.length > 1 && results.length === 0 && (
                <div className={styles.dropdown}>
                    <div className={styles.noResults}>
                        {language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No results found'}
                    </div>
                </div>
            )}
        </div>
    );
}
