import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const BookingFormTable= ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
           <TableRow sx={{background:"#3621a9"}}>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ACTION</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>FIRM NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PROJECT NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PROJECT ADDRESS</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OLD SURVEY NUMBER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NEW SURVEY NUMBER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>VILLAGE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>TALUKA</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>DISTRICT</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>SANCTION AUTHORITY</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>EAST</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>WEST</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NORTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>SOUTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>LATITUDE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>LONGITUDE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>LANDMARK</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PHASE NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>WING NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>MAHARERA NO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.action}</TableCell>
              <TableCell>{item.firmName}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.projectName}</TableCell>
              <TableCell>{item.projectAddress}</TableCell>
              <TableCell>{item.oldSurveyNumber}</TableCell>
              <TableCell>{item.newSurveyNumber}</TableCell>
              <TableCell>{item.village}</TableCell>
              <TableCell>{item.taluka}</TableCell>
              <TableCell>{item.district}</TableCell>
              <TableCell>{item.sanctionAuthority}</TableCell>
              <TableCell>{item.east}</TableCell>
              <TableCell>{item.west}</TableCell>
              <TableCell>{item.north}</TableCell>
              <TableCell>{item.south}</TableCell>
              <TableCell>{item.latitude}</TableCell>
              <TableCell>{item.longitude}</TableCell>
              <TableCell>{item.landmark}</TableCell>
              <TableCell>{item.phaseNo}</TableCell>
              <TableCell>{item.wingNo}</TableCell>
              <TableCell>{item.mahareraNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingFormTable;
