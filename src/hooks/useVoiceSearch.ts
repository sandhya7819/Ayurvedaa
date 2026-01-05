'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface UseVoiceSearchProps {
    onResult: (transcript: string) => void;
    lang?: string;
}

export function useVoiceSearch({ onResult, lang = 'en-US' }: UseVoiceSearchProps) {
    const [isListening, setIsListening] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            setIsSupported(true);
        }
    }, []);

    const toggleListening = useCallback(() => {
        if (!isSupported) return;

        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
            return;
        }

        setError(null);

        // @ts-ignore
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            onResult(transcript);
        };

        recognition.onerror = (event: any) => {
            if (event.error === 'not-allowed') {
                setError('Microphone access denied. Please allow permission.');
            } else if (event.error === 'no-speech') {
                setError('Did not hear anything. Try again.');
            } else if (event.error !== 'aborted') {
                // Only log unexpected errors
                console.error('Speech recognition error:', event.error);
                setError('Voice search failed. Please type.');
            }
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    }, [isSupported, isListening, lang, onResult]);

    return { isListening, isSupported, toggleListening, error };
}
