import { products } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, ShoppingCart, Truck, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return products.map((prod) => ({
        id: prod.id,
    }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <div className="container">
                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                    <Link href="/products" className={styles.backLink}>
                        <ArrowLeft size={16} /> Store
                    </Link>
                    <span>/</span>
                    <span>{product.category}</span>
                    <span>/</span>
                    <span style={{ color: '#111827', fontWeight: 500 }}>{product.name}</span>
                </div>

                <div className={styles.grid}>
                    {/* Product Image */}
                    <div className={styles.imageGallery}>
                        <div className={styles.mainImage}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className={styles.img}
                                priority
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className={styles.info}>
                        <span className={styles.brand}>{product.brand}</span>
                        <h1 className={styles.title}>{product.name}</h1>

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
                            <span>{product.details.reviews.length} Review{product.details.reviews.length !== 1 ? 's' : ''}</span>
                        </div>

                        <div className={styles.price}>
                            {product.price}
                            <span className={styles.priceTag}>In Stock</span>
                        </div>

                        <p className={styles.description}>{product.details.description}</p>

                        <div className={styles.actions}>
                            <button className={styles.addToCartBtn}>
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                            <button className="btn btn-outline" style={{ padding: '0 1rem', borderColor: '#e5e7eb' }}>
                                <Heart size={20} color="#4b5563" />
                            </button>
                        </div>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <Truck size={20} className={styles.featureIcon} />
                                <span>Free Shipping &gt; $50</span>
                            </div>
                            <div className={styles.feature}>
                                <ShieldCheck size={20} className={styles.featureIcon} />
                                <span>100% Authentic</span>
                            </div>
                            <div className={styles.feature}>
                                <Leaf size={20} className={styles.featureIcon} />
                                <span>Organic Ingredients</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className={styles.reviewsSection}>
                    <h2 className={styles.sectionTitle}>Customer Reviews</h2>
                    <div className={styles.reviewsGrid}>
                        {product.details.reviews.length > 0 ? (
                            product.details.reviews.map((review, index) => (
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
                                <p>No reviews yet.</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Be the first to share your experience with this product!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
