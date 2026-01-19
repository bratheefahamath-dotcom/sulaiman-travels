import React, { forwardRef } from "react";
import "./About.css";
import camelRiderPath from "../assets/About/camel-rider.svg";

const About = forwardRef((props, ref) => {
  const makkahColors = {
    mainBody: "#1a1a1a",
    sideShade: "#261a12",
    topDetails: "#d99a35", // Keeping the graphic details
    accentDetails: "#a36b13",
  };

  return (
    <section className="about-section" ref={ref}>
      <div className="about-content-wrapper">
        {/* --- STAGE 1: LEGACY --- */}
        <div className="content-stage stage-1">
          <div className="about-header">
            <p className="about-subtitle">ESTABLISHED 2008</p>
            <h2 className="about-title font-switzer">
              The Sulaiman <span className="text-white">Legacy</span>
            </h2>
          </div>

          <p className="about-description">
            Sulaiman Travels is a Sri Lanka–based Hajj and Umrah travel agency
            established in <strong>2008</strong>. For more than 15 years, we
            have been dedicated to helping Muslims from Sri Lanka fulfill their
            sacred religious duties.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">YEARS SERVICE</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">SL</span>
              <span className="stat-label">BASED AGENCY</span>
            </div>
          </div>
        </div>

        {/* --- STAGE 2: ARRANGEMENTS --- */}
        <div className="content-stage stage-2">
          <div className="about-header">
            <p className="about-subtitle">LOGISTICS & CARE</p>
            <h2 className="about-title font-switzer">
              Official <span className="text-white">Arrangements</span>
            </h2>
          </div>

          <p className="about-description">
            We handle all essential logistics so pilgrims can focus on worship.
            From <strong>visa processing</strong> and{" "}
            <strong>air tickets</strong> to official{" "}
            <strong>accommodation</strong> and daily meals in Saudi Arabia.
          </p>
          <div className="feature-grid">
            <div className="feature-pill">Visa & Docs</div>
            <div className="feature-pill">Flights</div>
            <div className="feature-pill">Transport</div>
            <div className="feature-pill">Full Board</div>
          </div>
        </div>

        {/* --- STAGE 3: GUIDANCE --- */}
        <div className="content-stage stage-3">
          <div className="about-header">
            <p className="about-subtitle">SPIRITUAL SUPPORT</p>
            <h2 className="about-title font-switzer">
              Religious <span className="text-white">Guidance</span>
            </h2>
          </div>

          <p className="about-description">
            To ensure duties are performed correctly, an experienced{" "}
            <strong>Alim</strong> accompanies the group. From historical
            explanations to ritual instructions, we provide end-to-end spiritual
            support.
          </p>
          <ul className="guidance-list">
            <li>✓ Qualified Religious Instructions</li>
            <li>✓ Ritual & Historical Guidance</li>
            <li>✓ Continuous Journey Support</li>
          </ul>
        </div>
      </div>

      {/* --- BACKGROUND LAYERS (Unchanged) --- */}
      <div className="dune-container">
        <svg
          className="dune-layer-1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f4c983"
            fillOpacity="0.4"
            d="M0,200 Q400,100 800,180 Q1100,240 1440,150 L1440,320 L0,320 Z"
          ></path>
        </svg>

        <div className="dune-layer-2-wrapper">
          <div className="camel-rider">
            <img src={camelRiderPath} alt="Camel" className="camel-img" />
          </div>

          <div className="makkah-icon">
            <svg
              width="100%"
              viewBox="0 0 450 450"
              preserveAspectRatio="xMidYMid meet"
            >
              <g>
                <path
                  fill={makkahColors.mainBody}
                  d="M 225 0.164 L 12.65 93.91 L 12.65 379.94 L 225 449.85 L 437.34 379.94 L 437.34 93.91 Z"
                />
              </g>
              <g>
                <path
                  fill={makkahColors.sideShade}
                  d="M 225 0.164 L 225 449.85 L 437.34 379.94 L 437.34 93.91 Z"
                />
              </g>
              <g>
                <path
                  fill={makkahColors.topDetails}
                  d="M 437.34 127.98 L 437.34 158.88 L 225 106.49 L 12.65 158.88 L 12.65 127.98 L 225 56.57 Z M 399.04 196.4 L 433.82 201.85 L 437.33 202.4 L 437.33 182.78 L 399.04 173.55 Z M 50.95 173.55 L 12.66 182.77 L 12.66 202.39 L 16.17 201.84 L 50.95 196.4 Z M 253.79 173.62 L 253.79 138.56 L 225 131.63 L 196.21 138.56 L 196.21 173.64 L 225 169.12 Z M 149.2 149.88 L 91.62 163.75 L 91.62 190.01 L 149.2 180.99 Z M 358.37 163.75 L 300.8 149.88 L 300.8 180.99 L 358.37 190.01 Z M 172.28 149.34 L 159.9 162.19 L 172.2 174.12 L 184.58 160.34 Z M 70.91 169.93 L 60.66 180.57 L 70.84 190.44 L 81.09 179.03 Z M 265.41 160.35 L 277.79 174.14 L 290.1 162.21 L 277.71 149.35 Z M 368.92 179.05 L 379.16 190.45 L 389.34 180.58 L 379.1 169.94 Z"
                />
              </g>
              <g>
                <path
                  fill={makkahColors.accentDetails}
                  d="M 389.34 180.58 L 379.16 190.45 L 368.92 179.05 L 379.1 169.94 Z M 300.8 149.89 L 300.8 181.01 L 358.37 190.03 L 358.37 163.76 Z M 277.71 149.35 L 265.41 160.35 L 277.79 174.14 L 290.1 162.21 Z M 225 106.49 L 437.34 158.88 L 437.34 127.98 L 225 56.57 Z M 437.34 182.78 L 399.04 173.55 L 399.04 196.39 L 433.82 201.84 L 437.33 202.39 Z M 225 169.12 L 253.78 173.64 L 253.78 138.56 L 225 131.63 Z"
                />
              </g>
            </svg>
          </div>
          <svg
            className="dune-layer-2-svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#d99a35"
              fillOpacity="0.8"
              d="M0,250 Q720,120 1440,250 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
        <svg
          className="dune-layer-3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#a36b13"
            d="M0,280 Q500,220 900,270 Q1200,310 1440,250 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
});

export default About;
