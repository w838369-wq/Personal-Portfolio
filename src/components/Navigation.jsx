import { useState, useEffect } from 'react';

function Navigation({ currentPage, onNavigate, theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky Navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isSticky ? 'navigation-sticky' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a 
            href="#home" 
            className="nav-logo"
            onClick={() => handleNavClick('home')}
          >
            Wendi Chen
          </a>

          {/* Single navigation list used for both desktop and mobile (visibility controlled via CSS + isMenuOpen) */}
          <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <li>
              <a
                href="#home"
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={currentPage === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={currentPage === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-controls">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              <img
                src={theme === 'light' ? '/icons/dark_mode.svg' : '/icons/light_mode.svg'}
                alt={theme === 'light' ? 'Dark mode' : 'Light mode'}
              />
            </button>

            <button
              className="hamburger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <img
                src={isMenuOpen ? '/icons/close.svg' : '/icons/menu.svg'}
                alt={isMenuOpen ? 'Close menu' : 'Open menu'}
              />
            </button>
          </div>

          {/* mobile menu is the same DOM as desktop nav; CSS media queries should hide/show appropriately
              and the 'nav-open' class controls visibility on small screens */}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;