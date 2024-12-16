import React, { useState } from 'react';
import { motion } from "framer-motion";
import "../../styles/side_bar_css/side_bar.css";
import { NavLink } from 'react-router-dom';

const routes = [
  {
    path: "/home_page/dashboard",
    name: "Dashboard",
    icon: <i className='bx bx-grid-alt'></i>, // Boxicons tachometer icon
  },
  {
    path: "/home_page/open_source_models",
    name: "Open Source Models",
    icon: <i className='bx bx-code-alt'></i>, // Boxicons code icon
  },
  {
    path: "/home_page/hosted_models",
    name: "Hosted Models",
    icon: <i className='bx bx-server'></i>, // Boxicons cloud icon
  },
  {
    path: "/home_page/custom_mode_home",
    name: "Model Customization and Training",
    icon: <i className='bx bx-pie-chart-alt-2'></i>, // Boxicons cog icon
  },
];

export const Sidebar = ({ children, username="John Doe" }) => {
  const [isOpen, setIsOpen] = useState(false);  // State to control open/close

  const toggleSidebar = () => setIsOpen(!isOpen);  // Toggle function

  const firstLetter = username ? username.charAt(0).toUpperCase() : ""; // Get the first letter of username

  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "250px" : "78px" }}  // Change width based on isOpen state
        initial={{ width: "60px" }}  // Initial width
        transition={{ duration: 0.5 }}  // Transition speed
        className="sidebar"
      >
        <div className="top-section">
          {isOpen && <span className="sidebar-title">GraphX Models</span>}  {/* Sidebar title */}
          <i className='bx bx-menu-alt-right toggle-btn' onClick={toggleSidebar} />  {/* Toggle button */}
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="nav-link">
              <div className="icon">{route.icon}</div>
              {isOpen && <div className="link_text">{route.name}</div>}
            </NavLink>
          ))}
        </section>

        {/* User Profile Section at the Bottom */}
        <div className="user-section">
          <div className="user-profile">
            {isOpen ? (
              <>
                <div className="avatar">{firstLetter}</div>
                <div className="username">{username}</div>
              </>
            ) : (
              <div className="icon logout-icon"><i className='bx bx-log-out'></i></div> // Show logout icon only
            )}
          </div>
          {isOpen && (
            <div className="logout-button">
              <div className="bx bx-log-out"></div> {/* Logout button */}
            </div>
          )}
        </div>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
