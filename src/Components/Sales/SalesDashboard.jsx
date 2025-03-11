
import { useState } from "react";
import { Button, TextField, Box, Typography, Select, MenuItem } from "@mui/material";
import { FaChartLine, FaUsers, FaChartPie, FaMapMarkerAlt } from "react-icons/fa";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from "recharts";


import { FormControl } from "@mui/material";

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import {  InputLabel} from "@mui/material";






const SalesDashboard = () => {
  const buttons = [
    { label: "Lead Conversion", icon: <FaChartLine size={20} />, bgColor: "#ff5733" },
    { label: "Team Performance", icon: <FaUsers size={20} />, bgColor: "#3498db" },
    { label: "Source Base Report", icon: <FaChartPie size={20} />, bgColor: "#f1c40f" },
    { label: "Visit Tracker", icon: <FaMapMarkerAlt size={20} />, bgColor: "#2ecc71" },
  ];

  const [selectedTab, setSelectedTab] = useState("Lead Conversion"); 
  const [selectedSource, setSelectedSource] = useState(""); 

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(""); // Added missing state
  const employeeOptions = ["Shubham Taware ", "Ashwini Khot", "Amol Pawar","Sachin Awale"]; 
  const handleFilter = () => {
    console.log("Filtering from:", startDate, "to", endDate);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
  };

const chartData = [
  { date: "01/01/2025", leads: 10, plannedVisits: 5, actualVisits: 2, conversions: 1 },
  { date: "08/01/2025", leads: 30, plannedVisits: 20, actualVisits: 10, conversions: 5 },
  { date: "15/01/2025", leads: 50, plannedVisits: 35, actualVisits: 25, conversions: 10 },
  { date: "22/01/2025", leads: 80, plannedVisits: 50, actualVisits: 40, conversions: 20 },
  { date: "29/01/2025", leads: 100, plannedVisits: 65, actualVisits: 55, conversions: 30 },
  { date: "05/02/2025", leads: 130, plannedVisits: 85, actualVisits: 70, conversions: 40 },
  { date: "12/02/2025", leads: 150, plannedVisits: 95, actualVisits: 80, conversions: 50 },
  { date: "19/02/2025", leads: 170, plannedVisits: 110, actualVisits: 95, conversions: 60 },
  { date: "26/02/2025", leads: 190, plannedVisits: 130, actualVisits: 110, conversions: 70 },
  { date: "05/03/2025", leads: 210, plannedVisits: 145, actualVisits: 125, conversions: 80 },
  { date: "12/03/2025", leads: 230, plannedVisits: 160, actualVisits: 140, conversions: 90 },
  { date: "19/03/2025", leads: 250, plannedVisits: 175, actualVisits: 155, conversions: 100 },
  { date: "26/03/2025", leads: 270, plannedVisits: 190, actualVisits: 170, conversions: 110 },
  { date: "02/04/2025", leads: 290, plannedVisits: 205, actualVisits: 185, conversions: 120 },
  { date: "09/04/2025", leads: 310, plannedVisits: 220, actualVisits: 200, conversions: 130 },
];

const teamData = [
  {
    // salesPerson: "John Doe",
    // totalLeadAssigned: 15,
    // visitAssigned: 10,
    // lost: 3,
    // hot: 5,
    // warm: 4,
    // cold: 2,
    // undefined: 1
  }
];


const pieData = [
  { name: "Hot", value: 25 },
  { name: "Warm", value: 35 },
  { name: "Cold", value: 20 },
  { name: "Lost", value: 15 },
  { name: "Undefined", value: 5 }
];

const COLORS = ["#e74c3c", "#f1c40f", "#3498db", "#2ecc71", "#95a5a6"];


const sources = [
  "Actual Site", "Hoarding", "Facebook", "Insta", "Website", "Print Media", "Radio", "Google Ad", "Exhibition",
  "Online Portal", "Direct Call", "Pamphlet", "Channel Partner"
];

const COLOR = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6666", "#66CC66", "#CC99FF", "#FFCC99", "#99CCCC", "#FF99CC", "#CCCC66", "#9999FF"];

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


const barData = [
  { name: "Total Leads", count: 33, color: COLORS[0] },
  { name: "Visits", count: 18, color: COLORS[1] },
  { name: "Lost", count: 6, color: COLORS[2] },
  { name: "Hot", count: 5, color: COLORS[3] },
  { name: "Warm", count: 9, color: COLORS[4] },
  { name: "Cold", count: 8, color: COLORS[5] },
  { name: "Undefined", count: 6, color: COLORS[6] },
];


  return (
    <div>
     
      <div className="d-flex flex-wrap align-items-center mb-3">
        {buttons.map((btn, index) => (
          <div key={index} style={{ margin: "10px" }}>
           
        


<Button
  onClick={() => setSelectedTab(btn.label)}
  variant="outlined"
  color={selectedTab === btn.label ? "primary" : "success"}
  className="m-2"
  style={{
    borderRadius: "20px",
    minWidth: "150px",
    padding: "6px",
    display: "flex",  
    alignItems: "center",  
    gap: "8px",  
    backgroundColor: "transparent",
    border: "none",
  }}
>
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: btn.bgColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {btn.icon}
  </div>
  {btn.label}  
</Button>

          </div>
        ))}
      </div>


      <Box mt={3} p={3} style={{ border: "1px solid #ddd", borderRadius: "10px", maxHeight: "80vh", overflowY: "auto", padding: "10px" }}>
    

        {selectedTab === "Lead Conversion" && (
          <Box>
         
            <Box mb={3}>
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                style={{ marginRight: "10px" }}
              />
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                style={{ marginRight: "10px" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleFilter}
                style={{ marginRight: "10px" }}
              >
                Filter
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleReset}>
                Reset
              </Button>
            </Box>

  
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Lead Conversion Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="leads" stroke="#ff5733" strokeWidth={3} name="Leads" />
                  <Line type="monotone" dataKey="plannedVisits" stroke="#3498db" strokeWidth={3} name="Planned Visits" />
                  <Line type="monotone" dataKey="actualVisits" stroke="#2ecc71" strokeWidth={3} name="Actual Visits" />
                  <Line type="monotone" dataKey="conversions" stroke="#f1c40f" strokeWidth={3} name="Conversions" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        )}



{selectedTab === "Team Performance" && (
  <Box>
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>Select Employee</Typography>
      <Select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        style={{ width: "200px", marginBottom: "20px" }}
      >
        {employeeOptions.map((emp) => (
          <MenuItem key={emp} value={emp}>{emp}</MenuItem>
        ))}
      </Select>
    </Box>

    {/* Charts Section */}
    <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
      {/* Pie Chart - Lead Status Distribution with Shadow */}
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Average Lead Status Distribution
            </text>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Bar Chart - Total Lead Metrics Overview with Shadow */}
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            {/* Title for Bar Chart */}
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Total Lead Metrics Overview
            </text>

            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 35]}
              tickInterval={5}
              label={{ value: "Total Count", angle: -90, position: "insideLeft" }}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
            />
            <Tooltip />
            <Bar dataKey="count">
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>

    {/* Table Section */}
  <Box mt={3} p={2} boxShadow={3} borderRadius={2} bgcolor="white">
      <Typography variant="h6" gutterBottom>
        Sales Person Performance
      </Typography>
      <TableContainer
        component={Paper}
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          display: 'block',
          height: 'auto',
          width: '100%',
        }}
      >
        <Table>
          <TableHead>
         <TableRow sx={{background:"#3621a9"}}>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Sales Person</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Total Lead Assigned</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Visit Assigned</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Lost</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Hot</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Warm</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Cold</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Undefined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamData.length > 0 ? (
              teamData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.salesPerson}</TableCell>
                  <TableCell>{row.totalLeadAssigned}</TableCell>
                  <TableCell>{row.visitAssigned}</TableCell>
                  <TableCell>{row.lost}</TableCell>
                  <TableCell>{row.hot}</TableCell>
                  <TableCell>{row.warm}</TableCell>
                  <TableCell>{row.cold}</TableCell>
                  <TableCell>{row.undefined}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">No data available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>



  </Box>
)}


        




