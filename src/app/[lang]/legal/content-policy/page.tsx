'use client';

export default function ContentPolicy() {
    return (
        <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Content Review Policy</h1>

            <section style={{ marginBottom: '2rem', lineHeight: '1.7', color: '#333' }}>
                <p style={{ marginBottom: '1rem' }}>
                    At **Ayurveda Guide**, we are committed to providing accurate, trustworthy, and evidence-based information about Ayurveda.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Editorial Integrity</h2>
                <p>
                    Our content is written and reviewed by qualified Ayurvedic practitioners and researchers. We distinguish between classical Ayurvedic texts (Samhitas) and modern scientific studies.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Sourcing and Citations</h2>
                <p>
                    We rely on peer-reviewed studies, classical texts (Charaka Samhita, Sushruta Samhita), and reputable health organizations. We do not use anonymous sources.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Corrections</h2>
                <p>
                    We are committed to correcting errors quickly and transparently. If you find an inaccuracy, please contact us at edit@ayurvedaguide.com.
                </p>
            </section>

            <div style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Last Updated: January 2026
            </div>
        </div>
    );
}
