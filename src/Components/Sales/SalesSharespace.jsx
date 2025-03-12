

import React, { useState } from 'react';
import { FaProjectDiagram, FaShareAlt, FaEdit, FaEye } from 'react-icons/fa';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa'; 

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const SalesSharespace = () => {
  const [activeIcon, setActiveIcon] = useState('project');
  const [showForm, setShowForm] = useState(false);
  const [showProjectTable, setShowProjectTable] = useState(true); 
  const [rows, setRows] = useState([{}]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sharedWithMeRows, setSharedWithMeRows] = useState([
    {
      sharedFrom: "Sales",
      timestamp: "2024-02-24 10:30 AM",
      shareTo: "CRM",
      documentType: "PAN Card",
      document: "pan_card.pdf",
    },
    {
      sharedFrom: "Sales",
      timestamp: "2024-02-23 02:15 PM",
      shareTo: "Sales",
      documentType: "GST Certificate",
      document: "gst_certificate.pdf",
    }
  ]);

  const row = {
    shareTo: ['Sales', 'CRM','Admin','Legal','Engineering','Accounting'],
  };

  const options = [
    'Sales', 'CRM', 'Admin', 'Legal', 'Engineering', 'Accounting',
  ];

  const handleToggle = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleOutShare = () => {
    setShowForm(true);
    setShowProjectTable(false); 
    if (activeIcon === 'shared') {
      setSharedWithMeRows([]); 
    }
    if (activeIcon === 'project') {
      setShowForm(true);
      setShowProjectTable(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false); 
    setShowProjectTable(true); 
  };

  const handleShareToChange = (e, index) => {
    const newRows = [...rows];
    if (e.target.checked) {
      newRows[index].shareTo = [...(newRows[index].shareTo || []), e.target.value];
    } else {
      newRows[index].shareTo = newRows[index].shareTo.filter((item) => item !== e.target.value);
    }
    setRows(newRows);
  };

  const handleChange = (event, index) => {
    const { target: { value } } = event;
    setSelectedItems(typeof value === 'string' ? value.split(',') : value);
    handleShareToChange(event, index);
  };

  const handleDocumentTypeChange = (e, index) => {
    const newRows = [...rows];
    newRows[index].documentType = e.target.value;
    setRows(newRows);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // Handle file change
  const handleFileChange = (e, index) => {
    const newRows = [...rows];
    newRows[index].document = e.target.files[0];
    setRows(newRows);
  };

  // Add new row
  const addRow = () => {
    setRows([...rows, {}]);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(rows);
    setShowForm(false);
    setShowProjectTable(true);
    toast.success('Data submitted successfully!');
  };

  // Remove row
  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sharedWithMeRows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(sharedWithMeRows.length / rowsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container my-4">
      <h2 className="fs-6 mb-3">Developer Module / Share Space</h2>

      <div className="d-flex align-items-center gap-4">
        <div
          className="d-flex align-items-center gap-2 p-2"
          onClick={() => handleToggle('project')}
          style={{
            cursor: 'pointer',
            borderRadius: '20px',
            background: activeIcon === 'project' ? '#f8f9fa' : 'transparent',
          }}
        >
         
          <div className="d-flex justify-content-center align-items-center rounded-circle bg-white p-2 shadow">
  <FaEye size={26} color="#ff5733" />  
</div>
          {activeIcon === 'project' && <span>Out Share Display</span>}
        </div>

        <div
          className="d-flex align-items-center gap-2 p-2"
          onClick={() => handleToggle('shared')}
          style={{
            cursor: 'pointer',
            borderRadius: '20px',
            background: activeIcon === 'shared' ? '#f8f9fa' : 'transparent',
          }}
        >
         
          <div className="d-flex justify-content-center align-items-center rounded-circle bg-white p-2 shadow">
  <FaArrowRight size={26} color="#28a745" />  
</div>
          {activeIcon === 'shared' && <span>Collect Docs</span>}
        </div>
      </div>

     
      <div className="d-flex justify-content-between align-items-center mt-4">
        {activeIcon !== 'shared' && (
          <button className="btn btn-primary" onClick={handleOutShare}>Out Share</button>
        )}

      </div>

      
      {showForm && activeIcon === 'project' && (
        <div className="mt-4">
          <h4>Add Share Information</h4>
          <form>
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="fw-bold bg-primary text-center fs-5">Share To</th>
                  <th className="fw-bold bg-primary text-center fs-5">Type of Document</th>
                  <th className="fw-bold bg-primary text-center fs-5">Document</th>
                  <th className="fw-bold bg-primary text-center fs-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="select-share-to-label">Share To</InputLabel>
                        <Select
                          labelId="select-share-to-label"
                          id="select-share-to"
                          multiple
                          value={selectedItems}
                          onChange={(e) => handleChange(e, index)}
                          input={<OutlinedInput label="Share To" />}
                          renderValue={(selected) => selected.join(', ')}
                          MenuProps={MenuProps}
                        >
                          {options.map((option) => (
                            <MenuItem key={option} value={option}>
                              <Checkbox checked={selectedItems.includes(option)} />
                              <ListItemText primary={option} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </td>
                    <td>
                      <select
                        className="form-control"
                        value={row.documentType || ''}
                        onChange={(e) => handleDocumentTypeChange(e, index)}
                      >
                        <option value="">Select Type</option>
                        <option value="MCA certificate">MCA certificate</option>
                        <option value="PAN Card">PAN Card</option>
                      
                      </select>
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => handleFileChange(e, index)}
                      />
                    </td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => handleRemoveRow(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>

          <button className="btn btn-secondary me-2" onClick={addRow}>Add Row</button>
          <button className="btn btn-success me-2" onClick={handleSubmit}>Submit</button>
          <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      )}

    


{showProjectTable && activeIcon === 'project' && (
  <div className="mt-4">
    <TableContainer component={Paper}>
      <Table className="table" size="small" aria-label="project table">
        <TableHead className=''>
        
          <TableRow sx={{ background: "#3621a9 !important" }}>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Timestamp</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Share To</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Type of Document</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Document</TableCell>
          </TableRow>
          

        </TableHead>
     
        <TableBody>
       
          <TableRow>
            <TableCell>{/* Action Data */}</TableCell>
            <TableCell>{/* Timestamp Data */}</TableCell>
            <TableCell>{/* Share To Data */}</TableCell>
            <TableCell>{/* Type of Document Data */}</TableCell>
            <TableCell>{/* Document Data */}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)}

      {/* Collect Docs Section */}
      {activeIcon === 'shared' && (
        <div className="mt-4">
         
          <table className="table table-bordered table-sm">
            <thead>
              <tr style={{ background:"#3621a9"}}>
                <th className="fw-bold bg-primary text-center fs-5">Shared From</th>
                <th className="fw-bold bg-primary text-center fs-5">Timestamp</th>
                <th className="fw-bold bg-primary text-center fs-5">Share To</th>
                <th className="fw-bold bg-primary text-center fs-5">Type Of Document </th>
                <th className="fw-bold bg-primary text-center fs-5">Document</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.sharedFrom}</td>
                  <td>{row.timestamp}</td>
                  <td>{row.shareTo}</td>
                  <td>{row.documentType}</td>
                  <td>{row.document}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SalesSharespace;
