import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: 'Soldier',
        unitCode: '',
        profilePhoto: null
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    profilePhoto: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="signup-premium" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

            {/* Background Layers */}
            <div className="hero-bg" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Indian_Army_soldiers_during_Exercise_Yudh_Abhyas_2016.jpg")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'grayscale(100%) brightness(0.2)', zIndex: -2
            }}></div>
            <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 20, 18, 0.85)', zIndex: -1 }}></div>
            <div className="contour-overlay"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '500px' }}>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="uppercase-label" style={{ opacity: 0.8 }}>VEER CONNECT</span>
                    <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>INITIATE SERVICE<br />RECORD</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Secure personnel registration terminal.</p>
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
                            <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>OFFICIAL NAME</label>
                            <input
                                type="text"
                                name="fullName"
                                className="input-command"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="RANK FIRSTNAME LASTNAME"
                                style={{ background: 'rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div className="form-group">
                            <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>SERVICE EMAIL</label>
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
                            <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>ACCESS CODE (PASSWORD)</label>
                            <input
                                type="password"
                                name="password"
                                className="input-command"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength="6"
                                placeholder="••••••••"
                                style={{ background: 'rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>DESIGNATION</label>
                                <select
                                    name="role"
                                    className="input-command"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    style={{ background: 'rgba(0,0,0,0.2)', cursor: 'pointer' }}
                                >
                                    <option value="Soldier">SOLDIER</option>
                                    <option value="Officer">OFFICER</option>
                                    <option value="Cadet">CADET</option>
                                    <option value="Commander">COMMANDER</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="uppercase-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>UNIT CODE</label>
                                <input
                                    type="text"
                                    name="unitCode"
                                    className="input-command"
                                    value={formData.unitCode}
                                    onChange={handleChange}
                                    placeholder="OPTIONAL"
                                    style={{ background: 'rgba(0,0,0,0.2)' }}
                                />
                            </div>
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
                            <span>SUBMIT FOR CLEARANCE</span>
                            <span>→</span>
                        </button>

                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>ALREADY ENLISTED? </span>
                            <Link to="/login" style={{ color: 'var(--accent-green)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em', borderBottom: '1px solid transparent', transition: 'all 0.3s' }} onMouseOver={(e) => e.target.style.borderBottom = '1px solid var(--accent-green)'} onMouseOut={(e) => e.target.style.borderBottom = '1px solid transparent'}>
                                ACCESS COMMAND CENTER
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--accent-green)',
                        padding: '3rem',
                        textAlign: 'center',
                        maxWidth: '400px',
                        width: '90%',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '60px', height: '60px',
                            borderRadius: '50%',
                            border: '2px solid var(--accent-green)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: 'var(--accent-green)',
                            fontSize: '2rem'
                        }}>
                            ✓
                        </div>
                        <h3 className="hero-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>REGISTRATION<br />INITIALIZED</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Your service record has been created. Redirecting to command login...
                        </p>
                        <div className="progress-bar" style={{ width: '100%', height: '2px', background: 'var(--border-subtle)', marginTop: '1rem' }}>
                            <div className="progress-fill" style={{ width: '100%', animation: 'fillProgress 2s linear' }}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUp;
