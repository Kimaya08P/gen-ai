import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import './App.css'

const App = () => {
  const departments = ["Finance", "HR", "IT", "Marketing", "Sales"];
  const dataByYear = [
    { year: "2014", headcounts: [96, 471, 59, 133, 32] },
    { year: "2015", headcounts: [129, 379, 204, 59, 81] },
    { year: "2016", headcounts: [59, 511, 200, 68, 49] },
  ];

  const totalFrames = 100;
  const [animationFrame, setAnimationFrame] = useState(0);
  const [animatedData, setAnimatedData] = useState([]);

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];

  // Function to generate initial data with 0 height for bars
  const generateInitialData = () =>
    departments.map((dept, index) => ({
      x: dataByYear.map((item) => item.year),
      y: Array(dataByYear.length).fill(0), // Bars start at 0 height
      type: "bar",
      name: dept,
      marker: {
        color: "rgba(0, 0, 0, 0)", // Transparent to simulate glass effect
        line: {
          color: colors[index],
          width: 1,
        },
      },
      hovertemplate: `<b>%{x}</b><br>%{y} headcount in %{name} department`, // Custom hover info
    }));

  // Function to generate building-up data for each frame
  const generateBuildingUpData = () => {
    const newData = departments.map((dept, index) => ({
      x: dataByYear.map((item) => item.year),
      y: dataByYear.map(
        (item) =>
          (item.headcounts[index] * animationFrame) / totalFrames // Increment height gradually
      ),
      type: "bar",
      name: dept,
      marker: {
        color: `rgba(${parseInt(colors[index].slice(1, 3), 16)}, 
                     ${parseInt(colors[index].slice(3, 5), 16)}, 
                     ${parseInt(colors[index].slice(5, 7), 16)}, 
                     0.5)`, // Semi-transparent color for glassy effect
        line: {
          color: colors[index],
          width: 2, // Thin border for the glass effect
        },
      },
      hovertemplate: `<b>%{x}</b><br>%{y} headcount in %{name} department`, // Custom hover info
    }));
    setAnimatedData(newData);
  };

  // Animation effect for the building-up process
  useEffect(() => {
    if (animationFrame <= totalFrames) {
      generateBuildingUpData(); // Update bars for the current frame
      const timer = setTimeout(() => setAnimationFrame(animationFrame + 1), 30); // Control animation speed
      return () => clearTimeout(timer);
    }
  }, [animationFrame]);

  // Initialize data on first render
  useEffect(() => {
    setAnimatedData(generateInitialData());
  }, []);

  // Layout configuration for Plotly
  const layout = {
    title: "Department Headcount Over Years ",
    barmode: "group",
    xaxis: { title: "Year", color: "#FFFFFF" }, // White text for axis labels
    yaxis: { title: "Total Headcount", range: [0, 600], color: "#FFFFFF" }, // White labels for y-axis
    showlegend: true,
    plot_bgcolor: "#1f1f1f", // Dark background to enhance the glass effect
    paper_bgcolor: "#1f1f1f", // Dark background for the entire layout
    font: { color: "#FFFFFF" }, // White text for title and labels
    transition: {
      duration: 0, // Disable built-in transitions for manual animation
    },
  };

  return (
    <div style={{ backgroundColor: "#1f1f1f", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>Bar Graph Animation</h1>
      <Plot data={animatedData} layout={layout} />
    </div>
  );
};

export default App;
