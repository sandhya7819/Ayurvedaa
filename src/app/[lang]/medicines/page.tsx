'use client';

import { products } from '@/lib/data';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useState } from 'react';
import styles from './page.module.css';
import { Star, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import TrustSection from '@/components/sections/TrustSection';

export default function ProductsPage() {
    const { language } = useLanguage();
    const { isBookmarked, toggleBookmark } = useBookmarks();

    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    const toggleCompare = (id: string) => {
        setSelectedProducts(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        );
    };

    const clearSelection = () => setSelectedProducts([]);

    const t = {
        title: language === 'hi' ? 'आयुर्वेदिक वेलनेस स्टोर' : 'Ayurvedic Wellness Store',
        subtitle: language === 'hi'
            ? 'अपने समग्र कल्याण के लिए हमारे प्रामाणिक, जैविक और समय-परीक्षित आयुर्वेदिक उत्पादों के संग्रह की खोज करें।'
            : 'Discover our curated collection of authentic, organic, and time-tested Ayurvedic products for your holistic well-being.',
        viewDetails: language === 'hi' ? 'विवरण देखें' : 'View Details',
        buyOn: language === 'hi' ? 'खरीदें' : 'Buy on',
        compare: language === 'hi' ? 'तुलना करें' : 'Compare',
        compareNow: language === 'hi' ? 'अभी तुलना करें' : 'Compare Now',
        selected: language === 'hi' ? 'चयनित' : 'Selected'
    };

    const selectedProductData = products.filter(p => selectedProducts.includes(p.id));

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
                        <div key={product.id} style={{ position: 'relative' }}>
                            <div className={styles.compareCheckboxWrapper}>
                                <input
                                    type="checkbox"
                                    className={styles.compareCheckbox}
                                    checked={selectedProducts.includes(product.id)}
                                    onChange={() => toggleCompare(product.id)}
                                    title="Add to compare"
                                />
                            </div>
                            <button
                                className={styles.wishlistBtn}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleBookmark(product.id);
                                }}
                                title="Add to wishlist"
                            >
                                <Heart
                                    size={20}
                                    fill={isBookmarked(product.id) ? "#ef4444" : "none"}
                                    color={isBookmarked(product.id) ? "#ef4444" : "#666"}
                                />
                            </button>
                            <Link href={`/${language}/medicines/${product.id}`} className={styles.card}>
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

                                    {/* Trust Badges */}
                                    {product.trustBadges && (
                                        <div className={styles.trustBadgeContainer}>
                                            {product.trustBadges.slice(0, 2).map((badge, i) => (
                                                <span key={i} className={styles.trustBadge}>{badge}</span>
                                            ))}
                                        </div>
                                    )}

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
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {product.affiliateLink && (
                                                <a
                                                    href={product.affiliateLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer sponsored"
                                                    className={styles.buyBtn}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {t.buyOn} {product.seller || 'Amazon'}
                                                </a>
                                            )}
                                            <span className={styles.actionButton}>
                                                <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Comparison Bar */}
            {selectedProducts.length > 0 && (
                <div className={styles.floatingBar}>
                    <span>{selectedProducts.length} {t.selected}</span>
                    <button className={styles.compareBtn} onClick={() => setIsCompareModalOpen(true)}>
                        {t.compareNow}
                    </button>
                    <button className={styles.closeBarBtn} onClick={clearSelection}>
                        ✕
                    </button>
                </div>
            )}

            {/* Comparison Modal */}
            {isCompareModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsCompareModalOpen(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setIsCompareModalOpen(false)}>✕</button>
                        <h2>{t.compare}</h2>
                        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                                        <th style={{ padding: '1rem' }}>Feature</th>
                                        {selectedProductData.map(p => (
                                            <th key={p.id} style={{ padding: '1rem' }}>
                                                {language === 'hi' ? (p.name_hi || p.name) : p.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>Brand</td>
                                        {selectedProductData.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.brand}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>Price</td>
                                        {selectedProductData.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.price}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>Rating</td>
                                        {selectedProductData.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.rating} ⭐</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>Form</td>
                                        {selectedProductData.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.specs?.form}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>Quantity</td>
                                        {selectedProductData.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.specs?.quantity}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>Key Benefit</td>
                                        {selectedProductData.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.category}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Trust Section */}
            <div style={{ marginTop: '4rem' }}>
                <TrustSection />
            </div>
        </div>
    );
}
