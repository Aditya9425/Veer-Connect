import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ userData, setUserData }) {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(userData || {});
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    // Mock data if no user data (for preview purpose)
    const previewData = {
        name: 'Rajesh Kumar',
        rank: 'Captain',
        role: 'Infantry Officer',
        unit: '4th Battalion',
        base: 'Leh-Ladakh Sector',
        joined: '2023',
        bio: 'Leading with honor and discipline. Committed to operational excellence and strategic defense initiatives.',
        profilePhoto: null
    };

    const displayData = userData || previewData;

    const badges = [
        { name: 'Service Medal', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', earned: true },
        { name: 'Distinguished Officer', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', earned: true },
        { name: 'Defense Contributor', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', earned: true }
    ];

    useEffect(() => {
        if (!userData) {
            // For development preview, we skip redirect
            // navigate('/login');
            setEditedData(previewData);
        } else {
            setEditedData(userData);
        }
    }, [userData, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setUserData(editedData);
        localStorage.setItem('veerConnectUser', JSON.stringify(editedData));
        setIsEditing(false);
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 2000);
    };

    return (
        <div className="profile-dashboard">
            {/* Background Elements */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
                <div className="hero-bg" style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
                    opacity: 0.05
                }}></div>
                <div className="contour-overlay"></div>
            </div>

            <div className="container dashboard-container" style={{ padding: '6rem 2rem' }}>

                {/* Header Section */}
                <div className="profile-header" style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                        <div>
                            <span className="uppercase-label">PERSONNEL DASHBOARD</span>
                            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                                WELCOME, {displayData.name}
                            </h1>
                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-green)' }}>RANK:</span> {displayData.rank}
                                </div>
                                <div style={{ width: '1px', background: 'var(--border-subtle)' }}></div>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-green)' }}>UNIT:</span> {displayData.unit || 'Unassigned'}
                                </div>
                                <div style={{ width: '1px', background: 'var(--border-subtle)' }}></div>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-green)' }}>CLEARANCE:</span> LEVEL 4
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right', display: 'none', md: { display: 'block' } }}>
                            <div className="status-indicator" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid var(--accent-green)', background: 'rgba(74, 95, 56, 0.1)' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', boxShadow: '0 0 5px var(--accent-green)' }}></div>
                                <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--accent-green)' }}>ACTIVE DUTY</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem' }}>

                    {/* Left Column: Profile Identity */}
                    <aside className="profile-sidebar">
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{
                                position: 'relative',
                                width: '160px',
                                height: '160px',
                                margin: '0 auto 2rem'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    borderRadius: '50%',
                                    border: '1px solid var(--border-subtle)',
                                    padding: '5px'
                                }}>
                                    <div style={{
                                        width: '100%', height: '100%',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: '1px solid var(--accent-green)'
                                    }}>
                                        <img
                                            src={displayData.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayData.name)}&size=200&background=141b18&color=4a5f38&bold=true`}
                                            alt={displayData.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-highlight)', marginBottom: '0.5rem' }}>{displayData.name}</h2>
                            <p style={{ color: 'var(--accent-green)', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                {displayData.rank} • {displayData.unit || 'INFANTRY'}
                            </p>

                            {isEditing ? (
                                <textarea
                                    name="bio"
                                    className="input-command"
                                    style={{ marginTop: '1rem', height: '100px', fontSize: '0.9rem' }}
                                    value={editedData.bio}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div style={{ position: 'relative', paddingLeft: '1rem', borderLeft: '2px solid var(--border-subtle)', textAlign: 'left' }}>
                                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                        "{displayData.bio}"
                                    </p>
                                </div>
                            )}

                            <div style={{ marginTop: '2rem' }}>
                                {isEditing ? (
                                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                        <button onClick={handleSave} className="btn-command btn-command-filled" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>SAVE CHANGES</button>
                                        <button onClick={() => setIsEditing(false)} className="btn-command" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>CANCEL</button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="btn-command"
                                        style={{
                                            padding: '0.8rem 1.5rem',
                                            fontSize: '0.8rem',
                                            width: '100%'
                                        }}
                                    >
                                        EDIT PROFILE
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Unit Details Panel */}
                        <div style={{ marginTop: '3rem' }}>
                            <h3 className="uppercase-label" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>UNIT DETAILS</h3>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>UNIT</span>
                                    <span style={{ color: 'var(--text-highlight)' }}>{displayData.unit || 'UNASSIGNED'}</span>
                                </div>
                                <div className="divider-line" style={{ margin: '0.5rem 0', opacity: 0.3 }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>BASE</span>
                                    <span style={{ color: 'var(--text-highlight)' }}>{displayData.base || 'HQ'}</span>
                                </div>
                                <div className="divider-line" style={{ margin: '0.5rem 0', opacity: 0.3 }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>JOINED</span>
                                    <span style={{ color: 'var(--text-highlight)' }}>{displayData.joined || '2023'}</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right Column: Main Stats */}
                    <main className="dashboard-content">

                        {/* Service Progress */}
                        <section className="dashboard-section" style={{ marginBottom: '4rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 className="section-subtitle" style={{ border: 'none', margin: 0 }}>SERVICE PROGRESS</h3>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>65%</span>
                            </div>

                            <div className="progress-bar" style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div className="progress-fill" style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, var(--accent-green) 0%, #6e8c52 100%)', borderRadius: '4px' }}></div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
                                    <span className="uppercase-label" style={{ marginBottom: '0.5rem' }}>YEARS OF SERVICE</span>
                                    <span style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-highlight)' }}>4.5</span>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
                                    <span className="uppercase-label" style={{ marginBottom: '0.5rem' }}>DEPLOYMENT COUNT</span>
                                    <span style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-highlight)' }}>12</span>
                                </div>
                            </div>
                        </section>

                        {/* Achievement Badges */}
                        <section className="dashboard-section" style={{ marginBottom: '4rem' }}>
                            <h3 className="section-subtitle" style={{ marginBottom: '2rem' }}>ACHIEVEMENT BADGES</h3>
                            <div className="badges-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1.5rem' }}>
                                {badges.map((badge, index) => (
                                    <div key={index} className="badge-item" style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid var(--border-subtle)',
                                        padding: '2rem 1rem',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-green)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                                <path d={badge.icon} />
                                            </svg>
                                        </div>
                                        <span className="badge-name" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{badge.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Communication Channels */}
                        <section className="dashboard-section">
                            <h3 className="section-subtitle" style={{ marginBottom: '2rem' }}>SECURE CHANNELS</h3>
                            <div className="unit-info-list">
                                {displayData.socialLinks && Object.values(displayData.socialLinks).some(v => v) ? (
                                    Object.entries(displayData.socialLinks).map(([platform, url]) => (
                                        url && (
                                            <div key={platform} className="unit-info-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', border: '1px solid var(--border-subtle)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span className="uppercase-label" style={{ margin: 0 }}>{platform}</span>
                                                <a href={url} target="_blank" rel="noopener noreferrer" className="unit-value" style={{ textDecoration: 'none', color: 'var(--accent-green)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    OPEN CHANNEL <span>→</span>
                                                </a>
                                            </div>
                                        )
                                    ))
                                ) : (
                                    <div style={{
                                        border: '1px dashed var(--border-subtle)',
                                        padding: '3rem',
                                        textAlign: 'center',
                                        color: 'var(--text-muted)'
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.5 }}>📡</div>
                                        <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>NO ACTIVE COMMUNICATION CHANNELS LINKED</p>
                                        <button className="btn-command" style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>LINK SECURE CHANNEL</button>
                                    </div>
                                )}
                            </div>
                        </section>

                    </main>
                </div>
            </div>
            {/* Save Success Notification */}
            {showSaveSuccess && (
                <div style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    background: 'var(--accent-green)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '0',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                    animation: 'fadeUpSlow 0.3s ease-out',
                    zIndex: 1000,
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.1em',
                    fontSize: '0.9rem'
                }}>
                    PROFILE UPDATE SECURED
                </div>
            )}
        </div>
    );
}

export default Profile;
