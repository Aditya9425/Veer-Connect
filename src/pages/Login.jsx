import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate login - in real app, this would validate credentials
        const userData = {
            name: 'Rajesh Kumar',
            email: formData.email,
            role: 'Officer',
            rank: 'Captain',
            bio: 'Leading with honor and discipline. Committed to operational excellence and strategic defense initiatives.',
            unit: '4th Battalion',
            base: 'Leh-Ladakh Sector',
            joined: '2023',
            profilePhoto: null,
            socialLinks: {
                linkedin: 'https://linkedin.com',
                instagram: '',
                facebook: '',
                twitter: ''
            }
        };

        onLogin(userData);
        navigate('/profile');
    };

    return (
        <div className="login-premium" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

            {/* Background Layers */}
            <div className="hero-bg" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Indian_Army_soldiers_during_Exercise_Yudh_Abhyas_2016.jpg")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'grayscale(100%) brightness(0.15)', zIndex: -2
            }}></div>
            <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 20, 18, 0.85)', zIndex: -1 }}></div>
            <div className="contour-overlay"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '450px' }}>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="uppercase-label" style={{ opacity: 0.8 }}>VEER CONNECT</span>
                    <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>COMMAND CENTER<br />LOGIN</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Restricted access. Authorized personnel only.</p>
                </div>

                <div style={{
                    background: 'rgba(20, 27, 24, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-subtle)',
                    padding: '2.5rem',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>

                        <div className="form-group">
                            <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>SERVICE ID (EMAIL)</label>
                            <input
                                type="email"
                                name="email"
                                className="input-command"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="official.id@army.mil"
                                style={{ background: 'rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div className="form-group">
                            <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>SECURITY CLEARANCE (PASSWORD)</label>
                            <input
                                type="password"
                                name="password"
                                className="input-command"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                style={{ background: 'rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-command btn-command-filled"
                            style={{
                                width: '100%',
                                marginTop: '1rem',
                                padding: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.9rem'
                            }}
                        >
                            <span>AUTHENTICATE</span>
                            <span>→</span>
                        </button>

                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>NEW RECRUIT? </span>
                            <Link to="/signup" style={{ color: 'var(--accent-green)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em', borderBottom: '1px solid transparent', transition: 'all 0.3s' }} onMouseOver={(e) => e.target.style.borderBottom = '1px solid var(--accent-green)'} onMouseOut={(e) => e.target.style.borderBottom = '1px solid transparent'}>
                                INITIATE REGISTRATION
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
