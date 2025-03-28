import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const firms = [
  {
    timestamp: "2025-03-28 10:30 AM",
    name: "ABC Enterprises",
    address: "123 Business St, Cityville",
    firmPanNo: "ABCDE1234F",
    firmGstNo: "22ABCDE1234F1Z5",
    firmPan: "ABCDE1234F",
    firmGst: "22ABCDE1234F1Z5",
    firmLightBill: "Paid",
    partner: "John Doe",
    aadhaarNo: "1234 5678 9012",
    age: 45,
    occupation: "Businessman",
    mobileNo: "9876543210",
    mailId: "abc@enterprises.com",
    residentialAddress: "456 Market Rd, Cityville",
    panNo: "ABCDE1234F",
    photo: "", 
    lightBill: "Yes",
  },
  {
    timestamp:"",
    name :"",
  }

,{
  timestamp :" ",
  name :" ",
}
 
];



const FirmTable = ( ) => {
  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
      
         <TableRow sx={{background:"#3621a9"}}>
          <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>ACTION</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>FIRM NAME</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM ADDRESS</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM PAN NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM GST NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM PAN</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM GST</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM LIGHT BILL</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PARTNER </TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ADDHAAR NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>NAME</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AGE</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OCCUPATION</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MOBILE NO.</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MAIL ID</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>RESIDENTIAL ADDRESS</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AADHAAR NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PHOTO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>LIGHT BILL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {firms.map((firm, index) => (
          <TableRow key={index} >
        


                 <TableCell>
               <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                
             <Tooltip title="Edit">
               <IconButton 
                 size="small" 
                 sx={{ backgroundColor: "#1976D2", color: "white", borderRadius: "50%", "&:hover": { backgroundColor: "#1565C0" } }} 
                 onClick={() => handleEdit(item)}
               >
                 <EditIcon sx={{ fontSize: "18px" }} />
               </IconButton>
             </Tooltip>
             
                 <Tooltip title="WhatsApp" arrow>
                   <IconButton 
                     size="small"
                     sx={{ 
                       backgroundColor: "#25D366", 
                       borderRadius: "50%", 
                       color: "white", 
                       "&:hover": { backgroundColor: "#1EBE57" },
                       width: "32px", height: "32px"
                     }} 
                     onClick={() => handleWhatsApp(firm)}
                   >
                     <WhatsAppIcon sx={{ fontSize: "20px" }} />
                   </IconButton>
                 </Tooltip>
             
                 <Tooltip title="Email" arrow>
                   <IconButton 
                     size="small"
                     sx={{ 
                       backgroundColor: "#EA4335", 
                       borderRadius: "50%", 
                       color: "white", 
                       "&:hover": { backgroundColor: "#D93025" },
                       width: "32px", height: "32px"
                     }} 
                     onClick={() => handleEmail(firm)}
                   >
                     <EmailIcon sx={{ fontSize: "20px" }} />
                   </IconButton>
                 </Tooltip>
               </div>
             </TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.timestamp || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.name || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.address || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.firmPanNo || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.firmGstNo}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.firmPan || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.firmGst || "" }</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.firmLightBill ||" "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.partner || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.aadhaarNo || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.name || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.age || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.occupation|| " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.mobileNo|| " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.mailId || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.residentialAddress || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.panNo || " "}</TableCell>
            <TableCell sx={{ color: "black", fontWeight: "bold" }}>{firm.aadhaarNo || " " }</TableCell>
            <TableCell>
              {/* <img src={firm.photo} alt="" width="50" height="50" /> */}
            </TableCell>
            <TableCell>{firm.lightBill}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  
  );
};

export default FirmTable;
