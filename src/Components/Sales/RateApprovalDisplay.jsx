import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const RateApprovalDisplay = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Project Name</b></TableCell>
            <TableCell><b>Wing</b></TableCell>
            <TableCell><b>Flat No</b></TableCell>
            <TableCell><b>Type</b></TableCell>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Facing</b></TableCell>
            <TableCell><b>Basic Rate</b></TableCell>
            <TableCell><b>Discount</b></TableCell>
            <TableCell><b>Total Consideration</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.projectName}</TableCell>
                <TableCell>{row.wing}</TableCell>
                <TableCell>{row.flatNo}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.facing}</TableCell>
                <TableCell>{row.basicRate}</TableCell>
                <TableCell>{row.discount}</TableCell>
                <TableCell>{row.totalConsideration}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} align="center">No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RateApprovalDisplay;