'use client';

import Link from 'next/link';
import styles from './ConsultCTA.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function ConsultCTA() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t('cta_title')}</h2>
                    <p className={styles.text}>
                        {t('cta_desc')}
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/doctors" className="btn btn-primary">{t('book_consult')}</Link>
                        <Link href="/dosha-test" className={styles.secondaryBtn}>{t('take_quiz')}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
