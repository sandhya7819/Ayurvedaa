'use client';

import styles from './TrustSection.module.css';
import { ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TrustSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <ShieldCheck size={48} className={styles.icon} strokeWidth={1.5} />
                        <h3>{t('authentic_info')}</h3>
                        <p>{t('authentic_desc')}</p>
                    </div>
                    <div className={styles.item}>
                        <Leaf size={48} className={styles.icon} strokeWidth={1.5} />
                        <h3>{t('natural_approach')}</h3>
                        <p>{t('natural_desc')}</p>
                    </div>
                    <div className={styles.item}>
                        <HeartHandshake size={48} className={styles.icon} strokeWidth={1.5} />
                        <h3>{t('community_trusted')}</h3>
                        <p>{t('community_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
