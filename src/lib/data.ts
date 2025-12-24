
// ... (Previous Health Conditions and Herbs data remains the same)
export const healthConditions = [
    {
        id: '1',
        name: 'Diabetes (Madhumeha)',
        slug: 'diabetes',
        image: '/images/conditions/diabetes.jpg',
        description: 'Manage blood sugar levels naturally with bitter herbs and lifestyle changes.',
        details: {
            overview: 'In Ayurveda, Diabetes is known as Madhumeha (Sweet Urine). It is classified as a Kapha disorder caused by poor digestion and accumulation of toxins.',
            symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Blurred vision'],
            causes: ['Sedentary lifestyle', 'Excessive sugar intake', 'Stress', 'Genetic factors'],
            recommendations: ['Avoid sweets and dairy', 'Exercise daily (Walking/Yoga)', 'Drink warm water']
        },
        recommendedHerbs: ['turmeric', 'neem', 'giloy']
    },
    { id: '2', name: 'Digestion (Agni)', slug: 'digestion', image: '/images/conditions/digestion.jpg', description: 'Resolve bloating, acidity, and constipation by restoring digestive fire.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '3', name: 'Stress & Anxiety', slug: 'stress', image: '/images/conditions/stress.jpg', description: 'Calm the mind.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '4', name: 'Skin Care', slug: 'skin-care', image: '/images/conditions/skin-care.jpg', description: 'Purify blood.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '5', name: 'Joint Pain', slug: 'joint-pain', image: '/images/conditions/joint-pain.jpg', description: 'Alleviate inflammation.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '6', name: 'Immunity', slug: 'immunity', image: '/images/conditions/immunity.jpg', description: 'Build deep resilience.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '7', name: 'Hair Care', slug: 'hair-care', image: '/images/conditions/hair-care.jpg', description: 'Prevent hair fall.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '8', name: 'Heart Health', slug: 'heart-health', image: '/images/conditions/heart-health.jpg', description: 'Support cardiovascular function.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '9', name: 'Respiratory', slug: 'respiratory', image: '/images/conditions/respiratory.jpg', description: 'Clear congestion.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
    { id: '10', name: 'Sexual Health', slug: 'sexual-health', image: '/images/conditions/sexual-health.jpg', description: 'Boost vitality.', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: [] },
];

export const popularHerbs = [
    {
        id: '1',
        name: 'Ashwagandha',
        slug: 'ashwagandha',
        benefit: 'Stress Relief & Energy',
        dosha: 'Vata-Kapha',
        description: 'The "King of Herbs" known for adaptogenic properties. Helps body resist stress and boosts energy.',
        image: '/images/ashwagandha.png',
        details: {
            overview: 'Ashwagandha is one of the most important herbs in Ayurveda, used for thousands of years as a Rasayana for its wide-ranging health benefits.',
            benefits: ['Reduces cortisol levels', 'Boosts brain function', 'Increases muscle mass', 'Lowers blood sugar'],
            usage: 'Typically consumed as a powder (churna) mixed with warm milk or honey at night.',
            precautions: 'Avoid during pregnancy. High doses may cause digestive upset.'
        }
    },
    // ... (Keep other herbs as is)
    { id: '2', name: 'Tulsi', slug: 'tulsi', benefit: 'Immunity', dosha: 'Vata-Kapha', description: 'Holy Basil.', image: '/images/tulsi.png', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '3', name: 'Triphala', slug: 'triphala', benefit: 'Digestion', dosha: 'Tridosha', description: 'Cleansing blend.', image: '/images/triphala.png', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '4', name: 'Brahmi', slug: 'brahmi', benefit: 'Memory', dosha: 'Pitta-Kapha', description: 'Cognitive booster.', image: '/images/brahmi.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '5', name: 'Turmeric', slug: 'turmeric', benefit: 'Inflammation', dosha: 'Tridosha', description: 'Anti-inflammatory.', image: '/images/turmeric.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '6', name: 'Giloy', slug: 'giloy', benefit: 'Immunity', dosha: 'Tridosha', description: 'Immunity booster.', image: '/images/giloy.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '7', name: 'Shatavari', slug: 'shatavari', benefit: 'Womens Health', dosha: 'Vata-Pitta', description: 'Hormonal balance.', image: '/images/shatavari.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '8', name: 'Amla', slug: 'amla', benefit: 'Vitamin C', dosha: 'Tridosha', description: 'Antioxidant.', image: '/images/amla.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '9', name: 'Neem', slug: 'neem', benefit: 'Skin', dosha: 'Pitta-Kapha', description: 'Blood purifier.', image: '/images/neem.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
    { id: '10', name: 'Arjuna', slug: 'arjuna', benefit: 'Heart', dosha: 'Pitta-Kapha', description: 'Heart tonic.', image: '/images/arjuna.jpg', details: { overview: '', benefits: [], usage: '', precautions: '' } },
];

export const medicines = [
    {
        id: '1',
        name: 'Chyawanprash',
        slug: 'chyawanprash',
        category: 'Rasayana',
        image: '/images/product-generic.png',
        description: 'Immunity boosting jam made with Amla and 40+ herbs.',
        benefits: ['Boosts Immunity', 'Anti-aging', 'Improves Digestion'],
        details: {
            ingredients: ['Amla', 'Ghee', 'Honey', 'Ashwagandha', 'Pippali'],
            dosage: '1-2 teaspoons daily, preferably in the morning with warm milk.',
            indication: 'General debility, respiratory ailments, and low immunity.',
            safety: 'Safe for all ages. Diabetics should choose sugar-free versions.'
        }
    },
    {
        id: '2',
        name: 'Ashokarishta',
        slug: 'ashokarishta',
        category: 'Arishta',
        image: '/images/product-generic.png',
        description: 'Liquid tonic for women’s health and hormonal balance.',
        benefits: ['Menstrual Health', 'Reduces Pain', 'Hormonal Balance'],
        details: {
            ingredients: ['Ashoka Bark', 'Jaggery', 'Dhataki', 'Musta'],
            dosage: '15-30ml with equal amount of water after meals.',
            indication: 'Menorrhagia, dysmenorrhea, and other uterine disorders.',
            safety: 'Contain self-generated alcohol. Avoid in acidity.'
        }
    },
    {
        id: '3',
        name: 'Triphala Churna',
        slug: 'triphala-churna',
        category: 'Churna',
        image: '/images/product-generic.png',
        description: 'Powder blend for digestive health and detoxification.',
        benefits: ['Relieves Constipation', 'Eye Health', 'Detox'],
        details: {
            ingredients: ['Amalaki', 'Bibhitaki', 'Haritaki'],
            dosage: '1 teaspoon with warm water at bedtime.',
            indication: 'Constipation, indigestion, eye disorders.',
            safety: 'Safe for long-term use. Avoid in diarrhea.'
        }
    },
    {
        id: '4',
        name: 'Kanchanar Guggulu',
        slug: 'kanchanar-guggulu',
        category: 'Guggulu',
        image: '/images/product-generic.png',
        description: 'Tablet for thyroid health and reducing cysts/growths.',
        benefits: ['Thyroid Support', 'Lymphatic Detox', 'PCOS'],
        details: {
            ingredients: ['Kanchanar Bark', 'Guggulu', 'Triphala', 'Trikatu'],
            dosage: '2 tablets twice a day with warm water.',
            indication: 'Hypothyroidism, PCOS, lipoma, lymphadenitis.',
            safety: 'Consult a doctor during pregnancy.'
        }
    },
    { id: '5', name: 'Sitopaladi Churna', slug: 'sitopaladi-churna', category: 'Churna', image: '/images/product-generic.png', description: 'Trusted powder for cough, cold, and respiratory issues.', benefits: ['Relieves Cough', 'Clears Chest', 'Fever Support'], details: { ingredients: ['Mishri', 'Vanshalochan', 'Pippali', 'Cardamom', 'Cinnamon'], dosage: '1/2 to 1 teaspoon with honey.', indication: 'Cough, cold, fever, burning sensation.', safety: 'Safe for children.' } },
    { id: '6', name: 'Brahmi Ghrita', slug: 'brahmi-ghrita', category: 'Ghrita', image: '/images/product-generic.png', description: 'Medicated ghee for memory and mental clarity.', benefits: ['Memory Boost', 'Mental Calm', 'Sleep Aid'], details: { ingredients: ['Ghee', 'Brahmi', 'Shankhpushpi', 'Vacha'], dosage: '1 teaspoon with warm milk on empty stomach.', indication: 'Memory loss, anxiety, insomnia.', safety: 'Monitor cholesterol if taken in excess.' } },
];

export const products = [
    {
        id: '1',
        name: 'Organic Ashwagandha Powder',
        slug: 'organic-ashwagandha',
        brand: 'Organic India',
        price: '$20',
        rating: 4.8,
        image: '/images/product-generic.png',
        category: 'Supplements',
        details: {
            description: '100% Certified Organic Ashwagandha Root Powder. A natural adaptogen to help manage stress and support energy levels.',
            reviews: [
                { user: 'Sarah M.', comment: 'Great quality, really helps me sleep.', rating: 5 },
                { user: 'John D.', comment: 'Good packaging, fast delivery.', rating: 4 }
            ]
        }
    },
    {
        id: '2',
        name: 'Kumkumadi Tailam',
        slug: 'kumkumadi-tailam',
        brand: 'Kama Ayurveda',
        price: '$55',
        rating: 4.9,
        image: '/images/product-generic.png',
        category: 'Skincare',
        details: {
            description: 'Miraculous beauty fluid. An Ayurvedic night serum made with rare Saffron to brighten skin and reduce pigmentation.',
            reviews: [
                { user: 'Priya K.', comment: 'Expensive but worth every penny. My skin glows!', rating: 5 },
                { user: 'Emily R.', comment: 'Smells amazing and feels luxurious.', rating: 5 }
            ]
        }
    },
    { id: '3', name: 'Triphala Juice', slug: 'triphala-juice', brand: 'Kapiva', price: '$15', rating: 4.5, image: '/images/product-generic.png', category: 'Juices', details: { description: 'Cold-pressed Triphala juice for digestive health.', reviews: [] } },
    { id: '4', name: 'Chyawanprash', slug: 'products-chyawanprash', brand: 'Dabur', price: '$12', rating: 4.7, image: '/images/product-generic.png', category: 'Supplements', details: { description: 'Traditional recipe for daily immunity.', reviews: [] } },
    { id: '5', name: 'Kesini Hair Oil', slug: 'kesini-hair-oil', brand: 'Kottakkal', price: '$18', rating: 4.6, image: '/images/product-generic.png', category: 'Hair Care', details: { description: 'Herbal oil for hair fall control.', reviews: [] } },
    { id: '6', name: 'Ayurvedic Toothpaste', slug: 'ayurveda-toothpaste', brand: 'Himalaya', price: '$5', rating: 4.4, image: '/images/product-generic.png', category: 'Personal Care', details: { description: 'Fluoride-free herbal toothpaste.', reviews: [] } },
];

export const doctors = [
    {
        id: '1',
        name: 'Dr. Rajesh Sharma',
        specialization: 'Panchakarma Specialist',
        experience: '15+ Years',
        image: '/images/doctor-male.png',
        location: 'New Delhi, India',
        languages: ['English', 'Hindi'],
        about: 'Dr. Sharma is a renowned expert in Panchakarma therapies with over a decade of clinical experience in treating chronic lifestyle disorders.'
    },
    {
        id: '2',
        name: 'Dr. Anjali Gupta',
        specialization: 'Ayurvedic Gynecologist',
        experience: '12+ Years',
        image: '/images/doctor-female.png',
        location: 'Mumbai, India',
        languages: ['English', 'Marathi', 'Hindi'],
        about: 'Specializing in women’s health, Dr. Gupta combines modern diagnostics with traditional Ayurvedic treatments for holistic care.'
    },
    {
        id: '3',
        name: 'Dr. V. K. Nair',
        specialization: 'General Medicine (Kayachikitsa)',
        experience: '25+ Years',
        image: '/images/doctor-male.png',
        location: 'Kerala, India',
        languages: ['English', 'Malayalam'],
        about: 'Coming from a lineage of Vaidyas, Dr. Nair is an expert in authentic Kerala Ayurveda and neuromuscular disorders.'
    }
];
