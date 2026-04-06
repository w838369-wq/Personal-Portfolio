function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">
            © {currentYear} Wendi Chen
          </p>
          <p className="footer-rights">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;