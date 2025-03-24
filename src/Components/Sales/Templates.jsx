
// import React from 'react';
// import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Template = () => {
//   const templates = [
//     { id: 1, title: 'At The Time of Visit' },
//     { id: 2, title: 'At The Time of Booking' },
//     { id: 3, title: 'Rate Approval Form' },
//     { id: 4, title: 'Negotiation Calculation (PACKAGE WISE)' },
//     { id: 5, title: 'Negotiation Calculation (AGREEMENT VALUE WISE)' },
//   ];

 
//   const getDescription = (title) => {
//     switch (title) {
//       case 'At The Time of Booking':
//         return 'Generate booking-related documentation and payment details.';
//       case 'Rate Approval Form':
//         return 'Generate rate approval documentation for property transactions.';
//       case 'Negotiation Calculation (PACKAGE WISE)':
//         return 'Generate and manage package-based negotiation calculations.';
//       case 'Negotiation Calculation (AGREEMENT VALUE WISE)':
//         return 'Generate and manage agreement value-based negotiation calculations.';
//       default:
//         return 'Generate payment details and schedule document for site visits.';
//     }
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom className='pb-5'>
//         Sales Templates
//       </Typography>
//       <hr />

//       {/* Grid to display 5 cards in a row */}
//       <Grid container spacing={3} className='pt-5'>
//         {templates.map((template) => (
//           <Grid item xs={12} sm={6} md={4} key={template.id}>
//             <Card sx={{ boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom className='text-primary'>
//                   {template.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" paragraph>
//                   {getDescription(template.title)}
//                 </Typography>

//                 {/* Conditionally render buttons */}
//                 <Box sx={{ display: 'flex', gap: 2 }}>
//                   {template.title === 'At The Time of Visit' ? (
//                     <Link to={`/pdf/${template.id}`} style={{ textDecoration: 'none' }}>
//                       <Button variant="contained" color="primary" fullWidth className=' d-flex justify-content-center align-items-center'>
//                         Download PDF
//                       </Button>
//                     </Link>
//                   ) : (
//                     <>
//                       <Link to={`/form/${template.id}`} style={{ textDecoration: 'none' }}>
//                         <Button variant="contained" color="primary" fullWidth>
//                           Form
//                         </Button>
//                       </Link>

//                       <Link to={`/display/${template.id}`} style={{ textDecoration: 'none' }}>
//                         <Button variant="contained" color="primary" fullWidth>
//                           Display
//                         </Button>
//                       </Link>

//                       <Link to={`/pdf/${template.id}`} style={{ textDecoration: 'none' }}>
//                         <Button variant="contained" color="primary" fullWidth>
//                           PDF
//                         </Button>
//                       </Link>
//                     </>
//                   )}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Template;




// ===========

// import React, { useState } from 'react';
// import { Box, Button, Card, CardContent, Grid, Typography, Modal } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Template = () => {
//   const templates = [
//     { id: 1, title: 'At The Time of Visit' },
//     { id: 2, title: 'At The Time of Booking' },
//     { id: 3, title: 'Rate Approval Form' },
//     { id: 4, title: 'Negotiation Calculation (PACKAGE WISE)' },
//     { id: 5, title: 'Negotiation Calculation (AGREEMENT VALUE WISE)' },
//   ];

//   const [openModal, setOpenModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const getDescription = (title) => {
//     switch (title) {
//       case 'At The Time of Booking':
//         return 'Generate booking-related documentation and payment details.';
//       case 'Rate Approval Form':
//         return 'Generate rate approval documentation for property transactions.';
//       case 'Negotiation Calculation (PACKAGE WISE)':
//         return 'Generate and manage package-based negotiation calculations.';
//       case 'Negotiation Calculation (AGREEMENT VALUE WISE)':
//         return 'Generate and manage agreement value-based negotiation calculations.';
//       default:
//         return 'Generate payment details and schedule document for site visits.';
//     }
//   };

//   const handleOpenModal = (content) => {
//     setModalContent(content);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setModalContent(null);
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom className="pb-5">
//         Sales Templates
//       </Typography>
//       <hr />

//       {/* Grid to display 5 cards in a row */}
//       <Grid container spacing={3} className="pt-5">
//         {templates.map((template) => (
//           <Grid item xs={12} sm={6} md={4} key={template.id}>
//             <Card sx={{ boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom className="text-primary">
//                   {template.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" paragraph>
//                   {getDescription(template.title)}
//                 </Typography>

