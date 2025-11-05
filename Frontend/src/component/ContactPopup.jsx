import React, { useState } from "react";
import "./ContactPopup.css";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhone,
  HiOutlineXMark,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button className="floating-btn" onClick={() => setOpen(!open)}>
        {open ? (
          <HiOutlineXMark size={24} />
        ) : (
          <HiOutlineChatBubbleLeftRight size={24} />
        )}
      </button>

      {/* Popup Box */}
      {open && (
        <div className="contact-popup">
          <div className="popup-content">
            <h3>Check Compatibility!</h3>
            <p>Contact Part Expert Now</p>

            <a href="tel:+1 (888) 266-0007" className="phone">
              +1&nbsp;877&nbsp;314-1621
            </a>

            <div className="popup-buttons">
              <a href="tel:+18882660007" className="btn call-btn">
                <HiOutlinePhone size={18} />
                <span>Call</span>
              </a>

              <a
                href="sms:+18882660007?body=Hi%20I%20need%20help%20with%20my%20order"
                className="btn message-btn"
              >
                <HiOutlineEnvelope size={18} />
                <span>Message</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
