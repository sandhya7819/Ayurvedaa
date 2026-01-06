'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '../login/page.module.css'; // Reusing login styles

export default function RegisterPage() {
    const { language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate registration
        setTimeout(() => {
            setIsLoading(false);
            alert(language === 'hi' ? 'खाता बनाया गया!' : 'Account Created!');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{language === 'hi' ? 'नया खाता बनाएं' : 'Create Account'}</h1>
                    <p className={styles.subtitle}>
                        {language === 'hi'
                            ? 'आयुर्वेद के साथ अपनी स्वस्थ जीवन यात्रा शुरू करें।'
                            : 'Start your healthy living journey with Ayurveda.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>{language === 'hi' ? 'पूरा नाम' : 'Full Name'}</label>
                        <div className={styles.inputWrapper}>
                            <User size={20} className={styles.icon} />
                            <input type="text" placeholder="John Doe" required />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>{language === 'hi' ? 'ईमेल' : 'Email Address'}</label>
                        <div className={styles.inputWrapper}>
                            <Mail size={20} className={styles.icon} />
                            <input type="email" placeholder="you@example.com" required />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>{language === 'hi' ? 'पासवर्ड' : 'Password'}</label>
                        <div className={styles.inputWrapper}>
                            <Lock size={20} className={styles.icon} />
                            <input type="password" placeholder="••••••••" required />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.remember} style={{ alignItems: 'flex-start' }}>
                            <input type="checkbox" required style={{ marginTop: '0.25rem' }} />
                            <span style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                                {language === 'hi'
                                    ? 'मैं नियमों और शर्तों से सहमत हूँ'
                                    : 'I agree to the Terms of Service and Privacy Policy'}
                            </span>
                        </label>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? (language === 'hi' ? 'प्रक्रिया में...' : 'Creating Account...') : (
                            <>
                                {language === 'hi' ? 'रजिस्टर करें' : 'Sign Up'} <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className={styles.footer}>
                    <p>
                        {language === 'hi' ? 'पहले से खाता है?' : "Already have an account?"}{' '}
                        <Link href="/auth/login" className={styles.link}>
                            {language === 'hi' ? 'लॉगिन करें' : 'Login'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
