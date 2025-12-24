
import { popularHerbs } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, AlertTriangle, Leaf, Flame, Activity } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return popularHerbs.map((herb) => ({
        slug: herb.slug,
    }));
}

export default async function HerbDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const herb = popularHerbs.find((h) => h.slug === slug);

    if (!herb) {
        notFound();
    }

    return (
        <article className={styles.article}>
            <div className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <Link href="/herbs" className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to Herbs
                        </Link>
                        <span className={styles.doshaTag}>
                            <Flame size={14} /> {herb.dosha} Balancing
                        </span>
                        <h1 className={styles.name}>{herb.name}</h1>
                        <p className={styles.subtitle}>{herb.benefit}</p>
                        <p className={styles.description}>{herb.description}</p>
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
                                <Leaf className={styles.titleIcon} /> Overview
                            </h2>
                            <p className={styles.text}>{herb.details.overview}</p>
                        </section>

                        <div className={styles.twoColGrid}>
                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>Key Benefits</h2>
                                <ul className={styles.list}>
                                    {herb.details.benefits.map((benefit, index) => (
                                        <li key={index} className={styles.listItem}>
                                            <CheckCircle size={18} className={styles.checkIcon} />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>How to Use</h2>
                                <div className={styles.usageContent}>
                                    <Activity size={24} className={styles.usageIcon} />
                                    <p className={styles.text}>{herb.details.usage}</p>
                                </div>
                            </section>
                        </div>

                        <section className={`${styles.section} ${styles.warningBox}`}>
                            <h2 className={styles.warningTitle}>
                                <AlertTriangle size={20} /> Precautions
                            </h2>
                            <p className={styles.text}>{herb.details.precautions}</p>
                        </section>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.stickyCard}>
                            <h3>Interested in {herb.name}?</h3>
                            <p>Find high-quality, authentic Ayurvedic products containing this herb.</p>
                            <Link href={`/products?search=${herb.slug}`} className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', textAlign: 'center' }}>
                                Find Products
                            </Link>

                            <div className={styles.divider}></div>

                            <h3>Consult a Doctor</h3>
                            <p>Unsure if {herb.name} is right for your body type? Get expert advice.</p>
                            <Link href="/consult" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                Book Consultation
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
