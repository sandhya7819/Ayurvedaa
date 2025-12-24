'use client';

import { doctors } from '@/lib/data';
import styles from './page.module.css';
import Image from 'next/image';
import { MapPin, Languages, Star } from 'lucide-react';

export default function DoctorsPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Consult Expert Vaidyas</h1>
                    <p className={styles.subtitle}>Book online consultations with certified Ayurvedic practitioners.</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className={styles.card}>
                            <div className={styles.profileHeader}>
                                <div className={styles.imageWrapper}>
                                    {/* In real app use doctor.image */}
                                    <div className={styles.avatarPlaceholder}>{doctor.name[0]}</div>
                                </div>
                                <div>
                                    <h2 className={styles.name}>{doctor.name}</h2>
                                    <span className={styles.specialization}>{doctor.specialization}</span>
                                    <div className={styles.rating}>
                                        <Star size={14} fill="currentColor" /> {doctor.experience} Exp
                                    </div>
                                </div>
                            </div>

                            <div className={styles.details}>
                                <p className={styles.about}>{doctor.about}</p>
                                <div className={styles.meta}>
                                    <div className={styles.metaItem}>
                                        <MapPin size={16} /> {doctor.location}
                                    </div>
                                    <div className={styles.metaItem}>
                                        <Languages size={16} /> {doctor.languages.join(', ')}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <button className="btn btn-primary" style={{ width: '100%' }}>
                                    Book Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
