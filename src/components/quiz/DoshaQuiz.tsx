'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './DoshaQuiz.module.css';

type Dosha = 'Vata' | 'Pitta' | 'Kapha';

interface Question {
    id: number;
    text: string;
    text_hi: string;
    options: {
        text: string;
        text_hi: string;
        dosha: Dosha;
    }[];
}

const questions: Question[] = [
    {
        id: 1,
        text: "How would you describe your body frame?",
        text_hi: "आप अपनी शारीरिक बनावट का वर्णन कैसे करेंगे?",
        options: [
            { text: "Thin, bony, small joints", text_hi: "पतला, हड्डियों वाला, छोटे जोड़", dosha: "Vata" },
            { text: "Medium build, muscular", text_hi: "मध्यम शरीर, गठीला", dosha: "Pitta" },
            { text: "Large, sturdy, heavy bone structure", text_hi: "बड़ा, मजबूत, भारी हड्डियों वाला ढांचा", dosha: "Kapha" }
        ]
    },
    {
        id: 2,
        text: "How is your skin mostly?",
        text_hi: "आपकी त्वचा ज्यादातर कैसी रहती है?",
        options: [
            { text: "Dry, rough, thin", text_hi: "रूखी, खुरदरी, पतली", dosha: "Vata" },
            { text: "Sensitive, reddish, warm", text_hi: "संवेदनशील, लालिमा युक्त, गर्म", dosha: "Pitta" },
            { text: "Oily, smooth, cool", text_hi: "तैलीय, मुलायम, ठंडी", dosha: "Kapha" }
        ]
    },
    {
        id: 3,
        text: "How is your digestion?",
        text_hi: "ल आपकी पाचन शक्ति कैसी है?",
        options: [
            { text: "Irregular, gases, bloating", text_hi: "अनियमित, गैस, पेट फूलना", dosha: "Vata" },
            { text: "Strong, sharp hunger, acidity", text_hi: "मजबूत, तेज भूख, एसिडिटी", dosha: "Pitta" },
            { text: "Slow, steady, mild hunger", text_hi: "धीमी, स्थिर, हल्की भूख", dosha: "Kapha" }
        ]
    },
    {
        id: 4,
        text: "How is your sleep pattern?",
        text_hi: "आपकी नींद का पैटर्न कैसा है?",
        options: [
            { text: "Light, interrupted, trouble falling asleep", text_hi: "हल्की, बीच में टूटने वाली, सोने में परेशानी", dosha: "Vata" },
            { text: "Sound, short, refreshing", text_hi: "गहरी, छोटी, तरोताजा करने वाली", dosha: "Pitta" },
            { text: "Deep, long, love to sleep", text_hi: "गहरी, लंबी, सोना पसंद है", dosha: "Kapha" }
        ]
    },
    {
        id: 5,
        text: "How do you react to stress?",
        text_hi: "तनाव में आपकी क्या प्रतिक्रिया होती है?",
        options: [
            { text: "Anxious, fearful, worry a lot", text_hi: "घबराहट, डर, बहुत चिंता", dosha: "Vata" },
            { text: "Angry, irritable, frustrated", text_hi: "गुस्सा, चिड़चिड़ापन, हताशा", dosha: "Pitta" },
            { text: "Calm, withdrawn, slow to react", text_hi: "शांत, पीछे हटना, धीमी प्रतिक्रिया", dosha: "Kapha" }
        ]
    }
];

export default function DoshaQuiz() {
    const { language } = useLanguage();
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState({ Vata: 0, Pitta: 0, Kapha: 0 });

    const handleOptionSelect = (dosha: Dosha) => {
        const newScores = { ...scores, [dosha]: scores[dosha] + 1 };
        setScores(newScores);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Calculate Result
            const maxScore = Math.max(newScores.Vata, newScores.Pitta, newScores.Kapha);
            let result: Dosha = 'Vata'; // Default
            if (newScores.Pitta === maxScore) result = 'Pitta';
            if (newScores.Kapha === maxScore) result = 'Kapha';

            // Save to local storage for Dashboard
            if (typeof window !== 'undefined') {
                localStorage.setItem('userDosha', result);
                localStorage.setItem('lastTestDate', new Date().toLocaleDateString());
            }

            // Redirect to result page
            router.push(`/dosha-test/result?type=${result}`);
        }
    };

    const currentQ = questions[currentStep];

    return (
        <div className={styles.quizCard}>
            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
            </div>

            <h3 className={styles.stepIndicator}>
                {language === 'hi' ? `प्रश्न ${currentStep + 1} / ${questions.length}` : `Question ${currentStep + 1} of ${questions.length}`}
            </h3>

            <h2 className={styles.question}>
                {language === 'hi' ? currentQ.text_hi : currentQ.text}
            </h2>

            <div className={styles.options}>
                {currentQ.options.map((opt, idx) => (
                    <button
                        key={idx}
                        className={styles.optionBtn}
                        onClick={() => handleOptionSelect(opt.dosha)}
                    >
                        <span className={styles.checkIcon}><CheckCircle size={20} /></span>
                        {language === 'hi' ? opt.text_hi : opt.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
