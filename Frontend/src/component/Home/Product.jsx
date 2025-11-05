import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import BMW from "../../assets/BMW.jpeg";
import Toyato from "../../assets/toyato.webp";
import Honda from "../../assets/honda.webp";
import Ford from "../../assets/ford.avif";
import Nissan from "../../assets/Nissan-Brake-Pads.avif";
import Kia from "../../assets/kia.jpg";
import Mercedes from "../../assets/mercedes.webp";
import Hyundai from "../../assets/images.png";
import Chevrolet from "../../assets/chervolt.webp";
import Volkswagen from "../../assets/volkswagan.jpg";
import interior from "../../assets/volkswagan.jpg";

const Product = () => {
  // === Product Data ===
  const products = [
    { id: 1, tags: ["HOT"], image: BMW, name: "Used BMW Engine Assembly", sku: "BMW-ENG-001", rating: 5, reviews: 12, price: 450 },
    { id: 2, tags: ["SALE"], image: Toyato, name: "Used Toyota Alternator", sku: "TOY-ALT-002", rating: 4, reviews: 8, price: 85 },
    { id: 3, tags: ["NEW"], image: Honda, name: "Used Honda Radiator", sku: "HON-RAD-003", rating: 5, reviews: 14, price: 120 },
    { id: 4, tags: ["SALE"], image: Ford, name: "Used Ford Transmission", sku: "FOR-TRA-004", rating: 4, reviews: 10, price: 700 },
    { id: 5, tags: ["HOT"], image: Nissan, name: "Used Nissan Brake Pads", sku: "NIS-BRK-005", rating: 4, reviews: 9, price: 65 },
    { id: 6, tags: [], image: Kia, name: "Used Kia Fuel Pump", sku: "KIA-FUE-006", rating: 4, reviews: 6, price: 95 },
    { id: 7, tags: ["SALE"], image: Mercedes, name: "Used Mercedes Starter Motor", sku: "MER-STA-007", rating: 5, reviews: 11, price: 180 },
    { id: 8, tags: ["HOT"], image: Hyundai, name: "Used Hyundai Steering Rack", sku: "HYU-STE-008", rating: 4, reviews: 13, price: 250 },
    { id: 9, tags: ["NEW"], image: Chevrolet, name: "Used Chevrolet AC Compressor", sku: "CHE-AC-009", rating: 4, reviews: 10, price: 190 },
    { id: 10, tags: [], image: Volkswagen, name: "Used Volkswagen Gearbox", sku: "VOL-GEA-010", rating: 5, reviews: 18, price: 620 },
  ];

  // === Sidebar Items ===
  const sidebars = [
    [
      
      "Used Acura Parts",
      "Used BMW Parts",
      "Used Buick Parts",
      "Used Cadillac Parts",
      "Used Chevy Parts",
      "Used Chrysler Parts",
      "Used Daewoo Parts",
      "Used Daihatsu Parts",
      "Used Dodge Parts",
    ],
    [
      "Used Eagle Parts",
      "Used Ford Parts",
      "Used GMC Parts",
      "Used Honda Parts",
      "Used Hyundai Parts",
      
      
      "Used Isuzu Parts",
      "Used Jaguar Parts",
      "Used Jeep Parts",
    ],
    [
      "Used Kia Parts",
      "Used Landrover Parts",
      "Used Lexus Parts",
      "Used Lincoln Parts",
      "Used Mazda Parts",
      "Used Mercedes Parts",
      "Used Mercury Parts",
      "Used Mini Cooper Parts",
      "Used Mitsubishi Parts",
      "Used Nissan Parts",
    ],
  ];

  // === Helper Function: Generate Dynamic Link ===
  const generateLink = (item) => {
    // Extract brand name (e.g., "Used Acura Parts" → "acura")
    const brand = item.replace(/Used\s+|\s+Parts/gi, "").trim().toLowerCase().replace(/\s+/g, "-");
    return `/used-auto-parts/${brand}`;
  };

  return (
    <section className="product-section">
      {/* === Header === */}
      <div className="product-header">
        <h1>Explore Our Premium Used Auto Parts</h1>
        <p>
          Discover high-quality used car parts for every make and model. Whether
          you’re looking for interior, exterior, or engine components, our
          collection ensures durability and value — just like new.
        </p>
      </div>

      <div className="product-container">
        {/* === Product Grid === */}
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="tags">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`tag ${
                      tag === "SALE"
                        ? "sale"
                        : tag === "NEW"
                        ? "new"
                        : tag === "HOT"
                        ? "hot"
                        : ""
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="image-box">
                <img src={product.image} alt={product.name} />
              </div>

              <p className="sku">SKU: {product.sku}</p>
              <h3 className="product-name">{product.name}</h3>

              <div className="rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
                <span className="reviews">
                  {product.rating} on {product.reviews} reviews
                </span>
              </div>

              <div className="price">
                <span className="current">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* === Sidebar === */}
        <aside className="product-sidebar-section">
          {sidebars.map((group, idx) => (
            <div
              className="product-sidebar-card"
              key={idx}
              style={{ backgroundImage: `url(${interior})` }}
            >
              <div className="overlay">
                <ul>
                  {group.map((item, i) => (
                    <li key={i}>
                      <Link to={generateLink(item)}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Product;
