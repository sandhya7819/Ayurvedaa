'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Calendar, CheckCircle, User, Mail, Phone, MessageSquare, Clock } from 'lucide-react';

export default function ConsultPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

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
                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Thank You!</h1>
                        <p className={styles.subtitle}>Your consultation request has been received. Our team will contact you shortly to confirm your appointment.</p>
                        <button
                            className="btn btn-secondary"
                            onClick={() => window.location.href = '/'}
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title}>Expert Ayurvedic Consultation</h1>
                    <p className={styles.subtitle}>Connect with certified Vaidyas for personalized holistic healing plans tailored to your Dosha.</p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>15+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>10k+</span>
                            <span className={styles.statLabel}>Happy Patients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Private & Secure</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`container ${styles.mainContent}`}>
                <section className={styles.formSection}>
                    <h2 className={styles.formTitle}>
                        <Calendar size={28} /> Book Your Appointment
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Full Name</label>
                            <div className="input-group">
                                <input type="text" className={styles.input} placeholder="John Doe" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" className={styles.input} placeholder="john@example.com" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone Number</label>
                                <input type="tel" className={styles.input} placeholder="+91 98765 43210" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Concern Category</label>
                            <select className={styles.select} required>
                                <option value="">Select a health concern...</option>
                                <option value="diabetes">Diabetes (Madhumeha)</option>
                                <option value="digestion">Digestion & Gut Health</option>
                                <option value="skin">Skin & Hair Care</option>
                                <option value="joint">Joint Pain & Arthritis</option>
                                <option value="stress">Stress & Mental Health</option>
                                <option value="womens">Women's Health</option>
                                <option value="other">General Consultation</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Preferred Time Slot</label>
                            <select className={styles.select} required>
                                <option value="">Select preferences...</option>
                                <option value="morning">Morning (9 AM - 12 PM)</option>
                                <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                                <option value="evening">Evening (6 PM - 9 PM)</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Describe your issue</label>
                            <textarea
                                className={styles.textarea}
                                rows={4}
                                placeholder="Please describe your symptoms and any current medications..."
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            {isSubmitting ? 'Scheduling...' : 'Confirm Appointment Request'}
                        </button>
                    </form>
                </section>

                <aside className={styles.sidebar}>
                    <div className={styles.benefitsCard}>
                        <h3 className={styles.benefitsTitle}>Why Choose Ayurveda?</h3>
                        <ul className={styles.benefitList}>
                            <li className={styles.benefitItem}>
                                <CheckCircle size={20} className={styles.checkIcon} />
                                <span>Root cause treatment, not just symptom relief</span>
                            </li>
                            <li className={styles.benefitItem}>
                                <CheckCircle size={20} className={styles.checkIcon} />
                                <span>Personalized diet & lifestyle guidance</span>
                            </li>
                            <li className={styles.benefitItem}>
                                <CheckCircle size={20} className={styles.checkIcon} />
                                <span>Natural, side-effect free medicines</span>
                            </li>
                            <li className={styles.benefitItem}>
                                <CheckCircle size={20} className={styles.checkIcon} />
                                <span>Holistic restoration of body balance</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.testimonialCard}>
                        <p className={styles.testimonialText}>
                            "The consultation was eye-opening. Dr. Sharma identified my Prakriti accurately and the diet changes has completely resolved my acidity issues in just 2 weeks."
                        </p>
                        <span className={styles.testimonialAuthor}>- Rahul Verma, Bangalore</span>
                    </div>

                    <div className={styles.testimonialCard}>
                        <p className={styles.testimonialText}>
                            "Very professional and deep knowledge. I felt heard and understood. The treatment plan is easy to follow."
                        </p>
                        <span className={styles.testimonialAuthor}>- Sarah Jenkins, USA</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}
