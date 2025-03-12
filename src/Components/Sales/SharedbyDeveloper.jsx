






import React, { useState, useEffect } from 'react';
import {Input, Table, TableBody, TableCell, TableContainer, Typography,IconButton,TableHead, TableRow, Paper,Box,Tabs, Tab, Button, TextField, Grid ,MenuItem,FormControl,Select, InputLabel} from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash,FaUpload } from "react-icons/fa";
import FirmTable from './FirmTable';
import DisplayTable from "./DisplayTable";
import LandownerTable from "./LandownerTable";
import FlatAllotment from './FlatAllotement';
import { ToastContainer, toast } from 'react-toastify';


import { FaUsers, FaHome } from 'react-icons/fa'; // FontAwesome
import { AiOutlineFileSearch } from 'react-icons/ai'; // AntDesign
import { IoIosBuild } from 'react-icons/io'; // Ionicons



const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};




const sections = [
    { label: "Firm Display", icon: <FaBuilding size={20} color="purple" />, createLabel: "Create Firm" },
    { label: "Project Display", icon: <AiOutlineFileSearch size={20} color="orange" />, createLabel: "Create Project" },
    { label: "LandOwner Display", icon: <FaUsers size={20} color="green" />, createLabel: "Create Landowner Info" },  // Updated icon
    { label: "Flat Allotment Display", icon: <FaHome size={20} color="blue" />, createLabel: "Create Flat Allotment Info" },  // Updated icon
    { label: "Download PDF", icon: <FaFileDownload size={20} color="red" />, createLabel: "" }  // Updated icon
  ];


const tabNames = [ "firm", "display", "landowner","allotement"]; 
  
const SharedbyDeveloper = () => {
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
  const [fileNames, setFileNames] = useState({
    firmPanNoDocument: "",
    firmGstNoDocument: "",
    firmLightBillForAddressProof: "",
  });

   // Handle file selection and update the state with the file name
   const handleFileChange = (e, key) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFileNames((prevState) => ({
        ...prevState,
        [key]: file.name, // Update the file name for the corresponding key
      }));
    }
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

    console.log("Clicked Section Index:", index);
console.log("Sections Array:", sections);
console.log("Label at index 3:", sections[3]?.label);
console.log("Label length at index 3:", sections[3]?.label.length);
console.log("Label at index 3:", `"${sections[3]?.label}"`);

  if (sections[index].label === "Project Display") {
    setSelectedTab("display");
  } else if (sections[index].label === "Firm Display") {
    setSelectedTab("firm");
  } else if (sections[index].label === "LandOwner Display") {
    setSelectedTab("landowner");
  } else if (sections[index].label === "Flat Allotement Display") {
    setExpandedSection(index);
    setSelectedTab("allotement");
  }else {
    console.error("Unrecognized section label:", sections[index].label);
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
    
    if (/[^0-9]/.test(value)) {
      toast.error('Mobile number should only contain digits.');
    } else if (value.length > 10) {
      toast.error('Mobile number cannot exceed 10 digits.');
    }
    setMobileNo(value);
  };


  const handleMobileChange = (event, partnerIndex) => {
    const value = event.target.value;

    // If the value exceeds 10 digits, show a toast and prevent the change
    if (value.length > 10) {
      toast.error("Mobile number cannot exceed 10 digits!");
    } else {
      // Update the partner state or handle other changes here
      const updatedPartners = [...partners];
      updatedPartners[partnerIndex].mobile = value;
      setPartners(updatedPartners);
    }
  };

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
          firmName: '', 
        }));
      }
    }
  };
  

 
  
  return (
    <div className="main-content">
      <h6>Sales Module / Shared by Developer</h6>
     
   
 
    


   <div className="d-flex align-items-center mb-3">
        {sections.map((section, index) => (
            

          <Button
            key={index}
            onClick={() => handleToggleSection(index)}
            variant="outlined"
            color="success"
            className='m-3'
            // style={{ borderRadius: '20px' }}
            style={{
                borderRadius: '20px',
                border: 'none' 
              }}
            startIcon={section.icon}
            
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
     

          
        </div>

        <div className="mt-3">
          <FirmTable firms={loans} />
        </div>
      </>
    ) : null }
  </div>
)}







{expandedSection === 1 && selectedTab === "display" && (
  <div className="content-container mt-3">
    {!showProjectForm ? (
      <>
        <div className="button-container">
         
        </div>

        {/* Only display the table */}
        <div className="mt-3">
          <DisplayTable data={projectData} />
        </div>
      </>
    ) : null /* Do not show the form here when showProjectForm is true */}
  </div>
)}







{expandedSection === 2 && selectedTab === "landowner" && (
  <div className="content-container mt-3">
    {!showLandownerForm ? (
      <>
        <div className="button-container">
         
        </div>

    
        <div className="mt-3">
          <LandownerTable data={projectData} />
        </div>
      </>
    ) : null }
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
          {/* <Grid item xs={4}><TextField label="Name" fullWidth /></Grid> */}
          <Grid item xs={4}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={handleNameChange}
          error={!!nameError}
          helperText={nameError}
        />
      </Grid>
          {/* <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid> */}
          <Grid item xs={4}>
        <TextField
          label="Mobile No."
          fullWidth
          value={mobileNo}
          onChange={handleMobileNoChange}
          error={!!mobileNoError}
          helperText={mobileNoError}
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
}
   
 


export default SharedbyDeveloper;


