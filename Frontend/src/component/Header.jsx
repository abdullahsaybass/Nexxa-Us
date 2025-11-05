import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* === Top Bar === */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-left">
            <span className="font-bold">Call Us: +1 (888) 266-0007</span>
            <span>Email: info@nexxaauto.com</span>
            <a href="#">Used Car Parts Info</a>
          </div>
          <div className="top-right">
            <span>
              Head Office: Nexxa Auto Parts, 550 Congressional Blvd, Suite 350, Carmel, IN 46032
            </span>
          </div>
        </div>
      </div>

      {/* === Middle Section === */}
      <div className="middle-section">
        <div className="middle-inner">
          {/* === Left Menu === */}
          <div className="left-menu">
            <div className={`mobile-trigger ${menuOpen ? "hide" : ""}`}>
              <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                <FaBars />
                <span>Menu</span>
              </button>
            </div>

            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>

          {/* === Center Logo === */}
          <div className="center-section">
            <div className="">
              <Link to="/">
                <img src={Logo} alt="Nexxa Auto Parts Logo" className="header-logo" />
              </Link>
            </div>
          </div>

          {/* === Right Buttons === */}
          <div className="right-icons">
            <div className="info-btn">Quality Used Parts</div>

            <Link to="/request-a-parts" className="info-btn">
              Request a Part
            </Link>
            <Link to="/terms-and-condition" className="info-btn">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile Menu Overlay === */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* === Mobile Drawer === */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/terms-and-condition">Terms and Conditions</Link></li>
        </ul>

        <div className="mobile-footer">
          <p><strong>Call us:</strong> +1 (888) 266-0007</p>
          <p><strong>Email:</strong> info@nexxaauto.com</p>
          <p>
            <strong>Office:</strong> Nexxa Auto Parts,
            550 Congressional Blvd, Suite 350, Carmel, IN 46032
          </p>
        </div>
      </div>
    </header>
  );
}
