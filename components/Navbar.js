import React from 'react';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <img src="/photos/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#header">Anasayfa</a></li>
        <li><a href="#our-classes">Sınıflar</a></li>
        <li><a href="#trainers-section">Antrenör</a></li>
        <li><a href="#product-section">Yorum</a></li>
        <li><a href="#contact-us">İletişim</a></li>
        <li><a href="#" className="join-btn">Bize Katıl</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
