import { healthConditions, popularHerbs } from '@/lib/data';
import { notFound } from 'next/navigation';
import ConditionDetailView from '@/components/conditions/ConditionDetailView';

export async function generateStaticParams() {
    return healthConditions.map((condition) => ({
        slug: condition.slug,
    }));
}

export default async function ConditionDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const condition = healthConditions.find((c) => c.slug === slug);

    if (!condition) {
        notFound();
    }

    // Find recommended herbs
    const recommendedHerbs = popularHerbs.filter(herb =>
        condition.recommendedHerbs?.includes(herb.slug)
    );

    return <ConditionDetailView condition={condition} recommendedHerbs={recommendedHerbs} />;
}
