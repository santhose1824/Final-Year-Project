import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/custom_model_training_css/fixed_side_bar.css'; // Assuming you store your CSS separately

const Sidebar = () => {
  const [menuState, setMenuState] = useState({
    unsupervised: false,
    supervised: false,
    nn: false,
    llm: false,
    dataProcessing: false,
  });

  const toggleMenu = (menu) => {
    setMenuState({ ...menuState, [menu]: !menuState[menu] });
  };

  return (
    <div className="sidebar-close">
      <div className="logo-details">
        <span className="logo_name">Model Customization</span>
      </div>
      <ul className="nav-links">
        {/* Ml Unsupervised Section */}
        <li>
          <div className="iocn-link" onClick={() => toggleMenu('unsupervised')}>
            <Link to="#">
              <i className='bx bx-line-chart'></i>
              <span className="link_name">Ml Unsupervised</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${menuState.unsupervised ? 'showMenu' : ''}`}></i>
          </div>
          <ul className={`sub-menu ${menuState.unsupervised ? 'showMenu' : ''}`}>
            <li><Link to="#">K-Means Clustering</Link></li>
            <li><Link to="#">Hierarchical Clustering</Link></li>
            <li><Link to="#">Dimensionality Reduction</Link></li>
          </ul>
        </li>

        {/* Ml Supervised Section */}
        <li>
          <div className="iocn-link" onClick={() => toggleMenu('supervised')}>
            <Link to="#">
              <i className='bx bx-bar-chart-alt'></i>
              <span className="link_name">Ml Supervised</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${menuState.supervised ? 'showMenu' : ''}`}></i>
          </div>
          <ul className={`sub-menu ${menuState.supervised ? 'showMenu' : ''}`}>
            <li><Link to="#">Linear Regression</Link></li>
            <li><Link to="#">Non-Linear Regression</Link></li>
            <li><Link to="#">Classification Algorithms</Link></li>
            <li><Link to="#">Regression Trees</Link></li>
            <li><Link to="#">Naive Bayes</Link></li>
          </ul>
        </li>

        {/* NN Architecture Section */}
        <li>
          <div className="iocn-link" onClick={() => toggleMenu('nn')}>
            <Link to="#">
              <i className='bx bx-network-chart'></i>
              <span className="link_name">NN Architecture</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${menuState.nn ? 'showMenu' : ''}`}></i>
          </div>
          <ul className={`sub-menu ${menuState.nn ? 'showMenu' : ''}`}>
            <li><Link to="#">CNN (Convolutional)</Link></li>
            <li><Link to="#">RNN (Recurrent)</Link></li>
            <li><Link to="#">LSTMs</Link></li>
          </ul>
        </li>

        {/* LLM Custom Architecture Section */}
        <li>
          <div className="iocn-link" onClick={() => toggleMenu('llm')}>
            <Link to="#">
              <i className='bx bx-brain'></i>
              <span className="link_name">LLM Custom Architecture</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${menuState.llm ? 'showMenu' : ''}`}></i>
          </div>
          <ul className={`sub-menu ${menuState.llm ? 'showMenu' : ''}`}>
            <li><Link to="#">Encoder-Decoder</Link></li>
            <li><Link to="#">Causal-Decoder</Link></li>
            <li><Link to="#">Prefix-Decoder</Link></li>
          </ul>
        </li>

        {/* Data Processing Section */}
        <li>
          <div className="iocn-link" onClick={() => toggleMenu('dataProcessing')}>
            <Link to="#">
              <i className='bx bx-data'></i>
              <span className="link_name">Data Processing</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${menuState.dataProcessing ? 'showMenu' : ''}`}></i>
          </div>
          <ul className={`sub-menu ${menuState.dataProcessing ? 'showMenu' : ''}`}>
            <li><Link to="#">Anomaly Detection</Link></li>
            <li><Link to="#">Data Cleansing</Link></li>
            <li><Link to="#">Aggregation</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
