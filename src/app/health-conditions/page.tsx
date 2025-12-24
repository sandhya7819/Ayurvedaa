'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { healthConditions } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';

export default function ConditionsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredConditions = healthConditions.filter(condition =>
        condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Health Conditions</h1>
                    <p className={styles.subtitle}>Find Ayurvedic perspectives and natural solutions for your health concerns.</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search for a condition..."
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
                                <h3 className={styles.cardTitle}>{condition.name}</h3>
                                <p className={styles.cardDesc}>{condition.description}</p>
                                <span className={styles.learnMore}>Learn More &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
