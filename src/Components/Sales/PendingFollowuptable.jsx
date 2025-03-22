// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';




// const  PendingFollowuptable= ({ firms }) => {

    
//   return (
//     <TableContainer component={Paper}>
//     <Table>
//       <TableHead>
       
//          <TableRow sx={{background:"#3621a9"}}>
         
//           <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>ACTION</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>LAST FOLLOW UP</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>STATUS</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>REMARK</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>NEXT FOLLOW UP</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ASSIGN TO</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>LEAD NO.</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>NAME</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>	MOBILE NO. / WHATSAPP NO.L</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>YOU ARE LOOKING FOR?</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>EMAIL</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>SOURCE NAME</TableCell>
        
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {firms.map((firm, index) => (
//           <TableRow key={index} >
//             {/* <TableCell >{firm.action}</TableCell> */}
//              <TableCell sx={{ padding: "15px" }}>
                           
            
            
            
//             <div style={{ display: "flex", gap: "5px" }}>
                  
//                   <Tooltip title="Edit" arrow>
//                     <IconButton 
//                       color="primary" 
//                       onClick={() => console.log("Edit clicked")} 
//                       sx={{
//                         backgroundColor: "primary.main", 
//                         padding: "5px",  
//                         borderRadius: "50%", 
//                         color: "white", 
//                         fontSize: "18px" 
//                       }}
//                     >
//                       <FaEdit />
//                     </IconButton>
//                   </Tooltip>
            
//                   <Tooltip title="WhatsApp" arrow>
//                     <IconButton 
//                       color="success" 
//                       onClick={() => window.open(`https://wa.me/${item.mobileNo}`, "_blank")}
//                       sx={{
//                         backgroundColor: "success.main", 
//                         padding: "5px",  
//                         borderRadius: "50%", 
//                         color: "white", 
//                         fontSize: "18px" 
//                       }}
//                     >
//                       <FaWhatsapp />
//                     </IconButton>
//                   </Tooltip>
            
               
//                   <Tooltip title="Email" arrow>
//                     <IconButton 
//                       color="primary" 
//                       onClick={() => window.location.href = `mailto:${item.email}`}
//                       sx={{
//                         backgroundColor: "primary.main", 
//                         padding: "5px",  
//                         borderRadius: "50%", 
//                         color: "white", 
//                         fontSize: "18px"
//                       }}
//                     >
//                       <FaEnvelope />
//                     </IconButton>
//                   </Tooltip>
            
               
//                   <Tooltip title="Assign To" arrow>
//                     <IconButton 
//                       color="secondary" 
//                       onClick={() => console.log("Assign To clicked")}
//                       sx={{
//                         backgroundColor: "#FFD700", 
//                         padding: "5px",  
//                         borderRadius: "50%", 
//                         color: "white", 
//                         fontSize: "18px"
//                       }}
//                     >
//                       <FaUserCircle />
//                     </IconButton>
//                   </Tooltip>
//                 </div>
//                   </TableCell>
            
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.timestamp}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.name}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.address}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmPanNo}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmGstNo}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmPan}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmGst}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmLightBill}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.partner}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.aadhaarNo}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.name}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.age}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.occupation}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.mobileNo}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.mailId}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.residentialAddress}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.panNo}</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.aadhaarNo}</TableCell>
//             <TableCell>
//               <img src={firm.photo} alt="Firm Photo" width="50" height="50" />
//             </TableCell>
//             <TableCell>{firm.lightBill}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
  
//   );
// };

// export default PendingFollowuptable;


import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, IconButton } from '@mui/material';
import { FaEdit, FaWhatsapp, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const PendingFollowuptable = () => {
  const firms = [
    {
      timestamp: '2025-03-22',
      name: 'John Doe',
      address: '1234 Street Name',
      firmPanNo: 'ABCDE1234F',
      firmGstNo: 'GST12345',
      firmPan: 'ABCDE1234',
      firmGst: 'GST123',
      firmLightBill: '1000',
      partner: 'Jane Doe',
      aadhaarNo: '1234 5678 9012',
      age: '30',
      occupation: 'Software Engineer',
      mobileNo: '9876543210',
      mailId: 'johndoe@example.com',
      residentialAddress: '5678 Another Street',
      panNo: 'ABCDE1234F',
      photo: 'https://via.placeholder.com/50',
      lightBill: '500',
    },
  ];

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
      <TableCell sx={{ padding: "15px" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          <Tooltip title="Edit" arrow>
            <IconButton 
              color="primary" 
              onClick={() => console.log("Edit clicked")} 
              sx={{
                backgroundColor: "primary.main", 
                padding: "5px",  
                borderRadius: "50%", 
                color: "white", 
                fontSize: "18px" 
              }}
            >
              <FaEdit />
            </IconButton>
          </Tooltip>
          <Tooltip title="WhatsApp" arrow>
            <IconButton 
              color="success" 
              onClick={() => window.open(`https://wa.me/${firm.mobileNo || ''}`, "_blank")}
              sx={{
                backgroundColor: "success.main", 
                padding: "5px",  
                borderRadius: "50%", 
                color: "white", 
                fontSize: "18px" 
              }}
            >
              <FaWhatsapp />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email" arrow>
            <IconButton 
              color="primary" 
              onClick={() => window.location.href = `mailto:${firm.mailId || ''}`}
              sx={{
                backgroundColor: "primary.main", 
                padding: "5px",  
                borderRadius: "50%", 
                color: "white", 
                fontSize: "18px"
              }}
            >
              <FaEnvelope />
            </IconButton>
          </Tooltip>
      
        </div>
      </TableCell>
      <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.timestamp || '-'}</TableCell>
      <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.name || '-'}</TableCell>
      <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.address || '-'}</TableCell>
      {/* Other fields follow the same pattern */}
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
  );
};

export default PendingFollowuptable;
