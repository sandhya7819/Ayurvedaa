'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

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
                        <h3>AyurBot 🌿</h3>
                        <p>Your Ayurvedic Assistant</p>
                    </div>

                    <div className={styles.messages}>
                        <div className={`${styles.message} ${styles.bot}`}>
                            Namaste! 🙏 How can I help you find balance today?
                        </div>
                        <div className={styles.suggestions}>
                            <button>What's my Dosha?</button>
                            <button>Herbs for stress</button>
                            <button>Consult a doctor</button>
                        </div>
                    </div>

                    <div className={styles.inputArea}>
                        <input type="text" placeholder="Type a message..." />
                        <button><Send size={18} /></button>
                    </div>
                </div>
            )}
        </>
    );
}
