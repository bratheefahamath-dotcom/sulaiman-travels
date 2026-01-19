import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Package from "./Package";
import Footer from "./Footer";
import "./Home.css";
import PlaneImg from "../assets/Hero/Plane.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // --- 1. CONFIGURATION ---
      let itemWidth, itemHeight, gap;
      let pkgWidth, pkgHeight;

      if (vw >= 1920) {
        itemWidth = 400;
        itemHeight = 260;
        gap = 30;
        pkgWidth = 400;
        pkgHeight = 600;
      } else if (vw >= 1440) {
        itemWidth = 230;
        itemHeight = 150;
        gap = 20;
        pkgWidth = 320;
        pkgHeight = 480;
      } else if (vw >= 1024) {
        itemWidth = 190;
        itemHeight = 125;
        gap = 18;
        pkgWidth = 280;
        pkgHeight = 420;
      } else if (vw >= 768) {
        itemWidth = 150;
        itemHeight = 100;
        gap = 15;
        pkgWidth = 240;
        pkgHeight = 360;
      } else {
        itemWidth = 120;
        itemHeight = 80;
        gap = 10;
        pkgWidth = 220;
        pkgHeight = 330;
      }

      // --- 2. CALCULATIONS ---
      const startCenterIndex = 6;
      const finalTargetIndex = 0;

      const centerOffset =
        vw / 2 - itemWidth / 2 - startCenterIndex * (itemWidth + gap);
      const distToCenterFinal =
        (startCenterIndex - finalTargetIndex) * (itemWidth + gap);
      const distToClearScreen = 12 * (itemWidth + gap) + vw;

      const middleRowY = (vh - itemHeight) / 2;
      const topRowY = middleRowY - (itemHeight + gap);
      const bottomRowY = middleRowY + (itemHeight + gap);

      // --- 3. SET INITIAL STATES ---
      gsap.set(".home-plane-img", { y: 0, clearProps: "all" });
      gsap.set(".hero-layer-wrapper", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)",
      });
      gsap.set(".about-layer-wrapper", { clipPath: "inset(0px 0px 0px 0px)" });

      // Grid Rows
      gsap.set(".row-middle", { x: centerOffset, y: middleRowY });
      const offsetRowStart = centerOffset - (itemWidth + gap) / 2;
      gsap.set(".row-top", { x: offsetRowStart, y: topRowY });
      gsap.set(".row-bottom", { x: offsetRowStart, y: bottomRowY });

      // Gallery Items
      gsap.set(".gallery-item", { scale: 0, opacity: 0 });
      gsap.set(".gallery-center-target", {
        opacity: 0,
        scale: 1,
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        transformOrigin: "center center",
      });
      gsap.set(".gallery-header", { opacity: 0, y: -20 });

      // PACKAGE STATES
      gsap.set(".package-card", {
        width: pkgWidth,
        height: pkgHeight,
        scale: 1,
        opacity: 0,
      });

      gsap.set([".pkg-left", ".pkg-right"], { zIndex: 1 });
      gsap.set(".pkg-center", { zIndex: 10 });
      gsap.set(".package-header", { opacity: 0, y: -30 });
      gsap.set(".card-content-wrapper", { opacity: 0 });

      // Reset others (Desert/About)
      gsap.set([".dune-layer-1", ".dune-layer-2-wrapper", ".dune-layer-3"], {
        y: 150,
        opacity: 0,
      });
      gsap.set([".camel-rider", ".makkah-icon"], {
        scale: 0,
        transformOrigin: "bottom center",
      });
      gsap.set([".stage-1", ".stage-2", ".stage-3"], { y: 30, opacity: 0 });

      // Footer State (Starts hidden below screen)
      gsap.set(".footer-layer-wrapper", { y: "100%" });

      // --- 4. MASTER TIMELINE ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "+=4000%",
          scrub: 1,
          pin: true,
        },
      });

      // --- PHASE 1: HERO TEAR ---
      const cutDuration = 1.5;
      const wideningStart = cutDuration - 0.2;
      const planeTravelDistance = vh * 0.35 + vh * 1.2;
      const tearTipEnd = 115 - (planeTravelDistance / vh) * 100;

      tl.to(
        ".home-plane-img",
        { y: -planeTravelDistance, ease: "none", duration: cutDuration },
        0
      );
      tl.to(
        ".hero-layer-wrapper",
        {
          clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 50% ${tearTipEnd}%, 0% 100%)`,
          ease: "none",
          duration: cutDuration,
        },
        0
      );
      tl.to(
        ".hero-layer-wrapper",
        {
          clipPath: `polygon(0% 0%, 100% 0%, 100% ${tearTipEnd}%, 50% ${tearTipEnd}%, 0% ${tearTipEnd}%)`,
          ease: "power1.inOut",
          duration: 0.4,
        },
        wideningStart
      );

      // --- PHASE 2: DESERT REVEAL ---
      const desertStart = cutDuration * 0.2;
      tl.to(
        [".dune-layer-1", ".dune-layer-2-wrapper", ".dune-layer-3"],
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        desertStart
      );
      tl.to(
        [".camel-rider", ".makkah-icon"],
        { scale: 1, ease: "back.out(1.7)", duration: 0.4 },
        cutDuration * 0.6
      );

      // --- PHASE 3: ABOUT STAGES ---
      const phaseTwoStart = cutDuration + 0.3;
      tl.to(
        [".stage-1", ".stage-2", ".stage-3"],
        { opacity: 0, duration: 0.1 },
        phaseTwoStart
      );
      tl.to(".stage-1", { y: 0, opacity: 1, duration: 0.5 }, phaseTwoStart)
        .to(
          ".stage-1",
          { y: -30, opacity: 0, duration: 0.4 },
          phaseTwoStart + 1.2
        )
        .to(
          ".stage-2",
          { y: 0, opacity: 1, duration: 0.5 },
          phaseTwoStart + 1.4
        )
        .to(
          ".stage-2",
          { y: -30, opacity: 0, duration: 0.4 },
          phaseTwoStart + 2.6
        )
        .to(
          ".stage-3",
          { y: 0, opacity: 1, duration: 0.5 },
          phaseTwoStart + 2.8
        );

      // --- PHASE 4: SHRINK TO GALLERY ---
      const shrinkStart = phaseTwoStart + 3.8;
      const insetY = (vh - itemHeight) / 2;
      const insetX = (vw - itemWidth) / 2;

      tl.to(
        [".stage-3", ".dune-container", ".about-title", ".about-description"],
        { opacity: 0, duration: 0.5 },
        shrinkStart
      );
      tl.to(
        ".about-layer-wrapper",
        {
          clipPath: `inset(${insetY}px ${insetX}px ${insetY}px ${insetX}px)`,
          ease: "power2.inOut",
          duration: 1.5,
        },
        shrinkStart
      );

      // --- PHASE 5: GALLERY SPREAD ---
      const spreadStart = shrinkStart + 1.5;
      tl.set(".about-layer-wrapper", { opacity: 0 }, spreadStart);
      tl.set(".gallery-center-target", { opacity: 1 }, spreadStart);
      tl.to(".gallery-header", { opacity: 1, y: 0, duration: 1 }, spreadStart);
      tl.to(
        ".gallery-item:not(.gallery-center-target)",
        {
          scale: 1,
          opacity: 1,
          duration: 2.5,
          stagger: { grid: [3, 12], from: "center", amount: 0.8 },
          ease: "elastic.out(1, 0.75)",
        },
        spreadStart
      );

      // --- GALLERY MOVEMENT ---
      const moveStart = spreadStart + 2.5;
      const moveDuration = 8;

      tl.to(
        [".row-top", ".row-bottom"],
        { x: `-=${distToClearScreen}`, ease: "none", duration: moveDuration },
        moveStart
      );
      tl.to(
        ".row-middle",
        {
          x: `+=${distToCenterFinal}`,
          ease: "none",
          duration: moveDuration * 0.7,
        },
        moveStart
      );

      // --- SEPARATION ---
      const separationStart = moveStart + moveDuration * 0.7;
      const separationDuration = moveDuration * 0.3;

      tl.to(
        ".row-middle .gallery-item:not(.gallery-final-target)",
        {
          x: `+=${vw * 0.5}`,
          opacity: 0,
          scale: 0.8,
          ease: "power1.in",
          duration: separationDuration,
        },
        separationStart
      );

      // === PHASE 6: TRANSFORM IN PLACE ===
      const transStart = separationStart + separationDuration;

      // 1. Header Swap
      tl.to(
        ".gallery-header",
        { y: -50, opacity: 0, duration: 0.4 },
        transStart
      );
      tl.to(".package-header", { opacity: 1, y: 0, duration: 0.8 }, transStart);

      // 2. Hide Image
      tl.to(
        ".gallery-final-target .gallery-img",
        { opacity: 0, duration: 0.3 },
        transStart
      );

      // 3. Expand from Center
      tl.to(
        ".gallery-final-target",
        {
          width: pkgWidth,
          height: pkgHeight,
          x: `-=${(pkgWidth - itemWidth) / 2}`,
          y: `-=${(pkgHeight - itemHeight) / 2}`,
          borderRadius: "20px",
          duration: 2,
          ease: "back.out(1.2)",
          transformOrigin: "center center",
        },
        transStart
      );

      // === PHASE 7: PACKAGE REVEAL ===
      const contentRevealStart = transStart + 2.0;

      // --- CRITICAL FIX: BRING PACKAGE LAYER TO FRONT ---
      // This sets z-index: 15 (Higher than Hero's 10) so buttons become clickable
      tl.set(".package-layer-wrapper", { zIndex: 15 }, contentRevealStart);

      // Swap visibility
      tl.set(".gallery-final-target", { opacity: 0 }, contentRevealStart);
      tl.set(".pkg-center", { opacity: 1 }, contentRevealStart);

      // Reveal content
      tl.to(
        ".card-content-wrapper",
        { opacity: 1, duration: 1, ease: "power2.out" },
        contentRevealStart
      );

      // Fan out side cards
      tl.set(
        [".pkg-left", ".pkg-right"],
        { opacity: 1, width: pkgWidth, height: pkgHeight },
        contentRevealStart
      );

      const spreadDistance = pkgWidth + 40;

      tl.to(
        ".pkg-left",
        { x: -spreadDistance, rotation: -4, duration: 1.5, ease: "power3.out" },
        contentRevealStart
      );

      tl.to(
        ".pkg-right",
        { x: spreadDistance, rotation: 4, duration: 1.5, ease: "power3.out" },
        contentRevealStart
      );

      // === PHASE 8: FOOTER REVEAL ===
      const footerStart = contentRevealStart + 2.5;

      // Raise the Footer
      tl.to(
        ".footer-layer-wrapper",
        {
          y: "0%",
          ease: "power2.inOut",
          duration: 1.5,
        },
        footerStart
      );
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="home-container">
      {/* Highest Z-Index (Above everything when revealed) */}
      <div className="footer-layer-wrapper">
        <Footer />
      </div>

      {/* Package Layer: Z-Index 1 normally, jumps to 15 in Phase 7 */}
      <div className="package-layer-wrapper">
        <Package />
      </div>

      <div className="gallery-layer-wrapper">
        <Gallery />
      </div>
      <div className="about-layer-wrapper">
        <About />
      </div>
      <div className="hero-layer-wrapper">
        <Hero />
      </div>
      <div className="plane-layer-wrapper">
        <img src={PlaneImg} alt="Plane" className="home-plane-img" />
      </div>
    </main>
  );
};

export default Home;
