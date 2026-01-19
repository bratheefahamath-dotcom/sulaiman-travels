import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* --- TOP CONTAINER: Brand & content grid --- */}
      <div className="footer-container">
        {/* COLUMN 1: Brand Identity */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo font-switzer">Sulaiman</h2>
          <p className="brand-sub">TRAVELS</p>
          <p className="footer-motto">
            Guiding Sri Lankan pilgrims to the sacred lands with honor, trust,
            and over 15 years of experience.
          </p>
          <div className="trust-badge">
            <span>EST. 2008</span>
          </div>
        </div>

        {/* COLUMN 2: Visit Us */}
        <div className="footer-col details-col">
          <h3 className="col-title font-switzer">Visit Our Office</h3>
          <div className="detail-item">
            <span className="icon">📍</span>
            <p>
              No. 123, Deens Road,
              <br />
              Colombo 10, Sri Lanka.
            </p>
          </div>
          <div className="detail-item">
            <span className="icon">🕒</span>
            <p>
              Mon - Fri: 9:00 AM - 5:00 PM
              <br />
              Sat: 9:00 AM - 1:00 PM
            </p>
          </div>
        </div>

        {/* COLUMN 3: Contact */}
        <div className="footer-col contact-col">
          <h3 className="col-title font-switzer">Get in Touch</h3>
          <div className="detail-item">
            <span className="icon">📞</span>
            <p>
              <a href="tel:+94771234567">+94 77 123 4567</a> (Hotline)
              <br />
              <a href="tel:+94112345678">+94 11 234 5678</a> (Office)
            </p>
          </div>
          <div className="detail-item">
            <span className="icon">✉️</span>
            <p>
              <a href="mailto:info@sulaimantravels.com">
                info@sulaimantravels.com
              </a>
            </p>
          </div>
        </div>

        {/* COLUMN 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h3 className="col-title font-switzer">Stay Updated</h3>
          <p className="newsletter-text">
            Receive updates on upcoming Hajj packages and Umrah groups.
          </p>
          <form className="input-group" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" required />
            <button type="submit" className="gold-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* --- BOTTOM: Copyright & Developer --- */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sulaiman Travels. All rights reserved.
        </p>

        {/* --- NEW DEVELOPER CREDIT SECTION --- */}
        <p className="dev-credit">
          Developed by{" "}
          <a
            href="https://yourportfolio.com" // REPLACE THIS LINK
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="d-reg">BR</span> Atheef Ahamath
          </a>
        </p>

        <p className="d-reg">Authorized Hajj & Umrah Agent</p>
      </div>
    </footer>
  );
};

export default Footer;
