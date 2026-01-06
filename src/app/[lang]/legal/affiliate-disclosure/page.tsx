'use client';

export default function AffiliateDisclosure() {
    return (
        <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Affiliate Disclosure</h1>

            <section style={{ marginBottom: '2rem', lineHeight: '1.7', color: '#333' }}>
                <p style={{ marginBottom: '1rem' }}>
                    Transparency is important to us. **Ayurveda Guide** participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.
                </p>

                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1.5rem', borderRadius: '8px', color: '#1e40af' }}>
                    <strong>No Extra Cost to You:</strong> Clicking on an affiliate link and making a purchase does NOT increase the price you pay.
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How We Select Products</h2>
                <p>
                    Our editorial content is not influenced by affiliate partnerships. We only recommend authentic Ayurvedic products that meet our quality standards (GMP certified, pure ingredients).
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Amazon Associates Program</h2>
                <p>
                    Ayurveda Guide is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
                </p>
            </section>

            <div style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Last Updated: January 2026
            </div>
        </div>
    );
}
