// import React, { useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// // Register necessary Chart.js components
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// const LeadMetricsChart = ({ metrics }) => {
//   useEffect(() => {
//     // You can handle any chart customization if needed here
//   }, [metrics]);

//   // Chart Data
//   const data = {
//     labels: ['Total Leads', 'Visits', 'Lost', 'Hot', 'Warm', 'Cold', 'Undefined'],
//     datasets: [{
//       data: [
//         metrics.totalLeads,
//         metrics.visits,
//         metrics.lost,
//         metrics.hot,
//         metrics.warm,
//         metrics.cold,
//         metrics.undefined
//       ],
//       backgroundColor: [
//         '#36a2eb',
//         '#ffce56',
//         '#4bc0c0',
//         '#ff6384',
//         '#36a2eb',
//         '#ffce56',
//         '#9966ff'
//       ]
//     }]
//   };

//   // Chart Options
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     layout: {
//       padding: 10
//     },
//     plugins: {
//       title: {
//         display: true,
//         text: 'Total Lead Metrics Overview',
//         padding: {
//           top: 10,
//           bottom: 10
//         }
//       },
//       legend: {
//         display: false
//       },
//       tooltip: {
//         callbacks: {
//           label: function(context) {
//             const value = context.raw;
//             const label = context.label;
//             const total = context.dataset.data.reduce((a, b) => a + b, 0);
//             const percentage = ((value / total) * 100).toFixed(2);
//             return `${label}: ${value} (${percentage}%)`;
//           }
//         }
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Total Count'
//         },
//         ticks: {
//           precision: 0
//         }
//       }
//     }
//   };

//   return (
//     <div style={{ width: '50%', height: '400px' }}>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default LeadMetricsChart;
