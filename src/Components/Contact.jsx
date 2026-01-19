import React from "react";
import BackButton from "./BackButton"; // <--- 1. Import the button
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      {/* <--- 2. Add Button Container (Top Left) */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "5vw",
          zIndex: 10,
        }}
      >
        {/* We pass Gold color because Contact page is Dark */}
        <BackButton color="#ecb454" />
      </div>

      <div className="contact-content-wrapper">
        {/* --- HEADER --- */}
        <div className="contact-header">
          <p className="section-subtitle">START YOUR JOURNEY</p>
          <h2 className="section-title font-switzer">
            Contact <span className="text-gold">Sulaiman</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* --- LEFT: Inquiry Form --- */}
          <div className="form-container">
            <h3 className="form-title">Send us a Message</h3>
            <p className="form-desc">
              Interested in a Hajj package or need a custom Umrah quote? Fill
              out the form and our agents will get back to you.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. Mohideen Ali" required />
                </div>
                <div className="input-group">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="+94 77 ..." required />
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" />
              </div>

              <div className="input-group">
                <label>Service Interest</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="hajj">Hajj Package (Full Board)</option>
                  <option value="umrah">Umrah Group</option>
                  <option value="ticketing">Air Ticketing Only</option>
                  <option value="visa">Visa Consultation</option>
                </select>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn font-switzer">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* --- RIGHT: Info Cards --- */}
          <div className="info-container">
            {/* Direct Line Card */}
            <div className="info-card gold-border">
              <div className="card-icon">📞</div>
              <div className="card-content">
                <h4>Hajj & Umrah Hotline</h4>
                <p>Immediate assistance for bookings.</p>
                <a href="tel:+94771234567" className="big-link">
                  +94 77 123 4567
                </a>
                <a href="tel:+94112345678" className="sub-link">
                  011 234 5678 (Office)
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="info-card">
              <div className="card-icon">📍</div>
              <div className="card-content">
                <h4>Visit Our Head Office</h4>
                <p>
                  No. 123, Deens Road,
                  <br />
                  Colombo 10, Sri Lanka.
                </p>
                <div className="map-placeholder">
                  <span>View on Google Maps ↗</span>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="info-card">
              <div className="card-icon">🕒</div>
              <div className="card-content">
                <h4>Working Hours</h4>
                <p>
                  <strong>Mon - Fri:</strong> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                </p>
                <p className="closed-text">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
