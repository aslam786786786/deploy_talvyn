import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const sections = ['hero', 'about', 'services', 'careers', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only update active section on home page
      if (isHomePage) {
        const sectionElements = sections.map(section => ({
          id: section,
          element: document.getElementById(section),
          offsetTop: document.getElementById(section)?.offsetTop || 0
        })).filter(section => section.element);

        const scrollPosition = window.scrollY + 100; // Add offset for navbar height
        
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          if (scrollPosition >= sectionElements[i].offsetTop) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, sections]);

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
          <button onClick={() => handleNavigation('hero')} className={`nav-link ${activeSection === 'hero' ? 'nav-link-active' : ''}`}>
            Home
          </button>
          <button onClick={() => handleNavigation('about')} className={`nav-link ${activeSection === 'about' ? 'nav-link-active' : ''}`}>
            About us
          </button>
          <button onClick={() => handleNavigation('services')} className={`nav-link ${activeSection === 'services' ? 'nav-link-active' : ''}`}>
            Service
          </button>
          <button onClick={() => handleNavigation('careers')} className={`nav-link ${activeSection === 'careers' ? 'nav-link-active' : ''}`}>
            Careers
          </button>
          <button onClick={() => handleNavigation('contact')} className={`nav-link ${activeSection === 'contact' ? 'nav-link-active' : ''}`}>
            Contact
          </button>
        </div>


        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button onClick={() => handleNavigation('hero')} className={`mobile-nav-link ${activeSection === 'hero' ? 'mobile-nav-link-active' : ''}`}>
            Home
          </button>
          <button onClick={() => handleNavigation('about')} className={`mobile-nav-link ${activeSection === 'about' ? 'mobile-nav-link-active' : ''}`}>
            About us
          </button>
          <button onClick={() => handleNavigation('services')} className={`mobile-nav-link ${activeSection === 'services' ? 'mobile-nav-link-active' : ''}`}>
            Service
          </button>
          <button onClick={() => handleNavigation('careers')} className={`mobile-nav-link ${activeSection === 'careers' ? 'mobile-nav-link-active' : ''}`}>
            Careers
          </button>
          <button onClick={() => handleNavigation('contact')} className={`mobile-nav-link ${activeSection === 'contact' ? 'mobile-nav-link-active' : ''}`}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
