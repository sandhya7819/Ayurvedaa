'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Leaf, Utensils, Activity, Wind, Flame, Droplets } from 'lucide-react';
import styles from './page.module.css';

const doshaInfo = {
    Vata: {
        icon: <Wind size={48} />,
        color: '#60a5fa',
        title: 'Vata (Air + Ether)',
        title_hi: 'वात (वायु + आकाश)',
        desc: 'You are creative, energetic, and quick. However, you may be prone to anxiety, dry skin, and irregular digestion when out of balance.',
        desc_hi: 'आप रचनात्मक, ऊर्जावान और तेज हैं। हालांकि, संतुलन बिगड़ने पर आपको चिंता, रूखी त्वचा और अनियमित पाचन की समस्या हो सकती है।',
        traits: ['Creative & Artistic', 'Quick Learner', 'Light Sleeper', 'Cold Hands/Feet'],
        diet: ['Eat warm, cooked, oily foods', 'Avoid cold, dry, raw foods', 'Favor sweet, sour, salty tastes'],
        lifestyle: ['Establish a regular routine', 'Massage with warm sesame oil', 'Practice grounding yoga & meditation'],
        herbs: ['Ashwagandha', 'Brahmi', 'Ginger']
    },
    Pitta: {
        icon: <Flame size={48} />,
        color: '#ef4444',
        title: 'Pitta (Fire + Water)',
        title_hi: 'पित्त (अग्नि + जल)',
        desc: 'You are intelligent, ambitious, and focused. When imbalanced, you may experience anger, acidity, and inflammation.',
        desc_hi: 'आप बुद्धिमान, महत्वाकांक्षी और एकाग्र हैं। संतुलन बिगड़ने पर आपको गुस्सा, एसिडिटी और सूजन का अनुभव हो सकता है।',
        traits: ['Sharp Intellect', 'Good Digestion', 'Medium Build', 'Warm Body Temperature'],
        diet: ['Eat cooling, sweet, bitter foods', 'Avoid spicy, sour, salty foods', 'Drinking coconut water is beneficial'],
        lifestyle: ['Avoid excessive heat/sun', 'Practice cooling breathwork (Sheetali)', 'Engage in non-competitive sports'],
        herbs: ['Shatavari', 'Amalaki', 'Mint']
    },
    Kapha: {
        icon: <Droplets size={48} />,
        color: '#16a34a',
        title: 'Kapha (Earth + Water)',
        title_hi: 'कफ (पृथ्वी + जल)',
        desc: 'You are calm, loving, and stable. Imbalance can lead to lethargy, weight gain, and congestion.',
        desc_hi: 'आप शांत, प्रेमी और स्थिर हैं। संतुलन बिगड़ने पर आलस्य, वजन बढ़ना और कफ जमा होना हो सकता है।',
        traits: ['Calm & Patient', 'Strong Build', 'Deep Sleep', 'Slow Digestion'],
        diet: ['Eat light, warm, spicy foods', 'Avoid heavy, oily, sweet foods', 'Favor pungent, bitter, astringent tastes'],
        lifestyle: ['Regular vigorous exercise', 'Wake up early', 'Seek new experiences/stimulation'],
        herbs: ['Tulsi', 'Turmeric', 'Triphala']
    }
};

export default function ResultPage() {
    const searchParams = useSearchParams();
    const { language } = useLanguage();
    const type = searchParams.get('type') as 'Vata' | 'Pitta' | 'Kapha' | null;

    if (!type || !doshaInfo[type]) {
        return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Invalid Result. <Link href="/dosha-quiz">Retake Quiz</Link></div>;
    }

    const info = doshaInfo[type];

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.subtitle}>{language === 'hi' ? 'आपकी प्रमुख प्रकृति है:' : 'Your Dominant Dosha is:'}</p>
                    <div className={styles.iconBox} style={{ color: info.color, background: `${info.color}20` }}>
                        {info.icon}
                    </div>
                    <h1 className={styles.title} style={{ color: info.color }}>
                        {language === 'hi' ? info.title_hi : info.title}
                    </h1>
                    <p className={styles.description}>
                        {language === 'hi' ? info.desc_hi : info.desc}
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Strengths */}
                    <div className={styles.card}>
                        <h3><Activity size={20} /> {language === 'hi' ? 'लक्षण' : 'Key Traits'}</h3>
                        <ul>
                            {info.traits.map(t => <li key={t}>{t}</li>)}
                        </ul>
                    </div>

                    {/* Diet */}
                    <div className={styles.card}>
                        <h3><Utensils size={20} /> {language === 'hi' ? 'आहार सुझाव' : 'Diet Tips'}</h3>
                        <ul>
                            {info.diet.map(t => <li key={t}>{t}</li>)}
                        </ul>
                    </div>

                    {/* Lifestyle */}
                    <div className={styles.card}>
                        <h3><Leaf size={20} /> {language === 'hi' ? 'जीवन शैली' : 'Lifestyle'}</h3>
                        <ul>
                            {info.lifestyle.map(t => <li key={t}>{t}</li>)}
                        </ul>
                    </div>
                </div>

                <div className={styles.cta}>
                    <h3>{language === 'hi' ? 'सुझाई गई जड़ी-बूटियाँ' : 'Recommended Herbs'}</h3>
                    <div className={styles.herbLinks}>
                        {info.herbs.map(h => (
                            <Link key={h} href={`/herbs?q=${h}`} className={styles.herbLink}>
                                {h} <ArrowRight size={14} />
                            </Link>
                        ))}
                    </div>
                    <Link href="/consult" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                        {language === 'hi' ? 'विस्तृत विश्लेषण के लिए डॉक्टर से मिलें' : 'Get Detailed Analysis from Doctor'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
