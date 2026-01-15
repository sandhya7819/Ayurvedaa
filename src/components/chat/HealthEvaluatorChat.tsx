'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './HealthEvaluatorChat.module.css';
import { Bot, RefreshCcw, ArrowRight, User, Send, CheckCircle2 } from 'lucide-react';
import { healthChatFlow, chatNodeId, ChatNode } from '@/lib/healthChatData';
import Link from 'next/link';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'result';
    summaryData?: any;
}

export default function HealthEvaluatorChat() {
    const { language } = useLanguage();

    // --- State ---
    const [currentNodeId, setCurrentNodeId] = useState<chatNodeId | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [history, setHistory] = useState<Record<string, string>>({}); // Stores User Answers: { NodeID: AnswerText }
    const [isTyping, setIsTyping] = useState(false);
    const [showStartBtn, setShowStartBtn] = useState(true);
    const [customInput, setCustomInput] = useState("");
    const [showCustomInput, setShowCustomInput] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, showCustomInput]);

    // --- Actions ---

    const handleStart = () => {
        setShowStartBtn(false);
        const startNode = healthChatFlow['START'];
        setCurrentNodeId('START');

        setIsTyping(true);
        setTimeout(() => {
            addMessage(startNode.message, 'bot');
            setIsTyping(false);
        }, 1000);
    };

    const addMessage = (text: string, sender: 'bot' | 'user', type: 'text' | 'result' = 'text', summaryData?: any) => {
        setMessages(prev => [...prev, { id: Date.now(), text, sender, type, summaryData }]);
    };

    const handleOptionSelect = (optionLabel: string, nextId: chatNodeId, isOther: boolean = false) => {
        if (isOther) {
            setShowCustomInput(true);
            // We hold the nextId in a temp state or closure? 
            // Better: Set current node to stay same, but wait for input.
            // Actually, we need to know WHERE to go after input.
            // Let's store pendingNextId in a Ref or State if needed, but for now let's assume "Other" logic simply passes the custom text to the same nextId.
            // We will attach the `nextId` to the current state to know where to transition after submission.
            // BUT `currentNodeId` is already set. We can rely on `healthChatFlow[currentNodeId].options` to find the "Other" option again? No.
            // Simplest: Just use a data attribute or closure.
            // Let's us `handleCustomInputSubmit` which will need to know `nextId`.
            return;
        }

        // Standard Option Click
        submitAnswer(optionLabel, nextId);
    };

    const submitAnswer = (answerText: string, nextId: chatNodeId) => {
        setShowCustomInput(false);
        setCustomInput("");

        // 1. Show User Answer
        addMessage(answerText, 'user');

        // 2. Save History
        if (currentNodeId) {
            setHistory(prev => ({ ...prev, [currentNodeId]: answerText }));
        }

        // 3. Move to Next Node
        if (nextId === 'END') {
            setCurrentNodeId(null); // No more questions
            setIsTyping(true);
            setTimeout(() => {
                generateSummary({ ...history, [currentNodeId!]: answerText });
            }, 1500);
        } else {
            setCurrentNodeId(nextId);
            setIsTyping(true);
            setTimeout(() => {
                const node = healthChatFlow[nextId];
                addMessage(node.message, 'bot');
                setIsTyping(false);
            }, 1000);
        }
    };

    const handleCustomSubmit = (nextIdForOther: chatNodeId) => {
        if (!customInput.trim()) return;
        submitAnswer(customInput, nextIdForOther);
    };

    const generateSummary = (finalHistory: Record<string, string>) => {
        setIsTyping(false);

        // Construct Summary
        // Simple template based logic
        const feeling = finalHistory['START'] || 'Unknown';
        const mainIssue = finalHistory['MAIN_ISSUE'] || 'General Wellness';

        const summaryText = `Based on your inputs, here is your Health Evaluation Summary.`;

        addMessage(summaryText, 'bot');

        setTimeout(() => {
            addMessage("", 'bot', 'result', { ...finalHistory });
        }, 600);
    };

    const handleRestart = () => {
        setMessages([]);
        setHistory({});
        setCurrentNodeId(null);
        setShowStartBtn(true);
        setIsTyping(false);
        setCustomInput("");
        setShowCustomInput(false);
    };

    // --- Render Helpers ---

    const currentNode = currentNodeId ? healthChatFlow[currentNodeId] : null;
    const isBotLast = messages.length > 0 && messages[messages.length - 1].sender === 'bot';
    // Show options only if:
    // 1. Not typing
    // 2. We have a current node
    // 3. Bot was the last one to speak (meaning it just asked a question)
    // 4. We are NOT showing custom input field
    const showOptions = !isTyping && currentNode && isBotLast && !showCustomInput;

    // Find "Other" option's nextId for the custom input handler
    const otherOption = currentNode?.options.find(o => o.isOther);

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                <div className={styles.botInfo}>
                    <div className={styles.botAvatar} style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)' }}>
                        <Bot size={24} color="white" />
                    </div>
                    <div>
                        <h3>AyurBot Health Evaluator</h3>
                        <span>Always here to help</span>
                    </div>
                </div>
                {!showStartBtn && (
                    <button onClick={handleRestart} className={styles.restartBtn} title="Restart">
                        <RefreshCcw size={16} />
                    </button>
                )}
            </div>

            <div className={styles.messagesArea}>
                {messages.map((msg) => (
                    <div key={msg.id} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}>
                        {msg.sender === 'bot' && (
                            <div className={styles.msgAvatar} style={{ background: '#e0e7ff', color: '#4f46e5' }}>
                                <Bot size={16} />
                            </div>
                        )}

                        <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.userBubble : styles.botBubble}`}>
                            {msg.type === 'result' ? (
                                <SummaryCard data={msg.summaryData} />
                            ) : (
                                <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className={`${styles.messageRow} ${styles.botRow}`}>
                        <div className={styles.msgAvatar} style={{ background: '#e0e7ff', color: '#4f46e5' }}><Bot size={16} /></div>
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
                {showStartBtn ? (
                    <button className={styles.actionBtn} onClick={handleStart} style={{ background: '#4f46e5' }}>
                        Start Health Evaluation <ArrowRight size={18} />
                    </button>
                ) : showCustomInput && otherOption ? (
                    <div className={styles.customInputBox}>
                        <input
                            type="text"
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                            placeholder="Type your answer here..."
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit(otherOption.nextId)}
                        />
                        <button onClick={() => handleCustomSubmit(otherOption.nextId)}>
                            <Send size={18} />
                        </button>
                    </div>
                ) : showOptions ? (
                    <div className={styles.optionsContainer}>
                        {currentNode?.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={styles.optionBtn}
                                onClick={() => handleOptionSelect(opt.label, opt.nextId, opt.isOther)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                ) : currentNodeId === null && !isTyping && messages.length > 0 ? (
                    <div className={styles.placeholderText}>Conversation Ended</div>
                ) : (
                    <div className={styles.placeholderText}>AyurBot is thinking...</div>
                )}
            </div>
        </div>
    );
}

import { healthChatFlow, chatNodeId, ChatNode, getAyurvedicSuggestion } from '@/lib/healthChatData';

function SummaryCard({ data }: any) {
    const issue = data['MAIN_ISSUE'] || "General Checkup";
    const history = data;
    const suggestion = getAyurvedicSuggestion(history);

    return (
        <div style={{ minWidth: '300px' }}>
            <h4 style={{ color: suggestion.color, margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{suggestion.title}</h4>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#64748b' }}>{suggestion.summary}</p>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginTop: '0.5rem', border: `1px solid ${suggestion.color}30` }}>
                <strong style={{ display: 'block', marginBottom: '0.8rem', color: '#0f172a' }}>Ayurvedic Suggestions:</strong>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {suggestion.tips.map((tip: string, idx: number) => (
                        <li key={idx}>
                            <span dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', marginTop: '1rem' }}>
                ⚠️ This is not a medical diagnosis. For chronic issues, please consult a Vaidya.
            </div>

            <Link href="/consult" style={{
                display: 'block',
                textAlign: 'center',
                background: suggestion.color,
                color: 'white',
                padding: '0.8rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                marginTop: '1rem',
                boxShadow: `0 4px 10px -2px ${suggestion.color}60`
            }}>
                Consult a Doctor Now
            </Link>
        </div>
    );
}
