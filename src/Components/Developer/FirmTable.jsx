// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const FirmTable = ({ firms }) => {
//   return (
//     <TableContainer component={Paper}>
//     <Table>
//       <TableHead>
       
//         {/* <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}> */}
//          <TableRow sx={{background:"#3621a9"}}>
//           <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>ACTION</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>FIRM NAME</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM ADDRESS</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM PAN NO</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM GST NO</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM PAN</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM GST</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM LIGHT BILL</TableCell>




//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PARTNER NAME </TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AGE</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OCCUPATION</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MOBILE NO.</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MAIL ID</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>RESIDENTIAL ADDRESS</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN NO</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ADDHAAR NO</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>RESIDENTIAL ADDRESS</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ADDHAAR</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PHOTO</TableCell>
//           <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>LIGHT BILL</TableCell>

        
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {firms.map((firm, index) => (
//           <TableRow key={index} >
//             <TableCell >{firm.action}</TableCell>
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

// export default FirmTable;
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material'; // Import icons for Edit and Visibility

const FirmTable = () => {
  // Dummy data
  const firms = [
    {
      id: 1,
      timestamp: "2025-03-31 12:00 PM",
      name: "ABC Pvt. Ltd.",
      address: "123 Street, City, State",
      firmPan: "path/to/firm-pan.pdf",
      firmGst: "path/to/firm-gst.pdf",
      firmLightBill: "path/to/firm-light-bill.pdf",
      residentialAddress: "456 Residence, City, State",
      panNo: "AABCF1234X",
      aadhaarNo: "1234-5678-9101",
      photo: "path/to/photo.jpg",
      lightBill: "path/to/light-bill.pdf"
    },
    {
      id: 2,
      timestamp: "2025-03-30 02:30 PM",
      name: "XYZ Enterprises",
      address: "789 Avenue, City, State",
      firmPan: "path/to/firm-pan2.pdf",
      firmGst: "path/to/firm-gst2.pdf",
      firmLightBill: "path/to/firm-light-bill2.pdf",
      residentialAddress: "123 Residence, City, State",
      panNo: "XYZAB1234P",
      aadhaarNo: "9876-5432-1011",
      photo: "path/to/photo2.jpg",
      lightBill: "path/to/light-bill2.pdf"
    },
  ];

  const handleEdit = (firmId) => {
    // Logic to handle edit
    console.log(`Edit firm with ID: ${firmId}`);
  };

  const handleView = (document) => {
    // Logic to handle document visibility, maybe open in a new window or modal
    window.open(document, '_blank'); // Opens the document in a new tab
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#3621a9" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM ADDRESS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM PAN NO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM GST NO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM PAN</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM GST</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM LIGHT BILL</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>PARTNER NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>AGE</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>OCCUPATION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>MOBILE NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>MAIL ID</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>RESIDENTIAL ADDRESS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>PAN NO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ADDHAAR NO</TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>RESIDENTIAL ADDRESS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>PAN </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ADDHAAR </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>PHOTO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>LIGHT BILL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {firms.map((firm, index) => (
            <TableRow key={index}>
              {/* Action Column with Edit Icon */}
              <TableCell>
                <IconButton onClick={() => handleEdit(firm.id)}>
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.timestamp}</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.name}</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.address}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {/* Visibility Icons for PAN, GST, Light Bill, Residential Address, and other documents */}
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.firmPan)} 
                   sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}>
                  <Visibility sx={{ color: "white" }} />
                </IconButton>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.firmGst)} 
                   sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}>
                  <Visibility sx={{ color: "white" }}  />
                </IconButton>
              </TableCell>
            
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.firmLightBill)}
                   sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}>
                  <Visibility sx={{ color: "white" }} />
                </IconButton>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
             
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
  <IconButton 
    onClick={() => handleView(firm.residentialAddress)} 
    sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}
  >
    <Visibility sx={{ color: "white" }} />
  </IconButton>
</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.panNo)} 
                   sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}
                  >
                  <Visibility sx={{ color: "white" }} />
                </IconButton>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.aadhaarNo)} 
                   sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}
                  >
                  <Visibility sx={{ color: "white" }} />
                </IconButton>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.photo)}
                  sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}
                  >
                  <Visibility sx={{ color: "white" }} />
                </IconButton>
              </TableCell>

              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <IconButton onClick={() => handleView(firm.lightBill)}
                  sx={{ backgroundColor: "blue", borderRadius: "50%", padding: "3px" }}
                  >
                  <Visibility sx={{ color: "white" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FirmTable;
