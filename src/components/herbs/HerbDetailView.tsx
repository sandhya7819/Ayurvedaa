'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, Leaf, Flame, Activity, Beaker, Heart, Flower2, Coffee, BookOpen, Scroll, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/herbs/[slug]/page.module.css';

interface HerbDetailViewProps {
    herb: any;
}

export default function HerbDetailView({ herb }: HerbDetailViewProps) {
    const { language } = useLanguage();

    const name = language === 'hi' ? (herb.name_hi || herb.name) : herb.name;
    const benefit = language === 'hi' ? (herb.benefit_hi || herb.benefit) : herb.benefit;
    const description = language === 'hi' ? (herb.description_hi || herb.description) : herb.description;

    // Details
    const details = language === 'hi' && herb.details_hi ? herb.details_hi : herb.details;
    const overview = details.overview || herb.details.overview;
    const benefitsList = details.benefits || herb.details.benefits;
    const usage = details.usage || herb.details.usage;
    const precautions = details.precautions || herb.details.precautions;

    // Advanced Fields
    const scientificName = details.scientific_name;
    const family = details.family;
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
        usage: language === 'hi' ? 'उपयोग कैसे करें' : 'How to Use',
        precautions: language === 'hi' ? 'सावधानियां' : 'Precautions',
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

    return (
        <article className={styles.article}>
            <div className={styles.hero}>
                <div className={`container ${styles.heroContainer} `}>
                    <div className={styles.heroContent}>
                        <Link href="/herbs" className={styles.backLink}>
                            <ArrowLeft size={16} /> {t.back}
                        </Link>
                        <span className={styles.doshaTag}>
                            <Flame size={14} /> {herb.dosha} {t.balancing}
                        </span>
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

                            {scientificName && (
                                <div className={styles.scientificBox} style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{language === 'hi' ? 'वैज्ञानिक नाम' : 'Scientific Name'}</p>
                                        <p style={{ fontWeight: 600, fontStyle: 'italic' }}>{scientificName}</p>
                                    </div>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{language === 'hi' ? 'परिवार' : 'Family'}</p>
                                        <p style={{ fontWeight: 600 }}>{family}</p>
                                    </div>
                                </div>
                            )}
                        </section>

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
                                                {/* Fallback div or Image if available. Using simple div for now as placeholders are tricky without real images */}
                                                <div style={{ width: '100%', height: '100%', backgroundColor: '#a7f3d0' }}></div>
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
                                    <p className={styles.text}>{usage}</p>
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
                            <Link href={`/ products ? search = ${herb.slug} `} className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', textAlign: 'center' }}>
                                {t.findProducts}
                            </Link>

                            <div className={styles.divider}></div>

                            <h3>{t.consultTitle}</h3>
                            <p>{t.consultDesc}</p>
                            <Link href="/consult" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                {t.bookConsult}
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
