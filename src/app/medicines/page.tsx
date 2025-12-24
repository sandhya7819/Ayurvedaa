'use client';

import { medicines } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function MedicinesPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Classical Medicines</h1>
                    <p className={styles.subtitle}>Time-tested Ayurvedic formulations for holistic healing.</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {medicines.map((med) => (
                        <div key={med.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={med.image || '/images/product-generic.png'}
                                    alt={med.name}
                                    fill
                                    className={styles.cardImage}
                                />
                                <span className={styles.category}>{med.category}</span>
                            </div>

                            <div className={styles.cardContent}>
                                <h2 className={styles.name}>{med.name}</h2>
                                <p className={styles.description}>{med.description}</p>

                                <div className={styles.benefits}>
                                    {med.benefits.slice(0, 3).map((benefit, index) => (
                                        <span key={index} className={styles.badge}>{benefit}</span>
                                    ))}
                                </div>

                                <div className={styles.footer}>
                                    <Link href={`/medicines/${med.slug}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
