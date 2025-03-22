import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const RateApprovalForm = ({ openModal, handleCloseModal, handleSave }) => {
  const [formData, setFormData] = useState({});

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box
        sx={{
          width: 900,
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
        <div
          style={{
            backgroundColor: "#1976d2",
            padding: "8px 16px",
            marginBottom: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0, color: "#fff" }}>Rate Approval Form</h5>
          <Button onClick={handleCloseModal} style={{ fontSize: "16px", color: "#fff", fontWeight: "bold" }}>
            ✖
          </Button>
        </div>

        {/* Form Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Project Name</InputLabel>
                <Select value={formData.projectName || ""} onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}>
                  <MenuItem value="Project">Project</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Wing</InputLabel>
                <Select value={formData.wing || ""} onChange={(e) => setFormData({ ...formData, wing: e.target.value })}></Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Flat No</InputLabel>
                <Select value={formData.flatNo || ""} onChange={(e) => setFormData({ ...formData, flatNo: e.target.value })}></Select>
              </FormControl>
            </Grid>
          </Grid>
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

export default RateApprovalForm;
