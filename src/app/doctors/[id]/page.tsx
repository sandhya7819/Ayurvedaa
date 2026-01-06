import { doctors } from '@/lib/data';
import DoctorDetailView from '@/components/doctors/DoctorDetailView';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return doctors.map((doctor) => ({
        id: doctor.id,
    }));
}

export default function DoctorPage({ params }: { params: { id: string } }) {
    const doctor = doctors.find((d) => d.id === params.id);

    if (!doctor) {
        notFound();
    }

    return <DoctorDetailView doctor={doctor} />;
}