//                 {/* Conditionally render buttons for Form, Display, and PDF in a row */}
//                 <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleOpenModal('Form')}
//                     fullWidth
//                     sx={{ flex: 1 }}
//                   >
//                     Form
//                   </Button>

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleOpenModal('Display')}
//                     fullWidth
//                     sx={{ flex: 1 }}
//                   >
//                     Display
//                   </Button>

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleOpenModal('PDF')}
//                     fullWidth
//                     sx={{ flex: 1 }}
//                   >
//                     PDF
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Modal to show the content of each section */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <Box
//           sx={{
//             width: 400,
//             padding: 3,
//             backgroundColor: 'white',
//             margin: 'auto',
//             top: '50%',
//             transform: 'translateY(-50%)',
//           }}
//         >
//           <Typography variant="h6" id="modal-title" gutterBottom>
//             {modalContent}
//           </Typography>

//           {/* Conditional content based on the modal content type */}
//           {modalContent === 'Form' && (
//             <Box>
//               <h4>Form for {modalContent}</h4>
//               {/* Add form fields for the selected template here */}
//               <input type="text" placeholder="Enter data" />
//               <input type="date" />
//             </Box>
//           )}

//           {modalContent === 'Display' && (
//             <Box>
//               <h4>Display Content for {modalContent}</h4>
//               {/* Add content to display */}
//               <p>This is the display section for {modalContent}.</p>
//             </Box>
//           )}

//           {modalContent === 'PDF' && (
//             <Box>
//               <h4>PDF Content for {modalContent}</h4>
//               {/* You can put the PDF viewer or download link here */}
//               <p>Download the PDF for {modalContent}.</p>
//               <Button variant="contained" color="secondary">
//                 Download PDF
//               </Button>
//             </Box>
//           )}

//           {/* Close Modal Button */}
//           <Button
//             variant="outlined"
//             color="secondary"
//             fullWidth
//             onClick={handleCloseModal}
//           >
//             Close
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default Template;


// ---------------





// import React, { useState } from 'react';
// import { Box, Button, Card, CardContent, Grid, Typography, Modal ,Select, MenuItem,TextField,FormControl,InputLabel} from '@mui/material';
// import { Link } from 'react-router-dom';

// const Template = () => {
//   const templates = [
//     { id: 1, title: 'At The Time of Visit' },
//     { id: 2, title: 'At The Time of Booking' ,formtype : 'visit',displayType: 'visitDisplay'},
//     { id: 3, title: 'Rate Approval Form' ,formtype:"Display", displayType: 'rateApprovalDisplay'},
//     { id: 4, title: 'Negotiation Calculation (PACKAGE WISE)' ,formtype:"Package",displayType: 'packageDisplay'},
//     { id: 5, title: 'Negotiation Calculation (AGREEMENT VALUE WISE)'  ,formtype : "Agreement",displayType: 'agreementDisplay'}
//   ];

//   const [openModal, setOpenModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const getDescription = (title) => {
//     switch (title) {
//       case 'At The Time of Booking':
//         return 'Generate booking-related documentation and payment details.';
//       case 'Rate Approval Form':
//         return 'Generate rate approval documentation for property transactions.';
//       case 'Negotiation Calculation (PACKAGE WISE)':
//         return 'Generate and manage package-based negotiation calculations.';
//       case 'Negotiation Calculation (AGREEMENT VALUE WISE)':
//         return 'Generate and manage agreement value-based negotiation calculations.';
//       default:
//         return 'Generate payment details and schedule document for site visits.';
//     }
//   };

//   const handleOpenModal = (content) => {
//     setModalContent(content);
//     setOpenModal(true);
   
//   if (content === 'visit') {
//     setFormData({
//       projectName: '',
//       wing: '',
//       flatNo: '',
//       type: '',
//       date: '',
//     });
//   }  else if (content === 'Display') {
    
//     setFormData({
//       projectName: formData.projectName,
//       wing: formData.wing,
//       flatNo: formData.flatNo,
//       type: formData.type,
//       date: formData.date,
//     });
//   }
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setModalContent(null);
//   };


//   const [formData, setFormData] = useState({
//     projectName: '',
//     wing: '',
//     flatNo: '',
//     type: '',
//     date: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value, // Updates formData state dynamically
//     });
//   };

//   const handleSave = () => {
//     // You can perform any save logic here if needed
//     toast.success('Form saved successfully!'); // Show success toast
//   };

//   const handleCancel = () => {
//     setFormData({
//       projectName: '',
//       wing: '',
//       flatNo: '',
//       type: '',
//       date: '',
//     }); // Reset form data
//   };



//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom className="pb-5">
//         Sales Templates
//       </Typography>
//       <hr />

