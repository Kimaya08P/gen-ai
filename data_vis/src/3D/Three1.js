import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import './Three1.css';  // Ensure you have a CSS file for styling
import RadarChart from './RadarChart/RadarChart';
import ScatterChart from './ScatterChart/ScatterChart';
import HeatMapChart from './HeatMap/Heatmap';   

const Three1 = () => {
  const departments = ['Finance', 'HR', 'IT', 'Marketing', 'Sales'];
  const years = ['2014', '2015', '2016', '2017', '2018'];
  
  // Generate dynamic data for Scatter (3D), Radar, and Heat Map

  // Scatter Data (3D - Randomized)
  const scatterData = () => {
    return departments.map((dept, idx) => ({
      x: years.map(() => Math.random() * 100),  // Random X values
      y: years.map(() => Math.random() * 100),  // Random Y values
      z: years.map(() => Math.random() * 100),  // Random Z values
      mode: 'markers',
      type: 'scatter3d',
      marker: { size: 8 },
      name: dept,
    }));
  };

  // Radar Data (Dynamic Headcount per Department per Year)
  const radarData = () => {
    return years.map(year => ({
      type: 'scatterpolar',
      mode: 'lines+markers',
      name: year,
      r: departments.map(() => Math.floor(Math.random() * 500)),  // Random headcount per department
      theta: departments,
      line: { color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` },
      marker: { size: 12 },
    }));
  };

  // Heatmap Data (Year vs Department)
  const heatmapData = () => {
    const matrix = departments.map(() =>
      years.map(() => Math.floor(Math.random() * 500))  // Random headcount values for the heatmap
    );

    return [{
      z: matrix,
      x: years,
      y: departments,
      type: 'heatmap',
      colorscale: 'Viridis',
    }];
  };

  return (
    <div className="app-container">
      <h1>Dynamic Data Visualization</h1>
      <div className="chart-container">
        <div className="chart">
          <h2>3D Scatter Chart</h2>
          <ScatterChart data={scatterData()} />
        </div>
        <div className="chart">
          <h2>Radar Chart</h2>
          <RadarChart data={radarData()} />
        </div>
        <div className="chart">
          <h2>Heat Map</h2>
          <HeatMapChart data={heatmapData()} />
        </div>
      </div>
    </div>
  );
};

export default Three1;
