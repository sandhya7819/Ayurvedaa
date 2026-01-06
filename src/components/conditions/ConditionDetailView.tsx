'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft, Stethoscope, Activity, Utensils, Check, X, Pill, Leaf, HeartPulse, Brain,
    PersonStanding, Droplets, Clock, Candy, Scale, Battery, Eye, Bandage, Info,
    Sprout, Disc, Eraser, GlassWater, ArrowDownCircle, RotateCw, Sun, Wind, ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/[lang]/health-conditions/[slug]/page.module.css';

import { medicines as allMedicines } from '@/lib/data';

interface ConditionDetailViewProps {
    condition: any;
    recommendedHerbs: any[];
}

export default function ConditionDetailView({ condition, recommendedHerbs }: ConditionDetailViewProps) {
    const { language } = useLanguage();

    // Helper to get icon component
    const getIcon = (name: string) => {
        switch (name) {
            case 'Droplets': return Droplets;
            case 'Clock': return Clock;
            case 'Candy': return Candy;
            case 'Activity': return Activity;
            case 'Scale': return Scale;
            case 'Battery': return Battery;
            case 'Eye': return Eye;
            case 'Bandage': return Bandage;
            case 'Sprout': return Sprout;
            case 'Disc': return Disc;
            case 'Eraser': return Eraser;
            case 'GlassWater': return GlassWater;
            case 'ArrowDownCircle': return ArrowDownCircle;
            case 'RotateCw': return RotateCw;
            case 'Sun': return Sun;
            case 'Wind': return Wind;
            default: return Info;
        }
    };

    // ... (rest of the component logic remains same until return)

    // ... inside return ...



    const medicinesList = language === 'hi' && condition.details_hi ? condition.details_hi.medicines : condition.details.medicines;

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
    const homeRemedies = details.home_remedies;
    const yogaAsanas = details.yoga_asanas;
    const types = details.types; // New types array

    const t = {
        types: language === 'hi' ? 'प्रकार और चरण' : 'Types & Stages',
        severity: language === 'hi' ? 'गंभीरता' : 'Severity',
        back: language === 'hi' ? 'स्थितियों पर वापस' : 'Back to Conditions',
        perspective: language === 'hi' ? 'आयुर्वेदिक दृष्टिकोण' : 'Ayurvedic Perspective',
        theory: language === 'hi' ? 'आयुर्वेद सिद्धांत' : 'Ayurvedic Theory',
        symptoms: language === 'hi' ? 'लक्षण' : 'Symptoms',
        causes: language === 'hi' ? 'सामान्य कारण' : 'Common Causes',
        diet: language === 'hi' ? 'आहार सुझाव' : 'Diet Recommendations',
        lifestyle: language === 'hi' ? 'जीवन शैली' : 'Lifestyle Changes',
        remedies: language === 'hi' ? 'घरेलू उपचार' : 'Home Remedies',
        yoga: language === 'hi' ? 'योगासन' : 'Yoga Asanas',
        dos: language === 'hi' ? 'क्या करें (Do\'s)' : 'Do\'s',
        donts: language === 'hi' ? 'क्या न करें (Don\'ts)' : 'Don\'ts',
        medicines: language === 'hi' ? 'आयुर्वेदिक औषधियां' : 'Ayurvedic Medicines',
        recommended: language === 'hi' ? 'सुझाई गई जड़ी-बूटियाँ' : 'Recommended Herbs',
        consultBtn: language === 'hi' ? 'विशेषज्ञ डॉक्टर से मिलें' : 'Consult Expert Doctor',
        noHerbs: language === 'hi' ? 'विशिष्ट उपचार के लिए डॉक्टर से पूछें।' : 'Consult a doctor for specific herbal treatments.'
    };

    return (
        <article className={styles.page}>
            {/* Hero Header */}
            <header className={styles.header}>
                {condition.image && (
                    <Image
                        src={condition.image}
                        alt={name}
                        fill
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                )}
                <div className={styles.headerOverlay}></div>
                <div className={styles.headerContent}>
                    <Link href={`/${language}/health-conditions`} className={styles.backLink}>
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
                                <div className={styles.highlightBox}>
                                    <h3 style={{ color: '#92400e', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem' }}>
                                        <HeartPulse size={24} color="#d97706" /> {t.theory}
                                    </h3>
                                    <p style={{ color: '#78350f', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.8' }}>"{ayurvedicExplanation}"</p>
                                </div>
                            )}
                        </section>

                        {/* Types Section - Visual & Clickable Cards */}
                        {types && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle} style={{
                                    borderLeft: '4px solid #F59E0B',
                                    paddingLeft: '1rem',
                                    marginBottom: '2rem'
                                }}>
                                    {t.types}
                                </h2>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                    gap: '2rem'
                                }}>
                                    {types.map((type: any, i: number) => (
                                        <Link
                                            key={i}
                                            href={`/${language}/health-conditions/${condition.slug}/type/${type.slug || i}`}
                                            className={styles.typeCard}
                                            style={{
                                                display: 'block',
                                                background: 'white',
                                                borderRadius: '24px',
                                                border: '1px solid #e2e8f0',
                                                padding: '2rem',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-8px)';
                                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                                                e.currentTarget.style.borderColor = '#cbd5e1';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                                                e.currentTarget.style.borderColor = '#e2e8f0';
                                            }}
                                        >
                                            {/* Top Banner for Severity */}
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'start',
                                                marginBottom: '1.25rem'
                                            }}>
                                                <div style={{
                                                    background: type.severity === 'Severe' || type.severity === 'High Alert' ? '#fef2f2' : type.severity === 'Chronic' ? '#fefce8' : '#f0fdf4',
                                                    color: type.severity === 'Severe' || type.severity === 'High Alert' ? '#991b1b' : type.severity === 'Chronic' ? '#854d0e' : '#166534',
                                                    padding: '0.4rem 1rem',
                                                    borderRadius: '99px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    border: `1px solid ${type.severity === 'Severe' || type.severity === 'High Alert' ? '#fecaca' : type.severity === 'Chronic' ? '#fde047' : '#bbf7d0'}`
                                                }}>
                                                    {type.severity}
                                                </div>
                                                <div style={{
                                                    background: '#f1f5f9',
                                                    borderRadius: '50%',
                                                    padding: '0.5rem',
                                                    color: '#64748b'
                                                }}>
                                                    <ArrowDownCircle size={20} style={{ transform: 'rotate(-90deg)' }} />
                                                </div>
                                            </div>

                                            <h3 style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 800,
                                                color: '#1e293b',
                                                marginBottom: '1rem',
                                                lineHeight: 1.2
                                            }}>
                                                {type.name}
                                            </h3>

                                            <p style={{
                                                fontSize: '1rem',
                                                color: '#64748b',
                                                lineHeight: 1.7,
                                                marginBottom: '0'
                                            }}>
                                                {type.description}
                                            </p>

                                            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534', fontWeight: 600, fontSize: '0.95rem' }}>
                                                {language === 'hi' ? 'विवरण देखें' : 'View Details'} <ArrowRight size={16} />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className={styles.row}>
                            {/* Symptoms - Visual Grid */}
                            <section className={styles.subSection} style={{ gridColumn: '1 / -1' }}>
                                <h3><Activity size={24} /> {t.symptoms}</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                                    {symptoms.map((s: any, i: number) => {
                                        const text = typeof s === 'string' ? s : s.text;
                                        const iconName = typeof s === 'object' ? s.icon : null;
                                        const IconComp = iconName ? getIcon(iconName) : Activity;

                                        return (
                                            <div key={i} className={styles.symptomCard}>
                                                <div style={{ padding: '0.6rem', background: '#f0f9ff', borderRadius: '10px', color: '#0369a1' }}>
                                                    <IconComp size={22} />
                                                </div>
                                                <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>{text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>

                            <section className={styles.subSection} style={{ gridColumn: '1 / -1' }}>
                                <h3><Brain size={24} /> {t.causes}</h3>
                                <ul>
                                    {causes.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>
                        </div>

                        {/* Diet & Lifestyle (Split Grid) */}
                        {dietLifestyle && (
                            <section className={styles.section}>
                                <div className={styles.twoColGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    <div className={styles.card} style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '20px', border: '1px solid #dcfce7' }}>
                                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534', fontSize: '1.35rem' }}>
                                            <Utensils size={24} /> {t.diet}
                                        </h3>
                                        <ul className={styles.checkList}>
                                            {dietLifestyle.diet.map((item: string, i: number) => (
                                                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                                                    <span style={{ color: '#166534', fontSize: '1.25rem', lineHeight: '1rem' }}>•</span>
                                                    <span style={{ color: '#14532d', lineHeight: 1.6 }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.card} style={{ background: '#eff6ff', padding: '2rem', borderRadius: '20px', border: '1px solid #dbeafe' }}>
                                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#1d4ed8', fontSize: '1.35rem' }}>
                                            <Activity size={24} /> {t.lifestyle}
                                        </h3>
                                        <ul className={styles.checkList}>
                                            {dietLifestyle.lifestyle.map((item: string, i: number) => (
                                                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                                                    <span style={{ color: '#1d4ed8', fontSize: '1.25rem', lineHeight: '1rem' }}>•</span>
                                                    <span style={{ color: '#1e3a8a', lineHeight: 1.6 }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Home Remedies Section */}
                        {homeRemedies && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#be123c' }}>
                                    <Leaf size={28} /> {t.remedies}
                                </h2>
                                <div className={styles.remedyGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    {homeRemedies.map((remedy: any, i: number) => {
                                        const IconComp = remedy.icon ? getIcon(remedy.icon) : Leaf;
                                        return (
                                            <div key={i} className={styles.remedyCard}>
                                                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1 }}>
                                                    <IconComp size={48} color="#9f1239" />
                                                </div>
                                                <h4 style={{ color: '#9f1239', fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.1rem', paddingRight: '2rem' }}>{remedy.title}</h4>
                                                <p style={{ fontSize: '1rem', color: '#881337', lineHeight: 1.6 }}>{remedy.description}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}

                        {/* Yoga Asanas Section */}
                        {yogaAsanas && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4338ca' }}>
                                    <PersonStanding size={28} /> {t.yoga}
                                </h2>
                                <div className={styles.yogaGrid} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                                    {yogaAsanas.map((yoga: any, i: number) => {
                                        const IconComp = yoga.icon ? getIcon(yoga.icon) : PersonStanding;
                                        return (
                                            <div key={i} className={styles.yogaCard}>
                                                <div style={{ background: '#e0e7ff', padding: '0.75rem', borderRadius: '50%', color: '#4338ca' }}>
                                                    <IconComp size={24} />
                                                </div>
                                                <div>
                                                    <h4 style={{ color: '#312e81', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{yoga.name}</h4>
                                                    <p style={{ fontSize: '0.9rem', color: '#4f46e5' }}>{yoga.benefit}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
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


                        {/* Sources */}
                        {condition.sources && (
                            <section className={styles.section} style={{ marginTop: '3rem', fontSize: '0.85rem', color: '#6b7280', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                                <h3 style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.5rem' }}>📚 Scientific & Classical References</h3>
                                <ul style={{ paddingLeft: '1.5rem' }}>
                                    {condition.sources.map((s: string, i: number) => <li key={i} style={{ marginBottom: '0.25rem' }}>{s}</li>)}
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
                                        <Link key={herb.id} href={`/${language}/herbs/${herb.slug}`} className={styles.herbItem}>
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
                            {medicinesList && (
                                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <Pill size={20} /> {t.medicines}
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {medicinesList.map((medName: string, i: number) => {
                                            // Find medicine slug by name (simplified exact match for now)
                                            const medObj = allMedicines.find(m =>
                                                m.name === medName || m.name_hi === medName ||
                                                (language === 'hi' && m.name_hi === medName)
                                            );
                                            const linkHref = medObj ? `/${language}/medicines/${medObj.slug}` : '#';

                                            return (
                                                <Link
                                                    key={i}
                                                    href={linkHref}
                                                    style={{
                                                        background: '#e0e7ff',
                                                        color: '#3730a3',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '9999px',
                                                        fontSize: '0.9rem',
                                                        fontWeight: 500,
                                                        border: '1px solid #c7d2fe',
                                                        textDecoration: 'none',
                                                        cursor: medObj ? 'pointer' : 'default'
                                                    }}
                                                >
                                                    {medName}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div style={{ marginTop: '3rem', background: '#f0fdf4', padding: '2rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                                <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>{language === 'hi' ? 'विशेषज्ञ की सलाह चाहिए?' : 'Need Expert Advice?'}</h3>
                                <p style={{ color: '#15803d', marginBottom: '1.5rem' }}>
                                    {language === 'hi'
                                        ? 'अपनी स्थिति के लिए व्यक्तिगत आयुर्वेदिक उपचार योजना प्राप्त करें।'
                                        : 'Get a personalized Ayurvedic treatment plan for your condition.'}
                                </p>
                                <Link href={`/${language}/doctors`} className="btn btn-primary" style={{ width: '100%' }}>
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
