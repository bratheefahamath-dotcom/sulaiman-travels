import React from "react";
import { useNavigate } from "react-router-dom";
import "./Package.css";

// --- IMPORT IMAGES ---
import HajjImg from "../assets/Package/Hajj package.png";
import RamadanImg from "../assets/Package/Ramadan package.png";
import UmrahImg from "../assets/Package/Umrah package.png";

const Package = () => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate("/contact");
  };

  return (
    <section className="package-section">
      <div className="package-header">
        {/* UPDATED HEADER: "Packages" is now wrapped in text-gold */}
        <h2 className="package-title font-switzer">
          Sacred <span className="text-gold">Packages</span>
        </h2>
        <p className="package-subtitle">
          CHOOSE THE JOURNEY THAT FITS YOUR SPIRITUAL NEEDS
        </p>
      </div>

      <div className="package-cards-container">
        {/* --- CARD 1 (LEFT) - HAJJ --- */}
        <div className="package-card pkg-left">
          <div className="card-content-wrapper">
            <div className="card-image-area">
              <img
                src={HajjImg}
                alt="Hajj Package"
                className="package-card-img"
              />
              <span className="card-tag">Upcoming</span>
            </div>
            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Hajj 2026</h3>
                <p className="card-price">Premium & Standard</p>
              </div>
              <ul className="card-features">
                <li>Direct Flights (UL/Saudia)</li>
                <li>VIP Tents in Mina & Arafat</li>
                <li>Dedicated Guide throughout</li>
              </ul>
              <button className="card-btn" onClick={handleInquiry}>
                Inquire Now
              </button>
            </div>
          </div>
        </div>

        {/* --- CARD 2 (RIGHT) - RAMADAN --- */}
        <div className="package-card pkg-right">
          <div className="card-content-wrapper">
            <div className="card-image-area">
              <img
                src={RamadanImg}
                alt="Ramadan Package"
                className="package-card-img"
              />
              <span className="card-tag">Seasonal</span>
            </div>
            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Ramadan</h3>
                <p className="card-price">Last 10 Days</p>
              </div>
              <ul className="card-features">
                <li>5-Star Hotel (Haram View)</li>
                <li>Iftar & Suhoor Included</li>
                <li>Eid Celebration in Makkah</li>
              </ul>
              <button className="card-btn" onClick={handleInquiry}>
                Inquire Now
              </button>
            </div>
          </div>
        </div>

        {/* --- CARD 3 (CENTER) - UMRAH --- */}
        <div className="package-card pkg-center">
          <div className="card-content-wrapper">
            <div className="card-image-area">
              <img
                src={UmrahImg}
                alt="Umrah Package"
                className="package-card-img"
              />
              <span className="card-tag">Most Popular</span>
            </div>
            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Umrah Saver</h3>
                <p className="card-price">Economy Package</p>
              </div>
              <ul className="card-features">
                <li>14 Days Duration</li>
                <li>Visa & Transport Included</li>
                <li>Weekly Ziyarat Tours</li>
              </ul>
              <button className="card-btn" onClick={handleInquiry}>
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
