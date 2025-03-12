


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
  const [emailError, setEmailError] = useState(''); 
  const [nameError, setNameError] = useState(''); 
  const [error, setError] = useState({
    mobile: '',
    
  });
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
  


//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
  
//     const regex = /^[A-Za-z\s]*$/;  

    
//     if (name === "name") {
//       if (regex.test(value) || value === "") {
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//         setNameError(''); 
//       } else {
//         setNameError("Invalid input: Only letters and spaces are allowed in Name.");
//       }
//     }
    
//   else if (name === "mobile") {
//     const regex = /^[0-9]*$/;  
//     let errorMessage = '';  
  
   
//     if (!regex.test(value)) {
//       errorMessage = "Invalid input: Only digits are allowed in Mobile.";
//     } else if (value.length > 10) {
//       errorMessage = "Invalid input: Please enter a valid 10-digit mobile number.";
//     }
  
 
//     setError((prevErrors) => ({
//       ...prevErrors,
//       [name]: errorMessage,
//     }));
  
   
   
//     if (!errorMessage) {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }


//     else if (name === "email") {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,  // Update the formData state
//       }));
//       console.log("invalid email");
//       setEmailError(''); // Clear email error when typing
//     }
//   }
// }


const handleChange = (e) => {
  const { name, value } = e.target;

  console.log(`Handling change for ${name}: ${value}`); // Log the change to debug

  // Handle Name input: Only allow letters and spaces
  if (name === "name") {
    const regex = /^[A-Za-z\s]*$/;  // Allow letters and spaces
    if (regex.test(value) || value === "") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setNameError('');  // Clear any previous error
    } else {
      setNameError("Invalid input: Only letters and spaces are allowed in Name.");
    }
  }

  // Handle Mobile input: Only allow digits and up to 10 digits
  else if (name === "mobile") {
    const regex = /^[0-9]*$/;  // Allow only digits
    let errorMessage = '';

    // Allow any input, but if it's invalid, show error messages
    if (!regex.test(value) && value.length > 0) {
      errorMessage = "Invalid input: Only digits are allowed in Mobile.";
    } else if (value.length > 10) {
      errorMessage = "Invalid input: Please enter a valid 10-digit mobile number.";
    } else if (value.length < 10 && value.length > 0) {
      errorMessage = "Mobile number must be 10 digits.";
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    // Update state with value regardless of the validation (allow user to keep typing)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle Email input: Validate email format
  else if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email validation
    if (emailRegex.test(value) || value === "") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setEmailError('');  // Clear any previous error
    } else {
      setEmailError("Invalid email format: Please enter a valid email address.");
    }
  }

  // Handle other fields (Designation, Joining Date, etc.)
  else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};


const handleEmailBlur = () => {
  const email = formData.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email validation regex

  // If the email is invalid, show the error message in the form
  if (email && !emailRegex.test(email)) {
    console.log("invalid email");
    setEmailError("Invalid email: Please enter a valid email address.");
  } else {
    setEmailError(''); // Clear error if the email is valid
  }
};
  
  useEffect(() => {
    if (showForm) {
  
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

  // const handleEmailBlur = () => {
  //   const email = formData.email;
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email validation regex
  
  //   // If the email is invalid, show the error toast
  //   if (email && !emailRegex.test(email)) {
  //     toast.error("Invalid email: Please enter a valid email address.");
  //     console.log("Invalid email: Please enter a valid email address.");
  //   }
  // };
 

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
                      {/* Display the error message below the name input */}
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                  </Grid>

                  {/* <Grid item xs={6}>
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
                 
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                  </Grid> */}
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
  />
  {emailError && <p style={{ color: 'red' }}>{emailError}</p>}  
</Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Mobile"
                      fullWidth
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      onBlur={handleEmailBlur}
                      required
                      // helperText="* Required"
                      sx={{ marginTop: '10px' }} 
                    />
                    
                      {error.mobile && <p style={{ color: 'red' }}>{error.mobile}</p>}
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
