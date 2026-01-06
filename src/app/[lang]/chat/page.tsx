'use client';

import { useState } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import styles from './page.module.css';

export default function ChatPage() {
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Namaste! I am your AI Ayurveda Assistant. I can help you find herbs, suggest home remedies, or guide you to a doctor. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;
        setMessages([...messages, { role: 'user', text: inputValue }]);
        setInputValue('');

        // Simulate typical bot response delay
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: 'Thank you for your question. As an AI, I suggest consulting a certified Ayurvedic doctor for personalized advice. Would you like me to find one near you?' }]);
        }, 1000);
    };

    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                {/* Sidebar History */}
                <aside className={styles.sidebar}>
                    <button className={styles.newChatBtn}>
                        <Sparkles size={16} /> New Conversation
                    </button>
                    <div className={styles.history}>
                        <h4>Recent</h4>
                        <div className={styles.historyItem}>Remedies for Cold</div>
                        <div className={styles.historyItem}>Pitta Dosha Diet</div>
                    </div>
                </aside>

                {/* Main Chat Area */}
                <main className={styles.main}>
                    <div className={styles.chatArea}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`${styles.message} ${msg.role === 'user' ? styles.user : styles.bot}`}>
                                <div className={styles.avatar}>
                                    {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                                </div>
                                <div className={styles.bubble}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="Ask about herbs, conditions, or doshas..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend}><Send size={20} /></button>
                    </div>
                </main>
            </div>
        </div>
    );
}
