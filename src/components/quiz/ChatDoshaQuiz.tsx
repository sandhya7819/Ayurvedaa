'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { quizQuestions, Dosha } from '@/lib/quizData';
import styles from './ChatDoshaQuiz.module.css';
import { Bot, User, RefreshCcw, ArrowRight } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'result';
    resultData?: any;
}

export default function ChatDoshaQuiz() {
    const { language, t } = useLanguage();
    // Local translations for chat flow
    const localized = {
        intro: language === 'hi'
            ? "नमस्ते! 🙏 मैं आयुर्वेद बॉट हूँ। आइए आपकी प्रकृति (दोष) को समझने के लिए एक छोटा सा मूल्यांकन करें। क्या आप तैयार हैं?"
            : "Namaste! 🙏 I'm AyurBot. Let's do a quick evaluation to understand your Dosha constitution. Are you ready?",
        startBtn: language === 'hi' ? "बीमारी का मूल्यांकन शुरू करें" : "Start Health Evaluation",
        thinking: language === 'hi' ? "सोच रहा हूँ..." : "Thinking...",
        resultIntro: language === 'hi' ? "विश्लेषण पूरा हुआ! यहाँ आपका परिणाम है:" : "Analysis complete! Here is your result:",
        restart: language === 'hi' ? "फिर से शुरू करें" : "Start Over"
    };

    const [started, setStarted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: localized.intro, sender: 'bot' }
    ]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, Dosha>>({});
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleStart = () => {
        setStarted(true);
        // Add start message from user
        addMessage(localized.startBtn, 'user');

        // Trigger first question after delay
        setIsTyping(true);
        setTimeout(() => {
            askQuestion(0);
        }, 1000);
    };

    const addMessage = (text: string, sender: 'bot' | 'user', type: 'text' | 'result' = 'text', resultData?: any) => {
        setMessages(prev => [...prev, { id: Date.now(), text, sender, type, resultData }]);
    };

    const askQuestion = (stepIndex: number) => {
        if (stepIndex >= quizQuestions.length) {
            calculateResult();
            return;
        }

        const q = quizQuestions[stepIndex];
        const questionText = language === 'hi' ? q.question_hi : q.question;

        setIsTyping(false);
        addMessage(questionText, 'bot');
    };

    const handleOptionSelect = (dosha: Dosha, text: string) => {
        // User selects an option
        addMessage(text, 'user');

        const newAnswers = { ...answers, [currentStep]: dosha };
        setAnswers(newAnswers);

        setIsTyping(true);

        setTimeout(() => {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            askQuestion(nextStep);
        }, 800);
    };

    const calculateResult = () => {
        const scores = { Vata: 0, Pitta: 0, Kapha: 0 };
        Object.values(answers).forEach(d => scores[d]++);

        const total = quizQuestions.length;
        const vataPercent = Math.round((scores.Vata / total) * 100);
        const pittaPercent = Math.round((scores.Pitta / total) * 100);
        const kaphaPercent = Math.round((scores.Kapha / total) * 100);

        // Find dominant
        let dominant: Dosha = 'Vata';
        let max = scores.Vata;
        if (scores.Pitta > max) { max = scores.Pitta; dominant = 'Pitta'; }
        if (scores.Kapha > max) { max = scores.Kapha; dominant = 'Kapha'; }

        setIsTyping(false);
        addMessage(localized.resultIntro, 'bot');

        // Add special result card message
        setTimeout(() => {
            addMessage("", 'bot', 'result', {
                vata: vataPercent,
                pitta: pittaPercent,
                kapha: kaphaPercent,
                dominant
            });
        }, 500);
    };

    const handleRestart = () => {
        setMessages([{ id: Date.now(), text: localized.intro, sender: 'bot' }]);
        setStarted(false);
        setCurrentStep(0);
        setAnswers({});
    };

    // Current Question Options (only show if bot just asked a question and we are not typing)
    const currentQ = quizQuestions[currentStep];
    const showOptions = started && !isTyping && currentStep < quizQuestions.length && messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].type !== 'result';

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                <div className={styles.botInfo}>
                    <div className={styles.botAvatar}>
                        <Bot size={24} color="white" />
                    </div>
                    <div>
                        <h3>AyurBot</h3>
                        <span>Health Evaluator</span>
                    </div>
                </div>
                {started && (
                    <button onClick={handleRestart} className={styles.restartBtn} title={localized.restart}>
                        <RefreshCcw size={16} />
                    </button>
                )}
            </div>

            <div className={styles.messagesArea}>
                {messages.map((msg) => (
                    <div key={msg.id} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}>
                        {msg.sender === 'bot' && (
                            <div className={styles.msgAvatar}>
                                <Bot size={16} />
                            </div>
                        )}

                        <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.userBubble : styles.botBubble}`}>
                            {msg.type === 'result' && msg.resultData ? (
                                <ResultCard data={msg.resultData} t={t} language={language} onRestart={handleRestart} />
                            ) : (
                                <p>{msg.text}</p>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className={`${styles.messageRow} ${styles.botRow}`}>
                        <div className={styles.msgAvatar}><Bot size={16} /></div>
                        <div className={`${styles.bubble} ${styles.botBubble}`}>
                            <div className={styles.typingIndicator}>
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
                {!started ? (
                    <button className={styles.actionBtn} onClick={handleStart}>
                        {localized.startBtn} <ArrowRight size={18} />
                    </button>
                ) : showOptions ? (
                    <div className={styles.optionsContainer}>
                        {currentQ.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={styles.optionBtn}
                                onClick={() => handleOptionSelect(opt.dosha, language === 'hi' ? opt.text_hi : opt.text)}
                            >
                                {language === 'hi' ? opt.text_hi : opt.text}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className={styles.placeholderText}>
                        {currentStep >= quizQuestions.length ? "Evaluation Complete" : "AyurBot is thinking..."}
                    </div>
                )}
            </div>
        </div>
    );
}

function ResultCard({ data, t, language, onRestart }: any) {
    const dominantColor = data.dominant === 'Vata' ? '#a855f7' : data.dominant === 'Pitta' ? '#ef4444' : '#22c55e';

    return (
        <div className={styles.resultCard}>
            <h4 style={{ color: dominantColor }}>{data.dominant} Dosha</h4>
            <div className={styles.charts}>
                <div className={styles.chartRow}>
                    <span>Vata</span>
                    <div className={styles.barBg}><div style={{ width: `${data.vata}%`, background: '#a855f7' }} className={styles.barFill}></div></div>
                    <span>{data.vata}%</span>
                </div>
                <div className={styles.chartRow}>
                    <span>Pitta</span>
                    <div className={styles.barBg}><div style={{ width: `${data.pitta}%`, background: '#ef4444' }} className={styles.barFill}></div></div>
                    <span>{data.pitta}%</span>
                </div>
                <div className={styles.chartRow}>
                    <span>Kapha</span>
                    <div className={styles.barBg}><div style={{ width: `${data.kapha}%`, background: '#22c55e' }} className={styles.barFill}></div></div>
                    <span>{data.kapha}%</span>
                </div>
            </div>
            <p className={styles.resultDesc}>
                {language === 'hi' ? 'आपकी प्रकृति का पता चल गया है। अधिक जानकारी के लिए परामर्श लें।' : 'Your constitution has been identified. Book a consultation for a detailed analysis.'}
            </p>
        </div>
    );
}
