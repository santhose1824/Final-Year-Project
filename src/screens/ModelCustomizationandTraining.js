import React from 'react';
import Sidebar from '../components/custom_model_training/Fixed_Side_bar'; // Import the Sidebar component
import '../styles/custom_model_training_css/model_customization.css'; // Separate CSS for layout and styling
import Header from '../components/custom_model_training/Header_custom';
import ModelContent from '../components/custom_model_training/Mode_Content';
const ModelCustomizationandTraining = () => {
  return (
    <div className="custom-model">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <Header/>
      <ModelContent/>
      </div>
  );
};

export default ModelCustomizationandTraining;