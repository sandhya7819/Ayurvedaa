'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Info, ShieldCheck, Clock, FileText, Scroll, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/[lang]/medicines/[slug]/page.module.css';

interface MedicineDetailViewProps {
    medicine: any;
}

export default function MedicineDetailView({ medicine }: MedicineDetailViewProps) {
    const { language } = useLanguage();

    const name = language === 'hi' ? (medicine.name_hi || medicine.name) : medicine.name;
    const description = language === 'hi' ? (medicine.description_hi || medicine.description) : medicine.description;

    // Details Selection
    const details = (language === 'hi' && medicine.details_hi) ? medicine.details_hi : medicine.details;
    const ingredients = details.ingredients || medicine.details.ingredients;
    const dosage = details.dosage || medicine.details.dosage;
    const indication = details.indication || medicine.details.indication;
    const safety = details.safety || medicine.details.safety;
    const classicalRef = details.classical_ref || medicine.details.classical_ref;

    const t = {
        back: language === 'hi' ? 'औषधियों पर वापस' : 'Back to Medicines',
        description: language === 'hi' ? 'विवरण और संकेत' : 'Description & Indication',
        ingredients: language === 'hi' ? 'मुख्य सामग्री' : 'Key Ingredients',
        benefits: language === 'hi' ? 'मुख्य लाभ' : 'Primary Benefits',
        dosage: language === 'hi' ? 'खुराक अनुशंसा' : 'Recommended Dosage',
        safety: language === 'hi' ? 'सुरक्षा और सावधानियां' : 'Safety Profile',
        reference: language === 'hi' ? 'शास्त्रीय संदर्भ' : 'Classical Reference',
        consultTitle: language === 'hi' ? 'डॉक्टर से परामर्श करें' : 'Consult a Doctor',
        consultDesc: language === 'hi' ? `क्या ${name} आपके लिए सही है? विशेषज्ञ वैद्य से बात करें।` : `Is ${name} suitable for your condition? Talk to an expert Vaidya.`,
        bookConsult: language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation',
        disclaimer: language === 'hi' ? '* आयुर्वेदिक दवाएं चिकित्सीय देखरेख में ली जानी चाहिए।' : '* Ayurvedic medicines should be taken under medical supervision.'
    };

    return (
        <article className={styles.article}>
            <div className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <Link href={`/${language}/medicines`} className={styles.backLink}>
                            <ArrowLeft size={16} /> {t.back}
                        </Link>
                        <span className={styles.badge}>{medicine.category}</span>
                        <h1 className={styles.title}>{name}</h1>
                        <p className={styles.subtitle}>{description}</p>
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <div className={styles.imageCard}>
                            <Image
                                src={medicine.image}
                                alt={name}
                                fill
                                className={styles.heroImage}
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        {/* Description & Indication */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <Info className={styles.titleIcon} /> {t.description}
                            </h2>
                            <p className={styles.text}>{indication}</p>

                            {classicalRef && (
                                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                    <Scroll size={14} /> {t.reference}: {classicalRef}
                                </div>
                            )}
                        </section>

                        <div className={styles.twoColGrid}>
                            {/* Ingredients */}
                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>
                                    <FileText size={18} style={{ marginRight: '8px', color: 'var(--primary-color)' }} />
                                    {t.ingredients}
                                </h2>
                                <div className={styles.tags}>
                                    {ingredients.map((ing: string, i: number) => (
                                        <span key={i} className={styles.tag}>{ing}</span>
                                    ))}
                                </div>
                            </section>

                            {/* Benefits */}
                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>
                                    <CheckCircle size={18} style={{ marginRight: '8px', color: 'var(--primary-color)' }} />
                                    {t.benefits}
                                </h2>
                                <ul className={styles.benefitList}>
                                    {medicine.benefits.map((b: string, i: number) => (
                                        <li key={i} className={styles.listItem}>
                                            <CheckCircle size={16} className={styles.checkIcon} /> {b}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Dosage */}
                        <section className={styles.section} style={{ background: '#eff6ff', borderLeft: '4px solid #3b82f6' }}>
                            <h2 className={styles.sectionTitle} style={{ color: '#1e40af' }}>
                                <Clock className={styles.titleIcon} /> {t.dosage}
                            </h2>
                            <p className={styles.text} style={{ color: '#1e3a8a' }}>{dosage}</p>
                        </section>

                        {/* Safety */}
                        <section className={`${styles.section} ${styles.safetyBox}`}>
                            <h2 className={styles.safetyTitle}>
                                <ShieldCheck size={20} /> {t.safety}
                            </h2>
                            <p className={styles.text}>{safety}</p>
                        </section>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.stickyCard}>
                            <h3>{t.consultTitle}</h3>
                            <p>{t.consultDesc}</p>
                            <Link href={`/${language}/doctors`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                {t.bookConsult}
                            </Link>

                            <div className={styles.divider}></div>

                            <p className={styles.disclaimer} style={{ display: 'flex', gap: '0.5rem' }}>
                                <AlertTriangle size={24} style={{ flexShrink: 0 }} />
                                {t.disclaimer}
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
