'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, ShoppingCart, Truck, ShieldCheck, Leaf, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/[lang]/products/[id]/page.module.css';

interface ProductDetailViewProps {
    product: any;
    similarProducts: any[];
}

export default function ProductDetailView({ product, similarProducts }: ProductDetailViewProps) {
    const { language } = useLanguage();

    const name = language === 'hi' ? (product.name_hi || product.name) : product.name;
    const description = language === 'hi' ? (product.description_hi || product.details.description) : product.details.description; // Fallback logic slightly different as products array has details.description unlike medicines

    const t = {
        back: language === 'hi' ? 'स्टोर पर वापस जाएं' : 'Back to Store',
        reviews: language === 'hi' ? 'समीक्षाएं' : 'Reviews',
        inStock: language === 'hi' ? 'स्टॉक में है' : 'In Stock',
        addToCart: language === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart',
        buyOn: language === 'hi' ? 'खरीदें' : 'Buy on',
        features: {
            shipping: language === 'hi' ? 'मुफ्त शिपिंग ₹500 से ऊपर' : 'Free Shipping > ₹500',
            authentic: language === 'hi' ? '100% असली' : '100% Authentic',
            organic: language === 'hi' ? 'प्राकृतिक सामग्री' : 'Natural Ingredients'
        },
        reviewsTitle: language === 'hi' ? 'ग्राहक समीक्षा' : 'Customer Reviews',
        noReviews: language === 'hi' ? 'कोई समीक्षा नहीं।' : 'No reviews yet.',
        comparison: language === 'hi' ? 'समान उत्पादों के साथ तुलना' : 'Compare with Similar Products',
        specs: language === 'hi' ? 'विशिष्टताएँ' : 'Specifications',
        brand: language === 'hi' ? 'ब्रांड' : 'Brand',
        form: language === 'hi' ? 'रूप' : 'Form',
        quantity: language === 'hi' ? 'मात्रा' : 'Quantity',
        origin: language === 'hi' ? 'मूल' : 'Origin'
    };

    return (
        <article className={styles.container}>
            <div className="container">
                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                    <Link href={`/${language}/products`} className={styles.backLink}>
                        <ArrowLeft size={16} /> {t.back}
                    </Link>
                    <span>/</span>
                    <span>{product.category}</span>
                    <span>/</span>
                    <span style={{ color: '#111827', fontWeight: 500 }}>{name}</span>
                </div>

                <div className={styles.grid}>
                    {/* Product Image */}
                    <div className={styles.imageGallery}>
                        <div className={styles.mainImage}>
                            <Image
                                src={product.image}
                                alt={name}
                                fill
                                className={styles.img}
                                priority
                            />
                            {product.trustBadges && (
                                <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                                    {product.trustBadges.map((badge: string, i: number) => (
                                        <span key={i} style={{ background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', color: '#059669', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className={styles.info}>
                        <span className={styles.brand}>{product.brand}</span>
                        <h1 className={styles.title}>{name}</h1>

                        <div className={styles.rating}>
                            <div className={styles.ratingStars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                        stroke={i < Math.floor(product.rating) ? "none" : "currentColor"}
                                    />
                                ))}
                            </div>
                            <span>{product.rating} / 5</span>
                            <span>•</span>
                            <span>{product.details.reviews.length} {t.reviews}</span>
                        </div>

                        <div className={styles.price}>
                            {product.price}
                            <span className={styles.priceTag}>{t.inStock}</span>
                        </div>

                        <p className={styles.description}>{description}</p>

                        <div className={styles.actions}>
                            {product.affiliateLink ? (
                                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className={styles.addToCartBtn} style={{ background: '#f59e0b', borderColor: '#d97706' }}>
                                    <ExternalLink size={20} /> {t.buyOn} {product.seller || 'Amazon'}
                                </a>
                            ) : (
                                <button className={styles.addToCartBtn}>
                                    <ShoppingCart size={20} /> {t.addToCart}
                                </button>
                            )}

                            <button className="btn btn-outline" style={{ padding: '0 1rem', borderColor: '#e5e7eb' }}>
                                <Heart size={20} color="#4b5563" />
                            </button>
                        </div>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <Truck size={20} className={styles.featureIcon} />
                                <span>{t.features.shipping}</span>
                            </div>
                            <div className={styles.feature}>
                                <ShieldCheck size={20} className={styles.featureIcon} />
                                <span>{t.features.authentic}</span>
                            </div>
                            <div className={styles.feature}>
                                <Leaf size={20} className={styles.featureIcon} />
                                <span>{t.features.organic}</span>
                            </div>
                        </div>

                        {/* Specs Table (Small) */}
                        {product.specs && (
                            <div style={{ marginTop: '2rem', background: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{t.specs}</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.9rem' }}>
                                    <div><strong>{t.form}:</strong> {product.specs.form}</div>
                                    <div><strong>{t.quantity}:</strong> {product.specs.quantity}</div>
                                    <div><strong>{t.origin}:</strong> {product.specs.origin}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Comparison Section */}
                {similarProducts.length > 0 && (
                    <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                        <h2 className={styles.sectionTitle}>{t.comparison}</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                                        <th style={{ padding: '1rem', width: '25%' }}>Feature</th>
                                        <th style={{ padding: '1rem', width: '25%', background: '#f0fdf4' }}>{name} (Current)</th>
                                        {similarProducts.map(p => (
                                            <th key={p.id} style={{ padding: '1rem', width: '25%' }}>
                                                <Link href={`/${language}/products/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    {language === 'hi' ? (p.name_hi || p.name) : p.name}
                                                </Link>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{t.brand}</td>
                                        <td style={{ padding: '1rem', background: '#f0fdf4' }}>{product.brand}</td>
                                        {similarProducts.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.brand}</td>)}
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>Price</td>
                                        <td style={{ padding: '1rem', background: '#f0fdf4', fontWeight: 'bold' }}>{product.price}</td>
                                        {similarProducts.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.price}</td>)}
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>Ratings</td>
                                        <td style={{ padding: '1rem', background: '#f0fdf4' }}>⭐ {product.rating}</td>
                                        {similarProducts.map(p => <td key={p.id} style={{ padding: '1rem' }}>⭐ {p.rating}</td>)}
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>Key Spec</td>
                                        <td style={{ padding: '1rem', background: '#f0fdf4' }}>{product.specs?.form}, {product.specs?.quantity}</td>
                                        {similarProducts.map(p => <td key={p.id} style={{ padding: '1rem' }}>{p.specs?.form || '-'}, {p.specs?.quantity || '-'}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Reviews Section */}
                <div className={styles.reviewsSection}>
                    <h2 className={styles.sectionTitle}>{t.reviewsTitle}</h2>
                    <div className={styles.reviewsGrid}>
                        {product.details.reviews.length > 0 ? (
                            product.details.reviews.map((review: any, index: number) => (
                                <div key={index} className={styles.reviewCard}>
                                    <div className={styles.reviewHeader}>
                                        <span className={styles.reviewer}>{review.user}</span>
                                        <span className={styles.reviewStars}>{"★".repeat(review.rating)}</span>
                                    </div>
                                    <p className={styles.reviewText}>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noReviews}>
                                <p>{t.noReviews}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
