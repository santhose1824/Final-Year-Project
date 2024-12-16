import React from 'react';
import "../../styles/dashboard_css/header.css";
import logo from "../../images/logo.png"; // Import the image

const Header = () => {
  return (
    <div className="header">
      {/* Logo Image */}
      <img src={logo} alt="Logo" /> {/* Use the imported image */}
      
      {/* Webpage Name */}
      <h3 className="webpage-name">Graphx Models</h3>

      {/* Divider */}
      <h3 className="section-name">|</h3>

      {/* Section Name */}
      <div className="header-title">
        <h3 className="section-name">Dashboard</h3>
      </div>
    </div>
  );
};

export default Header;
