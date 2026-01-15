'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './DoshaQuiz.module.css';
import { quizQuestions, Dosha } from '@/lib/quizData';
import { ArrowRight, CheckCircle, RefreshCcw, Share2 } from 'lucide-react';

interface DoshaQuizProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function DoshaQuiz({ title, description, buttonText }: DoshaQuizProps) {
    const { language } = useLanguage();
    const t = language === 'hi' ? {
        startTitle: "Discover Your True Nature",
        startDesc: "According to Ayurveda, your health is determined by your unique constitution (Dosha). This in-depth analysis will reveal your dominant energy.",
        startBtn: "Start Analysis",
        question: "Question",
        next: "Next",
        calculating: "Calculating your Prakriti...",
        resultTitle: "Your Dominant Dosha is",
        restart: "Retake Test",
        share: "Share Result",
        vataDesc: "Vata energy is associated with movement, creativity, and flexibility. You are likely quick-minded, energetic, and adaptable, but may be prone to anxiety or dryness.",
        pittaDesc: "Pitta energy is associated with transformation, intelligence, and heat. You are likely determined, sharp, and a natural leader, but may be prone to anger or inflammation.",
        kaphaDesc: "Kapha energy is associated with structure, stability, and calm. You are likely loyal, strong, and patient, but may be prone to lethargy or weight gain."
    } : {
        startTitle: "Discover Your True Nature",
        startDesc: "According to Ayurveda, your health is determined by your unique constitution (Dosha). This in-depth analysis will reveal your unique energy profile.",
        startBtn: "Start Analysis",
        question: "Question",
        next: "Next",
        calculating: "Calculating your Prakriti...",
        resultTitle: "Your Dominant Dosha is",
        restart: "Retake Test",
        share: "Share Result",
        vataDesc: "Vata energy is associated with movement, creativity, and flexibility. You are likely quick-minded, energetic, and adaptable, but may be prone to anxiety or dryness.",
        pittaDesc: "Pitta energy is associated with transformation, intelligence, and heat. You are likely determined, sharp, and a natural leader, but may be prone to anger or inflammation.",
        kaphaDesc: "Kapha energy is associated with structure, stability, and calm. You are likely loyal, strong, and patient, but may be prone to lethargy or weight gain."
    };

    // Hindi Overrides
    if (language === 'hi') {
        t.startTitle = "अपनी असली प्रकृति जानें";
        t.startDesc = "आयुर्वेद के अनुसार, आपका स्वास्थ्य आपकी अनूठी प्रकृति (दोष) द्वारा निर्धारित होता है। यह विश्लेषण आपकी प्रमुख ऊर्जा को प्रकट करेगा।";
        t.startBtn = "विश्लेषण शुरू करें";
        t.question = "प्रश्न";
        t.next = "अगला";
        t.calculating = "आपकी प्रकृति की गणना कर रहा है...";
        t.resultTitle = "आपका प्रमुख दोष है";
        t.restart = "फिर से टेस्ट लें";
        t.share = "परिणाम साझा करें";
        t.vataDesc = "वात ऊर्जा गति, रचनात्मकता और लचीलेपन से जुड़ी है। आप शायद तेज दिमाग वाले, ऊर्जावान और अनुकूलनीय हैं, लेकिन चिंता या सूखेपन के लिए प्रवृत्त हो सकते हैं।";
        t.pittaDesc = "पित्त ऊर्जा परिवर्तन, बुद्धिमत्ता और गर्मी से जुड़ी है। आप शायद दृढ़ निश्चयी, तेज और एक स्वाभाविक नेता हैं, लेकिन गुस्से या सूजन के लिए प्रवृत्त हो सकते हैं।";
        t.kaphaDesc = "कफ ऊर्जा संरचना, स्थिरता और शांति से जुड़ी है। आप शायद वफादार, मजबूत और धैर्यवान हैं, लेकिन सुस्ती या वजन बढ़ने के लिए प्रवृत्त हो सकते हैं।";
    }

    // Override with props if provided (mainly for custom section titles)
    if (title) t.startTitle = title;
    if (description) t.startDesc = description;
    if (buttonText) t.startBtn = buttonText;

    const [view, setView] = useState<'INTRO' | 'QUIZ' | 'RESULT'>('INTRO');
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, Dosha>>({});
    const [result, setResult] = useState<{ vata: number, pitta: number, kapha: number, dominant: Dosha } | null>(null);

