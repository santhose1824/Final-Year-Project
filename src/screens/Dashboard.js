import React from 'react'
import Header from "../components/dashboard/Header";
import MainContent from '../components/dashboard/MainContent';
import "../styles/dashboard_css/dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header/>
      <div className="home-section">
      <MainContent/>
      </div>
    </div>
  )
}

export default Dashboard;
