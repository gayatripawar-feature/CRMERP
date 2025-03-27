
import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,MenuItem,
} from "@mui/material";
import {  FaHandshake } from 'react-icons/fa';

import { ToastContainer, toast } from "react-toastify";
import ChannelPartnerTable from "./ChannelPartnerTable";

const ChannelPartner = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Default expanded state
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    enquiryNo: "",
    projectName: "",
  });

  useEffect(() => {
    console.log("Updated Selected Tab:");
  }, []);

  // Toggle the display of the icon (expanded/collapsed)
  const handleToggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = () => {
    toast.success("Details are submitted!", { position: "top-right", autoClose: 3000 });
    setShowBookingForm(false); // Hide the form after submission
  };

  return (
    <Box className="main-content" sx={{ padding: 3 }}>
      <Typography variant="h6">Sales Module / Channel Partner</Typography>

      {/* Toggle Icon and Name Display */}
      {/* <Button
        variant="contained"
        color="primary"
        className="mt-3 mb-3"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          borderRadius: "20px",
          width: isExpanded ? "200px" : "50px",
          minWidth: "50px",
          padding: "10px 15px",
          textTransform: "none",
          transition: "width 0.3s ease",
          marginBottom: 2,
        }}
        onClick={handleToggleSidebar}
        startIcon={<FaBuilding />}
      >
        {isExpanded && "Channel Partner"}
      </Button> */}
      <Button
  variant="contained"
  color="primary"
  className="mt-3 mb-3"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    gap: 1,
    borderRadius: '20px',  // Border radius applied here
    width: isExpanded ? '200px' : '50px',  // Toggle width based on expanded state
    minWidth: '50px',
    padding: '10px 15px',
    textTransform: 'none',
    transition: 'width 0.3s ease, background 0.3s ease',
    background: 'linear-gradient(0deg, #4b2ac2 0%, #5c39d3 100%)', // Gradient background
    boxShadow:
      'inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)',
    cursor: 'pointer',  // Add pointer cursor for better UX
    marginBottom: 2,
  }}
  onClick={handleToggleSidebar}
  startIcon={<FaHandshake size={24} color="white" />} // Increased icon size and changed color to white
>
  {isExpanded && <span style={{ color: 'white', fontSize: '16px' }}>Channel Partner</span>} {/* Increased font size and set text color to white */}
</Button>


      {/* This section is always visible */}
      <Box className="content-container mt-4">
        {/* <Box className="button-container" sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ background: "#272ba8" }}
            onClick={() => setShowBookingForm(true)}
          >
            + CP Details Form
          </Button>
        </Box> */}

<Box className="content-container mt-4">
  {/* Conditionally Render the Button for Form and the Table */}
  {!showBookingForm && (
    <Box className="button-container" sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ background: "#272ba8" }}
        onClick={() => setShowBookingForm(true)}
      >
        + CP Details Form
      </Button>
    </Box>
  )}
  </Box>

       
        {/* {!showBookingForm && <BookingFormTable data={[]} />} */}
       
        {!showBookingForm && <ChannelPartnerTable data={[]} />}
        {showBookingForm && (
          <Box className="firm-form mt-4 p-3" sx={{ maxHeight: "500px", overflowY: "auto", paddingRight: "10px" }}>
            <Paper elevation={4} sx={{ borderRadius: "12px", padding: 3 }}>
            
            

            
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="CP Firm Name"
                    name="enquiryNo"
                    fullWidth
                    variant="outlined"
                    value={formData.enquiryNo}
                    onChange={handleInputChange}
                   
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="CP Executive Name (as per Rera)"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    
                  />
                </Grid>
                
                <Grid item xs={6}>
                  <TextField
                    label="Designation"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                   
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Mobile No"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                   
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Website Address"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email ID"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                   
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Postal Address"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                   
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Pin-code"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                 
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Location"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="City"
                    name="projectName"
                    fullWidth
                    variant="outlined"
                    value={formData.projectName}
                    onChange={handleInputChange}
                   
                  />
                </Grid>
                <Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <InputLabel>Zone</InputLabel>
    <Select
      label="Zone"
      name="projectName"
      value={formData.projectName}
      onChange={handleInputChange}
    >
      <MenuItem value="East">East</MenuItem>
      <MenuItem value="West">West</MenuItem>
      <MenuItem value="North">North</MenuItem>
      <MenuItem value="South">South</MenuItem>
    </Select>
  </FormControl>
</Grid>

              </Grid>

              {/* Submit Button */}
              <Button variant="contained" color="success" className="m-3" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Paper>
          </Box>
        )}
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default ChannelPartner;
