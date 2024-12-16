import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/signin_signup_css/login.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SignInSignUp = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <div className="login-container">
            <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </Link>
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link to="/home_page/dashboard">
                        <button type="button">Sign Up</button>
                        </Link>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </Link>
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link to="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </div>
                        <span>or use your email and password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link to="#" className="forgot-password">Forgot Your Password?</Link>
                        <Link to="/home_page/dashboard">
                        <button type="button">Sign In</button>
                        </Link>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of the site's features</p>
                            <button className="hidden" id="login" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of the site's features</p>
                            <button className="hidden" id="register" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInSignUp;
