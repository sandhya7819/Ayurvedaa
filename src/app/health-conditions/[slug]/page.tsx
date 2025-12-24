import { healthConditions, popularHerbs } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return healthConditions.map((condition) => ({
        slug: condition.slug,
    }));
}

export default function ConditionDetail({ params }: { params: { slug: string } }) {
    const condition = healthConditions.find((c) => c.slug === params.slug);

    if (!condition) {
        notFound();
    }

    // Find recommended herbs
    const recommendedHerbs = popularHerbs.filter(herb =>
        condition.recommendedHerbs?.includes(herb.slug)
    );

    return (
        <article className={styles.page}>
            {/* Header */}
            <header className={styles.header}>
                <div className="container">
                    <Link href="/health-conditions" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Conditions
                    </Link>
                    <div className={styles.iconWrapper}>{condition.icon}</div>
                    <h1 className={styles.title}>{condition.name}</h1>
                    <p className={styles.description}>{condition.description}</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {/* Left: Info */}
                    <div className={styles.main}>
                        <section className={styles.section}>
                            <h2>Ayurvedic Perspective</h2>
                            <p>{condition.details.overview}</p>
                        </section>

                        <div className={styles.row}>
                            <section className={styles.subSection}>
                                <h3>Symptoms</h3>
                                <ul>
                                    {condition.details.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>

                            <section className={styles.subSection}>
                                <h3>Common Causes</h3>
                                <ul>
                                    {condition.details.causes.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </section>
                        </div>

                        <section className={styles.section}>
                            <h2>Diet & Lifestyle Recommendations</h2>
                            <ul className={styles.recommendations}>
                                {condition.details.recommendations.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </section>
                    </div>

                    {/* Right: Recommended Herbs */}
                    <aside className={styles.sidebar}>
                        <div className={styles.herbsBox}>
                            <h3>Recommended Herbs</h3>
                            {recommendedHerbs.length > 0 ? (
                                <div className={styles.herbList}>
                                    {recommendedHerbs.map(herb => (
                                        <Link key={herb.id} href={`/herbs/${herb.slug}`} className={styles.herbItem}>
                                            <div className={styles.herbIcon}>{herb.name.slice(0, 2)}</div>
                                            <div>
                                                <h4>{herb.name}</h4>
                                                <span className={styles.herbBenefit}>{herb.benefit}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p>Consult a doctor for specific herbal treatments.</p>
                            )}

                            <Link href="/doctors" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                                Consult a Doctor
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
