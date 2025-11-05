import React from "react";
import parts from "../../assets/p-parts.webp";
import "./HeaderBanner.css";

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      {/* Background texture */}
      <div className="hero-bg"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-subtitle">Auto Accessories</p>
          <h1 className="hero-title">
            USED CAR PARTS <br />
            <span className="highlight">IN THE USA</span>
          </h1>
          <p className="hero-description">
            Find reliable, genuine, and affordable used car parts for any make
            and model — shipped nationwide with full quality assurance.
          </p>

          {/* Replacing discount with used car parts feature */}
          <p className="hero-feature">
             Thousands of parts available <br />
            Tested and quality-checked <br />
            Fast shipping across the USA
          </p>

          <button className="hero-button">Shop Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={parts} alt="Used Car Parts" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
