
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





import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Typography, Modal ,Select, MenuItem,TextField,FormControl,InputLabel} from '@mui/material';
import { Link } from 'react-router-dom';

const Template = () => {
  const templates = [
    { id: 1, title: 'At The Time of Visit',formtype : 'visit' },
    { id: 2, title: 'At The Time of Booking' ,formtype:"Display"},
    { id: 3, title: 'Rate Approval Form' },
    { id: 4, title: 'Negotiation Calculation (PACKAGE WISE)' },
    { id: 5, title: 'Negotiation Calculation (AGREEMENT VALUE WISE)' },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const getDescription = (title) => {
    switch (title) {
      case 'At The Time of Booking':
        return 'Generate booking-related documentation and payment details.';
      case 'Rate Approval Form':
        return 'Generate rate approval documentation for property transactions.';
      case 'Negotiation Calculation (PACKAGE WISE)':
        return 'Generate and manage package-based negotiation calculations.';
      case 'Negotiation Calculation (AGREEMENT VALUE WISE)':
        return 'Generate and manage agreement value-based negotiation calculations.';
      default:
        return 'Generate payment details and schedule document for site visits.';
    }
  };

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true);
   
  if (content === 'visit') {
    setFormData({
      projectName: '',
      wing: '',
      flatNo: '',
      type: '',
      date: '',
    });
  }  else if (content === 'Display') {
    
    setFormData({
      projectName: formData.projectName,
      wing: formData.wing,
      flatNo: formData.flatNo,
      type: formData.type,
      date: formData.date,
    });
  }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };


  const [formData, setFormData] = useState({
    projectName: '',
    wing: '',
    flatNo: '',
    type: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Updates formData state dynamically
    });
  };

  const handleSave = () => {
    // You can perform any save logic here if needed
    toast.success('Form saved successfully!'); // Show success toast
  };

  const handleCancel = () => {
    setFormData({
      projectName: '',
      wing: '',
      flatNo: '',
      type: '',
      date: '',
    }); // Reset form data
  };



  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom className="pb-5">
        Sales Templates
      </Typography>
      <hr />

      {/* Grid to display 5 cards in a row */}
      <Grid container spacing={3} className="pt-5">
        {templates.map((template, index) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom className="text-primary">
                  {template.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {getDescription(template.title)}
                </Typography>

                {/* Conditionally render buttons based on card index */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
                  {/* Show "Download PDF" only on the first card */}
                  {index === 0 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ flex: 1 }}
                      onClick={() => handleOpenModal('PDF')}
                    >
                      Download PDF
                    </Button>
                  ) : (
                    <>
                      {/* Show Form, Display, and PDF buttons on remaining cards */}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOpenModal(template.formtype)}
                        fullWidth
                        sx={{ flex: 1 }}
                      >
                        Form
                      </Button>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOpenModal('Display')}
                        fullWidth
                        sx={{ flex: 1 }}
                      >
                        Display
                      </Button>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOpenModal('PDF')}
                        fullWidth
                        sx={{ flex: 1 }}
                      >
                        PDF
                      </Button>
                    </>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    

<Modal
  open={openModal}
  onClose={handleCloseModal}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',  // Full viewport height for centering
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  >
    <Box
      sx={{
        width: 400,
        padding: 3,
        backgroundColor: 'white',
        borderRadius: 2,  
        boxShadow: 3,     
        maxHeight: '80vh',  
        overflowY: 'auto',  
      }}
    >
      <Typography variant="h6" id="modal-title" gutterBottom>
   
      </Typography>

      

{modalContent === 'Form' && (





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
          <InputLabel></InputLabel>
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
          <InputLabel></InputLabel>
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
          <InputLabel></InputLabel>
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
          <InputLabel></InputLabel>
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










)}




{modalContent === 'Display' && (
  <Box sx={{ padding: 3 }}>
    <Typography variant="h6" gutterBottom>
      Display Content for {modalContent}
    </Typography>

    {/* Display Form Fields with Read-Only Content */}
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

      {/* First Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <FormControl fullWidth>
          <InputLabel>Project Name</InputLabel>
          <Typography variant="body1">{formData.projectName || "Not Selected"}</Typography>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Wing</InputLabel>
          <Typography variant="body1">{formData.wing || "Not Selected"}</Typography>
        </FormControl>
      </div>

      {/* Second Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <FormControl fullWidth>
          <InputLabel>Flat No</InputLabel>
          <Typography variant="body1">{formData.flatNo || "Not Selected"}</Typography>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Typography variant="body1">{formData.type || "Not Selected"}</Typography>
        </FormControl>
      </div>

      {/* Third Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.date || "Not Selected"}</Typography>
      </div>

      {/* Facing (Direction) Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.facing || "Not Selected"}</Typography>
      </div>

      {/* Broker Name and Basic Rate Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.brokerName || "Not Provided"}</Typography>

        <Typography variant="body1">{formData.basicRate || "Not Selected"}</Typography>
      </div>

      {/* Premium Facing, Floor Rise, Discount Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.premiumFacing || "Not Selected"}</Typography>

        <Typography variant="body1">{formData.floorRise || "Not Provided"}</Typography>
      </div>

      {/* Discount, Add Disc. Ref. By Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.discount || "Not Selected"}</Typography>

        <Typography variant="body1">{formData.addDiscRefBy || "Not Provided"}</Typography>
      </div>

      {/* Remark, Infrastructure, Total Consideration Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.remark || "Not Provided"}</Typography>

        <Typography variant="body1">{formData.infrastructure || "Not Provided"}</Typography>
      </div>

      {/* Total Consideration and Brokerage Amount Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">{formData.totalConsideration || "Not Selected"}</Typography>

        <Typography variant="body1">{formData.brokerageAmount || "Not Selected"}</Typography>
      </div>

      {/* Action Buttons */}
      <div style={{ textAlign: "right", marginTop: 24 }}>
        <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </div>
    </div>
  </Box>
)}


      {modalContent === 'PDF' && (
        <Box>
          <h4>PDF Content for {modalContent}</h4>
         
          <p>Download the PDF for {modalContent}.</p>
          <Button variant="contained" color="secondary">
            Download PDF
          </Button>
        </Box>
      )}

      
    </Box>
  </Box>
</Modal>

    </Box>
  );
};

export default Template;

