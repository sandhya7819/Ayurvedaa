export type Dosha = 'Vata' | 'Pitta' | 'Kapha';

export interface Option {
    text: string;
    text_hi: string;
    dosha: Dosha;
    icon?: string;
}

export interface Question {
    id: number;
    section: 'Body' | 'Digestion' | 'Mind';
    question: string;
    question_hi: string;
    options: Option[];
}

export const quizQuestions: Question[] = [
    // --- SECTION 1: BODY & PHYSICAL TRAITS ---
    {
        id: 1,
        section: 'Body',
        question: "How would you describe your body frame?",
        question_hi: "आप अपनी शारीरिक बनावट का वर्णन कैसे करेंगे?",
        options: [
            { text: "Thin, bony, prominent joints", text_hi: "पतला, हड्डियों वाला, उभरे हुए जोड़", dosha: "Vata" },
            { text: "Medium build, muscular", text_hi: "मध्यम शरीर, गठीला", dosha: "Pitta" },
            { text: "Large, sturdy, heavy bone structure", text_hi: "बड़ा, मजबूत, भारी हड्डियों वाला ढांचा", dosha: "Kapha" }
        ]
    },
    {
        id: 2,
        section: 'Body',
        question: "What is your skin type like?",
        question_hi: "आपकी त्वचा किस प्रकार की है?",
        options: [
            { text: "Dry, rough, tends to crack", text_hi: "रूखी, खुरदरी, अक्सर फट जाती है", dosha: "Vata" },
            { text: "Sensitive, reddish, warm to touch", text_hi: "संवेदनशील, लालिमा युक्त, छूने पर गर्म", dosha: "Pitta" },
            { text: "Oily, smooth, cool, thick", text_hi: "तैलीय, मुलायम, ठंडी, मोटी", dosha: "Kapha" }
        ]
    },
    {
        id: 3,
        section: 'Body',
        question: "Describe your hair texture.",
        question_hi: "आपके बालों की बनावट कैसी है?",
        options: [
            { text: "Dry, brittle, frizzy", text_hi: "रूखे, बेजान, उलझे हुए", dosha: "Vata" },
            { text: "Fine, straight, greys early", text_hi: "पतले, सीधे, जल्दी सफेद होने वाले", dosha: "Pitta" },
            { text: "Thick, lustrous, wavy/curly", text_hi: "घने, चमकदार, लहरदार/घुंघराले", dosha: "Kapha" }
        ]
    },
    {
        id: 4,
        section: 'Body',
        question: "How is your body weight?",
        question_hi: "आपका शारीरिक वजन कैसा है?",
        options: [
            { text: "Hard to gain weight", text_hi: "वजन बढ़ाना मुश्किल है", dosha: "Vata" },
            { text: "Easy to gain, easy to lose", text_hi: "आसानी से बढ़ता और घटता है", dosha: "Pitta" },
            { text: "Gains easily, hard to lose", text_hi: "आसानी से बढ़ता है, घटाना मुश्किल है", dosha: "Kapha" }
        ]
    },
    {
        id: 5,
        section: 'Body',
        question: "How much do you sweat?",
        question_hi: "आपको पसीना कितना आता है?",
        options: [
            { text: "Scanty, minimal sweating", text_hi: "बहुत कम पसीना", dosha: "Vata" },
            { text: "Profuse, strong odor", text_hi: "बहुत ज्यादा, तेज गंध", dosha: "Pitta" },
            { text: "Moderate, consistent", text_hi: "मध्यम, स्थिर", dosha: "Kapha" }
        ]
    },

    // --- SECTION 2: DIGESTION & PHYSIOLOGY ---
    {
        id: 6,
        section: 'Digestion',
        question: "How is your appetite?",
        question_hi: "आपकी भूख कैसी है?",
        options: [
            { text: "Irregular (sometimes hungry, sometimes not)", text_hi: "अनियमित (कभी भूख लगती है, कभी नहीं)", dosha: "Vata" },
            { text: "Strong, unbearable if meals are skipped", text_hi: "तेज, भोजन न मिलने पर सहन नहीं होता", dosha: "Pitta" },
            { text: "Low but steady, can skip meals easily", text_hi: "कम लेकिन स्थिर, आसानी से खाना छोड़ सकते हैं", dosha: "Kapha" }
        ]
    },
    {
        id: 7,
        section: 'Digestion',
        question: "How are your bowel movements?",
        question_hi: "आपका मल त्याग कैसा है?",
        options: [
            { text: "Irregular, dry, tendency for constipation", text_hi: "अनियमित, सूखा, कब्ज की प्रवृत्ति", dosha: "Vata" },
            { text: "Regular, loose, sometimes burning", text_hi: "नियमित, ढीला, कभी-कभी जलन", dosha: "Pitta" },
            { text: "Regular, heavy, slow", text_hi: "नियमित, भारी, धीमा", dosha: "Kapha" }
        ]
    },
    {
        id: 8,
        section: 'Digestion',
        question: "How is your sleep quality?",
        question_hi: "आपकी नींद की गुणवत्ता कैसी है?",
        options: [
            { text: "Light, interrupted, trouble falling asleep", text_hi: "हल्की, बाधित, सोने में मुश्किल", dosha: "Vata" },
            { text: "Sound, short (6-7 hrs), wake up refreshed", text_hi: "गहरी, छोटी (6-7 घंटे), तरोताजा उठते हैं", dosha: "Pitta" },
            { text: "Deep, long (8+ hrs), trouble waking up", text_hi: "गहरी, लंबी (8+ घंटे), उठने में मुश्किल", dosha: "Kapha" }
        ]
    },
    {
        id: 9,
        section: 'Digestion',
        question: "Which weather do you prefer?",
        question_hi: "आपको कौन सा मौसम पसंद है?",
        options: [
            { text: "Warm weather (dislike cold)", text_hi: "गर्म मौसम (ठंड नापसंद)", dosha: "Vata" },
            { text: "Cool weather (dislike heat)", text_hi: "ठंडा मौसम (गर्मी नापसंद)", dosha: "Pitta" },
            { text: "Warm and dry weather (dislike damp/cold)", text_hi: "गर्म और सूखा मौसम (नमी/ठंड नापसंद)", dosha: "Kapha" }
        ]
    },

    // --- SECTION 3: MIND & EMOTIONS ---
    {
        id: 10,
        section: 'Mind',
        question: "How does your mind work?",
        question_hi: "आपका दिमाग कैसे काम करता है?",
        options: [
            { text: "Active, restless, many thoughts", text_hi: "सक्रिय, बेचैन, बहुत सारे विचार", dosha: "Vata" },
            { text: "Sharp, focused, determined", text_hi: "तेज, एकाग्र, दृढ़ निश्चयी", dosha: "Pitta" },
            { text: "Calm, steady, slow to change", text_hi: "शांत, स्थिर, बदलाव में धीमा", dosha: "Kapha" }
        ]
    },
    {
        id: 11,
        section: 'Mind',
        question: "How is your memory?",
        question_hi: "आपकी याददाश्त कैसी है?",
        options: [
            { text: "Quick to learn, quick to forget", text_hi: "जल्दी याद होता है, जल्दी भूल जाते हैं", dosha: "Vata" },
            { text: "Good memory, distinctly sharp", text_hi: "अच्छी याददाश्त, स्पष्ट रूप से तेज", dosha: "Pitta" },
            { text: "Slow to learn, but never forgets", text_hi: "सीखने में धीमा, लेकिन कभी नहीं भूलता", dosha: "Kapha" }
        ]
    },
    {
        id: 12,
        section: 'Mind',
        question: "How do you react to stress?",
        question_hi: "तनाव में आपकी क्या प्रतिक्रिया होती है?",
        options: [
            { text: "Anxious, fearful, worry a lot", text_hi: "घबराहट, डर, बहुत चिंता", dosha: "Vata" },
            { text: "Angry, irritable, critical", text_hi: "गुस्सा, चिड़चिड़ापन, आलोचनात्मक", dosha: "Pitta" },
            { text: "Withdrawn, silent, emotional eating", text_hi: "पीछे हटना, चुप रहना, भावात्मक", dosha: "Kapha" }
        ]
    },
    {
        id: 13,
        section: 'Mind',
        question: "How do you speak?",
        question_hi: "आप कैसे बोलते हैं?",
        options: [
            { text: "Fast, talkative, changing topics", text_hi: "तेज़, बातूनी, विषय बदलते हुए", dosha: "Vata" },
            { text: "Clear, precise, commanding", text_hi: "स्पष्ट, सटीक, प्रभावशाली", dosha: "Pitta" },
            { text: "Slow, soft, melodious", text_hi: "धीमा, कोमल, मधुर", dosha: "Kapha" }
        ]
    },
    {
        id: 14,
        section: 'Mind',
        question: "What is your energy level like?",
        question_hi: "आपका ऊर्जा स्तर कैसा है?",
        options: [
            { text: "Fluctuating, comes in bursts", text_hi: "उतार-चढ़ाव वाला, अचानक आता है", dosha: "Vata" },
            { text: "Moderate, consistent, driven", text_hi: "मध्यम, स्थिर, प्रेरित", dosha: "Pitta" },
            { text: "Steady, high endurance, slow start", text_hi: "स्थिर, उच्च सहनशक्ति, धीमी शुरुआत", dosha: "Kapha" }
        ]
    }
];