//       {/* Grid to display 5 cards in a row */}
//       <Grid container spacing={3} className="pt-5">
//         {templates.map((template, index) => (
//           <Grid item xs={12} sm={6} md={4} key={template.id}>
//             <Card sx={{ boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom className="text-primary">
//                   {template.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" paragraph>
//                   {getDescription(template.title)}
//                 </Typography>

//                 {/* Conditionally render buttons based on card index */}
//                 <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
//                   {/* Show "Download PDF" only on the first card */}
//                   {index === 0 ? (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                       sx={{ flex: 1 }}
//                       onClick={() => handleOpenModal('PDF')}
//                     >
//                       Download PDF
//                     </Button>
//                   ) : (
//                     <>
//                       {/* Show Form, Display, and PDF buttons on remaining cards */}
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleOpenModal(template.formtype)}
//                         fullWidth
//                         sx={{ flex: 1 }}
//                       >
//                         Form
//                       </Button>

//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleOpenModal('Display')}
//                         fullWidth
//                         sx={{ flex: 1 }}
//                       >
//                         Display
//                       </Button>

//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleOpenModal('PDF')}
//                         fullWidth
//                         sx={{ flex: 1 }}
//                       >
//                         PDF
//                       </Button>
//                     </>
//                   )}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

    

// <Modal
//   open={openModal}
//   onClose={handleCloseModal}
//   aria-labelledby="modal-title"
//   aria-describedby="modal-description"
// >
//   <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: '100%',
//       height: '100vh',  // Full viewport height for centering
//       position: 'absolute',
//       top: 0,
//       left: 0,
//     }}
//   >
//     <Box
//       sx={{
//         width: 400,
//         padding: 3,
//         backgroundColor: 'white',
//         borderRadius: 2,  
//         boxShadow: 3,     
//         maxHeight: '80vh',  
//         overflowY: 'auto',  
//       }}
//     >
//       <Typography variant="h6" id="modal-title" gutterBottom>
   
//       </Typography>

      

// {/* {modalContent === 'Form' && ( */}


// {modalContent === 'visit' && (


// <Modal open={openModal} onClose={handleCloseModal}>
//   <Box
//     sx={{
//       width: 870,
//       bgcolor: "background.paper",
//       borderRadius: 2,
//       p: 4,
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       boxShadow: 24,
//     }}
//   >
//     {/* Modal Header */}
//     <div style={{ backgroundColor: "#1976d2", padding: "8px 16px", marginBottom: "10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//       <h5 style={{ margin: 0, color: "#fff" }}>Booking Form</h5>
//       <Button onClick={handleCloseModal} style={{ fontSize: "16px", color: "#fff", fontWeight: "bold", minWidth: "auto" }}>
//         ✖
//       </Button>
//     </div>

//     {/* Form Fields with two per row */}
//     <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

//       {/* First Row */}
//       <div style={{ display: "flex", gap: "20px" }}>
//         <FormControl fullWidth>
//           <InputLabel></InputLabel>
//           <Select
//             name="projectName"
//             value={formData.projectName}
//             onChange={handleChange}
//             displayEmpty
//           >
//             <MenuItem value="">Select Project Name</MenuItem>
//             <MenuItem value="Sohan Enterprised">Sohan Enterprised</MenuItem>
//             <MenuItem value="Jatiin">Jatin</MenuItem>
//             <MenuItem value="Jatin Ahirvar">Jatin Ahirvar</MenuItem>
//             <MenuItem value="Project Name 111">Project Name 111</MenuItem>
//             <MenuItem value="Shubh Elara">Shubh Elara</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel></InputLabel>
//           <Select
//             name="wing"
//             value={formData.wing}
//             onChange={handleChange}
//             displayEmpty
//           >
//             <MenuItem value="">Select Wing</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       {/* Second Row */}
//       <div style={{ display: "flex", gap: "20px" }}>
//         <FormControl fullWidth>
//           <InputLabel></InputLabel>
//           <Select
//             name="flatNo"
//             value={formData.flatNo}
//             onChange={handleChange}
//             displayEmpty
//           >
//             <MenuItem value="">Select Flat No</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel></InputLabel>
//           <Select
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             displayEmpty
//           >
//             <MenuItem value="">Select Type</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       {/* Third Row */}
//       <div style={{ display: "flex", gap: "20px" }}>
//         <TextField
//           label="Date"
//           fullWidth
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           InputLabelProps={{ shrink: true }}
//         />
//       </div>
//     </div>

