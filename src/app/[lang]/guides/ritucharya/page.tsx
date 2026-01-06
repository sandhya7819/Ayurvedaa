'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '../article.module.css';

export default function RitucharyaPage() {
    const { language } = useLanguage();

    return (
        <article className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>
                    {language === 'hi' ? 'ऋतुचर्या: मौसमी गाइड' : 'Ritucharya: Seasonal Guide'}
                </h1>
                <p className={styles.subtitle}>
                    {language === 'hi'
                        ? 'मौसम के बदलाव के साथ स्वास्थ्य को अनुकूलित करना'
                        : 'Adapting your lifestyle to the changing seasons'}
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'ऋतुचर्या क्या है?' : 'What is Ritucharya?'}
                </h2>
                <p className={styles.text}>
                    {language === 'hi'
                        ? 'ऋतुचर्या दो शब्दों से बना है: "ऋतु" (मौसम) और "चर्या" (शासन)। आयुर्वेद छह मौसमों (हेमंत, शिशिर, वसंत, ग्रीष्म, वर्षा, शरद) को मान्यता देता है और सिखाता है कि प्रत्येक मौसम में स्वास्थ्य बनाए रखने के लिए आहार और व्यवहार को कैसे बदलना चाहिए।'
                        : 'Ritucharya consists of two words: "Ritu" (Season) and "Charya" (Regime). Ayurveda recognizes six seasons and teaches how to adapt diet and behavior to maintain balance in each.'}
                </p>
            </section>

            <div className={styles.grid}>
                {/* Vasant (Spring) */}
                <div className={styles.card} style={{ textAlign: 'left' }}>
                    <h3 className={styles.cardTitle}>{language === 'hi' ? 'वसंत (Spring)' : 'Vasant (Spring)'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>Mid-March to Mid-May</p>
                    <p style={{ fontSize: '0.95rem' }}>
                        {language === 'hi'
                            ? 'कफ पिघलने लगता है। भारी, तैलीय और मीठे भोजन से बचें। कड़वे और तीखे स्वाद बढ़ाएं।'
                            : 'Kapha starts to melt. Avoid heavy, oily, and sweet foods. Increase bitter and pungent tastes.'}
                    </p>
                </div>

                {/* Grishma (Summer) */}
                <div className={styles.card} style={{ textAlign: 'left' }}>
                    <h3 className={styles.cardTitle}>{language === 'hi' ? 'ग्रीष्म (Summer)' : 'Grishma (Summer)'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>Mid-May to Mid-July</p>
                    <p style={{ fontSize: '0.95rem' }}>
                        {language === 'hi'
                            ? 'पित्त बढ़ता है। ठंडा और तरल भोजन लें। बहुत अधिक व्यायाम और धूप से बचें।'
                            : 'Pitta aggravates. Consume cooling, liquid foods (Kokum, Buttermilk). Avoid excessive exercise and sun.'}
                    </p>
                </div>

                {/* Varsha (Monsoon) */}
                <div className={styles.card} style={{ textAlign: 'left' }}>
                    <h3 className={styles.cardTitle}>{language === 'hi' ? 'वर्षा (Monsoon)' : 'Varsha (Monsoon)'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>Mid-July to Mid-September</p>
                    <p style={{ fontSize: '0.95rem' }}>
                        {language === 'hi'
                            ? 'वात बढ़ता है और पाचन कमजोर होता है। ताजा, गर्म और आसानी से पचने वाला भोजन खाएं।'
                            : 'Vata aggravates and digestion weakens. Eat fresh, warm, and easily digestible food.'}
                    </p>
                </div>
            </div>

            <section className={styles.section} style={{ marginTop: '3rem' }}>
                <div className={styles.highlight}>
                    <span className={styles.highlightTitle}>
                        {language === 'hi' ? 'प्रो टिप' : 'Pro Tip'}
                    </span>
                    <p className={styles.quote}>
                        {language === 'hi'
                            ? '"मौसम संधि (मौसम बदलने के 7-10 दिन) के दौरान आहार में धीरे-धीरे बदलाव करें, अचानक नहीं।"'
                            : '"During Ritu Sandhi (the 7-10 day transition between seasons), change your diet gradually, not abruptly."'}
                    </p>
                </div>
            </section>
        </article>
    );
}
