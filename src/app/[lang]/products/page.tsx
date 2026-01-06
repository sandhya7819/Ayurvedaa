'use client';

import { products } from '@/lib/data';
import styles from './page.module.css';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import TrustSection from '@/components/sections/TrustSection';

export default function ProductsPage() {
    const { language } = useLanguage();

    const t = {
        title: language === 'hi' ? 'आयुर्वेदिक वेलनेस स्टोर' : 'Ayurvedic Wellness Store',
        subtitle: language === 'hi'
            ? 'अपने समग्र कल्याण के लिए हमारे प्रामाणिक, जैविक और समय-परीक्षित आयुर्वेदिक उत्पादों के संग्रह की खोज करें।'
            : 'Discover our curated collection of authentic, organic, and time-tested Ayurvedic products for your holistic well-being.',
        viewDetails: language === 'hi' ? 'विवरण देखें' : 'View Details'
    };

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{t.title}</h1>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <Link href={`/${language}/products/${product.id}`} key={product.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.brand}>{product.brand}</span>
                                    <h3 className={styles.productName}>
                                        {language === 'hi' ? (product.name_hi || product.name) : product.name}
                                    </h3>
                                </div>

                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={styles.star}
                                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                            stroke={i < Math.floor(product.rating) ? "none" : "currentColor"}
                                        />
                                    ))}
                                    <span className={styles.ratingValue}>({product.rating})</span>
                                </div>

                                <div className={styles.cardFooter}>
                                    <span className={styles.price}>{product.price}</span>
                                    <span className={styles.actionButton}>
                                        {t.viewDetails} <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Trust Section */}
            <div style={{ marginTop: '4rem' }}>
                <TrustSection />
            </div>
        </div>
    );
}
