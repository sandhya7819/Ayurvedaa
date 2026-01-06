'use client';

import DoshaQuiz from '@/components/quiz/DoshaQuiz';
import { useLanguage } from '@/context/LanguageContext';

export default function QuizPage() {
    const { language } = useLanguage();

    return (
        <div style={{ padding: '4rem 0', background: 'var(--bg-light)', minHeight: '90vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                        {language === 'hi' ? 'अपनी प्रकृति (दोष) जानें' : 'Discover Your Dosha (Prakriti)'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {language === 'hi'
                            ? 'अपने प्रमुख दोष - वात, पित्त, या कफ - को जानने के लिए इस छोटी सी प्रश्नोत्तरी में भाग लें और व्यक्तिगत स्वास्थ्य सुझाव प्राप्त करें।'
                            : 'Take this short quiz to identify your dominant Dosha - Vata, Pitta, or Kapha - and get personalized health recommendations.'}
                    </p>
                </div>

                <DoshaQuiz />
            </div>
        </div>
    );
}
