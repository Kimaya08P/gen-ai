// Install required packages
// npm install react-plotly.js plotly.js

import React from 'react';
import Plot from 'react-plotly.js';

const ChartContainer = () => {
  return (
    <div>
      {/* Bar Graph */}
      <h2>Bar Graph</h2>
      <Plot
        data={[
          {
            x: ['A', 'B', 'C', 'D', 'E'],
            y: [20, 14, 23, 25, 18],
            type: 'bar',
            marker: { color: 'rgb(58,200,225)' },
          },
        ]}
        layout={{
          title: 'Bar Graph Example',
          xaxis: { title: 'Categories' },
          yaxis: { title: 'Values' },
          transition: { duration: 500 },
        }}
        config={{ responsive: true }}
      />

      {/* Pie Chart */}
      <h2>Pie Chart</h2>
      <Plot
        data={[
          {
            values: [19, 26, 55, 20, 14],
            labels: ['A', 'B', 'C', 'D', 'E'],
            type: 'pie',
            textinfo: 'label+percent',
            insidetextorientation: 'radial',
          },
        ]}
        layout={{
          title: 'Pie Chart Example',
          transition: { duration: 500 },
        }}
        config={{ responsive: true }}
      />

      {/* Line Chart */}
      <h2>Line Chart</h2>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [10, 15, 13, 17, 21],
            type: 'scatter',
            mode: 'lines+markers',
            line: { color: 'rgb(220,20,60)' },
          },
        ]}
        layout={{
          title: 'Line Chart Example',
          xaxis: { title: 'X Axis' },
          yaxis: { title: 'Y Axis' },
          transition: { duration: 500 },
        }}
        config={{ responsive: true }}
      />

      {/* Radar Chart */}
      <h2>Radar Chart</h2>
      <Plot
        data={[
          {
            type: 'scatterpolar',
            r: [39, 28, 8, 7, 28],
            theta: ['A', 'B', 'C', 'D', 'E'],
            fill: 'toself',
            name: 'Group A',
          },
        ]}
        layout={{
          title: 'Radar Chart Example',
          polar: {
            radialaxis: {
              visible: true,
              range: [0, 50],
            },
          },
          transition: { duration: 500 },
        }}
        config={{ responsive: true }}
      />

      {/* Scatter Plot */}
      <h2>Scatter Plot</h2>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [2, 3, 4, 5, 6],
            mode: 'markers',
            marker: {
              size: 14,
              color: [10, 20, 30, 40, 50],
              colorscale: 'Viridis',
              showscale: true,
            },
          },
        ]}
        layout={{
          title: 'Scatter Plot Example',
          xaxis: { title: 'X Axis' },
          yaxis: { title: 'Y Axis' },
          transition: { duration: 500 },
        }}
        config={{ responsive: true }}
      />

      {/* Heatmap */}
      <h2>Heatmap</h2>
      <Plot
        data={[
          {
            z: [
              [1, 20, 30, 50, 1],
              [20, 1, 60, 80, 30],
              [30, 60, 1, -10, 20],
              [50, 80, -10, 1, 60],
              [1, 30, 20, 60, 1],
            ],
            x: ['A', 'B', 'C', 'D', 'E'],
            y: ['P', 'Q', 'R', 'S', 'T'],
            type: 'heatmap',
            colorscale: 'Blues',
          },
        ]}
        layout={{
          title: 'Heatmap Example',
          transition: { duration: 500 },
        }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default ChartContainer;