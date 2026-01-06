'use client';

import {
    Activity, Heart, Utensils, PersonStanding,
    Smile, Wind, Flame, Users, ShieldPlus,
    Brain, Eye, Scale, Moon, Sparkles,
    Droplets, Thermometer, Ear, Baby, Stethoscope,
    Flower2, Sun, Zap, Cross, Shield, Pill,
    LucideIcon, HandMetal, Coffee, Battery, Anchor
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './QuickConditions.module.css';
import Link from 'next/link';

interface ConditionItem {
    id: string;
    label: string;
    label_hi: string;
    icon: LucideIcon;
    color: string;
    slug: string;
}

const conditions: ConditionItem[] = [
    // Row 1
    { id: 'diabetes', label: 'Diabetes Care', label_hi: 'मधुमेह (Diabetes)', icon: Activity, color: '#2563eb', slug: 'diabetes' },
    { id: 'cardiac', label: 'Cardiac Care', label_hi: 'हृदय रोग', icon: Heart, color: '#dc2626', slug: 'cardiac-care' },
    { id: 'stomach', label: 'Stomach Care', label_hi: 'पेट के रोग', icon: Utensils, color: '#d97706', slug: 'digestive-health' },
    { id: 'pain', label: 'Pain Relief', label_hi: 'दर्द निवारण', icon: PersonStanding, color: '#4b5563', slug: 'pain-relief' },
    { id: 'liver', label: 'Liver Care', label_hi: 'लिवर केयर', icon: Activity, color: '#9333ea', slug: 'liver-care' },

    // Row 2
    { id: 'oral', label: 'Oral Care', label_hi: 'मुख स्वास्थ्य', icon: Smile, color: '#0891b2', slug: 'oral-care' },
    { id: 'respiratory', label: 'Respiratory', label_hi: 'सांस के रोग', icon: Wind, color: '#0d9488', slug: 'respiratory' },
    { id: 'sexual', label: 'Sexual Health', label_hi: 'यौन स्वास्थ्य', icon: Flame, color: '#be185d', slug: 'sexual-health' },
    { id: 'elderly', label: 'Elderly Care', label_hi: 'बुजुर्ग देखभाल', icon: Users, color: '#4338ca', slug: 'elderly-care' },
    { id: 'cold', label: 'Cold & Cough', label_hi: 'सर्दी-खांसी', icon: ShieldPlus, color: '#eab308', slug: 'cold-cough' },

    // Row 3
    { id: 'skin', label: 'Skin Care', label_hi: 'त्वचा रोग', icon: Sparkles, color: '#db2777', slug: 'skin-care' },
    { id: 'hair', label: 'Hair Care', label_hi: 'बालों की देखभाल', icon: Wind, color: '#1f2937', slug: 'hair-care' }, // Wind for flowy hair metaphor
    { id: 'eye', label: 'Eye Care', label_hi: 'नेत्र रोग', icon: Eye, color: '#059669', slug: 'eye-care' },
    { id: 'weight', label: 'Weight Loss', label_hi: 'वजन घटाना', icon: Scale, color: '#ea580c', slug: 'weight-management' },
    { id: 'mental', label: 'Mental Health', label_hi: 'मानसिक स्वास्थ्य', icon: Brain, color: '#7c3aed', slug: 'mental-health' },

    // Row 4
    { id: 'sleep', label: 'Sleep Issues', label_hi: 'अनिद्रा', icon: Moon, color: '#4f46e5', slug: 'insomnia' },
    { id: 'kidney', label: 'Kidney Care', label_hi: 'गुर्दे की पथरी', icon: Droplets, color: '#0284c7', slug: 'kidney-stone' },
    { id: 'thyroid', label: 'Thyroid', label_hi: 'थायराइड', icon: Activity, color: '#be123c', slug: 'thyroid' },
    { id: 'piles', label: 'Piles Care', label_hi: 'बवासीर', icon: Anchor, color: '#881337', slug: 'piles' },
    { id: 'child', label: 'Child Care', label_hi: 'शिशु रोग', icon: Baby, color: '#f59e0b', slug: 'child-care' },

    // Row 5
    { id: 'women', label: 'Women\'s Health', label_hi: 'महिला स्वास्थ्य', icon: Flower2, color: '#ec4899', slug: 'womens-health' },
    { id: 'men', label: 'Men\'s Health', label_hi: 'पुरुष स्वास्थ्य', icon: Zap, color: '#1d4ed8', slug: 'mens-health' },
    { id: 'fever', label: 'Fever', label_hi: 'बुखार', icon: Thermometer, color: '#ef4444', slug: 'fever' },
    { id: 'ear', label: 'Ear Care', label_hi: 'कान के रोग', icon: Ear, color: '#d97706', slug: 'ear-care' },
    { id: 'bp', label: 'Blood Pressure', label_hi: 'रक्तचाप', icon: Activity, color: '#b91c1c', slug: 'blood-pressure' },

    // Row 6
    { id: 'allergy', label: 'Allergies', label_hi: 'एलर्जी', icon: Shield, color: '#059669', slug: 'allergies' },
    { id: 'detox', label: 'Detox', label_hi: 'विषहरण', icon: Droplets, color: '#047857', slug: 'detox' },
    { id: 'arthritis', label: 'Arthritis', label_hi: 'गठिया', icon: PersonStanding, color: '#7f1d1d', slug: 'arthritis' },
    { id: 'addiction', label: 'De-addiction', label_hi: 'नशा मुक्ति', icon: Cross, color: '#57534e', slug: 'de-addiction' },
    { id: 'general', label: 'General Wellness', label_hi: 'सामान्य स्वास्थ्य', icon: Sun, color: '#f97316', slug: 'general-wellness' },
];

export default function QuickConditions() {
    const { language } = useLanguage();

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>
                    {language === 'hi' ? 'स्वास्थ्य स्थितियों के आधार पर ब्राउज़ करें' : 'Browse by Health Conditions'}
                </h2>

                <div className={styles.grid}>
                    {conditions.map((item) => (
                        <Link href={`/${language}/health-conditions/${item.slug}`} key={item.id} className={styles.card}>
                            <div className={styles.iconBox} style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                                <item.icon size={22} strokeWidth={1.8} />
                            </div>
                            <span className={styles.label}>
                                {language === 'hi' ? item.label_hi : item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
