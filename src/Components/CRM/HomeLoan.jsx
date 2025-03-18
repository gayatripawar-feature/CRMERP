











// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField, Select } from '@mui/material';
// import { FaEye } from 'react-icons/fa';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const HomeLoan = () => {
//   const [loansData, setLoansData] = useState([
//     { id: 1, homeLoanApplicability: 'Yes' },
//     { id: 2, homeLoanApplicability: 'No' },
//   ]);
  
  
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [flatType, setFlatType] = useState('');
//   const [parking, setParking] = useState('');
//   const [floor, setFloor] = useState('');
//   const [rate, setRate] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   useEffect(() => {
//     setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
//   }, [filteredLoans, rowsPerPage]);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoansData(data);
//     setFilteredLoans(data);
//   };

//   const getFilterOptions = (type) => {
//     switch (type) {
//       case "Flat Type":
//         return ["1BHK", "2BHK", "3BHK", "Studio"];
//       case "Parking":
//         return ["Basement", "Parking 1", "Parking 2"];
//       case "Floor":
//         return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
//       case "Rate":
//         let rates = [];
//         for (let i = 50000; i <= 6000000; i += 50000) {
//           rates.push(`₹${i.toLocaleString()}`);
//         }
//         return rates;
//       default:
//         return [];
//     }
//   };

//   const filterLoansByDate = () => {
//     const filtered = loansData.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();

//       const matchesFilters =
//         (!flatType || loan.type === flatType) &&
//         (!parking || loan.parking === parking) &&
//         (!floor || loan.floor === floor) &&
//         (!rate || loan.rate === rate);

//       return loanDate >= start && loanDate <= end && matchesFilters;
//     });

//     setFilteredLoans(filtered);
//     setCurrentPage(1);
//   };

//   const resetFilters = () => {
//     setStartDate('');
//     setEndDate('');
//     setFlatType('');
//     setParking('');
//     setFloor('');
//     setRate('');
//     setFilteredLoans(loansData);
//     setCurrentPage(1);
//     setFilterType('');
//     setFilterValue('');
//   };

//   const handlePagination = (event, newPage) => {
//     setCurrentPage(newPage + 1);
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10)); // Update rows per page
//     setCurrentPage(1); // Reset to first page whenever rows per page is changed
//   };

//   const start = (currentPage - 1) * rowsPerPage;
//   const end = Math.min(start + rowsPerPage, filteredLoans.length);

//   const displayLoans = () => {
//     return filteredLoans.slice(start, end).map((loan, index) => (
//       <TableRow key={loan.id} sx={{ background: "linear-gradient(to right, #ffd3e3, #ffebb7)" }}>
//         <TableCell>{loan.flatNo}</TableCell>
//         <TableCell>{loan.nameOfAllotee}</TableCell>
//         <TableCell>{loan.nameOfCoAllotee}</TableCell>
//         <TableCell>{loan.type}</TableCell>
//         <TableCell>{loan.floor}</TableCell>
//         <TableCell>{loan.emailId}</TableCell>
//         <TableCell>{loan.whatsappMobileNo}</TableCell>
//         <TableCell>{loan.rate}</TableCell>
//         <TableCell>{loan.agreementValue}</TableCell>
//         <TableCell>{loan.dateOfBooking}</TableCell>
//         <TableCell>{loan.parking}</TableCell>

//         {/* Replace this cell with a Select dropdown for Home Loan Applicability */}
//         <TableCell>
//           <Select
//             value={loan.homeLoanApplicability}
//             onChange={(e) => handleHomeLoanApplicabilityChange(loan.id, e.target.value)}
//             variant="outlined"
//             size="small"
//             sx={{ width: '100px' }}
//           >
//             <MenuItem value="Yes">Yes</MenuItem>
//             <MenuItem value="No">No</MenuItem>
//           </Select>
//         </TableCell>

//         <TableCell>{loan.bankName}</TableCell>
//         <TableCell>{loan.bankerName}</TableCell>
//         <TableCell>{loan.mobileNo}</TableCell>
//         <TableCell>{loan.loanAccountNo}</TableCell>
//         <TableCell>{loan.loanAmount}</TableCell>
//         <TableCell>{loan.sanctionLetter}</TableCell>
//         <TableCell>{loan.homeLoanSanctionCertificateCollected}</TableCell>
//         <TableCell>{loan.bookingCancellationReason}</TableCell>
//         <TableCell>{loan.bookingConfirmationMailSent}</TableCell>
//       </TableRow>
//     ));
//   };

//   // New function to handle changes for the homeLoanApplicability dropdown
//   const handleHomeLoanApplicabilityChange = (loanId, value) => {
//     const updatedLoans = filteredLoans.map((loan) => {
//       if (loan.id === loanId) {
//         return { ...loan, homeLoanApplicability: value };
//       }
//       return loan;
//     });

//     setFilteredLoans(updatedLoans);
//   };

//   const handleCollapseToggle = () => {
//     setIsCollapsed(prev => !prev);
//   };

//   return (
//     <div className="main-content">
//       <h6 className='mb-3'>Sales Module / Home Loan Management</h6>