{selectedTab === "Source Base Report" && (
  <Box>
    <Typography variant="h6" gutterBottom>
      Source Base Report
    </Typography>

    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Select Source</InputLabel>
      <Select
        value={selectedSource}
        onChange={(e) => setSelectedSource(e.target.value)}
      >
        <MenuItem value="actual site">Actual Site</MenuItem>
        <MenuItem value="hoarding">Hoarding</MenuItem>
        <MenuItem value="facebook">Facebook</MenuItem>
        <MenuItem value="insta">Instagram</MenuItem>
        <MenuItem value="website">Website</MenuItem>
        <MenuItem value="print media">Print Media</MenuItem>
        <MenuItem value="radio">Radio</MenuItem>
        <MenuItem value="google add">Google Ad</MenuItem>
        <MenuItem value="exhibition">Exhibition</MenuItem>
        <MenuItem value="online portal">Online Portal</MenuItem>
        <MenuItem value="direct call">Direct Call</MenuItem>
        <MenuItem value="pamphlet">Pamphlet</MenuItem>
        <MenuItem value="channel partner">Channel Partner</MenuItem>
      </Select>
    </FormControl>

    <Box sx={{ maxHeight: '600px', overflowY: 'auto', mb: 2 }}>
      {/* Denotation (colored boxes above the Pie Chart) */}
      <Box display="flex" justifyContent="space-between" mb={2}>
     
      </Box>

      {/* Pie and Bar Charts */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
       

<Box width="50%">
        <Typography variant="h6" align="center" gutterBottom>
          Lead Distribution Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8"    label={false}  >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <Box sx={{ mt: 3 }} />
      </Box>

      
{/*         
<Box width="50%">
  <Typography variant="h6" align="center" gutterBottom>
    Lead Metrics Breakdown
  </Typography>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis
        dataKey="name"
        tick={{ fontSize: 10 }}
        angle={-45}
        textAnchor="end"
        domain={[0, 'dataMax']} // Ensures X-axis starts from 0
      />
      <YAxis
        tick={{ fontSize: 10 }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</Box> */}



{/* <Box width="50%">
  <Typography variant="h6" align="center" gutterBottom>
    Lead Metrics Breakdown
  </Typography>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      layout="horizontal"
    >
      <XAxis type="number" tick={{ fontSize: 10 }} domain={[0, 'dataMax']} />
      <YAxis dataKey="name" tick={{ fontSize: 10 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</Box> */}

{/* ---------- */}
{/* 
<Box width="50%">
  <Typography variant="h6" align="center" gutterBottom>
    Lead Metrics Breakdown
  </Typography>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      layout="horizontal"
    >
      <XAxis type="number" tick={{ fontSize: 10 }} domain={[0, 'dataMax']} />
      <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} />
      <Tooltip />
      <Legend />
      
     
      <Bar dataKey="assigned" stackId="a" fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
        ))}
      </Bar>
      <Bar dataKey="postponed" stackId="a" fill="#82ca9d">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
        ))}
      </Bar>
      <Bar dataKey="remaining" stackId="a" fill="#ff7f50">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</Box> */}

{/* -------------- */}
{/* <Box width="50%">
  <Typography variant="h6" align="center" gutterBottom>
    Lead Metrics Breakdown
  </Typography>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      layout="horizontal"
    >
      <XAxis
        type="number"
        tick={{ fontSize: 10 }}
        domain={[0, 'dataMax']}  // Ensure the X-axis goes from 0 to the max value of the data
        ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40]} // Adjust ticks as needed for the value range
        interval={0}  // Ensures all ticks are visible
      />
      <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} />
      <Tooltip />
      <Legend />

   
      {data.map((entry, index) => (
        <Bar
          key={`bar-${index}`}
          dataKey="value"  // This refers to the total value for each bar
          fill={COLOR[index % COLOR.length]}  // Color from the COLOR array for each bar
        >
          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
        </Bar>
      ))}
    </BarChart>
  </ResponsiveContainer>
</Box> */}


<Box width="50%">
  <Typography variant="h6" align="center" gutterBottom>
    Lead Metrics Breakdown
  </Typography>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      layout="horizontal"
    >
      <XAxis
        type="number"
        tick={{ fontSize: 10 }}
        domain={[0, 'dataMax']}  // Ensure the X-axis goes from 0 to the max value of the data
        ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40]} // Adjust ticks as needed for the value range
        interval={0}  // Ensures all ticks are visible
      />
      <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} />
      <Tooltip />
      <Legend />

      {/* Single horizontal bars for each category */}
      {data.map((entry, index) => (
        <Bar
          key={`bar-${index}`}
          dataKey="value"  // Reference the value field from the data
          fill={COLOR[index % COLOR.length]}  // Use a color from the COLOR array for each bar
        >
          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
        </Bar>
      ))}
    </BarChart>
  </ResponsiveContainer>
</Box>


      </Box>
    </Box> 



  </Box>
)}


        {selectedTab === "Visit Tracker" && <Typography>Visit Tracker content here</Typography>}
      </Box>
    </div>
  );
};

export default SalesDashboard;

