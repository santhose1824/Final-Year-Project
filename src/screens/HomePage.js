import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import { Sidebar } from '../components/side_bar/Sidebar';
import OpenSourceModels from "../screens/OpenSourceModels";
import HostedModels from "../screens/HostedModels";
import CustomModelHome from '../components/custom_model_training/Custom_Model_Home';
const HomePage = () => {
  return (
    <div style={{ display: 'flex',  width:'200px', position:'fixed'}}>
      <Sidebar />
      <div style={{ flex: 1,}}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/open_source_models" element={<OpenSourceModels />} />
          <Route path="/hosted_models" element={<HostedModels />} />
          <Route path="/custom_mode_home" element={<CustomModelHome/>} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
