
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


// ----------------------------------------

// import React, { useState } from "react";
// import { Button, Modal, Form, Row, Col, Table } from "react-bootstrap";

// const templates = [
//   {
//     id: 1,
//     title: "At The Time of Visit",
//     description: "Generate payment details and schedule document for site visits.",
//     formtype: "visit",
//     displayType: "visitDisplay",
//     buttons: ["Form", "Display", "PDF"],
//   },
//   {
//     id: 2,
//     title: "At The Time of Booking",
//     description: "Generate booking-related documentation and payment details.",
//     formtype: "visit",
//     displayType: "visitDisplay",
//     buttons: ["Form", "Display", "PDF"],
//   },
//   {
//     id: 3,
//     title: "Rate Approval Form",
//     description: "Generate rate approval documentation for property transactions.",
//     formtype: "Display",
//     displayType: "rateApprovalDisplay",
//     buttons: ["Form", "Display", "PDF"],
//   },
//   {
//     id: 4,
//     title: "Negotiation Calculation (PACKAGE WISE)",
//     description: "Generate package-wise negotiation calculations and agreements.",
//     formtype: "Package",
//     displayType: "packageDisplay",
//     buttons: ["Form", "Display", "PDF"],
//   },
//   {
//     id: 5,
//     title: "Negotiation Calculation (AGREEMENT VALUE WISE)",
//     description: "Generate agreement value-based negotiation calculations.",
//     formtype: "Agreement",
//     displayType: "agreementDisplay",
//     buttons: ["Form", "Display", "PDF"],
//   },
// ];

// const Template = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);
//   const [formData, setFormData] = useState({
//     projectName: "",
//     wing: "",
//     flatNo: "",
//     type: "",
//     date: "",
//   });

//   const handleOpenModal = (content) => {
//     setModalContent(content);
//     setOpenModal(true);
//     if (content === "visit") {
//       setFormData({ projectName: "", wing: "", flatNo: "", type: "", date: "" });
//     }
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Sales Templates</h2>
      
// <div className="row g-4 mt-5">
//   {templates.map((template) => (
//     <div className="col-12 col-sm-6 col-md-4" key={template.id}>
//       <div className="card shadow-sm">
//         <div className="card-body">
//           <h5 className="card-title text-primary">{template.title}</h5>
//           <p className="card-text">{template.description}</p>
//           <div className="d-flex gap-3 justify-content-start">
//             {template.id === 1 ? (
//               <Button
//                 variant="primary"
//                 onClick={() => handleOpenModal("PDF")}
//               >
//                 Download PDF
//               </Button>
//             ) : (
//               template.buttons.map((button, index) => (
//                 <Button
//                   key={index}
//                   variant="primary"
//                   onClick={() =>
//                     handleOpenModal(
//                       button === "Form"
//                         ? template.formtype
//                         : button === "Display"
//                         ? template.displayType
//                         : "PDF"
//                     )
//                   }
//                 >
//                   {button}
//                 </Button>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//       {/* MODAL */}
//       <Modal show={openModal} onHide={handleCloseModal} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {modalContent === "visit"
//               ? "Booking Form"
//               : modalContent === "visitDisplay"
//               ? "At The Time of Booking - Display"
//               : modalContent === "rateApprovalDisplay"
//               ? "Rate Approval Form"
//               : modalContent === "packageDisplay"
//               ? "Negotiation Calculation (PACKAGE WISE)"
//               : modalContent === "agreementDisplay"
//               ? "Negotiation Calculation (AGREEMENT VALUE WISE)"
//               : "Form"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
       
//           {modalContent === "visit" && (
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
//                 <Col sm={6}>
//                   <Form.Group controlId="formWing">
//                     <Form.Label>Wing</Form.Label>
//                     <Form.Control as="select" name="wing" value={formData.wing} onChange={() => {}}>
//                       <option>Select Wing</option>
//                       <option>Wing A</option>
//                       <option>Wing B</option>
//                     </Form.Control>
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row className="mt-3">
//                 <Col sm={6}>
//                   <Form.Group controlId="formFlatNo">
//                     <Form.Label>Flat No</Form.Label>
//                     <Form.Control as="select" name="flatNo" value={formData.flatNo} onChange={() => {}}>
//                       <option>Select Flat No</option>
//                       <option>101</option>
//                       <option>102</option>
//                     </Form.Control>
//                   </Form.Group>
//                 </Col>
//                 <Col sm={6}>
//                   <Form.Group controlId="formType">
//                     <Form.Label>Type</Form.Label>
//                     <Form.Control as="select" name="type" value={formData.type} onChange={() => {}}>
//                       <option>Select Type</option>
//                       <option>Type A</option>
//                       <option>Type B</option>
//                     </Form.Control>
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row className="mt-3">
//                 <Col sm={6}>
//                   <Form.Group controlId="formDate">
//                     <Form.Label>Date</Form.Label>
//                     <Form.Control type="date" name="date" value={formData.date} onChange={() => {}} />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </Form>
//           )}

         
//           {modalContent === "visitDisplay" && (
//             <Table bordered>
//               <tbody>
//                 <tr>
//                   <td className="fw-bold">PROJECT NAME</td>
//                   <td rowSpan="9"></td> {/* Empty column */}
//                   <td className="fw-bold">DATE:</td>
//                 </tr>
//                 <tr>
//                   <td className="fw-bold">MAHARERA NO</td>
//                   <td className="fw-bold">WING:</td>
//                 </tr>
//                 <tr>
//                   <td className="fw-bold">Firm Name / PROJECT NAME / WING NO E / UNIT NO 208 - fn/P</td>
//                   <td className="fw-bold">UNIT TYPE:</td>
//                 </tr>
//                 <tr>
//                   <td>UNIT No</td>
//                 </tr>
//                 <tr>
//                   <td>CARPET</td>
//                 </tr>
//                 <tr>
//                   <td>OPEN/ENCLOSED BALCONY AS SANCTIONED</td>
//                 </tr>
//                 <tr>
//                   <td>TERRACE</td>
//                 </tr>
//                 <tr>
//                   <td>SITOUT</td>
//                 </tr>
//                 <tr>
//                   <td>PODIUM GARDEN</td>
//                 </tr>
//               </tbody>
//             </Table>
//           )}

// <Modal.Body>
  
