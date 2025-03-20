








import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, Modal,TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem,IconButton, Select, InputLabel, FormControl, Box, Collapse, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa'; 
import { FaEye, FaEyeSlash } from "react-icons/fa";

import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from "@mui/material/InputAdornment";




const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const OCR = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [loans, setLoans] = useState([
    {
      flatNo: '',
      cashWithAV: '',
    },
    {
      flatNo: '',
      cashWithAV: '',
    },
  ]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // State for filter options
  const [flatType, setFlatType] = useState('');
  const [parking, setParking] = useState('');
  const [floor, setFloor] = useState('');
  const [rate, setRate] = useState('');
  
  // State to toggle filter visibility
  const [showFilters, setShowFilters] = useState(false);
  const [showCRM, setShowCRM] = useState(false);  // State for CRM toggle
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse toggle
  const [filterType, setFilterType] = useState(''); // For the filter selection
  const [filterValue, setFilterValue] = useState(''); // For the selected filter value

  const [editingFlatNo, setEditingFlatNo] = useState(null); 
  const [editingHistoryCashWithAV, setEditingHistoryCashWithAV] = useState('');

  const [historyCashValues, setHistoryCashValues] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // Add this in your state initialization

  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);



  const [expanded, setExpanded] = useState(false); // For collapsing
  const [editingIndex, setEditingIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    loadLoansData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
  }, [filteredLoans, rowsPerPage]);

  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
    setFilteredLoans(data);
  };

  const getFilterOptions = (type) => {
    switch (type) {
      case "Flat Type":
        return ["1BHK", "2BHK", "3BHK", "Studio"];
      case "Parking":
        return ["Basement", "Parking 1", "Parking 2"];
      case "Floor":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
      case "Rate":
        let rates = [];
        for (let i = 50000; i <= 6000000; i += 50000) {
          rates.push(`₹${i.toLocaleString()}`);
        }
        return rates;
      default:
        return [];
    }
  };

  const filterLoansByDate = () => {
    const filtered = loans.filter(loan => {
      const loanDate = new Date(loan.dateOfBooking);
      const start = startDate ? new Date(startDate) : new Date(0);
      const end = endDate ? new Date(endDate) : new Date();

      const matchesFilters =
        (!flatType || loan.type === flatType) &&
        (!parking || loan.parking === parking) &&
        (!floor || loan.floor === floor) &&
        (!rate || loan.rate === rate);

      return loanDate >= start && loanDate <= end && matchesFilters;
    });

    setFilteredLoans(filtered);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setStartDate('');
    setEndDate('');
    setFlatType('');
    setParking('');
    setFloor('');
    setRate('');
    setFilteredLoans(loans);
    setCurrentPage(1);
    setFilterType('');
    setFilterValue('');
  };

  const handlePagination = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Update rows per page
    setCurrentPage(1); // Reset to first page whenever rows per page is changed
  };


  // const handleEditClick = (flatNo, historyCashWithAV) => {
  //   setEditingFlatNo(flatNo); // Start editing the selected flat
  //   setEditingHistoryCashWithAV(historyCashWithAV); // Set the value to be edited
  // };

  // Handle change in History Cash With AV value
  const handleHistoryCashWithAVChange = (flatNo, value) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.flatNo === flatNo ? { ...loan, historyCashWithAV: value } : loan
      )
    );
    setEditingFlatNo(null); // Stop editing after change
  };


//   const handleAddClick = () => {
//     setIsEditing(false);
//     setEditingHistoryCashWithAV("");
//     setModalOpen(true);
//   };


// const handleEditValue = (index) => {
//   setSelectedIndex(index); // Correctly setting selected index
//   setEditingHistoryCashWithAV(historyCashValues[index]); // Set the value of the selected index
//   setIsEditing(true); // Indicate that we are editing
//   setModalOpen(true); // Open the modal
// };



// const handleSaveOrUpdate = () => {
//   if (isEditing) {
//     const updatedValues = [...historyCashValues];
//     updatedValues[selectedIndex] = editingHistoryCashWithAV; // Update the value at selected index
//     setHistoryCashValues(updatedValues);
//   } else {
//     // Add new value to the array (if it's not in editing mode)
//     setHistoryCashValues([...historyCashValues, editingHistoryCashWithAV]);
//   }

//   setModalOpen(false); // Close modal after saving
//   setIsEditing(false); // Reset editing mode
// };


const handleAddClick = () => {
  setEditingIndex(null); // Adding a new entry
  setInputValue("");
  setExpanded(true);
};

