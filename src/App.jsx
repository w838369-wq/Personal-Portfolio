import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './styles/global.css';
import './styles/navigation.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/tabs.css';
import './styles/forms.css';
import './styles/footer.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      return stored ? stored : 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
  };

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const next = prevTheme === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // ignore storage errors (e.g., private mode)
      }
      return next;
    });
  };

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navigation 
        currentPage={currentPage}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main id="main-content" tabIndex="-1">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;