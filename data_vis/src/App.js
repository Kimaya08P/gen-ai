import React from "react";
import { Bar, Pie, Line, Radar, Scatter } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import "chartjs-plugin-annotation";
import "chartjs-plugin-datalabels";
import "./chartAnimationgit.css";

ChartJS.register(...registerables);

const ChartWithAnimation = () => {
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff", // Adjust legend text color for dark theme
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#444", // Tooltip background for dark theme
        titleColor: "#fff", // Tooltip title color
        bodyColor: "#fff", // Tooltip body color
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ccc", // X-axis tick color for dark theme
        },
        grid: {
          color: "#555", // X-axis grid color for dark theme
        },
      },
      y: {
        ticks: {
          color: "#ccc", // Y-axis tick color for dark theme
        },
        grid: {
          color: "#555", // Y-axis grid color for dark theme
        },
      },
    },
  };

  const barData = {
    labels: ["Dimension A", "Dimension B", "Dimension C", "Dimension D", "Dimension E"],
    datasets: [
      {
        label: "Bar Dataset",
        data: [30, 50, 70, 20, 90],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [20, 30, 50, 10, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverOffset: 10,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Line Dataset",
        data: [10, 40, 30, 70, 50],
        fill: true,
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const radarData = {
    labels: ["Speed", "Strength", "Stamina", "Agility", "Endurance"],
    datasets: [
      {
        label: "Radar Dataset",
        data: [50, 60, 70, 80, 90],
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "#4BC0C0",
        pointBackgroundColor: "#FF6384",
        pointBorderColor: "#FFF",
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 10 },
          { x: 20, y: 30 },
          { x: 25, y: 40 },
          { x: 30, y: 50 },
        ],
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#222", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h2 className="bar-chart-title">Bar Chart</h2>
      <div className="bar-chart">
        <Bar data={barData} options={commonOptions} />
      </div>

      <h2 className="pie-chart-title">Pie Chart</h2>
      <div className="pie-chart">
        <Pie data={pieData} options={commonOptions} />
      </div>
    

      <h2 className="line-chart-title">Line Chart</h2>
      <div className="line-chart">
        <Line data={lineData} options={commonOptions} />
      </div>

      <h2 className="radar-chart-title">Radar Chart</h2>
      <div className="radar-chart">
        <Radar data={radarData} options={commonOptions} />
      </div>

      <h2 className="scatter-chart-title">Scatter Plot</h2>
      <div className="scatter-chart">
        <Scatter data={scatterData} options={commonOptions} />
      </div>
    </div>
  );
};

export default ChartWithAnimation;