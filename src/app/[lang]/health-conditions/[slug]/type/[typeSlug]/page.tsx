import Link from 'next/link';
import { ArrowLeft, Activity, Sparkles, Pill, AlertCircle } from 'lucide-react';
import styles from './page.module.css';
import { healthConditions } from '@/lib/data';

interface Params {
    params: Promise<{
        lang: string;
        slug: string;
        typeSlug: string;
    }>
}

export default async function ConditionTypePage({ params }: Params) {
    const { lang, slug, typeSlug } = await params;

    // 1. Find the Condition (e.g., Diabetes)
    const condition = healthConditions.find(c => c.slug === slug);

    // 2. Find the Specific Type provided inside that condition
    const typeData = condition?.details?.types?.find((t: any) => t.slug === typeSlug);

    if (!condition || !typeData) {
        return (
            <div className={styles.page} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Type Not Found</h1>
                    <Link href={`/${lang}/health-conditions/${slug}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                        Back to Main Condition
                    </Link>
                </div>
            </div>
        );
    }

    // Alias for code clarity
    const data = typeData;

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Link href={`/${lang}/health-conditions/${slug}`} className={styles.backLink}>
                    <ArrowLeft size={18} /> Back to {condition.name}
                </Link>

                <article className={styles.article}>
                    <header className={styles.header}>
                        <div
                            className={styles.severityBadge}
                            style={{
                                background: data.severity === 'Severe' ? '#fee2e2' : data.severity === 'Moderate' ? '#fef3c7' : '#dcfce7',
                                color: data.severity === 'Severe' ? '#991b1b' : data.severity === 'Moderate' ? '#92400e' : '#166534'
                            }}
                        >
                            {data.severity} Stage
                        </div>
                        <h1 className={styles.title}>{data.name}</h1>
                        <p className={styles.description}>{data.description}</p>
                    </header>

                    <div className={styles.content}>
                        {/* Symptoms - Visual Cards */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                Specific Symptoms
                            </h2>
                            <div className={styles.symptomGrid}>
                                {data.symptoms.map((s: string, i: number) => (
                                    <div key={i} className={styles.symptomCard}>
                                        <div className={styles.symptomIconBox}>
                                            <Activity size={24} />
                                        </div>
                                        <span className={styles.symptomText}>{s}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Treatment - Featured Box */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                Ayurvedic Treatment Line
                            </h2>
                            <div className={styles.treatmentBox}>
                                <p className={styles.treatmentText}>{data.treatment}</p>
                            </div>
                        </section>

                        {/* Medicines - Product Style Cards */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                Recommended Medicines
                            </h2>
                            <div className={styles.medicineGrid}>
                                {data.medicines.map((med: string, i: number) => (
                                    <div key={i} className={styles.medicineCard}>
                                        <div className={styles.medicineName}>{med}</div>
                                        <span className={styles.medicineLabel}>Formulation</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    );
}
