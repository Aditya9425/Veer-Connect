import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <div className="footer-links">
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/about" className="footer-link">About</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                    <Link to="/profile" className="footer-link">Profile</Link>
                </div>
                <div className="footer-copy">
                    DISCIPLINE • DUTY • HONOR<br />
                    <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>&copy; 2026 Veer Connect. Official Command Network.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
