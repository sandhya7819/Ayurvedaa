import { popularHerbs } from '@/lib/data';
import { notFound } from 'next/navigation';
import HerbDetailView from '@/components/herbs/HerbDetailView';

export async function generateStaticParams() {
    return popularHerbs.map((herb) => ({
        slug: herb.slug,
    }));
}

export default async function HerbDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const herb = popularHerbs.find((h) => h.slug === slug);

    if (!herb) {
        notFound();
    }

    return <HerbDetailView herb={herb} />;
}
