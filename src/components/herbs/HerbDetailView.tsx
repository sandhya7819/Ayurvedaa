'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, Leaf, Flame, Activity, Beaker, Heart, Flower2, Coffee, BookOpen, Scroll, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/[lang]/herbs/[slug]/page.module.css';

import { healthConditions } from '@/lib/data';

interface HerbDetailViewProps {
    herb: any;
}

export default function HerbDetailView({ herb }: HerbDetailViewProps) {
    const { language } = useLanguage();

    // Find conditions that recommend this herb
    const relatedConditions = healthConditions.filter(condition =>
        condition.recommendedHerbs.includes(herb.slug)
    );

    const name = language === 'hi' ? (herb.name_hi || herb.name) : herb.name;
    const benefit = language === 'hi' ? (herb.benefit_hi || herb.benefit) : herb.benefit;
    const description = language === 'hi' ? (herb.description_hi || herb.description) : herb.description;

    // Details
    const details = language === 'hi' && herb.details_hi ? herb.details_hi : herb.details;
    const overview = details.overview || herb.details.overview;
    const benefitsList = details.benefits || herb.details.benefits;
    const detailedBenefits = details.detailed_benefits; // New field
    const usage = details.usage || herb.details.usage;
    const dosage = details.dosage;
    const sideEffects = details.side_effects;
    const medicinalUses = details.medicinal_uses;
    const precautions = details.precautions || herb.details.precautions;
    const drugInteractions = details.drug_interactions; // New field

    // Advanced Fields
    const scientificName = details.scientific_name;
    const family = details.family;
    const ayurvedicProperties = details.ayurvedic_properties; // New field
    const spiritualSignificance = details.spiritual_significance;
    const chemicalCompounds = details.chemical_compounds;
    const preparationMethods = details.preparation_methods;

    // Ultimate Fields (New)
    const varieties = details.varieties; // Array of {name, description, image}
    const mythology = details.mythology;
    const faqs = details.faqs;

    // Static Texts
    const t = {
        back: language === 'hi' ? 'जड़ी-बूटियों पर वापस' : 'Back to Herbs',
        balancing: language === 'hi' ? 'संतुलन' : 'Balancing',
        overview: language === 'hi' ? 'परिचय' : 'Overview',
        benefits: language === 'hi' ? 'मुख्य लाभ' : 'Key Benefits',
        detailedBenefits: language === 'hi' ? 'विस्तृत लाभ' : 'Detailed Health Benefits',
        usage: language === 'hi' ? 'उपयोग और खुराक' : 'Usage & Dosage',
        dosage: language === 'hi' ? 'खुराक' : 'Dosage',
        precautions: language === 'hi' ? 'सावधानियां और दुष्प्रभाव' : 'Precautions & Side Effects',
        sideEffects: language === 'hi' ? 'दुष्प्रभाव' : 'Side Effects',
        interactions: language === 'hi' ? 'दवा पारस्परिक क्रिया' : 'Drug Interactions',
        medicinalUses: language === 'hi' ? 'औषधीय उपयोग' : 'Medicinal Uses',
        ayurvedicProfile: language === 'hi' ? 'आयुर्वेदिक गुण' : 'Ayurvedic Profile',
        interested: language === 'hi' ? `क्या आप ${name} में रुचि रखते हैं ? ` : `Interested in ${herb.name}?`,
        productDesc: language === 'hi' ? 'इस जड़ी-बूटी से युक्त उच्च गुणवत्ता वाले, प्रामाणिक आयुर्वेदिक उत्पाद खोजें।' : 'Find high-quality, authentic Ayurvedic products containing this herb.',
        findProducts: language === 'hi' ? 'उत्पाद खोजें' : 'Find Products',
        consultTitle: language === 'hi' ? 'डॉक्टर से परामर्श करें' : 'Consult a Doctor',
        consultDesc: language === 'hi' ? `निश्चित नहीं हैं कि ${name} आपके शरीर के प्रकार के लिए सही है ? विशेषज्ञ की सलाह लें।` : `Unsure if ${herb.name} is right for your body type ? Get expert advice.`,
        bookConsult: language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation',
        scientific: language === 'hi' ? 'वैज्ञानिक विवरण' : 'Scientific Details',
        chemical: language === 'hi' ? 'रासायनिक घटक' : 'Key Chemical Compounds',
        spiritual: language === 'hi' ? 'आध्यात्मिक महत्व' : 'Spiritual Significance',
        preparation: language === 'hi' ? 'बनाने की विधि' : 'Preparation Methods',
        varieties: language === 'hi' ? 'प्रकार' : 'Varieties',
        mythology: language === 'hi' ? 'पौराणिक कथा' : 'Mythology',
        faqs: language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'FAQs'
    };

    const renderDoshaVisuals = () => {
        const d = herb.dosha ? herb.dosha.toLowerCase() : '';
        const isVata = d.includes('vata') || d.includes('tridosha');
        const isPitta = d.includes('pitta') || d.includes('tridosha');
        const isKapha = d.includes('kapha') || d.includes('tridosha');

        return (
            <div className={styles.doshaVisuals}>
                <div className={`${styles.doshaOrb} ${styles.vata} ${isVata ? styles.active : ''}`} title="Vata (Air + Space)">
                    <span>Vata</span>
                </div>
                <div className={`${styles.doshaOrb} ${styles.pitta} ${isPitta ? styles.active : ''}`} title="Pitta (Fire + Water)">
                    <span>Pitta</span>
                </div>
                <div className={`${styles.doshaOrb} ${styles.kapha} ${isKapha ? styles.active : ''}`} title="Kapha (Water + Earth)">
                    <span>Kapha</span>
                </div>
            </div>
        );
    };

    return (
        <article className={styles.article}>
            <div className={styles.hero}>
                <div className={`container ${styles.heroContainer} `}>
                    <div className={styles.heroContent}>
                        <Link href={`/${language}/herbs`} className={styles.backLink}>
                            <ArrowLeft size={16} /> {t.back}
                        </Link>

                        {renderDoshaVisuals()}
                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8, marginTop: '-1rem' }}>
                            <Flame size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> {t.balancing} : {herb.dosha}
                        </p>

                        <h1 className={styles.name}>{name}</h1>
                        <p className={styles.subtitle}>{benefit}</p>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <div className={styles.imageCard}>
                            <Image
                                src={herb.image}
                                alt={herb.name}
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
                        {/* Overview */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <Leaf className={styles.titleIcon} /> {t.overview}
                            </h2>
                            <p className={styles.text}>{overview}</p>

                            {/* Scientific & Ayurvedic Profile Grid */}
                            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                {scientificName && (
                                    <div className={styles.scientificBox} style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                        <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)' }}>
                                            <BookOpen size={16} /> {t.scientific}
                                        </h4>
                                        <div style={{ marginBottom: '0.75rem' }}>
                                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{language === 'hi' ? 'वैज्ञानिक नाम' : 'Scientific Name'}</p>
                                            <p style={{ fontWeight: 600, fontStyle: 'italic' }}>{scientificName}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{language === 'hi' ? 'परिवार' : 'Family'}</p>
                                            <p style={{ fontWeight: 600 }}>{family}</p>
                                        </div>
                                    </div>
                                )}

                                {ayurvedicProperties && (
                                    <div className={styles.scientificBox} style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: 'var(--radius-md)', border: '1px solid #fcd34d' }}>
                                        <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b45309' }}>
                                            <Flame size={16} /> {t.ayurvedicProfile}
                                        </h4>
                                        <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.9rem' }}>
                                            {ayurvedicProperties.rasa && (<div><strong>Rasa (Taste):</strong> {ayurvedicProperties.rasa}</div>)}
                                            {ayurvedicProperties.guna && (<div><strong>Guna (Quality):</strong> {ayurvedicProperties.guna}</div>)}
                                            {ayurvedicProperties.virya && (<div><strong>Virya (Potency):</strong> {ayurvedicProperties.virya}</div>)}
                                            {ayurvedicProperties.vipaka && (<div><strong>Vipaka:</strong> {ayurvedicProperties.vipaka}</div>)}
                                            {ayurvedicProperties.prabhava && (<div><strong>Prabhava:</strong> {ayurvedicProperties.prabhava}</div>)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Medicinal Uses Tags */}
                        {medicinalUses && medicinalUses.length > 0 && (
                            <section className={styles.section} style={{ marginTop: '-1rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t.medicinalUses}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {medicinalUses.map((use: string, idx: number) => (
                                        <span key={idx} style={{
                                            padding: '0.25rem 0.75rem',
                                            background: '#e0f2fe',
                                            color: '#0369a1',
                                            borderRadius: '999px',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        }}>
                                            {use}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Detailed Benefits - The "Meat" of the content */}
                        {detailedBenefits && detailedBenefits.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    <Heart className={styles.titleIcon} /> {t.detailedBenefits}
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {detailedBenefits.map((item: any, idx: number) => (
                                        <div key={idx}>
                                            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: 600 }}>{item.title}</h3>
                                            <p className={styles.text}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}


                        {/* Disease Mapping (Treats Conditions) */}
                        {relatedConditions.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    <Activity className={styles.titleIcon} /> {language === 'hi' ? 'इन बीमारियों में लाभकारी' : 'Treats Conditions'}
                                </h2>
                                <div className={styles.conditionsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                    {relatedConditions.map((cond) => (
                                        <Link key={cond.id} href={`/${language}/health-conditions/${cond.slug}`} className={styles.conditionCard} style={{
                                            padding: '1rem',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: 'var(--radius-md)',
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            transition: 'all 0.2s',
                                            background: 'white'
                                        }}>
                                            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{language === 'hi' ? (cond.name_hi || cond.name) : cond.name}</div>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)' }}>{language === 'hi' ? 'और जानें →' : 'Learn more →'}</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Mythology (If Exists) */}
                        {mythology && (
                            <section className={styles.section} style={{ background: '#fff8f0', borderLeft: '4px solid #d97706', padding: '1.5rem', borderRadius: '4px' }}>
                                <h2 className={styles.sectionTitle} style={{ color: '#b45309' }}>
                                    <Scroll className={styles.titleIcon} size={20} /> {t.mythology}
                                </h2>
                                <p className={styles.text} style={{ fontStyle: 'italic', color: '#78350f' }}>{mythology}</p>
                            </section>
                        )}

                        {/* Spiritual Significance */}
                        {spiritualSignificance && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    <Flower2 className={styles.titleIcon} /> {t.spiritual}
                                </h2>
                                <p className={styles.text}>{spiritualSignificance}</p>
                            </section>
                        )}

                        {/* Varieties (If Exists) */}
                        {varieties && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>{t.varieties}</h2>
                                <div className={styles.varietiesGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                                    {varieties.map((v: any, idx: number) => (
                                        <div key={idx} className={styles.varietyCard} style={{ textAlign: 'center', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
                                            <div style={{ width: '60px', height: '60px', margin: '0 auto 1rem', borderRadius: '50%', background: '#ddd', overflow: 'hidden', position: 'relative' }}>
                                                {/* Fallback or real image logic can go here */}
                                                <div style={{ width: '100%', height: '100%', backgroundColor: '#a7f3d0' }}>
                                                    {v.image && <Image src={v.image} alt={v.name} fill style={{ objectFit: 'cover' }} />}
                                                </div>
                                            </div>
                                            <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>{v.name}</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{v.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className={styles.twoColGrid}>
                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>{t.benefits}</h2>
                                <ul className={styles.list}>
                                    {benefitsList.map((item: string, index: number) => (
                                        <li key={index} className={styles.listItem}>
                                            <CheckCircle size={18} className={styles.checkIcon} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>{t.usage}</h2>
                                <div className={styles.usageContent}>
                                    <Activity size={24} className={styles.usageIcon} />
                                    <div style={{ width: '100%' }}>
                                        <p className={styles.text} style={{ marginBottom: '1rem' }}>{usage}</p>
                                        {dosage && (
                                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e1e7ef' }}>
                                                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{t.dosage}</h4>
                                                <p className={styles.text} style={{ fontWeight: 500 }}>{dosage}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Chemical Compounds */}
                        {chemicalCompounds && (
                            <section className={styles.section} style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                                <h2 className={styles.sectionTitle}>
                                    <Beaker className={styles.titleIcon} /> {t.chemical}
                                </h2>
                                <div className={styles.compoundsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                    {chemicalCompounds.map((comp: any, idx: number) => (
                                        <div key={idx} className={styles.compoundCard} style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                                            <h4 style={{ marginBottom: '0.25rem', color: 'var(--primary-color)' }}>{comp.name}</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{comp.effect}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Preparation Methods */}
                        {preparationMethods && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    <Coffee className={styles.titleIcon} /> {t.preparation}
                                </h2>
                                <div className={styles.prepGrid} style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
                                    {preparationMethods.map((method: any, idx: number) => (
                                        <div key={idx} className={styles.prepCard} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                                            <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <BookOpen size={18} /> {method.title}
                                            </h3>
                                            <ol style={{ paddingLeft: '1.25rem' }}>
                                                {method.steps.map((step: string, sIdx: number) => (
                                                    <li key={sIdx} style={{ marginBottom: '0.5rem' }}>{step}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section className={`${styles.section} ${styles.warningBox} `}>
                            <h2 className={styles.warningTitle}>
                                <AlertTriangle size={20} /> {t.precautions}
                            </h2>
                            <p className={styles.text}>{precautions}</p>

                            {sideEffects && (
                                <div style={{ marginTop: '1.5rem' }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#991b1b', marginBottom: '0.5rem' }}>{t.sideEffects}:</h4>
                                    <p className={styles.text} style={{ color: '#7f1d1d' }}>{sideEffects}</p>
                                </div>
                            )}

                            {drugInteractions && drugInteractions.length > 0 && (
                                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #fecaca' }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#991b1b', marginBottom: '0.5rem' }}>{t.interactions}:</h4>
                                    <ul style={{ paddingLeft: '1.2rem', color: '#7f1d1d' }}>
                                        {drugInteractions.map((interaction: string, idx: number) => (
                                            <li key={idx} style={{ marginBottom: '0.25rem' }}>{interaction}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </section>

                        {/* FAQs (If Exists) */}
                        {faqs && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    <HelpCircle className={styles.titleIcon} /> {t.faqs}
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {faqs.map((faq: any, idx: number) => (
                                        <div key={idx} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                                            <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>{faq.question}</h4>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.stickyCard}>
                            <h3>{t.interested}</h3>
                            <p>{t.productDesc}</p>
                            <Link href={`/${language}/products?search=${herb.slug}`} className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', textAlign: 'center' }}>
                                {t.findProducts}
                            </Link>

                            <div className={styles.divider}></div>

                            <h3>{t.consultTitle}</h3>
                            <p>{t.consultDesc}</p>
                            <Link href={`/${language}/consult`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                {t.bookConsult}
                            </Link>
                        </div>
                    </aside>
                    {/* Sources / References */}
                    {herb.sources && (
                        <div className={`${styles.card} ${styles.references}`}>
                            <h3>📚 References & Sources</h3>
                            <ul style={{ fontSize: '0.85rem', color: '#666', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                {herb.sources.map((source: string, i: number) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{source}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
