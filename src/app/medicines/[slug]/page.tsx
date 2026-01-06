import { medicines } from '@/lib/data';
import { notFound } from 'next/navigation';
import MedicineDetailView from '@/components/medicines/MedicineDetailView';

export async function generateStaticParams() {
    return medicines.map((med) => ({
        slug: med.slug,
    }));
}

export default async function MedicineDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const medicine = medicines.find((m) => m.slug === slug);

    if (!medicine) {
        notFound();
    }

    return <MedicineDetailView medicine={medicine} />;
}
