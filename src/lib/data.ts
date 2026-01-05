
export const healthConditions = [
    {
        id: '1',
        name: 'Diabetes (Madhumeha)',
        name_hi: 'मधुमेह (Diabetes)',
        slug: 'diabetes',
        image: '/images/conditions/diabetes.jpg',
        description: 'Manage blood sugar levels naturally with bitter herbs and lifestyle changes.',
        description_hi: 'कड़वी जड़ी-बूटियों और जीवन शैली में बदलाव के साथ रक्त शर्करा के स्तर को प्राकृतिक रूप से प्रबंधित करें।',
        details: {
            overview: 'In Ayurveda, Diabetes is known as Madhumeha (Sweet Urine). It is classified as a Kapha disorder caused by poor digestion and accumulation of toxins.',
            ayurvedic_explanation: 'Madhumeha is one of the 20 types of Prameha (Urinary disorders). It originates from an imbalance in Kapha dosha due to excessive consumption of sweet, heavy, and cold foods, leading to "Agni Mandya" (weak digestion) and "Ama" (toxin) formation. This blocks the channels (Strotas) of the pancreas.',
            symptoms: ['Excessive thirst (Polydipsia)', 'Frequent urination (Polyuria)', 'Fatigue & Lethargy', 'Blurred vision', 'Slow healing of wounds'],
            causes: ['Sedentary lifestyle (Asyasukbam)', 'Excessive sugar & carb intake', 'Stress & Anxiety', 'Genetic factors (Sahaja)', 'Sleeping after meals'],
            recommendations: ['Avoid sweets and dairy', 'Exercise daily (Walking/Yoga)', 'Drink warm water'],
            diet_lifestyle: {
                diet: ['Eat bitter vegetables (Karen, Methi, Neem).', 'Use Barley (Jau) and Ragi instead of Wheat.', 'Include spices like Turmeric, Cinnamon, Fenugreek.', 'Avoid heavy fruits like Mango, Banana, Custard Apple.'],
                lifestyle: ['Walk for at least 30 minutes daily.', 'Practice Yoga: Mandukasana, Surya Namaskar.', 'Avoid sleeping during the day (Diwaswapna).', 'Dry powder massage (Udvartana) to reduce Kapha.']
            },
            dos_and_donts: {
                dos: ['Drink copper-charged water in morning.', 'Monitor blood sugar regularly.', 'Manage stress with Meditation.'],
                donts: ['Do not skip meals or fast for long periods.', 'Avoid alcohol and smoking.', 'Do not walk barefoot to prevent injury.']
            },
            medicines: ['Chandraprabha Vati', 'Vasant Kusumakar Ras', 'Triphala Churna', 'Nisha Amalaki']
        },
        details_hi: {
            overview: 'आयुर्वेद में मधुमेह को मधुमेहा (मीठा मूत्र) के नाम से जाना जाता है। इसे कफ विकार के रूप में वर्गीकृत किया गया है जो खराब पाचन और विषाक्त पदार्थों के संचय के कारण होता है।',
            ayurvedic_explanation: 'मधुमेह 20 प्रकार के प्रमेह (मूत्र संबंधी विकारों) में से एक है। यह मीठे, भारी और ठंडे खाद्य पदार्थों के अत्यधिक सेवन के कारण कफ दोष में असंतुलन से उत्पन्न होता है, जिससे "अग्नि मांद्य" (कमजोर पाचन) और "आम" (विषाक्त पदार्थ) का निर्माण होता है। यह अग्न्याशय के चैनलों (स्रोतों) को अवरुद्ध करता है।',
            symptoms: ['अत्यधिक प्यास (Polydipsia)', 'बार-बार पेशाब आना (Polyuria)', 'थकान और सुस्ती', 'धुंधली दृष्टि', 'घावों का धीमा भरना'],
            causes: ['बैठने वाली जीवन शैली (आस्यासुखम्)', 'अत्यधिक चीनी और कार्ब का सेवन', 'तनाव और चिंता', 'आनुवंशिक कारक (सहज)', 'भोजन के बाद सोना'],
            recommendations: ['मिठाई और डेयरी से बचें', 'रोजाना व्यायाम करें (चलना/योग)', 'गर्म पानी पिएं'],
            diet_lifestyle: {
                diet: ['कड़वी सब्जियां (करेला, मेथी, नीम) खाएं।', 'गेहूं की जगह जौ और रागी का प्रयोग करें।', 'हल्दी, दालचीनी, मेथी जैसे मसालों को शामिल करें।', 'आम, केला, शरीफा जैसे भारी फलों से बचें।'],
                lifestyle: ['रोजाना कम से कम 30 मिनट टहलें।', 'योग करें: मंडुकासन, सूर्य नमस्कार।', 'दिन में सोने से बचें (दिवास्वप्न)।', 'कफ कम करने के लिए सूखे पाउडर की मालिश (उद्वर्तन) करें।']
            },
            dos_and_donts: {
                dos: ['सुबह तांबे के बर्तन का पानी पिएं।', 'नियमित रूप से रक्त शर्करा की जाँच करें।', 'ध्यान (Meditation) से तनाव प्रबंधित करें।'],
                donts: ['भोजन न छोड़ें और न ही लंबे समय तक उपवास करें।', 'शराब और धूम्रपान से बचें।', 'चोट से बचने के लिए नंगे पैर न चलें।']
            },
            medicines: ['चंद्रप्रभा वटी', 'वसंत कुसुमाकर रस', 'त्रिफला चूर्ण', 'निशा आमलकी']
        },
        recommendedHerbs: ['turmeric', 'neem', 'giloy', 'gudmar', 'jamun']
    },
    {
        id: '2',
        name: 'Digestion (Agni)',
        name_hi: 'पाचन (Digestion)',
        slug: 'digestion',
        image: '/images/conditions/digestion.jpg',
        description: 'Resolve bloating, acidity, and constipation by restoring digestive fire.',
        description_hi: 'पाचन अग्नि को बहाल करके सूजन, एसिडिटी और कब्ज का समाधान करें।',
        details: { overview: '', symptoms: [], causes: [], recommendations: [] },
        recommendedHerbs: ['triphala', 'ginger', 'ajwain']
    },
    {
        id: '3',
        name: 'Stress & Anxiety',
        name_hi: 'तनाव और चिंता',
        slug: 'stress',
        image: '/images/conditions/stress.jpg',
        description: 'Calm the mind.',
        description_hi: 'मन को शांत करें।',
        details: { overview: '', symptoms: [], causes: [], recommendations: [] },
        recommendedHerbs: ['ashwagandha', 'brahmi', 'jatamansi']
    },
    { id: '4', name: 'Skin Care', name_hi: 'त्वचा की देखभाल', slug: 'skin-care', image: '/images/conditions/skin-care.jpg', description: 'Purify blood.', description_hi: 'रक्त शुद्ध करें।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['neem', 'manjistha', 'turmeric'] },
    { id: '5', name: 'Joint Pain', name_hi: 'जोड़ो का दर्द', slug: 'joint-pain', image: '/images/conditions/joint-pain.jpg', description: 'Alleviate inflammation.', description_hi: 'सूजन कम करें।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['shallaki', 'guggul', 'ginger'] },
    { id: '6', name: 'Immunity', name_hi: 'रोग प्रतिरोधक क्षमता', slug: 'immunity', image: '/images/conditions/immunity.jpg', description: 'Build deep resilience.', description_hi: 'गहरी लचक बनाएं।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['amla', 'giloy', 'tulsi'] },
    { id: '7', name: 'Hair Care', name_hi: 'बालों की देखभाल', slug: 'hair-care', image: '/images/conditions/hair-care.jpg', description: 'Prevent hair fall.', description_hi: 'बालों का झड़ना रोकें।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['bhringraj', 'amla', 'shikakai'] },
    { id: '8', name: 'Heart Health', name_hi: 'हृदय स्वास्थ', slug: 'heart-health', image: '/images/conditions/heart-health.jpg', description: 'Support cardiovascular function.', description_hi: 'हृदय संबंधी कार्यों का समर्थन करें।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['arjuna', 'garlic'] },
    { id: '9', name: 'Respiratory', name_hi: 'श्वसन क्रिया', slug: 'respiratory', image: '/images/conditions/respiratory.jpg', description: 'Clear congestion.', description_hi: 'जकड़न साफ़ करें।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['tulsi', 'vasaka', 'mulethi'] },
    { id: '10', name: 'Sexual Health', name_hi: 'यौन स्वास्थ्य', slug: 'sexual-health', image: '/images/conditions/sexual-health.jpg', description: 'Boost vitality.', description_hi: 'जीवन शक्ति बढ़ाएं।', details: { overview: '', symptoms: [], causes: [], recommendations: [] }, recommendedHerbs: ['shilajit', 'safed-musli', 'ashwagandha'] },
];

export const popularHerbs = [
    {
        id: '1',
        name: 'Ashwagandha',
        name_hi: 'अश्वगंधा',
        slug: 'ashwagandha',
        benefit: 'Stress Relief & Energy',
        benefit_hi: 'तनाव राहत और ऊर्जा',
        dosha: 'Vata-Kapha',
        description: 'The "King of Herbs" known for adaptogenic properties. Helps body resist stress and boosts energy.',
        description_hi: '"जड़ी-बूटियों का राजा" जो अपने एडाप्टोजेनिक गुणों के लिए जाना जाता है। शरीर को तनाव से लड़ने और ऊर्जा बढ़ाने में मदद करता है।',
        image: '/images/ashwagandha.png',
        details: {
            overview: 'Ashwagandha is one of the most important herbs in Ayurveda, used for thousands of years as a Rasayana for its wide-ranging health benefits.',
            benefits: ['Reduces cortisol levels', 'Boosts brain function', 'Increases muscle mass', 'Lowers blood sugar'],
            usage: 'Typically consumed as a powder (churna) mixed with warm milk or honey at night.',
            precautions: 'Avoid during pregnancy. High doses may cause digestive upset.'
        },
        details_hi: {
            overview: 'अश्वगंधा आयुर्वेद की सबसे महत्वपूर्ण जड़ी-बूटियों में से एक है, जिसका उपयोग हजारों वर्षों से इसके व्यापक स्वास्थ्य लाभों के लिए रसायन के रूप में किया जाता है।',
            benefits: ['तनाव (कोर्टिसोल) के स्तर को कम करता है', 'मस्तिष्क की कार्यक्षमता को बढ़ाता है', 'मांसपेशियों को बढ़ाता है', 'रक्त शर्करा को कम करता है'],
            usage: 'आमतौर पर रात में गर्म दूध या शहद के साथ पाउडर (चूर्ण) के रूप में सेवन किया जाता है।',
            precautions: 'गर्भावस्था के दौरान बचें। उच्च खुराक से पाचन संबंधी गड़बड़ी हो सकती है।'
        }
    },
    {
        id: '2',
        name: 'Tulsi',
        name_hi: 'तुलसी',
        slug: 'tulsi',
        benefit: 'Immunity',
        benefit_hi: 'रोग प्रतिरोधक क्षमता',
        dosha: 'Vata-Kapha',
        description: 'Holy Basil, known for its divine healing properties and respiratory support.',
        description_hi: 'पवित्र तुलसी, अपने दिव्य उपचार गुणों और श्वसन समर्थन के लिए जानी जाती है।',
        image: '/images/tulsi.png',
        details: {
            overview: 'Tulsi is revered as "The Queen of Herbs" and is an adaptogen that helps the body cope with stress and infections. In Sanskrit, Tulsi means "The Incomparable One". It is not merely a plant but revered as an earthly manifestation of Goddess Lakshmi.',
            benefits: [
                'Boosts immunity & fights infections (Increases T-helper cells)',
                'Relieves cough, cold & respiratory issues (Liquefies phlegm)',
                'Reduces stress & anxiety (Lowers Cortisol levels)',
                'Promotes heart health (Lowers BP & Cholesterol)',
                'Improves digestion & gut health (Agni Deepana)',
                'Enhances skin glow & treats acne (Blood Purifier)',
                'Oral Health: Fights bacteria & bad breath'
            ],
            usage: 'Chew fresh leaves, drink as tea (decoction), or as juice (swaras).',
            precautions: 'May lower blood sugar (monitor if diabetic). Avoid high medicinal doses 2 weeks before surgery (mild blood thinner). Excess raw chewing may affect tooth enamel due to mercury content.',
            scientific_name: 'Ocimum tenuiflorum (formerly Ocimum sanctum)',
            family: 'Lamiaceae (Mint family)',
            chemical_compounds: [
                { name: 'Eugenol', effect: 'Analgesic, anti-inflammatory, anti-bacterial' },
                { name: 'Ursolic Acid', effect: 'Anti-tumor, skin-healing, collagen protection' },
                { name: 'Rosmarinic Acid', effect: 'Potent antioxidant, fights free radicals' },
                { name: 'Caryophyllene', effect: 'Reduces anxiety & stress (interacts with endocannabinoid system)' },
                { name: 'Ocimumosides A & B', effect: 'Anti-stress (adaptogenic) activity' }
            ],
            spiritual_significance: 'Tulsi symbolizes purity and devotion. It is believed to be the earthly manifestation of Goddess Lakshmi. Every traditional Indian home has a "Tulsi Vrindavan" to protect the home from negative energy (Vastu Dosh). The "Tulsi Vivah" festival marks the ceremonial marriage of Tulsi to Lord Vishnu.',
            mythology: 'According to legend, Tulsi was originally Vrinda, a devotee of Vishnu. Due to a curse, she became a plant, but Vishnu promised to always be with her in the form of the Shaligram stone. Thus, Vishnu worship is incomplete without Tulsi leaves.',
            varieties: [
                { name: 'Rama Tulsi', description: 'Green leaves. Cooling taste. Most common for immunity.', image: '/images/herbs/rama-tulsi.jpg' },
                { name: 'Krishna Tulsi', description: 'Purple leaves. Peppery, crisp taste. Potent for respiratory & skin issues.', image: '/images/herbs/krishna-tulsi.jpg' },
                { name: 'Vana Tulsi', description: 'Wild leaf variety. Lemony aroma. Native to Himalayas.', image: '/images/herbs/vana-tulsi.jpg' }
            ],
            preparation_methods: [
                { title: 'Tulsi Tea (Daily Immunity)', steps: ['Boil 1 cup water.', 'Add 5-7 fresh Tulsi leaves.', 'Steep for 5-7 mins.', 'Add honey/lemon. Drink daily.'] },
                { title: 'Tulsi Kadha (Cold/Flu)', steps: ['Boil 2 cups water with ginger, peppercorns, cinnamon.', 'Add 10-15 Tulsi leaves.', 'Simmer till reduced to half.', 'Add jaggery, strain & drink warm.'] },
                { title: 'Tulsi Swaras (Juice)', steps: ['Crush handful of clean leaves.', 'Extract fresh juice.', 'Mix 1 tsp juice with 1 tsp honey.', 'Great for removing phlegm.'] },
                { title: 'Face Steam (Skin/Sinus)', steps: ['Add handful of leaves to hot steaming water.', 'Lean over with towel for 5 mins.', 'Clears pores & relieves congestion.'] }
            ],
            faqs: [
                { question: 'Can I drink Tulsi tea with milk?', answer: 'Traditionally, Tulsi is best taken with water (decoction). Mixing with milk is sometimes avoided in Ayurveda for respiratory issues, but Tulsi-infused milk is used for calming nerves.' },
                { question: 'When is the best time to take Tulsi?', answer: 'Morning empty stomach for immunity, or evening for stress relief.' }
            ]
        },
        details_hi: {
            overview: 'तुलसी को "जड़ी-बूटियों की रानी" (The Queen of Herbs) माना जाता है और यह एक एडाप्टोजेन है जो शरीर को तनाव और संक्रमण से लड़ने में मदद करता है। संस्कृत में तुलसी का अर्थ है "जिसकी तुलना न की जा सके"। यह केवल एक पौधा नहीं है, बल्कि देवी लक्ष्मी का पार्थिव रूप माना जाता है।',
            benefits: [
                'इम्युनिटी बढ़ाती है और संक्रमण, वायरल से लड़ती है',
                'खांसी, सर्दी और सांस की समस्याओं से राहत (कफ नाशक)',
                'तनाव और चिंता कम करती है (कोर्टिसोल कम करती है)',
                'हृदय स्वास्थ्य को बढ़ावा और बीपी/कोलेस्ट्रॉल कम करना',
                'पाचन और पेट के स्वास्थ्य में सुधार (अग्नि दीपन)',
                'त्वचा की चमक बढ़ाना और मुँहासे का इलाज (रक्त शोधक)',
                'मुख स्वास्थ्य: बैक्टीरिया और सांस की दुर्गंध से लड़ती है'
            ],
            usage: 'ताजी पत्तियां चबाएं, अदरक/शहद के साथ चाय (काढ़ा) पिएं, या रस (स्वरस) लें।',
            precautions: 'रक्त शर्करा कम कर सकती है (मधुमेह में निगरानी रखें)। सर्जरी से 2 सप्ताह पहले उच्च खुराक से बचें (हल्का रक्त पतला करने वाला)। अत्यधिक कच्चा चबाने से दांतों की परत पर असर पड़ सकता है।',
            scientific_name: 'ओसिमम टेनुइफ्लोरम (पूर्व में ओसिमम सैंक्टम)',
            family: 'लैमिएसी (पुदीना परिवार)',
            chemical_compounds: [
                { name: 'यूजेनॉल (Eugenol)', effect: 'दर्द निवारक, सूजन रोधी, जीवाणुरोधी' },
                { name: 'उर्सोलिक एसिड (Ursolic Acid)', effect: 'ट्यूमर विरोधी, त्वचा उपचार, कोलेजन सुरक्षा' },
                { name: 'रोज़मारिनिक एसिड (Rosmarinic Acid)', effect: 'शक्तिशाली एंटीऑक्सिडेंट, मुक्त कणों से लड़ता है' },
                { name: 'कैरीओफाइलीन (Caryophyllene)', effect: 'चिंता और तनाव कम करता है' },
                { name: 'ओसिमुमोसाइड्स', effect: 'तनाव रोधी गतिविधि' }
            ],
            spiritual_significance: 'तुलसी पवित्रता और भक्ति का प्रतीक है। यह देवी लक्ष्मी का रूप मानी जाती है। हर पारंपरिक भारतीय घर में नकारात्मक ऊर्जा (वास्तु दोष) से बचाने के लिए "तुलसी वृंदावन" होता है। "तुलसी विवाह" भगवान विष्णु के साथ तुलसी के औपचारिक विवाह का प्रतीक है।',
            mythology: 'किंवदंती के अनुसार, तुलसी मूल रूप से वृंदा थीं, जो विष्णु की भक्त थीं। एक श्राप के कारण वे एक पौधा बन गईं, लेकिन विष्णु ने शालिग्राम पत्थर के रूप में हमेशा उनके साथ रहने का वादा किया। इस प्रकार, तुलसी दल के बिना विष्णु पूजा अधूरी है।',
            varieties: [
                { name: 'राम तुलसी', description: 'हरी पत्तियां। ठंडी तासीर। इम्युनिटी के लिए सबसे आम।', image: '/images/herbs/rama-tulsi.jpg' },
                { name: 'कृष्ण तुलसी', description: 'बैंगनी (Purple) पत्तियां। तीखा स्वाद। श्वसन और त्वचा के लिए शक्तिशाली।', image: '/images/herbs/krishna-tulsi.jpg' },
                { name: 'वन तुलसी', description: 'जंगली किस्म। नींबू जैसी सुगंध। हिमालय और मैदानों में पाई जाती है।', image: '/images/herbs/vana-tulsi.jpg' }
            ],
            preparation_methods: [
                { title: 'तुलसी चाय (दैनिक इम्युनिटी)', steps: ['1 कप पानी उबालें।', '5-7 ताजी तुलसी की पत्तियां डालें।', '5-7 मिनट तक ढक कर रखें।', 'शहद/नींबू डालें। रोजाना पिएं।'] },
                { title: 'तुलसी काढ़ा (सर्दी/जुकाम)', steps: ['2 कप पानी में अदरक, काली मिर्च, दालचीनी उबालें।', '10-15 तुलसी की पत्तियां डालें।', 'आधा होने तक उबालें।', 'गुड़ डालें, छानें और गर्म पिएं।'] },
                { title: 'तुलसी स्वरस (ताजा रस)', steps: ['मुट्ठी भर साफ पत्तियों को पीस लें।', 'ताजा रस निचोड़ें।', '1 चम्मच रस को 1 चम्मच शहद के साथ मिलाएं।', 'कफ निकालने के लिए उत्तम।'] },
                { title: 'चेहरे की भाप (त्वचा/ साइनस)', steps: ['गर्म पानी में मुट्ठी भर पत्तियां डालें।', 'तौलिये से ढककर 5 मिनट तक भाप लें।', 'रोमछिद्र साफ करता है और जकड़न दूर करता है।'] }
            ],
            faqs: [
                { question: 'क्या मैं दूध के साथ तुलसी चाय पी सकता हूँ?', answer: 'परंपरागत रूप से, तुलसी को पानी (काढ़ा) के साथ लेना सबसे अच्छा है। श्वसन समस्याओं के लिए दूध के साथ मिलाने से कभी-कभी बचा जाता है, लेकिन नसों को शांत करने के लिए तुलसी युक्त दूध का उपयोग किया जाता है।' },
                { question: 'तुलसी लेने का सबसे अच्छा समय कब है?', answer: 'इम्युनिटी के लिए सुबह खाली पेट, या तनाव से राहत के लिए शाम को।' }
            ]
        }
    },
    {
        id: '3',
        name: 'Triphala',
        name_hi: 'त्रिफला',
        slug: 'triphala',
        benefit: 'Digestion',
        benefit_hi: 'पाचन',
        dosha: 'Tridosha',
        description: 'A balancing blend of three fruits: Amla, Bibhitaki, and Haritaki.',
        description_hi: 'तीन फलों का संतुलित मिश्रण: आंवला, बिभीतकी और हरितकी।',
        image: '/images/triphala.png',
        details: {
            overview: 'Triphala is a polyherbal medicine consisting of three fruits. It is gentle, non-habit forming, and rejuvenates the entire digestive tract.',
            benefits: ['Natural laxative', 'Detoxifies the body', 'improves eyesight', 'Anti-oxidant rich'],
            usage: 'Take 1 teaspoon with warm water at bedtime for cleansing.',
            precautions: 'Avoid in cases of diarrhea and pregnancy.'
        },
        details_hi: {
            overview: 'त्रिफला तीन फलों से बनी एक बहु-औषधीय दवा है। यह सौम्य है, आदत नहीं डालता है, और पूरे पाचन तंत्र को फिर से जीवंत करता है।',
            benefits: ['प्राकृतिक रेचक (Laxative)', 'शरीर को डिटॉक्स करता है', 'आंखों की रोशनी बढ़ाता है', 'एंटी-ऑक्सीडेंट से भरपूर'],
            usage: 'सफाई के लिए सोते समय गर्म पानी के साथ 1 चम्मच लें।',
            precautions: 'दस्त और गर्भावस्था के मामलों में बचें।'
        }
    },
    {
        id: '4',
        name: 'Brahmi',
        name_hi: 'ब्रह्मी',
        slug: 'brahmi',
        benefit: 'Memory',
        benefit_hi: 'याददाश्त',
        dosha: 'Pitta-Kapha',
        description: 'A powerful brain tonic that enhances memory, concentration, and calm.',
        description_hi: 'एक शक्तिशाली मस्तिष्क टॉनिक जो याददाश्त, एकाग्रता और शांति को बढ़ाता है।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Brahmi is a creeping herb traditionally used to enhance cognitive function and calm the nervous system.',
            benefits: ['Improves memory', 'Reduces anxiety', 'Promotes hair growth', 'Treats insomnia'],
            usage: 'Consumed as juice, powder, or medicated ghee (Brahmi Ghrita).',
            precautions: 'May slow heart rate. Consult if you have heart conditions.'
        },
        details_hi: {
            overview: 'ब्रह्मी एक रेंगने वाली जड़ी बूटी है जिसका उपयोग पारंपरिक रूप से संज्ञानात्मक कार्य को बढ़ाने और तंत्रिका तंत्र को शांत करने के लिए किया जाता है।',
            benefits: ['याददाश्त में सुधार करता है', 'चिंता कम करता है', 'बालों के विकास को बढ़ावा देता है', 'अनिद्रा का इलाज करता है'],
            usage: 'रस, पाउडर, या औषधीय घी (ब्रह्मी घृत) के रूप में सेवन किया जाता है।',
            precautions: 'हृदय गति को धीमा कर सकता है। हृदय रोग होने पर परामर्श करें।'
        }
    },
    {
        id: '5',
        name: 'Turmeric (Haldi)',
        name_hi: 'हल्दी',
        slug: 'turmeric',
        benefit: 'Inflammation',
        benefit_hi: 'सूजन',
        dosha: 'Tridosha',
        description: 'The golden spice known for its potent anti-inflammatory and antiseptic properties.',
        description_hi: 'सुनहरा मसाला जो अपने शक्तिशाली विरोधी भड़काऊ और एंटीसेप्टिक गुणों के लिए जाना जाता है।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Turmeric owes its healing power to Curcumin. It is a staple in every Indian household for injury and immunity.',
            benefits: ['Reduces joint pain', 'Heals wounds', 'Purifies blood', 'Good for skin glow'],
            usage: 'Mix in warm milk (Golden Milk) or use in cooking.',
            precautions: 'High doses may thin the blood. Caution before surgery.'
        },
        details_hi: {
            overview: 'हल्दी की उपचार शक्ति करक्यूमिन के कारण है। यह चोट और प्रतिरक्षा के लिए हर भारतीय घर में मुख्य है।',
            benefits: ['जोड़ों के दर्द को कम करता है', 'घाव भरता है', 'रक्त को शुद्ध करता है', 'त्वचा की चमक के लिए अच्छा है'],
            usage: 'गर्म दूध में मिलाएं (हल्दी वाला दूध) या खाना पकाने में उपयोग करें।',
            precautions: 'उच्च खुराक रक्त को पतला कर सकती है। सर्जरी से पहले सावधानी बरतें।'
        }
    },
    {
        id: '6',
        name: 'Giloy (Guduchi)',
        name_hi: 'गिलोय',
        slug: 'giloy',
        benefit: 'Immunity',
        benefit_hi: 'रोग प्रतिरोधक क्षमता',
        dosha: 'Tridosha',
        description: 'The "Root of Immortality" (Amrita). Excellent for fevers and heavy infections.',
        description_hi: '"अमरता की जड़" (अमृता)। बुखार और भारी संक्रमण के लिए उत्कृष्ट।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Giloy is a climbing shrub and an essential herb in Ayurvedic medicine, often used to treat chronic fevers.',
            benefits: ['Boosts immunity', 'Treats chronic fever', 'Improves digestion', 'Reduces stress'],
            usage: 'Decoction (Kadha) of the stem or ready-made tablets/juice.',
            precautions: 'May lower blood sugar. Use cautiously for auto-immune diseases.'
        },
        details_hi: {
            overview: 'गिलोय एक चढ़ने वाली झाड़ी है और आयुर्वेदिक चिकित्सा में एक आवश्यक जड़ी-बूटी है, जिसका उपयोग अक्सर पुराने बुखार के इलाज के लिए किया जाता है।',
            benefits: ['इम्युनिटी बढ़ाता है', 'पुराने बुखार का इलाज करता है', 'पाचन में सुधार करता है', 'तनाव कम करता है'],
            usage: 'तने का काढ़ा या तैयार गोलियां/रस।',
            precautions: 'रक्त शर्करा कम कर सकता है। ऑटो-इम्यून बीमारियों के लिए सावधानी से उपयोग करें।'
        }
    },
    {
        id: '7',
        name: 'Shatavari',
        name_hi: 'शतावरी',
        slug: 'shatavari',
        benefit: 'Womens Health',
        benefit_hi: 'महिला स्वास्थ्य',
        dosha: 'Vata-Pitta',
        description: 'The primary rejuvenative tonic for women. Supports reproductive health.',
        description_hi: 'महिलाओं के लिए प्राथमिक कायाकल्प टॉनिक। प्रजनन स्वास्थ्य का समर्थन करता है।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Shatavari means "she who possesses a hundred husbands". It is the foremost herb for female fertility and vitality.',
            benefits: ['Balances hormones', 'Supports lactation', 'Reduces menopause symptoms', 'Anti-ulcer'],
            usage: 'Powder with milk or as granules (Kalpa).',
            precautions: 'Avoid if you have high estrogen sensitivity.'
        },
        details_hi: {
            overview: 'शतावरी का अर्थ है "वह जिसके सौ पति हों"। यह महिला प्रजनन क्षमता और जीवन शक्ति के लिए अग्रणी जड़ी बूटी है।',
            benefits: ['हार्मोन संतुलित करता है', 'स्तनपान का समर्थन करता है', 'रजोनिवृत्ति के लक्षणों को कम करता है', 'अल्सर विरोधी'],
            usage: 'दूध के साथ पाउडर या कणिकाओं (कल्प) के रूप में।',
            precautions: 'यदि आपको उच्च एस्ट्रोजेन संवेदनशीलता है तो बचें।'
        }
    },
    {
        id: '8',
        name: 'Amla (Amalaki)',
        name_hi: 'आंवला',
        slug: 'amla',
        benefit: 'Vitamin C',
        benefit_hi: 'विटामिन सी',
        dosha: 'Tridosha',
        description: 'The richest natural source of Vitamin C. Great for hair, skin, and eyes.',
        description_hi: 'विटामिन सी का सबसे समृद्ध प्राकृतिक स्रोत। बालों, त्वचा और आंखों के लिए बढ़िया।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Amla is a superfood that balances all three doshas. It is the base for Chyawanprash.',
            benefits: ['Highest Vitamin C', 'Anti-aging', 'Promotes hair growth', 'Improves eyesight'],
            usage: 'Raw fruit, juice, candy (murabba), or powder.',
            precautions: 'Avoid eating at night if prone to acidity or cough.'
        },
        details_hi: {
            overview: 'आंवला एक सुपरफूड है जो तीनों दोषों को संतुलित करता है। यह च्यवनप्राश का आधार है।',
            benefits: ['उच्चतम विटामिन सी', 'एंटी-एजिंग', 'बालों के विकास को बढ़ावा देता है', 'आंखों की रोशनी बढ़ाता है'],
            usage: 'कच्चा phal, रस, कैंडी (मुरब्बा), या पाउडर।',
            precautions: 'यदि एसिडिटी या खांसी की प्रवृत्ति हो तो रात में खाने से बचें।'
        }
    },
    {
        id: '9',
        name: 'Neem',
        name_hi: 'नीम',
        slug: 'neem',
        benefit: 'Skin & Detox',
        benefit_hi: 'त्वचा और डिटॉक्स',
        dosha: 'Pitta-Kapha',
        description: 'Nature’s best blood purifier and antiseptic. Clears acne and skin,issues.',
        description_hi: 'प्रकृति का सबसे अच्छा रक्त शोधक और एंटीसेप्टिक। मुँहासे और त्वचा की समस्याओं को साफ करता है।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Neem is a bitter herb used extensively for skin diseases and detoxification.',
            benefits: ['Purifies blood', 'Treats acne & eczema', 'Anti-fungal', 'Oral health'],
            usage: 'Neem leaves paste, oil, or capsules.',
            precautions: 'Avoid if trying to conceive (men) or pregnant.'
        },
        details_hi: {
            overview: 'नीम एक कड़वी जड़ी बूटी है जिसका व्यापक रूप से त्वचा रोगों और विषहरण (Detox) के लिए उपयोग किया जाता है।',
            benefits: ['रक्त शुद्ध करता है', 'मुँहासे और एक्जिमा का इलाज करता है', 'एंटी-फंगल', 'मुख का स्वास्थ्य'],
            usage: 'नीम के पत्तों का पेस्ट, तेल, या कैप्सूल।',
            precautions: 'गर्भवती महिलाओं और गर्भधारण का प्रयास कर रहे पुरुषों को बचना चाहिए।'
        }
    },
    {
        id: '10',
        name: 'Arjuna',
        name_hi: 'अर्जुन',
        slug: 'arjuna',
        benefit: 'Heart Health',
        benefit_hi: 'हृदय स्वास्थ',
        dosha: 'Pitta-Kapha',
        description: 'The best cardiotonic in Ayurveda. Strengthens heart muscles.',
        description_hi: 'आयुर्वेद में सबसे अच्छा कार्डियोटोनिक। हृदय की मांसपेशियों को मजबूत करता है।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Arjuna bark is famous for cardiac health. It protects the heart and helps in maintaining healthy cholesterol.',
            benefits: ['Strengthens heart', 'Regulates blood pressure', 'Lowers cholesterol', 'Heals fractures'],
            usage: 'Bark powder boiled in milk (Arjuna Ksheera Pak).',
            precautions: 'Monitor blood pressure if on medication.'
        },
        details_hi: {
            overview: 'अर्जुन की छाल हृदय स्वास्थ्य के लिए प्रसिद्ध है। यह हृदय की रक्षा करता है और स्वस्थ कोलेस्ट्रॉल बनाए रखने में मदद करता है।',
            benefits: ['हृदय को मजबूत करता है', 'रक्तचाप को नियंत्रित करता है', 'कोलेस्ट्रॉल कम करता है', 'हड्डी के फ्रैक्चर को भरता है'],
            usage: 'दूध में उबाला गया छाल का पाउडर (अर्जुन क्षीर पाक)।',
            precautions: 'दवा लेने पर रक्तचाप की निगरानी करें।'
        }
    },
];

