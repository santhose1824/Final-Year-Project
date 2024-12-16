import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../../styles/landing_page_css/Navbar.css";
import logo from "../../images/GraphX Models name.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="index.html">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Contact</Link>
      </div>
      <Link to="/login">
        <button className="sign-in-button">
          <b>Sign in to the Console</b>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
