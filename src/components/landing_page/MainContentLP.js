import React from 'react';
import '../../styles/landing_page_css/MainContentLP.css';
import mcimage from '../../images/Main cont image4.png';
import { Link } from 'react-router-dom';

const MainContentLP = () => {
    return (
        <div className="main-content">
            <div className="text">
                <h1>GraphX Models</h1>
                <p>We bring you a personal AI Lab for effortless training, fine-tuning, and deploying AI models tailored to your business needs.</p>
                <Link to="#"Get Started className="get-started">Get Started</Link>
            </div>
            <img src={mcimage} width="350px" alt="AI Illustration" />
        </div>
    );
};

export default MainContentLP;
