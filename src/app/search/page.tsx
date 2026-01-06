'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { popularHerbs, healthConditions, medicines, products } from '@/lib/data';
import styles from './page.module.css';

// Combined Search Logic (Client-Side for now as data is local)
const getSearchResults = (query: string, lang: string) => {
    if (!query) return [];

    const q = query.toLowerCase();
    const results: any[] = [];

    popularHerbs.forEach(h => {
        if (h.name.toLowerCase().includes(q) || (h.name_hi && h.name_hi.includes(q)) || h.benefit.toLowerCase().includes(q)) {
            results.push({ type: 'Herb', name: lang === 'hi' ? (h.name_hi || h.name) : h.name, slug: `/herbs/${h.slug}`, desc: lang === 'hi' ? (h.benefit_hi || h.benefit) : h.benefit });
        }
    });

    healthConditions.forEach(c => {
        if (c.name.toLowerCase().includes(q) || (c.name_hi && c.name_hi.includes(q)) || c.description.toLowerCase().includes(q)) {
            results.push({ type: 'Condition', name: lang === 'hi' ? (c.name_hi || c.name) : c.name, slug: `/health-conditions/${c.slug}`, desc: lang === 'hi' ? (c.description_hi || c.description) : c.description });
        }
    });

    medicines.forEach(m => {
        if (m.name.toLowerCase().includes(q) || (m.name_hi && m.name_hi.includes(q))) {
            results.push({ type: 'Medicine', name: lang === 'hi' ? (m.name_hi || m.name) : m.name, slug: `/medicines/${m.slug}`, desc: lang === 'hi' ? (m.description_hi || m.description) : m.description });
        }
    });

    products.forEach(p => {
        if (p.name.toLowerCase().includes(q) || (p.name_hi && p.name_hi.includes(q))) {
            results.push({ type: 'Product', name: lang === 'hi' ? (p.name_hi || p.name) : p.name, slug: `/products/${p.id}`, desc: p.details.description });
        }
    });

    return results;
};

function SearchResultsContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const { language } = useLanguage();
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        setResults(getSearchResults(query, language));
    }, [query, language]);

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className={styles.title}>
                {language === 'hi' ? `खोज परिणाम: "${query}"` : `Search Results for: "${query}"`}
            </h1>

            {results.length > 0 ? (
                <div className={styles.grid}>
                    {results.map((item, idx) => (
                        <Link href={item.slug} key={idx} className={styles.card}>
                            <span className={styles.typeBadge}>{item.type}</span>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={styles.noResults}>
                    <p>{language === 'hi' ? 'कोई परिणाम नहीं मिला।' : 'No results found.'}</p>
                    <Link href="/" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                        {language === 'hi' ? 'होमपेज पर जाएं' : 'Go to Homepage'}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="container" style={{ padding: '4rem' }}>Loading...</div>}>
            <SearchResultsContent />
        </Suspense>
    );
}
