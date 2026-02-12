import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function App() {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [theme, setTheme] = useState('camo-green');
    const [themeToast, setThemeToast] = useState({ show: false, message: '' });

    const themeNames = {
        'camo-green': 'Field Mode Activated',
        'stealth-black': 'Covert Mode Activated',
        'desert-brown': 'Deployment Mode Activated',
        'night-ops': 'Command Center Mode Activated'
    };

    useEffect(() => {
        // Check if user is logged in
        const user = localStorage.getItem('veerConnectUser');
        if (user) {
            setIsLoggedIn(true);
            setUserData(JSON.parse(user));
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('veerConnectTheme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }

        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUserData(user);
        localStorage.setItem('veerConnectUser', JSON.stringify(user));
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem('veerConnectUser');
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('veerConnectTheme', newTheme);

        // Show toast notification
        setThemeToast({ show: true, message: themeNames[newTheme] || 'Theme Changed' });

        // Auto-hide toast after 3 seconds
        setTimeout(() => {
            setThemeToast({ show: false, message: '' });
        }, 3000);
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <Router>
            <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <main style={{ flex: 1, paddingTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    userData={userData}
                                    setUserData={setUserData}
                                    onThemeChange={handleThemeChange}
                                    currentTheme={theme}
                                />
                            }
                        />
                    </Routes>
                </main>
                <Footer />

                {/* Theme Toast Notification */}
                {themeToast.show && (
                    <div className="theme-toast">
                        <div className="toast-icon">⚙️</div>
                        <div className="toast-message">{themeToast.message}</div>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
