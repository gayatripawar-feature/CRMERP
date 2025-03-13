

import React, { useState, useEffect } from 'react';
import {Input, Table, TableBody, TableCell, TableContainer, Typography,IconButton,TableHead, TableRow, Paper,Box,Tabs, Tab, Button, TextField, Grid ,MenuItem,FormControl,Select, InputLabel} from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash,FaUpload } from "react-icons/fa";
import FirmTable from './FirmTable';
import DisplayTable from "./DisplayTable";
import LandownerTable from "./LandownerTable";
import FlatAllotment from './FlatAllotement';
import { ToastContainer, toast } from 'react-toastify';

const sections = [
    { label: "Pending Follow Up", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
    { label: "Follow Up History", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
    { label: "Undefined", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
    { label: "Visit Sceduled", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
 
  ];
  const tabNames = [ "firm", "display", "landowner","allotement"]; 

const LeadsFollowUp = () => {


     
    const [loans, setLoans] = useState([]);
    const [expandedSection, setExpandedSection] = useState(0); // Ensure expandedSection is defined here
    const [showFirmForm, setShowFirmForm] = useState(false);
    // const [partners, setPartners] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [phases, setPhases] = useState([]);
    const [showLandownerForm, setShowLandownerForm] = useState(false); 
    const [showFlatForm, setShowFlatForm] = useState(false); 
    const [selectedTab, setSelectedTab] = useState("firm");
    const [projectData, setProjectData] = useState([]);
    const[FlatAllotement , setFlatAllotement] = useState([false]);
    const [selectedProject, setSelectedProject] = useState('');
    const [Flatdata, setFlatdata] = useState([]);
    const [selectedBank, setSelectedBank] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [nameError, setNameError] = useState('');
    const [mobileNoError, setMobileNoError] = useState('');
    const [panError, setPanError] = useState("");
  
    const [firmName, setFirmName] = useState("");
    const [firmNameError, setFirmNameError] = useState("");
  
    const [mobileError, setMobileError] = useState("");
    const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState("");
  
    const [firmPan, setFirmPan] = useState("");
    const [firmPanError, setFirmPanError] = useState("");
    // const [age, setAge] = useState("");
    const [ageError, setAgeError] = useState("");
    const [occupationError, setOccupationError] = useState(""); 
  
    const [closingExecutive, setClosingExecutive] = useState('');
    const [accountNo, setAccountNo] = useState(""); // Initialize the account number state
  const [accountNoError, setAccountNoError] = useState("");
  
  const [ifscCode, setIfscCode] = useState(""); 
  const [ifscCodeError, setIfscCodeError] = useState("");
  const [status, setStatus] = useState({});
  
    const [fileNames, setFileNames] = useState({
      firmPanNoDocument: "",
      firmGstNoDocument: "",
      firmLightBillForAddressProof: "",
    });
  
  
    const handleFirmPanChange = (e) => {
      const value = e.target.value;
      setFirmPan(value);
      
      const panRegex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
      if (!panRegex.test(value)) {
        setFirmPanError("Invalid PAN format. Format should be: AAAAA1234A");
      } else {
        setFirmPanError(""); 
      }
    };
  
    
     const handleFileChange = (e, key) => {
      const file = e.target.files[0]; 
      if (file) {
        setFileNames((prevState) => ({
          ...prevState,
          [key]: file.name, 
        }));
      }
    };
  
    const handleAgeChange = (e, index) => {
      const value = e.target.value;
      const updatedPartners = [...partners];
      updatedPartners[index].age = value; // Update the age of the specific partner
      setPartners(updatedPartners); // Update the state
    
      // Validate the age value
      validateAge(value); // You should already have this function defined
    };
  
    const handleStatusChange = (event, leadId) => {
        setStatus({
          ...status,
          [leadId]: event.target.value
        });
      };
  
  
    const handleOccupationChange = (e, index) => {
      const value = e.target.value;
      const updatedPartners = [...partners];
      updatedPartners[index].occupation = value; // Update the occupation field
      setPartners(updatedPartners); // Update the state
    };
  
    
  
  
    const [partners, setPartners] = useState([
      { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }
    ]);
    
    useEffect(() => {
      console.log("Updated Selected Tab:", selectedTab);
      loadLoansData();
    }, []);
  
    const loadLoansData = async () => {
      const data = await fetchLoansData();
      setLoans(data);
    };
  
  
  const handleTabClick = (index) => {
      console.log("Clicked Section Index:", index);
      console.log("Selected Tab Before Update:", selectedTab);
      setSelectedTab(tabNames[index]); 
  };
  
    const handleTabChange = (_, newValue) => {
      setSelectedTab(newValue);
    };
  
  
    const handleToggleSection = (index) => {
      if (sections[index].label === "Download PDF") {
        handleDownloadPDF();
        return;
      }
      console.log("Clicked Section Index:", index);
      console.log("Selected Tab Before Update:", selectedTab);
      setExpandedSection(index);  
  
        // Set selected tab dynamically based on the section clicked
    if (sections[index].label === "Project Display") {
      setSelectedTab("display");
    } else if (sections[index].label === "Firm Display") {
      setSelectedTab("firm");
    } else if (sections[index].label === "LandOwner Display") {
      setSelectedTab("landowner");
    } else if (sections[index].label === "Flat Allotement Display") {
      setSelectedTab("allotement");
    }
  
  
    
      setShowFirmForm(false);
      setShowProjectForm(false); 
      setShowLandownerForm(false); 
      // setFlatAllotement(false);
      setShowFlatForm(false);
    };
  
    const [newPhase, setNewPhase] = useState({
      phaseNo: '',
      wingNo: '',
      mahareraNo: ''
    });
  
    
     {/* Table Section */}
     {selectedTab === "firm" && <FirmTable />}
     {selectedTab === "display" && <DisplayTable />}
     {selectedTab === "landowner" && <LandownerTable />}
     {selectedTab === "allotement" && <FlatAllotement/>}
  
    const handleDownloadPDF = () => {
      const link = document.createElement("a");
      link.href = "/path/to/demand_letter.pdf";
      link.download = "Demand_Letter.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const handleAddPartner = () => {
      setPartners([...partners, { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }]);
    };
  
    const handleRemovePartner = (index) => {
      setPartners(partners.filter((_, i) => i !== index));
    };
  
    const handleAddPhase = () => {
      setPhases([...phases, { phaseNo: "", wingNo: "", mahareraNo: "" }]); // Add default empty phase
    };
  
    const handleRemovePhase = (index) => {
      setPhases(phases.filter((_, i) => i !== index));
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const handleCreateFirm = () => {
      setShowFirmForm(false);
      setShowProjectForm(false);
    };
  
    const handleCreateProject = () => {
      setShowProjectForm(true);
    };
  
    const documentLabels = [
      "Residential Address Document",
      "PAN No Document",
      "Aadhaar No Document",
      "Photo Document",
      "Light Bill for Address Proof",
    ];
  
    const handleBankChange = (event) => {
      setSelectedBank(event.target.value);
    };
  
    const handlePANChange = (e, index) => {
      const updatedPartner = { ...partners[index], pan: e.target.value };
      
      // Validate PAN No.
      const isValidPAN = validatePAN(updatedPartner.pan);
      if (!isValidPAN) {
        setPanError("Invalid PAN number format.");
      } else {
        setPanError(""); // Clear error if valid
      }
    
      // Update partner state
      setPartners((prevPartners) => {
        const newPartners = [...prevPartners];
        newPartners[index] = updatedPartner;
        return newPartners;
      });
    };
    
  
    const handleNameChange = (event) => {
      const value = event.target.value;
  
     
      if (/[^a-zA-Z\s]/.test(value)) {
        setError('Name should only contain letters and spaces.');
      } else {
        setError('');
      }
  
      setName(value);
    };
  
   
    const handleMobileNoChange = (event) => {
      const value = event.target.value;
    
      // Validate the input value
      if (/[^0-9]/.test(value)) {
        setMobileError('Mobile number should only contain digits.');
      } else if (value.length > 10) {
        setMobileError('Mobile number cannot exceed 10 digits.');
      } else {
        setMobileError(''); // Clear the error when it's valid
      }
    
      // Update the mobile number value
      setMobileNo(value);
    };
    
  
    const handleAccountNoChange = (e) => {
      const value = e.target.value;
      
      // Regular expression to check if the value is numeric and has a valid length (e.g., 10-16 digits)
      const accountNoRegex = /^[0-9]{10,16}$/; // 10 to 16 digits
    
      if (value && !accountNoRegex.test(value)) {
        setAccountNoError("Account number must be between 10 to 16 digits.");
      } else {
        setAccountNoError(""); // Clear the error if valid
      }
    
      // Update the account number in the state
      setAccountNo(value);
    };
  
    
   
    const validatePAN = (pan) => {
      const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format: 5 letters, 4 digits, 1 letter
      return panPattern.test(pan);
    };
  
    
  
    const handlePartnerNameChange = (e, index) => {
      const value = e.target.value;
      const partnerCopy = [...partners];
      
      // Regex to check if the value contains any numbers
      if (/\d/.test(value)) {
        setNameError("Name should only contain letters"); // Error message if numbers are present
      } else {
        setNameError(""); // Clear error message if the value is valid
      }
  
      // Update the partner's name in the state
      partnerCopy[index] = { ...partnerCopy[index], name: value };
      setPartners(partnerCopy);
    };
  
  
    const handleFirmNameChange = (e) => {
      const value = e.target.value;
  
      // Regex to check if the value contains any numbers
      if (/\d/.test(value)) {
        setFirmNameError("Firm Name should only contain letters"); // Error message if numbers are present
      } else {
        setFirmNameError(""); // Clear error message if the value is valid
      }
  
      // Update the firm name in the state
      setFirmName(value);
    };
  
  
  
    const validateFirmName = () => {
      if (!firmName.trim()) {
        setFirmNameError("Firm Name is required.");
        return false;
      }
      setFirmNameError("");
      return true;
    };
  
  
    const [formValues, setFormValues] = useState({
      firmName: "",
      projectName: "",
      projectAddress: "",
      oldSurveyNumber: "",
      newSurveyNumber: "",
      village: "",
      taluka: "",
      district: "",
      sanctionAuthority: "",
      east: "",
      west: "",
      north: "",
      south: "",
      latitude: "",
      longitude: "",
      landmark: "",
    });
  
    // State to store validation errors
    const [errors, setErrors] = useState({
      firmName: "",
    });
    
  
    const handleChange = (e, label, partnerIndex) => {
      const { value } = e.target;
    
      // Update the partners array with the new value for the specific field
      const updatedPartners = [...partners];
      updatedPartners[partnerIndex][label.toLowerCase().replace(/ /g, "")] = value;
      setPartners(updatedPartners);
    
      // Apply validation for the 'firmName' field
      if (label === 'Firm Name') {
        // Check if the input contains only letters and spaces
        if (!/^[A-Za-z\s]*$/.test(value)) {
          setErrors((prev) => ({
            ...prev,
            firmName: 'Firm Name should only contain letters and spaces',
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            firmName: '', // Clear the error if valid
          }));
        }
      }
    };
    
    
  
    const validateAge = (age) => {
      if (!age || age < 0 || age > 120) {
        setAgeError("Please enter a valid age between 0 and 120");
      } else {
        setAgeError("");
      }
    };
    
    
    const handleIfscCodeChange = (e) => {
      const value = e.target.value;
    
      // Regular expression to validate IFSC code format
      const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    
      if (value && !ifscRegex.test(value)) {
        setIfscCodeError("Invalid IFSC code. It should be in the format: XXXX0XXXXX.");
      } else {
        setIfscCodeError(""); // Clear the error if valid
      }
    
      // Update the IFSC code in the state
      setIfscCode(value); // Assuming you have a state for the IFSC code
    };
    
  
    const handleMobileChange = (e, index) => {
      const value = e.target.value;
      const partnerCopy = [...partners];
    
      // Validate Mobile No. to ensure it doesn't exceed 10 digits
      if (/[^0-9]/.test(value)) {
        setMobileError("Mobile number should only contain digits");
      } else if (value.length > 10) {
        setMobileError("Mobile number cannot exceed 10 digits");
      } else {
        setMobileError(""); // Clear the error if the value is valid
      }
    
      // Update the partner's mobile number in the state
      partnerCopy[index] = { ...partnerCopy[index], mobileNo: value };
      setPartners(partnerCopy);
    };
    
    const handleEmailChange = (e, index) => {
      const value = e.target.value;
      const partnerCopy = [...partners];
    
      // Regular expression to validate Gmail email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
      if (value && !emailRegex.test(value)) {
        setEmailError("Invalid Gmail address");
        console.log("invalid email");
      } else {
        setEmailError(""); // Clear the error if the value is valid
      }
    
      // Update the partner's email in the state
      partnerCopy[index] = { ...partnerCopy[index], email: value };
      setPartners(partnerCopy);
    };
  
  
  
    const validateForm = () => {
      
    };
    
    const handleClosingExecutiveChange = (event) => {
        setClosingExecutive(event.target.value);
      };
    
    return (
      <div className="main-content">
        <h6>Developer Module / Basic Information Management</h6>
       
     
   
      
  
  
        <div className="d-flex align-items-center mb-3">
          {sections.map((section, index) => (
            <Button
              key={index}
              onClick={() => handleToggleSection(index)}
              variant="outlined"
              color="success"
              className='m-3'
              style={{ borderRadius: '20px' }}
              startIcon={<FaEye size={20} color="#28a745" />}
            >
              {expandedSection === index ? section.label : null}
            </Button>
          ))}
        </div>
  
        
  
       
  {expandedSection === 0 && selectedTab === "firm" && (
    <div className="content-container mt-3">
      {!showFirmForm ? (
        <>
          <div className='button-container'>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ background: '#272ba8' }} 
              className='fw-bold'
              onClick={() => setShowFirmForm(true)}
            >
              + New Follow UP
            </Button>
  
            {/* Previous and Next buttons on the right */}
            <div className="right-buttons">
              <Button variant="contained" color="secondary" onClick={handlePrevious}>
                Previous
              </Button>
              <Button variant="contained" color="secondary" onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>
  
          <div className="mt-3">
            <FirmTable firms={loans} />
          </div>
        </>
      ) : (
     
  
      <div className="firm-form mt-4 p-3" style={{ maxHeight: "500px", overflowY: "auto", paddingRight: "10px" }}>
      <Paper className="p-4" elevation={4} style={{ borderRadius: "12px", paddingBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          
        </Typography>
  
       
        
        <Grid container spacing={2}>
    <Grid item xs={6}>
      <TextField
        label="Lead No"
        fullWidth
        variant="outlined"
        value={firmName}
        onChange={handleFirmNameChange} 
        error={!!firmNameError} 
        helperText={firmNameError} 
      />
    </Grid>
    {/* <Grid item xs={6}>
      <TextField
        label="Closing Executive"
        fullWidth
        variant="outlined"
      />
       <Grid container spacing={3}>
      {/* Closing Executive Field */}
      <Grid item xs={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="closing-executive-label">Closing Executive</InputLabel>
          <Select
            labelId="closing-executive-label"
            id="closing-executive"
            value={closingExecutive}
            onChange={handleClosingExecutiveChange}
            label="Closing Executive"
          >
            {/* Sales Person options */}
            <MenuItem value="Shilpha Mewada 1">Shilpha Mewada 1</MenuItem>
            <MenuItem value="Tic Tac Toe Sohan">Tic Tac Toe Sohan</MenuItem>
            <MenuItem value="Shilpha Mewada">Shilpha Mewada</MenuItem>
            <MenuItem value="VIVEK TAPKIR">VIVEK TAPKIR</MenuItem>
            <MenuItem value="Shubham Taware">Shubham Taware</MenuItem>
            <MenuItem value="Ashwini Khot">Ashwini Khot</MenuItem>
            <MenuItem value="Amol Pawar">Amol Pawar</MenuItem>
            <MenuItem value="Sachin Awale">Sachin Awale</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    {/* </Grid> */}

  
    <Grid item xs={6}>
      <TextField
        label="Remark"
        fullWidth
        variant="outlined"
        value={firmPan}
              onChange={handleFirmPanChange}
              error={!!firmPanError}  // Show error if there is an error
              helperText={firmPanError}
      />
    </Grid>

    <Grid item xs={6}>
      <TextField
        label="status"
        fullWidth
        variant="outlined"
        value={firmPan}
              onChange={handleFirmPanChange}
              error={!!firmPanError}  // Show error if there is an error
              helperText={firmPanError}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        label="Assign To"
        fullWidth
        variant="outlined"
      />
    </Grid>
    
    <Grid item xs={6}>
      <TextField
        label="Lead type"
        fullWidth
        variant="outlined"
      />
    </Grid>


    <Grid item xs={6}>
      <TextField
        label="

Next Follow Up"
        fullWidth
        variant="outlined"
      />
    </Grid>
  </Grid>
  
  

  
  
  
  
        <Button
          variant="contained"
          className="m-3"
          color="success"
          onClick={() => {
            // Simply show the toast message without calling validation functions
            toast.success("Details are submitted!", { position: "top-right", autoClose: 3000 });
            
            // If you want to close the form (or any other logic), you can add it here
            setShowFirmForm(false); // Example of hiding the form after submission
          }}
        >
          Submit
        </Button>
      </Paper>
    </div>
      
      )}
    </div>
  )}
  
  
  
  {expandedSection === 1 && selectedTab === "display" && (
    <div className="content-container mt-3">
     
      {!showProjectForm ? (
         <>
        
  <div className='button-container'>
  <Button variant="contained" color="primary" style={{ background: '#272ba8' }} className='fw-bold'
  onClick={() => {
     console.log("Before:", showProjectForm);
     setShowProjectForm(true);
     console.log("After:", showProjectForm);
  }}>
  + Create Project
  </Button>
  
  
   <div className="right-buttons">
        <Button variant="contained" color="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNext}>
          Next
        </Button>
      </div>
      </div>
  
  <div className='mt-3'>
  <DisplayTable data={projectData} />
  </div>
     </>
      ) : (
       
  
  
        <div
    className="project-form mt-4 p-3"
    style={{
      maxHeight: "500px", 
      overflowY: "auto",
      paddingRight: "10px",
    }}
  >
    <Paper className="p-4" elevation={4} style={{ borderRadius: "12px", paddingBottom: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Project Details
      </Typography>
  
     
  
  <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Firm Name"
                fullWidth
                variant="outlined"
                value={firmName}
                onChange={handleFirmNameChange} // Handle Firm Name change with validation
                error={!!firmNameError} // Show error state for Firm Name field
                helperText={firmNameError} // Display error message if any
              />
            </Grid>
  
            {/* Other fields */}
            {[
              'Project Name',
              'Project Address',
              'Old Survey Number',
              'New Survey Number',
              'Village',
              'Taluka',
              'District',
              'Sanction Authority',
              'East',
              'West',
              'North',
              'South',
              'Latitude',
              'Longitude',
              'Landmark',
            ].map((label, index) => (
              <Grid item xs={6} key={index}>
                <TextField
                  label={label}
                  fullWidth
                  variant="outlined"
                  value={formValues[label.toLowerCase().replace(/ /g, '')]} // Dynamically bind value
                  onChange={(e) => handleChange(e, label)} // Handle change for other fields
                />
              </Grid>
            ))}
          </Grid>
      
  
      <Typography variant="h5" className="mt-4" gutterBottom>
        Phase Details
      </Typography>
  
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Phase No</TableCell>
              <TableCell>Wing No</TableCell>
              <TableCell>Maharera No</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {phases.map((phase, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={phase.phaseNo}
                    onChange={(e) =>
                      setPhases(
                        phases.map((p, i) =>
                          i === index ? { ...p, phaseNo: e.target.value } : p
                        )
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={phase.wingNo}
                    onChange={(e) =>
                      setPhases(
                        phases.map((p, i) =>
                          i === index ? { ...p, wingNo: e.target.value } : p
                        )
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={phase.mahareraNo}
                    onChange={(e) =>
                      setPhases(
                        phases.map((p, i) =>
                          i === index ? { ...p, mahareraNo: e.target.value } : p
                        )
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemovePhase(index)}
                  >
                    <FaTrash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <Button className="m-2" variant="contained" color="primary" onClick={handleAddPhase}>
          <FaPlus /> Add Row
        </Button>
  
     
   <Button
    variant="contained"
    className="mt-3"
    color="success"
    onClick={() => {
      setShowFirmForm(false);
      toast.success("details are submitted!", { position: "top-right", autoClose: 3000 });
    }}
  >
    Submit
  </Button>
    
      </div>
    </Paper>
  </div>
  
      )}
    </div>
  )} 
  
  
  
  
  
  
  
  
  
  
  {expandedSection === 2 && selectedTab === "landowner" && (
    <div className="content-container mt-3">
     
      {!showLandownerForm ? (
         <>
         <div className='button-container'>
        <Button variant="contained" color="primary" style={{ background: '#272ba8' }} className='fw-bold'
        onClick={() => setShowLandownerForm(true)}>
          + Display LandOwner Info
        </Button>
    
    <div className="right-buttons">
        <Button variant="contained" color="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNext}>
          Next
        </Button>
      </div>
      </div>
  <div className='mt-3'>
  <LandownerTable data={projectData} />
  </div>
  </>
  
      ) : (
        <div
          className="landowner-form mt-4 p-3 border rounded"
         
          style={{
            maxHeight: "500px",
            overflowY: "auto",
            backgroundColor: "#f8f9fa", 
            border: "1px solid #ccc", 
          }}
        >
          <h5>Landowner Details</h5>
          <Grid container spacing={2}>
            {/* <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid> */}
            <Grid item xs={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="project-name-label">Project Name</InputLabel>
            <Select
              labelId="project-name-label"
              id="project-name-select"
              value={selectedProject}
              onChange={handleChange}
              label="Project Name"
            >
              <MenuItem value="Project Name 1">Project Name 1</MenuItem>
              <MenuItem value="Project Name 121">Project Name 121</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="PROJECT NAME">PROJECT NAME</MenuItem>
              <MenuItem value="Shubh Elara">Shubh Elara</MenuItem>
              <MenuItem value="Sohan Enterprised">Sohan Enterprised</MenuItem>
            </Select>
          </FormControl>
        </Grid>
           
                  <Grid item xs={4}>
        <TextField
          label="Mobile No."
          fullWidth
          value={mobileNo}
          onChange={handleMobileNoChange}
          error={!!mobileError} 
          helperText={mobileError} 
        />
      </Grid>
  
  
            <Grid item xs={4}><TextField label="Landowner Name" fullWidth value={name} onChange={handleNameChange}
             error={!!error} 
             helperText={error}
            /></Grid>
            <Grid item xs={4}><TextField type="number" label="Age" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
       
  
           
  <Grid item xs={4}>
    <TextField
      label="Mail ID"
      fullWidth
      
      onChange={handleEmailChange} 
      error={!!emailError} 
      helperText={emailError} 
    />
  </Grid>
  
  
            <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
            {/* <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid> */}
            <Grid item xs={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="bank-name-label">Name of Bank</InputLabel>
            <Select
              labelId="bank-name-label"
              id="bank-name-select"
              value={selectedBank}
              onChange={handleBankChange}
              label="Name of Bank"
            >
              <MenuItem value="SBI Bank">SBI Bank</MenuItem>
              <MenuItem value="Bank Of Baroda">Bank Of Baroda</MenuItem>
              <MenuItem value="Canara Bank">Canara Bank</MenuItem>
              <MenuItem value="Axis Bank">Axis Bank</MenuItem>
              <MenuItem value="Bank of India">Bank of India</MenuItem>
              <MenuItem value="ICICI Bank">ICICI Bank</MenuItem>
              <MenuItem value="HDFC Bank">HDFC Bank</MenuItem>
              <MenuItem value="Bank of Maharashtra">Bank of Maharashtra</MenuItem>
              <MenuItem value="Central Bank of India">Central Bank of India</MenuItem>
              <MenuItem value="Punjab National Bank">Punjab National Bank</MenuItem>
              <MenuItem value="Bandhan Bank">Bandhan Bank</MenuItem>
              <MenuItem value="Indian Bank">Indian Bank</MenuItem>
              <MenuItem value="IDBI Bank">IDBI Bank</MenuItem>
            </Select>
          </FormControl>
        </Grid>
            <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
            
            {/* <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid> */}
            <Grid item xs={4}>
    <TextField
      label="Account No."
      fullWidth
      value={accountNo} // Bind the value of the account number state
      onChange={handleAccountNoChange} // Trigger onChange handler
      error={!!accountNoError} // Show error if there's an accountNoError
      helperText={accountNoError} // Display error message if any
    />
  </Grid>
  
            {/* <Grid item xs={4}><TextField label="IFSC Code" sx={{
        marginTop: "13px",
        
      }} fullWidth /></Grid> */}
      <Grid item xs={4}>
    <TextField
      label="IFSC Code"
      fullWidth
      value={ifscCode} // Bind the state value for the IFSC code
      onChange={handleIfscCodeChange} // Handle change and validation
      error={!!ifscCodeError} // Show error if there's an error
      helperText={ifscCodeError} // Display error message if any
    />
  </Grid>
  
            {/* <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid> */}
            {/* <Grid item xs={4}>
              <TextField type="file" accept="image/*" />
            </Grid> */}
  
  <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                Aadhaar No.
              </Typography>
              <label>
                <Input
                  type="file"
                  style={{ display: "none" }} // Hide the default input
                  id="file-input-aadhaar" // Unique ID for the file input
                  onChange={(e) => handleFileChange(e, "aadhaarFile")} // Handle file selection
                />
                <Button
                  variant="contained"
                  color="light"
                  component="span"
                  // onClick={() => document.getElementById("file-input-aadhaar").click()} // Trigger the file input
                >
                  Choose File
                </Button>
              </label>
              {fileNames.aadhaarFile && (
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "8px" }}>
                  {fileNames.aadhaarFile} {/* Display the selected file name */}
                </Typography>
              )}
            </Grid>
  
  
  
            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
              Photo
              </Typography>
              <label>
                <Input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }} // Hide the default input
                  id="file-input-image" // Unique ID for the file input
                  onChange={(e) => handleFileChange(e, "imageFile")} // Handle file selection
                />
                <Button
                  variant="contained"
                  color="light"
                  component="span"
                  // onClick={() => document.getElementById("file-input-image").click()} // Trigger the file input
                >
                  Choose File
                </Button>
              </label>
              {fileNames.imageFile && (
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "8px" }}>
                  {fileNames.imageFile} {/* Display the selected file name */}
                </Typography>
              )}
            </Grid>
  
  
            <Grid item xs={4} sx={{ marginTop: "6px"}}>
              <Typography variant="body2" gutterBottom>
                Residential Address
              </Typography>
              <label>
                <Input
                  type="file"
                  style={{ display: "none" }}
                  id="file-input-address"
                  onChange={(e) => handleFileChange(e, "addressFile")}
                />
                <Button
                  variant="contained"
                  color="light"
                  component="span"
                 
                >
                  Choose File
                </Button>
              </label>
              {fileNames.addressFile && (
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "8px" }}>
                  {fileNames.addressFile}
                </Typography>
              )}
            </Grid>
  
            {/* PAN No. File Upload */}
            <Grid item xs={4} sx={{ marginTop: "6px"}}>
              <Typography variant="body2" gutterBottom>
                PAN No.
              </Typography>
              <label>
                <Input
                  type="file"
                  style={{ display: "none" }}
                  id="file-input-pan"
                  onChange={(e) => handleFileChange(e, "panFile")}
                />
                <Button
                  variant="contained"
                  color="light"
                  component="span"
                  // onClick={() => document.getElementById("file-input-pan").click()}
                >
                  Choose File
                </Button>
              </label>
              {fileNames.panFile && (
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "8px" }}>
                  {fileNames.panFile}
                </Typography>
              )}
            </Grid>
  
            {/* Light Bill File Upload */}
            <Grid item xs={4} sx={{ marginTop: "6px"}}>
              <Typography variant="body2" gutterBottom>
                Light Bill
              </Typography>
              <label>
                <Input
                  type="file"
                  style={{ display: "none" }}
                  id="file-input-lightbill"
                  onChange={(e) => handleFileChange(e, "lightBillFile")}
                />
                <Button
                  variant="contained"
                  color="light"
                  component="span"
                  // onClick={() => document.getElementById("file-input-lightbill").click()}
                >
                  Choose File
                </Button>
              </label>
              {fileNames.lightBillFile && (
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "8px" }}>
                  {fileNames.lightBillFile}
                </Typography>
              )}
            </Grid>
  
          
          </Grid>
  
     
  
         
          
  <Button
    variant="contained"
    className="mt-3"
    color="success"
    onClick={() => {
      setShowFirmForm(false);
      toast.success("details are submitted!", { position: "top-right", autoClose: 3000 });
    }}
  >
  Submit Landowner Info
  </Button>
        </div>
      )}
    </div>
  )}
  
  
  {expandedSection === 3 && selectedTab === "allotement" && (
    <div className="content-container mt-3">
      {!showFlatForm ? (
        <>
        
          
          <div className="button-container">
   
      <Button variant="contained" color="primary" style={{ background: '#272ba8' }} className='fw-bold'
      onClick={() => setShowFlatForm(true)}>
        + Flat Allotment Info
      </Button>
  
  
      <div className="right-buttons">
        <Button variant="contained" color="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  
  
          <div className="mt-3">
            <FlatAllotment data={Flatdata} />
          </div>
        </>
      ) : (
        <div className="landowner-form mt-4 p-3 border rounded" style={{
          backgroundColor: "#f8f9fa", 
          border: "1px solid #ccc", 
        }}>
          <h5>Flat Allotement Display </h5>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          
          <Grid item xs={4}><TextField label="Landowner Name" fullWidth value={name} onChange={handleNameChange}
             error={!!error}
             helperText={error}
            /></Grid>
            
  
  <Grid item xs={4}>
        <TextField
          label="Mobile No."
          fullWidth
          value={mobileNo}
          onChange={handleMobileNoChange}
          error={!!mobileError} 
          helperText={mobileError} 
        />
      </Grid>
  
            <Grid item xs={4}><TextField type="number" label="No. of Flats Alloted" fullWidth /></Grid>
          </Grid>
          <h4 className="pt-3">Flat Details</h4>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "primary.main" }}>
                  <TableCell  sx={{ color: "white", fontWeight: "bold" }}>RERA CARPET AREA (SQ FT)</TableCell>
                  <TableCell  sx={{ color: "white", fontWeight: "bold" }}>WING</TableCell>
                  <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FLAT NO.</TableCell>
                  <TableCell  sx={{ color: "white", fontWeight: "bold" }}> TYPE OF FLAT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
              <TableCell><TextField fullWidth variant="outlined" /></TableCell>
          <TableCell><TextField fullWidth variant="outlined" /></TableCell>
          <TableCell><TextField fullWidth variant="outlined" /></TableCell>
          <TableCell><TextField fullWidth variant="outlined" /></TableCell>
        </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
  
         
  
  <Button
    variant="contained"
    className="mt-3"
    color="success"
    onClick={() => {
      setShowFirmForm(false);
      toast.success("details are submitted!", { position: "top-right", autoClose: 3000 });
    }}
  >
  Submit Flat Allotement Info
  </Button>
        </div>
      )}
    </div>
  )}
  
  
  
    </div>
    )
  };
     
   
    


export default LeadsFollowUp;