import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductDetailView from '@/components/products/ProductDetailView';

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

    // specific logic to find similar products for comparison
    // Filter by same category, exclude current product, take up to 2
    const similarProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 2);

    // If no similar products in category (e.g. only 1 item), take any other 2 for demo
    if (similarProducts.length === 0) {
        const others = products.filter(p => p.id !== product.id).slice(0, 2);
        similarProducts.push(...others);
    }

    return <ProductDetailView product={product} similarProducts={similarProducts} />;
}