//     {/* Action Buttons */}
//     <div style={{ textAlign: "right", marginTop: 24 }}>
//       <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
//         Cancel
//       </Button>
//       <Button variant="contained" color="primary" onClick={handleSave} style={{ marginLeft: 10 }}>
//         Submit
//       </Button>
//     </div>
//   </Box>
// </Modal>










// )}





// {modalContent === 'Display' && (
//   <Modal open={openModal} onClose={handleCloseModal}>
//     <Box
//       sx={{
//         width: 900, // Adjust the width to add more space
//         bgcolor: "background.paper",
//         borderRadius: 2,
//         p: 4,
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         boxShadow: 24,
//       }}
//     >
//       {/* Modal Header */}
//       <div
//         style={{
//           backgroundColor: "#1976d2",
//           padding: "8px 16px",
//           marginBottom: "10px",
//           borderRadius: "5px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h5 style={{ margin: 0, color: "#fff" }}>Rate Approval Form</h5>
//         <Button
//           onClick={handleCloseModal}
//           style={{
//             fontSize: "16px",
//             color: "#fff",
//             fontWeight: "bold",
//             minWidth: "auto",
//           }}
//         >
//           ✖
//         </Button>
//       </div>

//       {/* Form Fields */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//         <Grid container spacing={3}>
//           {/* Project Name, Wing, Flat No */}
//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Project Name</InputLabel>
//               <Select
//                 value={formData.projectName || ""}
//                 onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
//                 label="Project Name"
//               >
//                 <MenuItem value="Project "></MenuItem>
               
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Wing</InputLabel>
//               <Select
//                 value={formData.wing || ""}
//                 onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
//                 label="Wing"
//               >
              
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Flat No</InputLabel>
//               <Select
//                 value={formData.flatNo || ""}
//                 onChange={(e) => setFormData({ ...formData, flatNo: e.target.value })}
//                 label="Flat No"
//               >
                
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           {/* Type, Date, Facing */}
//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Type</InputLabel>
//               <Select
//                 value={formData.type || ""}
//                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                 label="Type"
//               >
               
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.date || ""}
//               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//               label="Date"
//               variant="outlined"
//               type="date"
//               fullWidth
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Facing</InputLabel>
//               <Select
//                 value={formData.facing || ""}
//                 onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
//                 label="Facing"
//               >
//                 <MenuItem value="East">East</MenuItem>
//                 <MenuItem value="West">West</MenuItem>
//                 <MenuItem value="South">South</MenuItem>
//                 <MenuItem value="North">North</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           {/* Broker Name, Basic Rate, Premium Facing */}
//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.brokerName || ""}
//               onChange={(e) => setFormData({ ...formData, brokerName: e.target.value })}
//               label="Broker Name"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.basicRate || ""}
//               onChange={(e) => setFormData({ ...formData, basicRate: e.target.value })}
//               label="Basic Rate"
//               variant="outlined"
//               type="number"
//               fullWidth
//               InputProps={{
//                 inputProps: {
//                   step: 0.01,
//                   min: 0,
//                 },
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.premiumFacing || ""}
//               onChange={(e) => setFormData({ ...formData, premiumFacing: e.target.value })}
//               label="Premium Facing"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           {/* Floor Rise, Discount, Add Disc Ref. By */}
//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.floorRise || ""}
//               onChange={(e) => setFormData({ ...formData, floorRise: e.target.value })}
//               label="Floor Rise"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.discount || ""}
//               onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
//               label="Discount"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.addDiscRefBy || ""}
//               onChange={(e) => setFormData({ ...formData, addDiscRefBy: e.target.value })}
//               label="Add Disc Ref. By"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           {/* Remark, Infrastructure, Total Consideration */}
//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.remark || ""}
//               onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
//               label="Remark"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.infrastructure || ""}
//               onChange={(e) => setFormData({ ...formData, infrastructure: e.target.value })}
//               label="Infrastructure"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.totalConsideration || ""}
//               onChange={(e) => setFormData({ ...formData, totalConsideration: e.target.value })}
//               label="Total Consideration"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           {/* Brokerage Amount */}
//           <Grid item xs={12} sm={4}>
//             <TextField
//               value={formData.brokerageAmount || ""}
//               onChange={(e) => setFormData({ ...formData, brokerageAmount: e.target.value })}
//               label="Brokerage Amount"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//         </Grid>
//       </div>

//       {/* Action Buttons */}
//       <div style={{ textAlign: "right", marginTop: 24 }}>
//         <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSave}
//           style={{ marginLeft: 10 }}
//         >
//           Submit
//         </Button>
//       </div>
//     </Box>
//   </Modal>
// )}


