import React from "react";
import "./AboutNexxaSection.css";
import aboutImage from "../../assets/about.jpg";

export default function AboutNexxaSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* === Top Row: Text + Image === */}
        <div className="about-top">
          <div className="about-left">
            <h2 className="about-title">
              Welcome to <span className="highlight">Nexxa</span>
            </h2>

            <p className="about-text">
              At Nexxa, we are dedicated to delivering high-quality used OEM auto parts and
              accessories that meet or exceed industry standards. As one of America’s leading
              distributors of automobile components and replacement parts, Nexxa stands for
              reliability, affordability, and trust.
            </p>

            <p className="about-text">
              With a strong network of over 6,000 verified suppliers and coverage across 90+
              locations in all 50 states, we ensure that our customers always have access to
              the right parts—no matter where they are in the United States. Our commitment to
              excellence has made us a trusted partner for mechanics, body shops, and vehicle
              owners nationwide.
            </p>
          </div>

          <div className="about-right">
            <img
              src={aboutImage}
              alt="Mechanic inspecting car"
              className="about-image"
            />
          </div>
        </div>

        {/* === Bottom Row: Title + Description === */}
        <div className="about-bottom">
          <h3 className="bottom-title">Our Headquarters & Operations</h3>
          <p className="bottom-text">
             <strong>550 Congressional Blvd, Suite 350, Carmel, IN 46032</strong>
          </p>
          <p className="bottom-text">
            We operate <strong>12 strategically located warehouses</strong> across the country,
            enabling us to ship parts anywhere in the U.S. within 7–10 business days.
          </p>
          <p className="bottom-text">
            At <span className="highlight">Nexxa</span>, we take pride in offering not only the
            best parts at competitive prices, but also exceptional customer service—because
            your satisfaction drives our success.
          </p>
        </div>
      </div>
    </section>
  );
}
