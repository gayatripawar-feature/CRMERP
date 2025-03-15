

// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const Lostleadstable = ({ firms }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow sx={{ background: "#3621a9" }}>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ACTION</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>LAST FOLLOW UP</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>STATUS</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>REMARK</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NEXT FOLLOW UP</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ASSIGN TO</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>LEAD NO.</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NAME</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>MOBILE NO. / WHATSAPP NO.</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>YOU ARE LOOKING FOR?</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>EMAIL</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>SOURCE NAME</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {firms.map((firm, index) => (
//             <TableRow key={index}>
//               <TableCell>{firm.action}</TableCell>
//               <TableCell>{firm.lastFollowUp}</TableCell> {/* Last Follow Up */}
//               <TableCell>{firm.status}</TableCell> {/* Status */}
//               <TableCell>{firm.remark}</TableCell> {/* Remark */}
//               <TableCell>{firm.nextFollowUp}</TableCell> {/* Next Follow Up */}
//               <TableCell>{firm.assignTo}</TableCell> {/* Assign To */}
//               <TableCell>{firm.leadNo}</TableCell> {/* Lead No */}
//               <TableCell>{firm.name}</TableCell> {/* Name */}
//               <TableCell>{firm.mobileNo}</TableCell> {/* Mobile No / WhatsApp No */}
//               <TableCell>{firm.lookingFor}</TableCell> {/* You Are Looking For? */}
//               <TableCell>{firm.email}</TableCell> {/* Email */}
//               <TableCell>{firm.sourceName}</TableCell> {/* Source Name */}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Lostleadstable;





import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const firms = [
    {
      action: "Edit",
      lastFollowUp: "2025-03-10 15:30",
      status: "Follow Up",
      remark: "Interested in property",
      nextFollowUp: "2025-03-20 10:00",
      assignTo: "Shilpha Mewada",
      leadNo: "L12345",
      name: "John Doe",
      mobileNo: "+91 1234567890",
      lookingFor: "2 BHK",
      email: "john@example.com",
      sourceName: "Google Ads",
    },
    // You can add more firm data here
  ];

  

const Lostleadstable = ({ firms }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#3621a9" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>LAST FOLLOW UP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>STATUS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>REMARK</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NEXT FOLLOW UP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ASSIGN TO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>LEAD NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>MOBILE NO. / WHATSAPP NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>YOU ARE LOOKING FOR?</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>EMAIL</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>SOURCE NAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {firms.map((firm, index) => (
            <TableRow key={index}>
              {/* Action column with icons */}
              <TableCell>
                <IconButton color="primary" onClick={() => handleEdit(firm)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => handleWhatsApp(firm)}>
                  <WhatsAppIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => handleEmail(firm)}>
                  <EmailIcon />
                </IconButton>
              </TableCell>
              <TableCell>{firm.lastFollowUp}</TableCell> {/* Last Follow Up */}
              <TableCell>{firm.status}</TableCell> {/* Status */}
              <TableCell>{firm.remark}</TableCell> {/* Remark */}
              <TableCell>{firm.nextFollowUp}</TableCell> {/* Next Follow Up */}
              <TableCell>{firm.assignTo}</TableCell> {/* Assign To */}
              <TableCell>{firm.leadNo}</TableCell> {/* Lead No */}
              <TableCell>{firm.name}</TableCell> {/* Name */}
              <TableCell>{firm.mobileNo}</TableCell> {/* Mobile No / WhatsApp No */}
              <TableCell>{firm.lookingFor}</TableCell> {/* You Are Looking For? */}
              <TableCell>{firm.email}</TableCell> {/* Email */}
              <TableCell>{firm.sourceName}</TableCell> {/* Source Name */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Sample handlers for each action (these should be implemented as per your logic)
const handleEdit = (firm) => {
  console.log('Edit:', firm);
  // Implement edit logic
};

const handleWhatsApp = (firm) => {
  console.log('WhatsApp:', firm);
  // Implement WhatsApp logic (like opening WhatsApp or linking to a number)
};

const handleEmail = (firm) => {
  console.log('Email:', firm);
  // Implement Email logic (like opening email client)
};

export default Lostleadstable;
