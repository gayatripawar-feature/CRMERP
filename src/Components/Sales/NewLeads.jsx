



import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton ,Tooltip} from "@mui/material";
import { FaEdit, FaWhatsapp, FaEnvelope, FaUserCircle } from "react-icons/fa";

const NewLeads = ({ inventoryData, handleDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>TIMESTAMP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>ASSIGN TO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>LEAD NO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>MOBILE / WHATSAPP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>LOOKING FOR</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>EMAIL</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>SOURCE NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap", padding: "15px" }}>LOCATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryData.map((item, index) => (
            <TableRow key={index}>
              {/* Action Column */}
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
          onClick={() => window.open(`https://wa.me/${item.mobileNo}`, "_blank")}
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
          onClick={() => window.location.href = `mailto:${item.email}`}
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

   
      <Tooltip title="Assign To" arrow>
        <IconButton 
          color="secondary" 
          onClick={() => console.log("Assign To clicked")}
          sx={{
            backgroundColor: "#FFD700", 
            padding: "5px",  
            borderRadius: "50%", 
            color: "white", 
            fontSize: "18px"
          }}
        >
          <FaUserCircle />
        </IconButton>
      </Tooltip>
    </div>
      </TableCell>

              {/* Correct TableCell values */}
              <TableCell sx={{ padding: "15px" }}>{item.timestamp}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.assignTo}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.leadNo}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.name}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.mobile}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.lookingFor}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.email}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.sourceName}</TableCell>
              <TableCell sx={{ padding: "15px" }}>{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewLeads;
