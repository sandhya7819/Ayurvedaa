'use client';

import Link from 'next/link';

export default function MedicalDisclaimer() {
    return (
        <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Medical Disclaimer</h1>

            <section style={{ marginBottom: '2rem', lineHeight: '1.7', color: '#333' }}>
                <p style={{ marginBottom: '1rem' }}>
                    **IMPORTANT:** The content on **Ayurveda Guide** (including text, graphics, images, and other material) is for informational and educational purposes only.
                </p>
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1.5rem', borderRadius: '8px', color: '#b91c1c' }}>
                    <strong>Not Medical Advice:</strong> The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. No Doctor-Patient Relationship</h2>
                <p>
                    Use of this website does not establish a doctor-patient relationship. Communications on this website do not create a confidential doctor-patient relationship.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Ayurvedic Treatments</h2>
                <p>
                    Ayurvedic herbs and treatments can be potent. What works for one individual (Prakriti) may not be suitable for another. Self-medication with herbs can be dangerous.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Emergency</h2>
                <p>
                    If you think you may have a medical emergency, call your doctor or emergency services immediately.
                </p>
            </section>

            <div style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Last Updated: January 2026
            </div>
        </div>
    );
}