export const medicines = [
    {
        id: '1',
        name: 'Chyawanprash',
        name_hi: 'च्यवनप्राश',
        slug: 'chyawanprash',
        category: 'Rasayana',
        image: '/images/product-generic.png',
        description: 'Immunity boosting jam made with Amla and 40+ herbs.',
        description_hi: 'आंवला और 40+ जड़ी बूटियों से बना इम्युनिटी बढ़ाने वाला जाम।',
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
        name_hi: 'अशोकारिष्ट',
        slug: 'ashokarishta',
        category: 'Arishta',
        image: '/images/product-generic.png',
        description: 'Liquid tonic for women’s health and hormonal balance.',
        description_hi: 'महिलाओं के स्वास्थ्य और हार्मोनल संतुलन के लिए लिक्विड टॉनिक।',
        benefits: ['Menstrual Health', 'Reduces Pain', 'Hormonal Balance'],
        details: {
            ingredients: ['Ashoka Bark', 'Jaggery', 'Dhataki', 'Musta'],
            dosage: '15-30ml with equal amount of water after meals.',
            indication: 'Menorrhagia, dysmenorrhea, and other uterine disorders.',
            safety: 'Contain self-generated alcohol. Avoid in acidity.'
        }
    },
    // Add translations for others if needed, using placeholders for now
    {
        id: '3',
        name: 'Triphala Churna',
        name_hi: 'त्रिफला चूर्ण',
        slug: 'triphala-churna',
        category: 'Churna',
        image: '/images/product-generic.png',
        description: 'Powder blend for digestive health and detoxification.',
        description_hi: 'पाचन स्वास्थ्य और डिटॉक्स के लिए पाउडर मिश्रण।',
        benefits: ['Relieves Constipation', 'Eye Health', 'Detox'],
        details: { ingredients: ['Amalaki', 'Bibhitaki', 'Haritaki'], dosage: '1 teaspoon with warm water at bedtime.', indication: 'Constipation, indigestion, eye disorders.', safety: 'Safe for long-term use. Avoid in diarrhea.' }
    },
    { id: '4', name: 'Kanchanar Guggulu', name_hi: 'कचनार गुग्गुलु', slug: 'kanchanar-guggulu', category: 'Guggulu', image: '/images/product-generic.png', description: 'Tablet for thyroid health and reducing cysts/growths.', description_hi: 'थायराइड स्वास्थ्य और अल्सर/गांठ को कम करने के लिए टैबलेट।', benefits: ['Thyroid Support', 'Lymphatic Detox', 'PCOS'], details: { ingredients: ['Kanchanar Bark', 'Guggulu', 'Triphala', 'Trikatu'], dosage: '2 tablets twice a day with warm water.', indication: 'Hypothyroidism, PCOS, lipoma, lymphadenitis.', safety: 'Consult a doctor during pregnancy.' } },
    { id: '5', name: 'Sitopaladi Churna', name_hi: 'सितोपलादि चूर्ण', slug: 'sitopaladi-churna', category: 'Churna', image: '/images/product-generic.png', description: 'Trusted powder for cough, cold, and respiratory issues.', description_hi: 'खांसी, सर्दी और सांस की समस्याओं के लिए विश्वसनीय पाउडर।', benefits: ['Relieves Cough', 'Clears Chest', 'Fever Support'], details: { ingredients: ['Mishri', 'Vanshalochan', 'Pippali', 'Cardamom', 'Cinnamon'], dosage: '1/2 to 1 teaspoon with honey.', indication: 'Cough, cold, fever, burning sensation.', safety: 'Safe for children.' } },
    { id: '6', name: 'Brahmi Ghrita', name_hi: 'ब्रह्मी घृत', slug: 'brahmi-ghrita', category: 'Ghrita', image: '/images/product-generic.png', description: 'Medicated ghee for memory and mental clarity.', description_hi: 'याददाश्त और मानसिक स्पष्टता के लिए औषधीय घी।', benefits: ['Memory Boost', 'Mental Calm', 'Sleep Aid'], details: { ingredients: ['Ghee', 'Brahmi', 'Shankhpushpi', 'Vacha'], dosage: '1 teaspoon with warm milk on empty stomach.', indication: 'Memory loss, anxiety, insomnia.', safety: 'Monitor cholesterol if taken in excess.' } },
];

