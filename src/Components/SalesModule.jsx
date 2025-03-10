
// Second  & correct:

// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
// import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
// import { Modal, Button } from 'react-bootstrap'; 

// const SalesModule = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     designation: "",
//     joiningDate: "",
//     status: "Active",
//   });
//   const [salesPersons, setSalesPersons] = useState([{ salesPersonName: '', salesPersonMobile: '' }]); // Define salesPersons state

//   const handleAddNew = () => {
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     setShowForm(false);
//   };

//   const handleCancel = () => {
//     setShowForm(false);  
//   };

//   const openModal = () => {
//     setShowForm(true); 
//   };

//   const closeModal = () => {
//     setShowForm(false);  
//   };

//   const handleSalesPersonChange = (index, field, value) => {
//     const updatedSalesPersons = [...salesPersons];
//     updatedSalesPersons[index][field] = value;
//     setSalesPersons(updatedSalesPersons);
//   };

//   const handleAddSalesPerson = () => {
//     setSalesPersons([...salesPersons, { salesPersonName: '', salesPersonMobile: '' }]);
//   };

//   const handleRemoveSalesPerson = (index) => {
//     const updatedSalesPersons = salesPersons.filter((_, i) => i !== index);
//     setSalesPersons(updatedSalesPersons);
//   };

//   return (
//     <div className="container my-4">
//       <div className="row mb-3">
//         <div className="col-md-6 d-flex flex-column align-items-start">
//           <h2 className="mb-2 fs-6">Admin Module / Sales Person Management</h2>
//           {!showForm && (
//             <button className="btn btn-primary d-flex align-items-center" onClick={handleAddNew}>
//               <FaPlus className="me-2" />
//               Add New Sales Person
//             </button>
//           )}
//         </div>
//         {!showForm && (
//           <div className="col-md-6 d-flex justify-content-end align-items-center">
//             <input type="text" className="form-control w-50" placeholder="Search..." />
//           </div>
//         )}
//       </div>

//       {/* Dimming the sidebar using a simple overlay when modal is open */}
//       {showForm && <div className="position-fixed top-0 start-0 w-50 h-100 bg-dark opacity-50" style={{ zIndex: 1049 }}></div>}

//     {showForm ? (
//         <>
//           <Modal 
//             show={showForm} 
//             onHide={closeModal}
//             dialogClassName="modal-dialog modal-fullscreen-sm-down" // Bootstrap modal class for fullscreen
//             aria-labelledby="modal-title"
//             centered
//           >
//             <Modal.Body className="d-flex align-items-center justify-content-center vh-100 p-4">
//               <div style={{ maxWidth: "600px", width: "100%", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
//                 <Modal.Header closeButton className="bg-primary text-white mb-4">
//                   <Modal.Title id="modal-title">Add New Sales Person</Modal.Title>
//                 </Modal.Header>
//                 <form onSubmit={handleSubmit}>
                
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label">Name</label>
//                       <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
//                     </div>
//                     <div className="col-md-6">
//                       <label className="form-label">Email</label>
//                       <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label">Mobile</label>
//                       <input type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
//                     </div>
//                     <div className="col-md-6">
//                       <label className="form-label">Designation</label>
//                       <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleChange} required />
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label">Joining Date</label>
//                       <input type="date" className="form-control" name="joiningDate" value={formData.joiningDate} onChange={handleChange} required />
//                     </div>
//                     <div className="col-md-6">
//                       <label className="form-label">Status</label>
//                       <select className="form-control" name="status" value={formData.status} onChange={handleChange}>
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="d-flex gap-2 justify-content-center">
//                     <button type="submit" className="btn btn-success">Submit</button>
//                     <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </form>
//               </div>
//             </Modal.Body>
//           </Modal>
//         </>
//       ) : ( 
      


      
//         <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
//           <Table>
//             <TableHead sx={{ bgcolor: "primary.main" }}>
//               <TableRow>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Mobile</TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Designation</TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Joining Date</TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell>
//                   <IconButton color="primary">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton color="error">
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//                 <TableCell>John Doe</TableCell>
//                 <TableCell>johndoe@example.com</TableCell>
//                 <TableCell>+1234567890</TableCell>
//                 <TableCell>Software Engineer</TableCell>
//                 <TableCell>2023-08-15</TableCell>
//                 <TableCell>Active</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </div>
//   );
// };

// export default SalesModule;










import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
// import { toast, ToastContainer } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';

const SalesModule = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="mb-2 fs-6">Admin Module / Sales Person Management</h2>
          {!showForm && (
            <button className="btn btn-primary d-flex align-items-center" onClick={handleAddNew}>
              <FaPlus className="me-2" />
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
                <button type="button" className="btn-close" onClick={handleCancel}></button>
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
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Name</label>
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
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Mobile</label>
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

                      {/* Submit and Cancel Buttons */}
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
      )}

      {/* Sales Person Table */}
      {!showForm && (
        <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead sx={{ bgcolor: "primary.main" }}>
              <TableRow>
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
 

export default SalesModule;
