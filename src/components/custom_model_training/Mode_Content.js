import React, { useEffect, useRef, useState } from 'react';
import '../../styles/custom_model_training_css/model_content.css'; // Import your CSS file

const ModelContent = () => {
    const canvasRef = useRef(null);
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const totalSegments = 60; // Total segments for the gauge


    // Function to draw the gauge
    const drawGauge = (value) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 50; // Adjust for the size of the inner circle

        // Clear the canvas before each draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw gauge background (outer arc)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false); // Semi-circle
        ctx.lineWidth = 25;
        ctx.strokeStyle = '#ddd'; // Background color for the arc
        ctx.stroke();

        // Draw the filled segments
        const angleIncrement = Math.PI / totalSegments; // Angle per segment
        const filledSegments = Math.floor((value / 100) * totalSegments);

        for (let i = 0; i < totalSegments; i++) {
            const startAngle = Math.PI + i * angleIncrement;
            const endAngle = startAngle + angleIncrement;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
            ctx.lineWidth = 25;

            // Change color for filled and unfilled segments
            if (i < filledSegments) {
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, '#ff9900'); // Start color (orange gradient)
                gradient.addColorStop(1, '#ffcc33'); // End color
                ctx.strokeStyle = gradient;
            } else {
                ctx.strokeStyle = '#ddd'; // Unfilled segment color
            }

            ctx.stroke();
        }
    };

    // Update gauge value when the button is clicked
    const updateGauge = (value) => {
        setCurrentPercentage(value);
    };

    useEffect(() => {
        drawGauge(currentPercentage);
    }, [currentPercentage]);
    return (
        <section className="home-section-custom">
            <button type="button-custom" className="ai-btn-custom">
                Ask AI to customize your Architecture that assuming. It would like to assign the cluster to the classes
            </button>
            <div className="home-content-custom">
            <div className="circular-ui-custom">
                    <canvas ref={canvasRef} width="580" height="580" className="canvas-custom"></canvas>
                    <div className="inner-circle-custom">
                        <input type="text" id="dataset-path" className="input-field-custom" placeholder="Dataset Path" />
                        <input type="text" id="train-test" className="input-field-custom" placeholder="Train-Test Ratio" />
                        <input type="text" id="optimization-method" className="input-field-custom" placeholder="Optimization Method" />
                        <button className="submit-button-custom" onClick={() => updateGauge(5)}>Submit</button>
                    </div>
                </div>
                <div className="model-details-custom">
                    <h2>Model Details</h2>
                    <p>Currently Training: Naive-Bayes Classifier</p>
                </div>
                <div className="col-2-custom">
                    <div className="small-conatiner-1-custom">
                        <h4>Open Recent</h4>
                        <div className="open-recent-container-custom">
                            <table className="recent-works-table-custom">
                                <thead>
                                    <tr>
                                        <th>Evaluation</th>
                                        <th>Metrics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RMSE</td>
                                        <td>1.00</td>
                                    </tr>
                                    <tr>
                                        <td>Error</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Accuracy</td>
                                        <td>80%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="heading-custom">
                            <h4 style={{ color: 'white' }}>Confusion Matrix</h4>
                        </div>
                        <div className="confusion-matrix-custom">
                            <div className="confusion-header-custom"></div>
                            <div className="confusion-header-custom">Predicted: Yes</div>
                            <div className="confusion-header-custom">Predicted: No</div>
                            <div className="confusion-header-custom">Actual: Yes</div>
                            <div className="confusion-item tp">True Positive (TP)</div>
                            <div className="confusion-item fn">False Negative (FN)</div>
                            <div className="confusion-header-custom">Actual: No</div>
                            <div className="confusion-item fp">False Positive (FP)</div>
                            <div className="confusion-item tn">True Negative (TN)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="terminal">
                <div className="terminal-header">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                    <span className="title-custom">Terminal</span>
                </div>
                <div className="terminal-body">
                    <p className="command">Epoch 1/10 - Loss: 0.432, Accuracy: 76%</p>
                    <p className="command">Epoch 2/10 - Loss: 0.391, Accuracy: 79%</p>
                    <p className="command">Epoch 3/10 - Loss: 0.368, Accuracy: 81%</p>
                    <p className="command">Epoch 4/10 - Loss: 0.568, Accuracy: 89%</p>
                    <p className="command">Epoch 5/10 - Loss: 0.668, Accuracy: 93%</p>
                    <p className="command">Epoch 6/10 - Loss: 0.268, Accuracy: 95%</p>
                    <p className="command">Epoch 7/10 - Loss: 0.468, Accuracy: 96%</p>
                    <p className="command">Epoch 8/10 - Loss: 0.768, Accuracy: 98%</p>
                    <p className="command">Epoch 9/10 - Loss: 0.268, Accuracy: 99%</p>
                    <p className="command">Epoch 10/10 - Loss: 0.568, Accuracy: 100%</p>
                </div>
            </div>
        </section>
    );
};

export default ModelContent;
