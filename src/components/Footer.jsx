import React from 'react';
import '../styles.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 TechPrint Ethiopia. All rights reserved.</p>
      <p>
        Email: <a href="mailto:yosefgetu0@gmail.com" title="Send an email to TechPrint Ethiopia">yosefgetu0@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:+251-923-282-003" title="Call TechPrint Ethiopia">+251-923-282-003</a>
      </p>
    </footer>
  );
};

export default Footer;