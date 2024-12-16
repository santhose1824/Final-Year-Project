import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js'; // Import Chart.js
import "../../styles/dashboard_css/main_content.css"; // Adjust the path as needed

// Register Chart.js components
Chart.register(...registerables);

const MainContent = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogDescription, setDialogDescription] = useState('');

    const canvasRef = useRef(null); // Reference for the canvas

    const openDialog = (title, description) => {
        setDialogTitle(title);
        setDialogDescription(description);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    // Chart.js rendering
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Model A', 'Model B', 'Model C'],
                datasets: [{
                    label: 'Usage Statistics',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            myChart.destroy(); // Clean up the chart on component unmount
        };
    }, []);

    return (
          <div className="main-section">
            <div className="row">
                <div className="col-2">
                    <div className="small-conatiner-1">
                        <h4>Open Recent</h4>
                        <div className="open-recent-container">
                            <table className="recent-works-table">
                                <thead>
                                    <tr>
                                        <th>Recent Works</th>
                                        <th>Timing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LLM Model Trained</td>
                                        <td>12.06.2024 - 12:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Image Classification Model</td>
                                        <td>10.05.2024 - 10:30 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Sentiment Analysis Model</td>
                                        <td>09.04.2024 - 02:15 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="small-container-1">
                            <h4>Your Cloud</h4>
                            <div className="graph-container">
                                <h4>Your Cloud with Usage Statistics</h4>
                                <canvas ref={canvasRef} id="usageStatisticsGraph"></canvas>
                                <p>This section provides an overview of the usage statistics of your cloud resources, helping you understand how your models are performing and which resources are being utilized the most.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-1">
                    <div className="small-conatiner-2">
                        <h4>Deployments</h4>
                        <div className="open-recent-container">
                            <table className="recent-works-table">
                                <thead>
                                    <tr>
                                        <th>Recent Works</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LLM Model Trained</td>
                                        <td>
                                            <button className="info-button" onClick={() => openDialog('LLM Model Trained', 'Details about LLM model deployment...')}>
                                                <i className='bx bx-info-circle'></i> More Info
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Image Classification Model</td>
                                        <td>
                                            <button className="info-button" onClick={() => openDialog('Image Classification Model', 'Details about Image Classification model deployment...')}>
                                                <i className='bx bx-info-circle'></i> More Info
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sentiment Analysis Model</td>
                                        <td>
                                            <button className="info-button" onClick={() => openDialog('Sentiment Analysis Model', 'Details about Sentiment Analysis model deployment...')}>
                                                <i className='bx bx-info-circle'></i> More Info
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Dialog Box */}
                {dialogOpen && (
                    <div id="dialog" className="dialog">
                        <div className="dialog-content">
                            <span className="close-button" onClick={closeDialog}>&times;</span>
                            <h2>{dialogTitle}</h2>
                            <p>{dialogDescription}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainContent;
