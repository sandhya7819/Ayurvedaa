export default function DisclaimerPage() {
    return (
        <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: 'var(--color-primary)' }}>Medical Disclaimer</h1>
            <div style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    The content on <strong>Ayurveda Guide</strong> is for informational and educational purposes only. It is not intended to provide medical advice or to take the place of such advice or treatment from a personal physician.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    All readers/viewers of this content are advised to consult their doctors or qualified health professionals regarding specific health questions. Neither the publishers of this content nor the authors take responsibility for possible health consequences of any person or persons reading or following the information in this educational content.
                </p>
                <p>
                    All viewers of this content, especially those taking prescription or over-the-counter medications, should consult their physicians before beginning any nutrition, supplement, or lifestyle program.
                </p>
            </div>
        </div>
    );
}
