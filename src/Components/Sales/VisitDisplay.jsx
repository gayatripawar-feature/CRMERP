import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const VisitDisplay = () => {
  // Example data for the table, you can replace it with actual data.
  const rows = [
    { id: 1, projectName: 'Sohan Enterprised', wing: 'A', flatNo: '101', type: '2 BHK', date: '2025-03-01' },
    { id: 2, projectName: 'Jatin', wing: 'B', flatNo: '202', type: '3 BHK', date: '2025-03-02' },
    { id: 3, projectName: 'Jatin Ahirvar', wing: 'C', flatNo: '303', type: '4 BHK', date: '2025-03-03' },
    // Add more rows as needed
  ];

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      {/* <Table stickyHeader aria-label="Visit Display Table"> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Wing</TableCell>
            <TableCell align="center">Flat No</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row.id}>
              <TableCell align="center">{row.projectName}</TableCell>
              <TableCell align="center">{row.wing}</TableCell>
              <TableCell align="center">{row.flatNo}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VisitDisplay;
