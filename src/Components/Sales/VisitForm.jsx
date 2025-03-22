import React, { useState } from 'react';
import { Modal, Box, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const VisitForm = ({ openModal, handleCloseModal, handleSave }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    wing: '',
    flatNo: '',
    type: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box
        sx={{
          width: 870,
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 4,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
        }}
      >
        {/* Modal Header */}
        <div style={{ backgroundColor: "#1976d2", padding: "8px 16px", marginBottom: "10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h5 style={{ margin: 0, color: "#fff" }}>Booking Form</h5>
          <Button onClick={handleCloseModal} style={{ fontSize: "16px", color: "#fff", fontWeight: "bold", minWidth: "auto" }}>
            ✖
          </Button>
        </div>

        {/* Form Fields with two per row */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* First Row */}
          <div style={{ display: "flex", gap: "20px" }}>
            <FormControl fullWidth>
              <InputLabel>Project Name</InputLabel>
              <Select
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Select Project Name</MenuItem>
                <MenuItem value="Sohan Enterprised">Sohan Enterprised</MenuItem>
                <MenuItem value="Jatiin">Jatin</MenuItem>
                <MenuItem value="Jatin Ahirvar">Jatin Ahirvar</MenuItem>
                <MenuItem value="Project Name 111">Project Name 111</MenuItem>
                <MenuItem value="Shubh Elara">Shubh Elara</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Wing</InputLabel>
              <Select
                name="wing"
                value={formData.wing}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Select Wing</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Second Row */}
          <div style={{ display: "flex", gap: "20px" }}>
            <FormControl fullWidth>
              <InputLabel>Flat No</InputLabel>
              <Select
                name="flatNo"
                value={formData.flatNo}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Select Flat No</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Select Type</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Third Row */}
          <div style={{ display: "flex", gap: "20px" }}>
            <TextField
              label="Date"
              fullWidth
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginLeft: 10 }}>
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default VisitForm;
