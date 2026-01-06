'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Languages, Star, Calendar, Clock, CheckCircle, GraduationCap, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './DoctorDetailView.module.css';

interface DoctorDetailViewProps {
    doctor: any;
}

export default function DoctorDetailView({ doctor }: DoctorDetailViewProps) {
    const { language } = useLanguage();
    const [bookingState, setBookingState] = useState<'idle' | 'success'>('idle');

    const handleBook = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setBookingState('success');
        }, 1000);
    };

    const t = {
        back: language === 'hi' ? 'सभी डॉक्टर' : 'Back to Doctors',
        bookTitle: language === 'hi' ? 'अपनी परामर्श बुक करें' : 'Book Your Consultation',
        successMsg: language === 'hi' ? 'परामर्श सफलतापूर्वक बुक किया गया!' : 'Consultation Booked Successfully!',
        successSub: language === 'hi' ? 'हम आपसे शीघ्र ही संपर्क करेंगे।' : 'We will contact you shortly with meeting details.',
        about: language === 'hi' ? 'डॉक्टर के बारे में' : 'About Doctor',
        exp: language === 'hi' ? 'अनुभव' : 'Experience',
        specialization: language === 'hi' ? 'विशेषज्ञता' : 'Specialization',
        formName: language === 'hi' ? 'आपका नाम' : 'Your Name',
        formDate: language === 'hi' ? 'पसंदीदा तारीख' : 'Preferred Date',
        formReason: language === 'hi' ? 'परामर्श का कारण' : 'Reason for Consultation',
        confirmBtn: language === 'hi' ? 'बुकिंग की पुष्टि करें' : 'Confirm Booking'
    };

    return (
        <div className={styles.container}>
            <div className="container">
                <Link href="/doctors" className={styles.backLink}>
                    <ArrowLeft size={16} /> {t.back}
                </Link>

                <div className={styles.grid}>
                    {/* Left: Profile Info */}
                    <div className={styles.profileColumn}>
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <div className={styles.avatar}>
                                    {doctor.name[4]}
                                </div>
                                <div className={styles.headerInfo}>
                                    <h1 className={styles.name}>{doctor.name}</h1>
                                    <p className={styles.spec}>{doctor.specialization}</p>
                                    <div className={styles.badges}>
                                        <span className={styles.badge}><Star size={14} fill="currentColor" /> {doctor.experience} Exp</span>
                                        <span className={styles.badge}><MapPin size={14} /> {doctor.location}</span>
                                    </div>
                                </div>
                            </div>

                            <hr className={styles.divider} />

                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>{t.about}</h3>
                                <p className={styles.text}>{doctor.about}</p>
                            </div>

                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <GraduationCap className={styles.icon} />
                                    <div>
                                        <span className={styles.label}>{t.specialization}</span>
                                        <span className={styles.value}>{doctor.specialization}</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Languages className={styles.icon} />
                                    <div>
                                        <span className={styles.label}>Languages</span>
                                        <span className={styles.value}>{doctor.languages.join(', ')}</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Shield className={styles.icon} />
                                    <div>
                                        <span className={styles.label}>Verification</span>
                                        <span className={styles.value} style={{ color: 'green' }}>Verified Practitioner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className={styles.bookingColumn}>
                        <div className={styles.bookingCard}>
                            {bookingState === 'success' ? (
                                <div className={styles.successState}>
                                    <div className={styles.successIcon}>
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3>{t.successMsg}</h3>
                                    <p>{t.successSub}</p>
                                    <button onClick={() => setBookingState('idle')} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                                        Book Another
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className={styles.bookingTitle}>{t.bookTitle}</h2>
                                    <form onSubmit={handleBook} className={styles.form}>
                                        <div className={styles.field}>
                                            <label>{t.formName}</label>
                                            <input type="text" required placeholder="John Doe" className={styles.input} />
                                        </div>
                                        <div className={styles.field}>
                                            <label>{t.formDate}</label>
                                            <div className={styles.dateInputWrapper}>
                                                <Calendar size={18} className={styles.fieldIcon} />
                                                <input type="date" required className={styles.input} />
                                            </div>
                                        </div>
                                        <div className={styles.field}>
                                            <label>{t.formReason}</label>
                                            <textarea rows={3} placeholder="Describe your health concern..." className={styles.textarea}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                            {t.confirmBtn}
                                        </button>
                                        <p className={styles.note}>
                                            * Mock Booking: No actual payment required.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