const handleEditValue = (index) => {
  setEditingIndex(index);
  setInputValue(historyCashValues[index]);
  setExpanded(true);
};

const handleSave = () => {
  if (editingIndex === null) {
    setHistoryCashValues([...historyCashValues, parseFloat(inputValue)]);
  } else {
    const updatedValues = [...historyCashValues];
    updatedValues[editingIndex] = parseFloat(inputValue);
    setHistoryCashValues(updatedValues);
  }
  setExpanded(false);
};

const handleToggle = () => {
  setIsExpanded((prev) => !prev);
};


  const handleCashWithAVChange = (flatNo, value) => {
    // Logic to update the state with the new value for the specific loan
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.flatNo === flatNo ? { ...loan, cashWithAV: value } : loan
      )
    );
  };

  

  const displayLoans = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = Math.min(start + rowsPerPage, filteredLoans.length);
    return filteredLoans.slice(start, end).map((loan, index) => (
      <TableRow key={loan.flatNo}>
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
        <TableCell>{loan.parkingNo}</TableCell>
        <TableCell>
          <select
            className="minimal-select"
            value={loan.loanStatus}
            onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
          >
            <option value="">{loan.loanStatus || 'Select Status'}</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Non Sanction">Non Sanction</option>
          </select>
        </TableCell>


        <TableCell>{loan.ocrAmount}</TableCell>
        <TableCell>{loan.ocrReceivedAmount}</TableCell>
        <TableCell>{loan.ocrBalance}</TableCell>
        <TableCell>{loan.online}</TableCell>
        <TableCell>{loan.cashWithAV}</TableCell>
        {/* <TableCell>
  <input
    type="number"           
    value={loan.cashWithAV} 
    onChange={(e) => handleCashWithAVChange(loan.flatNo, e.target.value)} 
    style={{
      padding: '8px',               
      backgroundColor: 'white',     
      border: '1px solid black',    
      borderRadius: '4px',          
      fontSize: '14px',            
      width: '100%'                
    }}
  />
</TableCell> */}

        <TableCell>{loan.historyCashWithAV}</TableCell>
        <TableCell>{loan.balanceCashWithAV}</TableCell>
        <TableCell>{loan.cashWithoutAV}</TableCell>
        <TableCell>{loan.historyCashWithoutAV}</TableCell>
        <TableCell>{loan.balanceCashWithoutAV}</TableCell>
        <TableCell>{loan.receivedAsPerStage}</TableCell>
        <TableCell>{loan.stampDutyTotal}</TableCell>
        <TableCell>{loan.stampDutyReceived}</TableCell>
        <TableCell>{loan.stampDutyBalance}</TableCell>
        <TableCell>{loan.regTotal}</TableCell>
        <TableCell>{loan.regReceived}</TableCell>
        <TableCell>{loan.regBalance}</TableCell>
        <TableCell>{loan.gstTotal}</TableCell>
        <TableCell>{loan.gstReceived}</TableCell>
        <TableCell>{loan.balanceGst}</TableCell>
        <TableCell>{loan.legalChargesReceived}</TableCell>
      </TableRow>
    ));
  };

  const updateLoanStatus = (flatNo, newStatus) => {
    // Update the loan status in your backend or state here
    console.log(`Updating loan ${flatNo} status to ${newStatus}`);
  };

  // Handle the toggle for collapsing
  const handleCollapseToggle = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="main-content">
      <h6 className='pt-3'>Sales Module / OCR Collection Management</h6>


      {/* <div className="d-flex align-items-center mb-3">
        <Button
          onClick={handleCollapseToggle}
          variant="outlined"
          className='mt-4 mb-4'
          color="success"
          style={{ borderRadius: '20px' }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {!isCollapsed && <span className="text-success">OCR Collection</span>}
        </Button>
      </div> */}


{/* <Button
      variant="contained"
      color="success"
      sx={{
        borderRadius: "20px",
        transition: "width 0.3s ease, background 0.3s ease",
        width: isHovered ? "160px" : "50px",
        minWidth: "50px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "10px 15px",
        marginTop:"20px",
        marginBottom:"28px",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        position: "relative",
        background: "linear-gradient(0deg, rgba(22,9,240,1) 0%, rgba(49,110,244,1) 100%)",
        boxShadow:
          "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
        "&:hover": {
          background: "linear-gradient(0deg, rgba(2,126,251,1) 0%, rgba(0,3,255,1) 100%)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          transform: "scale(0.1)",
          transition: "transform 0.3s ease",
          zIndex: -1,
        },
        "&:hover::after": {
          transform: "scale(1)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      startIcon={<FaEye />}
    >
      {isHovered && "OCR Collection"}
    </Button> */}

         
