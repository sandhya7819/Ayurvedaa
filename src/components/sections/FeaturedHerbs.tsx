import Link from 'next/link';
import { popularHerbs } from '@/lib/data';
import styles from './FeaturedHerbs.module.css';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function FeaturedHerbs() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Nature&apos;s Pharmacy</h2>
                    <p className={styles.subtitle}>Explore the healing power of the most potent Ayurvedic herbs.</p>
                </div>

                <div className={styles.grid}>
                    {popularHerbs.slice(0, 3).map((herb) => (
                        <div key={herb.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={herb.image}
                                    alt={herb.name}
                                    fill
                                    className={styles.placeholder}
                                />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.benefitBadge}>{herb.benefit}</span>
                                <h3 className={styles.herbName}>{herb.name}</h3>
                                <p className={styles.description}>{herb.description}</p>
                                <Link href={`/herbs/${herb.slug}`} className={styles.link}>
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
