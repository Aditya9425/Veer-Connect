import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ isLoggedIn, onLogout }) {
    const location = useLocation();
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    VEER CONNECT
                </Link>

                <button className="mobile-menu-toggle" onClick={toggleMenu}>
                    ☰ // Hamburger
                </button>

                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        {isLoggedIn ? (
                            <Link
                                to="/profile"
                                className={`navbar-link ${isActive('/profile') ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Profile
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className={`navbar-link ${isActive('/login') ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </li>
                    {/* Add more items or logout logic if needed */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
