import React from 'react';
import Plot from 'react-plotly.js';

const HeatMapChart = ({ data }) => {
  const layout = {
    title: 'Employee Growth Heat Map (Year vs Department)',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Department' },
    hovermode: 'closest',
    plot_bgcolor: '#f7f7f7',
    paper_bgcolor: '#ffffff',
    font: {
      family: 'Arial, sans-serif',
      size: 14,
      color: '#555555',
    },
    margin: { t: 50, b: 50, l: 50, r: 50 },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
    />
  );
};

export default HeatMapChart;
