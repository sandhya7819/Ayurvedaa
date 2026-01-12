'use client';

import React from 'react';
import Image from 'next/image';
import { Share2, Bookmark, MessageCircle, Heart } from 'lucide-react';
import styles from './page.module.css';

export default function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params with React.use()
    const { slug } = React.use(params);

    // Determine title from slug (simple format for demo)
    const formattedTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className={styles.pageContainer}>
            <div className={styles.mainContent}>
                {/* Header / Breadcrumb */}
                <div className={styles.breadcrumb}>
                    Home <span>/</span> Guides <span>/</span> {formattedTitle}
                </div>

                {/* Hero Section */}
                <span className={styles.categoryTag}>LIFESTYLE</span>

                <h1 className={styles.title}>{formattedTitle || 'Standard Blog Post Title Here'}</h1>

                {/* Meta Row */}
                <div className={styles.metaRow}>
                    <div className={styles.authorInfo}>
                        <div className={styles.avatar}>
                            <Image src="/images/hero-bg.png" alt="Author" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <span className={styles.authorName}>Dr. Ananya Sharma</span>
                    </div>

                    <span className={styles.metaDivider}>•</span>
                    <span className={styles.date}>Sep 24, 2025</span>
                    <span className={styles.metaDivider}>•</span>
                    <span className={styles.readTime}>5 min read</span>

                    {/* Action Buttons */}
                    <div className={styles.actionBar}>
                        <button className={styles.actionBtn} aria-label="Share">
                            <Share2 size={16} />
                        </button>
                        <button className={styles.actionBtn} aria-label="Save">
                            <Bookmark size={16} />
                        </button>
                        <button className={styles.actionBtn} aria-label="Comments">
                            <MessageCircle size={16} />
                        </button>
                    </div>
                </div>

                {/* Featured Image */}
                <div className={styles.featuredImageWrapper}>
                    <Image
                        src="/images/triphala.png"
                        alt="Featured"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>

                {/* Content Body */}
                <article className={styles.articleBody}>
                    <p>
                        Ayurveda, the ancient Indian system of medicine, offers a wealth of knowledge on how to live a balanced and healthy life.
                        In today's fast-paced world, these timeless principles are more relevant than ever. This guide explores practical ways
                        to incorporate Ayurvedic wisdom into your daily lifestyle.
                    </p>

                    <h2>Understanding Your Constitution (Prakriti)</h2>
                    <p>
                        According to Ayurveda, every individual is unique, with a distinct physical and mental constitution known as Prakriti.
                        This constitution is determined by the balance of three vital energies or doshas: Vata, Pitta, and Kapha.
                        Understanding your dominant dosha is the first step towards personalized wellness.
                    </p>

                    <p>
                        <strong>Vata</strong> governs movement and communication. When balanced, it promotes creativity and flexibility.
                        Imbalanced Vata can lead to anxiety and digestive issues.
                    </p>

                    <p>
                        <strong>Pitta</strong> controls digestion and metabolism. A balanced Pitta results in intelligence and strong digestion.
                        Excess Pitta can cause inflammation and irritability.
                    </p>

                    <h3>Daily Routines (Dinacharya)</h3>
                    <p>
                        Establishing a consistent daily routine is crucial for maintaining health. This involves waking up before sunrise (Brahma Muhurta),
                        practicing proper oral hygiene, and engaging in light exercise or yoga. These simple habits align your biological clock
                        with nature's rhythms.
                    </p>

                    <p>
                        Diet also plays a pivotal role. Ayurveda recommends eating fresh, seasonal, and home-cooked meals.
                        Eating mindfully, without distractions, enhances digestion and nutrient absorption.
                    </p>

                    <h2>Conclusion</h2>
                    <p>
                        Embracing Ayurveda doesn't require a complete lifestyle overhaul. Small, consistent changes can lead to profound improvements
                        in your well-being. Start by observing your body's signals and adjusting your habits to find your unique balance.
                    </p>
                </article>
            </div>

            {/* Related Articles Section */}
            <div className={styles.relatedSection}>
                <div className={styles.relatedContainer}>
                    <h2 className={styles.relatedSectionTitle}>Related Articles</h2>
                    <div className={styles.relatedGrid}>
                        {[
                            { t: 'Amazon Temporarily Suspends Drone Deliveries After Crashes', c: 'Drones', d: '11mo', i: '/images/hero-bg.png' },
                            { t: 'Perplexity Buys Read.cv, a Social Media Platform', c: 'Featured', d: '11mo', i: '/images/ashwagandha.png' },
                            { t: 'Google Adds AI to Workspace and Increases Pricing', c: 'AI News', d: '12mo', i: '/images/product-generic.png' }
                        ].map((item, idx) => (
                            <div key={idx} className={styles.relatedCard}>
                                <div className={styles.relatedImageWrapper}>
                                    <span className={styles.cardTag}>{item.c}</span>
                                    <Image src={item.i} alt={item.t} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className={styles.relatedContent}>
                                    <h3 className={styles.relatedTitle}>{item.t}</h3>
                                    <div className={styles.relatedMeta}>
                                        <div className={styles.relatedAvatar}></div>
                                        <span>Xzect Labs</span>
                                        <span>•</span>
                                        <span>{item.d}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
