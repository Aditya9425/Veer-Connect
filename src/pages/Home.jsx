import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const TacticalVisual = () => (
    <div className="tactical-visual-container" style={{ width: '100%', height: '100%', background: '#0f1412', position: 'relative', overflow: 'hidden' }}>
        {/* Grid Background */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(74, 95, 56, 0.2)" strokeWidth="1" />
                </pattern>
                <radialGradient id="scan-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="rgba(45, 199, 214, 0)" />
                    <stop offset="100%" stopColor="rgba(45, 199, 214, 0.1)" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Central Target */}
            <circle cx="50%" cy="50%" r="100" stroke="rgba(74, 95, 56, 0.6)" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="60" stroke="rgba(74, 95, 56, 0.4)" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="20" fill="rgba(74, 95, 56, 0.8)" />

            {/* Axis Lines */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(74, 95, 56, 0.3)" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(74, 95, 56, 0.3)" strokeWidth="1" />

            {/* Moving Scan Line */}
            <line x1="50%" y1="50%" x2="50%" y2="0" stroke="rgba(45, 199, 214, 0.8)" strokeWidth="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50% 50%"
                    to="360 50% 50%"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </line>

            {/* Random Blips */}
            <circle cx="60%" cy="40%" r="3" fill="#ff4444" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0s" repeatCount="indefinite" />
            </circle>
            <circle cx="30%" cy="70%" r="3" fill="#ff4444" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="80%" cy="20%" r="3" fill="#2dc7d6" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="4s" begin="0.5s" repeatCount="indefinite" />
            </circle>
        </svg>

        {/* Overlay Text */}
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', fontFamily: 'monospace', color: 'rgba(45, 199, 214, 0.8)', fontSize: '0.8rem' }}>
            STATUS: ACTIVE MONITORING<br />
            SECTOR: NORTH-EAST<br />
            SIGNAL: ENCRYPTED
        </div>
    </div>
);

function Home() {
    const [stats, setStats] = useState({
        personnel: 0,
        missions: 0,
        units: 0
    });
    const [currentQuote, setCurrentQuote] = useState(0);
    const statsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const quotes = [
        "The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war.",
        "Courage is not the absence of fear, but the triumph over it.",
        "In war, there are no unwounded soldiers.",
        "The brave die never, though they sleep in dust: Their courage nerves a thousand living men."
    ];

    const capabilities = [
        {
            title: 'Secure Access Protocol',
            description: 'Military-grade encryption with multi-factor authentication and biometric verification systems'
        },
        {
            title: 'Personnel Command File',
            description: 'Comprehensive soldier profiles with clearance levels and deployment history tracking'
        },
        {
            title: 'Tactical Mission Hub',
            description: 'Real-time mission tracking, strategic planning, and performance analytics dashboard'
        },
        {
            title: 'Operational Display Infrastructure',
            description: 'Advanced command and control systems for coordinated defense operations'
        }
    ];

    // Animated counter effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateStats();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    const animateStats = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = {
            personnel: 124000,
            missions: 8450,
            units: 42
        };

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setStats({
                personnel: Math.floor(targets.personnel * progress),
                missions: Math.floor(targets.missions * progress),
                units: Math.floor(targets.units * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setStats(targets);
            }
        }, interval);
    };

    // Rotate quotes
    useEffect(() => {
        const quoteTimer = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 6000);

        return () => clearInterval(quoteTimer);
    }, []);

    return (
        <div className="home-premium">
            {/* Cinematic Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>
                <div className="hero-vignette"></div>
                <div className="contour-overlay"></div>

                <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div className="hero-content">
                        <span className="uppercase-label">INDIAN ARMY DIGITAL COMMAND</span>
                        <h1 className="hero-title">WE ARE ALWAYS READY.</h1>
                        <p className="hero-subtitle">
                            Secure Digital Infrastructure for Modern Defense Operations.
                        </p>
                        <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link to="/login" className="btn-command">
                                SIGN IN
                            </Link>
                            <Link to="/about" className="btn-command" style={{ border: 'none', paddingLeft: 0 }}>
                                Explore Capabilities
                            </Link>
                        </div>
                    </div>

                    {/* Floating Right Image */}
                    <div className="hero-floating-visual"></div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-label">
                            <span className="uppercase-label">MISSION</span>
                        </div>
                        <div className="mission-content">
                            <h2 className="mission-statement">DO SMALL THINGS IN A GREAT WAY.</h2>
                            <p className="mission-desc">
                                Our commitment to excellence drives every operation, every decision, and every action.
                                We maintain the highest standards of discipline, duty, and honor in service to the nation.
                            </p>
                            <div className="divider-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Scale Section */}
            <section className="scale-section" ref={statsRef}>
                <div className="container">
                    <h2 className="uppercase-label" style={{ marginBottom: '3rem', textAlign: 'center' }}>OPERATIONAL SCALE</h2>

                    <div className="scale-grid">
                        <div className="stat-item">
                            <span className="stat-number">{stats.personnel.toLocaleString()}+</span>
                            <span className="stat-label">Active Personnel</span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-number">{stats.missions.toLocaleString()}+</span>
                            <span className="stat-label">Missions Completed</span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-number">{stats.units}</span>
                            <span className="stat-label">Units Connected</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="capabilities-section">
                <div className="container">
                    <div className="capabilities-layout">
                        <div className="capabilities-image">
                            <TacticalVisual />
                        </div>

                        <div className="capability-list">
                            {capabilities.map((capability, index) => (
                                <div key={index} className="capability-item">
                                    <h3 className="cap-title">{capability.title}</h3>
                                    <p className="cap-desc">{capability.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Code of Honor Section */}
            <section className="honor-section">
                <div className="honor-insignia-bg">⚓</div>
                <div className="container honor-content">
                    <h2 className="uppercase-label" style={{ marginBottom: '3rem' }}>CODE OF HONOR</h2>
                    <p className="honor-quote">
                        "{quotes[currentQuote]}"
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                            {quotes.map((_, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        width: '40px',
                                        height: '2px',
                                        background: idx === currentQuote ? 'var(--accent-green)' : 'var(--border-subtle)',
                                        transition: 'background 0.3s ease'
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