// {modalContent === 'Package' && (
//   <Modal open={openModal} onClose={handleCloseModal}>
//     <Box
//       sx={{
//         width: 900, 
//         bgcolor: "background.paper",
//         borderRadius: 2,
//         p: 4,
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         boxShadow: 24,
//       }}
//     >
//       {/* Modal Header */}
//       <div
//         style={{
//           backgroundColor: "#1976d2",
//           padding: "8px 16px",
//           marginBottom: "10px",
//           borderRadius: "5px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h5 style={{ margin: 0, color: "#fff" }}>Negotiation Calculation (PACKAGE) Form</h5>
//         <Button
//           onClick={handleCloseModal}
//           style={{
//             fontSize: "16px",
//             color: "#fff",
//             fontWeight: "bold",
//             minWidth: "auto",
//           }}
//         >
//           ✖
//         </Button>
//       </div>

//       {/* Form Fields */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//         <Grid container spacing={3}>
//           {/* Package Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               value={formData.package || ""}
//               onChange={(e) => setFormData({ ...formData, package: e.target.value })}
//               label="Package"
//               variant="outlined"
//               type="number"
//               fullWidth
//               InputProps={{
//                 inputProps: {
//                   step: 1,
//                   min: 0,
//                 },
//               }}
//             />
//           </Grid>

//           {/* Carpet Area Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               value={formData.carpetArea || ""}
//               onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
//               label="Carpet Area"
//               variant="outlined"
//               type="number"
//               fullWidth
//               InputProps={{
//                 inputProps: {
//                   step: 1,
//                   min: 0,
//                 },
//               }}
//             />
//           </Grid>
//         </Grid>
//       </div>

//       {/* Action Buttons */}
//       <div style={{ textAlign: "right", marginTop: 24 }}>
//         <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSave}
//           style={{ marginLeft: 10 }}
//         >
//           Submit
//         </Button>
//       </div>
//     </Box>
//   </Modal>
// )}


// {modalContent === 'Agreement' && (
//   <Modal open={openModal} onClose={handleCloseModal}>
//     <Box
//       sx={{
//         width: 900, 
//         bgcolor: "background.paper",
//         borderRadius: 2,
//         p: 4,
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         boxShadow: 24,
//       }}
//     >
//       {/* Modal Header */}
//       <div
//         style={{
//           backgroundColor: "#1976d2",
//           padding: "8px 16px",
//           marginBottom: "10px",
//           borderRadius: "5px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h5 style={{ margin: 0, color: "#fff" }}>Negotiation Calculation (AGREEMENT) Form </h5>
//         <Button
//           onClick={handleCloseModal}
//           style={{
//             fontSize: "16px",
//             color: "#fff",
//             fontWeight: "bold",
//             minWidth: "auto",
//           }}
//         >
//           ✖
//         </Button>
//       </div>

//       {/* Form Fields */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//         <Grid container spacing={3}>
//           {/* Package Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               value={formData.package || ""}
//               onChange={(e) => setFormData({ ...formData, package: e.target.value })}
//               label="Agreement Value"
//               variant="outlined"
//               type="number"
//               fullWidth
//               InputProps={{
//                 inputProps: {
//                   step: 1,
//                   min: 0,
//                 },
//               }}
//             />
//           </Grid>

//           {/* Carpet Area Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               value={formData.carpetArea || ""}
//               onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
//               label="Agreement Carpet Area"
//               variant="outlined"
//               type="number"
//               fullWidth
//               InputProps={{
//                 inputProps: {
//                   step: 1,
//                   min: 0,
//                 },
//               }}
//             />
//           </Grid>
//         </Grid>
//       </div>

//       {/* Action Buttons */}
//       <div style={{ textAlign: "right", marginTop: 24 }}>
//         <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSave}
//           style={{ marginLeft: 10 }}
//         >
//           Submit
//         </Button>
//       </div>
//     </Box>
//   </Modal>
// )}

//       {modalContent === 'PDF' && (
//         <Box>
//           <h4>PDF Content for {modalContent}</h4>
         
//           <p>Download the PDF for {modalContent}.</p>
//           <Button variant="contained" color="secondary">
//             Download PDF
//           </Button>
//         </Box>
//       )}

      
//     </Box>
//   </Box>
// </Modal>

//     </Box>
//   );
// };

// export default Template;



// ======
// import React, { useState } from 'react';


// const Modal = ({ onClose, content }) => {
//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button onClick={onClose} className="btn btn-danger">Close</button>
//         <div>{content}</div>
//       </div>
//     </div>
//   );
// };

