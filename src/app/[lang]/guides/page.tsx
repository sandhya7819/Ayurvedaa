'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { BookOpen, Sun, Moon, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function LearnPage() {
    const { language } = useLanguage();

    const sections = [
        {
            title: language === 'hi' ? 'आयुर्वेद मूल बातें' : 'Ayurveda Basics',
            desc: language === 'hi' ? 'त्रिदोष, पंचमहाभूत और जीवन के विज्ञान को समझें।' : 'Understand Tridosha, Panchamahabhuta, and the science of life.',
            icon: <BookOpen size={32} />,
            link: '/guides/basics',
            color: '#e0e7ff',
            textColor: '#4338ca'
        },
        {
            title: language === 'hi' ? 'दिनचर्या (दैनिक दिनचर्या)' : 'Dinacharya (Daily Routine)',
            desc: language === 'hi' ? 'स्वास्थ्य और दीर्घायु के लिए आदर्श दैनिक अनुष्ठान।' : 'Ideal daily rituals for health and longevity.',
            icon: <Sun size={32} />,
            link: '/guides/dinacharya',
            color: '#fef3c7',
            textColor: '#b45309'
        },
        {
            title: language === 'hi' ? 'ऋतुचर्या (मौसमी गाइड)' : 'Ritucharya (Seasonal Guide)',
            desc: language === 'hi' ? 'मौसम के बदलाव के अनुसार आहार और जीवन शैली।' : 'Diet and lifestyle adaptations for changing seasons.',
            icon: <Calendar size={32} />,
            link: '/guides/ritucharya',
            color: '#dcfce7',
            textColor: '#15803d'
        }
    ];

    const carouselRef = React.useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const [activeFilter, setActiveFilter] = React.useState('All');

    const lifestylePosts = {
        'All': [
            { t: 'Why Ashwagandha is the King of Herbs', c: 'Herbs', d: 'Jan 14, 2026', i: '/images/ashwagandha.png' },
            { t: 'The Ultimate Guide to Ayurvedic Diet for Beginners', c: 'Diet', d: 'Jan 14, 2026', i: '/images/hero-bg.png' },
            { t: 'Top 10 Yoga Asanas for Stress Relief', c: 'Yoga', d: 'Jan 13, 2026', i: '/images/tulsi.png' },
            { t: 'Ayurvedic Skincare Routine for Glowing Skin', c: 'Beauty', d: 'Jan 13, 2026', i: '/images/triphala.png' },
            { t: 'Understanding Your Dosha: A Guide to Balance', c: 'Wellness', d: 'Jan 13, 2026', i: '/images/hero-bg.png' },
            { t: 'Morning Rituals for Endless Energy', c: 'Lifestyle', d: 'Jan 13, 2026', i: '/images/ashwagandha.png' },
            { t: '5 Essential Herbs Every Home Should Have', c: 'Herbs', d: 'Jan 12, 2026', i: '/images/product-generic.png' },
            { t: 'Natural Remedies for Common Cold', c: 'Health', d: 'Jan 12, 2026', i: '/images/tulsi.png' }
        ],
        'Herbs': [
            { t: 'Tulsi: The Queen of Herbs', c: 'Herbs', d: 'Feb 10, 2026', i: '/images/tulsi.png' },
            { t: 'Triphala Benefits for Digestion', c: 'Herbs', d: 'Feb 09, 2026', i: '/images/triphala.png' },
            { t: 'Shilajit: The Destroyer of Weakness', c: 'Herbs', d: 'Feb 08, 2026', i: '/images/product-generic.png' },
            { t: 'Brahmi for Memory and Focus', c: 'Herbs', d: 'Feb 07, 2026', i: '/images/ashwagandha.png' }
        ],
        'Lifestyle': [
            { t: 'Dinacharya: The Ideal Daily Routine', c: 'Lifestyle', d: 'Mar 15, 2026', i: '/images/hero-bg.png' },
            { t: 'Ritucharya: Seasonal Guidelines', c: 'Wellness', d: 'Mar 14, 2026', i: '/images/triphala.png' },
            { t: 'Oil Pulling: Ancient Secret for Oral Health', c: 'Habits', d: 'Mar 13, 2026', i: '/images/tulsi.png' },
            { t: 'Abhyanga: The Art of Self-Massage', c: 'Therapy', d: 'Mar 12, 2026', i: '/images/ashwagandha.png' }
        ],
        'Yoga': [
            { t: 'Surya Namaskar: Step by Step Guide', c: 'Yoga', d: 'Apr 20, 2026', i: '/images/hero-bg.png' },
            { t: 'Pranayama Techniques for Beginners', c: 'Breathwork', d: 'Apr 19, 2026', i: '/images/tulsi.png' },
            { t: 'Yoga for Back Pain Relief', c: 'Health', d: 'Apr 18, 2026', i: '/images/triphala.png' },
            { t: 'Meditation for Mental Clarity', c: 'Mind', d: 'Apr 17, 2026', i: '/images/product-generic.png' }
        ],
        'Diet': [
            { t: 'Sattvic Diet: Foods for Purity', c: 'Diet', d: 'May 05, 2026', i: '/images/ashwagandha.png' },
            { t: 'Why You Should Avoid Ice Cold Water', c: 'Habits', d: 'May 04, 2026', i: '/images/hero-bg.png' },
            { t: 'Golden Milk: The Healing Drink', c: 'Recipes', d: 'May 03, 2026', i: '/images/tulsi.png' },
            { t: 'Spices as Medicine in Your Kitchen', c: 'Food', d: 'May 02, 2026', i: '/images/triphala.png' }
        ]
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            {language === 'hi' ? 'हृदयस्पर्शी ' : 'Heartfelt '}
                            <span className={styles.highlight}>
                                {language === 'hi' ? 'विचार:' : 'Reflections: '}
                            </span>
                            {language === 'hi' ? 'स्वास्थ्य, संतुलन और जीवन की कहानियाँ' : 'Stories of Health, Balance, and Growth'}
                        </h1>
                        <p className={styles.heroSubtitle}>
                            {language === 'hi'
                                ? 'प्राचीन ज्ञान के लिए आपका अंतिम स्रोत! नवीन दृष्टिकोणों के साथ जीवन को समृद्ध बनाएं।'
                                : 'Ayurveda Guide welcomes you to the ultimate source for ancient wisdom! Explore curated content to enlighten, heal, and engage global seekers.'}
                        </p>

                    </div>
                </div>
            </section>

            {/* Stories Section (New) */}
            <section className={styles.storiesSection}>
                <div className="container">
                    <div className={styles.storiesContainer}>
                        <div className={styles.storiesTrack}>
                            {[
                                { t: 'Sleep Better', i: '/images/hero-bg.png' },
                                { t: 'Morning Rituals', i: '/images/ashwagandha.png' },
                                { t: 'Detox Tips', i: '/images/product-generic.png' },
                                { t: 'Natural Remedies', i: '/images/tulsi.png' },
                                { t: 'Yoga Asanas', i: '/images/triphala.png' },
                                { t: 'Healthy Diet', i: '/images/hero-bg.png' },
                                { t: 'Meditation', i: '/images/ashwagandha.png' },
                                { t: 'Stress Relief', i: '/images/triphala.png' },
                                { t: 'Skin Care', i: '/images/ashwagandha.png' },
                                { t: 'Hair Growth', i: '/images/product-generic.png' },
                                { t: 'Immunity Boost', i: '/images/tulsi.png' },
                                { t: 'Mindfulness', i: '/images/hero-bg.png' },
                                { t: 'Ayurveda 101', i: '/images/ashwagandha.png' },
                                { t: 'Herbal Tea', i: '/images/product-generic.png' },
                                /* Duplicated for Infinite Loop */
                                { t: 'Sleep Better', i: '/images/hero-bg.png' },
                                { t: 'Morning Rituals', i: '/images/ashwagandha.png' },
                                { t: 'Detox Tips', i: '/images/product-generic.png' },
                                { t: 'Natural Remedies', i: '/images/tulsi.png' },
                                { t: 'Yoga Asanas', i: '/images/triphala.png' },
                                { t: 'Healthy Diet', i: '/images/hero-bg.png' },
                                { t: 'Meditation', i: '/images/ashwagandha.png' },
                                { t: 'Stress Relief', i: '/images/triphala.png' },
                                { t: 'Skin Care', i: '/images/ashwagandha.png' },
                                { t: 'Hair Growth', i: '/images/product-generic.png' },
                                { t: 'Immunity Boost', i: '/images/tulsi.png' },
                                { t: 'Mindfulness', i: '/images/hero-bg.png' },
                                { t: 'Ayurveda 101', i: '/images/ashwagandha.png' },
                                { t: 'Herbal Tea', i: '/images/product-generic.png' },
                            ].map((story: { t: string; i: string }, idx: number) => {
                                const slug = story.t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                return (
                                    <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                        <div className={styles.storyItem}>
                                            <div className={styles.storyCircleWrapper}>
                                                <div className={styles.storyInnerCircle}>
                                                    <Image src={story.i} alt={story.t} fill style={{ objectFit: 'cover' }} />
                                                </div>
                                            </div>
                                            <span className={styles.storyTitle}>{story.t}</span>
                                        </div>
                                    </Link>
                                );
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Posts Section */}
            <section className={styles.sectionTwo}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionTitleIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
                                <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
                                <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h2 className={styles.sectionTitle}>Trending Posts</h2>
                    </div>

                    <div className={styles.carouselWrapper}>
                        {/* Navigation Buttons */}
                        <button onClick={scrollLeft} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous">
                            <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div ref={carouselRef} className={styles.carouselTrack}>
                            {/* Mock Cards - Using real images now */}
                            {[
                                { title: 'The Ancient Art of Pulse Diagnosis: What Your Body Says', image: '/images/hero-bg.png' },
                                { title: '5 Essential Herbs Every Home Should Have', image: '/images/ashwagandha.png' },
                                { title: 'Understanding Your Dosha: A Guide to Balance', image: '/images/tulsi.png' },
                                { title: 'Morning Rituals for Endless Energy', image: '/images/triphala.png' },
                                { title: 'Ayurvedic Diet: Eating for Your Body Type', image: '/images/product-generic.png' },
                                { title: 'The Power of Meditation in Healing', image: '/images/hero-bg.png' },
                                { title: 'Top 10 Immunity Boosting Herbs', image: '/images/ashwagandha.png' },
                                { title: 'Yoga Poses for Stress Relief', image: '/images/tulsi.png' },
                            ].map((post, idx) => {
                                const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                return (
                                    <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                        <div className={styles.postCard}>
                                            <div className={styles.cardImageContainer}>
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className={styles.cardContent}>
                                                <h3 className={styles.postTitle}>
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <button onClick={scrollRight} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 3: Promo Banner + Content Grid */}
            <section className={styles.sectionThree}>
                {/* Promo Banner */}
                <div className={styles.promoBanner}>
                    <div className="container">
                        <div className={styles.bannerContent}>
                            <div className={styles.bannerText}>
                                <span className={styles.bannerSubtitle}>EXPLORE PREMIUM PLANS</span>
                                <h2 className={styles.bannerTitle}>Unlock the Full Power of Ayurveda Guide</h2>
                                <p className={styles.bannerDesc}>Trusted by over 50,000+ Practitioners & Wellness Seekers Worldwide</p>
                            </div>
                            <button className={styles.bannerBtn}>Get Started</button>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Left Column: Latest Posts */}
                        <div className={styles.mainColumn}>
                            <div className={styles.columnHeader}>
                                <div className={styles.headerLeft}>
                                    <div className={styles.sectionTitleIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className={styles.columnTitle}>LATEST POSTS</h3>
                                </div>
                                <button className={styles.viewMoreBtn}>View More</button>
                            </div>

                            <div className={styles.latestPostsList}>
                                {[
                                    { title: 'The Ultimate Guide to Ayurvedic Diet for Beginners', cat: 'Food & Diet', date: 'Nov 18, 2025', views: '205', image: '/images/product-generic.png', desc: 'Discover how to eat according to your dosha and improve your digestion naturally...', variant: 'standard' },
                                    { title: 'Top 10 Yoga Asanas for Stress Relief', cat: 'Travel', date: 'Mar 10, 2026', views: '8K', image: '/images/hero-bg.png', desc: 'Learn the most effective yoga postures to calm your mind and body...', variant: 'standard' },
                                    { title: 'Backpacking In Kerala This Spring? Visit These 10 Budget Retreats', cat: 'Travel', date: 'Mar 10, 2026', views: '64K', image: '/images/hero-bg.png', desc: '', variant: 'overlay' }, // Overlay Card
                                    { title: 'Why Ashwagandha is the King of Herbs', cat: 'Herbs', date: 'Jan 15, 2026', views: '1.2K', image: '/images/ashwagandha.png', desc: 'Explore the benefits of this powerful adaptogen and how to use it...', variant: 'standard' },
                                    { title: 'Ayurvedic Skincare Routine for Glowing Skin', cat: 'Beauty', date: 'Feb 20, 2026', views: '5K', image: '/images/tulsi.png', desc: 'Natural remedies and routines for radiant and healthy skin...', variant: 'standard' },
                                ].map((post, idx) => {
                                    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                    return (
                                        <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                            {post.variant === 'overlay' ? (
                                                <div className={styles.overlayCard}>
                                                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                                    <div className={styles.overlayGradient}></div>
                                                    <div className={styles.overlayContent}>
                                                        <div className={styles.metaRowOverlay}>
                                                            <span className={styles.catBadgeOverlay}>{post.cat}</span>
                                                        </div>
                                                        <h3 className={styles.overlayTitle}>{post.title}</h3>
                                                        <div className={styles.metaRowOverlay}>
                                                            <span className={styles.metaAuthor}>Shane Doe</span>
                                                            <span className={styles.metaDateOverlay}>{post.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={styles.horizontalCard}>
                                                    <div className={styles.horizImageContainer}>
                                                        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                                    </div>
                                                    <div className={styles.horizContent}>
                                                        <div className={styles.metaRow}>
                                                            <span className={styles.catBadge}>{post.cat}</span>
                                                            <span className={styles.metaSeparator}>|</span>
                                                            <span className={styles.metaDate}>{post.date}</span>
                                                        </div>
                                                        <h3 className={styles.horizTitle}>{post.title}</h3>
                                                        <p className={styles.horizDesc}>{post.desc}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Most Read */}
                        <aside className={styles.sidebar}>
                            <div className={styles.columnHeader}>
                                <div className={styles.headerLeft}>
                                    <div className={styles.sectionTitleIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className={styles.columnTitle}>MOST READ</h3>
                                </div>
                            </div>

                            <div className={styles.mostReadList}>
                                {[
                                    { title: 'Frequent Digestive Issues? Check Your Dosha', date: 'Sep 13, 2025', views: '9.6K', image: '/images/triphala.png' },
                                    { title: 'The Top Three Scandinavian Home Decor Trends', date: 'Sep 19, 2025', views: '4.2K', image: '/images/tulsi.png' },
                                    { title: 'Does Drinking Coffee Affect Your Pitta?', date: 'Sep 11, 2025', views: '8.9K', image: '/images/ashwagandha.png' },
                                    { title: 'Rising Folk Singer-Songwriter to Perform at St. Joe\'s Amp', date: 'Sep 10, 2020', views: '8.8K', image: '/images/hero-bg.png' },
                                    { title: 'How to Make Tasty Sweet with Leftover and Soggy Biscuits', date: 'Sep 9, 2020', views: '8.7K', image: '/images/product-generic.png' },
                                ].map((post, idx) => {
                                    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                    return (
                                        <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                            <div className={styles.sidebarCard}>
                                                <div className={styles.sidebarImage}>
                                                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                                    {/* Optional Play Icon for some items */}
                                                    {idx === 2 || idx === 3 ? (
                                                        <div className={styles.playIconOverlay}>
                                                            <div className={styles.playIsconTriangle}></div>
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div className={styles.sidebarContent}>
                                                    <span className={styles.sidebarDate}>{post.date}</span>
                                                    <h4 className={styles.sidebarTitle}>{post.title}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </aside>
                        {/* Load More Button for Section 3 */}
                        <div className={styles.loadMoreContainer}>
                            <button className={styles.loadMoreBtn}>
                                LOAD MORE <span className={styles.rotateIcon}>↻</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Physical Fitness (Dark) */}
            <section className={styles.sectionFour}>
                <div className="container">
                    <h2 className={styles.darkSectionTitle}>Physical Fitness</h2>

                    <div className={styles.fitnessFocusGrid}>
                        {/* Left Column: Featured Card */}
                        <div className={styles.fitnessLeftCol}>
                            <Link href="/guides/boost-your-health-and-fitness-this-weekend-with-these-tips" className={styles.cardLink}>
                                <div className={styles.darkFeaturedCard}>
                                    <Image src="/images/product-generic.png" alt="Fitness Tips" fill style={{ objectFit: 'cover' }} />
                                    <div className={styles.darkOverlayGradient}></div>
                                    <div className={styles.darkOverlayContent}>
                                        <span className={styles.catPill}>Food & Diet</span>
                                        <h3 className={styles.featuredTitle}>Boost Your Health and Fitness This Weekend with These Tips</h3>
                                        <div className={styles.metaRowOverlay}>
                                            <span>Shane Doe</span><span>•</span><span>Jan 19, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Column: 2x2 Grid */}
                        <div className={styles.fitnessRightCol}>
                            {[
                                { t: 'Core Strength Benefits and Exercises to Improve You...', c: 'Workout', i: '/images/hero-bg.png' },
                                { t: '10 Best Foods To Increase Your Physical Fitness as...', c: 'Supplements', i: '/images/ashwagandha.png' },
                                { t: 'Nutritionist Suggests a Healthy Way to Eat Your...', c: 'Food & Diet', i: '/images/tulsi.png' },
                                { t: 'People are Already Using ChatGPT to Create...', c: 'Workout', i: '/images/triphala.png' }
                            ].map((item, idx) => {
                                const slug = item.t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                return (
                                    <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                        <div className={styles.darkCardBottom}>
                                            <div className={styles.darkImageBottom}>
                                                <Image src={item.i} alt={item.t} fill style={{ objectFit: 'cover' }} />
                                                <span className={styles.catPillSmall}>{item.c}</span>
                                            </div>
                                            <div className={styles.darkContentBottom}>
                                                <h4 className={styles.darkTitleSmall}>{item.t}</h4>
                                                <div className={styles.metaRowDarkSmall}>
                                                    <span>Shane Doe</span><span>•</span><span>Jan 16, 2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Health & Well-being (Light) */}
            <section className={styles.sectionFive}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Left Column */}
                        <div className={styles.mainColumn}>
                            <div className={styles.columnHeader}>
                                <div className={styles.headerLeft}>
                                    <div className={styles.sectionTitleIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className={styles.columnTitle}>HEALTH & WELL-BEING</h3>
                                </div>
                            </div>

                            <div className={styles.healthTopGrid}>
                                <div className={styles.healthBigCard}>
                                    <div className={styles.healthImageBig}>
                                        <Image src="/images/hero-bg.png" alt="Covid" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.healthContentBig}>
                                        <span className={styles.catText}>Health</span>
                                        <h3 className={styles.healthTitleBig}>Research Podcast: Long-Covid'19 Symptoms are Less Common Now</h3>
                                    </div>
                                </div>
                                <Link href="/guides/research-podcast-long-covid-19-symptoms-are-less-common-now" className={styles.cardLink}>
                                    <div className={styles.healthBigCard}>
                                        <div className={styles.healthImageBig}>
                                            <Image src="/images/hero-bg.png" alt="Covid" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.healthContentBig}>
                                            <span className={styles.catText}>Health</span>
                                            <h3 className={styles.healthTitleBig}>Research Podcast: Long-Covid'19 Symptoms are Less Common Now</h3>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/guides/who-advisors-urge-china-to-release-all-covid-related-data" className={styles.cardLink}>
                                    <div className={styles.healthBigCard}>
                                        <div className={styles.healthImageBig}>
                                            <Image src="/images/product-generic.png" alt="Mask" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.healthContentBig}>
                                            <span className={styles.catText}>Covid'19</span>
                                            <h3 className={styles.healthTitleBig}>WHO, Advisors Urge China to Release all COVID-Related Data</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* List below */}
                            <div className={styles.healthList}>
                                {[
                                    { t: 'Comparison: The Maternal and Fetal Outcomes of COVID-19', i: '/images/hero-bg.png' },
                                    { t: 'Florida Surgeon General\'s Covid Vaccine Claims Harm Public', i: '/images/product-generic.png' },
                                    { t: 'Signs of Endometriosis: What are Common and Surprising Symptoms?', i: '/images/tulsi.png' },
                                    { t: 'How the Science of Happiness is Helping Student Mental Health', i: '/images/ashwagandha.png' },
                                ].map((item, idx) => {
                                    const slug = item.t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                    return (
                                        <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                            <div className={styles.horizontalCardSmall}>
                                                <div className={styles.horizImageSmall}>
                                                    <Image src={item.i} alt={item.t} fill style={{ objectFit: 'cover' }} />
                                                </div>
                                                <div className={styles.horizContentSmall}>
                                                    <span className={styles.catTextSmall}>Health</span>
                                                    <h4 className={styles.horizTitleSmall}>{item.t}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <aside className={styles.sidebar}>
                            {/* Subscribe Widget */}
                            <div className={styles.subscribeWidget}>
                                <div className={styles.mailIconCircle}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <h3 className={styles.widgetTitle}>Subscribe to Updates</h3>
                                <p className={styles.widgetDesc}>Get the latest creative news from FooBar about art, design and business.</p>
                                <input type="email" placeholder="Your email address.." className={styles.newsletterInput} />
                                <button className={styles.newsletterBtn}>SUBSCRIBE</button>
                                <div className={styles.termsCheck}>
                                    <input type="checkbox" id="terms" />
                                    <label htmlFor="terms">By signing up, you agree to the terms</label>
                                </div>
                            </div>

                            <div className={styles.columnHeader} style={{ marginTop: '2rem' }}>
                                <div className={styles.headerLeft}>
                                    <div className={styles.sectionTitleIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                            <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className={styles.columnTitle}>FEATURED</h3>
                                </div>
                            </div>

                            <div className={styles.mostReadList}>
                                {[
                                    { title: 'The Top Three Scandinavian Home Decor Trends', date: 'Sep 19, 2025', views: '4.2K', image: '/images/tulsi.png' },
                                    { title: 'Best Time to Sleep According to Ayurveda', date: 'Aug 24, 2025', views: '15K', image: '/images/hero-bg.png' },
                                ].map((post, idx) => {
                                    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                    return (
                                        <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                            <div className={styles.sidebarCard}>
                                                <div className={styles.sidebarImage}>
                                                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                                </div>
                                                <div className={styles.sidebarContent}>
                                                    <span className={styles.sidebarDate}>{post.date}</span>
                                                    <h4 className={styles.sidebarTitle}>{post.title}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            {/* Section 6: From Lifestyle */}

            <section className={styles.sectionLifestyle}>
                <div className="container">
                    <div className={styles.lifestyleHeader}>
                        <div className={styles.lifestyleTitleWrapper}>
                            <div className={styles.sectionTitleIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                    <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                    <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                </svg>
                            </div>
                            <h2 className={styles.lifestyleTitle}>FROM LIFESTYLE</h2>
                        </div>
                        <div className={styles.lifestyleFilters}>
                            {['All', 'Herbs', 'Lifestyle', 'Yoga', 'Diet'].map((filter) => (
                                <span
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`${styles.filterLink} ${activeFilter === filter ? styles.active : ''}`}
                                >
                                    {filter}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.lifestyleGrid}>
                        {lifestylePosts[activeFilter as keyof typeof lifestylePosts]?.map((item, idx) => {
                            // Simple slugify for demo: "My Title" -> "my-title"
                            const slug = item.t
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)+/g, '');

                            return (
                                <Link href={`/guides/${slug}`} key={idx} className={styles.lifestyleCardLink}>
                                    <div className={styles.lifestyleCard}>
                                        <div className={styles.lifestyleImageContainer}>
                                            <Image src={item.i} alt={item.t} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.lifestyleContent}>
                                            <span className={styles.lifestyleCat}>{item.c}</span>
                                            <h3 className={styles.lifestyleCardTitle}>{item.t}</h3>
                                            <div className={styles.metaRowLifestyle}>
                                                <span>Shane Doe</span><span>•</span><span>{item.d}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 7: Trending Now (Bottom) */}
            <section className={styles.sectionTrending}>
                <div className="container">
                    <div className={styles.columnHeader} style={{ marginBottom: '2rem' }}>
                        <div className={styles.headerLeft}>
                            <div className={styles.sectionTitleIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                    <path d="M4 12H14" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                    <path d="M4 18H10" stroke="#E11D48" strokeWidth="3" strokeLinecap="round"></path>
                                </svg>
                            </div>
                            <h3 className={styles.columnTitle}>TRENDING NOW</h3>
                        </div>
                    </div>

                    <div className={styles.trendingGrid}>
                        {[
                            { id: 1, t: 'The Science Behind Abhyanga (Self-Massage)', d: 'Jan 12, 2026', i: '/images/hero-bg.png' },
                            { id: 2, t: 'Why Copper Water is Good for You', d: 'Jan 12, 2026', i: '/images/triphala.png' },
                            { id: 3, t: '5 Spices to improve Digestion Instantly', d: 'Jan 12, 2026', i: '/images/tulsi.png' },
                            { id: 4, t: 'Understanding the 6 Tastes (Rasas) in Ayurveda', d: 'Jan 12, 2026', i: '/images/product-generic.png' },
                            { id: 5, t: 'Yoga Nidra: The Art of Deep Relaxation', d: 'Jan 10, 2026', i: '/images/ashwagandha.png', play: true },
                            { id: 6, t: 'How to Reset Your Sleep Cycle Naturally', d: 'Jan 09, 2026', i: '/images/hero-bg.png' },
                            { id: 7, t: 'Ayurvedic Guide to Healthy Hair', d: 'Jan 08, 2026', i: '/images/tulsi.png', play: true },
                            { id: 8, t: 'Detox Your Body with Simple Home Remedies', d: 'Jan 07, 2026', i: '/images/triphala.png' }
                        ].map((item, idx) => {
                            const slug = item.t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                            return (
                                <Link href={`/guides/${slug}`} key={idx} className={styles.cardLink}>
                                    <div className={styles.trendingCard}>
                                        <div className={styles.trendingImageContainer}>
                                            <Image src={item.i} alt={item.t} fill style={{ objectFit: 'cover' }} />
                                            {item.play && (
                                                <div className={styles.playOverlay}>
                                                    <div className={styles.playCircle}>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.trendingNumberContent}>
                                            <span className={styles.trendingNumber}>{item.id}.</span>
                                            <div className={styles.trendingTextContent}>
                                                <h3 className={styles.trendingTitle}>{item.t}</h3>
                                                <div className={styles.metaRowTrending}>
                                                    <span>Shane Doe</span><span>|</span><span>{item.d}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section >
        </div >
    );
}
