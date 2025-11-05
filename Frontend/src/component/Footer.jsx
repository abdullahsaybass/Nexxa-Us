"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* === Contact Us === */}
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">
            We specialize in high-quality used and refurbished auto parts for
            cars, trucks, and motorcycles. Contact us for reliable parts and
            expert service.
          </p>

          <div className="footer-info">
            <p>Nexxa Auto Parts</p>
            <p>550 Congressional Blvd, Suite 350, Carmel, IN 46032</p>
            <p>
              <span className="footer-label">PHONE:</span> +1 (888) 266-0007
            </p>
            <p>
              <span className="footer-label">EMAIL:</span> info@nexxaauto.com
            </p>
          </div>
        </div>

        {/* === Information === */}
        <div>
          <h3 className="footer-title">Information</h3>
          <ul className="footer-list">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-condition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/warranty">Warranty Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* === Categories === */}
        <div>
          <h3 className="footer-title">Product Categories</h3>
          <ul className="footer-list">
            <li>
              <Link to="/contact">Engine Parts</Link>
            </li>
            <li>
              <Link to="/contact">Chrome Accessories</Link>
            </li>
            <li>
              <Link to="/contact">Classic Interiors</Link>
            </li>
            <li>
              <Link to="/contact">Restored Wheels</Link>
            </li>
            <li>
              <Link to="/contact">Suspension & Brakes</Link>
            </li>
          </ul>
        </div>

        {/* === Newsletter === */}
        <div>
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">
            Subscribe for updates on new arrivals, restocks, and exclusive
            offers from Nexxa Auto Parts.
          </p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Email Address..."
              className="footer-input"
            />
            <button type="submit" className="footer-btn">
              Subscribe
            </button>
          </form>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* === Bottom footer === */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="footer-highlight">Nexxa Auto Parts</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
