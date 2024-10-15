import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/photos/logo.png" alt="Logo" />
        </div>
        <p className="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h2>Information</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Helpful Links</h2>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
