import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ color }) => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        color: color || "inherit", // Uses prop color or inherits from parent
        fontFamily: "'GeneralSans-Variable', sans-serif",
        fontWeight: "600",
        fontSize: "0.9rem",
        letterSpacing: "0.05em",
        transition: "opacity 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {/* Circle Icon */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: `1px solid ${color || "currentColor"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "1.1rem",
            paddingBottom: "2px",
            marginRight: "2px",
          }}
        >
          ←
        </span>
      </div>

      <span>GO HOME</span>
    </Link>
  );
};

export default BackButton;