//   {modalContent === "rateApprovalDisplay" && (
//     <Form>
//       <Row>
//         <Col sm={6}>
//           <Form.Group controlId="formProjectName">
//             <Form.Label>Project Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter Project Name" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formWing">
//             <Form.Label>Wing</Form.Label>
//             <Form.Control type="text" placeholder="Enter Wing" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formFlatNo">
//             <Form.Label>Flat No.</Form.Label>
//             <Form.Control type="text" placeholder="Enter Flat No." />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formType">
//             <Form.Label>Type</Form.Label>
//             <Form.Control type="text" placeholder="Enter Type" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formDate">
//             <Form.Label>Date</Form.Label>
//             <Form.Control type="date" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formFacing">
//             <Form.Label>FACING (Direction)</Form.Label>
//             <Form.Control type="text" placeholder="Enter Facing Direction" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formBrokerName">
//             <Form.Label>BROKER NAME (IF ANY)</Form.Label>
//             <Form.Control type="text" placeholder="Enter Broker Name" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formBasicRate">
//             <Form.Label>BASIC RATE</Form.Label>
//             <Form.Control type="number" placeholder="Enter Basic Rate" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formPremiumFacing">
//             <Form.Label>PREMIUM FACING</Form.Label>
//             <Form.Control type="number" placeholder="Enter Premium Facing" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formFloorRise">
//             <Form.Label>FLOOR RISE</Form.Label>
//             <Form.Control type="number" placeholder="Enter Floor Rise" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formDiscount">
//             <Form.Label>DISCOUNT</Form.Label>
//             <Form.Control type="number" placeholder="Enter Discount" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formAddDiscRef">
//             <Form.Label>ADD DISC. REF. BY</Form.Label>
//             <Form.Control type="text" placeholder="Enter Reference" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={12}>
//           <Form.Group controlId="formRemark">
//             <Form.Label>REMARK</Form.Label>
//             <Form.Control as="textarea" rows={2} placeholder="Enter Remark" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formInfrastructure">
//             <Form.Label>INFRASTRUCTURE</Form.Label>
//             <Form.Control type="text" placeholder="Enter Infrastructure Details" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formTotalConsideration">
//             <Form.Label>TOTAL CONSIDERATION</Form.Label>
//             <Form.Control type="number" placeholder="Enter Total Consideration" />
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col sm={6}>
//           <Form.Group controlId="formBrokerageAmount">
//             <Form.Label>BROKERAGE AMOUNT</Form.Label>
//             <Form.Control type="number" placeholder="Enter Brokerage Amount" />
//           </Form.Group>
//         </Col>
//       </Row>
//     </Form>
//   )}

 
//   {modalContent === "packageDisplay" && (
//     <Form>
//       <Row>
//         <Col sm={6}>
//           <Form.Group controlId="formPackage">
//             <Form.Label>Package</Form.Label>
//             <Form.Control type="text" placeholder="Enter Package Details" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formCarpetArea">
//             <Form.Label>Carpet Area</Form.Label>
//             <Form.Control type="number" placeholder="Enter Carpet Area" />
//           </Form.Group>
//         </Col>
//       </Row>
//     </Form>
//   )}

 
//   {modalContent === "agreementDisplay" && (
//     <Form>
//       <Row>
//         <Col sm={6}>
//           <Form.Group controlId="formAgreementValue">
//             <Form.Label>Agreement Value</Form.Label>
//             <Form.Control type="number" placeholder="Enter Agreement Value" />
//           </Form.Group>
//         </Col>
//         <Col sm={6}>
//           <Form.Group controlId="formAgreementCarpetArea">
//             <Form.Label>Agreement Carpet Area</Form.Label>
//             <Form.Control type="number" placeholder="Enter Carpet Area" />
//           </Form.Group>
//         </Col>
//       </Row>
//     </Form>
//   )}
// </Modal.Body>


//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           {modalContent === "visit" && <Button variant="primary">Submit</Button>}
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Template;



