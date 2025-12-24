import { products } from '@/lib/data';
import styles from './page.module.css';
import { Star, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Curated Products</h1>
                    <p className={styles.subtitle}>Authentic Ayurvedic products from trusted brands.</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={styles.img}
                                />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.brand}>{product.brand}</span>
                                    <span className={styles.rating}>★ {product.rating}</span>
                                </div>
                                <Link href={`/products/${product.id}`} className={styles.nameLink}>
                                    <h3 className={styles.name}>{product.name}</h3>
                                </Link>
                                <div className={styles.footer}>
                                    <span className={styles.price}>{product.price}</span>
                                    <Link href={`/products/${product.id}`} className={styles.buyBtn}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
