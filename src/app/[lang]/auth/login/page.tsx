'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function LoginPage() {
    const { language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            // In a real app, redirect here
            alert(language === 'hi' ? 'लॉगिन सफल!' : 'Login Successful!');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{language === 'hi' ? 'वापसी पर स्वागत है' : 'Welcome Back'}</h1>
                    <p className={styles.subtitle}>
                        {language === 'hi'
                            ? 'अपनी आयुर्वेदिक यात्रा जारी रखने के लिए लॉगिन करें।'
                            : 'Login to continue your Ayurvedic journey.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
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

                    <div className={styles.actions}>
                        <label className={styles.remember}>
                            <input type="checkbox" />
                            <span>{language === 'hi' ? 'मुझे याद रखें' : 'Remember me'}</span>
                        </label>
                        <Link href="/auth/forgot-password" className={styles.forgot}>
                            {language === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot Password?'}
                        </Link>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? (language === 'hi' ? 'प्रक्रिया में...' : 'Processing...') : (
                            <>
                                {language === 'hi' ? 'लॉगिन करें' : 'Login'} <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className={styles.footer}>
                    <p>
                        {language === 'hi' ? 'खाता नहीं है?' : "Don't have an account?"}{' '}
                        <Link href="/auth/register" className={styles.link}>
                            {language === 'hi' ? 'साइन अप करें' : 'Sign up'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
