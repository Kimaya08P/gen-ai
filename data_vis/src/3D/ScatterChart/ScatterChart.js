import React from 'react';
import Plot from 'react-plotly.js';

const ScatterChart = ({ data }) => {
  const layout = {
    title: 'Department-wise Employee Data (3D Scatter)',
    scene: {
      xaxis: { title: 'Year' },
      yaxis: { title: 'Department' },
      zaxis: { title: 'Employee Count' },
    },
    margin: { t: 50, b: 50, l: 50, r: 50 },
    plot_bgcolor: '#f7f7f7',
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
    />
  );
};

export default ScatterChart;
