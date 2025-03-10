




import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Button, Modal } from "react-bootstrap";
import {  toast } from "react-toastify";

const Banker = () => {
  const [showForm, setShowForm] = useState(false);
  // const [bankers, setBankers] = useState([]);
  const [bankers, setBankers] = useState([{ bankerName: '', bankerMobile: '' }]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    joiningDate: "",
    status: "Active",
  });

  const handleAddNew = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddBanker = () => {
    setBankers([...bankers, { bankerName: "", bankerMobile: "" }]);
  };

  const handleBankerChange = (index, field, value) => {
    const updatedBankers = [...bankers];
    updatedBankers[index][field] = value;
    setBankers(updatedBankers);
  };

  const handleRemoveBanker = (index) => {
    const updatedBankers = bankers.filter((_, i) => i !== index);
    setBankers(updatedBankers);
  };


  const openModal = () => {
    // Your modal opening logic here
  };
  const closeModal = () => {
    // Your modal closing logic
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    toast.success("Data submitted successfully!");
  };
  
  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="mb-2 fs-6">Admin Module / Banker Details Management</h2>
          {!showForm && (
            <button className="btn btn-primary d-flex align-items-center" onClick={handleAddNew}>
              <FaPlus className="me-2" />
              Add Banker Details
            </button>
          )}
        </div>
        {!showForm && (
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <input type="text" className="form-control w-50" placeholder="Search..." />
          </div>
        )}
      </div>


{showForm ? (
  <>
    <Button variant="primary" onClick={openModal}>Add Banker Details</Button>

    <div 
      className="modal"
      style={{
        display: showForm ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <div
        className="modal-dialog modal-lg"
        style={{
          position: "relative",
          margin: "auto",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div
          className="modal-content p-3"
          style={{
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "10px",
          }}
        >
          {/* Modal Header */}
          <div
            className="modal-header bg-primary text-white"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <h5 className="modal-title">Add Banker Details</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <div className="container">
              <div
                className="p-3"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <form className="pt-4">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label">Bank Name</label>
                      <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">APF Letter</label>
                      <input type="file" className="form-control" name="mobile" onChange={handleChange} required />
                    </div>
                  </div>

                  {bankers.map((banker, index) => (
                    <div className="row mb-3" key={index}>
                      <div className="col-md-4">
                        <label className="form-label">Banker Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={banker.bankerName}
                          onChange={(e) => handleBankerChange(index, "bankerName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Mobile No:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={banker.bankerMobile}
                          onChange={(e) => handleBankerChange(index, "bankerMobile", e.target.value)}
                          required
                        />
                      </div>
                      {index > 0 && (
                        <div className="col-md-4 pt-4">
                          <button type="button" className="btn btn-danger mt-2" onClick={() => handleRemoveBanker(index)}>
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="mb-3 text-center pt-3 pb-3">
                    <button type="button" className="btn btn-primary" onClick={handleAddBanker}>
                      + Add Another Banker
                    </button>
                  </div>

                  <div className="d-flex justify-content-center gap-3">
                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

         
          <div
            className="modal-footer"
            style={{
              borderTop: "1px solid #ddd",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  </>
) : null}


   
      {!showForm && (
        <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead sx={{ bgcolor: "primary.main" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Action</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Timestamp</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Bank Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Address</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Banker Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>	Mobile No</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>	APF Letter</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Banker;
