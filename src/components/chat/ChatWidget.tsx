'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import styles from './ChatWidget.module.css';
import { popularHerbs, healthConditions, doctors, products } from '@/lib/data';
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
        const isHindi = /[ऀ-ॿ]/.test(q) || q.includes('namaste') || q.includes('kaisa') || q.includes('hai');

        // 1. Dosage Guidance (Non-prescriptive)
        if (q.includes('dosage') || q.includes('how to take') || q.includes('khuraak') || q.includes('matra') || q.includes('kaise le')) {
            const herb = popularHerbs.find(h => h.name.toLowerCase().includes(q) || h.name_hi.includes(q));
            if (herb) {
                return isHindi
                    ? `**${herb.name_hi}** के लिए सामान्य खुराक चूर्ण के रूप में 3-6 ग्राम है (दिन में दो बार)। \n\n⚠️ *अस्वीकरण: कृपया सटीक खुराक के लिए चिकित्सक से परामर्श करें।*`
                    : `General dosage for **${herb.name}** is typically 3-6g (powder) twice daily. \n\n⚠️ *Disclaimer: Please consult a doctor for precise medicinal dosage tailored to your constitution.*`;
            }
            return isHindi
                ? "आयुर्वेदिक जड़ी बूटियों की खुराक आपकी प्रकृति और स्थिति पर निर्भर करती है। आमतौर पर, चूर्ण 3-6 ग्राम और गोलियां 1-2 ली जाती हैं। कृपया चिकित्सक से सलाह लें।"
                : "Dosage in Ayurveda depends on your Prakriti and condition. Generally, powders are taken 3-6g and tablets 1-2. Please consult a Vaidya for personalized advice.";
        }

        // 2. Product Discovery / Shopping
        if (q.includes('buy') || q.includes('price') || q.includes('shop') || q.includes('store') || q.includes('kharid') || q.includes('kimat')) {
            const product = products.find(p => p.name.toLowerCase().includes(q) || p.name_hi.includes(q) || p.category.toLowerCase().includes(q));
            if (product) {
                return isHindi
                    ? `मैं **${product.brand} ${product.name_hi || product.name}** की सिफारिश करता हूं। \nमूल्य: ${product.price} \n⭐ ${product.rating} \n[Buy Now](${product.affiliateLink || '#'})`
                    : `I recommend **${product.brand} ${product.name}**. \nPrice: ${product.price} \n⭐ ${product.rating} \n[Buy Now](${product.affiliateLink || '#'})`;
            }
            return isHindi
                ? "हमारे पास प्रामाणिक आयुर्वेदिक उत्पादों का एक बड़ा संग्रह है। आप 'Medicines' अनुभाग देख सकते हैं।"
                : "We have a curated collection of authentic Ayurvedic products. You can browse them in our **Medicines** section.";
        }

        // 3. Check for specific intent (Dosha, Doctor)
        if (q.includes('dosha') || q.includes('prakriti') || q.includes('quiz')) {
            return isHindi
                ? "अपनी प्रकृति (वात, पित्त, कफ) को समझना महत्वपूर्ण है। जल्द ही हमारा दोषा क्विज़ आ रहा है!"
                : "Understanding your Dosha (Vata, Pitta, Kapha) is key. I recommend taking our Dosha Quiz to find your unique constitution. (Coming Soon!)";
        }
        if (q.includes('doctor') || q.includes('consult') || q.includes('appointment') || q.includes('upchar') || q.includes('vaidya')) {
            return isHindi
                ? `हमारे पास ${doctors.length} विशेषज्ञ वैद्य उपलब्ध हैं। आप 'Doctors' अनुभाग में जाकर परामर्श बुक कर सकते हैं।`
                : `We have ${doctors.length} expert Vaidyas available. You can book a consultation instantly. Please visit the Doctors section.`;
        }

        // 4. Search in Herbs
        const herb = popularHerbs.find(h => h.name.toLowerCase().includes(q) || h.name_hi.includes(q) || q.includes(h.slug));
        if (herb) {
            return isHindi
                ? `**${herb.name_hi}** (${herb.name}) *${herb.benefit_hi}* के लिए उत्कृष्ट है। यह ${herb.dosha} को संतुलित करता है।`
                : `**${herb.name} (${herb.name_hi})** is excellent for *${herb.benefit}*. It balances ${herb.dosha}. ${herb.description}`;
        }

        // 5. Search in Conditions
        const condition = healthConditions.find(c => c.name.toLowerCase().includes(q) || c.name_hi.includes(q));
        if (condition) {
            return isHindi
                ? `**${condition.name_hi}** के लिए, आयुर्वेद मूल कारण को संतुलित करने का सुझाव देता है। अनुशंसित जड़ी बूटी: ${condition.recommendedHerbs.join(', ')}।`
                : `For **${condition.name}**, Ayurveda suggests balancing the root cause. Recommended herbs include: ${condition.recommendedHerbs.join(', ')}. \n\nWould you like to speak to a specialist?`;
        }

        // 6. Greetings / Default
        if (q.match(/\b(hi|hello|namaste|hlo|hey)\b/)) {
            return "Namaste! How can I assist you with your health journey today? / नमस्ते! मैं आपकी स्वास्थ्य यात्रा में कैसे सहायता कर सकता हूँ?";
        }

        return isHindi
            ? "मैं अभी भी सीख रहा हूँ! आप मुझसे जड़ी-बूटियों (जैसे अश्वगंधा) या स्वास्थ्य स्थितियों (जैसे मधुमेह) के बारे में पूछ सकते हैं।"
            : "I'm still learning! I can tell you about herbs (like Ashwagandha, Tulsi) or health conditions (like Diabetes, Stress). Try asking me about those.";
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
