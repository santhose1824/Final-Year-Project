import React from 'react';
import '../../styles/custom_model_training_css/header_custom.css'; // Import your CSS file if needed
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header-custom">
      <img src={logo} alt="Logo" />
      <h3 className="webpage-name-custom">Graphx Models</h3>
      <h3 className="section-name-custom">|</h3>
      <div className="header-title-custom">
        <h3 className="section-name-custom">Train and Fine Tune your model</h3>
      </div>
    </div>
  );
};

export default Header;
