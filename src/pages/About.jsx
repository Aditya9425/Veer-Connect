import { useEffect, useRef, useState } from 'react';

function About() {
    const [visibleSections, setVisibleSections] = useState([]);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionsRef.current.indexOf(entry.target);
                        if (!visibleSections.includes(index)) {
                            setVisibleSections(prev => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [visibleSections]);

    return (
        <div className="about-premium">
            {/* Hero Section */}
            <section className="hero-section" style={{ height: '60vh', minHeight: '400px' }}>
                <div className="hero-bg" style={{
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Indian_Army_soldiers_during_Exercise_Yudh_Abhyas_2016.jpg")',
                    filter: 'grayscale(100%) brightness(0.3)'
                }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-vignette"></div>
                <div className="contour-overlay"></div>

                <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px' }}>
                        <span className="uppercase-label">Veer Connect</span>
                        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>STRATEGIC COMMAND<br />INFRASTRUCTURE.</h1>
                        <p className="hero-subtitle">
                            Connecting personnel, bridging operations, and securing communications for the defense forces of tomorrow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section
                className="mission-section"
                ref={el => sectionsRef.current[0] = el}
                style={{
                    opacity: visibleSections.includes(0) ? 1 : 0,
                    transform: visibleSections.includes(0) ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'var(--transition-slow)'
                }}
            >
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-label">
                            <span className="uppercase-label">FOUNDATION</span>
                            <h2 className="mission-statement">CORE VALUES</h2>
                            <p className="mission-desc">
                                The pillars that uphold our commitment to national security and operational excellence.
                                Each value represents a non-negotiable standard of our digital infrastructure.
                            </p>
                        </div>
                        <div className="mission-content">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                {[
                                    {
                                        title: 'DISCIPLINE', icon: (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <path d="M12 8v8M8 12h8" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'DUTY', icon: (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'HONOR', icon: (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 6v6l4 2" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'INNOVATION', icon: (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                            </svg>
                                        )
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="value-card" style={{
                                        border: '1px solid var(--border-subtle)',
                                        background: 'rgba(255,255,255,0.02)',
                                        padding: '2rem',
                                        transition: 'var(--transition-medium)',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--accent-green)';
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>{item.icon}</div>
                                        <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 0 }}>{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section
                className="scale-section"
                ref={el => sectionsRef.current[1] = el}
                style={{
                    opacity: visibleSections.includes(1) ? 1 : 0,
                    transform: visibleSections.includes(1) ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'var(--transition-slow)'
                }}
            >
                <div className="container">
                    <div className="capabilities-layout" style={{ gap: '4rem' }}>
                        <div>
                            <h2 className="mission-statement" style={{ marginBottom: '1rem' }}>OUR VISION</h2>
                            <div style={{ width: '60px', height: '2px', background: 'var(--accent-green)', marginBottom: '2rem' }}></div>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                To become the world's most advanced military personnel management system,
                                setting new standards in security, efficiency, and user experience. We envision
                                a future where every soldier has instant access to the tools and information
                                they need to excel in their duties and maintain peak readiness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Journey - Timeline */}
            <section
                className="capabilities-section"
                ref={el => sectionsRef.current[2] = el}
                style={{
                    opacity: visibleSections.includes(2) ? 1 : 0,
                    transform: visibleSections.includes(2) ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'var(--transition-slow)'
                }}
            >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="uppercase-label">OPERATIONAL LIFECYCLE</span>
                        <h2 className="section-subtitle" style={{ border: 'none', fontSize: '2rem' }}>SERVICE JOURNEY</h2>
                    </div>

                    <div style={{ position: 'relative', padding: '2rem 0' }}>
                        {/* Timeline Line */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            width: '100%',
                            height: '1px',
                            background: 'var(--border-subtle)',
                            zIndex: 0
                        }}>
                            <div style={{
                                width: visibleSections.includes(2) ? '100%' : '0%',
                                height: '100%',
                                background: 'var(--accent-green)',
                                transition: 'width 2s ease-out',
                                opacity: 0.5
                            }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', position: 'relative', zIndex: 1 }}>
                            {[
                                { title: 'RECRUITMENT', desc: 'Elite Selection' },
                                { title: 'TRAINING', desc: 'Rigorous Prep' },
                                { title: 'DEPLOYMENT', desc: 'Mission Active' },
                                { title: 'SERVICE', desc: 'Honor & Duty' }
                            ].map((item, index) => (
                                <div key={index} style={{ textAlign: 'center', background: 'var(--bg-primary)', padding: '1rem' }}>
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        background: 'var(--bg-primary)',
                                        border: '2px solid var(--accent-green)',
                                        margin: '0 auto 1.5rem',
                                        transform: 'rotate(45deg)'
                                    }}></div>
                                    <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Impact Section (Operational Scale Style) */}
            <section className="scale-section" style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
                <div className="container">
                    <div className="scale-grid">
                        <div className="stat-item" style={{ textAlign: 'center' }}>
                            <span className="stat-number">99.9%</span>
                            <span className="stat-label">SYSTEM UPTIME</span>
                        </div>
                        <div style={{ width: '1px', height: '60px', background: 'var(--border-subtle)' }}></div>
                        <div className="stat-item" style={{ textAlign: 'center' }}>
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">SUPPORT AVAILABLE</span>
                        </div>
                        <div style={{ width: '1px', height: '60px', background: 'var(--border-subtle)' }}></div>
                        <div className="stat-item" style={{ textAlign: 'center' }}>
                            <span className="stat-number">100%</span>
                            <span className="stat-label">SECURE & ENCRYPTED</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