//       {/* CRM Display Button */}
//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           className='m-3'
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Home Loan </span>}
//         </Button>
//       </div>

//       <div className="d-flex align-items-center justify-content-between mb-3">
//         <div className="d-flex align-items-center gap-3">
//           <label>Filter By:</label>
//           <TextField
//             select
//             variant="outlined"
//             size="small"
//             style={{ width: '150px' }}
//             value={filterType}
//             className="bg-white"
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setFilterValue('');
//             }}
//           >
//             <MenuItem value="">Select Filter</MenuItem>
//             <MenuItem value="Flat Type">Flat Type</MenuItem>
//             <MenuItem value="Parking">Parking</MenuItem>
//             <MenuItem value="Floor">Floor</MenuItem>
//             <MenuItem value="Rate">Rate</MenuItem>
//           </TextField>

//           {filterType && (
//             <>
//               <label>{filterType}:</label>
//               <TextField
//                 select
//                 variant="outlined"
//                 size="small"
//                 className="bg-white"
//                 style={{ width: '150px' }}
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               >
//                 {getFilterOptions(filterType).map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </TextField>

//               {/* Reset Button */}
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 style={{ marginLeft: '10px' }}
//                 onClick={resetFilters}
//               >
//                 Reset
//               </Button>
//             </>
//           )}
//         </div>

//         {/* Start Date */}
//         <div className="d-flex align-items-center">
//           <label style={{ marginRight: '5px' }}>Start Date:</label>
//           <TextField
//             type="date"
//             variant="outlined"
//             size="small"
//             style={{ width: '150px', textAlign: 'center' }}
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </div>

//         {/* End Date */}
//         <div className="d-flex align-items-center">
//           <label style={{ marginRight: '5px' }}>End Date:</label>
//           <TextField
//             type="date"
//             variant="outlined"
//             size="small"
//             style={{ width: '150px', textAlign: 'center' }}
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>

//         <div className="d-flex align-items-center gap-3">
//           <div className="d-flex align-items-center">
//             <label className="me-2">Rows per page:</label>
//             <input
//               type="number"
//               className="form-control"
//               value={rowsPerPage}
//               onChange={handleRowsPerPageChange}
//               style={{ width: '80px' }}
//             />
//           </div>
//         </div>
//       </div>

//       <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
//         <Table style={{ tableLayout: 'auto', width: '100%' }}>
//           <TableHead>
//             <TableRow sx={{ background: "#3621a9" }}>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Flat No.</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Name Of Allotee</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Name Of Co-Allotee</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Type</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Floor</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Email</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Whatsapp No.</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Rate</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Agreement Value</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Booking Date</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Parking</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Home Loan Applicability</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Bank Name</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Banker Name</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Mobile No</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Loan Acc No</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Loan Amount</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Sanction Letter</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Loan Cert</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Booking Cancellation Reason</TableCell>
//               <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Booking Confirmation Mail</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayLoans()}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination Section */}
//       <div className="d-flex justify-content-between align-items-center">
//         <Button style={{ backgroundColor: "#800080" }} className="text-white mt-3" onClick={() => handlePagination(null, currentPage - 2)} disabled={currentPage === 1}>Previous</Button>
//         <Button style={{ backgroundColor: "#800080" }} className='text-white mt-3' onClick={() => handlePagination(null, currentPage)} disabled={currentPage === totalPages}>Next</Button>
//       </div>
//     </div>
//   );
// };

// export default HomeLoan;



