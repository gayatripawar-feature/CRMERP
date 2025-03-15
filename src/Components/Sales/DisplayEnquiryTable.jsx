

import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";

const DisplayEnquiryTable = ({ data }) => {
  
  // Handlers for each action (Edit, Email, Assign)
  const handleEdit = (row) => {
    console.log("Edit clicked for", row);
  };

  const handleEmail = (row) => {
    console.log("Email clicked for", row);
  };

  const handleAssign = (row) => {
    console.log("Assign clicked for", row);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#3621a9" }}>
            {/* Header Cells */}
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ENQUIRY NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>LEAD NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ASSIGN TO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>SALES EXE.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>MOBILE</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ALTERNATE CO. No</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>WHATSAPP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>EMAIL</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ADDRESS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>OCCUPATION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>COMPANY</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>INTERESTED</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>BUDGET</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>REASON</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>REFERENCE</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NAME OF CP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>PLANNING TO BUY?</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FOLLOWUP DETAILS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {/* ACTION COLUMN */}
              <TableCell>
                <Tooltip title="Edit">
                  <IconButton onClick={() => handleEdit(item)} color="primary">
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Email">
                  <IconButton onClick={() => handleEmail(item)} color="secondary">
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Assign">
                  <IconButton onClick={() => handleAssign(item)} color="default">
                    <AssignmentIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
              
              {/* TIMESTAMP */}
              <TableCell>{item.remarkHistory}</TableCell>
              {/* ENQUIRY NO. */}
              <TableCell>{item.enquiryNo}</TableCell>
              {/* LEAD NO. */}
              <TableCell>{item.leadNo}</TableCell>
              {/* ASSIGN TO */}
              <TableCell>{item.assignToHistory}</TableCell>
              {/* SALES EXE. */}
              <TableCell>{item.salesExecutiveName}</TableCell>
              {/* NAME */}
              <TableCell>{item.name}</TableCell>
              {/* MOBILE */}
              <TableCell>{item.mobile}</TableCell>
              {/* ALTERNATE CONTACT NO */}
              <TableCell>{item.alternateContactNo}</TableCell>
              {/* WHATSAPP */}
              <TableCell>{item.whatsappNo}</TableCell>
              {/* EMAIL */}
              <TableCell>{item.email}</TableCell>
              {/* ADDRESS */}
              <TableCell>{item.address}</TableCell>
              {/* OCCUPATION */}
              <TableCell>{item.occupation}</TableCell>
              {/* COMPANY */}
              <TableCell>{item.company}</TableCell>
              {/* INTERESTED */}
              <TableCell>{item.interestedIn}</TableCell>
              {/* BUDGET */}
              <TableCell>{item.budget}</TableCell>
              {/* REASON */}
              <TableCell>{item.reasonForPurchase}</TableCell>
              {/* REFERENCE */}
              <TableCell>{item.referenceBySource}</TableCell>
              {/* NAME OF CP */}
              <TableCell>{item.nameOfCp}</TableCell>
              {/* PLANNING TO BUY */}
              <TableCell>{item.planningToBuyWithin}</TableCell>
              {/* FOLLOWUP DETAILS */}
              <TableCell>{item.customerFeedback}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayEnquiryTable;
