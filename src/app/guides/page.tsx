'use client';

import Link from 'next/link';
import { BookOpen, Sun, Moon, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function LearnPage() {
    const { language } = useLanguage();

    const sections = [
        {
            title: language === 'hi' ? 'आयुर्वेद मूल बातें' : 'Ayurveda Basics',
            desc: language === 'hi' ? 'त्रिदोष, पंचमहाभूत और जीवन के विज्ञान को समझें।' : 'Understand Tridosha, Panchamahabhuta, and the science of life.',
            icon: <BookOpen size={32} />,
            link: '/guides/basics',
            color: '#e0e7ff',
            textColor: '#4338ca'
        },
        {
            title: language === 'hi' ? 'दिनचर्या (दैनिक दिनचर्या)' : 'Dinacharya (Daily Routine)',
            desc: language === 'hi' ? 'स्वास्थ्य और दीर्घायु के लिए आदर्श दैनिक अनुष्ठान।' : 'Ideal daily rituals for health and longevity.',
            icon: <Sun size={32} />,
            link: '/guides/dinacharya',
            color: '#fef3c7',
            textColor: '#b45309'
        },
        {
            title: language === 'hi' ? 'ऋतुचर्या (मौसमी गाइड)' : 'Ritucharya (Seasonal Guide)',
            desc: language === 'hi' ? 'मौसम के बदलाव के अनुसार आहार और जीवन शैली।' : 'Diet and lifestyle adaptations for changing seasons.',
            icon: <Calendar size={32} />,
            link: '/guides/ritucharya',
            color: '#dcfce7',
            textColor: '#15803d'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{language === 'hi' ? 'आयुर्वेद ज्ञान केंद्र' : 'Ayurveda Knowledge Hub'}</h1>
                    <p className={styles.subtitle}>
                        {language === 'hi'
                            ? 'प्राचीन ज्ञान के साथ स्वस्थ जीवन जीने की कला सीखें।'
                            : 'Learn the art of healthy living with ancient wisdom.'}
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {sections.map((section, idx) => (
                        <Link key={idx} href={section.link} className={styles.card}>
                            <div className={styles.iconBox} style={{ background: section.color, color: section.textColor }}>
                                {section.icon}
                            </div>
                            <h2 className={styles.cardTitle}>{section.title}</h2>
                            <p className={styles.cardDesc}>{section.desc}</p>
                            <span className={styles.learnMore}>
                                {language === 'hi' ? 'पढ़ना शुरू करें' : 'Start Reading'} <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
