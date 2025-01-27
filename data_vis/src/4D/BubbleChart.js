import React from 'react';
import Plot from 'react-plotly.js';
import './BubbleChart.css'; // Import the CSS file

const BubbleChart = () => {
  // Complex data (sales data, profit, region population, and growth rate)
  const data = [
    {
      x: [150, 200, 250, 300, 350, 400],       // Sales in region (X-axis)
      y: [50, 60, 70, 80, 90, 100],             // Profit in region (Y-axis)
      text: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],  // Region labels
      mode: 'markers',                          // Bubble chart type
      marker: {
        size: [50, 80, 100, 120, 140, 160],     // Bubble sizes based on population
        color: [12, 18, 22, 30, 25, 40],        // Growth rate of sales (color)
        colorscale: 'Viridis',                  // Color scale
        showscale: true,                        // Show color scale
      },
      type: 'scatter',                          // Scatter plot type (for bubble chart)
    }
  ];

  const layout = {
    title: 'Global Sales and Profit Performance',
    xaxis: {
      title: 'Sales in Region (in million $)',
    },
    yaxis: {
      title: 'Profit in Region (in million $)',
    },
    showlegend: false,
    height: 600, // Adjusted height
    width: 800,  // Adjusted width
    plot_bgcolor: '#f7f7f7', // Background color
    paper_bgcolor: '#ffffff', // Paper background
  };

  return (
    <div className="container">
      <h1>Global Sales & Profit by Region</h1>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Plot
            data={data}
            layout={layout}
          />
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