export const products = [
    {
        id: '1',
        name: 'Organic Ashwagandha Powder',
        name_hi: 'ऑर्गेनिक अश्वगंधा पाउडर',
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
    // We can update other products similarly when needed
    { id: '2', name: 'Kumkumadi Tailam', name_hi: 'कुंकुमादि तेलम', slug: 'kumkumadi-tailam', brand: 'Kama Ayurveda', price: '$55', rating: 4.9, image: '/images/product-generic.png', category: 'Skincare', details: { description: 'Miraculous beauty fluid. An Ayurvedic night serum made with rare Saffron to brighten skin and reduce pigmentation.', reviews: [] } },
    { id: '3', name: 'Triphala Juice', name_hi: 'त्रिफला रस', slug: 'triphala-juice', brand: 'Kapiva', price: '$15', rating: 4.5, image: '/images/product-generic.png', category: 'Juices', details: { description: 'Cold-pressed Triphala juice for digestive health.', reviews: [] } },
    { id: '4', name: 'Chyawanprash', name_hi: 'च्यवनप्राश', slug: 'products-chyawanprash', brand: 'Dabur', price: '$12', rating: 4.7, image: '/images/product-generic.png', category: 'Supplements', details: { description: 'Traditional recipe for daily immunity.', reviews: [] } },
    { id: '5', name: 'Kesini Hair Oil', name_hi: 'केसिनी हेयर ऑयल', slug: 'kesini-hair-oil', brand: 'Kottakkal', price: '$18', rating: 4.6, image: '/images/product-generic.png', category: 'Hair Care', details: { description: 'Herbal oil for hair fall control.', reviews: [] } },
    { id: '6', name: 'Ayurvedic Toothpaste', name_hi: 'आयुर्वेदिक टूथपेस्ट', slug: 'ayurveda-toothpaste', brand: 'Himalaya', price: '$5', rating: 4.4, image: '/images/product-generic.png', category: 'Personal Care', details: { description: 'Fluoride-free herbal toothpaste.', reviews: [] } },
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
