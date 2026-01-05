'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, Leaf, Flame, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
// import styles from '../../app/herbs/[slug]/page.module.css'; // This might be tricky with relative paths if css modules are collocated.
// Better to move styles or just use the same classnames and expect the parent to load styles? 
// No, CSS Modules are scoped. I should move the styles or import them correctly. 
// Let's assume I can import the module from the app dir if I use alias or relative path.
import styles from '@/app/herbs/[slug]/page.module.css';

interface HerbDetailViewProps {
    herb: any; // Using any for now to avoid strict typing issues with the new fields, but ideally should be typed
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

    // Static Texts
    const t = {
        back: language === 'hi' ? 'जड़ी-बूटियों पर वापस' : 'Back to Herbs',
        balancing: language === 'hi' ? 'संतुलन' : 'Balancing',
        overview: language === 'hi' ? 'परिचय' : 'Overview',
        benefits: language === 'hi' ? 'मुख्य लाभ' : 'Key Benefits',
        usage: language === 'hi' ? 'उपयोग कैसे करें' : 'How to Use',
        precautions: language === 'hi' ? 'सावधानियां' : 'Precautions',
        interested: language === 'hi' ? `क्या आप ${name} में रुचि रखते हैं?` : `Interested in ${herb.name}?`,
        productDesc: language === 'hi' ? 'इस जड़ी-बूटी से युक्त उच्च गुणवत्ता वाले, प्रामाणिक आयुर्वेदिक उत्पाद खोजें।' : 'Find high-quality, authentic Ayurvedic products containing this herb.',
        findProducts: language === 'hi' ? 'उत्पाद खोजें' : 'Find Products',
        consultTitle: language === 'hi' ? 'डॉक्टर से परामर्श करें' : 'Consult a Doctor',
        consultDesc: language === 'hi' ? `निश्चित नहीं हैं कि ${name} आपके शरीर के प्रकार के लिए सही है? विशेषज्ञ की सलाह लें।` : `Unsure if ${herb.name} is right for your body type? Get expert advice.`,
        bookConsult: language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'
    };

    return (
        <article className={styles.article}>
            <div className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
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
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <Leaf className={styles.titleIcon} /> {t.overview}
                            </h2>
                            <p className={styles.text}>{overview}</p>
                        </section>

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

                        <section className={`${styles.section} ${styles.warningBox}`}>
                            <h2 className={styles.warningTitle}>
                                <AlertTriangle size={20} /> {t.precautions}
                            </h2>
                            <p className={styles.text}>{precautions}</p>
                        </section>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.stickyCard}>
                            <h3>{t.interested}</h3>
                            <p>{t.productDesc}</p>
                            <Link href={`/products?search=${herb.slug}`} className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', textAlign: 'center' }}>
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
