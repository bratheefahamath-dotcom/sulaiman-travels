import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

// Assets
import LogoImg from "../assets/Logo.svg";
// REMOVED CloudImg import
import Cloud2Img from "../assets/Hero/Cloud2.svg";

gsap.registerPlugin(useGSAP);

// NEW COMPONENT: Clean Text Only
const InfoItem = ({ title, subtitle, className }) => {
  return (
    <div className={`hero-info-item ${className}`}>
      <div className="info-text-container opacity-0">
        <h3 className="info-title font-switzer">{title}</h3>
        <div className="info-line"></div> {/* Decorative line */}
        <p className="info-subtitle-content">{subtitle}</p>
      </div>
    </div>
  );
};

// Keep background clouds for depth (optional, but looks nice behind plane)
const CloudStream = ({ left, scale, opacity, className }) => {
  return (
    <div
      className={`${className} absolute https://github.com/login?client_id=01ab8ac9400c4e429b23&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D01ab8ac9400c4e429b23%26code_challenge%3DlltBmKyp88DArYp7XEEhf9XN6m6nFMsGTxSrswYSKSw%26code_challenge_method%3DS256%26prompt%3Dselect_account%26redirect_uri%3Dhttps%253A%252F%252Fvscode.dev%252Fredirect%26scope%3Duser%253Aemail%26state%3Dvscode%25253A%25252F%25252Fvscode.github-authentication%25252Fdid-authenticate%25253Fnonce%25253D8891a2a23757b9a8%252526windowId%25253D1 w-full h-[200%] pointer-events-none flex flex-col items-center`}
      style={{ left, opacity, zIndex: 1 }}
    >
      <div className="w-full h-1/2 flex justify-center items-center">
        <img
          src={Cloud2Img}
          alt=""
          className="w-full h-auto object-contain"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
      <div className="w-full h-1/2 flex justify-center items-center">
        <img
          src={Cloud2Img}
          alt=""
          className="w-full h-auto object-contain"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. SAFETY RESET
      gsap.set(".info-text-container", { opacity: 0, y: 20 });
      gsap.set(".info-line", { width: 0 }); // Reset line width
      gsap.set(".hero-logo", { scale: 0, rotation: -45, opacity: 0 });
      gsap.set(".brand-name", { y: 30, opacity: 0 });
      gsap.set(".brand-subtitle", { y: 20, opacity: 0 });
      gsap.set(".bg-text-left, .bg-text-right", { scale: 0.8, opacity: 0 });

      // 2. MAIN INTRO TIMELINE
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // Background Text
      tl.to(
        ".bg-text-left, .bg-text-right",
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        },
        0.5
      );

      // Logo & Brand
      tl.to(
        ".hero-logo",
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=1.0"
      );

      tl.to(".brand-name", { y: 0, opacity: 1, duration: 0.6 }, "-=0.6");
      tl.to(".brand-subtitle", { y: 0, opacity: 1, duration: 0.6 }, "-=0.5");

      // NEW: Info Text Reveal (Clean slide up)
      tl.to(
        ".info-text-container",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.5"
      );

      // Animate the decorative line
      tl.to(
        ".info-line",
        {
          width: "40px",
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
        },
        "<0.2"
      ); // Starts slightly after text starts

      // 3. BACKGROUND STREAMS
      gsap.to(".bg-stream", {
        y: "50%",
        duration: 7, // Changed from 12 to 7 (Faster, but smooth)
        repeat: -1,
        ease: "none",
      });

      gsap.to(".bg-stream-slow", {
        y: "50%",
        duration: 12, // Changed from 20 to 12 (Noticeable drift)
        repeat: -1,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="hero" ref={containerRef}>
      {/* Background clouds kept very subtle for atmosphere */}
      <CloudStream
        className="bg-stream"
        left="-30%"
        scale={1.5}
        opacity={0.35} // Slightly increased from 0.3
      />
      <CloudStream
        className="bg-stream"
        left="30%"
        scale={1.5}
        opacity={0.35} // Slightly increased from 0.3
      />
      <CloudStream
        className="bg-stream-slow"
        left="0%"
        scale={1}
        opacity={0.2} // Increased from 0.1 to make it visible
      />

      {/* NEW: Clean Info Items (No Cloud Images) */}
      <InfoItem
        className="info-tl"
        title="Trusted Umrah & Hajj"
        subtitle="Group Journeys"
      />
      <InfoItem
        className="info-tr"
        title="Helping Muslims"
        subtitle="Fulfill Religious Duties"
      />
      <InfoItem
        className="info-bl"
        title="Well-Organized"
        subtitle="Structured Group Travels"
      />
      <InfoItem
        className="info-br"
        title="Years of Experience"
        subtitle="Guiding Pilgrims"
      />

      <div className="hero-bg-text-container">
        <h2 className="bg-text-left font-switzer">SACRED</h2>
        <h2 className="bg-text-right font-switzer">TRAVEL</h2>
      </div>

      <div className="brand-section">
        <img src={LogoImg} alt="Sulaiman Travels Logo" className="hero-logo" />
        <div className="brand-text">
          <h1 className="brand-name font-switzer">Sulaiman</h1>
          <p className="brand-subtitle">TRAVELS</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