    const handleStart = () => {
        setView('QUIZ');
        setCurrentStep(0);
        setAnswers({});
    };

    const handleOptionSelect = (dosha: Dosha) => {
        const newAnswers = { ...answers, [currentStep]: dosha };
        setAnswers(newAnswers);

        if (currentStep < quizQuestions.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300); // Small delay for visual feedback
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers: Record<number, Dosha>) => {
        const scores = { Vata: 0, Pitta: 0, Kapha: 0 };
        Object.values(finalAnswers).forEach(d => scores[d]++);

        const total = quizQuestions.length;
        const vataPercent = Math.round((scores.Vata / total) * 100);
        const pittaPercent = Math.round((scores.Pitta / total) * 100);
        const kaphaPercent = Math.round((scores.Kapha / total) * 100);

        // Find dominant
        let dominant: Dosha = 'Vata';
        let max = scores.Vata;
        if (scores.Pitta > max) { max = scores.Pitta; dominant = 'Pitta'; }
        if (scores.Kapha > max) { max = scores.Kapha; dominant = 'Kapha'; }

        setResult({
            vata: vataPercent,
            pitta: pittaPercent,
            kapha: kaphaPercent,
            dominant
        });
        setView('RESULT');
    };

    const currentQ = quizQuestions[currentStep];

    // Views
    if (view === 'INTRO') {
        return (
            <div className={styles.quizContainer}>
                <div className={styles.introView}>
                    <h1 className={styles.introTitle}>{t.startTitle}</h1>
                    <p className={styles.introDesc}>{t.startDesc}</p>
                    <button className={styles.startBtn} onClick={handleStart}>
                        {t.startBtn} <ArrowRight style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </div>
        );
    }

    if (view === 'RESULT' && result) {
        let desc = t.vataDesc;
        if (result.dominant === 'Pitta') desc = t.pittaDesc;
        if (result.dominant === 'Kapha') desc = t.kaphaDesc;

        return (
            <div className={styles.quizContainer}>
                <div className={styles.resultView}>
                    <p className={styles.resultSubtitle} style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Analysis Complete</p>
                    <h2 className={styles.resultTitle}>{t.resultTitle} {language === 'hi' ? (result.dominant === 'Vata' ? 'वात' : result.dominant === 'Pitta' ? 'पित्त' : 'कफ') : result.dominant}</h2>

                    <div className={styles.chartContainer}>
                        <div className={styles.chartBar}>
                            <div className={styles.barFill} style={{ height: `${result.vata}%`, background: '#a855f7' }}></div>
                            <span className={styles.barLabel}>Vata</span>
                        </div>
                        <div className={styles.chartBar}>
                            <div className={styles.barFill} style={{ height: `${result.pitta}%`, background: '#ef4444' }}></div>
                            <span className={styles.barLabel}>Pitta</span>
                        </div>
                        <div className={styles.chartBar}>
                            <div className={styles.barFill} style={{ height: `${result.kapha}%`, background: '#22c55e' }}></div>
                            <span className={styles.barLabel}>Kapha</span>
                        </div>
                    </div>

                    <div className={styles.characteristics}>
                        <h3 className={styles.charTitle}>Characteristics</h3>
                        <p className={styles.charText}>{desc}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className={styles.startBtn} onClick={handleStart} style={{ background: '#334155' }}>
                            <RefreshCcw size={18} style={{ marginRight: '8px' }} /> {t.restart}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.quizContainer}>
            <div className={styles.quizContent}>
                <div className={styles.header}>
                    <div className={styles.sectionTitle}>
                        {language === 'hi' ? currentQ.section : currentQ.section} • {t.question} {currentStep + 1} / {quizQuestions.length}
                    </div>
                    <div className={styles.progressBarBox}>
                        <div
                            className={styles.progressBarFill}
                            style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className={styles.questionArea}>
                    <h2 className={styles.questionText}>
                        {language === 'hi' ? currentQ.question_hi : currentQ.question}
                    </h2>

                    <div className={styles.optionsGrid}>
                        {currentQ.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={`${styles.optionBtn} ${answers[currentStep] === opt.dosha ? styles.selectedOption : ''}`}
                                onClick={() => handleOptionSelect(opt.dosha)}
                            >
                                <span className={styles.optionText}>{language === 'hi' ? opt.text_hi : opt.text}</span>
                                {answers[currentStep] === opt.dosha && <CheckCircle color="#0069ff" size={24} />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
