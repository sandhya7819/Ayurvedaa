'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    const { language } = useLanguage();

    const t = {
        about: language === 'hi' ? 'हमारे बारे में' : 'About Us',
        legal: language === 'hi' ? 'कानूनी' : 'Legal',
        contact: language === 'hi' ? 'संपर्क करें' : 'Contact Us',
        quickLinks: language === 'hi' ? 'त्वरित लिंक' : 'Quick Links',
        disclaimer: language === 'hi' ? 'अस्वीकरण' : 'Disclaimer',
        privacy: language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy',
        affiliate: language === 'hi' ? 'एफिलिएट डिस्क्लोजर' : 'Affiliate Disclosure',
        contentPolicy: language === 'hi' ? 'सामग्री नीति' : 'Content Policy',
        desc: language === 'hi'
            ? 'आयुर्वेद गाइड: प्राचीन ज्ञान के माध्यम से आधुनिक कल्याण। प्रामाणिक आयुर्वेदिक जानकारी के लिए आपका विश्वसनीय स्रोत।'
            : 'Ayurveda Guide: Modern wellness through ancient wisdom. Your trusted source for authentic Ayurvedic information.',
        copyright: language === 'hi'
            ? '© 2026 आयुर्वेद गाइड। सर्वाधिकार सुरक्षित।'
            : '© 2026 Ayurveda Guide. All rights reserved.'
    };

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="Ayurveda Guide"
                            width={150}
                            height={40}
                            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                        />
                    </div>
                    <p className={styles.description}>{t.desc}</p>
                    <div className={styles.social}>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="mailto:contact@ayurvedaguide.com" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>{t.quickLinks}</h3>
                    <ul>
                        <li><Link href={`/${language}/herbs`}>{language === 'hi' ? 'जड़ी-बूटियाँ' : 'Herbs'}</Link></li>
                        <li><Link href={`/${language}/health-conditions`}>{language === 'hi' ? 'स्वास्थ्य स्थितियां' : 'Health Conditions'}</Link></li>
                        <li><Link href={`/${language}/doctors`}>{language === 'hi' ? 'डॉक्टर' : 'Doctors'}</Link></li>
                        <li><Link href={`/${language}/dosha-test`}>{language === 'hi' ? 'दोष टेस्ट' : 'Dosha Test'}</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>{t.legal}</h3>
                    <ul>
                        <li><Link href={`/${language}/legal/disclaimer`}>{t.disclaimer}</Link></li>
                        <li><Link href={`/${language}/legal/affiliate-disclosure`}>{t.affiliate}</Link></li>
                        <li><Link href={`/${language}/legal/content-policy`}>{t.contentPolicy}</Link></li>
                        <li><Link href={`/${language}/privacy`}>{t.privacy}</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>{t.contact}</h3>
                    <p>Email: namaste@ayurvedaguide.com</p>
                    <p>{language === 'hi' ? 'नई दिल्ली, भारत' : 'New Delhi, India'}</p>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    <p>{t.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