// -------------------

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField, IconButton,Select, InputAdornment,Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FaEye } from 'react-icons/fa';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EditIcon from '@mui/icons-material/Edit';
import AccountCircle from '@mui/icons-material/AccountCircle'; 
const HomeLoan = () => {
  const [loansData, setLoansData] = useState([
    { 
      id: 1, flatNo: "101", nameOfAllotee: "John Doe", nameOfCoAllotee: "Jane Doe", type: "2BHK", 
      floor: "1", emailId: "johndoe@example.com", whatsappMobileNo: "+911234567890", rate: "₹5,00,000", 
      agreementValue: "₹60,00,000", dateOfBooking: "2024-03-01", parking: "Parking 1", homeLoanApplicability: "Yes", 
      bankName: "Bank A", bankerName: "Mr. A", mobileNo: "+911234567890", loanAccountNo: "123456789", 
      loanAmount: "₹40,00,000", sanctionLetter: "Yes", homeLoanSanctionCertificateCollected: "No", 
      bookingCancellationReason: "-", bookingConfirmationMailSent: "Yes"
    },
   
  ]);
  const [filteredLoans, setFilteredLoans] = useState(loansData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isEditingBankName, setIsEditingBankName] = useState(false);
  const [bankName, setBankName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
  }, [filteredLoans, rowsPerPage]);

  useEffect(() => {
    let filtered = loansData;

    // Filter by start and end date
    if (startDate && endDate) {
      filtered = filtered.filter((loan) => {
        const bookingDate = new Date(loan.dateOfBooking);
        return bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate);
      });
    }

    // Filter by home loan applicability
    if (filterValue) {
      filtered = filtered.filter((loan) => loan.homeLoanApplicability === filterValue);
    }

    setFilteredLoans(filtered);
    setTotalPages(Math.ceil(filtered.length / rowsPerPage)); // Update total pages after filter
  }, [startDate, endDate, filterValue, loansData, rowsPerPage]);

  const handlePagination = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const toggleFormVisibility = () => {
    setIsEditingBankName(!isEditingBankName);
  };


  const handleBankNameChange = (e) => {
    setBankName(e.target.value);  // Update bank name as the user types
  };
  const start = (currentPage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, filteredLoans.length);

  const displayLoans = () => {
    return filteredLoans.slice(start, end).map((loan) => (
      <TableRow key={loan.id} sx={{  }}>
        <TableCell>{loan.flatNo}</TableCell>
        <TableCell>{loan.nameOfAllotee}</TableCell>
        <TableCell>{loan.nameOfCoAllotee}</TableCell>
        <TableCell>{loan.type}</TableCell>
        <TableCell>{loan.floor}</TableCell>
        <TableCell>{loan.emailId}</TableCell>
        <TableCell>{loan.whatsappMobileNo}</TableCell>
        <TableCell>{loan.rate}</TableCell>
        <TableCell>{loan.agreementValue}</TableCell>
        <TableCell>{loan.dateOfBooking}</TableCell>
        <TableCell>{loan.parking}</TableCell>
        <TableCell>
          <Select
            value={loan.homeLoanApplicability}
            onChange={(e) => handleHomeLoanApplicabilityChange(loan.id, e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: '100px' }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </TableCell>
{/*        
  <TableCell>
    {isEditingBankName ? (
      <TextField
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
        size="small"
        variant="outlined"
        sx={{ width: '100px' }}
      />
    ) : (
      <span onClick={() => setIsEditingBankName(true)}>{loan.bankName || "Click to Edit"}</span>
    )}
    {isEditingBankName && (
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => saveBankName(loan.id)}
        sx={{ ml: 1 }}
      >
        Save
      </Button>
    )}
  </TableCell> */}

<TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>
    {isEditingBankName ? (
      <>
        
        <TextField
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          size="small"
          variant="outlined"
          sx={{ width: '150px' }}
        />
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => saveBankName(loan.id)}
          sx={{ ml: 1 }}
        >
          Save
        </Button>
      </>
    ) : (
      <>
        {/* Profile Button (icon) */}
        <IconButton onClick={() => setIsEditingBankName(true)} color="primary">
          {/* <EditIcon /> */}
          <AccountCircle fontSize="medium" />
        </IconButton>
        {/* Display Bank Name or a prompt to edit */}
        <span>{loan.bankName || "Click to Edit"}</span>
      </>
    )}
  </TableCell>

  
  <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Edit Bank Name</DialogTitle>
        <DialogContent>
        
          <TextField
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            size="small"
            variant="outlined"
            sx={{ width: '150px' }}
            label="Bank Name"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => saveBankName(loan.id)}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>


        <TableCell>{loan.bankerName}</TableCell>
        <TableCell>{loan.mobileNo}</TableCell>
        <TableCell>{loan.loanAccountNo}</TableCell>
        <TableCell>{loan.loanAmount}</TableCell>
        <TableCell>{loan.sanctionLetter}</TableCell>
        <TableCell>{loan.homeLoanSanctionCertificateCollected}</TableCell>
        <TableCell>{loan.bookingCancellationReason}</TableCell>
        <TableCell>{loan.bookingConfirmationMailSent}</TableCell>
      </TableRow>
    ));
  };

  const handleHomeLoanApplicabilityChange = (loanId, value) => {
    const updatedLoans = filteredLoans.map((loan) => {
      if (loan.id === loanId) {
        return { ...loan, homeLoanApplicability: value };
      }
      return loan;
    });
    setFilteredLoans(updatedLoans);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog if user cancels
  };

  
  return (
    <div className="main-content">
      <h6 className="mb-3">Sales Module / Home Loan Management</h6>
      {/* Filter Controls */}
      <div className="pt-5" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          size="small"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          size="small"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: '200px' }}
        >
          <MenuItem value="">All Loans</MenuItem>
          <MenuItem value="Yes">Home Loan Applicable</MenuItem>
          <MenuItem value="No">No Home Loan</MenuItem>
        </Select>
      </div>

      {/* Table */}
      <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table style={{ tableLayout: 'auto', width: '100%' }}>
          <TableHead>
            <TableRow sx={{ background: "#3621a9" }}>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Flat No.</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Name Of Allotee</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Name Of Co-Allotee</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Type</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Floor</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Email</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Whatsapp No.</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Rate</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Agreement Value</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Booking Date</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Parking</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Home Loan Applicability</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Bank Name</TableCell>
             {/* Bank Name Column */}
     
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Banker Name</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Mobile No</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Loan Acc No</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Loan Amount</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Sanction Letter</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Loan Cert</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Booking Cancellation Reason</TableCell>
              <TableCell className="fs-6" sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Booking Confirmation Mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayLoans()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomeLoan;
