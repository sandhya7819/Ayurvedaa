
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
            overview: 'In Ayurveda, Diabetes is known as "Madhumeha" (Sweet Urine), often described as a rich man\'s disease due to lifestyle factors. It is a metabolic disorder (Vata-Kapha) where the patient passes honey-like (sweet and astringent) urine. Modern science categorizes it effectively, but Ayurveda offers a holistic approach treating the root cause (sedentary lifestyle & diet) rather than just symptoms.',
            ayurvedic_explanation: 'Madhumeha is one of the 20 types of Prameha (Urinary Disorders). It begins with an aggravation of Kapha dosha due to sedentary habits and excess sugar intake, which vitiates the Meda (fat) and Mamsa (muscle) tissues. Eventually, Vata also gets aggravated, leading to the deterioration of Dhatus (tissues) and Ojas (vitality). This blockage in the pancreas (Agnyashaya) impairs insulin production. The treatment focuses on "Apatarpana" (De-nourishment/Detox) for obese patients and "Santarpana" (Nourishment) for lean patients.',
            types: [
                {
                    name: 'Kaphaja Prameha (Early Stage)',
                    slug: 'kaphaja-prameha',
                    description: 'The early, reversible stage often corresponding to Prediabetes or early Type 2. It involves the vitiation of Kapha dosha (Water & Earth elements), typically caused by sedentary habits, excess sleep, and consumption of heavy, sweet, cooling foods.',
                    severity: 'Mild',
                    symptoms: ['Cloudy Urine (Avila Mutrata)', 'Heaviness in Body (Gaurav)', 'Lethargy (Tandra)', 'Excessive Sleep', 'Sweet Taste in Mouth', 'Obesity', 'Loose Limbs'],
                    treatment: 'Kapha-pacifying diet (lighter, spicy, bitter foods). Intense physical activity (Vyayama) and Udwarthanam (dry powder massage) are critical to liquefy the fat and clear channels.',
                    medicines: ['Chandraprabha Vati', 'Shilajit', 'Triphala Guggulu', 'Arogyavardhini Vati']
                },
                {
                    name: 'Pittaja Prameha (Acute Stage)',
                    slug: 'pittaja-prameha',
                    description: 'An acute stage where Pitta dosha (Fire element) is involved along with Kapha. This is often associated with inflammation, heat in the body, and can lead to infections (like UTIs) if uncontrolled. Requires careful balancing of cooling and drying therapies.',
                    severity: 'Moderate',
                    symptoms: ['Acidic/Blueish Urine', 'Burning Sensation (Daha)', 'Excessive Thirst (Trishna)', 'Giddiness (Bhrama)', 'Loose Stools', 'Redness in Eyes', 'Foul Smell'],
                    treatment: 'Pitta-pacifying cooling diet. Avoid sour, salty, and spicy foods. Use bitter herbs like Neem, Guduchi, and Amla to cool the body and purify blood without increasing sugar.',
                    medicines: ['Nishamalaki', 'Vasant Kusumakar Ras', 'Guduchi Satva', 'Phalatrikadi Kwath']
                },
                {
                    name: 'Vataja Prameha (Chronic Stage)',
                    slug: 'vataja-prameha',
                    description: 'The most advanced and difficult stage (Madhumeha). Involves Vata (Air) aggravation leading to tissue depletion (Dhatu Kshaya) and loss of Ojas (Vitality). This often corresponds to long-standing Type 1 or Type 2 diabetes with complications.',
                    severity: 'Severe',
                    symptoms: ['Honey-like Urine (Kashaya-Madhura)', 'Rapid Weight Loss', 'Extreme Fatigue', 'Numbness', 'Insomnia', 'Constipation', 'Muscle Wasting'],
                    treatment: 'Vata-pacifying nourishment along with blood sugar control. Emphasize Rasayanas (rejuvenators) to rebuild tissues while managing glucose. Avoid dry/rough foods; use Ghee and milk cautiously.',
                    medicines: ['Vasant Kusumakar Ras', 'Shilajit', 'Ashwagandha Arishta', 'Jambvasava', 'Suvarna Vanga']
                }
            ],
            symptoms: [
                { text: 'Excessive thirst (Polydipsia)', icon: 'Droplets' },
                { text: 'Frequent urination (Polyuria)', icon: 'Clock' },
                { text: 'Sweet taste in mouth', icon: 'Candy' },
                { text: 'Numbness in hands/feet', icon: 'Activity' },
                { text: 'Unexplained weight loss', icon: 'Scale' },
                { text: 'Extreme Fatigue & Lethargy', icon: 'Battery' },
                { text: 'Blurred vision', icon: 'Eye' },
                { text: 'Slow wound healing', icon: 'Bandage' },
                { text: 'Burning sensation in palms/soles', icon: 'Flame' },
                { text: 'Recurrent infections (Skin/UTI)', icon: 'AlertCircle' }
            ],
            causes: [
                'Excessive intake of sugar, jaggery, curd, and fresh grains',
                'Sedentary lifestyle (Asyasukbam) & lack of exercise',
                'Sleeping during the day (Diwaswapna)',
                'Stress, anxiety, and grief (Chinta)',
                'Genetic factors (Sahaja - inherited from parents)',
                'Overeating (Adhyashana) & eating cold/fatty foods',
                'Excessive intake of milk & milk products'
            ],
            recommendations: [
                'Follow a Kapha-Vata balancing diet based on body type.',
                'First principle of treatment is "Nidana Parivarjana" (Avoiding the cause).',
                'Engage in daily vigorous exercise (Vyayama) like brisk walking.',
                'Drink water stored in a copper vessel (Tamra Jal).'
            ],
            diet_lifestyle: {
                diet: [
                    '**Cereals (Dhatus)**: Barley (Jau) is the best grain for diabetes. Old rice (1+ year), Bajra, Ragi, Kodro, and Buckwheat are excellent. Avoid refined flour (Maida) and new wheat.',
                    '**Pulses (Dals)**: Horse gram (Kulthi), Green gram (Moong), Bengal gram (Chana), and Arhar dal. Avoid Urad dal.',
                    '**Vegetables (Shaka)**: Bitter Gourd (Karela) - best for insulin sensitivity. Methi, Drumstick, Neem, Bottle Gourd, Okra, Broccoli, and leafy greens. Avoid potatoes, sweet potatoes, and colocasia.',
                    '**Spices (Deepana)**: Turmeric (Haldi) - anti-inflammatory. Cinnamon (Dalchini) - mimics insulin. Fenugreek (Methi), Black Pepper, Cumin, and Curry leaves.',
                    '**Fruits (Phala)**: Jamun (Indian Blackberry) - seeds are medicine. Amla, Guava, Papaya, Orange, and Pomegranate. Strictly avoid Mango, Banana, Custard Apple, and Chikoo.',
                    '**Oils (Sneha)**: Mustard oil, Til (Sesame) oil, or Olive oil. Use Cow Ghee in moderation (1 tsp/day) if lean. Avoid buffalo ghee and refined oils.',
                    '**Fluids**: Warm water is best. Buttermilk (Takra) with jeera/heeng. Avoid fruit juices, cold drinks, and alcohol.',
                    '**Fiber Intake**: A high fiber intake (25-30g/day) helps slow glucose absorption. Include flaxseeds and chia seeds.'
                ],
                lifestyle: [
                    '**Exercise (Vyayama)**: Brisk walking for 45 mins daily is non-negotiable. Interval training is beneficial.',
                    '**Dry Massage (Udvartana)**: Massage with Triphala powder or chickpea flour to liquefy subcutaneous fat and reduce Kapha.',
                    '**Sleep Routine**: Wake up before sunrise (Brahma Muhurta). STRICTLY avoid daytime sleeping (Diwaswapna) as it increases Kapha instantly.',
                    '**Foot Care**: Inspect feet daily for cuts or dryness. Massage soles with warm sesame oil before bed.',
                    '**Bath**: Take warm baths with Neem leaves or Turmeric water to prevent skin infections.',
                    '**Mental Health**: Stress raises blood sugar. Practice Pranayama (Anulom Vilom) and Meditation daily.'
                ]
            },
            home_remedies: [
                { title: 'Methi Dana (Fenugreek)', description: 'Soak 1 tsp fenugreek seeds overnight. Drink the water and chew the seeds in the morning. Great for fasting blood sugar.', image: '/images/remedies/methi.jpg', icon: 'Sprout' },
                { title: 'Jamun Seed Powder', description: 'Take 1 tsp of dried Jamun seed powder with warm water twice daily. It reduces urine sugar frequency.', image: '/images/remedies/jamun.jpg', icon: 'Disc' },
                { title: 'Amla & Turmeric', description: 'Mix equal parts of Amla powder and Turmeric powder (Nisha-Amalaki yoga). Take 1 tsp daily on an empty stomach.', image: '/images/remedies/amla.jpg', icon: 'Eraser' },
                { title: 'Karela Juice', description: 'Drink 20-30ml fresh Bitter Gourd juice mixed with a pinch of turmeric early morning.', image: '/images/remedies/karela.jpg', icon: 'GlassWater' },
                { title: 'Paneer Dodi', description: 'Soak 10-12 flowers in water overnight. Filter and drink in morning. Known as "Indian Rennet" for diabetes.', image: '/images/remedies/paneer-dodi.jpg', icon: 'Flower' }
            ],
            yoga_asanas: [
                { name: 'Mandukasana (Frog Pose)', benefit: 'Stimulates the pancreas and improves insulin secretion.', image: '/images/yoga/mandukasana.jpg', icon: 'ArrowDownCircle' },
                { name: 'Ardha Matsyendrasana', benefit: 'Twisting pose that squeezes the abdominal organs and pancreas.', image: '/images/yoga/ardha-matsyendrasana.jpg', icon: 'RotateCw' },
                { name: 'Surya Namaskar', benefit: 'Improves metabolism and reduces insulin resistance.', image: '/images/yoga/surya-namaskar.jpg', icon: 'Sun' },
                { name: 'Kapalbhati Pranayama', benefit: 'Cleanses toxins and improves pancreatic efficiency.', image: '/images/yoga/kapalbhati.jpg', icon: 'Wind' }
            ],
            dos_and_donts: {
                dos: ['Drink warm water throughout the day.', 'Eat lighter dinner by 7 PM.', 'Manage stress with Meditation.', 'Chew food properly (32 times).'],
                donts: ['Do not suppress natural urges (Vega Dharana).', 'Avoid alcohol and smoking.', 'Do not walk barefoot to prevent injury.', 'Avoid plastic water bottles.']
            },
            medicines: ['Chandraprabha Vati', 'Vasant Kusumakar Ras', 'Triphala Churna', 'Nisha Amalaki', 'Shilajit', 'Gudmar Churna', 'Arogyavardhini Vati']
        },
        details_hi: {
            overview: 'आयुर्वेद में मधुमेह को "मधुमेह" (मीठा मूत्र) के रूप में जाना जाता है। यह केवल रक्त में शर्करा का बढ़ना नहीं है, बल्कि यह एक चयापचय विकार (Metabolic Disorder) है जो मुख्य रूप से कफ और वात दोष के असंतुलन से होता है। आधुनिक विज्ञान इसे जीवनशैली से जुड़ा रोग मानता है, और आयुर्वेद भी इसका मूल कारण "आस्यासुखम्" (आरामदायक जीवन) मानता है।',
            ayurvedic_explanation: 'मधुमेह 20 प्रकार के प्रमेह (मूत्र संबंधी विकारों) में से एक है। इसकी शुरुआत कफ दोष के बिगड़ने से होती है जो बैठने वाली आदतों और अत्यधिक चीनी/मीठा खाने के कारण होती है। यह मेद (चर्बी) और मांस (मांसपेशियों) के ऊतकों को दूषित करता है। अंततः, वात भी बढ़ जाता है, जिससे धातुओं (ऊतकों) और ओजस (जीवन शक्ति) का क्षय होता है। अग्न्याशय (अग्न्याशय) में यह रुकावट इंसुलिन उत्पादन को बाधित करती है।',
            symptoms: [
                'अत्यधिक प्यास (Polydipsia)',
                'बार-बार पेशाब आना, विशेष रूप से रात में (Polyuria)',
                'मुंह में मीठा स्वाद और गला सूखना',
                'हाथों और पैरों में सुन्नता या जलन (Neuropathy)',
                'अस्पष्ट वजन घटना या बढ़ना',
                'थकान और सुस्ती (Drowsiness)',
                'धुंधली दृष्टि (Retinopathy)',
                'घावों का धीमा भरना',
                'मसूड़ों से खून आना या दांतों की समस्याएं'
            ],
            causes: [
                'चीनी, गुड़, दही, नए चावल और भारी भोजन का अत्यधिक सेवन',
                'आरामदायक जीवन शैली (आस्यासुखम्) और व्यायाम की कमी',
                'दिन में सोना (दिवास्वप्न) - यह कफ बढ़ाता है',
                'मानसिक तनाव, चिंता और दुःख (Chinta)',
                'आनुवंशिक कारक (सहज - माता-पिता से)',
                'पेट भर जाने पर भी खाना (अध्यशन)'
            ],
            recommendations: [
                'कफ नाशक आहार का पालन करें।',
                'प्रतिदिन जोरदार व्यायाम करें (45 मिनट पैदल चलें)।',
                'रात में तांबे के बर्तन में रखा पानी सुबह पिएं।'
            ],
            diet_lifestyle: {
                diet: [
                    '**अनाज**: जौ (Barley) मधुमेह के लिए अमृत है। बाजरा, रागी, कोदो और पुराना चावल (1 वर्ष पुराना) खाएं। मैदा और नए गेहूं से बचें।',
                    '**दालें**: कुलथी (Horse gram), मूंग की दाल और चना दाल। उड़द की दाल कम खाएं।',
                    '**सब्जियां**: करेला (सबसे उत्तम), मेथी, सहजन (Drumstick), नीम, लौकी, भिंडी और पत्तेदार सब्जियां। आलू, शकरकंद और अरबी से बचें।',
                    '**मसाले**: हल्दी (संक्रमण रोकती है), दालचीनी (इंसुलिन बढ़ाती है), मेथी दाना, काली मिर्च और जीरा।',
                    '**फल**: जामुन (गुठली सहित), आंवला, अमरूद, पपीता और संतरा। आम, केला, चीकू और सीताफल से सख्त परहेज करें।',
                    '**तेल**: सरसों का तेल या तिल का तेल। घी का प्रयोग सीमित मात्रा में करें।'
                ],
                lifestyle: [
                    '**व्यायाम**: रोजाना 45 मिनट तेज चलना अनिवार्य है। सूर्य नमस्कार और कपालभाति बहुत लाभकारी हैं।',
                    '**सूखी मालिश**: त्रिफला पाउडर से शरीर की सूखी मालिश (उद्वर्तन) करें, इससे अतिरिक्त वसा कम होती है।',
                    '**नींद**: सूर्योदय से पहले उठें (ब्रह्म मुहूर्त)। दिन में सोना बिल्कुल बंद कर दें।',
                    '**पैरों की देखभाल**: रोज पैरों की जांच करें और सोने से पहले तलवों की मालिश करें।',
                    '**स्नान**: नीम के पत्तों या हल्दी वाले गर्म पानी से स्नान करें।'
                ]
            },
            home_remedies: [
                { title: 'मेथी दाना', description: '1 चम्मच मेथी दाना रात भर 1 गिलास पानी में भिगो दें। सुबह खाली पेट पानी पिएं और दाने चबाएं। यह शुगर और कोलेस्ट्रॉल दोनों कम करता है।' },
                { title: 'जामुन गुठली चूर्ण', description: 'जामुन की गुठली को सुखाकर पाउडर बना लें। 1 चम्मच पाउडर दिन में दो बार गर्म पानी के साथ लें। यह स्टार्च को शुगर में बदलने से रोकता है।' },
                { title: 'आंवला और हल्दी', description: 'आंवला पाउडर और हल्दी पाउडर (निशा-आमलकी योग) को बराबर मात्रा में मिलाएं। 1 चम्मच रोजाना सुबह खाली पेट लें। यह अग्न्याशय को शक्ति देता है।' },
                { title: 'करेले का जूस', description: '20-30 मिली ताजे करेले के जूस में एक चुटकी हल्दी और नींबू मिलाकर सुबह खाली पेट पीएं।' },
                { title: 'सदाबहार के फूल', description: 'सदाबहार (Periwinkle) के 2-3 फूल या पत्तियां सुबह खाली पेट चबाने से शुगर लेवल कम होता है।' }
            ],
            yoga_asanas: [
                { name: 'मंडुकासन (Frog Pose)', benefit: 'यह आसन अग्न्याशय (Pancreas) पर दबाव डालता है और इंसुलिन स्राव में सुधार करता है।' },
                { name: 'अर्ध मत्स्येन्द्रासन', benefit: 'यह रीढ़ को मोड़ने वाला आसन पेट के अंगों को निचोड़ता है और पाचन अग्नि बढ़ाता है।' },
                { name: 'सूर्य नमस्कार', benefit: 'पूरे शरीर का वर्कआउट है, जो मेटाबॉलिज्म में सुधार करता है और वजन कम करता है।' },
                { name: 'कपालभाति प्राणायाम', benefit: 'यह शरीर से विषाक्त पदार्थों को साफ करता है और अग्नाशय की कार्यक्षमता बढ़ाता है।' }
            ],
            dos_and_donts: {
                dos: ['सुबह तांबे के बर्तन का पानी पिएं।', 'रात का खाना 7 बजे तक खा लें।', 'ध्यान (Meditation) से तनाव प्रबंधित करें।', 'भोजन धीरे-धीरे चबाकर खाएं।'],
                donts: ['प्राकृतिक वेगों (मल-मूत्र) को न रोकें।', 'शराब और धूम्रपान से बचें।', 'नंगे पैर न चलें (चोट से बचने के लिए)।', 'प्लास्टिक की बोतलों का पानी न पिएं।']
            },
            medicines: ['चंद्रप्रभा वटी', 'वसंत कुसुमाकर रस', 'त्रिफला चूर्ण', 'निशा आमलकी', 'शिलाजीत', 'गुड़मार चूर्ण', 'आरोग्यवर्धिनी वटी']
        },
        recommendedHerbs: ['turmeric', 'neem', 'giloy', 'gudmar', 'jamun', 'karela', 'methi'],
        sources: [
            'Ministry of AYUSH, Govt. of India. "Protocol for Management of Diabetes (Madhumeha)."',
            'Sushruta Samhita, Nidana Sthana, Chapter 6 & Chikitsa Sthana, Chapter 11.',
            'Charaka Samhita, Chikitsa Sthana, Chapter 6 (Prameha Chikitsa).',
            'American Diabetes Association (ADA). "Nutrition Therapy for Adults With Diabetes or Prediabetes: A Consensus Report." Diabetes Care 2019.',
            'Ashtanga Hridayam, Nidana Sthana, Chapter 10.'
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
        benefit: 'Stress Relief & Vitality',
        benefit_hi: 'तनाव राहत और जीवन शक्ति',
        dosha: 'Vata-Kapha',
        description: 'The "King of Herbs" and premier Rasayana. A potent adaptogen for longevity, vitality, and stress resilience.',
        description_hi: '"जड़ी-बूटियों का राजा" और प्रमुख रसायन। लंबी उम्र, जीवन शक्ति और तनाव से लड़ने के लिए एक शक्तिशाली एडाप्टोजेन।',
        image: '/images/ashwagandha.png',
        details: {
            overview: 'Ashwagandha (Withania somnifera) is an ancient medicinal herb with multiple health benefits. It is classified as an "adaptogen," meaning that it can help your body manage stress. Ashwagandha also provides numerous other benefits for your body and brain. For example, it can boost brain function, lower blood sugar and cortisol levels, and help fight symptoms of anxiety and depression.',
            scientific_name: 'Withania somnifera',
            family: 'Solanaceae (Nightshade family)',
            ayurvedic_properties: {
                rasa: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)',
                guna: 'Laghu (Light), Snigdha (Oily)',
                virya: 'Ushna (Hot Potency)',
                vipaka: 'Madhura (Post-digestive effect is Sweet)',
                prabhava: 'Rasayana (Rejuvenative)'
            },
            benefits: [
                'Reduces Blood Sugar Levels',
                'Has Anti-Cancer Properties',
                'Reduces Cortisol (Stress Hormone)',
                'Helps Reduce Stress and Anxiety',
                'Reduces Symptoms of Depression',
                'Boosts Testosterone and Increases Fertility in Men',
                'Increases Muscle Mass and Strength',
                'Reduces Inflammation',
                'Lowers Cholesterol and Triglycerides',
                'Improves Brain Function, Including Memory'
            ],
            detailed_benefits: [
                {
                    title: '1. Can Reduce Blood Sugar Levels',
                    description: 'In several studies, Ashwagandha has been shown to lower blood sugar levels. A test-tube study found that it increased insulin secretion and improved insulin sensitivity in muscle cells. Also, several human studies have confirmed its ability to reduce blood sugar levels in both healthy people and those with diabetes.'
                },
                {
                    title: '2. Has Anti-Cancer Properties',
                    description: 'Animal and test-tube studies have found that withaferin—a compound in ashwagandha—helps induce apoptosis (programmed cell death) of cancer cells. It also impedes the growth of new cancer cells in several ways. Animal studies suggest it may help treat several types of cancer, including breast, lung, colon, brain, and ovarian cancer.'
                },
                {
                    title: '3. Can Reduce Cortisol Levels',
                    description: 'Cortisol is known as a "stress hormone" because your adrenal glands release it in response to stress, as well as when your blood sugar levels get too low. Unfortunately, in some cases, cortisol levels may become chronically elevated, which can lead to high blood sugar levels and increased fat storage in the abdomen. Studies have shown that ashwagandha may help reduce cortisol levels.'
                },
                {
                    title: '4. May Help Reduce Stress and Anxiety',
                    description: 'Ashwagandha is perhaps best known for its ability to reduce stress. Researchers who looked at five studies found that taking ashwagandha standardized extract significantly reduced levels of stress and anxiety. In another 60-day study in 64 people with chronic stress, those in the supplemental group reported a 69% reduction in anxiety and insomnia, on average, compared with 11% in the placebo group.'
                },
                {
                    title: '5. May Reduce Symptoms of Depression',
                    description: 'Although it hasn’t been thoroughly studied, a few studies suggest ashwagandha may help alleviate depression. In one controlled 60-day study in 64 stressed adults, those who took 600 mg of high-concentration ashwagandha extract per day reported a 79% reduction in severe depression, while the placebo group reported a 10% increase.'
                },
                {
                    title: '6. Can Boost Testosterone and Increase Fertility in Men',
                    description: 'Ashwagandha supplements may have powerful effects on testosterone levels and reproductive health. In one study in 75 infertile men, the group treated with ashwagandha showed increased sperm count and motility. What’s more, the treatment led to a significant increase in testosterone levels.'
                },
                {
                    title: '7. May Increase Muscle Mass and Strength',
                    description: 'Research has shown that ashwagandha may improve body composition and increase strength. In a study to determine a safe and effective dosage for ashwagandha, healthy men who took 750–1,250 mg of pulverized ashwagandha root per day gained muscle strength after 30 days.'
                },
                {
                    title: '8. May Reduce Inflammation',
                    description: 'Several animal studies have shown that ashwagandha helps decrease inflammation. Studies in humans have found that it increases the activity of natural killer cells, which are immune cells that fight infection and help you stay healthy. It has also been shown to decrease markers of inflammation, such as C-reactive protein (CRP).'
                },
                {
                    title: '9. May Lower Cholesterol and Triglycerides',
                    description: 'In addition to its anti-inflammatory effects, ashwagandha may help improve heart health by reducing cholesterol and triglyceride levels. Animal studies have found that it significantly decreases levels of these blood fats. One study in rats found that it lowered total cholesterol by as much as 53% and triglycerides by nearly 45%.'
                },
                {
                    title: '10. May Improve Brain Function, Including Memory',
                    description: 'Test-tube and animal studies suggest that ashwagandha may mitigate memory and brain function problems caused by injury or disease. Research has shown that it promotes antioxidant activity that protects nerve cells from harmful free radicals. In one study, healthy men who took 500 mg of standardized extract daily reported significant improvements in their reaction time and task performance.'
                }
            ],
            usage: 'Traditionally used as a powder (Churna) mixed with warm milk and honey/ghee/sugar. Also available as Arishta (tonic), Ghrita (medicated ghee), and capsules.',
            dosage: '3-6 grams (1/2 to 1 tsp) of powder daily, or 300-500mg standardized extract twice daily.',
            dosage_by_form: [
                { form: 'Ashwagandha Churna (Powder)', dosage: '1/4 - 1/2 teaspoon twice a day with milk or water.' },
                { form: 'Ashwagandha Tablet', dosage: '1 tablet twice a day or as prescribed by a doctor.' },
                { form: 'Ashwagandha Capsule', dosage: '1 capsule twice a day or as prescribed by a doctor.' },
                { form: 'Ashwagandha Arishta (Liquid)', dosage: '15-20ml mixed with equal amount of water, twice daily after meals.' }
            ],
            home_remedies: [
                { title: 'Ashwagandha Milk (Moon Milk)', description: 'Mix 1/2 tsp Ashwagandha powder, 1/2 tsp Turmeric, and a pinch of Cardamom in warm milk. Drink before bed for better sleep.' },
                { title: 'Ashwagandha Tea', description: 'Boil 1 tsp of dried Ashwagandha root in water for 15 minutes. Strain, add lemon and honey. Good for energy.' },
                { title: 'Ashwagandha Performance Paste', description: 'Mix Ashwagandha powder with Ghee and Honey. Consume 1/2 tsp in the morning for strength.' }
            ],
            medicinal_uses: ['Insomnia', 'Anxiety', 'Depression', 'Arthritis', 'Infertility', 'Hypothyroidism', 'Fibromyalgia', 'Diabetes', 'High Cholesterol'],
            side_effects: 'Generally safe, but high doses may cause stomach upset, diarrhea, or nausea. Can cause drowsiness.',
            precautions: 'Avoid during pregnancy (may induce uterine contractions). Avoid if you have hyperthyroidism (it increases thyroid hormone). Use with caution if you have autoimmune diseases like Lupus or Rheumatoid Arthritis as it stimulates the immune system.',
            drug_interactions: [
                'Thyroid medication (may increase effects)',
                'Sedatives/Benzodiazepines (enhances drowsiness)',
                'Blood sugar/pressure medications (may cause levels to drop too low)',
                'Immunosuppressants'
            ],
            chemical_compounds: [
                { name: 'Withanolides', effect: 'Anti-inflammatory, anti-tumor, adaptogenic' },
                { name: 'Sitoindosides', effect: 'Anti-stress activity' },
                { name: 'Alkaloids', effect: 'Sedative, hypothetical (sleep-inducing)' },
                { name: 'Amino Acids', effect: 'Nutritional support' }
            ],
            varieties: [
                { name: 'Nagori Ashwagandha', description: 'Grown in Nagaur, Rajasthan. Considered the highest quality for medicinal use due to its high starch content and crisp texture.', image: '/images/herbs/nagori.jpg' },
                { name: 'Desi (Wild) Ashwagandha', description: 'Smaller roots, more fibrous. Often used for extraction of alkaloids.', image: '/images/herbs/wild-ashwagandha.jpg' }
            ],
            faqs: [
                { question: 'When will I see results?', answer: 'It is a slow-acting tonic. While better sleep may be noticed in 2-3 days, significant stress relief and physical benefits typically take 4-8 weeks of consistent use.' },
                { question: 'Is Ashwagandha safe for long-term use?', answer: 'Yes, it is considered safe for long-term use (up to 3 months continuously is well-studied). Traditionally, it is taken in cycles (e.g., 3 months on, 1 month off).' },
                { question: 'Can women take Ashwagandha?', answer: 'Absolutely. It is excellent for reducing stress, balancing thyroid hormones, and supporting strength in women. However, it should be avoided during pregnancy.' },
                { question: 'Does it increase weight?', answer: 'It mainly increases muscle mass, not fat. If taken with heavy carriers like Ghee and Milk, it can support healthy weight gain in underweight individuals.' }
            ],
            sources: [
                'Chandrasekhar, K., et al. (2012). "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults."',
                'Wankhede, S., et al. (2015). "Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial."',
                'Choudhary, D., et al. (2017). "Efficacy and Safety of Ashwagandha (Withania somnifera) Root Extract in Improving Memory and Cognitive Functions."'
            ]
        },
        details_hi: {
            overview: 'अश्वगंधा (विथानिया सोम्निफेरा) कई स्वास्थ्य लाभों वाली एक प्राचीन औषधीय जड़ी बूटी है। इसे "एडाप्टोजेन" के रूप में वर्गीकृत किया गया है, जिसका अर्थ है कि यह आपके शरीर को तनाव का प्रबंधन करने में मदद कर सकता है। अश्वगंधा आपके शरीर और मस्तिष्क के लिए कई अन्य लाभ भी प्रदान करता है। उदाहरण के लिए, यह मस्तिष्क की कार्यक्षमता को बढ़ा सकता है, रक्त शर्करा और कोर्टिसोल के स्तर को कम कर सकता है, और चिंता और अवसाद के लक्षणों से लड़ने में मदद कर सकता है।',
            scientific_name: 'विथानिया सोम्निफेरा',
            family: 'सोलानेसी (Solanaceae)',
            ayurvedic_properties: {
                rasa: 'तिक्त (कड़वा), कषाय (कसैला), मधुर (मीठा)',
                guna: 'लघु (हल्का), स्निग्ध (तैलीय/चिकना)',
                virya: 'उष्ण (गर्म तासीर)',
                vipaka: 'मधुर (विपाक में मीठा)',
                prabhava: 'रसायन (कायाकल्प)'
            },
            benefits: [
                'रक्त शर्करा के स्तर को कम करता है',
                'कैंसर विरोधी गुण हैं',
                'कोर्टिसोल (तनाव हार्मोन) को कम करता है',
                'तनाव और चिंता को कम करने में मदद करता है',
                'अवसाद के लक्षणों को कम करता है',
                'पुरुषों में टेस्टोस्टेरोन बढ़ाता है और प्रजनन क्षमता बढ़ाता है',
                'मांसपेशियों और ताकत को बढ़ाता है',
                'सूजन को कम करता है',
                'कोलेस्ट्रॉल और ट्राइग्लिसराइड्स को कम करता है',
                'याददाश्त सहित मस्तिष्क की कार्यक्षमता में सुधार करता है'
            ],
            detailed_benefits: [
                {
                    title: '1. रक्त शर्करा के स्तर को कम कर सकता है',
                    description: 'कई अध्ययनों में, अश्वगंधा को रक्त शर्करा के स्तर को कम करने के लिए दिखाया गया है। एक टेस्ट-ट्यूब अध्ययन में पाया गया कि इसने मांसपेशियों की कोशिकाओं में इंसुलिन के स्राव और इंसुलिन संवेदनशीलता में वृद्धि की। इसके अलावा, कई मानव अध्ययनों ने स्वस्थ लोगों और मधुमेह वाले दोनों में रक्त शर्करा के स्तर को कम करने की इसकी क्षमता की पुष्टि की है।'
                },
                {
                    title: '2. कैंसर विरोधी गुण हो सकते हैं',
                    description: 'पशु और टेस्ट-ट्यूब अध्ययनों में पाया गया है कि विटाफेरिन - अश्वगंधा में एक यौगिक - कैंसर कोशिकाओं के एपोप्टोसिस (प्रोग्राम्ड सेल डेथ) को प्रेरित करने में मदद करता है। यह कई मायनों में नई कैंसर कोशिकाओं के विकास को भी रोकता है। जानवरों के अध्ययन से पता चलता है कि यह स्तन, फेफड़े, कोलन, मस्तिष्क और डिम्बग्रंथि के कैंसर सहित कई प्रकार के कैंसर के इलाज में मदद कर सकता है।'
                },
                {
                    title: '3. कोर्टिसोल के स्तर को कम कर सकता है',
                    description: 'कोर्टिसोल को "तनाव हार्मोन" के रूप में जाना जाता है क्योंकि तनाव के जवाब में आपकी अधिवृक्क ग्रंथियां इसे छोड़ती हैं, साथ ही जब आपका रक्त शर्करा का स्तर बहुत कम हो जाता है। दुर्भाग्य से, कुछ मामलों में, कोर्टिसोल का स्तर लंबे समय तक ऊंचा हो सकता है, जिससे रक्त शर्करा का स्तर बढ़ सकता है और पेट में वसा का भंडारण बढ़ सकता है। अध्ययन में पाया गया है कि अश्वगंधा कोर्टिसोल के स्तर को कम करने में मदद कर सकता है।'
                },
                {
                    title: '4. तनाव और चिंता को कम करने में मदद कर सकता है',
                    description: 'अश्वगंधा शायद तनाव को कम करने की अपनी क्षमता के लिए सबसे अच्छी तरह से जाना जाता है। शोधकर्ताओं ने पांच अध्ययनों को देखा और पाया कि अश्वगंधा मानकीकृत अर्क लेने से तनाव और चिंता के स्तर में काफी कमी आई है।'
                },
                {
                    title: '5. अवसाद के लक्षणों को कम कर सकता है',
                    description: 'हालांकि इसका पूरी तरह से अध्ययन नहीं किया गया है, कुछ अध्ययनों से पता चलता है कि अश्वगंधा अवसाद को कम करने में मदद कर सकता है। 64 तनावग्रस्त वयस्कों में 60 दिनों के नियंत्रित अध्ययन में, जिन्होंने प्रति दिन 600 मिलीग्राम उच्च सांद्रता वाले अश्वगंधा अर्क को लिया, उन्होंने गंभीर अवसाद में 79% की कमी की सूचना दी।'
                },
                {
                    title: '6. पुरुषों में टेस्टोस्टेरोन और प्रजनन क्षमता को बढ़ा सकता है',
                    description: 'अश्वगंधा की खुराक का टेस्टोस्टेरोन के स्तर और प्रजनन स्वास्थ्य पर शक्तिशाली प्रभाव पड़ सकता है। 75 बांझ पुरुषों में एक अध्ययन में, अश्वगंधा के साथ इलाज किए गए समूह ने शुक्राणुओं की संख्या और गतिशीलता में वृद्धि दिखाई।'
                },
                {
                    title: '7. मांसपेशियों और ताकत को बढ़ा सकता है',
                    description: 'शोध से पता चला है कि अश्वगंधा शरीर की संरचना में सुधार कर सकता है और ताकत बढ़ा सकता है। अश्वगंधा के लिए एक सुरक्षित और प्रभावी खुराक निर्धारित करने के लिए एक अध्ययन में, स्वस्थ पुरुषों ने प्रति दिन 750-1,250 मिलीग्राम अश्वगंधा जड़ लेने के 30 दिनों के बाद मांसपेशियों की ताकत हासिल की।'
                },
                {
                    title: '8. सूजन को कम कर सकता है',
                    description: 'कई जानवरों के अध्ययन से पता चला है कि अश्वगंधा सूजन को कम करने में मदद करता है। मनुष्यों में अध्ययन में पाया गया है कि यह प्राकृतिक हत्यारा कोशिकाओं (Natural Killer Cells) की गतिविधि को बढ़ाता है, जो प्रतिरक्षा कोशिकाएं हैं जो संक्रमण से लड़ती हैं।'
                },
                {
                    title: '9. कोलेस्ट्रॉल और ट्राइग्लिसराइड्स को कम कर सकता है',
                    description: 'इसके विरोधी भड़काऊ प्रभावों के अलावा, अश्वगंधा कोलेस्ट्रॉल और ट्राइग्लिसराइड के स्तर को कम करके हृदय स्वास्थ्य को बेहतर बनाने में मदद कर सकता है। जानवरों के अध्ययन में पाया गया है कि यह रक्त वसा के इन स्तरों को काफी कम करता है।'
                },
                {
                    title: '10. मस्तिष्क की कार्यक्षमता में सुधार कर सकता है',
                    description: 'टेस्ट-ट्यूब और जानवरों के अध्ययन से पता चलता है कि अश्वगंधा चोट या बीमारी के कारण स्मृति और मस्तिष्क समारोह की समस्याओं को कम कर सकता है। अनुसंधान से पता चला है कि यह एंटीऑक्सिडेंट गतिविधि को बढ़ावा देता है जो तंत्रिका कोशिकाओं को हानिकारक मुक्त कणों से बचाता है।'
                }
            ],
            usage: 'परंपरागत रूप से चूर्ण (पाउडर) के रूप में गर्म दूध और शहद/घी/चीनी के साथ लिया जाता है। यह अरिष्ट (टॉनिक), घृत (औषधीय घी) और कैप्सूल के रूप में भी उपलब्ध है।',
            dosage: '3-6 ग्राम (1/2 से 1 चम्मच) चूर्ण रोजाना, या 300-500 मिलीग्राम मानकीकृत अर्क दिन में दो बार।',
            dosage_by_form: [
                { form: 'अश्वगंधा चूर्ण (पाउडर)', dosage: '1/4 - 1/2 चम्मच दिन में दो बार दूध या पानी के साथ।' },
                { form: 'अश्वगंधा टैबलेट', dosage: '1 टैबलेट दिन में दो बार या चिकित्सक के निर्देशानुसार।' },
                { form: 'अश्वगंधा कैप्सूल', dosage: '1 कैप्सूल दिन में दो बार या चिकित्सक के निर्देशानुसार।' },
                { form: 'अश्वगंधा अरिष्ट (सिरप)', dosage: '15-20 मिलीलीटर बराबर मात्रा में पानी के साथ मिलाकर, दिन में दो बार भोजन के बाद।' }
            ],
            home_remedies: [
                { title: 'अश्वगंधा दूध (मून मिल्क)', description: 'गर्म दूध में 1/2 चम्मच अश्वगंधा पाउडर, 1/2 चम्मच हल्दी और एक चुटकी इलायची मिलाएं। बेहतर नींद के लिए सोने से पहले पिएं।' },
                { title: 'अश्वगंधा चाय', description: '1 चम्मच सूखी अश्वगंधा की जड़ को पानी में 15 मिनट तक उबालें। छान लें, नींबू और शहद डालें। ऊर्जा के लिए अच्छा है।' },
                { title: 'शक्ति वर्धक पेस्ट', description: 'अश्वगंधा पाउडर को घी और शहद के साथ मिलाएं। ताकत के लिए सुबह 1/2 चम्मच सेवन करें।' }
            ],
            medicinal_uses: ['अनिद्रा', 'चिंता (Anxiety)', 'अवसाद', 'गठिया', 'बांझपन', 'हाइपोथायरायडिज्म', 'फाइब्रोमायल्जिया', 'मधुमेह', 'उच्च कोलेस्ट्रॉल'],
            side_effects: 'आमतौर पर सुरक्षित है, लेकिन उच्च खुराक से पेट खराब, दस्त या मतली हो सकती है। उनींदापन पैदा कर सकता है।',
            precautions: 'गर्भावस्था के दौरान बचें (गर्भाशय के संकुचन को प्रेरित कर सकता है)। यदि आपको हाइपरथायरायडिज्म है तो बचें (यह थायराइड हार्मोन बढ़ाता है)। यदि आपको ल्यूपस या रुमेटीइड गठिया जैसी ऑटोइम्यून बीमारियां हैं तो सावधानी के साथ प्रयोग करें क्योंकि यह प्रतिरक्षा प्रणाली को उत्तेजित करता है।',
            drug_interactions: [
                'थायराइड की दवा (प्रभाव बढ़ा सकता है)',
                'शामक/नींद की दवाएं (सुस्ती बढ़ाता है)',
                'रक्त शर्करा/दवाएं (स्तर बहुत कम हो सकता है)',
                'इम्यूनोसप्रेसेन्ट्स'
            ],
            chemical_compounds: [
                { name: 'विथानोलाइड्स', effect: 'सूजन-रोधी, ट्यूमर-रोधी, एडाप्टोजेनिक' },
                { name: 'सिटोइंडोसाइड्स', effect: 'तनाव-रोधी गतिविधि' },
                { name: 'उल्कालोइड्स', effect: 'शामक, नींद लाने वाला' },
                { name: 'एमिनो एसिड', effect: 'पोषण समर्थन' }
            ],
            varieties: [
                { name: 'नागोरी अश्वगंधा', description: 'नागौर, राजस्थान में उगाया जाता है। अपनी उच्च स्टार्च सामग्री और कुरकुरी बनावट के कारण औषधीय उपयोग के लिए उच्चतम गुणवत्ता वाला माना जाता है।', image: '/images/herbs/nagori.jpg' },
                { name: 'देसी (जंगली) अश्वगंधा', description: 'छोटी जड़ें, अधिक रेशेदार। अक्सर अल्कलॉइड निष्कर्षण के लिए उपयोग किया जाता है।', image: '/images/herbs/wild-ashwagandha.jpg' }
            ],
            faqs: [
                { question: 'मुझे परिणाम कब दिखाई देंगे?', answer: 'यह एक धीमी गति से काम करने वाला टॉनिक है। जबकि बेहतर नींद 2-3 दिनों में देखी जा सकती है, महत्वपूर्ण तनाव राहत और शारीरिक लाभ आमतौर पर लगातार उपयोग के 4-8 सप्ताह लेते हैं।' },
                { question: 'क्या अश्वगंधा लंबे समय तक उपयोग के लिए सुरक्षित है?', answer: 'हाँ, इसे लंबे समय तक उपयोग के लिए सुरक्षित माना जाता है (लगातार 3 महीने तक अच्छी तरह से अध्ययन किया गया है)। परंपरागत रूप से, इसे चक्रों में लिया जाता है (उदा. 3 महीने चालू, 1 महीना बंद)।' },
                { question: 'क्या महिलाएं अश्वगंधा ले सकती हैं?', answer: 'बिलकुल। यह तनाव कम करने, थायराइड हार्मोन को संतुलित करने और महिलाओं में ताकत का समर्थन करने के लिए उत्कृष्ट है। हालांकि, गर्भावस्था के दौरान इससे बचना चाहिए।' },
                { question: 'क्या इससे वजन बढ़ता है?', answer: 'यह मुख्य रूप से मांसपेशियों (Muscle Mass) को बढ़ाता है, वसा को नहीं। यदि घी और दूध जैसे भारी वाहकों के साथ लिया जाए, तो यह कम वजन वाले व्यक्तियों में स्वस्थ वजन बढ़ाने में सहायता कर सकता है।' }
            ]
        },
        sources: [
            'Chandrasekhar, K., et al. (2012). "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults."',
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
            dosage: '10-15ml juice or 5-7 fresh leaves daily.',
            side_effects: 'Mild blood thinning effect.',
            medicinal_uses: ['Cold/Flu', 'Asthma', 'Fever', 'Skin Infections'],
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
            dosage: '10-15 मिली रस या 5-7 ताजी पत्तियां रोजाना।',
            side_effects: 'हल्का रक्त पतला करने वाला प्रभाव।',
            medicinal_uses: ['सर्दी/जुकाम', 'दमा', 'बुखार', 'त्वचा संक्रमण'],
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
            dosage: '3-6g (1 tsp) powder with warm water at bedtime.',
            side_effects: 'Excess dose may cause loose motion or dehydration.',
            medicinal_uses: ['Constipation', 'Eye Issues', 'Detoxification', 'Hair Fall'],
            precautions: 'Avoid in cases of diarrhea and pregnancy.'
        },
        details_hi: {
            overview: 'त्रिफला तीन फलों से बनी एक बहु-औषधीय दवा है। यह सौम्य है, आदत नहीं डालता है, और पूरे पाचन तंत्र को फिर से जीवंत करता है।',
            benefits: ['प्राकृतिक रेचक (Laxative)', 'शरीर को डिटॉक्स करता है', 'आंखों की रोशनी बढ़ाता है', 'एंटी-ऑक्सीडेंट से भरपूर'],
            usage: 'सफाई के लिए सोते समय गर्म पानी के साथ 1 चम्मच लें।',
            dosage: '3-6 ग्राम (1 चम्मच) चूर्ण सोते समय गर्म पानी के साथ।',
            side_effects: 'अधिक मात्रा से दस्त या निर्जलीकरण हो सकता है।',
            medicinal_uses: ['कब्ज', 'आंखों की समस्याएं', 'शरीर शुद्धि', 'बाल झड़ना'],
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
            dosage: '3g powder or 10ml juice daily.',
            side_effects: 'May cause dry mouth or nausea if taken on empty stomach.',
            medicinal_uses: ['Memory Loss', 'Anxiety', 'ADHD', 'Insomnia'],
            precautions: 'May slow heart rate. Consult if you have heart conditions.'
        },
        details_hi: {
            overview: 'ब्रह्मी एक रेंगने वाली जड़ी बूटी है जिसका उपयोग पारंपरिक रूप से संज्ञानात्मक कार्य को बढ़ाने और तंत्रिका तंत्र को शांत करने के लिए किया जाता है।',
            benefits: ['याददाश्त में सुधार करता है', 'चिंता कम करता है', 'बालों के विकास को बढ़ावा देता है', 'अनिद्रा का इलाज करता है'],
            usage: 'रस, पाउडर, या औषधीय घी (ब्रह्मी घृत) के रूप में सेवन किया जाता है।',
            dosage: '3 ग्राम चूर्ण या 10 मिली रस रोजाना।',
            side_effects: 'खाली पेट लेने पर मुंह सूखना या मतली हो सकती है।',
            medicinal_uses: ['याददाश्त की कमी', 'चिंता', 'एडीएचडी', 'अनिद्रा'],
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
            dosage: '1-3g powder daily.',
            side_effects: 'May cause acid reflux if taken in excess on empty stomach.',
            medicinal_uses: ['Joint Pain', 'Wounds', 'Skin Infections', 'Allergies'],
            precautions: 'High doses may thin the blood. Caution before surgery.'
        },
        details_hi: {
            overview: 'हल्दी की उपचार शक्ति करक्यूमिन के कारण है। यह चोट और प्रतिरक्षा के लिए हर भारतीय घर में मुख्य है।',
            benefits: ['जोड़ों के दर्द को कम करता है', 'घाव भरता है', 'रक्त को शुद्ध करता है', 'त्वचा की चमक के लिए अच्छा है'],
            usage: 'गर्म दूध में मिलाएं (हल्दी वाला दूध) या खाना पकाने में उपयोग करें।',
            dosage: '1-3 ग्राम पाउडर रोजाना।',
            side_effects: 'खाली पेट अधिक लेने पर एसिड रिफ्लक्स हो सकता है।',
            medicinal_uses: ['जोड़ों का दर्द', 'घाव', 'त्वचा संक्रमण', 'एलर्जी'],
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
            dosage: '15-30ml juice or 500mg extract twice daily.',
            side_effects: 'Can cause constipation in some people.',
            medicinal_uses: ['Chronic Fever', 'Gout', 'Diabetes', 'Low Immunity'],
            precautions: 'May lower blood sugar. Use cautiously for auto-immune diseases.'
        },
        details_hi: {
            overview: 'गिलोय एक चढ़ने वाली झाड़ी है और आयुर्वेदिक चिकित्सा में एक आवश्यक जड़ी-बूटी है, जिसका उपयोग अक्सर पुराने बुखार के इलाज के लिए किया जाता है।',
            benefits: ['इम्युनिटी बढ़ाता है', 'पुराने बुखार का इलाज करता है', 'पाचन में सुधार करता है', 'तनाव कम करता है'],
            usage: 'तने का काढ़ा या तैयार गोलियां/रस।',
            dosage: '15-30 मिली रस या 500 मिलीग्राम अर्क दिन में दो बार।',
            side_effects: 'कुछ लोगों में कब्ज पैदा कर सकता है।',
            medicinal_uses: ['पुराना बुखार', 'गाउट', 'मधुमेह', 'कम इम्युनिटी'],
            precautions: 'रक्त शर्करा कम कर सकता है। ऑटो-इम्यून बीमारियों के लिए सावधानी से उपयोग करें।'
        }
    },
    {
        id: '7',
        name: 'Shatavari',
        name_hi: 'शतावरी',
        slug: 'shatavari',
        benefit: 'Womens Health',
        benefit_hi: 'याददाश्त',
        dosha: 'Vata-Pitta',
        description: 'The primary rejuvenative tonic for women. Supports reproductive health.',
        description_hi: 'महिलाओं के लिए प्राथमिक कायाकल्प टॉनिक। प्रजनन स्वास्थ्य का समर्थन करता है।',
        image: '/images/product-generic.png',
        details: {
            overview: 'Shatavari means "she who possesses a hundred husbands". It is the foremost herb for female fertility and vitality.',
            benefits: ['Balances hormones', 'Supports lactation', 'Reduces menopause symptoms', 'Anti-ulcer'],
            usage: 'Powder with milk or as granules (Kalpa).',
            dosage: '3-6g powder with warm milk.',
            side_effects: 'May contribute to weight gain if consumed in excess.',
            medicinal_uses: ['Infertility', 'Menopause', 'Gastric Ulcers', 'Lactation'],
            precautions: 'Avoid if you have high estrogen sensitivity.'
        },
        details_hi: {
            overview: 'शतावरी का अर्थ है "वह जिसके सौ पति हों"। यह महिला प्रजनन क्षमता और जीवन शक्ति के लिए अग्रणी जड़ी बूटी है।',
            benefits: ['हार्मोन संतुलित करता है', 'स्तनपान का समर्थन करता है', 'रजोनिवृत्ति के लक्षणों को कम करता है', 'अल्सर विरोधी'],
            usage: 'दूध के साथ पाउडर या कणिकाओं (कल्प) के रूप में।',
            dosage: '3-6 ग्राम पाउडर गर्म दूध के साथ।',
            side_effects: 'अधिक सेवन से वजन बढ़ सकता है।',
            medicinal_uses: ['बांझपन', 'रजोनिवृत्ति', 'पेट के अल्सर', 'स्तनपान'],
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
            dosage: '10-20ml juice or 3g powder daily.',
            side_effects: 'May increase acidity in sensitive stomachs.',
            medicinal_uses: ['Hair Fall', 'Acidity', 'Weak Eyesight', 'Skin Dullness'],
            precautions: 'Avoid eating at night if prone to acidity or cough.'
        },
        details_hi: {
            overview: 'आंवला एक सुपरफूड है जो तीनों दोषों को संतुलित करता है। यह च्यवनप्राश का आधार है।',
            benefits: ['उच्चतम विटामिन सी', 'एंटी-एजिंग', 'बालों के विकास को बढ़ावा देता है', 'आंखों की रोशनी बढ़ाता है'],
            usage: 'कच्चा फल, रस, कैंडी (मुरब्बा), या पाउडर।',
            dosage: '10-20 मिली रस या 3 ग्राम पाउडर रोजाना।',
            side_effects: 'संवेदनशील पेट में एसिडिटी बढ़ा सकता है।',
            medicinal_uses: ['बाल झड़ना', 'एसिडिटी', 'कमजोर नजर', 'त्वचा का रूखापन'],
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
            dosage: '10-20ml juice or 2-4 capsules.',
            side_effects: 'Extremely bitter, may induce vomiting if taken in excess.',
            medicinal_uses: ['Acne', 'Eczema', 'Diabetes', 'Parasites'],
            precautions: 'Avoid if trying to conceive (men) or pregnant.'
        },
        details_hi: {
            overview: 'नीम एक कड़वी जड़ी बूटी है जिसका व्यापक रूप से त्वचा रोगों और विषहरण (Detox) के लिए उपयोग किया जाता है।',
            benefits: ['रक्त शुद्ध करता है', 'मुँहासे और एक्जिमा का इलाज करता है', 'एंटी-फंगल', 'मुख का स्वास्थ्य'],
            usage: 'नीम के पत्तों का पेस्ट, तेल, या कैप्सूल।',
            dosage: '10-20 मिली रस या 2-4 कैप्सूल।',
            side_effects: 'अत्यधिक कड़वा, अधिक मात्रा में उल्टी हो सकती है।',
            medicinal_uses: ['मुँहासे', 'एक्जिमा', 'मधुमेह', 'परजीवी'],
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
            dosage: '3-6g bark powder daily.',
            side_effects: 'May cause mild bloating.',
            medicinal_uses: ['High BP', 'Angina', 'Cholesterol', 'Fractures'],
            precautions: 'Monitor blood pressure if on medication.'
        },
        details_hi: {
            overview: 'अर्जुन की छाल हृदय स्वास्थ्य के लिए प्रसिद्ध है। यह हृदय की रक्षा करता है और स्वस्थ कोलेस्ट्रॉल बनाए रखने में मदद करता है।',
            benefits: ['हृदय को मजबूत करता है', 'रक्तचाप को नियंत्रित करता है', 'कोलेस्ट्रॉल कम करता है', 'हड्डी के फ्रैक्चर को भरता है'],
            usage: 'दूध में उबाला गया छाल का पाउडर (अर्जुन क्षीर पाक)।',
            dosage: '3-6 ग्राम छाल का पाउडर रोजाना।',
            side_effects: 'हल्की सूजन (bloating) हो सकती है।',
            medicinal_uses: ['उच्च रक्तचाप', 'एनजाइना', 'कोलेस्ट्रॉल', 'फ्रैक्चर'],
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
