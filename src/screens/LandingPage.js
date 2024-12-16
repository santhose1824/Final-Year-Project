import React from "react";
import Navbar from "../components/landing_page/Navbar";
import MainContentLP from "../components/landing_page/MainContentLP";
import LPServices from "../components/landing_page/LPServices";
import Footer from "../components/landing_page/Footer";
import "../styles/landing_page_css/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="NAV">
        <Navbar />
      </div>
      <MainContentLP />
      <LPServices />
      <Footer />
    </div>
  );
};

export default LandingPage;