<Button
      variant="contained"
      color="success"
      sx={{
        borderRadius: "20px",
        transition: "width 0.3s ease, background 0.3s ease",
        width: isExpanded ? "160px" : "50px",
        minWidth: "50px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "10px 15px",
        marginTop: "20px",
        marginBottom: "28px",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        position: "relative",
        // background: "linear-gradient(0deg, rgba(22,9,240,1) 0%, rgba(49,110,244,1) 100%)",
        background: "linear-gradient(0deg, #4b2ac2 0%, #5c39d3 100%)",
        boxShadow:
          "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
        "&:hover": {
          // background: "linear-gradient(0deg, rgba(2,126,251,1) 0%, rgba(0,3,255,1) 100%)",
          background: "linear-gradient(0deg, rgb(230, 4, 255) 0%, rgb(245, 182, 24) 100%)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          transform: "scale(0.1)",
          transition: "transform 0.3s ease",
          zIndex: -1,
        },
        "&:hover::after": {
          transform: "scale(1)",
        },
      }}
      onClick={handleToggle}
      startIcon={isExpanded ? <FaEyeSlash /> : <FaEye />}
    >
      {isExpanded && "OCR Collection"}
    </Button>


         <div className="d-flex align-items-center justify-content-between mb-3">
           <div className="d-flex align-items-center gap-3">
             <label>Filter By:</label>
             <TextField
               select
               variant="outlined"
               size="small"
               style={{ width: '150px' }}
               value={filterType}
               className="bg-white"
               onChange={(e) => {
                 setFilterType(e.target.value);
                 setFilterValue('');
               }}
             >
               <MenuItem value="">Select Filter</MenuItem>
               <MenuItem value="Flat Type">Flat Type</MenuItem>
               <MenuItem value="Parking">Parking</MenuItem>
               <MenuItem value="Floor">Floor</MenuItem>
               <MenuItem value="Rate">Rate</MenuItem>
             </TextField>
         
             
         
           {filterType && (
             <div className="d-flex align-items-center gap-3">
               <label>{filterType}:</label>
               <TextField
                 select
                 variant="outlined"
                 size="small"
                 className="bg-white"
                 style={{ width: '150px' }}
                 value={filterValue}
                 onChange={(e) => setFilterValue(e.target.value)}
               >
                 {getFilterOptions(filterType).map((option) => (
                   <MenuItem key={option} value={option}>
                     {option}
                   </MenuItem>
                 ))}
               </TextField>
         
               {/* Reset Button */}
               <Button
                 variant="contained"
                 color="secondary"
                 style={{ marginLeft: '10px' }}
                 onClick={resetFilters}
               >
                 Reset
               </Button>
             </div>
           )}
         
         {/* Start Date */}
         <div className="d-flex align-items-center">
               <label style={{ marginRight: '5px' }}>Start Date:</label>
               <TextField
                 type="date"
                 variant="outlined"
                 size="small"
                 style={{ width: '150px', textAlign: 'center' }}
                 value={startDate}
                 onChange={(e) => setStartDate(e.target.value)}
               />
             </div>
         
             {/* End Date */}
             <div className="d-flex align-items-center">
               <label style={{ marginRight: '5px' }}>End Date:</label>
               <TextField
                 type="date"
                 variant="outlined"
                 size="small"
                 style={{ width: '150px', textAlign: 'center' }}
                 value={endDate}
                 onChange={(e) => setEndDate(e.target.value)}
               />
             </div>
           </div>


           {/* Rows per page */}
           <div className="d-flex align-items-center gap-3">
             <label className="me-2">Rows per page:</label>
             <input
               type="number"
               className="form-control"
               value={rowsPerPage}
               onChange={handleRowsPerPageChange}
               style={{ width: '80px' }}
             />
           </div>
         </div>
             



     
    


<TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
      <Table style={{ tableLayout: 'auto', width: '100%' }}>
        <TableHead>
          <TableRow sx={{ background: "#3621a9" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Flat No.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Name Of Allotee</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Name Of Co-Allotee</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Type</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Floor</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Email</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Whatsapp No.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Rate</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Agreement Value</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Booking Date</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Parking</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Parking No</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Loan Status</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>OCR Amount</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>OCR Received</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>OCR Balance</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Online</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Cash With AV</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>History Cash With AV</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Balance Cash With AV</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Cash Without AV</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>History Cash Without AV</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Balance Cash Without AV</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Received As Per Stage</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Stamp Duty Total</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Stamp Duty Received</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Stamp Duty Balance</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Reg Total</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Reg Received</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Reg Balance</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>GST Total</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>GST Received</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Balance GST</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>Legal Charges Received</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans.map((loan) => (
            <TableRow key={loan.flatNo}>
              <TableCell>{loan.flatNo}</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Jane Doe</TableCell>
              <TableCell>3BHK</TableCell>
              <TableCell>2nd Floor</TableCell>
              <TableCell>johndoe@example.com</TableCell>
              <TableCell>+91 9876543210</TableCell>
              <TableCell>₹5000</TableCell>
              <TableCell>₹50,00,000</TableCell>
              <TableCell>2025-03-01</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>101</TableCell>
              <TableCell>
                <select
                  style={{
                    padding: '8px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                >
                  <option value="">{'Select Status'}</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Non Sanction">Non Sanction</option>
                </select>
              </TableCell>
              <TableCell>₹30,000</TableCell>
              <TableCell>₹25,000</TableCell>
              <TableCell>₹5,000</TableCell>
              <TableCell>₹1,00,000</TableCell>
              <TableCell>
                <input
                  type="number"
                  value={loan.cashWithAV}
                  onChange={(e) => handleCashWithAVChange(loan.flatNo, e.target.value)}
                  style={{
                    padding: '8px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    borderRadius: '4px',
                    fontSize: '14px',
                    width: '100%',
                  }}
                />
              </TableCell>
             


              {/* <TableCell>
  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
    
    <IconButton onClick={handleAddClick} style={{ marginBottom: "8px" }}>
      <AddIcon />
    </IconButton>
    
    
    {historyCashValues.map((value, index) => (
      <TextField
        key={index}
        type="number"
        value={value}
        disabled 
        style={{
          marginBottom: "1px",
          backgroundColor: "white",
         
          borderRadius: "4px",
          fontSize: "14px",
          width: "80%",
          padding:"0px",
          
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handleEditValue(index)}> 
                <EditIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    ))}
  </div>

  
  <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        bgcolor: "white",
        boxShadow: 24,
        p: 3,
        borderRadius: 2,
      }}
    >
      <h2>{isEditing ? "Update Amount" : "Add Amount"}</h2>
      {/* <TextField
        fullWidth
        type="number"
        value={editingHistoryCashWithAV} // Display value for editing
        onChange={(e) => setEditingHistoryCashWithAV(e.target.value)}
        sx={{ mt: 2, padding: "4px" }}  // Reduced padding here as well
      /> 


      <TextField
  fullWidth
  type="number"
  value={editingHistoryCashWithAV}
  onChange={(e) => setEditingHistoryCashWithAV(e.target.value)}
  sx={{ mt: 2 }}
  InputProps={{
    sx: { height: "30px", fontSize: "14px", padding: "0px" }, // Adjust height and font size
  }}
/>

      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={() => setModalOpen(false)} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSaveOrUpdate} variant="contained">
          {isEditing ? "Update" : "Save"}
        </Button>
      </div>
    </Box>
  </Modal>
</TableCell> */}


<TableCell>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        {/* Add Button */}
        <IconButton onClick={handleAddClick} style={{ marginBottom: "8px" }}>
          <AddIcon />
        </IconButton>

        {/* Display History Cash Values */}
        {historyCashValues.map((value, index) => (
          <TextField
            key={index}
            type="number"
            value={value}
            disabled
            style={{
              marginBottom: "1px",
              backgroundColor: "white",
              borderRadius: "4px",
              fontSize: "14px",
              width: "80%",
              padding: "0px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleEditValue(index)}>
                    <EditIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}

        {/* Collapsible Input for Adding/Editing */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <TextField
              fullWidth
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{ width: "80%", fontSize: "14px", padding: "0px", height: "20px",marginBottom: "3px" }}
              InputProps={{
                sx: { height: "28px", fontSize: "12px", padding: "5px" }, 
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <Button onClick={() => setExpanded(false)} variant="outlined" size="small">
                Cancel
              </Button>
              <Button onClick={handleSave} variant="contained" size="small">
                {editingIndex !== null ? "Update" : "Save"}
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
    </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      <div className="d-flex justify-content-between align-items-center">
              <Button style={{backgroundColor:"#800080"}} className="text-white mt-3" onClick={handlePagination} disabled={currentPage === 1}>Previous</Button>
              <Button style={{backgroundColor:"#800080"}} className='text-white mt-3' onClick={handlePagination} disabled={currentPage === totalPages}>Next</Button>
            </div>
    </div>
  );
};

export default OCR;
