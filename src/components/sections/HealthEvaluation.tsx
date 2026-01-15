'use client';

import HealthEvaluatorChat from '@/components/chat/HealthEvaluatorChat';
import styles from './HealthEvaluation.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function HealthEvaluation() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.blob}></div>
            <div className={styles.container}>
                <HealthEvaluatorChat />
            </div>
        </section>
    );
}