// import React, { useState } from "react";
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// const Templates = () => {
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (cardId, section, title) => {
//     setModalContent({ cardId, section, title });
//   };

//   const closeModal = () => {
//     setModalContent(null);
//   };

//   const cards = [
//     { id: 1, title: "Card 1", content: "This is the first card.", inputs: ["Name", "Age", "Address"], tableHeaders: ["ID", "Name", "Age"], tableData: [[1, "John", 25], [2, "Doe", 30]] },
//     { id: 2, title: "Card 2", content: "This is the second card.", inputs: ["Company", "Position", "Experience"], tableHeaders: ["Employee ID", "Company", "Position"], tableData: [[101, "ABC Corp", "Manager"], [102, "XYZ Ltd", "Developer"]] },
//     { id: 3, title: "Card 3", content: "This is the third card.", inputs: ["Course", "University", "Graduation Year"], tableHeaders: ["Roll No", "Course", "University"], tableData: [[201, "B.Tech", "MIT"], [202, "MBA", "Harvard"]] },
//     { id: 4, title: "Card 4", content: "This is the fourth card.", inputs: ["Project Name", "Technology Used", "Duration"], tableHeaders: ["Project ID", "Project Name", "Technology"], tableData: [[301, "AI Model", "Python"], [302, "Web App", "React"]] },
//     { id: 5, title: "Card 5", content: "This is the fifth card.", inputs: ["Product Name", "Category", "Price"], tableHeaders: ["Product ID", "Product Name", "Price"], tableData: [[401, "Laptop", "$1200"], [402, "Phone", "$800"]] },
//   ];

//   return (
//     <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
//       {cards.map((card, index) => (
//         <div key={card.id} className="bg-white shadow-lg rounded-xl p-4 text-center border w-64">
//           <h2 className="text-xl font-semibold mb-2 text-blue-700">{card.title}</h2>
//           <p className="text-gray-600 mb-4">{card.content}</p>
//           {index !== 0 && (
//             <div className="d-flex flex-column align-items-center gap-2 mt-3">
//               <Button variant="contained" color="primary" onClick={() => openModal(card.id, "form", card.title)}>Form</Button>
//               <Button variant="contained" color="primary" onClick={() => openModal(card.id, "display", card.title)}>Display</Button>
//               <Button variant="contained" color="primary" onClick={() => openModal(card.id, "pdf", card.title)}>PDF</Button>
//             </div>
//           )}
//         </div>
//       ))}
//       <Dialog open={Boolean(modalContent)} onClose={closeModal} maxWidth="md" fullWidth>
//         {modalContent && (
//           <>
//             <DialogTitle>{modalContent.title} - {modalContent.section.toUpperCase()} Section</DialogTitle>
//             <DialogContent>
//               {modalContent.section === "form" ? (
//                 <>
//                   {cards.find(card => card.id === modalContent.cardId)?.inputs.map((inputLabel, idx) => (
//                     <TextField key={idx} label={inputLabel} fullWidth margin="dense" />
//                   ))}
//                 </>
//               ) : modalContent.section === "display" ? (
//                 <TableContainer component={Paper}>
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         {cards.find(card => card.id === modalContent.cardId)?.tableHeaders.map((header, idx) => (
//                           <TableCell key={idx}><b>{header}</b></TableCell>
//                         ))}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {cards.find(card => card.id === modalContent.cardId)?.tableData.map((row, idx) => (
//                         <TableRow key={idx}>
//                           {row.map((cell, cellIdx) => (
//                             <TableCell key={cellIdx}>{cell}</TableCell>
//                           ))}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               ) : modalContent.section === "pdf" ? (
//                 <p>PDF content will be displayed here.</p>
//               ) : null}
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={closeModal} color="secondary" variant="contained">Close</Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>
//     </div>
//   );
// };

// export default Templates;



// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// const Templates = () => {
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (cardId, section, title) => {
//     setModalContent({ cardId, section, title });
//   };

//   const closeModal = () => {
//     setModalContent(null);
//   };

//   const cards = [
//     { 
//       id: 1, 
//       title: "At the time of Visit", 
//       content: "Generate payment details and schedule document for site visits.", 
//       inputs: ["Name", "Age", "Address"], 
//       tableHeaders: ["ID", "Name", "Age"], 
//       tableData: [[1, "John", 25], [2, "Doe", 30]] 
//     },
//     { id: 2, title: "At The Time of Booking", content: "Generate booking-related documentation and payment details.", inputs: ["Company", "Position", "Experience"], tableHeaders: ["Employee ID", "Company", "Position"], tableData: [[101, "ABC Corp", "Manager"], [102, "XYZ Ltd", "Developer"]] },
//     { id: 3, title: "Rate Approval Form", content: "TGenerate rate approval documentation for property transactions.", inputs: ["Course", "University", "Graduation Year"], tableHeaders: ["Roll No", "Course", "University"], tableData: [[201, "B.Tech", "MIT"], [202, "MBA", "Harvard"]] },
//     { id: 4, title: "Negotiation Calculation (PACKAGE WISE)", content: "Generate and manage package-based negotiation calculations.", inputs: ["Project Name", "Technology Used", "Duration"], tableHeaders: ["Project ID", "Project Name", "Technology"], tableData: [[301, "AI Model", "Python"], [302, "Web App", "React"]] },
//     { id: 5, title: "Negotiation Calculation (AGREEMENT VALUE WISE)", content: "Generate and manage agreement value-based negotiation calculations.", inputs: ["Product Name", "Category", "Price"], tableHeaders: ["Product ID", "Product Name", "Price"], tableData: [[401, "Laptop", "$1200"], [402, "Phone", "$800"]] },
//   ];

//   return (
//     <div className="p-4">
//       <h6 className="text-2xl font-bold mb-6 text-blue-700">Sales / Template Management</h6>

//       {/* Cards Container - Left-aligned */}
//       <div className="d-flex flex-wrap gap-3">
//         {cards.map((card, index) => (
//           <div key={card.id} className="bg-white shadow-lg rounded-xl p-4 border w-64">
//             <h2 className="text-xl font-semibold mb-2 text-blue-700">{card.title}</h2>
//             <p className="text-gray-600 mb-4">{card.content}</p>

//             {/* First card has a "Download PDF" button */}
//             {index === 0 ? (
//               <Button variant="contained" color="secondary" fullWidth>
//                 Download PDF
//               </Button>
//             ) : (
//               <div className="d-flex justify-content-between mt-3">
//                 <Button variant="contained"  className="m-3" color="primary" onClick={() => openModal(card.id, "form", card.title)}>Form</Button>
//                 <Button variant="contained" className="m-3"  color="primary" onClick={() => openModal(card.id, "display", card.title)}>Display</Button>
//                 <Button variant="contained" className="m-3"  color="primary" onClick={() => openModal(card.id, "pdf", card.title)}>PDF</Button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Modal for Forms, Tables, and PDFs */}
//       <Dialog open={Boolean(modalContent)} onClose={closeModal} maxWidth="sm" fullWidth>
//         {modalContent && (
//           <>
//             <DialogTitle>{modalContent.title} - {modalContent.section.toUpperCase()} Section</DialogTitle>
//             <DialogContent>
//               {modalContent.section === "form" ? (
//                 <>
//                   {cards.find(card => card.id === modalContent.cardId)?.inputs.map((inputLabel, idx) => (
//                     <TextField key={idx} label={inputLabel} fullWidth margin="dense" />
//                   ))}
//                 </>
//               ) : modalContent.section === "display" ? (
//                 <TableContainer component={Paper}>
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         {cards.find(card => card.id === modalContent.cardId)?.tableHeaders.map((header, idx) => (
//                           <TableCell key={idx}><b>{header}</b></TableCell>
//                         ))}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {cards.find(card => card.id === modalContent.cardId)?.tableData.map((row, idx) => (
//                         <TableRow key={idx}>
//                           {row.map((cell, cellIdx) => (
//                             <TableCell key={cellIdx}>{cell}</TableCell>
//                           ))}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               ) : modalContent.section === "pdf" ? (
//                 <p>PDF content will be displayed here.</p>
//               ) : null}
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={closeModal} color="secondary" variant="contained">Close</Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>
//     </div>
//   );
// };

// export default Templates;



// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// const Templates = () => {
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (cardId, section, title) => {
//     setModalContent({ cardId, section, title });
//   };

//   const closeModal = () => {
//     setModalContent(null);
//   };

//   const cards = [
//     { 
//       id: 1, 
//       title: "At the time of Visit", 
//       content: "Generate payment details and schedule document for site visits.", 
//       inputs: ["Name", "Age", "Address"], 
//       tableHeaders: ["ID", "Name", "Age"], 
//       tableData: [[1, "John", 25], [2, "Doe", 30]] 
//     },
//     { id: 2, title: "At The Time of Booking", content: "Generate booking-related documentation and payment details.", inputs: ["Company", "Position", "Experience"], tableHeaders: ["Employee ID", "Company", "Position"], tableData: [[101, "ABC Corp", "Manager"], [102, "XYZ Ltd", "Developer"]] },
//     { id: 3, title: "Rate Approval Form", content: "Generate rate approval documentation for property transactions.", inputs: ["Course", "University", "Graduation Year"], tableHeaders: ["Roll No", "Course", "University"], tableData: [[201, "B.Tech", "MIT"], [202, "MBA", "Harvard"]] },
//     { id: 4, title: "Negotiation Calculation (PACKAGE WISE)", content: "Generate and manage package-based negotiation calculations.", inputs: ["Project Name", "Technology Used", "Duration"], tableHeaders: ["Project ID", "Project Name", "Technology"], tableData: [[301, "AI Model", "Python"], [302, "Web App", "React"]] },
//     { id: 5, title: "Negotiation Calculation (AGREEMENT VALUE WISE)", content: "Generate and manage agreement value-based negotiation calculations.", inputs: ["Product Name", "Category", "Price"], tableHeaders: ["Product ID", "Product Name", "Price"], tableData: [[401, "Laptop", "$1200"], [402, "Phone", "$800"]] },
//   ];

//   return (
//     <div className="p-4">
//       <h6 className="text-2xl font-bold mb-6 text-blue-700">Sales / Template Management</h6>

//       {/* Cards Container - Ensure 3 in first row, 2 in second */}
//       <div className="flex flex-wrap gap-4 justify-start">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`bg-white shadow-lg rounded-xl p-4 border ${
//               index < 3 ? "w-1/3" : "w-1/2"
//             }`}
//           >
//             <h2 className="text-xl font-semibold mb-2 text-blue-700">{card.title}</h2>
//             <p className="text-gray-600 mb-4">{card.content}</p>

//             {/* First card has a "Download PDF" button */}
//             {index === 0 ? (
//               <Button variant="contained" color="secondary" fullWidth>
//                 Download PDF
//               </Button>
//             ) : (
//               <div className="flex justify-between mt-3">
//                 <Button variant="contained" className="m-3" color="primary" onClick={() => openModal(card.id, "form", card.title)}>Form</Button>
//                 <Button variant="contained" className="m-3" color="primary" onClick={() => openModal(card.id, "display", card.title)}>Display</Button>
//                 <Button variant="contained" className="m-3" color="primary" onClick={() => openModal(card.id, "pdf", card.title)}>PDF</Button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Modal for Forms, Tables, and PDFs */}
//       <Dialog open={Boolean(modalContent)} onClose={closeModal} maxWidth="sm" fullWidth>
//         {modalContent && (
//           <>
//             <DialogTitle>{modalContent.title} - {modalContent.section.toUpperCase()} Section</DialogTitle>
//             <DialogContent>
//               {modalContent.section === "form" ? (
//                 <>
//                   {cards.find(card => card.id === modalContent.cardId)?.inputs.map((inputLabel, idx) => (
//                     <TextField key={idx} label={inputLabel} fullWidth margin="dense" />
//                   ))}
//                 </>
//               ) : modalContent.section === "display" ? (
//                 <TableContainer component={Paper}>
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         {cards.find(card => card.id === modalContent.cardId)?.tableHeaders.map((header, idx) => (
//                           <TableCell key={idx}><b>{header}</b></TableCell>
//                         ))}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {cards.find(card => card.id === modalContent.cardId)?.tableData.map((row, idx) => (
//                         <TableRow key={idx}>
//                           {row.map((cell, cellIdx) => (
//                             <TableCell key={cellIdx}>{cell}</TableCell>
//                           ))}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               ) : modalContent.section === "pdf" ? (
//                 <p>PDF content will be displayed here.</p>
//               ) : null}
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={closeModal} color="secondary" variant="contained">Close</Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>
//     </div>
//   );
// };

// export default Templates;


// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// const Templates = () => {
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (cardId, section, title) => {
//     setModalContent({ cardId, section, title });
//   };

//   const closeModal = () => {
//     setModalContent(null);
//   };

//   const cards = [
//     { id: 1, title: "At the time of Visit", content: "Generate payment details and schedule document for site visits." },
//     { id: 2, title: "At The Time of Booking", content: "Generate booking-related documentation and payment details." },
//     { id: 3, title: "Rate Approval Form", content: "Generate rate approval documentation for property transactions." },
//     { id: 4, title: "Negotiation Calculation (PACKAGE WISE)", content: "Generate and manage package-based negotiation calculations." },
//     { id: 5, title: "Negotiation Calculation (AGREEMENT VALUE WISE)", content: "Generate and manage agreement value-based negotiation calculations." },
//   ];

//   return (
//     <div className="p-4">
//       <h6 className="text-2xl font-bold mb-6 text-blue-700">Sales / Template Management</h6>

//       {/* Cards Container */}
//       <div className="d-flex flex-wrap gap-4">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`bg-white shadow-lg rounded-xl p-4 border ${index < 3 ? "w-30" : "w-45"}`}
//             style={{ flex: index < 3 ? "1 1 30%" : "1 1 45%" }}
//           >
//             <h2 className="text-xl font-semibold mb-2 text-blue-700">{card.title}</h2>
//             <p className="text-gray-600 mb-4">{card.content}</p>
//             <Button variant="contained" color="primary" fullWidth>
//               Open
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Templates;



// -----------------------------


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
import {TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography } from '@mui/material';
const templates = [
  // {
  //   id: 1,
  //   title: "At The Time of Visit",
  //   description: "Generate payment details and schedule document for site visits.",
  //   formtype: "visit",
  //   displayType: "visitDisplay",
  //   buttons: ["Form", "Display", "PDF"],
  // },
  {
    id: 1,
    title: (
      <div style={{ 
        backgroundColor: '#0056b3', 
        padding: '15px', 
        borderRadius: '6px', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: 'white', 
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px'
      }}>
        At The Time of Visit
      </div>
    ),
    description: "Generate payment details and schedule document for site visits.",
    formtype: "visit",
    displayType: "visitDisplay",
    buttons: ["Form", "Display", "PDF"],
  }
,  
  // {
  //   id: 2,
  //   title: "At The Time of Booking",
  //   description: "Generate booking-related documentation and payment details.",
  //   formtype: "visit",
  //   displayType: "visitDisplay",
  //   buttons: ["Form", "Display", "PDF"],
  // },
  {
    id: 2,
    title: (
      <div style={{ 
        backgroundColor: '#0056b3', 
        padding: '15px', 
        borderRadius: '6px', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: 'white', 
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px'
      }}>
        At The Time of Booking
      </div>
    ),
    description: "Generate booking-related documentation and payment details.",
    formtype: "visit",
    displayType: "visitDisplay",
    buttons: ["Form", "Display", "PDF"],
  }
,  
  // {
  //   id: 3,
  //   title: "Rate Approval Form",
  //   description: "Generate rate approval documentation for property transactions.",
  //   formtype: "RateDisplay",
  
  //   displayType: "rateApprovalDisplay",
  //   buttons: ["Form", "Display", "PDF"],
  // },

  {
    id: 3,
    title: (
      <div style={{ 
        backgroundColor: '#0056b3', 
        padding: '15px', 
        borderRadius: '6px', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: 'white', 
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px'
      }}>
        Rate Approval Form
      </div>
    ),
    description: "Generate rate approval documentation for property transactions.",
    formtype: "RateDisplay",
    displayType: "rateApprovalDisplay",
    buttons: ["Form", "Display", "PDF"],
  }
,  
  // {
  //   id: 4,
  //   title: "Negotiation Calculation (PACKAGE WISE)",
  //   description: "Generate package-wise negotiation calculations and agreements.",
  //   formtype: "Package",
  //   displayType: "packageDisplay",
  //   buttons: ["Form", "Display", "PDF"],
  // },
  {
    id: 4,
    title: (
      <div style={{ 
        backgroundColor: '#0056b3', 
        padding: '15px', 
        borderRadius: '6px', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px'
      }}>
        Negotiation Calculation (PACKAGE WISE)
      </div>
    ),
    description: "Generate package-wise negotiation calculations and agreements.",
    formtype: "Package",
    displayType: "packageDisplay",
    buttons: ["Form", "Display", "PDF"],
  },
  
 
  // {
  //   id: 5,
  //   title: "Negotiation Calculation (AGREEMENT VALUE WISE)",
  //   description: "Generate agreement value-based negotiation calculations.",
  //   formtype: "Agreement",
  //   displayType: "agreementDisplay",
  //   buttons: ["Form", "Display", "PDF"],
  // },
  {
    id: 5,
    title: (
      <div style={{ 
        backgroundColor: '#0056b3', 
        padding: '15px', 
        borderRadius: '6px', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: 'white', // Dark text for better contrast
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px'
      }}>
        Negotiation Calculation (AGREEMENT VALUE WISE)
      </div>
    ),
    description: "Generate agreement value-based negotiation calculations.",
    formtype: "Agreement",
    displayType: "agreementDisplay",
    buttons: ["Form", "Display", "PDF"],
  }
  
];

const projectData = {}; // Or fetch it from a state or API

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
    console.log("Opening modal with content:", content);
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



  
// const modalTitles = {
//   visit: "Booking Form",
//   visitDisplay: "At The Time of Booking - Display",
//   rateApprovalDisplay: "Rate Approval Form",
//   packageDisplay: "Negotiation Calculation (PACKAGE WISE)",
//   agreementDisplay: "Negotiation Calculation (AGREEMENT VALUE WISE)",
//   PDF: "Download PDF",
// };

// const modalTitles = {
//   visit: (
//     <div style={{
//       backgroundColor: '#28a745',
//       padding: '10px',
//       borderRadius: '4px',
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       textAlign: 'center',
//       width: '100%',  // Ensure the background spans the whole width
//     }}>
//       Booking Form
//     </div>
//   ),
//   visitDisplay: (
//     <div style={{
//       backgroundColor: '#17a2b8',
//       padding: '10px',
//       borderRadius: '4px',
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       textAlign: 'center',
//       width: '100%',  // Ensure the background spans the whole width
//     }}>
//       At The Time of Booking - Display
//     </div>
//   ),
//   rateApprovalDisplay: (
//     <div style={{
//       backgroundColor: '#ffc107',
//       padding: '10px',
//       borderRadius: '4px',
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       textAlign: 'center',
//       width: '100%',  // Ensure the background spans the whole width
//     }}>
//       Rate Approval Form
//     </div>
//   ),
//   packageDisplay: (
//     <div style={{
//       backgroundColor: '#0056b3',
//       padding: '10px',
//       borderRadius: '4px',
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       textAlign: 'center',
//       width: '100%',  // Ensure the background spans the whole width
//     }}>
//       Negotiation Calculation (PACKAGE WISE)
//     </div>
//   ),
//   agreementDisplay: (
//     <div style={{
//       backgroundColor: '#f8f9fa',
//       padding: '10px',
//       borderRadius: '4px',
//       color: '#212529',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       textAlign: 'center',
//       width: '100%',  // Ensure the background spans the whole width
//     }}>
//       Negotiation Calculation (AGREEMENT VALUE WISE)
//     </div>
//   ),
//   PDF: (
//     <div style={{
//       backgroundColor: '#6c757d',
//       padding: '10px',
//       borderRadius: '4px',
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       textAlign: 'center',
//       width: '100%',  // Ensure the background spans the whole width
//     }}>
//       Download PDF
//     </div>
//   ),
// };

const modalTitles = {
  visit: (
    <div style={{
      backgroundColor: '#007bff', // Bluish color
      padding: '10px',
      borderRadius: '4px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      width: '100%',
    }}>
      Booking Form
    </div>
  ),
  visitDisplay: (
    <div style={{
      backgroundColor: '#0056b3', // Bluish color
      padding: '10px',
      borderRadius: '4px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      width: '100%',
    }}>
      At The Time of Booking - Display
    </div>
  ),
  rateApprovalDisplay: (
    <div style={{
      backgroundColor: '#004085', // Bluish color
      padding: '10px',
      borderRadius: '4px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      width: '100%',
    }}>
      Rate Approval Form
    </div>
  ),
  packageDisplay: (
    <div style={{
      backgroundColor: '#003366', // Bluish color
      padding: '10px',
      borderRadius: '4px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      width: '100%',
    }}>
      Negotiation Calculation (PACKAGE WISE)
    </div>
  ),
  agreementDisplay: (
    <div style={{
      backgroundColor: '#002244', // Bluish color
      padding: '10px',
      borderRadius: '4px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      width: '100%',
    }}>
      Negotiation Calculation (AGREEMENT VALUE WISE)
    </div>
  ),
  PDF: (
    <div style={{
      backgroundColor: '#1d3e6a', // Bluish color
      padding: '10px',
      borderRadius: '4px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      width: '100%',
    }}>
      Download PDF
    </div>
  ),
};


const selectedTemplate = templates.find(
  (template) => template.displayType === modalContent || template.formtype === modalContent
);


const modalTitle = selectedTemplate ? modalTitles[selectedTemplate.displayType] || "Form" : "Form";

  return (
    <div className="container mt-4">
      <h2>Sales Templates</h2>
      
      

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


     
      <Modal show={openModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
         
         
<Modal.Title>{modalTitle}</Modal.Title>

        </Modal.Header>
        <Modal.Body>
         
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

        
{modalContent === "visitDisplay" && (
 

//   <Table bordered className="visit-table">
//   <tbody>
//     <tr>
//       <td className="fw-bold">PROJECT NAME</td>
//       <td></td> {/* Empty column */}
//       <td className="fw-bold">DATE:</td>
//     </tr>

//     <tr>
//       <td className="fw-bold">MAHARERA NO</td>
//       <td></td> {/* Empty column */}
//       <td></td> {/* Empty column */}
//     </tr>

//     <tr>
//       <td className="fw-bold">Firm Name / PROJECT NAME / WING NO E / UNIT NO 208 - fn/P</td>
//       <td></td> {/* Empty column */}
//       <td className="fw-bold">DATE:</td>
//     </tr>

//     <tr>
//       <td>UNIT No</td>
//       <td></td> {/* Empty column */}
//       <td className="fw-bold">WING:</td>
//     </tr>

//     <tr>
//       <td>CARPET</td>
//       <td></td> {/* Empty column */}
//       <td className="fw-bold">UNIT TYPE:</td>
//     </tr>

//     <tr>
//       <td>OPEN/ENCLOSED BALCONY AS SANCTIONED</td>
//       <td></td> {/* Empty column */}
//       <td></td> {/* Empty column */}
//     </tr>

//     <tr>
//       <td>TERRACE</td>
//       <td className="fw-bold">ATT. TERRACE CARPET AREA</td>
//       <td></td> {/* Empty column */}
//     </tr>

//     <tr>
//       <td>PODIUM GARDEN</td>
//       <td></td> {/* Empty column */}
//       <td></td> {/* Empty column */}
//     </tr>

//     <tr>
//       <td>PORCH</td>
//       <td></td> {/* Empty column */}
//       <td></td> {/* Empty column */}
//     </tr>

//     <tr>
//       <td>TOP TERRACE</td>
//       <td></td> {/* Empty column */}
//       <td></td> {/* Empty column */}
//     </tr>
//   </tbody>
// </Table>

<Table bordered className="visit-table">
  <tbody>
    <tr>
      <td className="label-cell">PROJECT NAME</td>
      <td className="value-cell"></td> 
      <td className="label-cell"></td>
    </tr>

    <tr>
      <td className="label-cell">MAHARERA NO</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Firm Name / PROJECT NAME / WING NO E / UNIT NO 208 - fn/P</td>
      <td className="value-cell"></td> 
      <td className="label-cell">Date :</td>
    </tr>

    <tr>
      <td className="label-cell">UNIT No</td>
      <td className="value-cell"></td> 
      <td className="label-cell">WING:</td>
    </tr>

    <tr>
      <td className="label-cell">CARPET</td>
      <td className="value-cell"></td> 
      <td className="label-cell">UNIT TYPE:</td>
    </tr>

    <tr>
      <td className="label-cell">OPEN/ENCLOSED BALCONY AS SANCTIONED</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">TERRACE</td>
      <td className="label-cell">ATT. TERRACE CARPET AREA</td>
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">SITOUT</td>
      <td className="value-cell">	BALCONY AREA/ SITOUR CARPET AREA</td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">PODIUM GARDEN</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">PORCH</td>
      <td className="value-cell">	PORCH AREA</td> 
      <td className="value-cell"></td> 
    </tr>

    
    <tr>
      <td className="label-cell">TOP TERRACE</td>
      <td className="value-cell">TOP TERRACE CARPET AREA</td> 
      <td className="value-cell"></td> 
    </tr>
    
    <tr>
      <td className="label-cell">TOTAL USABLE AREA</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    
    <tr>
      <td className="label-cell">Agreement value</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    
    <tr>
      <td className="label-cell">STAMP DUTY (AS APPLICABLE)</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    
    <tr>
      <td className="label-cell">REGISTRATION (AS APPLICABLE)</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    
    <tr>
      <td className="label-cell">GST @%</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Grand Total</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    <tr>
      <td className="label-cell">This Cost Sheet is valid till (15 days from the date of booking)-</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Booking Cheque Favouring -</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Taxes Cheque Favouring -</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">STAMP DUTY AND REGISTRATION CHARGES TO BE PAID IMM</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Agreement should be registered within 21 days from the date of Ap</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Prior to agreement, the client should submit the loan sanction lette</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    <tr>
      <td className="label-cell">Execution of agreement will be subject to realisation of the payme</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">TDS (As Applicable)</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    <tr>
      <td className="label-cell">Government Charges/taxes are subject to change & would be ap</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    <tr>
      <td className="label-cell">Lumpsum Advance Maintenance Deposit shall be collected at the </td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    <tr>
      <td className="label-cell">Rates are subject to change without prior notice.</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Govt taxes to be paid by the buyer as per prevailing rates.</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>


    <tr>
      <td className="label-cell">The above mentioned cost is based on the tentative area, the exac</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">This is purely conceptual & not a legal offering Company reserves</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Source of Enquiry</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">Agent Agent/Broker Name:</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>

    <tr>
      <td className="label-cell">If any case, for any reason the unit is cancelled after registration, t</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
    
    <tr>
      <td className="label-cell">1st Applicant Name:</td>
      <td className="value-cell"></td> 
      <td className="value-cell">Sign :</td> 
    </tr>
    
    <tr>
      <td className="label-cell">Manager Name:</td>
      <td className="value-cell"></td> 
      <td className="value-cell">Sign :</td> 
    </tr>
    <tr>
      <td className="label-cell">***We are concerned about accuracy and timely payment, so custo</td>
      <td className="value-cell"></td> 
      <td className="value-cell"></td> 
    </tr>
  </tbody>
</Table>

)}


<Modal.Body>
  

  
{modalContent === "rateApprovalDisplay" && (
  <div style={{ maxWidth: '80%', margin: '0 auto' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h6>RATE APPROVAL FORM (FOR OFFICE USE ONLY)</h6>
      <button style={{ border: 'none', background: 'transparent', fontSize: '24px' }} onClick={() => {/* close modal function */}}>×</button>
    </div>

    {/* <Table bordered style={{ width: '100%' }}>
      <tbody>
       
        <tr>
          <td style={{ fontSize: '0.9rem', width: '30%' }}>PROJECT NAME</td>
          <td style={{ width: '25%' }}>{}</td>
          
          <td style={{ fontSize: '0.9rem', width: '30%' }}>DATE</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '30%' }}>DOB</td>
          <td style={{ width: '25%' }}>{}</td>
          
          <td style={{ fontSize: '0.9rem', width: '30%' }}>AGE</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>OCCUPATION</td>
          <td style={{ width: '25%' }}>{}</td>
          
          <td style={{ fontSize: '0.9rem', width: '25%' }}>ADDRESS</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>

        
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>ANNIVERSARY</td>
          <td style={{ width: '25%' }}>{}</td>
          
          <td style={{ fontSize: '0.9rem', width: '25%' }}>EMAIL</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>MOBILE NO.</td>
          <td style={{ width: '25%' }}>{}</td>
          
          <td style={{ fontSize: '0.9rem', width: '25%' }}>ALTERNATE MOBILE NO.</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>WHATSAPP NO.</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>TO</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>COMPANY NAME</td>
          <td style={{ width: '25%' }}>{}</td>
          
          <td style={{ fontSize: '0.9rem', width: '25%' }}>ADDRESS</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>SIR</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}></td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>

        
        <tr>
          <td style={{ fontSize: '0.9rem', width: '50%' }} colSpan="2">
            I/We hereby intend to book a flat in your project “PROJECT NAME” at “ ”
          </td>
          <td style={{ width: '25%' }}></td>
          <td></td>
        </tr>

        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>BUILDING (Wing)</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>BASIC RATE</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>PREMIUM FACING</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>TYPE</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>FLOOR RISE</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>FACING (direction)</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>DISCOUNT</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>FLAT CARPET AREA (RERA Carpet)</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>

        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>ADD DISC. REF. BY</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>ATT. TERRACE CARPET AREA</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>


        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>Infrastructure</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>PORCH AREA</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>

        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>TOP TERRACE CARPET AREA</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>SUPER BUILTUP</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>

        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>TOTAL CONSIDERATION</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>BROKER NAME (IF ANY)</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>


        <tr>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>BROKERAGE AMOUNT</td>
          <td style={{ width: '25%' }}>{}</td>
          <td style={{ fontSize: '0.9rem', width: '25%' }}>SOURCE OF ENQUIRY</td>
          <td style={{ width: '25%' }}>{}</td>
        </tr>

       
<tr>
  <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '3px', width: '15%', borderRight: '1px solid black', borderBottom: '1px solid black' }}>
    GM
  </td>
  <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '3px', width: '15%', borderRight: '1px solid black', borderBottom: '1px solid black' }}>
    VP
  </td>
  <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '3px', width: '15%', borderRight: '1px solid black', borderBottom: '1px solid black' }}>
    CRM
  </td>
  <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '3px', width: '15%', borderRight: '1px solid black', borderBottom: '1px solid black' }}>
    A/C Dept
  </td>
  <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '3px', width: '15%', borderBottom: '1px solid black' }}>
    MD
  </td>
</tr>

<tr>
  <td style={{ padding: '20px 0', borderRight: '1px solid black' }}></td> 
  <td style={{ padding: '20px 0', borderRight: '1px solid black' }}></td> 
  <td style={{ padding: '20px 0', borderRight: '1px solid black' }}></td> 
  <td style={{ padding: '20px 0', borderRight: '1px solid black' }}></td> 
  <td style={{ padding: '20px 0' }}></td> 
</tr>

<tr>
  <td colSpan="5" style={{ padding: '20px 0' }}></td> 
</tr>



      </tbody>
    </Table> */}

<Table bordered style={{ width: '100%' }}>
  <tbody>
    {/* Heading */}
    <tr>
      <td colSpan="4" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>PROJECT NAME</td>
    </tr>

    {/* From Section */}
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>From :</td>
      <td style={{ width: '25%' }}>{projectData?.from || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>Date :</td>
      <td style={{ width: '25%' }}>{projectData?.date || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>NAME 1:</td>
      <td style={{ width: '25%' }}>{projectData?.name1 || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>DOB:</td>
      <td style={{ width: '25%' }}>{projectData?.dob || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>AGE:</td>
      <td style={{ width: '25%' }}>{projectData?.age || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>PAN 1:</td>
      <td style={{ width: '25%' }}>{projectData?.pan1 || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>OCCUPATION:</td>
      <td style={{ width: '25%' }}>{projectData?.occupation || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>ADDRESS:</td>
      <td style={{ width: '25%' }}>{projectData?.address || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>CURRENT ADDRESS:</td>
      <td style={{ width: '25%' }}>{projectData?.currentAddress || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>ANNIVERSARY:</td>
      <td style={{ width: '25%' }}>{projectData?.anniversary || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>Email:</td>
      <td style={{ width: '25%' }}>{projectData?.email || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>MOBILE NO.:</td>
      <td style={{ width: '25%' }}>{projectData?.mobile || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>ALTERNATE MOBILE NO.:</td>
      <td style={{ width: '25%' }}>{projectData?.altMobile || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>WHATSAPP NO.:</td>
      <td style={{ width: '25%' }}>{projectData?.whatsapp || ''}</td>
    </tr>

    {/* Space */}
    <tr><td colSpan="4" style={{ height: '10px' }}></td></tr>

    {/* To Section */}
    <tr>
      <td colSpan="4" style={{ fontWeight: 'bold', fontSize: '1rem' }}>To</td>
    </tr>
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>Company Name:</td>
      <td style={{ width: '25%' }}>{projectData?.companyName || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>Address:</td>
      <td style={{ width: '25%' }}>{projectData?.companyAddress || ''}</td>
    </tr>

<tr>
  <td style={{fontSize:'0.9rem', width :"30%"}}>Sir</td>
</tr>
    <tr>
      <td colSpan="4" style={{ fontSize: '0.9rem' }}>
         I/We hereby intend to book a flat in your project “PROJECT NAME” at “{projectData?.projectLocation || ''}”
      </td>
    </tr>

    {/* Agreement Details Heading */}
    <tr>
      <td colSpan="4" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>AGREEMENT DETAILS</td>
    </tr>

    {/* Agreement Details Fields */}
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>BUILDING (Wing):</td>
      <td style={{ width: '25%' }}>{projectData?.building || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>BASIC RATE:</td>
      <td style={{ width: '25%' }}>{projectData?.basicRate || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>FLAT NO.:</td>
      <td style={{ width: '25%' }}>{projectData?.flatNo || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>PREMIUM FACING:</td>
      <td style={{ width: '25%' }}>{projectData?.premiumFacing || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>FACING(direction)</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>DISCOUNT</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>FLAT CARPET AREA(RERA Carpet Ar)</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>ADD DISC. REF. BY</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>ATT. TERRACE CARPET AREA</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>REMARK</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>BALCONY AREA/ SITOUR CARPET A</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>INFRASTRUCTURE</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>


    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>PORCH AREA</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}></td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>TOP TERRACE CARPET AREA</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>REMARK</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>SUPER BUILTUP</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>TOTAL CONSIDERATION</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>

    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>BROKER NAME (IF ANY)</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>BROKERAGE AMOUNT</td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>
    <tr>
      <td style={{ fontSize: '0.9rem', width: '30%' }}>SOURCE OF ENQUIRY</td>
      <td style={{ width: '25%' }}>{projectData?.type || ''}</td>
      <td style={{ fontSize: '0.9rem', width: '30%' }}></td>
      <td style={{ width: '25%' }}>{projectData?.floorRise || ''}</td>
    </tr>

<tr>
  <td>GM</td>
  <td>VP</td>
  <td>CRM</td>
  <td>A/C Dept</td>
  <td>MD.</td>
</tr>
  </tbody>
</Table>


  </div>
)}








{modalContent === "RateDisplay" && (
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
        <Form.Group controlId="formDate">
          <Form.Label>BROKER NAME (IF ANY)</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group controlId="formFacing">
          <Form.Label>BASIC RATE</Form.Label>
          <Form.Control type="text" placeholder="Enter Facing Direction" />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col sm={6}>
        <Form.Group controlId="formDate">
          <Form.Label>PREMIUM FACING</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group controlId="formFacing">
          <Form.Label>FLOOR RISE</Form.Label>
          <Form.Control type="text" placeholder="Enter Facing Direction" />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col sm={6}>
        <Form.Group controlId="formDate">
          <Form.Label>PDISCOUNT</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group controlId="formFacing">
          <Form.Label>ADD DISC. REF. BY</Form.Label>
          <Form.Control type="text" placeholder="Enter Facing Direction" />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col sm={6}>
        <Form.Group controlId="formDate">
          <Form.Label>REMARK</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group controlId="formFacing">
          <Form.Label>INFRASTRUCTURE</Form.Label>
          <Form.Control type="text" placeholder="Enter Facing Direction" />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col sm={6}>
        <Form.Group controlId="formDate">
          <Form.Label>TOTAL CONSIDERATION</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group controlId="formFacing">
          <Form.Label>BROKERAGE AMOUNT</Form.Label>
          <Form.Control type="text" placeholder="Enter Facing Direction" />
        </Form.Group>
      </Col>
    </Row>
  </Form>
)}




{modalContent === "packageDisplay" && (
  <>
    
   
     <TableContainer component={Paper} sx={{ boxShadow: 8 }}>
     
      {/* Table Heading with Background Color */}
      <div style={{ backgroundColor: '#007BFF', padding: '10px', borderRadius: '4px', marginBottom: '20px' }}>
        <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }}>
          Negotiation Calculation (Package Wise)
        </Typography>
      </div>
      <Table bordered hover responsive>
        <TableHead style={{ backgroundColor: '#0056b3', color: 'white' }}>
          <TableRow>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {[ 
            { label: 'Package' },
            { label: 'Registration' },
            { label: 'Balance' },
            { label: 'Tax Cut' },
            { label: 'Balance' },
            { label: 'Agreement Value' },
            { label: 'Stamp Duty' },
            { label: 'Registration Charges' },
            { label: 'GST' },
            { label: 'Total' },
            { label: 'Carpet Area' },
            { label: 'Saleable Area' },
            { label: 'Per Sq. Ft' },
          ].map((row, index) => (
            <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f1f8ff' : '#e0efff' }}>
              <TableCell style={{ width: '50%' }}>{row.label}</TableCell>
              <TableCell style={{ width: '50%' }}></TableCell> {/* Empty Column */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
)}

{modalContent === "Package" && (
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
  {modalContent === "Agreement" && (
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

{modalContent === "agreementDisplay" && (
    // <Form>
    //   <Row>
    //     <Col sm={6}>
    //       <Form.Group controlId="formAgreementValue">
    //         <Form.Label>Agreement Value</Form.Label>
    //         <Form.Control type="number" placeholder="Enter Agreement Value" />
    //       </Form.Group>
    //     </Col>
    //     <Col sm={6}>
    //       <Form.Group controlId="formAgreementCarpetArea">
    //         <Form.Label>Agreement Carpet Area</Form.Label>
    //         <Form.Control type="number" placeholder="Enter Carpet Area" />
    //       </Form.Group>
    //     </Col>
    //   </Row>
    // </Form>
    
    <TableContainer component={Paper} sx={{ boxShadow: 8 }}>
     
    {/* Table Heading with Background Color */}
    <div style={{ backgroundColor: '#007BFF', padding: '10px', borderRadius: '4px', marginBottom: '20px' }}>
      <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }}>
        Negotiation Calculation (Agreement Wise)
      </Typography>
    </div>
    <Table bordered hover responsive>
      <TableHead style={{ backgroundColor: '#0056b3', color: 'white' }}>
        <TableRow>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {[ 
          { label: 'Package' },
          { label: 'Registration' },
          { label: 'Balance' },
          { label: 'Tax Cut' },
          { label: 'Balance' },
          { label: 'Agreement Value' },
          { label: 'Stamp Duty' },
          { label: 'Registration Charges' },
          { label: 'GST' },
          { label: 'Total' },
          { label: 'Carpet Area' },
          { label: ' Area' },
          { label: 'Per Sq. Ft' },
        ].map((row, index) => (
          <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f1f8ff' : '#e0efff' }}>
            <TableCell style={{ width: '50%' }}>{row.label}</TableCell>
            <TableCell style={{ width: '50%' }}></TableCell> {/* Empty Column */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )}
</Modal.Body>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button className="btn btn-primary" variant="" onClick={handleCloseModal}>
           Submit
          </Button>
          {modalContent === "visit" && <Button variant="primary">Submit</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Template;
