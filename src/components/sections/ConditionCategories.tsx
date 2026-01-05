'use client';

import Link from 'next/link';
import Image from 'next/image';
import { healthConditions } from '@/lib/data';
import styles from './ConditionCategories.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function ConditionCategories() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('browse_conditions')}</h2>
                    <p className={styles.subtitle}>{t('condition_subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {healthConditions.map((condition) => (
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
                            <div className={styles.content}>
                                <h3 className={styles.name}>{condition.name}</h3>
                                <p className={styles.description}>{condition.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
