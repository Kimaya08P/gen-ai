import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "./App.css";

const App = () => {
  const departments = ["Finance", "HR", "IT", "Marketing", "Sales"];
  const dataByYear = [
    { year: "2014", headcounts: [96, 471, 59, 133, 32] },
    { year: "2015", headcounts: [129, 379, 204, 59, 81] },
    { year: "2016", headcounts: [59, 511, 200, 68, 49] },
  ];

  const totalFrames = 100;
  const [animationFrame, setAnimationFrame] = useState(0);
  const [animatedBarData, setAnimatedBarData] = useState([]);
  const [animatedPieData, setAnimatedPieData] = useState([]);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];

  // Generate initial data for the bar chart
  const generateInitialBarData = () =>
    departments.map((dept, index) => ({
      x: dataByYear.map((item) => item.year),
      y: Array(dataByYear.length).fill(0),
      type: "bar",
      name: dept,
      marker: {
        color: "rgba(0, 0, 0, 0)",
        line: {
          color: colors[index],
          width: 1,
        },
      },
      hovertemplate: `<b>%{x}</b><br>%{y} headcount in %{name} department`,
    }));

  // Generate initial data for the pie chart
  const generateInitialPieData = () => [{
    values: Array(departments.length).fill(0),
    labels: departments,
    type: "pie",
    textinfo: "label+percent",
    marker: {
      colors: colors.map(
        (color) =>
          `rgba(${parseInt(color.slice(1, 3), 16)}, 
                 ${parseInt(color.slice(3, 5), 16)}, 
                 ${parseInt(color.slice(5, 7), 16)}, 
                 0.3)`
      ),
      line: {
        color: colors,
        width: 2,
      },
    },
    hole: 0.4, // Doughnut chart appearance
    hoverinfo: "label+value",
  }];

  // Generate animated data for the bar chart
  const generateAnimatedBarData = () => {
    const newData = departments.map((dept, index) => ({
      x: dataByYear.map((item) => item.year),
      y: dataByYear.map(
        (item) =>
          (item.headcounts[index] * animationFrame) / totalFrames
      ),
      type: "bar",
      name: dept,
      marker: {
        color: `rgba(${parseInt(colors[index].slice(1, 3), 16)}, 
                     ${parseInt(colors[index].slice(3, 5), 16)}, 
                     ${parseInt(colors[index].slice(5, 7), 16)}, 
                     0.5)`,
        line: {
          color: colors[index],
          width: 2,
        },
      },
      hovertemplate: `<b>%{x}</b><br>%{y} headcount in %{name} department`,
    }));
    setAnimatedBarData(newData);
  };

  // Generate animated data for the pie chart
  const generateAnimatedPieData = () => {
    const selectedYear = dataByYear[selectedYearIndex];
    const newValues = selectedYear.headcounts.map(
      (count) => (count * animationFrame) / totalFrames
    );

    const newData = [{
      values: newValues,
      labels: departments,
      type: "pie",
      textinfo: "label+percent",
      marker: {
        colors: colors.map(
          (color) =>
            `rgba(${parseInt(color.slice(1, 3), 16)}, 
                   ${parseInt(color.slice(3, 5), 16)}, 
                   ${parseInt(color.slice(5, 7), 16)}, 
                   0.5)`
        ),
        line: {
          color: colors,
          width: 2,
        },
      },
      hole: 0.4, // Doughnut chart appearance
      hoverinfo: "label+value",
    }];
    setAnimatedPieData(newData);
  };

  // Handle animation for both bar and pie charts
  useEffect(() => {
    if (animationFrame <= totalFrames) {
      generateAnimatedBarData();
      generateAnimatedPieData();
      const timer = setTimeout(() => setAnimationFrame(animationFrame + 1), 30);
      return () => clearTimeout(timer);
    }
  }, [animationFrame]);

  // Initialize data on first render
  useEffect(() => {
    setAnimatedBarData(generateInitialBarData());
    setAnimatedPieData(generateInitialPieData());
  }, []);

  // Layout configurations
  const barLayout = {
    title: "Department Headcount Over Years",
    barmode: "group",
    xaxis: { title: "Year", color: "#FFFFFF" },
    yaxis: { title: "Total Headcount", range: [0, 600], color: "#FFFFFF" },
    showlegend: true,
    plot_bgcolor: "#1f1f1f",
    paper_bgcolor: "#1f1f1f",
    font: { color: "#FFFFFF" },
  };

  const pieLayout = {
    title: `Headcount Distribution for ${dataByYear[selectedYearIndex].year}`,
    plot_bgcolor: "#1f1f1f",
    paper_bgcolor: "#1f1f1f",
    font: { color: "#FFFFFF" },
    annotations: [
      {
        font: {
          size: 16,
          color: "#FFFFFF",
        },
        showarrow: false,
        text: `Year: ${dataByYear[selectedYearIndex].year}`,
        x: 0.5,
        y: 0.5,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#1f1f1f", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>Bar and Pie Chart Animation</h1>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <Plot data={animatedBarData} layout={barLayout} />
        <Plot data={animatedPieData} layout={pieLayout} />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setAnimationFrame(0);
            setSelectedYearIndex((prev) => (prev + 1) % dataByYear.length);
          }}
        >
          Next Year
        </button>
      </div>
    </div>
  );
};

export default App;
