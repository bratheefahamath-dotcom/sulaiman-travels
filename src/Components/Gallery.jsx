import React from "react";
import "./Gallery.css";

// --- IMPORTS (Kept exactly as you had them) ---
import img1 from "../assets/Gallery/1.jpg";
import img2 from "../assets/Gallery/2.jpg";
import img3 from "../assets/Gallery/3.jpg";
import img4 from "../assets/Gallery/4.jpg";
import img5 from "../assets/Gallery/5.jpg";
import img6_jpeg from "../assets/Gallery/6.jpg";
import img6_jpg from "../assets/Gallery/6.jpg";
import img7 from "../assets/Gallery/7.jpg";
import img8 from "../assets/Gallery/8.jpg";
import img9 from "../assets/Gallery/9.jpg";
import img10 from "../assets/Gallery/10.jpg";
import img11 from "../assets/Gallery/11.jpg";
import img12 from "../assets/Gallery/12.jpg";
import img13 from "../assets/Gallery/13.jpg";
import img14 from "../assets/Gallery/14.jpg";
import img15 from "../assets/Gallery/15.jpg";
import img16 from "../assets/Gallery/16.jpg";
import img17 from "../assets/Gallery/17.jpg";
import img18 from "../assets/Gallery/18.jpg";
import img19 from "../assets/Gallery/19.png";
import img20 from "../assets/Gallery/20.png";
import img21 from "../assets/Gallery/21.png";
import img22 from "../assets/Gallery/22.jpg";
import img23 from "../assets/Gallery/23.jpg";
import img24 from "../assets/Gallery/24.jpg";
import img25 from "../assets/Gallery/25.jpg";
import img26 from "../assets/Gallery/26.jpg";
import img27 from "../assets/Gallery/27.jpg";

const Gallery = () => {
  const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6_jpeg,
    img6_jpg,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
  ];

  const itemsPerRow = 12;
  const initialCenterIndex = 6;
  const finalTargetIndex = 0;

  const getImage = (index) => {
    return allImages[index % allImages.length];
  };

  return (
    <section className="gallery-section">
      {/* --- NEW HEADER (MATCHING CONTACT STYLE) --- */}
      <div className="gallery-header">
        <p className="gallery-subtitle">CAPTURING THE SACRED JOURNEY</p>
        <h2 className="gallery-title font-switzer">
          Blessed <span className="text-gold">Memories</span>
        </h2>
      </div>

      <div className="gallery-container">
        {/* --- ROW 1 (Top) --- */}
        <div className="gallery-row row-top">
          {Array.from({ length: itemsPerRow }).map((_, i) => (
            <div key={`top-${i}`} className="gallery-item">
              <img src={getImage(i)} alt="Gallery" className="gallery-img" />
            </div>
          ))}
        </div>

        {/* --- ROW 2 (Middle) --- */}
        <div className="gallery-row row-middle">
          {Array.from({ length: itemsPerRow }).map((_, i) => {
            let className = "gallery-item";
            if (i === initialCenterIndex) className += " gallery-center-target";
            if (i === finalTargetIndex) className += " gallery-final-target";
            const imgIndex = i + itemsPerRow;

            return (
              <div key={`mid-${i}`} className={className}>
                <img
                  src={getImage(imgIndex)}
                  alt="Gallery"
                  className="gallery-img"
                />
              </div>
            );
          })}
        </div>

        {/* --- ROW 3 (Bottom) --- */}
        <div className="gallery-row row-bottom">
          {Array.from({ length: itemsPerRow }).map((_, i) => {
            const imgIndex = i + itemsPerRow * 2;
            return (
              <div key={`bot-${i}`} className="gallery-item">
                <img
                  src={getImage(imgIndex)}
                  alt="Gallery"
                  className="gallery-img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