// const Template = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const templates = [
//     { id: 1, title: 'At The Time of Visit' },
//     { id: 2, title: 'At The Time of Booking', formType: 'visit', displayType: 'visitDisplay' },
//     { id: 3, title: 'Rate Approval Form', formType: 'Display', displayType: 'rateApprovalDisplay' },
//     { id: 4, title: 'Negotiation Calculation (PACKAGE WISE)', formType: 'Package', displayType: 'packageDisplay' },
//     { id: 5, title: 'Negotiation Calculation (AGREEMENT VALUE WISE)', formType: 'Agreement', displayType: 'agreementDisplay' }
//   ];

//   const handleButtonClick = (templateId, section) => {
//     setActiveSection({ templateId, section });
//     setIsModalOpen(true);

//     // Set the modal content based on the section
//     if (section === 'form') {
//       setModalContent(<div><h4>Form: {templates.find(template => template.id === templateId).formType}</h4></div>);
//     } else if (section === 'display') {
//       setModalContent(<div><h4>Display: {templates.find(template => template.id === templateId).displayType}</h4></div>);
//     } else if (section === 'pdf') {
//       setModalContent(<div><h4>PDF: {templates.find(template => template.id === templateId).title} PDF</h4></div>);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setActiveSection(null);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {templates.map((template) => (
//           <div key={template.id} className="col-md-4 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{template.title}</h5>

//                 {/* Show buttons for templates 2-5 */}
//                 {template.id !== 1 && (
//                   <div className="d-flex gap-2 mt-3">
//                     <button
//                       onClick={() => handleButtonClick(template.id, 'form')}
//                       className="btn btn-primary">Form</button>
//                     <button
//                       onClick={() => handleButtonClick(template.id, 'display')}
//                       className="btn btn-info">Display</button>
//                     <button
//                       onClick={() => handleButtonClick(template.id, 'pdf')}
//                       className="btn btn-success">PDF</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Render Modal if open */}
//       {isModalOpen && (
//         <div className="modal-overlay position-fixed top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
//           <div className="modal-content bg-white p-4 rounded">
//             <button onClick={closeModal} className="btn btn-danger mb-3">Close</button>
//             <div>{modalContent}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Template;


// import React, { useState } from 'react';
// import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

// const templates = [
//   { id: 1, title: 'At The Time of Visit', description: 'Generate payment details and schedule document for site visits.', buttons: ['PDF'] },
//   { id: 2, title: 'At The Time of Booking', description: 'Generate booking-related documentation and payment details.', formtype: 'visit', displayType: 'visitDisplay', buttons: ['Form', 'Display', 'PDF'] },
//   { id: 3, title: 'Rate Approval Form', description: 'Generate rate approval documentation for property transactions.', formtype: 'Display', displayType: 'rateApprovalDisplay', buttons: ['Form', 'Display', 'PDF'] },
//   { id: 4, title: 'Negotiation Calculation (PACKAGE WISE)', description: 'Generate package-wise negotiation calculations and agreements.', formtype: 'Package', displayType: 'packageDisplay', buttons: ['Form', 'Display', 'PDF'] },
//   { id: 5, title: 'Negotiation Calculation (AGREEMENT VALUE WISE)', description: 'Generate agreement value-based negotiation calculations.', formtype: 'Agreement', displayType: 'agreementDisplay', buttons: ['Form', 'Display', 'PDF'] }
// ];

// const Template = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);
//   const [formData, setFormData] = useState({
//     projectName: '',
//     wing: '',
//     flatNo: '',
//     type: '',
//     date: '',
//   });

//   const handleOpenModal = (content) => {
//     setModalContent(content);
//     setOpenModal(true);
//     if (content === 'visit') {
//       setFormData({ projectName: '', wing: '', flatNo: '', type: '', date: '' });
//     }
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Sales Templates</h2>
//       <div className="row g-4 mt-5">
//         {templates.map((template) => (
//           <div className="col-12 col-sm-6 col-md-4" key={template.id}>
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">{template.title}</h5>
//                 <p className="card-text">{template.description}</p>
//                 <div className="d-flex gap-2 justify-content-between">
//                   {template.buttons.map((button, index) => (
//                     <Button
//                       key={index}
//                       variant="primary"
//                       onClick={() => handleOpenModal(button === 'Form' ? template.formtype : button === 'Display' ? template.displayType : 'PDF')}
//                     >
//                       {button}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal show={openModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{modalContent || 'Form'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {modalContent === 'visit' && (
//             <Form>
//               <Row>
//                 <Col sm={6}>
//                   <Form.Group controlId="formProjectName">
//                     <Form.Label>Project Name</Form.Label>
//                     <Form.Control as="select" name="projectName" value={formData.projectName} onChange={() => {}}>
//                       <option>Select Project Name</option>
//                       <option>Sohan Enterprises</option>
//                       <option>Jatin</option>
//                     </Form.Control>
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </Form>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
//           <Button variant="primary">Submit</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Template;


