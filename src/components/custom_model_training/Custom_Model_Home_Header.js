import React from 'react';
import '../../styles/custom_model_training_css/custom_model_home.css'; // Import your CSS file if needed
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
const HomeHeader = () => {
  return (
    <div className="header-custom-home">
      <div className="title-section">
      <img src={logo} alt="Logo" />
      <h3 className="webpage-name-custom">Graphx Models</h3>
      <h3 className="section-name-custom">|</h3>
      <div className="header-title-custom">
        <h3 className="section-name-custom">Train and Fine Tune your model</h3>
      </div>
      </div>
      <div className="header-button">
        <Link to="/custom_model_customization" className="button-class">Train a New Model +</Link>
      </div>
    </div>
  );
};

export default HomeHeader;