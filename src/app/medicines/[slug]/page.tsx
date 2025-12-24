import { medicines } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Info, ShieldCheck, Thermometer, Clock, FileText } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return medicines.map((med) => ({
        slug: med.slug,
    }));
}

export default async function MedicineDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const medicine = medicines.find((m) => m.slug === slug);

    if (!medicine) {
        notFound();
    }

    return (
        <article className={styles.article}>
            <div className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <Link href="/medicines" className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to Medicines
                        </Link>
                        <span className={styles.badge}>{medicine.category}</span>
                        <h1 className={styles.title}>{medicine.name}</h1>
                        <p className={styles.subtitle}>{medicine.description}</p>
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <div className={styles.imageCard}>
                            <Image
                                src={medicine.image}
                                alt={medicine.name}
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
                                <Info className={styles.titleIcon} /> Description & Indication
                            </h2>
                            <p className={styles.text}>{medicine.details.indication}</p>
                        </section>

                        <div className={styles.twoColGrid}>
                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>Key Ingredients</h2>
                                <div className={styles.tags}>
                                    {medicine.details.ingredients.map((ing, i) => (
                                        <span key={i} className={styles.tag}>{ing}</span>
                                    ))}
                                </div>
                            </section>

                            <section className={styles.cardSection}>
                                <h2 className={styles.cardTitle}>Primary Benefits</h2>
                                <ul className={styles.benefitList}>
                                    {medicine.benefits.map((b, i) => (
                                        <li key={i} className={styles.listItem}>
                                            <CheckCircle size={18} className={styles.checkIcon} /> {b}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <Clock className={styles.titleIcon} /> Recommended Dosage
                            </h2>
                            <p className={styles.text}>{medicine.details.dosage}</p>
                        </section>

                        <section className={`${styles.section} ${styles.safetyBox}`}>
                            <h2 className={styles.safetyTitle}>
                                <ShieldCheck size={20} /> Safety Profile
                            </h2>
                            <p className={styles.text}>{medicine.details.safety}</p>
                        </section>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.stickyCard}>
                            <h3>Consult a Doctor</h3>
                            <p>Is {medicine.name} suitable for your condition? Talk to an expert Vaidya.</p>
                            <Link href="/consult" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                Book Consultation
                            </Link>

                            <div className={styles.divider}></div>

                            <p className={styles.disclaimer}>
                                * Ayurvedic medicines should be taken under medical supervision.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
