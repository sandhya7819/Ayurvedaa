'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/health-conditions/[slug]/page.module.css';
import Image from 'next/image';

interface ConditionDetailViewProps {
    condition: any;
    recommendedHerbs: any[];
}

export default function ConditionDetailView({ condition, recommendedHerbs }: ConditionDetailViewProps) {
    const { language } = useLanguage();

    const name = language === 'hi' ? (condition.name_hi || condition.name) : condition.name;
    const description = language === 'hi' ? (condition.description_hi || condition.description) : condition.description;

    // Details
    // Ideally we should have details_hi in data.ts. 
    // For now, we fall back to English content but translate labels.
    // If details_hi exists (future proofing), use it.
    const details = (language === 'hi' && condition.details_hi) ? condition.details_hi : condition.details;
    const overview = details.overview || condition.details.overview;
    const symptoms = details.symptoms || condition.details.symptoms;
    const causes = details.causes || condition.details.causes;
    const recommendations = details.recommendations || condition.details.recommendations;

    const t = {
        back: language === 'hi' ? 'स्थितियों पर वापस' : 'Back to Conditions',
        perspective: language === 'hi' ? 'आयुर्वेदिक दृष्टिकोण' : 'Ayurvedic Perspective',
        symptoms: language === 'hi' ? 'लक्षण' : 'Symptoms',
        causes: language === 'hi' ? 'सामान्य कारण' : 'Common Causes',
        diet: language === 'hi' ? 'आहार और जीवन शैली' : 'Diet & Lifestyle Recommendations',
        recommended: language === 'hi' ? 'सुझाई गई जड़ी-बूटियाँ' : 'Recommended Herbs',
        consult: language === 'hi' ? 'डॉक्टर से परामर्श करें' : 'Consult a Doctor',
        consultBtn: language === 'hi' ? 'डॉक्टर से मिलें' : 'Consult a Doctor',
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
                        <section className={styles.section}>
                            <h2>{t.perspective}</h2>
                            <p>{overview}</p>
                        </section>

                        <div className={styles.row}>
                            <section className={styles.subSection}>
                                <h3>{t.symptoms}</h3>
                                <ul>
                                    {symptoms.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>

                            <section className={styles.subSection}>
                                <h3>{t.causes}</h3>
                                <ul>
                                    {causes.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>
                        </div>

                        <section className={styles.section}>
                            <h2>{t.diet}</h2>
                            <ul className={styles.recommendations}>
                                {recommendations.map((r: string, i: number) => <li key={i}>{r}</li>)}
                            </ul>
                        </section>
                    </div>

                    {/* Right: Recommended Herbs */}
                    <aside className={styles.sidebar}>
                        <div className={styles.herbsBox}>
                            <h3>{t.recommended}</h3>
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

                            <Link href="/doctors" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                                {t.consultBtn}
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
