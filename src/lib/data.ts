
export const healthConditions = [
    {
        id: '1',
        name: 'Diabetes (Madhumeha)',
        name_hi: 'मधुमेह (Diabetes)',
        slug: 'diabetes',
        image: '/images/conditions/diabetes.jpg',
        description: 'Comprehensive Ayurvedic management of blood sugar through diet, herbs, and lifestyle.',
        description_hi: 'आहार, जड़ी-बूटियों और जीवन शैली के माध्यम से रक्त शर्करा का व्यापक आयुर्वेदिक प्रबंधन।',
        details: {
            overview: 'In Ayurveda, Diabetes is known as "Madhumeha" (Sweet Urine), often described as a rich man\'s disease due to lifestyle factors. It is a metabolic disorder (Vata-Kapha) where the patient passes honey-like (sweet and astringent) urine.',
            ayurvedic_explanation: 'Madhumeha is one of the 20 types of Prameha (Urinary Disorders). It begins with an aggravation of Kapha dosha due to sedentary habits and excess sugar intake, which vitiates the Meda (fat) and Mamsa (muscle) tissues. Eventually, Vata also gets aggravated, leading to the deterioration of Dhatus (tissues) and Ojas (vitality). This blockage in the pancreas (Agnyashaya) impairs insulin production.',
            types: [
                {
                    name: 'Kaphaja Prameha',
                    slug: 'kaphaja-prameha',
                    description: 'The early, reversible stage of diabetes in Ayurveda. It involves the vitiation of Kapha dosha (Water & Earth elements), typically caused by sedentary habits and excess consumption of heavy, sweet foods.',
                    severity: 'Mild',
                    symptoms: ['Cloudy Urine', 'Heaviness in Body', 'Lethargy', 'Excessive Sleep', 'Sweet Taste in Mouth', 'Obesity'],
                    treatment: 'Kapha-pacifying diet (lighter, spicy, bitter foods). Intense physical activity (Vyayama) and Udwarthanam (dry powder massage) are critical to liquefy the fat.',
                    medicines: ['Chandraprabha Vati', 'Shilajit', 'Triphala Guggulu']
                },
                {
                    name: 'Pittaja Prameha',
                    slug: 'pittaja-prameha',
                    description: 'An acute stage where Pitta dosha (Fire element) is involved along with Kapha. This is often associated with inflammation, heat in the body, and can lead to infections if uncontrolled.',
                    severity: 'Moderate',
                    symptoms: ['Acidic/Blueish Urine', 'Burning Sensation', 'Excessive Thirst', 'Giddiness', 'Loose Stools', 'Redness in Eyes'],
                    treatment: 'Pitta-pacifying cooling diet. Avoid sour, salty, and spicy foods. Use bitter herbs like Neem, Guduchi, and Amla to cool the body and purify blood.',
                    medicines: ['Nishamalaki', 'Vasant Kusumakar Ras', 'Guduchi Satva']
                },
                {
                    name: 'Vataja Prameha',
                    slug: 'vataja-prameha',
                    description: 'The most advanced and difficult stage (Madhumeha). Involves Vata (Air) aggravation leading to tissue depletion (Dhatu Kshaya) and loss of Ojas (Vitality).',
                    severity: 'Severe',
                    symptoms: ['Honey-like Urine', 'Rapid Weight Loss', 'Extreme Fatigue', 'Numbness', 'Insomnia', 'Constipation'],
                    treatment: 'Vata-pacifying nourishment along with blood sugar control. Emphasize Rasayanas (rejuvenators) to rebuild tissues while managing glucose.',
                    medicines: ['Vasant Kusumakar Ras', 'Shilajit', 'Ashwagandha Arishta', 'Jambvasava']
                }
            ],
            symptoms: [
                { text: 'Excessive thirst (Polydipsia)', icon: 'Droplets' },
                { text: 'Frequent urination (Polyuria)', icon: 'Clock' },
                { text: 'Sweet taste in mouth', icon: 'Candy' },
                { text: 'Numbness in hands/feet', icon: 'Activity' },
                { text: 'Unexplained weight loss', icon: 'Scale' },
                { text: 'Extreme Fatigue', icon: 'Battery' },
                { text: 'Blurred vision', icon: 'Eye' },
                { text: 'Slow wound healing', icon: 'Bandage' }
            ],
            causes: [
                'Excessive intake of sugar, curd, and heavy foods',
                'Sedentary lifestyle (Asyasukbam) & lack of exercise',
                'Sleeping during the day (Diwaswapna)',
                'Stress, anxiety, and grief',
                'Genetic factors (Sahaja)',
                'Overeating (Adhyashana)'
            ],
            recommendations: [
                'Follow a Kapha-pacifying diet.',
                'Engage in daily vigorous exercise.',
                'Drink water stored in a copper vessel.'
            ],
            diet_lifestyle: {
                diet: [
                    '**Cereals**: Barley (Jau), Bajra, Ragi, and old rice are best. Avoid new wheat.',
                    '**Pulses**: Horse gram (Kulthi), Green gram (Moong), and Bengal gram (Chana).',
                    '**Vegetables**: Bitter Gourd (Karela), Methi, Drumstick, Neem, and Bottle Gourd.',
                    '**Spices**: Turmeric, Cinnamon, Fenugreek, and Black Pepper.',
                    '**Fruits**: Jamun, Amla, Guava, and Papaya. Avoid Mango, Banana, and Chikoo.',
                    '**Oils**: Mustard oil and Sesame oil are preferred over Ghee/Butter.'
                ],
                lifestyle: [
                    '**Exercise**: Brisk walking for 45 mins daily is non-negotiable.',
                    '**Dry Massage**: Udvartana (powder massage) to reduce fat and Kapha.',
                    '**Sleep**: Wake up before sunrise (Brahma Muhurta). Avoid daytime sleeping.',
                    '**Bath**: Take warm baths with Neem leaves.'
                ]
            },
            home_remedies: [
                { title: 'Methi Dana (Fenugreek)', description: 'Soak 1 tsp fenugreek seeds overnight. Drink the water and chew the seeds in the morning.', image: '/images/remedies/methi.jpg', icon: 'Sprout' },
                { title: 'Jamun Seed Powder', description: 'Take 1 tsp of dried Jamun seed powder with warm water twice daily. It is excellent for controlling blood sugar.', image: '/images/remedies/jamun.jpg', icon: 'Disc' },
                { title: 'Amla & Turmeric', description: 'Mix equal parts of Amla powder and Turmeric powder (Nisha-Amalaki yoga). Take 1 tsp daily on an empty stomach.', image: '/images/remedies/amla.jpg', icon: 'Eraser' },
                { title: 'Karela Juice', description: 'Drink 20ml fresh Bitter Gourd juice mixed with a pinch of turmeric early morning.', image: '/images/remedies/karela.jpg', icon: 'GlassWater' }
            ],
            yoga_asanas: [
                { name: 'Mandukasana (Frog Pose)', benefit: 'Stimulates the pancreas and improves insulin secretion.', image: '/images/yoga/mandukasana.jpg', icon: 'ArrowDownCircle' },
                { name: 'Ardha Matsyendrasana', benefit: 'Twisting pose that squeezes the abdominal organs and pancreas.', image: '/images/yoga/ardha-matsyendrasana.jpg', icon: 'RotateCw' },
                { name: 'Surya Namaskar', benefit: 'Improves metabolism and reduces insulin resistance.', image: '/images/yoga/surya-namaskar.jpg', icon: 'Sun' },
                { name: 'Kapalbhati Pranayama', benefit: 'Cleanses toxins and improves pancreatic efficiency.', image: '/images/yoga/kapalbhati.jpg', icon: 'Wind' }
            ],
            dos_and_donts: {
                dos: ['Drink warm water.', 'Eat dinner by 7 PM.', 'Manage stress with Meditation.'],
                donts: ['Do not suppress natural urges (Vega Dharana).', 'Avoid alcohol and smoking.', 'Do not walk barefoot to prevent injury.']
            },
            medicines: ['Chandraprabha Vati', 'Vasant Kusumakar Ras', 'Triphala Churna', 'Nisha Amalaki', 'Shilajit', 'Gudmar Churna']
        },
        details_hi: {
            overview: 'आयुर्वेद में मधुमेह को "मधुमेह" (मीठा मूत्र) के रूप में जाना जाता है, जिसे अक्सर खराब जीवन शैली के कारण होने वाली बीमारी माना जाता है। यह एक चयापचय विकार (वात-कफ) है जहां रोगी शहद जैसा (मीठा और कसैला) पेशाब करता है।',
            ayurvedic_explanation: 'मधुमेह 20 प्रकार के प्रमेह (मूत्र संबंधी विकारों) में से एक है। इसकी शुरुआत कफ दोष के बिगड़ने से होती है जो बैठने वाली आदतों और अत्यधिक चीनी के सेवन के कारण होती है। यह मेद (चर्बी) और मांस (मांसपेशियों) के ऊतकों को दूषित करता है। अंततः, वात भी बढ़ जाता है, जिससे धातुओं (ऊतकों) और ओजस (जीवन शक्ति) का क्षय होता है। अग्न्याशय (अग्न्याशय) में यह रुकावट इंसुलिन उत्पादन को बाधित करती है।',
            symptoms: [
                'अत्यधिक प्यास (Polydipsia)',
                'बार-बार पेशाब आना, विशेष रूप से रात में (Polyuria)',
                'मुंह में मीठा स्वाद',
                'हाथों और पैरों में सुन्नता या जलन',
                'अस्पष्ट वजन घटना या बढ़ना',
                'थकान और सुस्ती',
                'धुंधली दृष्टि',
                'घावों का धीमा भरना'
            ],
            causes: [
                'चीनी, दही और भारी भोजन का अत्यधिक सेवन',
                'आरामदायक जीवन शैली (आस्यासुखम्) और व्यायाम की कमी',
                'दिन में सोना (दिवास्वप्न)',
                'तनाव, चिंता और दुःख',
                'आनुवंशिक कारक (सहज)',
                'पेट भर जाने पर भी खाना (अध्यशन)'
            ],
            recommendations: [
                'कफ नाशक आहार का पालन करें।',
                'प्रतिदिन जोरदार व्यायाम करें।',
                'तांबे के बर्तन में रखा पानी पिएं।'
            ],
            diet_lifestyle: {
                diet: [
                    '**अनाज**: जौ, बाजरा, रागी और पुराना चावल सबसे अच्छे हैं। नए गेहूं से बचें।',
                    '**दालें**: कुलथी (Horse gram), मूंग और चना।',
                    '**सब्जियां**: करेला, मेथी, सहजन, नीम और लौकी।',
                    '**मसाले**: हल्दी, दालचीनी, मेथी और काली मिर्च।',
                    '**फल**: जामुन, आंवला, अमरूद और पपीता। आम, केला और चीकू से बचें।',
                    '**तेल**: घी/मक्खन की जगह सरसों का तेल और तिल का तेल बेहतर है।'
                ],
                lifestyle: [
                    '**व्यायाम**: रोजाना 45 मिनट तेज चलना अनिवार्य है।',
                    '**सूखी मालिश**: वसा और कफ को कम करने के लिए उद्वर्तन (पाउडर मालिश)।',
                    '**नींद**: सूर्योदय से पहले उठें (ब्रह्म मुहूर्त)। दिन में सोने से बचें।',
                    '**स्नान**: नीम के पत्तों के साथ गर्म पानी से स्नान करें।'
                ]
            },
            home_remedies: [
                { title: 'मेथी दाना', description: '1 चम्मच मेथी दाना रात भर भिगो दें। सुबह पानी पिएं और दाने चबाएं।' },
                { title: 'जामुन गुठली चूर्ण', description: '1 चम्मच सूखे जामुन के बीज का चूर्ण दिन में दो बार गर्म पानी के साथ लें। यह शुगर कंट्रोल के लिए बेहतरीन है।' },
                { title: 'आंवला और हल्दी', description: 'आंवला पाउडर और हल्दी पाउडर (निशा-आमलकी योग) को बराबर मात्रा में मिलाएं। 1 चम्मच रोजाना खाली पेट लें।' },
                { title: 'करेले का जूस', description: '20 मिली ताजे करेले के जूस में एक चुटकी हल्दी मिलाकर सुबह पीएं।' }
            ],
            yoga_asanas: [
                { name: 'मंडुकासन (Frog Pose)', benefit: 'अग्न्याशय को उत्तेजित करता है और इंसुलिन स्राव में सुधार करता है।' },
                { name: 'र्ध मत्स्येन्द्रासन', benefit: 'पेट के अंगों और अग्न्याशय को निचोड़ने वाला मोड़। ' },
                { name: 'सूर्य नमस्कार', benefit: 'मेटाबॉलिज्म में सुधार करता है और इंसुलिन प्रतिरोध को कम करता है।' },
                { name: 'कपालभाति प्राणायाम', benefit: 'विषाक्त पदार्थों को साफ करता है और अग्नाशय की दक्षता में सुधार करता है।' }
            ],
            dos_and_donts: {
                dos: ['सुबह तांबे के बर्तन का पानी पिएं।', 'रात का खाना 7 बजे तक खा लें।', 'ध्यान (Meditation) से तनाव प्रबंधित करें।'],
                donts: ['प्राकृतिक वेगों (मल-मूत्र) को न रोकें।', 'शराब और धूम्रपान से बचें।', 'चोट से बचने के लिए नंगे पैर न चलें।']
            },
            medicines: ['चंद्रप्रभा वटी', 'वसंत कुसुमाकर रस', 'त्रिफला चूर्ण', 'निशा आमलकी', 'शिलाजीत', 'गुड़मार चूर्ण']
        },
        recommendedHerbs: ['turmeric', 'neem', 'giloy', 'gudmar', 'jamun', 'karela', 'methi'],
        sources: [
            'Ministry of AYUSH, Govt. of India. "Protocol for Management of Diabetes (Madhumeha)."',
            'Sushruta Samhita, Nidana Sthana, Chapter 6.',
            'Charaka Samhita, Chikitsa Sthana, Chapter 6 (Prameha Chikitsa).'
        ]
    },
    {
        id: '2',
        name: 'Digestion (Agni)',
        name_hi: 'पाचन (Digestion)',
        slug: 'digestion',
        image: '/images/conditions/digestion.jpg',
        description: 'Resolve bloating, acidity, and constipation by restoring digestive fire (Jatharagni).',
        description_hi: 'पाचन अग्नि को बहाल करके सूजन, एसिडिटी और कब्ज का समाधान करें।',
        details: {
            overview: 'In Ayurveda, good health begins with strong Agni (Digestive Fire). When Agni is weak, food is not digested properly, forming Ama (toxins) which is the root cause of most diseases.',
            ayurvedic_explanation: 'Digestion is governed by Pachaka Pitta, Samana Vayu, and Kledaka Kapha. Imbalance leads to Ajeerna (Indigestion). Mandagni (Low fire) causes heaviness, Tikshnagni (Sharp fire) causes acidity, and Vishamagni (Variable fire) causes gas/bloating.',
            types: [
                {
                    name: 'Vataja Grahani (IBS-C)',
                    slug: 'vataja-grahani',
                    description: 'Caused by variable digestive fire. Characterized by constipation, gas, dry skin, and anxiety.',
                    severity: 'Chronic',
                    symptoms: ['Constipation', 'Bloating', 'Dry Skin', 'Anxiety'],
                    treatment: 'Vata pacifying diet. Warm, oily, cooked foods. Use of Hing (Asafoetida) and Ghee.',
                    medicines: ['Hingvastak Churna', 'Lavan Bhaskar Churna']
                },
                {
                    name: 'Pittaja Grahani (Acid Reflux)',
                    slug: 'pittaja-grahani',
                    description: 'Caused by sharp digestive fire. Characterized by heartburn, loose stools, and irritability.',
                    severity: 'Moderate',
                    symptoms: ['Heartburn', 'Sour Belching', 'Loose Stools', 'Heat sensation'],
                    treatment: 'Pitta pacifying diet. Cooling foods like Coconut water, Fennel. Avoid spicy food.',
                    medicines: ['Avipattikar Churna', 'Praval Pishti']
                }
            ],
            symptoms: [
                { text: 'Bloating & Gas', icon: 'Wind' },
                { text: 'Heartburn/Acidity', icon: 'Flame' },
                { text: 'Constipation', icon: 'Anchor' },
                { text: 'Heaviness after meals', icon: 'Scale' },
                { text: 'Coated tongue (Ama)', icon: 'Disc' }
            ],
            causes: ['Eating irregularly', 'Cold/Frozen foods', 'Stress', 'Eating before previous meal is digested'],
            recommendations: ['Eat only when hungry.', 'Drink warm ginger water.', 'Avoid ice cold drinks.'],
            diet_lifestyle: {
                diet: [
                    '**Spices**: Ginger, Cumin, Fennel, Asafoetida enhance Agni.',
                    '**Grains**: Old Rice, Quinoa. Avoid heavy wheat.',
                    '**Fruits**: Papaya, Pomegranate. Avoid heavy bananas.',
                    '**Liquids**: Buttermilk (Takra) with spices is the best medicine.'
                ],
                lifestyle: [
                    '**Eating Habits**: Chew food 32 times. Do not drink water immediately after food.',
                    '**Vajrasana**: Sit in this pose for 10 mins after meals.',
                    '**Fasting**: Frequent fasting (Langhana) helps burn Ama.'
                ]
            },
            home_remedies: [
                { title: 'Ginger & Salt', description: 'Eat a slice of fresh ginger with rock salt before meals to ignite appetite.', icon: 'Zap' },
                { title: 'Jeera Water', description: 'Boil 1 tsp Cumin seeds in water. Drink warm for bloating relief.', icon: 'GlassWater' },
                { title: 'Ajwain Phanki', description: 'Take 1/2 tsp Ajwain with warm water for instant gas relief.', icon: 'Wind' }
            ],
            yoga_asanas: [
                { name: 'Vajrasana (Thunderbolt Pose)', benefit: 'Increases blood flow to stomach, aids digestion.', icon: 'PersonStanding' },
                { name: 'Pawanmuktasana', benefit: 'Relieves gas and constipation.', icon: 'Wind' },
                { name: 'Ardha Matsyendrasana', benefit: 'Stimulates liver and pancreas.', icon: 'RotateCw' }
            ],
            medicines: ['Triphala Churna', 'Hingvastak Churna', 'Avipattikar Churna', 'Chitrakadi Vati']
        },
        recommendedHerbs: ['triphala', 'ginger', 'ajwain', 'fennel']
    },
    {
        id: '3',
        name: 'Stress & Anxiety',
        name_hi: 'तनाव और चिंता',
        slug: 'stress',
        image: '/images/conditions/stress.jpg',
        description: 'Calm the mind, improve sleep, and build mental resilience.',
        description_hi: 'मन को शांत करें, नींद में सुधार करें और मानसिक लचीलापन बनाएं।',
        details: {
            overview: 'In Ayurveda, mental health is governed by "Manovaha Srotas" (Channels of the mind). Stress is primarily a Vata aggravation (Prana Vayu & Vyana Vayu) which disturbs the nervous system, while Anxiety often involves Pitta (Sadhaka Pitta) overheat.',
            ayurvedic_explanation: 'The mind (Manas) connects the physical body with the soul. When Rajas (passion/activity) and Tamas (inertia) increase, they cloud the Sattva (purity/clarity) of the mind. Treatment focuses on Sattvavajaya Chikitsa (Psychotherapy) and Medhya Rasayanas (Brain tonics).',
            types: [
                {
                    name: 'Vataja Unmada (Anxiety)',
                    slug: 'vataja-unmada',
                    description: 'Restless mind, excessive thinking, fear, and insomnia.',
                    severity: 'Moderate',
                    symptoms: ['Racing Thoughts', 'Palpitations', 'Tremors', 'Insomnia'],
                    treatment: 'Grounding therapies. Shirodhara with warm oil is the gold standard.',
                    medicines: ['Saraswatarishta', 'Brahmi Vati']
                },
                {
                    name: 'Kaphaja Unmada (Depression)',
                    slug: 'kaphaja-unmada',
                    description: 'Lethargy, lack of motivation, excessive sleep, and sadness.',
                    severity: 'Chronic',
                    symptoms: ['Heaviness', 'Oversleeping', 'Brain Fog', 'Lack of Interest'],
                    treatment: 'Stimulating therapies. Nasya (Nasal drops) and vigorous exercise.',
                    medicines: ['Vacha Churna', 'Kapikachhu']
                }
            ],
            symptoms: [
                { text: 'Sleeplessness (Anidra)', icon: 'Moon' },
                { text: 'Constant Worry', icon: 'Brain' },
                { text: 'Irritability', icon: 'AlertCircle' },
                { text: 'Muscle Tension', icon: 'Activity' },
                { text: 'Poor Concentration', icon: 'Eye' }
            ],
            causes: ['Excessive Screen Time', 'Irregular Sleep Routine', 'Vata Aggravating Foods (Coffee/Dry)', 'Suppressed Emotions'],
            recommendations: ['Practice Yoga Nidra.', 'Oil massage before bath (Abhyanga).', 'Limit caffeine.'],
            diet_lifestyle: {
                diet: [
                    '**Medhya Foods**: Walnuts, Almonds, Ghee, and Milk nourish the brain.',
                    '**Spices**: Saffron (Kesar), Cardamom, and Fennel are cooling and calming.',
                    '**Avoid**: Spicy, fermented, and processed foods that increase Rajas.'
                ],
                lifestyle: [
                    '**Shirodhara**: Continuous pouring of warm oil on forehead (Best for stress).',
                    '**Nasya**: lubrication of nasal passage clears the mind channels.',
                    '**Meditation**: 20 minutes of daily mindfulness.'
                ]
            },
            home_remedies: [
                { title: 'Brahmi Tea', description: 'Boil Brahmi leaves or powder in water. Calms the nervous system instantly.', icon: 'CupSoda' },
                { title: 'Almond Milk', description: 'Drink warm milk with crushed almonds, saffron, and nutmeg before bed.', icon: 'GlassWater' },
                { title: 'Head Massage', description: 'Massage scalp with warm Brahmi or Bhringraj oil.', icon: 'Smile' }
            ],
            yoga_asanas: [
                { name: 'Balasana (Child Pose)', benefit: 'Relaxes the spine and calms the brain.', icon: 'Moon' },
                { name: 'Viparita Karani (Legs up Wall)', benefit: 'Calms the nervous system and improves circulation.', icon: 'Activity' },
                { name: 'Sheetali Pranayama', benefit: 'Cooling breath that reduces pitta and anger.', icon: 'Wind' }
            ],
            medicines: ['Brahmi Ghrita', 'Manasamitra Vatakam', 'Ashwagandharishta', 'Sarpagandha Ghan Vati']
        },
        recommendedHerbs: ['ashwagandha', 'brahmi', 'jatamansi', 'shankhpushpi']
    },
    {
        id: '4',
        name: 'Skin Care',
        name_hi: 'त्वचा की देखभाल',
        slug: 'skin-care',
        image: '/images/conditions/skin-care.jpg',
        description: 'Purify blood and restore natural glow with Ayurvedic solutions.',
        description_hi: 'आंवला और नीम के साथ रक्त शुद्ध करें और प्राकृतिक चमक बहाल करें।',
        details: {
            overview: 'Skin (Twacha) is the mirror of your internal health. Skin disorders in Ayurveda (Kushta) are primarily due to Raktavaha Srotas (Blood channels) impurity. Use of "Varnya" (Complexion enhancing) and "Kandughna" (Anti-itching) herbs is key.',
            ayurvedic_explanation: 'Bhrajaka Pitta governs the skin\'s color and luster. When Pitta is vitiated along with Rakta (Blood), it leads to redness and acne. Vata causes dryness/cracks, and Kapha causes oiliness/itching.',
            types: [
                {
                    name: 'Yauvana Pidika (Acne)',
                    slug: 'acne',
                    description: 'Pitta-Kapha imbalance causing inflammation and pus formation.',
                    severity: 'Common',
                    symptoms: ['Pimples', 'Redness', 'Pain', 'Scarring'],
                    treatment: 'Blood purification (Raktamokshana) and cooling pastes (Lepa).',
                    medicines: ['Kaishore Guggulu', 'Gandhak Rasayan']
                },
                {
                    name: 'Vicharchika (Eczema)',
                    slug: 'eczema',
                    description: 'Kapha-Vata disorder causing itching, weeping skin, and thickness.',
                    severity: 'Chronic',
                    symptoms: ['Intense Itching', 'Darkening', 'Oozing'],
                    treatment: 'Detoxification (Panchakarma) specifically Virechana (Purgation).',
                    medicines: ['Mahamanjisthadi Kwath', 'Khadirarishta']
                }
            ],
            symptoms: [
                { text: 'Acne/Pimples', icon: 'AlertCircle' },
                { text: 'Dryness/Scaling', icon: 'Wind' },
                { text: 'Itching (Kandu)', icon: 'Activity' },
                { text: 'Pigmentation', icon: 'Sun' },
                { text: 'Inflammation', icon: 'Flame' }
            ],
            causes: ['Incompatible Foods (Viruddha Ahara)', 'Excessive Salt/Sour/Spicy', 'Suppressing vomiting', 'Stress'],
            recommendations: ['Avoid seafood with milk.', 'Use chemical-free soaps.', 'Regular de-worming.'],
            diet_lifestyle: {
                diet: [
                    '**Bitter Taste**: Neem, Karela, and Turmeric are best for blood purification.',
                    '**Fruits**: Pomegranate, Grapes, and Amla.',
                    '**Avoid**: Fermented foods (Idli/Dosa), Curd at night, and Sour foods.'
                ],
                lifestyle: [
                    '**Hygiene**: Bathe twic daily with herbal powders.',
                    '**Sun Protection**: Avoid direct midday sun (Pitta aggravation).',
                    '**Sleep**: Beauty sleep (10 PM - 6 AM) promotes cell repair.'
                ]
            },
            home_remedies: [
                { title: 'Neem & Turmeric Paste', description: 'Apply paste of fresh Neem leaves and Turmeric on acne.', icon: 'Sprout' },
                { title: 'Aloe Vera Gel', description: 'Fresh Aloe Vera pulp soothes burning and moisturizes dry skin.', icon: 'GlassWater' },
                { title: 'Triphala Wash', description: 'Wash face with Triphala decoction to reduce oiliness.', icon: 'Droplets' }
            ],
            yoga_asanas: [
                { name: 'Sarvangasana', benefit: 'Improves blood flow to face, glowing skin.', icon: 'Activity' },
                { name: 'Halasana', benefit: 'Detoxifies the gut, reflecting on skin health.', icon: 'ArrowDownCircle' },
                { name: 'Lion Pose (Simhasana)', benefit: 'Reduces facial tension and improves circulation.', icon: 'Sun' }
            ],
            medicines: ['Mahamanjisthadi Kwath', 'Khadirarishta', 'Arogyavardhini Vati', 'Neem Ghan Vati']
        },
        recommendedHerbs: ['neem', 'manjistha', 'turmeric', 'aloevera']
    },
    {
        id: '5',
        name: 'Joint Pain',
        name_hi: 'जोड़ो का दर्द',
        slug: 'joint-pain',
        image: '/images/conditions/joint-pain.jpg',
        description: 'Relieve pain and inflammation in Arthritis and Osteoporosis.',
        description_hi: 'गठिया और ऑस्टियोपोरोसिस में दर्द और सूजन से राहत।',
        details: {
            overview: 'Joint pain is primarily a Vata disorder (Sandhigata Vata). When Vata increases, it dries up the Shleshaka Kapha (Synovial Fluid) causing friction, popping sounds, and pain. In Amavata (Rheumatoid Arthritis), Ama (toxins) accumulation is the main cause.',
            ayurvedic_explanation: 'Strong bones depend on Asthi Dhatu. Vata resides in the bones. Excess Vata increases porosity (Osteoporosis). Treatment involves Snehana (Oleoation) and Swedana (Fomentation) to lubricate joints and reduce stiffness.',
            types: [
                {
                    name: 'Sandhigata Vata (Osteoarthritis)',
                    slug: 'osteoarthritis',
                    description: 'Degenerative joint disease. Pain increases with movement, relief with rest.',
                    severity: 'Age-related',
                    symptoms: ['Crepitus (Cracking sound)', 'Pain on movement', 'Stiffness'],
                    treatment: 'Janu Basti (Knee oil pooling) and Calcium rich diet.',
                    medicines: ['Yograj Guggulu', 'Shallaki']
                },
                {
                    name: 'Amavata (Rheumatoid Arthritis)',
                    slug: 'rheumatoid-arthritis',
                    description: 'Auto-immune condition caused by toxins (Ama). Shifting pain, swelling, morning stiffness.',
                    severity: 'Severe',
                    symptoms: ['Swelling', 'Morning Stiffness', 'Fever', 'Lethargy'],
                    treatment: 'Langhana (Fasting) to digest Ama. Dry heat therapy (Valuka Sweda).',
                    medicines: ['Simhanad Guggulu', 'Ajmodadi Churna']
                }
            ],
            symptoms: [
                { text: 'Joint Swelling', icon: 'Disc' },
                { text: 'Stiffness (Stambha)', icon: 'Anchor' },
                { text: 'Pain (Shoola)', icon: 'Activity' },
                { text: 'Redness', icon: 'Flame' },
                { text: 'Restricted Movement', icon: 'AlertCircle' }
            ],
            causes: ['Cold & Windy Climate', 'Eating Dried/Stale Foods', 'Old Age', 'Lack of Physical Activity'],
            recommendations: ['Keep joints warm.', 'Avoid cold winds.', 'Massage with sesame oil.'],
            diet_lifestyle: {
                diet: [
                    '**Vata Pacifying**: Cooked grains, Ghee, Sesame seeds, and Nuts.',
                    '**Spices**: Turmeric and Ginger are powerful anti-inflammatories.',
                    '**Avoid**: Dry items (Popcorn, Crackers), Beans (Gas forming), and Nightshades.'
                ],
                lifestyle: [
                    '**Abhyanga**: Daily self-massage with Sesame/Mahanarayan Oil.',
                    '**Gentle Movement**: Walking or Swimming is better than running.',
                    '**Heat Application**: Hot water bag fermentation reduces pain.'
                ]
            },
            home_remedies: [
                { title: 'Methi Ladoo', description: 'Fenugreek seeds powder mixed with jaggery and ghee. Excellent for back pain.', icon: 'Disc' },
                { title: 'Turmeric Milk', description: 'Golden milk (Haldi Doodh) reduces body-wide inflammation.', icon: 'CupSoda' },
                { title: 'Ginger Compress', description: 'Apply warm ginger paste on painful joints.', icon: 'Bandage' }
            ],
            yoga_asanas: [
                { name: 'Trikonasana', benefit: 'Strengthens legs and hips.', icon: 'PersonStanding' },
                { name: 'Veerabhadrasana', benefit: 'Building stability and balance.', icon: 'Activity' },
                { name: 'Pawanmuktasana', benefit: 'Releases gas which aggravates joint pain.', icon: 'Wind' }
            ],
            medicines: ['Yograj Guggulu', 'Mahanarayan Oil', 'Shallaki', 'Rumalaya Forte']
        },
        recommendedHerbs: ['shallaki', 'guggul', 'ginger', 'turmeric']
    },
    {
        id: '6',
        name: 'Immunity',
        name_hi: 'रोग प्रतिरोधक क्षमता',
        slug: 'immunity',
        image: '/images/conditions/immunity.jpg',
        description: 'Build Ojas and deep resilience against infections.',
        description_hi: 'संक्रमण के खिलाफ ओजस और गहरी लचक बनाएं।',
        details: {
            overview: 'In Ayurveda, Immunity is known as "Vyadhi Kshamatva" (Resistance to Disease). It is a function of "Ojas", the supreme essence of all seven Dhatus. Strong Ojas means a glowing aura, physical strength, and mental clarity.',
            ayurvedic_explanation: 'Ojas is the final product of perfect digestion/metabolism. If Agni (Fire) is weak, Ama (Toxins) forms instead of Ojas. Immunity comes in three forms: Sahaja (Genetic), Kalaja (Seasonal/Age), and Yuktikrita (Acquired via diet/lifestyle).',
            types: [
                {
                    name: 'Recurrent Infections',
                    slug: 'recurrent-infections',
                    description: 'Frequent colds, coughs, and fevers indicating low Ojas.',
                    severity: 'Moderate',
                    symptoms: ['Frequent Cold', 'Low Energy', 'Slow Healing'],
                    treatment: 'Rasayana Therapy (Rejuvenation). Chyawanprash is the best example.',
                    medicines: ['Chyawanprash', 'Sitopaladi Churna']
                },
                {
                    name: 'Auto-Immune Support',
                    slug: 'auto-immune',
                    description: 'Body attacking itself due to confused intelligence (Pragya Aparadh).',
                    severity: 'Complex',
                    symptoms: ['Inflammation', 'Fatigue', 'Unexplained Pain'],
                    treatment: 'Detoxification (Shodana) followed by Immunomodulators.',
                    medicines: ['Guduchi Satva', 'Amritarishta']
                }
            ],
            symptoms: [
                { text: 'Falling Sick Often', icon: 'Thermo-sun' },
                { text: 'Chronic Fatigue', icon: 'Battery' },
                { text: 'Digestive Issues', icon: 'Flame' },
                { text: 'Allergies', icon: 'Wind' },
                { text: 'Pale Skin', icon: 'User' }
            ],
            causes: ['Processed/Junk Food', 'Sedentary Lifestyle', 'Antibiotic Overuse', 'Pollution'],
            recommendations: ['Eat fresh, warm meals.', 'Sleep by 10 PM.', 'Seasonal cleansing.'],
            diet_lifestyle: {
                diet: [
                    '**Ojas Building Foods**: Ghee, Honey, Dates, Almonds, Milk, and Saffron.',
                    '**Spices**: Turmeric, Black Pepper, Ginger destroy Ama.',
                    '**Avoid**: Leftovers, Frozen food, and White sugar.'
                ],
                lifestyle: [
                    '**Nasya**: Daily instillation of 2 drops of Anu Taila strengthens respiratory barrier.',
                    '**Exercise**: Moderate exercise (50% capacity) boosts Agni.',
                    '**Swarna Prashana**: Gold ash therapy for children.'
                ]
            },
            home_remedies: [
                { title: 'Giloy Kadha', description: 'Boil Giloy sticks with Tulsi and Black pepper. Best antiviral.', icon: 'Check' },
                { title: 'Turmeric Milk', description: 'Daily night dose of Haldi-Doodh boosts systemic immunity.', icon: 'CupSoda' },
                { title: 'Chyawanprash', description: '1 tsp daily morning specifically for Vitamin C and Amla benefits.', icon: 'Sprout' }
            ],
            yoga_asanas: [
                { name: 'Surya Namaskar', benefit: 'Complete body workout that stimulates all organs.', icon: 'Sun' },
                { name: 'Matsyasana (Fish Pose)', benefit: 'Stimulates thymus gland (immunity center).', icon: 'Activity' },
                { name: 'Bhastrika Pranayama', benefit: 'Increases oxygenation and fire.', icon: 'Wind' }
            ],
            medicines: ['Chyawanprash', 'Agastya Haritaki', 'Giloy Ghan Vati', 'Amalaki Rasayana']
        },
        recommendedHerbs: ['amla', 'giloy', 'tulsi', 'ashwagandha']
    },
    {
        id: '7',
        name: 'Hair Care',
        name_hi: 'बालों की देखभाल',
        slug: 'hair-care',
        image: '/images/conditions/hair-care.jpg',
        description: 'Prevent hair fall and greying with Ayurvedic Keshya herbs.',
        description_hi: 'आयुर्वेदिक केश्य जड़ी बूटियों के साथ बालों का झड़ना और सफेद होना रोकें।',
        details: {
            overview: 'In Ayurveda, hair is a byproduct (Mala) of Asthi Dhatu (Bone tissue). If bones are weak, hair falls. Scalp health depends on Kapha (Lubrication) and Pitta (Metabolism). Excess heat (Pitta) burns hair roots leading to falling and greying.',
            ayurvedic_explanation: 'Khalitya (Hair loss) provides clues to internal balance. Pitta causes thinning/greying (Palitya), Vata causes dryness/split ends, and Kapha causes oily dandruff. Herbs used for hair are called "Keshya".',
            types: [
                {
                    name: 'Indralupta (Alopecia)',
                    slug: 'alopecia',
                    description: 'Patchy hair loss due to blocked hair follicles by Vata and Kapha.',
                    severity: 'Visible',
                    symptoms: ['Bald Patches', 'Smooth Scalp', 'No Regrowth'],
                    treatment: 'Pracchana (Needling) followed by application of Gunja paste.',
                    medicines: ['Icchabhedi Ras', 'Gunja Taila']
                },
                {
                    name: 'Darunaka (Dandruff)',
                    slug: 'dandruff',
                    description: 'Dry, flaky, itchy scalp caused by Vata-Kapha aggravation.',
                    severity: 'Stubborn',
                    symptoms: ['White flakes', 'Itching', 'Hair fall'],
                    treatment: 'Shiro Abhyanga with Neem or Dhurdhurpatradi oil.',
                    medicines: ['Arogyavardhini Vati', 'Khadirarishta']
                }
            ],
            symptoms: [
                { text: 'Excessive Hair Fall', icon: 'ArrowDownCircle' },
                { text: 'Premature Greying', icon: 'Moon' },
                { text: 'Dandruff/Itching', icon: 'Wind' },
                { text: 'Thinning Hair', icon: 'Activity' },
                { text: 'Split Ends', icon: 'Check' }
            ],
            causes: ['Chronic Stress', 'Salty/Spicy Food (Excess Pitta)', 'Hard Water', 'Thyroid Imbalance'],
            recommendations: ['Use chemical-free shampoos.', 'Massage scalp twice a week.', 'Cover head in sun.'],
            diet_lifestyle: {
                diet: [
                    '**Iron/Calcium**: Curry leaves, Moringa, Sesame seeds, and Amla.',
                    '**Protein**: Good quality proteins like Dal, Paneer, and Nuts.',
                    '**Cooling**: Coconut water and Cucumber to reduce Pitta.'
                ],
                lifestyle: [
                    '**Shiro Abhyanga**: Head massage increases circulation to follicles.',
                    '**Comb**: Use Neem wood comb to reduce static and dandruff.',
                    '**Sleep**: Lack of sleep increases Pitta, leading to hair fall.'
                ]
            },
            home_remedies: [
                { title: 'Bhringraj Oil', description: 'The absolute best oil for hair growth. Massage warm oil at night.', icon: 'Droplets' },
                { title: 'Amla Hair Pack', description: 'Paste of Amla powder and Yogurt strengthens roots.', icon: 'Sprout' },
                { title: 'Curry Leaves', description: 'Eat 5-6 fresh curry leaves daily empty stomach prevent greying.', icon: 'Leaf' }
            ],
            yoga_asanas: [
                { name: 'Shirshasana (Headstand)', benefit: 'Directs maximum blood to the scalp.', icon: 'ArrowDownCircle' },
                { name: 'Sarvangasana', benefit: 'Balances thyroid function.', icon: 'Activity' },
                { name: 'Adho Mukha Svanasana', benefit: 'Increases circulation to head.', icon: 'Triangle' }
            ],
            medicines: ['Bhringrajasava', 'Saptamrit Lauh', 'Narasimha Rasayana', 'Amalaki Rasayana']
        },
        recommendedHerbs: ['bhringraj', 'amla', 'shikakai', 'brahmi']
    },
    {
        id: '8',
        name: 'Cardiac Care',
        name_hi: 'हृदय देखभाल',
        slug: 'cardiac-care',
        image: '/images/conditions/heart-health.jpg',
        description: 'Support cardiovascular function, manage BP and cholesterol naturally.',
        description_hi: 'हृदय संबंधी कार्यों का समर्थन करें, बीपी और कोलेस्ट्रॉल का प्रबंधन करें।',
        details: {
            overview: 'Ayurveda views the heart (Hridaya) as the seat of consciousness (Ojas) and Prana. Heart issues arise from blockage in channels (Srotas) due to Kapha (Cholesterol) or constriction due to Vata (Stress/BP).',
            ayurvedic_explanation: 'Hridaya Roga is classified by Dosha. Vata type (Angina pain), Pitta type (Burning/Inflammation), and Kapha type (Heaviness/Blockage). Managing Vyana Vayu (circulation) and Sadhaka Pitta (emotions) is key.',
            types: [
                {
                    name: 'Vataja Hridroga (Angina)',
                    slug: 'vataja-hridroga',
                    description: 'Sharp, shifting pain in chest. Palpitations and anxiety.',
                    severity: 'High Alert',
                    symptoms: ['Palpitations', 'Breathlessness', 'Dryness', 'Anxiety'],
                    treatment: 'Vata pacifying therapies. Basti (Enema) and warm oil massages.',
                    medicines: ['Arjuna Ksheerapaka', 'Prabhakar Vati']
                },
                {
                    name: 'Kaphaja Hridroga (Cholesterol)',
                    slug: 'kaphaja-hridroga',
                    description: 'Heaviness in chest, lethargy, blockage in arteries.',
                    severity: 'Chronic',
                    symptoms: ['Heaviness', 'Excess Saliva', 'Drowsiness', 'Congestion'],
                    treatment: 'Kapha reducing diet. Lekhana Basti (Scraping therapies).',
                    medicines: ['Arjuna Bark', 'Guggulu', 'Pushkarmool']
                }
            ],
            symptoms: [
                { text: 'Chest Pain/Heaviness', icon: 'Activity' },
                { text: 'Palpitations', icon: 'HeartPulse' },
                { text: 'Breathlessness', icon: 'Wind' },
                { text: 'High Blood Pressure', icon: 'Gauge' },
                { text: 'Fatigue', icon: 'Battery' }
            ],
            causes: ['Chronic Stress', 'Fried/Oily Foods', 'Lack of Sleep', 'Suppression of emotions'],
            recommendations: ['Manage stress.', 'Reduce salt intake.', 'Daily walking.'],
            diet_lifestyle: {
                diet: [
                    '**Superfoods**: Garlic, Flaxseeds, Walnuts, and Bottle Gourd (Lauki).',
                    '**Avoid**: Deep fried foods, red meat, excessive salt.',
                    '**Oil**: Use Mustard or Olive oil sparingly.'
                ],
                lifestyle: [
                    '**Pranayama**: Anulom Vilom helps calm the heart rate.',
                    '**Sleep**: 7-8 hours of quality sleep is vital for heart repair.',
                    '**Emotions**: Practice forgiveness and calmness.'
                ]
            },
            home_remedies: [
                { title: 'Arjuna Tea', description: 'Boil Arjuna bark powder in milk and water (Ksheerapaka). Best tonic for heart.', icon: 'CupSoda' },
                { title: 'Garlic Clove', description: 'Swallow 1 garlic clove daily on empty stomach for cholesterol.', icon: 'Sprout' },
                { title: 'Bottle Gourd Juice', description: 'Fresh Lauki juice in the morning regulates acidity and BP.', icon: 'GlassWater' }
            ],
            yoga_asanas: [
                { name: 'Shavasana', benefit: 'Deep relaxation for the heart and mind.', icon: 'Moon' },
                { name: 'Anulom Vilom', benefit: 'Balances blood pressure.', icon: 'Wind' },
                { name: 'Tadasana', benefit: 'Improves circulation.', icon: 'PersonStanding' }
            ],
            medicines: ['Arjunarishta', 'Prabhakar Vati', 'Hridayarnava Rasa', 'Mukta Pishti']
        },
        recommendedHerbs: ['arjuna', 'garlic', 'dalchini', 'rudraksha']
    },
    {
        id: '9',
        name: 'Respiratory',
        name_hi: 'श्वसन क्रिया',
        slug: 'respiratory',
        image: '/images/conditions/respiratory.jpg',
        description: 'Clear congestion and breathe freely with Prana-enhancing herbs.',
        description_hi: 'जकड़न साफ़ करें और प्राण-वर्धक जड़ी-बूटियों के साथ खुलकर सांस लें।',
        details: {
            overview: 'Respiratory health (Pranavaha Srotas) is vital for life. Issues range from Kasa (Cough) to Shwasa (Asthma). These usually involve an imbalance of Kapha (Mucus) and Vata (Dryness/Spasm) in the lungs.',
            ayurvedic_explanation: 'The seat of Kapha is the chest. When Kapha accumulates, it blocks the flow of Prana Vayu. Treatment involves "Kapha Nissarana" (Expelling mucus) and "Vata Anulomana" (Regulating air flow).',
            types: [
                {
                    name: 'Tamaka Shwasa (Asthma)',
                    slug: 'asthma',
                    description: 'Episodes of breathlessness, wheezing, and chest tightness.',
                    severity: 'Chronic',
                    symptoms: ['Wheezing', 'Shortness of Breath', 'Cough at night'],
                    treatment: 'Bronchodilation. Strong heating herbs like Pushkarmool.',
                    medicines: ['Shwas Kuthar Ras', 'Kanakasava']
                },
                {
                    name: 'Pratishyay (Chronic Cold)',
                    slug: 'chronic-cold',
                    description: 'Recurrent runny nose, sneezing, and heaviness in head.',
                    severity: 'Common',
                    symptoms: ['Sneezing', 'Runny Nose', 'Sinusitis'],
                    treatment: 'Nasya and steam inhalation.',
                    medicines: ['Lakshmi Vilas Ras', 'Chitraka Haritaki']
                }
            ],
            symptoms: [
                { text: 'Cough (Dry/Wet)', icon: 'Wind' },
                { text: 'Breathlessness', icon: 'Activity' },
                { text: 'Mucus/Phlegm', icon: 'Droplets' },
                { text: 'Chest Pain', icon: 'AlertCircle' },
                { text: 'Sore Throat', icon: 'Mic' }
            ],
            causes: ['Exposure to Cold/Wind', 'Dust/Pollen Allergies', 'Cold Drinks/Ice Cream', 'Suppression of Sneezing'],
            recommendations: ['Keep chest warm.', 'Drink warm turmeric water.', 'Avoid dairy at night.'],
            diet_lifestyle: {
                diet: [
                    '**Spices**: Black Pepper, Pippali (Long Pepper), Ginger, and Tulsi.',
                    '**Foods**: Goat milk, Old Rice, and Horse Gram soup.',
                    '**Avoid**: Curd, Banana, Ice cream, and Heavy sweets.'
                ],
                lifestyle: [
                    '**Steam Inhalation**: Add eucalyptus oil or Ajwain to steam.',
                    '**Pranayama**: Kapalbhati aids in clearing lungs.',
                    '**Avoid AC**: Direct cold drafts worsen the condition.'
                ]
            },
            home_remedies: [
                { title: 'Tulsi & Ginger Tea', description: 'Strong decoction of Tulsi, Ginger, and Black Pepper with Honey.', icon: 'CupSoda' },
                { title: 'Sitopaladi & Honey', description: 'Lick 1/2 tsp Sitopaladi Churna mixed with honey for cough.', icon: 'Sprout' },
                { title: 'Turmeric Smoke', description: 'Inhale smoke of burning turmeric root for instant nose clearing.', icon: 'Wind' }
            ],
            yoga_asanas: [
                { name: 'Matsyasana (Fish Pose)', benefit: 'Expands the chest and lungs.', icon: 'Activity' },
                { name: 'Bhujangasana (Cobra)', benefit: 'Opens up the chest region.', icon: 'Sun' },
                { name: 'Anulom Vilom', benefit: 'Clears nasal blockages.', icon: 'Wind' }
            ],
            medicines: ['Sitopaladi Churna', 'Talisadi Churna', 'Vasavaleha', 'Kanakasava']
        },
        recommendedHerbs: ['tulsi', 'vasaka', 'mulethi', 'pippali']
    },
    {
        id: '10',
        name: 'Men\'s Health',
        name_hi: 'पुरुष स्वास्थ्य',
        slug: 'mens-health',
        image: '/images/conditions/sexual-health.jpg',
        description: 'Boost vitality, stamina, and reproductive health naturally.',
        description_hi: 'प्राकृतिक रूप से जीवन शक्ति, सहनशक्ति और प्रजनन स्वास्थ्य को बढ़ावा दें।',
        details: {
            overview: 'Ayurveda focuses on "Vajikarana" (Virility Therapy) for men\'s health. It aims to improve the quality of Shukra Dhatu (Reproductive Tissue) and Ojas (Vital Essence) to enhance strength, stamina, and vitality.',
            ayurvedic_explanation: 'Shukra Dhatu is the essence of all tissues. Stress (Chinta), improper diet, and excessive indulgence deplete Shukra. Treatment involves "Rasayana" (Rejuvenation) and "Vajikarana" herbs to build core strength.',
            types: [
                {
                    name: 'Klaibya (Dysfunction)',
                    slug: 'klaibya',
                    description: 'Loss of ability or drive due to psychological (mental stress) or physiological factors.',
                    severity: 'Moderate',
                    symptoms: ['Low Libido', 'Performance Anxiety', 'Fatigue'],
                    treatment: 'Psychological counseling (Satvavajaya) and nourishing herbs.',
                    medicines: ['Vanari Kalpa', 'Ashwagandha']
                },
                {
                    name: 'Shukra Kshaya (Low Count)',
                    slug: 'shukra-kshaya',
                    description: 'Depletion of reproductive fluids due to heat (Pitta) or aging (Vata).',
                    severity: 'Chronic',
                    symptoms: ['Weakness', 'Lower Back Pain', 'Mood Swings'],
                    treatment: 'Cooling, nutritive diet (Ghee, Milk).',
                    medicines: ['Musli Pak', 'Shatavari']
                }
            ],
            symptoms: [
                { text: 'Low Energy/Stamina', icon: 'Battery' },
                { text: 'Performance Issues', icon: 'AlertCircle' },
                { text: 'Premature Hair Loss', icon: 'User' },
                { text: 'Muscle Weakness', icon: 'Activity' },
                { text: 'Stress/Anxiety', icon: 'Brain' }
            ],
            causes: ['High Stress Levels', 'Smoking & Alcohol', 'Lack of Sleep', 'Nutrient Deficiency'],
            recommendations: ['Practice Brahmacharya (Moderation).', 'Consume Ghee and Milk.', 'Strength training.'],
            diet_lifestyle: {
                diet: [
                    '**Vajikarana Foods**: Milk, Ghee, Almonds, Dates, and Saffron.',
                    '**Spices**: Cardamom, Nutmeg (Jaiphal), and Garlic.',
                    '**Avoid**: Excessive sour, salty, and spicy foods (Pitta aggravating).'
                ],
                lifestyle: [
                    '**Sleep**: Vital for testosterone production.',
                    '**Massage**: Abhyanga with Ashwagandha oil helps nerves.',
                    '**Exercise**: Weight bearing exercises increase testosterone.'
                ]
            },
            home_remedies: [
                { title: 'Ashwagandha Milk', description: 'Boil 1 tsp Ashwagandha root powder in milk. Drink at bedtime for stamina.', icon: 'Check' },
                { title: 'Dates & Ghee', description: 'Soak dates in ghee and eat 2 daily for energy.', icon: 'Sun' },
                { title: 'Shilajit Resin', description: 'Take pea-sized pure Shilajit resin in warm water/milk.', icon: 'Mountain' }
            ],
            yoga_asanas: [
                { name: 'Setu Bandhasana (Bridge)', benefit: 'Strengthens pelvic floor and improves circulation.', icon: 'Activity' },
                { name: 'Kumbhakasana (Plank)', benefit: 'Builds core strength and endurance.', icon: 'PersonStanding' },
                { name: 'Paschimottanasana', benefit: 'Calms the mind and improves blood flow to pelvic region.', icon: 'Moon' }
            ],
            medicines: ['Shilajit Gold', 'Ashwagandha Churna', 'Musli Pak', 'Kaunch Beej Churna']
        },
        recommendedHerbs: ['shilajit', 'safed-musli', 'ashwagandha', 'kaunch-beej']
    },
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
        },
        sources: [
            'Chandrasekhar, K., et al. "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults." Indian journal of psychological medicine 34.3 (2012): 255.',
            'Charaka Samhita, Chikitsa Sthana, Chapter 1 (Rasayana)'
        ]
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
            ingredients: ['Amla (Indian Gooseberry)', 'Ghee (Clarified Butter)', 'Raw Honey', 'Ashwagandha', 'Pippali (Long Pepper)', 'Dashamoola (Ten Roots)'],
            dosage: '1-2 teaspoons (10-20g) daily, preferably in the morning on an empty stomach with warm milk.',
            indication: 'General debility, respiratory ailments (Asthma, Cough), low immunity, and fatigue.',
            safety: 'Safe for all ages. Diabetics should choose sugar-free versions. May increase body heat slightly.',
            classical_ref: 'Charaka Samhita'
        },
        details_hi: {
            ingredients: ['आंवला', 'घी', 'कच्चा शहद', 'अश्वगंधा', 'पिपली', 'दशमूल'],
            dosage: '1-2 चम्मच (10-20 ग्राम) रोजाना, सुबह खाली पेट गर्म दूध के साथ।',
            indication: 'सामान्य कमजोरी, सांस की बीमारियां (अस्थमा, खांसी), कम इम्युनिटी और थकान।',
            safety: 'सभी उम्र के लिए सुरक्षित। मधुमेह रोगियों को शुगर-फ्री संस्करण चुनना चाहिए। शरीर की गर्मी थोड़ी बढ़ा सकता है।',
            classical_ref: 'चरक संहिता'
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
            ingredients: ['Ashoka Bark', 'Jaggery', 'Dhataki', 'Musta', 'Ginger', 'Daruharidra'],
            dosage: '15-30ml mixed with an equal amount of lukewarm water, twice daily after meals.',
            indication: 'Menorrhagia (heavy periods), dysmenorrhea (painful periods), PCOS, and uterine inflammation.',
            safety: 'Contains self-generated alcohol (<10%). Avoid if suffering from hyperacidity or ulcers.',
            classical_ref: 'Bhaishajya Ratnavali'
        },
        details_hi: {
            ingredients: ['अशोक की छाल', 'गुड़', 'धतकी', 'मुस्ता', 'अदरक', 'दारुहरिद्रा'],
            dosage: '15-30 मिली बराबर मात्रा में गुनगुने पानी के साथ, भोजन के बाद दिन में दो बार।',
            indication: 'मेनोरेजिया (भारी अवधि), कष्टार्तव (दर्दनाक अवधि), पीसीओएस, और गर्भाशय की सूजन।',
            safety: 'इसमें स्वयं उत्पन्न अल्कोहल (<10%) होता है। हाइपरएसिडिटी या अल्सर होने पर बचें।',
            classical_ref: 'भैषज्य रत्नावली'
        }
    },
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
        details: {
            ingredients: ['Amalaki (Amla)', 'Bibhitaki', 'Haritaki'],
            dosage: '1 teaspoon (3-5g) with warm water at bedtime for cleansing, or with ghee/honey for eye health.',
            indication: 'Chronic constipation, indigestion, vision problems, hair fall.',
            safety: 'Safe for long-term use. Avoid during pregnancy or if suffering from diarrhea.',
            classical_ref: 'Sarangadhara Samhita'
        },
        details_hi: {
            ingredients: ['आमलकी (आंवला)', 'विभीतकी', 'हरीतकी'],
            dosage: 'सफाई के लिए सोते समय गर्म पानी के साथ 1 चम्मच (3-5 ग्राम), या आंखों के स्वास्थ्य के लिए घी/शहद के साथ।',
            indication: 'जीर्ण कब्ज, अपच, दृष्टि की समस्याएं, बालों का झड़ना।',
            safety: 'लंबे समय तक उपयोग के लिए सुरक्षित। गर्भावस्था के दौरान या दस्त होने पर बचें।',
            classical_ref: 'शारंगधर संहिता'
        }
    },
    {
        id: '4',
        name: 'Kanchanar Guggulu',
        name_hi: 'कचनार गुग्गुलु',
        slug: 'kanchanar-guggulu',
        category: 'Guggulu',
        image: '/images/product-generic.png',
        description: 'Tablet for thyroid health and reducing cysts/growths.',
        description_hi: 'थायराइड स्वास्थ्य और अल्सर/गांठ को कम करने के लिए टैबलेट।',
        benefits: ['Thyroid Support', 'Lymphatic Detox', 'PCOS'],
        details: {
            ingredients: ['Kanchanar Bark', 'Shuddha Guggulu', 'Triphala', 'Trikatu (Pepper/Ginger)', 'Varuna Bark'],
            dosage: '2 tablets twice a day with warm water or herbal decoction (Munditika) on empty stomach.',
            indication: 'Hypothyroidism, PCOS, Lipoma, Lymphadenitis, Goiter.',
            safety: 'Consult a doctor during pregnancy and lactation. May lower blood sugar slightly.',
            classical_ref: 'Sahasrayogam'
        },
        details_hi: {
            ingredients: ['कचनार की छाल', 'शुद्ध गुग्गुल', 'त्रिफला', 'त्रिकटु (काली मिर्च/अदरक)', 'वरुण की छाल'],
            dosage: 'खाली पेट गर्म पानी या हर्बल काढ़े (मुंडिका) के साथ दिन में दो बार 2 गोलियां।',
            indication: 'हाइपोथायरायडिज्म, पीसीओएस, लिपोमा, लिम्फ नोड्स की सूजन, गण्डमाला।',
            safety: 'गर्भावस्था और स्तनपान के दौरान डॉक्टर से परामर्श करें। रक्त शर्करा को थोड़ा कम कर सकता है।',
            classical_ref: 'सहस्रयोगम'
        }
    },
    {
        id: '5',
        name: 'Sitopaladi Churna',
        name_hi: 'सितोपलादि चूर्ण',
        slug: 'sitopaladi-churna',
        category: 'Churna',
        image: '/images/product-generic.png',
        description: 'Trusted powder for cough, cold, and respiratory issues.',
        description_hi: 'खांसी, सर्दी और सांस की समस्याओं के लिए विश्वसनीय पाउडर।',
        benefits: ['Relieves Cough', 'Clears Chest', 'Fever Support'],
        details: {
            ingredients: ['Mishri (Rock Sugar)', 'Vanshalochan (Bamboo Silica)', 'Pippali', 'Cardamom', 'Cinnamon'],
            dosage: '1/2 to 1 teaspoon (1-3g) mixed with honey and ghee, taken 3-4 times a day.',
            indication: 'Seasonal cough, cold, fever, burning sensation in hands/feet, weak digestion.',
            safety: 'Safe for children and pregnant women. Diabetics should use cautiously due to sugar content.',
            classical_ref: 'Sharangdhara Samhita'
        },
        details_hi: {
            ingredients: ['मिश्री', 'वंशलोचन', 'पिपली', 'इलायची', 'दालचीनी'],
            dosage: 'शहद और घी के साथ मिलाकर 1/2 से 1 चम्मच (1-3 ग्राम), दिन में 3-4 बार लें।',
            indication: 'मौसमी खांसी, सर्दी, बुखार, हाथ/पैर में जलन, कमजोर पाचन।',
            safety: 'बच्चों और गर्भवती महिलाओं के लिए सुरक्षित। चीनी की मात्रा के कारण मधुमेह रोगियों को सावधानी से उपयोग करना चाहिए।',
            classical_ref: 'शारंगधर संहिता'
        }
    },
    {
        id: '6',
        name: 'Brahmi Ghrita',
        name_hi: 'ब्रह्मी घृत',
        slug: 'brahmi-ghrita',
        category: 'Ghrita',
        image: '/images/product-generic.png',
        description: 'Medicated ghee for memory and mental clarity.',
        description_hi: 'याददाश्त और मानसिक स्पष्टता के लिए औषधीय घी।',
        benefits: ['Memory Boost', 'Mental Calm', 'Sleep Aid'],
        details: {
            ingredients: ['Ghee (Cow Milk Fat)', 'Brahmi Juice', 'Shankhpushpi', 'Vacha', 'Kushtha'],
            dosage: '1 teaspoon (5-10g) with warm milk on an empty stomach in the morning.',
            indication: 'Memory loss, lack of concentration, anxiety, epilepsy, insanity.',
            safety: 'Monitor cholesterol if taken in high doses. Avoid if suffering from acute fever.',
            classical_ref: 'Ashtanga Hridayam'
        },
        details_hi: {
            ingredients: ['घी (गाय के दूध की वसा)', 'ब्रह्मी का रस', 'शंखपुष्पी', 'वचा', 'कुष्ठ'],
            dosage: 'सुबह खाली पेट गर्म दूध के साथ 1 चम्मच (5-10 ग्राम)।',
            indication: 'याददाश्त में कमी, एकाग्रता की कमी, चिंता, मिर्गी, उन्माद।',
            safety: 'उच्च खुराक लेने पर कोलेस्ट्रॉल की निगरानी करें। तेज बुखार होने पर बचें।',
            classical_ref: 'अष्टांग हृदयम'
        }
    }
];