import React, { useState } from "react";
import { Button, Modal, Form, Row, Col, Table } from "react-bootstrap";

const templates = [
  {
    id: 1,
    title: "At The Time of Visit",
    description: "Generate payment details and schedule document for site visits.",
    formtype: "visit",
    displayType: "visitDisplay",
    buttons: ["Form", "Display", "PDF"],
  },
  {
    id: 2,
    title: "At The Time of Booking",
    description: "Generate booking-related documentation and payment details.",
    formtype: "visit",
    displayType: "visitDisplay",
    buttons: ["Form", "Display", "PDF"],
  },
  {
    id: 3,
    title: "Rate Approval Form",
    description: "Generate rate approval documentation for property transactions.",
    formtype: "Display",
    displayType: "rateApprovalDisplay",
    buttons: ["Form", "Display", "PDF"],
  },
  {
    id: 4,
    title: "Negotiation Calculation (PACKAGE WISE)",
    description: "Generate package-wise negotiation calculations and agreements.",
    formtype: "Package",
    displayType: "packageDisplay",
    buttons: ["Form", "Display", "PDF"],
  },
  {
    id: 5,
    title: "Negotiation Calculation (AGREEMENT VALUE WISE)",
    description: "Generate agreement value-based negotiation calculations.",
    formtype: "Agreement",
    displayType: "agreementDisplay",
    buttons: ["Form", "Display", "PDF"],
  },
];

