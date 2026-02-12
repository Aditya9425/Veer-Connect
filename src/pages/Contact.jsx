import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <div className="contact-premium">
            {/* Hero Section */}
            <section className="hero-section" style={{ height: '60vh', minHeight: '400px' }}>
                <div className="hero-bg" style={{
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Indian_Army_soldiers_during_Exercise_Yudh_Abhyas_2016.jpg")',
                    filter: 'grayscale(100%) brightness(0.2)'
                }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-vignette"></div>
                <div className="contour-overlay"></div>

                <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px' }}>
                        <span className="uppercase-label">COMMUNICATION CHANNEL</span>
                        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>CONTACT ARMY<br />HEADQUARTERS.</h1>
                        <p className="hero-subtitle">
                            Secure communication lines for official assistance and operational queries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="mission-section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>

                        {/* Left Column: Contact Form */}
                        <div>
                            <div className="mission-label">
                                <span className="uppercase-label">SECURE TRANSMISSION</span>
                                <h2 className="mission-statement" style={{ fontSize: '2rem', marginBottom: '2rem' }}>SEND MESSAGE</h2>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="form-group">
                                    <label className="uppercase-label" style={{ marginBottom: '0.5rem', fontSize: '0.7rem' }}>FULL NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input-command"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Rank and Name"
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="uppercase-label" style={{ marginBottom: '0.5rem', fontSize: '0.7rem' }}>OFFICIAL EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input-command"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="official@email.mil"
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="uppercase-label" style={{ marginBottom: '0.5rem', fontSize: '0.7rem' }}>MESSAGE</label>
                                    <textarea
                                        name="message"
                                        className="input-command"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your message regarding operational queries..."
                                        rows="6"
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', resize: 'vertical' }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-command btn-command-filled"
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        marginTop: '1rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {submitted ? (
                                        <><span>MESSAGE SECURED</span> <span>✓</span></>
                                    ) : (
                                        <><span>TRANSMIT MESSAGE</span> <span>→</span></>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Contact Info & Hours */}
                        <div style={{ padding: '2rem 0' }}>
                            <div className="mission-label">
                                <span className="uppercase-label">DIRECT LINES</span>
                                <h2 className="mission-statement" style={{ fontSize: '2rem', marginBottom: '3rem' }}>CONTACT INFO</h2>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                {/* Info Block */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {[
                                        { label: 'PHONE', value: '+91 1800-XXX-XXXX', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                                        { label: 'EMAIL', value: 'contact@veerconnect.army.in', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                                        { label: 'HEADQUARTERS', value: 'South Block, New Delhi, India 110011', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
                                    ].map((item, index) => (
                                        <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                            <div style={{ color: 'var(--accent-green)', marginTop: '0.2rem' }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d={item.icon} />
                                                    {item.label === 'HEADQUARTERS' && <circle cx="12" cy="11" r="3" />}
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="uppercase-label" style={{ marginBottom: '0.2rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{item.label}</span>
                                                <p style={{ fontSize: '1.1rem', color: 'var(--text-highlight)' }}>{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="divider-line"></div>

                                {/* Office Hours */}
                                <div>
                                    <span className="uppercase-label" style={{ marginBottom: '1.5rem' }}>OFFICE HOURS</span>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)' }}>
                                            <span style={{ color: 'var(--text-secondary)' }}>WEEKDAYS</span>
                                            <span style={{ color: 'var(--text-highlight)', fontFamily: 'monospace' }}>0900 – 1800 hrs</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)' }}>
                                            <span style={{ color: 'var(--text-secondary)' }}>WEEKENDS</span>
                                            <span style={{ color: 'var(--text-highlight)', fontFamily: 'monospace' }}>1000 – 1400 hrs</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(74, 95, 56, 0.1)', border: '1px solid var(--accent-green)' }}>
                                            <span style={{ color: 'var(--accent-green)' }}>EMERGENCY</span>
                                            <span style={{ color: 'var(--text-highlight)', fontFamily: 'monospace' }}>24/7 AVAILABLE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
