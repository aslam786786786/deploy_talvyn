import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If on other pages, navigate to home with state to scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h2>Talvyn</h2>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <button onClick={() => handleNavigation('hero')} className="nav-link">
            Home
          </button>
          <button onClick={() => handleNavigation('about')} className="nav-link">
            About us
          </button>
          <button onClick={() => handleNavigation('services')} className="nav-link">
            Service
          </button>
          <button onClick={() => handleNavigation('careers')} className="nav-link">
            Careers
          </button>
          <button onClick={() => handleNavigation('contact')} className="nav-link">
            Contact
          </button>
        </div>


        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button onClick={() => handleNavigation('hero')} className="mobile-nav-link">
            Home
          </button>
          <button onClick={() => handleNavigation('about')} className="mobile-nav-link">
            About us
          </button>
          <button onClick={() => handleNavigation('services')} className="mobile-nav-link">
            Service
          </button>
          <button onClick={() => handleNavigation('careers')} className="mobile-nav-link">
            Careers
          </button>
          <button onClick={() => handleNavigation('contact')} className="mobile-nav-link">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
