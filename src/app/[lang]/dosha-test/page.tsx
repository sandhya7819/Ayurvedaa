'use client';

import DoshaQuiz from '@/components/quiz/DoshaQuiz';
import { useLanguage } from '@/context/LanguageContext';

export default function QuizPage() {
    return (
        <div style={{ padding: '4rem 0', background: '#f1f5f9', minHeight: '90vh' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <DoshaQuiz />
            </div>
        </div>
    );
}
