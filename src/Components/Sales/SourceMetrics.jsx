import React from 'react';
import ApexCharts from 'react-apexcharts';

const COLOR = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6666", "#66CC66", "#CC99FF",
  "#FFCC99", "#99CCCC", "#FF99CC", "#CCCC66", "#9999FF"
];

const data = [
  { name: "Total Lead Assigned", value: 400 },
  { name: "Visit Assigned", value: 300 },
  { name: "Visit Postponed", value: 200 },
  { name: "Visit Cancelled", value: 150 },
  { name: "Re-scheduled", value: 180 },
  { name: "Visit Done", value: 320 },
  { name: "Lead to Actual Visit", value: 280 },
  { name: "Total Visits", value: 500 },
  { name: "Lost", value: 120 },
  { name: "Hot", value: 100 },
  { name: "Warm", value: 140 },
  { name: "Cold", value: 160 },
  { name: "Undefined", value: 80 },
];

const chartData = {
  series: [{
    name: 'Metrics Overview',
    data: data.map(item => item.value),  // Extracting the values from the data array
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true,  // Optional: Makes the bar chart horizontal
        distributed: true, // Distributes colors across bars
      }
    },
    xaxis: {
      categories: data.map(item => item.name), // Labels for each bar
    },
    colors: COLOR, // Apply the colors from the COLOR array
    title: {
      text: 'Lead Metrics Overview',
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      }
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} Leads/Visits`, // Formatting tooltip display
      },
    },
  },
};

const BarChart = () => {
  return (
    <div>
      <ApexCharts 
        options={chartData.options} 
        series={chartData.series} 
        type="bar" 
        height={350} 
      />
    </div>
  );
};

export default BarChart;
