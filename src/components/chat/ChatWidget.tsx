'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import styles from './ChatWidget.module.css';
import { popularHerbs, healthConditions, doctors } from '@/lib/data';
import Link from 'next/link';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Namaste! 🙏 I'm AyurBot. Ask me about herbs, health conditions, or finding a doctor.", sender: 'bot', timestamp: new Date() }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const findAnswer = (query: string): string => {
        const q = query.toLowerCase();

        // 1. Check for specific intent (Dosha, Doctor)
        if (q.includes('dosha') || q.includes('prakriti') || q.includes('quiz')) {
            return "Understanding your Dosha (Vata, Pitta, Kapha) is key. I recommend taking our Dosha Quiz to find your unique constitution. (Coming Soon!)";
        }
        if (q.includes('doctor') || q.includes('consult') || q.includes('appointment')) {
            return `We have ${doctors.length} expert Vaidyas available. You can book a consultation instantly. Please visit the Doctors section.`;
        }

        // 2. Search in Herbs
        const herb = popularHerbs.find(h => h.name.toLowerCase().includes(q) || h.name_hi.includes(q) || q.includes(h.slug));
        if (herb) {
            return `**${herb.name} (${herb.name_hi})** is excellent for *${herb.benefit}*. It balances ${herb.dosha}. ${herb.description} \n\n⚠️ *Disclaimer: Consult a doctor for medicinal dosage.*`;
        }

        // 3. Search in Conditions
        const condition = healthConditions.find(c => c.name.toLowerCase().includes(q) || c.name_hi.includes(q));
        if (condition) {
            return `For **${condition.name}**, Ayurveda suggests balancing the root cause. Recommended herbs include: ${condition.recommendedHerbs.join(', ')}. \n\nWould you like to speak to a specialist?`;
        }

        // 4. Greetings / Default
        if (q.match(/\b(hi|hello|namaste)\b/)) {
            return "Namaste! How can I assist you with your health journey today?";
        }

        return "I'm still learning! I can tell you about herbs (like Ashwagandha, Tulsi) or health conditions (like Diabetes, Stress). Try asking me about those.";
    };

    const handleSend = async (text: string = input) => {
        if (!text.trim()) return;

        const newUserMsg: Message = { id: Date.now(), text: text, sender: 'user', timestamp: new Date() };
        setMessages(prev => [...prev, newUserMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const answer = findAnswer(text);
            const newBotMsg: Message = { id: Date.now() + 1, text: answer, sender: 'bot', timestamp: new Date() };
            setMessages(prev => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            <button
                className={styles.launcher}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {isOpen && (
                <div className={styles.window}>
                    <div className={styles.header}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Bot size={20} />
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1rem' }}>AyurBot 🌿</h3>
                                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>Your Ayurvedic Assistant</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}><X size={18} /></button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map(msg => (
                            <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && <div className={styles.typingIndicator}><span>.</span><span>.</span><span>.</span></div>}
                        <div ref={messagesEndRef} />

                        {messages.length === 1 && (
                            <div className={styles.suggestions}>
                                <button onClick={() => handleSend("What is Ashwagandha?")}>What is Ashwagandha?</button>
                                <button onClick={() => handleSend("Herbs for stress")}>Herbs for stress</button>
                                <button onClick={() => handleSend("Find a doctor")}>Find a doctor</button>
                            </div>
                        )}
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={() => handleSend()}><Send size={18} /></button>
                    </div>
                </div>
            )}
        </>
    );
}
