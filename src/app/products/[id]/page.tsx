import { products } from '@/lib/data';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return products.map((prod) => ({
        id: prod.id,
    }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <div className="container">
                <div className={styles.breadcrumb}>
                    <Link href="/products" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Products
                    </Link>
                    <span>/</span>
                    <span>{product.name}</span>
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
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className={styles.info}>
                        <span className={styles.brand}>{product.brand}</span>
                        <h1 className={styles.title}>{product.name}</h1>

                        <div className={styles.rating}>
                            <Star size={18} fill="currentColor" color="#fcd34d" />
                            <span>{product.rating} (124 reviews)</span>
                        </div>

                        <div className={styles.price}>{product.price}</div>

                        <p className={styles.description}>{product.details.description}</p>

                        <div className={styles.actions}>
                            <button className="btn btn-primary">
                                <ShoppingCart size={18} style={{ marginRight: '8px' }} /> Add to Cart
                            </button>
                        </div>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <Truck size={20} />
                                <span>Free Shipping on orders over $50</span>
                            </div>
                            <div className={styles.feature}>
                                <ShieldCheck size={20} />
                                <span>Authenticity Guaranteed</span>
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
                                        <span className={styles.stars}>{"★".repeat(review.rating)}</span>
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className={styles.noReviews}>No reviews yet. Be the first to review!</p>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
