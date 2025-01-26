import React from 'react';
import Plot from 'react-plotly.js';

const RadarChart = ({ data }) => {
  const layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 600],
      },
    },
    title: 'Department-wise Employee Growth Over Years',
    showlegend: true,
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

export default RadarChart;
