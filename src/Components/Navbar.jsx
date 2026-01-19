import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef(null);

  // We store refs to our list items to calculate positions
  const itemsRef = useRef([]);

  // Configuration for the links
  const links = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/booking", label: "Book Now" },
  ];

  // Function to move the indicator to a specific element index
  const moveIndicator = (index) => {
    const el = itemsRef.current[index];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1, // Visible
      });
    }
  };

  // 1. On Mount & Route Change: Move indicator to the Active Page
  useEffect(() => {
    const activeIndex = links.findIndex(
      (link) => link.path === location.pathname
    );
    if (activeIndex !== -1) {
      moveIndicator(activeIndex);
    } else {
      // If on a page not in the menu (optional), maybe hide it or default to home
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname]);

  // 2. Interaction Handlers
  const handleMouseEnter = (index) => {
    moveIndicator(index);
  };

  const handleMouseLeave = () => {
    // When mouse leaves the nav, return to the Active Page
    const activeIndex = links.findIndex(
      (link) => link.path === location.pathname
    );
    if (activeIndex !== -1) {
      moveIndicator(activeIndex);
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <nav className="floating-nav" ref={navRef}>
      <ul className="nav-links" onMouseLeave={handleMouseLeave}>
        {/* THE SLIDING GOLD BACKGROUND */}
        <div
          className="nav-indicator"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
        />

        {/* MENU ITEMS */}
        {links.map((link, index) => (
          <li
            key={link.path}
            className="nav-item"
            ref={(el) => (itemsRef.current[index] = el)} // Store ref
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <Link
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active-text" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
