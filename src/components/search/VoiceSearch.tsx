'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface VoiceSearchProps {
    onResult: (transcript: string) => void;
}

export default function VoiceSearch({ onResult }: VoiceSearchProps) {
    const { language } = useLanguage();
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState<any>(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.continuous = false;
            recognitionInstance.interimResults = false;
            recognitionInstance.lang = language === 'hi' ? 'hi-IN' : 'en-US';

            recognitionInstance.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                onResult(transcript);
                setIsListening(false);
            };

            recognitionInstance.onerror = (event: any) => {
                console.error('Speech recognition error', event.error);
                setIsListening(false);
            };

            recognitionInstance.onend = () => {
                setIsListening(false);
            };

            setRecognition(recognitionInstance);
        }
    }, [language, onResult]);

    const toggleListening = () => {
        if (!recognition) {
            alert('Voice search is not supported in this browser.');
            return;
        }

        if (isListening) {
            recognition.stop();
        } else {
            recognition.start();
            setIsListening(true);
        }
    };

    if (!recognition) return null;

    return (
        <button
            onClick={toggleListening}
            className={`btn-icon ${isListening ? 'listening' : ''}`}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isListening ? 'red' : 'inherit',
                display: 'flex',
                alignItems: 'center',
                padding: '8px'
            }}
            aria-label="Voice Search"
        >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
    );
}
