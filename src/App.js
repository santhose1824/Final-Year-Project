import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import SignInSignUp from "./screens/SignInSignUp";
import HomePage from "./screens/HomePage"; // HomePage import
import ModelCustomizationandTraining from "./screens/ModelCustomizationandTraining";
function App() {
  return (
    <Router>
      <Routes>
        {/* Initial pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignInSignUp />} />

        {/* Home Page with Sidebar */}
        <Route path="/home_page/*" element={<HomePage />} /> {/* Adjust path */}
        <Route path="/custom_model_customization" element={<ModelCustomizationandTraining />} />

      </Routes>
    </Router>
  );
}

export default App;
