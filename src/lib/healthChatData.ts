export type chatNodeId =
    | 'START'
    | 'FEELING'
    // Feeling Good Path
    | 'LIFESTYLE_CHECK'

    // Issues Path - Main Split
    | 'MAIN_ISSUE'

    // Branch: Stress/Anxiety
    | 'STRESS_DURATION'
    | 'STRESS_TRIGGER'
    | 'STRESS_SLEEP'

    // Branch: Digestion
    | 'DIGESTION_TYPE'
    | 'DIGESTION_HABIT'

    // Branch: Sleep
    | 'SLEEP_TYPE'
    | 'SLEEP_ROUTINE'

    // Branch: Pain
    | 'PAIN_AREA'
    | 'PAIN_TYPE'

    // General / Common
    | 'SYMPTOM_SEVERITY'
    | 'MEDICAL_HISTORY'
    | 'END';

export interface ChatOption {
    label: string;
    nextId: chatNodeId;
    isOther?: boolean;
}

export interface ChatNode {
    id: chatNodeId;
    message: string;
    options: ChatOption[];
}

export const healthChatFlow: Record<chatNodeId, ChatNode> = {
    'START': {
        id: 'START',
        message: "Namaste! 🙏 I’m AyurBot. \nLet's evaluate your health to find the best Ayurvedic solutions for you.\n\nFirst, how are you feeling today?",
        options: [
            { label: "😊 I feel energetic & healthy", nextId: 'LIFESTYLE_CHECK' },
            { label: "😐 I feel okay, but could be better", nextId: 'LIFESTYLE_CHECK' },
            { label: "😔 I am feeling low / tired", nextId: 'MAIN_ISSUE' },
            { label: "😣 I have a specific health problem", nextId: 'MAIN_ISSUE' },
            { label: "Other", nextId: 'MAIN_ISSUE', isOther: true }
        ]
    },
    'FEELING': {
        id: 'FEELING',
        message: "How are you feeling?",
        options: []
    },

    // --- PATH 1: General Wellness Check (For those feeling good) ---
    'LIFESTYLE_CHECK': {
        id: 'LIFESTYLE_CHECK',
        message: "That's wonderful! To keep you healthy, I'd like to check your balance. \nHow is your sleep quality usually?",
        options: [
            { label: "Deep & restful (7-8 hrs)", nextId: 'DIGESTION_HABIT' },
            { label: "Light / Disturbed often", nextId: 'STRESS_SLEEP' },
            { label: "I sleep too much & feel heavy", nextId: 'DIGESTION_HABIT' },
            { label: "Other", nextId: 'DIGESTION_HABIT', isOther: true }
        ]
    },

    // --- PATH 2: Specific Issues ---
    'MAIN_ISSUE': {
        id: 'MAIN_ISSUE',
        message: "I'm here to support you. Please tell me, what is bothering you the most right now?",
        options: [
            { label: "Stress / Anxiety / Overthinking", nextId: 'STRESS_DURATION' },
            { label: "Gas / Bloating / Indigestion", nextId: 'DIGESTION_TYPE' },
            { label: "Sleep Issues / Insomnia", nextId: 'SLEEP_TYPE' },
            { label: "Joint Pain / Body Ache", nextId: 'PAIN_AREA' },
            { label: "Weakness / Low Energy", nextId: 'DIGESTION_HABIT' }, // Often digestion related
            { label: "Other", nextId: 'SYMPTOM_SEVERITY', isOther: true }
        ]
    },

    // --- BRANCH: STRESS ---
    'STRESS_DURATION': {
        id: 'STRESS_DURATION',
        message: "I understand. Stress is very common these days. How long have you been feeling this way?",
        options: [
            { label: "Recently (Few days)", nextId: 'STRESS_TRIGGER' },
            { label: "For a few weeks", nextId: 'STRESS_TRIGGER' },
            { label: "Chronic (Months/Years)", nextId: 'STRESS_TRIGGER' },
            { label: "Other", nextId: 'STRESS_TRIGGER', isOther: true }
        ]
    },
    'STRESS_TRIGGER': {
        id: 'STRESS_TRIGGER',
        message: "Do you feel it affects your body physically? (e.g., headaches, tension)",
        options: [
            { label: "Yes, I get headaches/tension", nextId: 'STRESS_SLEEP' },
            { label: "No, it's mostly mental/emotional", nextId: 'STRESS_SLEEP' },
            { label: "Sometimes", nextId: 'STRESS_SLEEP' },
            { label: "Other", nextId: 'STRESS_SLEEP', isOther: true }
        ]
    },
    'STRESS_SLEEP': {
        id: 'STRESS_SLEEP',
        message: "Does this stress affect your sleep at night?",
        options: [
            { label: "Yes, I can't fall asleep easily", nextId: 'MEDICAL_HISTORY' },
            { label: "Yes, I wake up frequently", nextId: 'MEDICAL_HISTORY' },
            { label: "No, I sleep fine", nextId: 'MEDICAL_HISTORY' },
            { label: "Other", nextId: 'MEDICAL_HISTORY', isOther: true }
        ]
    },

    // --- BRANCH: DIGESTION ---
    'DIGESTION_TYPE': {
        id: 'DIGESTION_TYPE',
        message: "Digestion is the root of health in Ayurveda. What exactly are you experiencing?",
        options: [
            { label: "Gas, bloating, constipation", nextId: 'DIGESTION_HABIT' }, // Vata
            { label: "Acidity, heartburn, burning sensation", nextId: 'DIGESTION_HABIT' }, // Pitta
            { label: "Heaviness, slow digestion, mucus", nextId: 'DIGESTION_HABIT' }, // Kapha
            { label: "Other", nextId: 'DIGESTION_HABIT', isOther: true }
        ]
    },
    'DIGESTION_HABIT': {
        id: 'DIGESTION_HABIT',
        message: "Do you have a regular eating schedule?",
        options: [
            { label: "Yes, I eat on time", nextId: 'MEDICAL_HISTORY' },
            { label: "No, I skip meals often", nextId: 'MEDICAL_HISTORY' },
            { label: "I eat late at night", nextId: 'MEDICAL_HISTORY' },
            { label: "Other", nextId: 'MEDICAL_HISTORY', isOther: true }
        ]
    },

    // --- BRANCH: SLEEP ---
    'SLEEP_TYPE': {
        id: 'SLEEP_TYPE',
        message: "Sleep is crucial. What is the main trouble?",
        options: [
            { label: "Trouble falling asleep (Mind won't stop)", nextId: 'STRESS_TRIGGER' },
            { label: "Waking up in middle of night", nextId: 'DIGESTION_HABIT' },
            { label: "Waking up tired/heavy", nextId: 'MEDICAL_HISTORY' },
            { label: "Other", nextId: 'MEDICAL_HISTORY', isOther: true }
        ]
    },
    'SLEEP_ROUTINE': {
        id: 'SLEEP_ROUTINE',
        message: "What time do you usually go to bed?",
        options: [
            { label: "Before 10 PM", nextId: 'MEDICAL_HISTORY' },
            { label: "10 PM - 12 AM", nextId: 'MEDICAL_HISTORY' },
            { label: "After Midnight", nextId: 'MEDICAL_HISTORY' },
            { label: "Irregular", nextId: 'MEDICAL_HISTORY' }
        ]
    },

    // --- BRANCH: PAIN ---
    'PAIN_AREA': {
        id: 'PAIN_AREA',
        message: "Sorry to hear that. Where is the pain located mainly?",
        options: [
            { label: "Joints (Knees, elbows)", nextId: 'PAIN_TYPE' },
            { label: "Back / Neck", nextId: 'PAIN_TYPE' },
            { label: "Headache / Migraine", nextId: 'STRESS_SLEEP' },
            { label: "Whole body ache", nextId: 'PAIN_TYPE' },
            { label: "Other", nextId: 'PAIN_TYPE', isOther: true }
        ]
    },
    'PAIN_TYPE': {
        id: 'PAIN_TYPE',
        message: "Is the pain sharp/shooting or dull/aching?",
        options: [
            { label: "Sharp / Shooting", nextId: 'MEDICAL_HISTORY' },
            { label: "Dull / Aching / Stiff", nextId: 'MEDICAL_HISTORY' },
            { label: "Throbbing", nextId: 'MEDICAL_HISTORY' },
            { label: "Other", nextId: 'MEDICAL_HISTORY', isOther: true }
        ]
    },

    // --- COMMON ENDING ---
    'SYMPTOM_SEVERITY': {
        id: 'SYMPTOM_SEVERITY',
        message: "How severe would you say the issue is?",
        options: [
            { label: "Mild - I just started noticing", nextId: 'MEDICAL_HISTORY' },
            { label: "Moderate - It bothers me", nextId: 'MEDICAL_HISTORY' },
            { label: "Severe - I need immediate relief", nextId: 'MEDICAL_HISTORY' }
        ]
    },
    'MEDICAL_HISTORY': {
        id: 'MEDICAL_HISTORY',
        message: "One final question: Do you have any existing ongoing medical conditions (like Diabetes, BP, Thyroid)?",
        options: [
            { label: "Yes", nextId: 'END' },
            { label: "No", nextId: 'END' },
            { label: "Not Sure", nextId: 'END' },
            { label: "Other", nextId: 'END', isOther: true }
        ]
    },
    'END': {
        id: 'END',
        message: "Thank you for sharing. I'm analyzing your responses to create a personalized Ayurvedic suggestion...",
        options: []
    }
};