export const products = [
    {
        id: '1',
        name: 'Organic Ashwagandha Powder',
        name_hi: 'ऑर्गेनिक अश्वगंधा पाउडर',
        slug: 'organic-ashwagandha',
        brand: 'Organic India',
        price: '₹580', // Changed to INR for context if preferred, or keep $ but INR is better for 'best of best' in India context. Let's stick to user preference or context. Previous was $. I'll switch to INR as it's more authentic for Ayurveda.
        rating: 4.8,
        image: '/images/product-generic.png',
        category: 'Supplements',
        affiliateLink: 'https://www.amazon.in/dp/B000000001',
        seller: 'Amazon',
        trustBadges: ['USDA Organic', 'Non-GMO', 'GMP Certified', 'Vegan'],
        specs: {
            form: 'Powder',
            quantity: '100g',
            shelfLife: '24 Months',
            origin: 'India'
        },
        details: {
            description: '100% Certified Organic Ashwagandha Root Powder. A natural adaptogen to help manage stress and support energy levels. Sourced from organic farms in Bundelkhand.',
            reviews: [
                { user: 'Sarah M.', comment: 'Great quality, really helps me sleep.', rating: 5 },
                { user: 'Rahul K.', comment: 'Authentic taste and smell. Highly recommended.', rating: 5 },
                { user: 'John D.', comment: 'Good packaging, fast delivery.', rating: 4 }
            ]
        }
    },
    {
        id: '2',
        name: 'Kumkumadi Tailam',
        name_hi: 'कुंकुमादि तेलम',
        slug: 'kumkumadi-tailam',
        brand: 'Kama Ayurveda',
        price: '₹3,195',
        rating: 4.9,
        image: '/images/product-generic.png',
        category: 'Skincare',
        affiliateLink: 'https://www.amazon.in/dp/B000000002',
        seller: 'Amazon',
        trustBadges: ['Ayurvedic Proprietary', 'Cruelty Free', 'Chemical Free'],
        specs: {
            form: 'Oil',
            quantity: '12ml',
            shelfLife: '36 Months',
            origin: 'Kerala, India'
        },
        details: {
            description: 'Miraculous beauty fluid. An Ayurvedic night serum made with rare Saffron to brighten skin and reduce pigmentation. Prescribed in ancient texts for glowing skin.',
            reviews: [
                { user: 'Priya S.', comment: 'Expensive but worth every rupee. My skin is glowing.', rating: 5 },
                { user: 'Anjali R.', comment: 'Magic in a bottle for dark circles.', rating: 5 }
            ]
        }
    },
    {
        id: '3',
        name: 'Triphala Juice',
        name_hi: 'त्रिफला रस',
        slug: 'triphala-juice',
        brand: 'Kapiva',
        price: '₹299',
        rating: 4.5,
        image: '/images/product-generic.png',
        category: 'Juices',
        affiliateLink: 'https://www.flipkart.com/search?q=kapiva+triphala+juice',
        seller: 'Flipkart',
        trustBadges: ['Keto Friendly', 'No Added Sugar', 'GMP Certified'],
        specs: {
            form: 'Liquid',
            quantity: '1L',
            shelfLife: '12 Months',
            origin: 'India'
        },
        details: {
            description: 'Cold-pressed Triphala juice for digestive health. Made from fresh Amla, Baheda, and Haritaki. Supports digestion and rejuvenation.',
            reviews: [
                { user: 'Vikram S.', comment: 'Good for daily detox.', rating: 4 }
            ]
        }
    },
    {
        id: '4',
        name: 'Chyawanprash Awaleha',
        name_hi: 'च्यवनप्राश अवलेह',
        slug: 'products-chyawanprash',
        brand: 'Dabur',
        price: '₹395',
        rating: 4.7,
        image: '/images/product-generic.png',
        category: 'Supplements',
        affiliateLink: 'https://www.amazon.in/dp/B000000004',
        seller: 'Amazon',
        trustBadges: ['Clinically Tested', 'Immunity Booster', 'Family Pack'],
        specs: {
            form: 'Paste (Jam)',
            quantity: '1kg',
            shelfLife: '36 Months',
            origin: 'India'
        },
        details: {
            description: 'Traditional time-tested recipe for daily immunity. Contains goodness of Amla and 40+ herbs. Protects from illness.',
            reviews: [
                { user: 'Generic User', comment: 'Taste is nostalgic.', rating: 5 }
            ]
        }
    },
    {
        id: '5',
        name: 'Kesini Hair Oil',
        name_hi: 'केसिनी हेयर ऑयल',
        slug: 'kesini-hair-oil',
        brand: 'Kottakkal',
        price: '₹140',
        rating: 4.6,
        image: '/images/product-generic.png',
        category: 'Hair Care',
        affiliateLink: 'https://www.amazon.in/dp/B000000005',
        seller: 'Amazon',
        trustBadges: ['Authentic Kerala Ayurveda', 'Herbal', 'No Mineral Oil'],
        specs: {
            form: 'Oil',
            quantity: '100ml',
            shelfLife: '24 Months',
            origin: 'Kerala, India'
        },
        details: {
            description: 'Herbal oil for hair fall control and scalp health. Enriched with Hibiscus and Indigo. Cooling for the head.',
            reviews: [
                { user: 'Meera K.', comment: 'Stopped my hair fall in 2 weeks.', rating: 4 }
            ]
        }
    },
    {
        id: '6',
        name: 'Ayurvedic Toothpaste',
        name_hi: 'आयुर्वेदिक टूथपेस्ट',
        slug: 'ayurveda-toothpaste',
        brand: 'Himalaya',
        price: '₹95',
        rating: 4.4,
        image: '/images/product-generic.png',
        category: 'Personal Care',
        affiliateLink: 'https://www.amazon.in/dp/B000000006',
        seller: 'Amazon',
        trustBadges: ['Fluoride Free', '100% Vegetarian', 'Gum Expert'],
        specs: {
            form: 'Paste',
            quantity: '150g',
            shelfLife: '24 Months',
            origin: 'India'
        },
        details: {
            description: 'Fluoride-free herbal toothpaste with Neem, Pomegranate, and Triphala. Promotes healthy gums and prevents cavities.',
            reviews: [
                { user: 'Amit B.', comment: 'Fresh breath all day.', rating: 5 }
            ]
        }
    },
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
