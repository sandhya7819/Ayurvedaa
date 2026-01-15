'use client';

import { useState, useMemo } from 'react';
import { doctors } from '@/lib/data';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Languages, Star, Filter, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function DoctorsPage() {
    const { language } = useLanguage();
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Extract unique locations and specialties
    const locations = useMemo(() => ['All', ...Array.from(new Set(doctors.map(d => d.location)))], []);
    const specialties = useMemo(() => ['All', ...Array.from(new Set(doctors.map(d => d.specialization)))], []);

    // Filter Logic
    const filteredDoctors = doctors.filter(doctor => {
        const matchesLocation = selectedLocation === 'All' || doctor.location === selectedLocation;
        const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialization === selectedSpecialty;
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.about.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesLocation && matchesSpecialty && matchesSearch;
    });

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{language === 'hi' ? 'विशेषज्ञ वैद्यों से परामर्श करें' : 'Consult Expert Vaidyas'}</h1>
                    <p className={styles.subtitle}>
                        {language === 'hi'
                            ? 'प्रमाणित आयुर्वेदिक चिकित्सकों के साथ ऑनलाइन परामर्श बुक करें।'
                            : 'Book online consultations with certified Ayurvedic practitioners.'}
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Filters */}
                <div className={styles.controls} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className={styles.searchWrapper} style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input
                            type="text"
                            placeholder={language === 'hi' ? "डॉक्टर का नाम खोजें..." : "Search doctors by name..."}
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
                        />
                    </div>

                    <div className={styles.filterGroup} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', minWidth: '150px' }}
                        >
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                        <select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', minWidth: '200px' }}
                        >
                            {specialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                        </select>
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredDoctors.length > 0 ? filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className={styles.card}>
                            <div className={styles.profileHeader}>
                                <div className={styles.imageWrapper}>
                                    {/* In real app use doctor.image, fallback for now */}
                                    <div className={styles.avatarPlaceholder} style={{ background: '#e0e7ff', color: '#3730a3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                                        {doctor.name[4]} {/* Just grabbing initial after Dr. */}
                                    </div>
                                </div>
                                <div>
                                    <h2 className={styles.name}>{doctor.name}</h2>
                                    <span className={styles.specialization}>{doctor.specialization}</span>
                                    <div className={styles.rating} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: '#d97706', marginTop: '0.25rem' }}>
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
                                <Link href={`/${language}/consult?doctor=${doctor.name}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                    {language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
                                </Link>
                            </div>
                        </div>
                    )) : (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                            <p>{language === 'hi' ? 'कोई डॉक्टर नहीं मिला।' : 'No doctors found matching your criteria.'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
