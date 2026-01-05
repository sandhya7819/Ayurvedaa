'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    // Simple translation dictionary (expand as needed or move to separate file)
    const translations: Record<string, Record<Language, string>> = {
        'search_placeholder': {
            en: 'Search for herbs, conditions, or medicines...',
            hi: 'जड़ी-बूटियाँ, बीमारियाँ या दवाएं खोजें...'
        },
        'search_btn': {
            en: 'Search',
            hi: 'खोजें'
        },
        'hero_title_1': {
            en: 'Discover the Power of',
            hi: 'आयुर्वेदिक चिकित्सा की'
        },
        'hero_title_2': {
            en: 'Ayurvedic Healing',
            hi: 'शक्ति की खोज करें'
        },
        'hero_subtitle': {
            en: 'Explore ancient wisdom for modern wellness. Find herbs, treatments, and doctors tailored to your unique Dosha.',
            hi: 'आधुनिक कल्याण के लिए प्राचीन ज्ञान का अन्वेषण करें। अपनी दोष प्रकृति के अनुसार जड़ी-बूटियाँ, उपचार और डॉक्टर खोजें।'
        },
        'popular': {
            en: 'Popular:',
            hi: 'लोकप्रिय:'
        },
        'voice_search': {
            en: 'Voice Search',
            hi: 'आवाज़ से खोजें'
        },
        'no_results': {
            en: 'No results found',
            hi: 'कोई परिणाम नहीं मिला'
        },
        'home': { en: 'Home', hi: 'होम' },
        'herbs': { en: 'Herbs', hi: 'जड़ी-बूटियाँ' },
        'conditions': { en: 'Health Conditions', hi: 'स्वास्थ्य स्थितियां' },
        'medicines': { en: 'Medicines', hi: 'दवाएं' },
        'products': { en: 'Store', hi: 'स्टोर' },
        'consult': { en: 'Consult Doctors', hi: 'डॉक्टर से परामर्श लें' },
        // Footer & General
        'discover': { en: 'Discover', hi: 'खोजें' },
        'support': { en: 'Support', hi: 'सहायता' },
        'stay_connected': { en: 'Stay Connected', hi: 'जुड़े रहें' },
        'herbs_az': { en: 'Herbs A-Z', hi: 'जड़ी-बूटियाँ (A-Z)' },
        'curated_products': { en: 'Curated Products', hi: 'चुनिंदा उत्पाद' },
        'find_doctor': { en: 'Find a Doctor', hi: 'डॉक्टर खोजें' },
        'contact_us': { en: 'Contact Us', hi: 'संपर्क करें' },
        'privacy_policy': { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
        'medical_disclaimer': { en: 'Medical Disclaimer', hi: 'चिकित्सा अस्वीकरण' },
        'subscribe_text': { en: 'Subscribe for seasonal health tips.', hi: 'मौसमी स्वास्थ्य सुझावों के लिए सदस्यता लें।' },
        'your_email': { en: 'Your email', hi: 'आपका ईमेल' },
        'rights_reserved': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
        'footer_desc': {
            en: 'Modern wisdom from ancient roots. Your trusted companion for holistic healing and wellness.',
            hi: 'प्राचीन जड़ों से आधुनिक ज्ञान। समग्र उपचार और कल्याण के लिए आपका विश्वसनीय साथी।'
        },
        // CTA
        'cta_title': { en: "Not sure what's right for you?", hi: "क्या आपके लिए सही है, यह सुनिश्चित नहीं?" },
        'cta_desc': {
            en: "Connect with certified Ayurvedic doctors for a personalized consultation. Get a tailored diet, lifestyle, and herb plan.",
            hi: "व्यक्तिगत परामर्श के लिए प्रमाणित आयुर्वेदिक डॉक्टरों से जुड़ें। अपने लिए अनुकूलित आहार, जीवन शैली और जड़ी-बूटी योजना प्राप्त करें।"
        },
        'book_consult': { en: 'Book Online Consultation', hi: 'ऑनलाइन परामर्श बुक करें' },
        'take_quiz': { en: 'Take Dosha Quiz', hi: 'दोष क्विज़ लें' },

        // Condition Categories
        'browse_conditions': { en: 'Browse by Health Concern', hi: 'स्वास्थ्य समस्याओं के अनुसार देखें' },
        'condition_subtitle': { en: 'Find Ayurvedic solutions tailored to your specific needs.', hi: 'अपनी विशिष्ट आवश्यकताओं के लिए आयुर्वेदिक समाधान खोजें।' },

        // Featured Herbs
        'natures_pharmacy': { en: "Nature's Pharmacy", hi: 'प्रकृति की फार्मेसी' },
        'herbs_subtitle': { en: 'Explore the healing power of the most potent Ayurvedic herbs.', hi: 'सबसे शक्तिशाली आयुर्वेदिक जड़ी-बूटियों की उपचारात्मक शक्ति का अन्वेषण करें।' },
        'learn_more': { en: 'Learn More', hi: 'और जानें' },

        // Trusted Products
        'trusted_products': { en: 'Trusted Ayurvedic Products', hi: 'विश्वसनीय आयुर्वेदिक उत्पाद' },
        'view_all_products': { en: 'View All Products', hi: 'सभी उत्पाद देखें' },
        'view_details': { en: 'View Details', hi: 'विवरण देखें' },

        // Trust Section
        'authentic_info': { en: 'Authentic Information', hi: 'प्रामाणिक जानकारी' },
        'authentic_desc': { en: 'Verified by certified Ayurvedic practitioners and classical texts.', hi: 'प्रमाणित आयुर्वेदिक चिकित्सकों और शास्त्रीय ग्रंथों द्वारा सत्यापित।' },
        'natural_approach': { en: '100% Natural Approach', hi: '100% प्राकृतिक दृष्टिकोण' },
        'natural_desc': { en: "Focusing on holistic healing through nature's bounty.", hi: 'प्रकृति के उपहारों के माध्यम से समग्र उपचार पर ध्यान केंद्रित करना।' },
        'community_trusted': { en: 'Community Trusted', hi: 'समुदाय द्वारा विश्वसनीय' },
        'community_desc': { en: 'Helping thousands find their path to wellness since 2010.', hi: '2010 से हजारों लोगों को कल्याण की राह खोजने में मदद करना।' },

        // Search Suggestion Types
        'herb': { en: 'Herb', hi: 'जड़ी-बूटी' },
        'condition': { en: 'Condition', hi: 'स्वास्थ्य स्थिति' },
        'medicine': { en: 'Medicine', hi: 'दवा' },
        'issue': { en: 'Issue', hi: 'समस्या' },

        // Add more translations as we encounter them
    };

    const t = (key: string) => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
