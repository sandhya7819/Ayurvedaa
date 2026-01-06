'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '../article.module.css';

export default function BasicsPage() {
    const { language } = useLanguage();

    return (
        <article className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>
                    {language === 'hi' ? 'आयुर्वेद मूल बातें' : 'Ayurveda Basics'}
                </h1>
                <p className={styles.subtitle}>
                    {language === 'hi'
                        ? 'जीवन का विज्ञान: संतुलन और स्वास्थ्य का प्राचीन मार्ग'
                        : 'The Science of Life: The Ancient Path to Balance and Wellness'}
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'आयुर्वेद क्या है?' : 'What is Ayurveda?'}
                </h2>
                <p className={styles.text}>
                    {language === 'hi'
                        ? 'आयुर्वेद, संस्कृत शब्द "आयुह" (जीवन) और "वेद" (विज्ञान) से बना है। यह 5,000 साल पुरानी चिकित्सा प्रणाली है जो भारत में उत्पन्न हुई थी। यह केवल बीमारी का इलाज नहीं करती, बल्कि जीवन जीने की एक कला सिखाती है।'
                        : 'Ayurveda, derived from the Sanskrit words "Ayuh" (Life) and "Veda" (Knowledge), is a 5,000-year-old system of natural healing that originated in India. It is not just about treating disease but about mastering the art of living.'}
                </p>
                <div className={styles.highlight}>
                    <span className={styles.highlightTitle}>
                        {language === 'hi' ? 'मुख्य सिद्धांत' : 'Core Principle'}
                    </span>
                    <p className={styles.quote}>
                        {language === 'hi'
                            ? '"जब आहार गलत हो, तो दवा किसी काम की नहीं; जब आहार सही हो, तो दवा की कोई आवश्यकता नहीं।"'
                            : '"When diet is wrong, medicine is of no use; when diet is correct, medicine is of no need."'}
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'पंचमहाभूत: पांच तत्व' : 'Panchamahabhuta: The Five Elements'}
                </h2>
                <p className={styles.text}>
                    {language === 'hi'
                        ? 'आयुर्वेद के अनुसार, पूरा ब्रह्मांड - जिसमें मानव शरीर भी शामिल है - पांच तत्वों से बना है:'
                        : 'According to Ayurveda, the entire universe - including the human body - is composed of five basic elements:'}
                </p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>🌏</span>
                        <h3 className={styles.cardTitle}>{language === 'hi' ? 'पृथ्वी' : 'Earth'} (Prithvi)</h3>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>💧</span>
                        <h3 className={styles.cardTitle}>{language === 'hi' ? 'जल' : 'Water'} (Jala)</h3>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>🔥</span>
                        <h3 className={styles.cardTitle}>{language === 'hi' ? 'अग्नि' : 'Fire'} (Agni)</h3>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>💨</span>
                        <h3 className={styles.cardTitle}>{language === 'hi' ? 'वायु' : 'Air'} (Vayu)</h3>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>✨</span>
                        <h3 className={styles.cardTitle}>{language === 'hi' ? 'आकाश' : 'Ether'} (Akasha)</h3>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'त्रिदोष: तीन ऊर्जाएं' : 'Tridosha: The Three Energies'}
                </h2>
                <p className={styles.text}>
                    {language === 'hi'
                        ? 'ये पांच तत्व मिलकर तीन जैव-ऊर्जाओं (दोष) का निर्माण करते हैं जो हमारे शरीर को नियंत्रित करती हैं:'
                        : 'These five elements combine to form three bio-energies (Doshas) that govern our body:'}
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Vata (Air + Ether):</strong> {language === 'hi' ? 'गति, श्वास और तंत्रिका तंत्र को नियंत्रित करता है।' : 'Governs movement, breathing, and the nervous system.'}
                    </li>
                    <li className={styles.listItem}>
                        <strong>Pitta (Fire + Water):</strong> {language === 'hi' ? 'चयापचय, पाचन और शरीर के तापमान को नियंत्रित करता है।' : 'Governs metabolism, digestion, and body temperature.'}
                    </li>
                    <li className={styles.listItem}>
                        <strong>Kapha (Earth + Water):</strong> {language === 'hi' ? 'संरचना, शक्ति और प्रतिरक्षा को नियंत्रित करता है।' : 'Governs structure, strength, and immunity.'}
                    </li>
                </ul>
            </section>
        </article>
    );
}
