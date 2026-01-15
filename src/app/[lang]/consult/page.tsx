'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { doctors } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar as CalendarIcon, Clock, Video, Globe, ChevronLeft, ChevronRight, CheckCircle, Star, MapPin, ShieldCheck, Users, Award, HelpCircle, MessageCircle, Quote } from 'lucide-react';

export default function ConsultPage() {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [step, setStep] = useState(1); // 1: DateTime, 2: Details
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Mock Time Slots
    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
    ];

    // Helper to get next 3 days
    const getNextDays = () => {
        const dates = [];
        for (let i = 0; i < 3; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            dates.push({
                label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' }),
                value: d.toISOString().split('T')[0],
                full: d.getDate()
            });
        }
        return dates;
    };
    const nextDays = getNextDays();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.page}>
                <div className={styles.successCard}>
                    <div className={styles.successIcon}><CheckCircle size={64} /></div>
                    <h1 className={styles.title} style={{ color: 'var(--color-primary)' }}>Meeting Scheduled!</h1>
                    <p className={styles.subtitle} style={{ color: '#666' }}>
                        We have sent a confirmation email to you.<br />
                        Expert Vaidya will join you on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
                    </p>
                    <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Back to Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={`container ${styles.schedulerContainer}`}>
                {/* Left Side: Meeting Details */}
                <div className={styles.meetingInfo}>
                    <div className={styles.backButton} onClick={() => step === 2 && setStep(1)}>
                        {step === 2 && <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}><ChevronLeft size={16} /> Back</span>}
                    </div>
                    <h2 className={styles.companyName}>Ayurveda Guide</h2>
                    <h1 className={styles.meetingTitle}>Expert Ayurvedic Consultation</h1>

                    <div className={styles.meetingMeta}>
                        <div className={styles.metaRow}>
                            <Clock size={20} />
                            <span>30 min</span>
                        </div>
                        <div className={styles.metaRow}>
                            <Video size={20} />
                            <span>Web conferencing details provided upon confirmation.</span>
                        </div>
                        <div className={styles.metaRow}>
                            <Globe size={20} />
                            <span>English, Hindi</span>
                        </div>
                    </div>

                    <p className={styles.meetingDesc}>
                        Book a personalized session with our certified Vaidyas to discuss your Dosha, health concerns, and get a holistic treatment plan.
                    </p>
                </div>

                {/* Right Side: Scheduler */}
                <div className={styles.schedulerPanel}>
                    {step === 1 ? (
                        <div className={styles.dateTimeStep}>
                            <h2 className={styles.stepTitle}>Select a Date & Time</h2>
                            <div className={styles.calendarGrid}>
                                {/* Calendar Section */}
                                <div className={styles.datePickerSection}>
                                    <h3 className={styles.subHeader}>Select a Date</h3>

                                    {/* Quick Date Select */}
                                    <div className={styles.quickDates}>
                                        {nextDays.map(day => (
                                            <button
                                                key={day.value}
                                                className={`${styles.dateBtn} ${selectedDate === day.value ? styles.activeDate : ''}`}
                                                onClick={() => setSelectedDate(day.value)}
                                            >
                                                <span className={styles.dayLabel}>{day.label}</span>
                                                <span className={styles.dateNum}>{day.full}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className={styles.divider}><span>OR</span></div>

                                    <div className={styles.dateInputWrapper}>
                                        <input
                                            type="date"
                                            className={styles.dateInput}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                        <span className={styles.inputHint}>Choose a specific date from calendar</span>
                                    </div>

                                    {!selectedDate && (
                                        <div className={styles.trustInfo}>
                                            <div className={styles.trustRow}>
                                                <CheckCircle size={16} color="#10b981" />
                                                <span>100% Private & Confidential</span>
                                            </div>
                                            <div className={styles.trustRow}>
                                                <Video size={16} color="#3b82f6" />
                                                <span>High-Quality Video Consultation</span>
                                            </div>
                                            <div className={styles.trustRow}>
                                                <Clock size={16} color="#f59e0b" />
                                                <span>30 Minutes Dedicated Session</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Time Slots Section - Only shows after date selected */}
                                {selectedDate && (
                                    <div className={`${styles.timeSlotsSection} ${styles.slideIn}`}>
                                        <h3 className={styles.subHeader} style={{ position: 'sticky', top: 0, background: 'white', paddingBottom: '0.5rem' }}>
                                            {selectedDate}
                                        </h3>
                                        <div className={styles.slotsList}>
                                            {timeSlots.map(time => (
                                                <button
                                                    key={time}
                                                    className={`${styles.timeBtn} ${selectedTime === time ? styles.activeTime : ''}`}
                                                    onClick={() => setSelectedTime(time)}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                        <div className={styles.nextWrapper}>
                                            <button
                                                className={styles.nextBtn}
                                                disabled={!selectedTime}
                                                onClick={() => setStep(2)}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.detailsStep}>
                            <h2 className={styles.stepTitle}>Enter Your Details</h2>

                            {/* New Styled Summary */}
                            <div className={styles.selectedSummary}>
                                <div className={styles.summaryIcon}><CalendarIcon size={20} color="#0069ff" /></div>
                                <div>
                                    <p style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', opacity: 0.8 }}>You are booking</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                                        {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                        <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
                                        {selectedTime}
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input type="text" className={styles.input} required placeholder="e.g. Rahul Kumar" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input type="email" className={styles.input} required placeholder="rahul@example.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Topic / Concern</label>
                                    <textarea className={styles.textarea} rows={3} placeholder="Briefly describe what you'd like to discuss..."></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? 'Scheduling...' : 'Confirm Booking'}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className={styles.whyUsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose Ayurveda Guide?</h2>
                    <div className={styles.grid}>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}><Award size={32} /></div>
                            <h3>Certified Vaidyas</h3>
                            <p>Consult with highly qualified BAMS & MD Ayurvedic doctors with 10+ years of clinical experience.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}><ShieldCheck size={32} /></div>
                            <h3>100% Private & Secure</h3>
                            <p>Your health data is encrypted and confidential. We adhere to the highest standards of data privacy.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}><Users size={32} /></div>
                            <h3>Holistic Treatment</h3>
                            <p>We don't just treat symptoms. We treat the root cause with personalized diet, lifestyle, and herbal plans.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className={styles.processSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>How It Works</h2>
                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <div className={styles.processIcon}>1</div>
                            <h3>Book Appointment</h3>
                            <p>Select a convenient date and time from the calendar above.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.processIcon}>2</div>
                            <h3>Connect with Vaidya</h3>
                            <p>Join the 30-min video consultation to discuss your health concerns.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.processIcon}>3</div>
                            <h3>Get Treatment Plan</h3>
                            <p>Receive a personalized Ayurvedic prescription & diet chart within 2 hours.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.processIcon}>4</div>
                            <h3>Start Healing</h3>
                            <p>Follow the plan, order medicines, and start your journey to wellness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Success Stories</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <Quote size={40} className={styles.quoteIcon} />
                            <p className={styles.testimonialText}>"I had been suffering from chronic acidity for years. The doctor diagnosed my Pitta imbalance correctly. Within 2 weeks of following the simple diet changes, I feel like a new person."</p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>A</div>
                                <div className={styles.authorInfo}>
                                    <h4>Anjali Verma</h4>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <Quote size={40} className={styles.quoteIcon} />
                            <p className={styles.testimonialText}>"The video consultation was very smooth. The doctor was patient and listened to every detail. The suggested herbs are working wonders for my sleep."</p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>R</div>
                                <div className={styles.authorInfo}>
                                    <h4>Rajesh Gupta</h4>
                                    <span>Mumbai, India</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <Quote size={40} className={styles.quoteIcon} />
                            <p className={styles.testimonialText}>"Authentic Ayurveda at its best. No gimmicks, just pure ancient wisdom applied to modern life. Highly recommended for anyone looking for natural healing."</p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>S</div>
                                <div className={styles.authorInfo}>
                                    <h4>Sarah Jenkins</h4>
                                    <span>London, UK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqContainer}>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <span>Do I need to install any app?</span>
                                <ChevronRight size={20} />
                            </div>
                            <div className={styles.faqAnswer}>No, the consultation happens via a secure browser link. You can join from your phone or laptop without downloading anything.</div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <span>Are the prescribed medicines safe?</span>
                                <ChevronRight size={20} />
                            </div>
                            <div className={styles.faqAnswer}>Yes, our doctors prescribe only authentic, time-tested Ayurvedic formulations. However, always inform the doctor about any other medications you are taking to avoid interactions.</div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <span>Can I follow up after the consultation?</span>
                                <ChevronRight size={20} />
                            </div>
                            <div className={styles.faqAnswer}>Yes, you get 7 days of free chat support after your consultation to ask any follow-up questions regarding your treatment plan.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Doctors Section */}
            <div className={`container ${styles.recommendations}`}>
                <h2 className={styles.recTitle}>Recommended Vaidyas for You</h2>
                <div className={styles.grid}>
                    {doctors.slice(0, 3).map((doctor) => (
                        <div key={doctor.id} className={styles.docCard}>
                            <div className={styles.docHeader}>
                                <div className={styles.docAvatar}>
                                    {doctor.name[4]}
                                </div>
                                <div className={styles.docInfo}>
                                    <h3>{doctor.name}</h3>
                                    <span>{doctor.specialization}</span>
                                    <div className={styles.rating}>
                                        <Star size={14} fill="#f59e0b" color="#f59e0b" />
                                        <span>{doctor.experience} Exp</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.docMeta}>
                                <p><MapPin size={14} /> {doctor.location}</p>
                                <p><Globe size={14} /> {doctor.languages.join(', ')}</p>
                            </div>
                            <Link href={`/en/doctors`} className={styles.bookBtn}>View Profile</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
