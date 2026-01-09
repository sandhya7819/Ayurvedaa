'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import styles from './TrustedProducts.module.css';
import { useLanguage } from '@/context/LanguageContext';

const products = [
    { id: 1, name: 'Ashwagandha Gold', brand: 'Organic India', price: '$25', rating: 4.8, image: '/images/product1.jpg' },
    { id: 2, name: 'Triphala Juice', brand: 'Kapiva', price: '$15', rating: 4.5, image: '/images/product2.jpg' },
    { id: 3, name: 'Chyawanprash', brand: 'Dabur', price: '$12', rating: 4.9, image: '/images/product3.jpg' },
    { id: 4, name: 'Kumkumadi Oil', brand: 'Kama Ayurveda', price: '$45', rating: 4.7, image: '/images/product4.jpg' },
];

export default function TrustedProducts() {
    const { t, language } = useLanguage();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('trusted_products')}</h2>
                    <Link href={`/${language}/medicines`} className={styles.link}>{t('view_all_products')} &rarr;</Link>
                </div>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <Link href={`/${language}/medicines/${product.id}`} key={product.id} className={styles.card} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={styles.imagePlaceholder}>
                                <span>Product Image</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.brand}>{product.brand}</span>
                                    <div className={styles.rating}>
                                        <Star size={14} fill="currentColor" /> {product.rating}
                                    </div>
                                </div>
                                <h3 className={styles.name}>{product.name}</h3>
                                <div className={styles.footer}>
                                    <span className={styles.price}>{product.price}</span>
                                    <button className={styles.buyBtn}>{t('view_details')}</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