// Helper to get suggestions based on history
export const getAyurvedicSuggestion = (history: Record<string, string>) => {
    const issue = history['MAIN_ISSUE'];

    // --- STRESS Suggestion ---
    if (issue && (issue.includes('Stress') || issue.includes('Anxiety'))) {
        return {
            title: "Stress & Anxiety Relief",
            summary: "It seems your Vata dosha might be aggravated, causing restlessness and mental fatigue.",
            tips: [
                "Try **Ashwagandha** or **Brahmi** tea before bed.",
                "Practice **box breathing** (4-4-4-4) for 5 minutes daily.",
                "Massage your feet with warm sesame oil before sleeping."
            ],
            color: "#8b5cf6" // Violet
        };
    }

    // --- DIGESTION Suggestion ---
    if (issue && (issue.includes('Gas') || issue.includes('Indigestion') || issue.includes('Bloating'))) {
        return {
            title: "Digestive Balance (Agni)",
            summary: "Your digestive fire (Agni) seems irregular. This often points to a Vata-Kapha imbalance.",
            tips: [
                "Drink **warm ginger water** in the morning.",
                "Avoid cold or raw foods for a few days.",
                "Try **Triphala Churna** at night for gentle detox."
            ],
            color: "#f59e0b" // Amber
        };
    }

    // --- SLEEP Suggestion ---
    if (issue && (issue.includes('Sleep') || issue.includes('Insomnia'))) {
        return {
            title: "Deep Sleep Support",
            summary: "Lack of deep sleep increases Vata, leading to a scattered mind and fatigue.",
            tips: [
                "Establish a strict **10 PM bedtime**.",
                "Drink **warm milk with turmeric & nutmeg**.",
                "Avoid screens 1 hour before sleep."
            ],
            color: "#3b82f6" // Blue
        };
    }

    // --- PAIN Suggestion ---
    if (issue && (issue.includes('Joint') || issue.includes('Back') || issue.includes('Pain'))) {
        return {
            title: "Joint & Pain Relief",
            summary: "Joint pain is often due to accumulation of toxins (Ama) or excess Vata (air) in joints.",
            tips: [
                "Apply **Mahanarayan Oil** on affected areas.",
                "Use dry heat (hot water bag) instead of ice.",
                "Include **Turmeric** and **Garlic** in your diet."
            ],
            color: "#ef4444" // Red
        };
    }

    // --- DEFAULT / GENERAL Suggestion ---
    return {
        title: "Ayurvedic Wellness",
        summary: "You are doing well, but maintaining balance is key to preventing future issues.",
        tips: [
            "Follow a **Dinacharya** (daily routine) waking up before 6 AM.",
            "Eat only when hungry and drink warm water.",
            "Practice 10 mins of **Surya Namaskar** daily."
        ],
        color: "#10b981" // Emerald
    };
};
