import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Warranty.css"; // using same styles for consistency

const Warranty = () => {
  return (
    <div>
      <Header />

      <section className="privacy-section">
        <div className="privacy-content">
          <h1 className="privacy-heading">Warranty & Return Policy</h1>

          <div className="privacy-item">
            <h2>1. Warranty Policy</h2>
            <p>
              At Nexxa, we stand behind the quality of our products. This warranty covers defective components and incorrectly shipped items.
              Our warranty is strictly parts-only — labor costs are not covered under any circumstance.
            </p>
          </div>

          <div className="privacy-item">
            <h2>2. Replacement and Refund Policy</h2>
            <ul>
              <li>If a part is found to be defective, we will first attempt to provide a replacement.</li>
              <li>If a replacement is not available, we will issue a full refund for the purchase price.</li>
              <li>
                If you reorder a replacement part before returning the original, the new order will be charged in full, and the previous purchase will be refunded upon return of the defective part.
              </li>
              <li>Return shipping costs are the responsibility of the customer and will not be reimbursed.</li>
              <li>When contacting Nexxa regarding a return, please include a detailed explanation of the reason for return.</li>
            </ul>
          </div>

          <div className="privacy-item">
            <h2>3. Return Policy</h2>
            <ul>
              <li>Parts must be returned within 90 days from the original delivery date to qualify for a refund or replacement.</li>
              <li>Returned parts that do not meet warranty criteria may be subject to a 25% restocking fee, and shipping costs may be deducted from the refund.</li>
              <li>Items ordered for testing purposes or incorrectly ordered by the customer are not eligible for return.</li>
              <li>Please confirm compatibility with your mechanic or body shop before purchasing.</li>
              <li>Items returned after the 90-day warranty period will be sent back to the sender without reimbursement.</li>
            </ul>
          </div>

          <div className="privacy-item">
            <h2>4. Delivery Responsibility</h2>
            <p>
              Nexxa Auto Parts is not responsible for orders shipped to the address provided at checkout but not claimed or received by the customer.
            </p>
          </div>

          <div className="privacy-item">
            <h2>5. Warranty Exclusions</h2>
            <p>
              Certain parts or conditions will void the warranty or are not covered under our standard 90-day guarantee.
            </p>
          </div>

          <div className="privacy-item">
            <h2>6. Engines</h2>
            <p>
              Engines are sold as complete assemblies, which may include manifolds, oil pans, timing belts, covers, and fuel systems.
              However, the warranty covers only the long block (engine block, cylinder head, and internal components).
            </p>
            <p>The following items are not covered unless purchased separately:</p>
            <ul>
              <li>Turbos</li>
              <li>Starters</li>
              <li>Air compressors</li>
              <li>Alternators</li>
              <li>Power steering pumps</li>
              <li>Electrical water pumps</li>
              <li>Optical distributors</li>
            </ul>
            <p>
              High-wear components such as water pumps, distributor caps, spark plugs, wires, gaskets, seals, and timing chains may need to be replaced before installation and are not covered under warranty.
            </p>
          </div>

          <div className="privacy-item">
            <h2>7. Transmissions</h2>
            <p>
              All transmissions are guaranteed to shift properly and have good gears and bearings.
              Before installation, the following steps must be taken to maintain warranty coverage:
            </p>
            <ul>
              <li>Thoroughly clean the transmission and oil pan.</li>
              <li>Replace all seals and gaskets.</li>
              <li>Change oil and filter in automatic transmissions.</li>
              <li>Flush and test the cooler and lines for proper flow.</li>
              <li>Fully seat the torque converter in the front pump.</li>
              <li>
                For manual transmissions: replace the clutch, pressure plate, and slave cylinder, and resurface the flywheel.
              </li>
              <li>Fill with proper fluid and check levels carefully.</li>
            </ul>
          </div>

          <div className="privacy-item">
            <h2>8. Turbos</h2>
            <p>
              Turbo seals are not guaranteed to be perfect. These seals may require replacement during the warranty period.
            </p>
          </div>

          <div className="privacy-item">
            <h2>9. Contact Us</h2>
            <p>
              <strong>Nexxa Auto Parts</strong><br />
              550 Congressional Blvd, Suite 350<br />
              Carmel, IN 46032
            </p>

            <p>
              <strong>Phone:</strong> +1 (888) 266-0007<br />
              <strong>Email:</strong> info@nexxaauto.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;