const Template = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
    wing: "",
    flatNo: "",
    type: "",
    date: "",
  });

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true);
    if (content === "visit") {
      setFormData({ projectName: "", wing: "", flatNo: "", type: "", date: "" });
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  return (
    <div className="container mt-4">
      <h2>Sales Templates</h2>
      {/* <div className="row g-4 mt-5">
        {templates.map((template) => (
          <div className="col-12 col-sm-6 col-md-4" key={template.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{template.title}</h5>
                <p className="card-text">{template.description}</p>
                <div className="d-flex gap-3 justify-content-start">
                  {template.buttons.map((button, index) => (
                    <Button
                      key={index}
                      variant="primary"
                      onClick={() =>
                        handleOpenModal(
                          button === "Form" ? template.formtype : button === "Display" ? template.displayType : "PDF"
                        )
                      }
                    >
                      {button}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
<div className="row g-4 mt-5">
  {templates.map((template) => (
    <div className="col-12 col-sm-6 col-md-4" key={template.id}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{template.title}</h5>
          <p className="card-text">{template.description}</p>
          <div className="d-flex gap-3 justify-content-start">
            {template.id === 1 ? (
              <Button
                variant="primary"
                onClick={() => handleOpenModal("PDF")}
              >
                Download PDF
              </Button>
            ) : (
              template.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant="primary"
                  onClick={() =>
                    handleOpenModal(
                      button === "Form"
                        ? template.formtype
                        : button === "Display"
                        ? template.displayType
                        : "PDF"
                    )
                  }
                >
                  {button}
                </Button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* MODAL */}
      <Modal show={openModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {modalContent === "visit"
              ? "Booking Form"
              : modalContent === "visitDisplay"
              ? "At The Time of Booking - Display"
              : modalContent === "rateApprovalDisplay"
              ? "Rate Approval Form"
              : modalContent === "packageDisplay"
              ? "Negotiation Calculation (PACKAGE WISE)"
              : modalContent === "agreementDisplay"
              ? "Negotiation Calculation (AGREEMENT VALUE WISE)"
              : "Form"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Booking Form */}
          {modalContent === "visit" && (
            <Form>
              <Row>
                <Col sm={6}>
                  <Form.Group controlId="formProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control as="select" name="projectName" value={formData.projectName} onChange={() => {}}>
                      <option>Select Project Name</option>
                      <option>Sohan Enterprises</option>
                      <option>Jatin</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="formWing">
                    <Form.Label>Wing</Form.Label>
                    <Form.Control as="select" name="wing" value={formData.wing} onChange={() => {}}>
                      <option>Select Wing</option>
                      <option>Wing A</option>
                      <option>Wing B</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={6}>
                  <Form.Group controlId="formFlatNo">
                    <Form.Label>Flat No</Form.Label>
                    <Form.Control as="select" name="flatNo" value={formData.flatNo} onChange={() => {}}>
                      <option>Select Flat No</option>
                      <option>101</option>
                      <option>102</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="formType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" name="type" value={formData.type} onChange={() => {}}>
                      <option>Select Type</option>
                      <option>Type A</option>
                      <option>Type B</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={6}>
                  <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" value={formData.date} onChange={() => {}} />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}

          {/* Display Section */}
          {modalContent === "visitDisplay" && (
            <Table bordered>
              <tbody>
                <tr>
                  <td className="fw-bold">PROJECT NAME</td>
                  <td rowSpan="9"></td> {/* Empty column */}
                  <td className="fw-bold">DATE:</td>
                </tr>
                <tr>
                  <td className="fw-bold">MAHARERA NO</td>
                  <td className="fw-bold">WING:</td>
                </tr>
                <tr>
                  <td className="fw-bold">Firm Name / PROJECT NAME / WING NO E / UNIT NO 208 - fn/P</td>
                  <td className="fw-bold">UNIT TYPE:</td>
                </tr>
                <tr>
                  <td>UNIT No</td>
                </tr>
                <tr>
                  <td>CARPET</td>
                </tr>
                <tr>
                  <td>OPEN/ENCLOSED BALCONY AS SANCTIONED</td>
                </tr>
                <tr>
                  <td>TERRACE</td>
                </tr>
                <tr>
                  <td>SITOUT</td>
                </tr>
                <tr>
                  <td>PODIUM GARDEN</td>
                </tr>
              </tbody>
            </Table>
          )}

<Modal.Body>
  {/* Rate Approval Form */}
  {modalContent === "rateApprovalDisplay" && (
    <Form>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="formProjectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Project Name" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formWing">
            <Form.Label>Wing</Form.Label>
            <Form.Control type="text" placeholder="Enter Wing" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formFlatNo">
            <Form.Label>Flat No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Flat No." />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" placeholder="Enter Type" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formFacing">
            <Form.Label>FACING (Direction)</Form.Label>
            <Form.Control type="text" placeholder="Enter Facing Direction" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formBrokerName">
            <Form.Label>BROKER NAME (IF ANY)</Form.Label>
            <Form.Control type="text" placeholder="Enter Broker Name" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formBasicRate">
            <Form.Label>BASIC RATE</Form.Label>
            <Form.Control type="number" placeholder="Enter Basic Rate" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formPremiumFacing">
            <Form.Label>PREMIUM FACING</Form.Label>
            <Form.Control type="number" placeholder="Enter Premium Facing" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formFloorRise">
            <Form.Label>FLOOR RISE</Form.Label>
            <Form.Control type="number" placeholder="Enter Floor Rise" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formDiscount">
            <Form.Label>DISCOUNT</Form.Label>
            <Form.Control type="number" placeholder="Enter Discount" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formAddDiscRef">
            <Form.Label>ADD DISC. REF. BY</Form.Label>
            <Form.Control type="text" placeholder="Enter Reference" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12}>
          <Form.Group controlId="formRemark">
            <Form.Label>REMARK</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Enter Remark" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formInfrastructure">
            <Form.Label>INFRASTRUCTURE</Form.Label>
            <Form.Control type="text" placeholder="Enter Infrastructure Details" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formTotalConsideration">
            <Form.Label>TOTAL CONSIDERATION</Form.Label>
            <Form.Control type="number" placeholder="Enter Total Consideration" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={6}>
          <Form.Group controlId="formBrokerageAmount">
            <Form.Label>BROKERAGE AMOUNT</Form.Label>
            <Form.Control type="number" placeholder="Enter Brokerage Amount" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )}

  {/* Package Wise Form (4th Card) */}
  {modalContent === "packageDisplay" && (
    <Form>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="formPackage">
            <Form.Label>Package</Form.Label>
            <Form.Control type="text" placeholder="Enter Package Details" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formCarpetArea">
            <Form.Label>Carpet Area</Form.Label>
            <Form.Control type="number" placeholder="Enter Carpet Area" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )}

  {/* Agreement Value Wise Form (5th Card) */}
  {modalContent === "agreementDisplay" && (
    <Form>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="formAgreementValue">
            <Form.Label>Agreement Value</Form.Label>
            <Form.Control type="number" placeholder="Enter Agreement Value" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formAgreementCarpetArea">
            <Form.Label>Agreement Carpet Area</Form.Label>
            <Form.Control type="number" placeholder="Enter Carpet Area" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )}
</Modal.Body>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          {modalContent === "visit" && <Button variant="primary">Submit</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Template;
