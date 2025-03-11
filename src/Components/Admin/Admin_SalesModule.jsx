


import React, { useState ,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const Admin_SalesModule = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    joiningDate: "",
    status: "Active",
  });
  const [salesPersons, setSalesPersons] = useState([]); 

  const handleAddNew = () => {
    setShowForm(true);
  };

  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  
   
  //   if (name === "name") {
  //     const regex = /^[A-Za-z\s]*$/;  
  
  //     if (regex.test(value) || value === "") {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         [name]: value,
  //       }));
  //     } else {
  //       toast.error("Invalid input: Only letters and spaces are allowed in Name.");
  //       console.log("Invalid input: Only letters and spaces are allowed in Name.");
  //     }
  //   }
    
   
  //   else {
     
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };
  


  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Name validation: Only letters and spaces
    if (name === "name") {
      const regex = /^[A-Za-z\s]*$/;  
      if (regex.test(value) || value === "") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      } else {
        toast.error("Invalid input: Only letters and spaces are allowed in Name.");
        console.log("Invalid input: Only letters and spaces are allowed in Name.");
      }
    }
    
    // Mobile number validation: Only digits and restrict to a maximum of 10 digits
    else if (name === "mobile") {
      const regex = /^[0-9]*$/;  // Regex to allow only digits
      
      if (regex.test(value)) {
        // Show toast if input exceeds 10 digits
        if (value.length > 10) {
          toast.error("Invalid input: Please enter a valid 10-digit mobile number.");
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      } else {
        console.log("Invalid input: Only digits are allowed in Mobile.");
      }
    }
  
    // For other fields, just update the form data without validation
    else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  
  useEffect(() => {
    if (showForm) {
      // Reset formData when the form is opened again
      setFormData({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        joiningDate: "",
        status: "Active",
      });
    }
  }, [showForm]); // This will trigger when showForm changes (i.e., when the form opens)

  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setSalesPersons([...salesPersons, formData]);
    setShowForm(false); 
    setFormData({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      joiningDate: "",
      status: "Active",
    });
    console.log("toast");
    toast.success("data submitted successfully");
  };

  const handleCancel = () => {
    setShowForm(false); 
  };

  const handleEmailBlur = () => {
    const email = formData.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email validation regex
  
    // If the email is invalid, show the error toast
    if (email && !emailRegex.test(email)) {
      toast.error("Invalid email: Please enter a valid email address.");
      console.log("Invalid email: Please enter a valid email address.");
    }
  };

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="mb-2 fs-6">Admin Module / Sales Person Management</h2>
          {!showForm && (
            <button className="btn btn-primary d-flex align-items-center" onClick={handleAddNew} style={{ background: '#272ba8' }} >
              <FaPlus className="me-2"  />
              Add New Sales Person
            </button>
          )}
        </div>
        {!showForm && (
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <input type="text" className="form-control w-50" placeholder="Search..." />
          </div>
        )}
      </div>

      {/* Modal for adding new Sales Person */}
      {/* {showForm && (
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
          
              <div
                className="modal-header bg-primary text-white"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <h5 className="modal-title">Add New Sales Person</h5>
                <button type="button" className="btn-close" onClick={handleCancel}></button>
              </div>

          
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
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Name<span style={{ color: 'black' }}>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email<span style={{ color: 'black' }}>*</span></label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleEmailBlur}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Mobile<span style={{ color: 'black' }}>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Designation</label>
                          <input
                            type="text"
                            className="form-control"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Joining Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Status</label>
                          <select
                            className="form-control"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex gap-2 justify-content-center">
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
            </div>
          </div>
        </div>
      )} */}


{showForm && (
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
    {/* Modal Content */}
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
          <h5 className="modal-title">Add New Sales Person</h5>
          <button type="button" className="btn-close" onClick={handleCancel} ></button>
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
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Name"
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ marginTop: '10px' }} 
                      // helperText="* Required"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Email"
                      fullWidth
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleEmailBlur}
                      required
                      sx={{ marginTop: '10px' }} 
                      // helperText="* Required"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Mobile"
                      fullWidth
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      // helperText="* Required"
                      sx={{ marginTop: '10px' }} 
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Designation"
                      fullWidth
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      sx={{ marginTop: '10px' }} 
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Joining Date"
                      fullWidth
                      type="date"
                      name="joiningDate"
                      value={formData.joiningDate}
                      onChange={handleChange}
                      sx={{ marginTop: '10px' }} 
                      InputLabelProps={{
                        shrink: true,
                        
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        sx={{ marginTop: '10px' }} 
                      >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Submit and Cancel Buttons */}
                <div className="d-flex gap-2 justify-content-center mt-4">
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Sales Person Table */}
      {!showForm && (
        <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead >
              {/* <TableRow> */}
               <TableRow sx={{background:"#3621a9"}}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Mobile</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Designation</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Joining Date</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesPersons.map((person, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>{person.mobile}</TableCell>
                  <TableCell>{person.designation}</TableCell>
                  <TableCell>{person.joiningDate}</TableCell>
                  <TableCell>{person.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

<ToastContainer />
</div>

    // </div>
  );
};
 

export default Admin_SalesModule;
