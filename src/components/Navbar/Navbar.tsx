import { useState } from "react";
import limsaLogo from "../../assets/limsaLogo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="navbar-brand">
          <div className="logo-container">
            <img src={limsaLogo} alt="Limsa Company Logo" className="logo" />
          </div>
        </div>
        <ul className="nav-links">
          <li className="nav-link">Biz haqimizda</li>
          <li className="nav-link">Loyihalar</li>
          <li className="nav-link">Xizmatlar</li>
          <li className="nav-link">Aloqa</li>
        </ul>
        <div className="navbar-contact">
          <select className="navbar-select">
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button className="navbar-button">+998 (93) 513-88-33</button>
        </div>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li className="nav-link">Biz haqimizda</li>
          <li className="nav-link">Loyihalar</li>
          <li className="nav-link">Xizmatlar</li>
          <li className="nav-link">Aloqa</li>
        </ul>
        <div className="navbar-contact">
          <select className="navbar-select">
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button className="navbar-button">+998 (93) 513-88-33</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
