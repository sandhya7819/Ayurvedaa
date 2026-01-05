'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Stethoscope, Activity, Utensils, Check, X, Pill, Leaf, HeartPulse, Brain } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/health-conditions/[slug]/page.module.css';

interface ConditionDetailViewProps {
    condition: any;
    recommendedHerbs: any[];
}

export default function ConditionDetailView({ condition, recommendedHerbs }: ConditionDetailViewProps) {
    const { language } = useLanguage();

    const name = language === 'hi' ? (condition.name_hi || condition.name) : condition.name;
    const description = language === 'hi' ? (condition.description_hi || condition.description) : condition.description;

    // Details
    const details = (language === 'hi' && condition.details_hi) ? condition.details_hi : condition.details;
    const overview = details.overview || condition.details.overview;
    const ayurvedicExplanation = details.ayurvedic_explanation; // New
    const symptoms = details.symptoms || condition.details.symptoms;
    const causes = details.causes || condition.details.causes;
    const recommendations = details.recommendations || condition.details.recommendations; // Fallback

    // New Rich Data
    const dietLifestyle = details.diet_lifestyle;
    const dosDonts = details.dos_and_donts;
    const medicines = details.medicines;

    const t = {
        back: language === 'hi' ? 'स्थितियों पर वापस' : 'Back to Conditions',
        perspective: language === 'hi' ? 'आयुर्वेदिक दृष्टिकोण' : 'Ayurvedic Perspective',
        theory: language === 'hi' ? 'आयुर्वेद सिद्धांत' : 'Ayurvedic Theory',
        symptoms: language === 'hi' ? 'लक्षण' : 'Symptoms',
        causes: language === 'hi' ? 'सामान्य कारण' : 'Common Causes',
        diet: language === 'hi' ? 'आहार सुझाव' : 'Diet Recommendations',
        lifestyle: language === 'hi' ? 'जीवन शैली' : 'Lifestyle Changes',
        dos: language === 'hi' ? 'क्या करें (Do\'s)' : 'Do\'s',
        donts: language === 'hi' ? 'क्या न करें (Don\'ts)' : 'Don\'ts',
        medicines: language === 'hi' ? 'आयुर्वेदिक औषधियां' : 'Ayurvedic Medicines',
        recommended: language === 'hi' ? 'सुझाई गई जड़ी-बूटियाँ' : 'Recommended Herbs',
        consultBtn: language === 'hi' ? 'विशेषज्ञ डॉक्टर से मिलें' : 'Consult Expert Doctor',
        noHerbs: language === 'hi' ? 'विशिष्ट उपचार के लिए डॉक्टर से पूछें।' : 'Consult a doctor for specific herbal treatments.'
    };

    return (
        <article className={styles.page}>
            {/* Header */}
            <header className={styles.header}>
                <div className="container">
                    <Link href="/health-conditions" className={styles.backLink}>
                        <ArrowLeft size={16} /> {t.back}
                    </Link>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.description}>{description}</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {/* Left: Info */}
                    <div className={styles.main}>
                        {/* Ayurvedic Explanation */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <Stethoscope size={24} className={styles.icon} /> {t.perspective}
                            </h2>
                            <p className={styles.text}>{overview}</p>

                            {ayurvedicExplanation && (
                                <div className={styles.highlightBox} style={{ marginTop: '1.5rem', background: '#fef3c7', padding: '1.5rem', borderRadius: '12px', borderLeft: '5px solid #d97706' }}>
                                    <h3 style={{ color: '#92400e', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <HeartPulse size={20} /> {t.theory}
                                    </h3>
                                    <p style={{ color: '#78350f', fontStyle: 'italic' }}>{ayurvedicExplanation}</p>
                                </div>
                            )}
                        </section>

                        <div className={styles.row}>
                            <section className={styles.subSection}>
                                <h3><Activity size={20} /> {t.symptoms}</h3>
                                <ul>
                                    {symptoms.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>

                            <section className={styles.subSection}>
                                <h3><Brain size={20} /> {t.causes}</h3>
                                <ul>
                                    {causes.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>
                        </div>

                        {/* Diet & Lifestyle (Split Grid) */}
                        {dietLifestyle && (
                            <section className={styles.section}>
                                <div className={styles.twoColGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                    <div className={styles.card} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#166534' }}>
                                            <Utensils size={20} /> {t.diet}
                                        </h3>
                                        <ul className={styles.checkList}>
                                            {dietLifestyle.diet.map((item: string, i: number) => (
                                                <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                                    <span style={{ color: '#166534' }}>•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.card} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#1d4ed8' }}>
                                            <Activity size={20} /> {t.lifestyle}
                                        </h3>
                                        <ul className={styles.checkList}>
                                            {dietLifestyle.lifestyle.map((item: string, i: number) => (
                                                <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                                    <span style={{ color: '#1d4ed8' }}>•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Do's and Don'ts */}
                        {dosDonts && (
                            <section className={styles.section}>
                                <div className={styles.twoColGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                    <div className={styles.doCard} style={{ border: '1px solid #bbf7d0', background: '#f0fdf4', padding: '1.5rem', borderRadius: '12px' }}>
                                        <h3 style={{ color: '#15803d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Check size={20} /> {t.dos}
                                        </h3>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {dosDonts.dos.map((item: string, i: number) => (
                                                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                                                    <Check size={16} color="#15803d" style={{ flexShrink: 0, marginTop: '4px' }} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.dontCard} style={{ border: '1px solid #fecaca', background: '#fef2f2', padding: '1.5rem', borderRadius: '12px' }}>
                                        <h3 style={{ color: '#b91c1c', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <X size={20} /> {t.donts}
                                        </h3>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {dosDonts.donts.map((item: string, i: number) => (
                                                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                                                    <X size={16} color="#b91c1c" style={{ flexShrink: 0, marginTop: '4px' }} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Fallback for basic recommendations if no deep data */}
                        {!dietLifestyle && !dosDonts && recommendations && (
                            <section className={styles.section}>
                                <h2>{t.diet}</h2>
                                <ul className={styles.recommendations}>
                                    {recommendations.map((r: string, i: number) => <li key={i}>{r}</li>)}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Right: Recommended Herbs & Medicines */}
                    <aside className={styles.sidebar}>
                        <div className={styles.herbsBox}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Leaf size={20} /> {t.recommended}
                            </h3>
                            {recommendedHerbs.length > 0 ? (
                                <div className={styles.herbList}>
                                    {recommendedHerbs.map(herb => (
                                        <Link key={herb.id} href={`/herbs/${herb.slug}`} className={styles.herbItem}>
                                            <div className={styles.herbIcon}>
                                                {(language === 'hi' ? (herb.name_hi || herb.name) : herb.name).slice(0, 2)}
                                            </div>
                                            <div>
                                                <h4>{language === 'hi' ? (herb.name_hi || herb.name) : herb.name}</h4>
                                                <span className={styles.herbBenefit}>
                                                    {language === 'hi' ? (herb.benefit_hi || herb.benefit) : herb.benefit}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p>{t.noHerbs}</p>
                            )}

                            {/* Medicines Section */}
                            {medicines && (
                                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <Pill size={20} /> {t.medicines}
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {medicines.map((med: string, i: number) => (
                                            <span key={i} style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.25rem 0.75rem', borderRadius: 'full', fontSize: '0.9rem', fontWeight: 500, border: '1px solid #c7d2fe' }}>
                                                {med}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className={styles.ctaBox} style={{ marginTop: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                                <Stethoscope size={32} style={{ margin: '0 auto 1rem', color: 'var(--primary-color)' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Custom Ayurvedic Plan?</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    Get a personalized diet and treatment plan from expert Vaidyas.
                                </p>
                                <Link href="/doctors" className="btn btn-primary" style={{ width: '100%' }}>
                                    {t.consultBtn}
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
