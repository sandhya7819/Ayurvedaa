'use client';

import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ChatCTA() {
    const { language } = useLanguage();

    return (
        <section style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <div style={{ background: 'rgba(255,255,255,0.1)', width: 'fit-content', margin: '0 auto 2rem', padding: '1rem', borderRadius: '50%' }}>
                    <MessageCircle size={48} color="white" />
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                    {language === 'hi' ? 'आयुर्वेद सहायक से पूछें' : 'Ask our AI Ayurveda Assistant'}
                </h2>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                    {language === 'hi'
                        ? 'तुरंत होम रेमेडीज, जड़ी-बूटियों की जानकारी और स्वास्थ्य सुझाव पाएं।'
                        : 'Get instant home remedies, herb information, and health tips specifically tailored for you.'}
                </p>
                <button
                    onClick={() => document.getElementById('chat-widget-toggle')?.click()}
                    className="btn"
                    style={{
                        background: 'white',
                        color: '#3730a3',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    {language === 'hi' ? 'चैट शुरू करें' : 'Start Chatting Now'}
                </button>
            </div>
        </section>
    );
}
