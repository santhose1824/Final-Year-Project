import React from 'react';
import CustomModelHomeHeader from "../custom_model_training/Custom_Model_Home_Header";
import { BiBrain, BiLineChart } from 'react-icons/bi'; // Importing some Box Icons
import "../../styles/custom_model_training_css/custom_model_home.css";

const modelData = [
  {
    title: "CNN Image Class",
    status: "Training",
    icon: <BiBrain size={50} />,
    labelClass: "training"
  },
  {
    title: "Naive Bayes Crop Prediction",
    status: "Completed",
    icon: <BiLineChart size={50} />,
    labelClass: "completed"
  },
  {
    title: "Algorithm X",
    status: "Pending",
    icon: <BiBrain size={50} />,
    labelClass: "pending"
  },
  {
    title: "Algorithm Y",
    status: "Training",
    icon: <BiBrain size={50} />,
    labelClass: "training"
  },
  {
    title: "CNN Image Class",
    status: "Training",
    icon: <BiBrain size={50} />,
    labelClass: "training"
  },
  {
    title: "Naive Bayes Crop Prediction",
    status: "Completed",
    icon: <BiLineChart size={50} />,
    labelClass: "completed"
  },
  {
    title: "Algorithm X",
    status: "Pending",
    icon: <BiBrain size={50} />,
    labelClass: "pending"
  },
  {
    title: "Algorithm Y",
    status: "Training",
    icon: <BiBrain size={50} />,
    labelClass: "training"
  }
];

const CustomModelHome = () => {
  return (
    <div className="custom-model-home-container">
      <CustomModelHomeHeader />
      <div className="custom-model-home-content">
        <div className="custom-model-home-content-title">Open Recents</div>
        <div className="custom-model-home-content-items">
          {modelData.map((model, index) => (
            <div className="custom-model-card" key={index}>
              <div className="circle">
                {model.icon}
              </div>
              <div className="card-title">{model.title}</div>
              <div className={`label ${model.labelClass}`}>{model.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomModelHome;
