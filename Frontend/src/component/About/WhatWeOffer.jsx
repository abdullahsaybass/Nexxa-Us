import React from "react";
import "./WhatWeOffer.css";
import Engine from "../../assets/engine.jpg";
export default function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Left Image Section */}
        <div className="offer-left">
          <img
            src={Engine}
            alt="Mechanic checking engine"
            className="offer-image"
          />
        </div>

        {/* Right Content Section */}
        <div className="offer-right">
          <h2 className="offer-title">What We Offer</h2>

          <p className="offer-description">
            At <span className="highlight">Nexxa</span>, we specialize in providing top-quality
            second-hand OEM auto parts sourced from trusted suppliers across the United States.
            Every part we deliver undergoes rigorous inspection to ensure performance, durability,
            and value — giving you reliable replacements without the high cost of new parts.
          </p>

          <ul className="offer-list">
            <li>Certified pre-owned OEM car parts</li>
            <li>Nationwide delivery across all 50 states</li>
            <li>6,000+ verified suppliers and trusted partners</li>
            <li>Affordable pricing without compromising quality</li>
            <li>24/7 customer support for mechanics & car owners</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
