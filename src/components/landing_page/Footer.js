import React from 'react';
import '../../styles/landing_page_css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-col">
            <h4>Learn about GraphX Models</h4>
            <ul>
              <li><Link to="/">What is GraphX Models?</Link></li>
              <li><Link to="/">How to Custom Train Models?</Link></li>
              <li><Link to="/">How to use Model Deployment Service?</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <br />
            <ul>
              <br />
              <li><Link to="/">How to Avail Open Source Models?</Link></li>
              <li><Link to="/">How to fine-tune models using GraphX Models?</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">Legal</Link></li>
              <li><Link to="/">Community</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className='follow-footer'>Follow us</h4>
            <div className="social-links">
              <Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GraphX Models. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
