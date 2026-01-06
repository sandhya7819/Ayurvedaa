'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '../article.module.css';

export default function DinacharyaPage() {
    const { language } = useLanguage();

    return (
        <article className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>
                    {language === 'hi' ? 'दिनचर्या: आदर्श दैनिक दिनचर्या' : 'Dinacharya: The Ideal Daily Routine'}
                </h1>
                <p className={styles.subtitle}>
                    {language === 'hi'
                        ? 'प्रकृति की लय के साथ अपने जीवन को संतुलित करें'
                        : 'Aligning your biology with the rhythm of nature'}
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'दिनचर्या क्यों महत्वपूर्ण है?' : 'Why is Dinacharya Important?'}
                </h2>
                <p className={styles.text}>
                    {language === 'hi'
                        ? 'आयुर्वेद में "दिनचर्या" का अर्थ है "दिन का ज्ञान"। यह एक दैनिक अनुसूची है जो शरीर की जैविक घड़ी (सर्कैडियन लय) को प्रकृति के चक्रों के साथ जोड़ती है। एक नियमित दिनचर्या दोषों को संतुलित करती है, पाचन में सुधार करती है और मन को शांत रखती है।'
                        : 'In Ayurveda, "Dinacharya" means "Day Regime". It is a daily schedule that aligns the body\'s biological clock (circadian rhythm) with nature\'s cycles. A consistent routine balances the Doshas, aids digestion, and keeps the mind calm.'}
                </p>
            </section>

            <section className={styles.section}>
                <div className={styles.highlight}>
                    <span className={styles.highlightTitle}>
                        {language === 'hi' ? 'ब्रह्म मुहूर्त' : 'Brahma Muhurta'}
                    </span>
                    <p className={styles.quote}>
                        {language === 'hi'
                            ? '"सूर्योदय से 96 मिनट पहले उठें। यह ध्यान और ज्ञान के लिए सबसे अच्छा समय है जब वातावरण में सबसे अधिक सत्व (शुद्धता) होती है।"'
                            : '"Wake up 96 minutes before sunrise. This is the best time for meditation and knowledge, when the atmosphere is charged with Sattva (purity)."'}
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'सुबह की दिनचर्या (कफ काल)' : 'Morning Routine (Kapha Time)'}
                </h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>6:00 AM - {language === 'hi' ? 'जाग जाएं' : 'Wake Up'}:</strong> {language === 'hi' ? 'अलार्म के बिना जागने की कोशिश करें।' : 'Try to wake up without an alarm to start the day peacefully.'}
                    </li>
                    <li className={styles.listItem}>
                        <strong>{language === 'hi' ? 'उषापान' : 'Ushopana'}:</strong> {language === 'hi' ? 'बिना कुल्ला किए 1-2 गिलास गर्म तांबे का पानी पिएं।' : 'Drink 1-2 glasses of warm copper water immediately upon waking.'}
                    </li>
                    <li className={styles.listItem}>
                        <strong>{language === 'hi' ? 'शौच' : 'Evacuation'}:</strong> {language === 'hi' ? 'प्राकृतिक रूप से मल त्याग करें।' : 'Empty bowels naturally to clear toxins (Ama).'}
                    </li>
                    <li className={styles.listItem}>
                        <strong>{language === 'hi' ? 'दंतधावन और जिह्वा निर्लेखन' : 'Oral Hygiene'}:</strong> {language === 'hi' ? 'दांत साफ करें और जीभ खुरचें (Tongue Scraping) ताकि रात भर जमा हुए विषाक्त पदार्थ निकल जाएं।' : 'Brush teeth and scrape the tongue to remove toxins accumulated overnight.'}
                    </li>
                    <li className={styles.listItem}>
                        <strong>{language === 'hi' ? 'अभ्यंग' : 'Abhyanga'}:</strong> {language === 'hi' ? 'गर्म तेल (तिल या नारियल) से पूरे शरीर की मालिश करें।' : 'Self-massage with warm oil (Sesame or Coconut) to nourish skin and joints.'}
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {language === 'hi' ? 'दोपहर और शाम' : 'Midday & Evening'}
                </h2>
                <p className={styles.text}>
                    {language === 'hi'
                        ? 'दोपहर का भोजन (12:00 - 1:00 बजे) दिन का सबसे बड़ा भोजन होना चाहिए क्योंकि इस समय आपकी जठराग्नि (पाचन अग्नि) सबसे तेज होती है। रात का खाना हल्का होना चाहिए और सोने से कम से कम 3 घंटे पहले (7:00 बजे तक) खा लेना चाहिए।'
                        : 'Lunch (12:00 - 1:00 PM) should be the largest meal of the day as your digestive fire (Agni) is strongest. Dinner should be light and eaten at least 3 hours before sleep (by 7:00 PM).'}
                </p>
            </section>
        </article>
    );
}
