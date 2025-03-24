



import React, { useState, useEffect } from 'react';
import {Input, Table, TableBody, TableCell, TableContainer, Typography,IconButton,TableHead, TableRow, Paper,Box,Tabs, Tab, Button, TextField, Grid ,MenuItem,FormControl,Select, InputLabel} from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash,FaUpload } from "react-icons/fa";
import FirmTable from './FirmTable';
import DisplayTable from "./DisplayTable";
import LandownerTable from "./LandownerTable";
import FlatAllotment from './FlatAllotement';
import { ToastContainer, toast } from 'react-toastify';
import FollowupHistoryTable from './FollowupHistoryTable';
import UndefinedTable from './UndefinedTable';
import BookedTable from './BookedTable';

import Lostleadstable from "./Lostleadstable";
import LostVisitTable from './LostVisitTable';
import BookingFormTable from './BookingFormTable';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns'; 
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FaRegUser } from "react-icons/fa";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Named import

const sections = [
    { label: "Booking Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
    
  ];
  const tabNames = [ "firm"]; 

const  BookingForm = () => {


     
    const [loans, setLoans] = useState([]);
    const [leadType, setLeadType] = useState("");
    const [assignedTo, setAssignedTo] = useState(""); 
    // const [expandedSection, setExpandedSection] = useState(0); 
    const [showFirmForm, setShowFirmForm] = useState(false);
   
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
  const [emailId1, setEmailId1] = useState("");

    const [firmPan, setFirmPan] = useState("");
    const [firmPanError, setFirmPanError] = useState("");
    
    const [ageError, setAgeError] = useState("");
    const [occupationError, setOccupationError] = useState(""); 
  
    const [closingExecutive, setClosingExecutive] = useState('');
    const [accountNo, setAccountNo] = useState("");
  const [accountNoError, setAccountNoError] = useState("");
  
  const [ifscCode, setIfscCode] = useState(""); 
  const [ifscCodeError, setIfscCodeError] = useState("");
  const [status, setStatus] = useState({});
  
  const [data, setData] = useState([]); 
  const [panNumber, setPanNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
//   const [leadType, setLeadType] = useState('');
const [dateOfBirth, setDateOfBirth] = useState('');


  const [mobileEmail, setMobileEmail] = useState('');
  const dummyData = [
    {
      action: "Edit",
      lastFollowUp: "",
      status: "",
      remark: "",
      nextFollowUp: "",
      assignTo: "",
      enquiryNo: "",
      leadNo: "",
      name: "",
      salesExe: "",
      mobile: "",
      whatsapp: "",
      alternateContact: "",
      email: "",
      address: "",
      occupation: "",
      company: "",
      interested: "",
      budget: "",
      reason: "",
      reference: "",
      nameOfCP: "",
      planningToBuy: "",
      followupDetails: "",
    },
  ];



    const [fileNames, setFileNames] = useState({
      firmPanNoDocument: "",
      firmGstNoDocument: "",
      firmLightBillForAddressProof: "",
    });
  
 
    const [carpetArea, setCarpetArea] = useState('');
  const [wing, setWing] = useState('');
  const [flatNo, setFlatNo] = useState('');
  const [type, setType] = useState('');
  const [soldRate, setSoldRate] = useState('');
  const [enclosedBalcony, setEnclosedBalcony] = useState('');
  const [openBalcony, setOpenBalcony] = useState('');
  const [terrace, setTerrace] = useState('');
  const [parking, setParking] = useState('');
  const [floor, setFloor] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  // const [mobileError, setMobileError] = useState('');
  // State for Section 3: Consideration
  const [bookingAmount, setBookingAmount] = useState('');
  const [totalConsideration, setTotalConsideration] = useState('');
  const [stampDuty, setStampDuty] = useState('');
  const [registrationFee, setRegistrationFee] = useState('');
  const [gstAmount, setGstAmount] = useState('');

  // State for Section 4: Documents
  const [panCard, setPanCard] = useState('');
  const [aadhaarCard, setAadhaarCard] = useState('');
  const [marriageCertificate, setMarriageCertificate] = useState('');
  const [passportPhoto, setPassportPhoto] = useState('');
  const [otherDocuments, setOtherDocuments] = useState('');

  // State for Section 5: Booking Payment Mode
  const [paymentMode, setPaymentMode] = useState('');
  const [chequeNo, setChequeNo] = useState('');
  const [chequeDate, setChequeDate] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankDetails, setBankDetails] = useState('');
  const [alternateMobileNo, setAlternateMobileNo] = useState('');  // Define state for alternate mobile number
  const [alternateMobileError, setAlternateMobileError] = useState('');
  const [dateOfFlatBooking, setDateOfFlatBooking] = useState(null);
  const [aadharNo, setAadharNo] = useState('');
const [aadharError, setAadharError] = useState('');
const [whatsAppNo, setWhatsAppNo] = useState('');
const [whatsAppError, setWhatsAppError] = useState('');
const [emailId, setEmailId] = useState('');
const [address, setAddress] = useState('');
const [coAllotteeName, setCoAllotteeName] = useState('');
const [coAllotteeDob, setCoAllotteeDob] = useState('');
const [coAllotteeOccupation, setCoAllotteeOccupation] = useState('');
const [coAllotteePan, setCoAllotteePan] = useState(""); 
const [coAllotteeAadhar, setCoAllotteeAadhar] = useState("");
const [coAllotteeAadharError, setCoAllotteeAadharError] = useState("");
// const [emailError, setEmailError] = useState('');
const [expandedSection, setExpandedSection] = useState(null);
const [isExpanded, setIsExpanded] = useState(false);
  // const [dateOfBirth, setDateOfBirth] = useState(null);
  const calculateStampDuty = () => {
  //   return totalConsideration ? (totalConsideration * 0.07).toFixed(2) : 0;
  };

  const calculateRegistrationFee = () => {
  //   return totalConsideration ? (totalConsideration * 0.02).toFixed(2) : 0;
  };

  const calculateGstAmount = () => {
  //   return totalConsideration ? (totalConsideration * 0.18).toFixed(2) : 0;
  };

  const handleAadharChange = (e) => {
    const value = e.target.value;
    if (value.length > 12) {
      setAadharError('AADHAR No. cannot exceed 12 digits');
    } else {
      setAadharError('');
    }
    setAadharNo(value);
  };
  const handleWhatsAppChange = (e) => {
    const value = e.target.value;
    if (value.length > 10) {
      setWhatsAppNoError('WhatsApp No. cannot exceed 10 digits');
    } else {
      setWhatsAppNoError('');
    }
    setWhatsAppNo(value);
  };
  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmailId(value);
  
  //   // Basic email validation regex
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   if (!emailRegex.test(value)) {
  //     setEmailError('Please enter a valid email address');
  //   } else {
  //     setEmailError('');
  //   }
  // };
  
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
  
    const handleChangeDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);  // Update the state with the new value
      };
      // const handleAlternateMobileChange = (e) => {
      //   const value = e.target.value;
        
      //   // Allow only numbers and restrict length to 10 digits
      //   if (/^\d{0,10}$/.test(value)) {
      //     setAlternateMobileNo(value);
      //     setAlternateMobileError('');
      //   } else if (value.length > 10) {
      //     setAlternateMobileError('Mobile number cannot exceed 10 digits');
      //   }
      // };


      const handleAlternateMobileChange = (e) => {
        const value = e.target.value;
    
        // Check if the value is a number and limit it to 10 digits
        if (/^\d{0,10}$/.test(value)) {
          setAlternateMobileNo(value);
          setAlternateMobileError('');
        } else {
          setAlternateMobileError('Mobile number cannot exceed 10 digits');
        }
      };
    
      // const handleMobileChange = (e) => {
      //   const value = e.target.value;
        
      //   // Allow only numbers and limit to 10 digits
      //   if (/^\d{0,10}$/.test(value)) {
      //     setMobileNumber(value);
      //     setMobileError('');
      //   } else {
      //     setMobileError('Mobile number should be 10 digits');
      //   }
      // };
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
      updatedPartners[index].age = value; 
      setPartners(updatedPartners); 
    
      validateAge(value); 
    };
  
    const handleStatusChange = (event, leadId) => {
        setStatus({
          ...status,
          [leadId]: event.target.value
        });
      };
  // For second PAN field (Co-Allottee PAN)
const handleCoAllotteePanChange = (e) => {
  setCoAllotteePan(e.target.value);
};

const handleCoAllotteeAadharChange = (e) => {
  const value = e.target.value;
  if (value.length > 12) {
    setCoAllotteeAadharError("AADHAR No. cannot exceed 12 digits");
  } else {
    setCoAllotteeAadharError("");
  }
  setCoAllotteeAadhar(value);
};
  
    const handleOccupationChange = (e, index) => {
      const value = e.target.value;
      const updatedPartners = [...partners];
      updatedPartners[index].occupation = value; 
      setPartners(updatedPartners); 
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
  
     
    if (sections[index].label === "Follow Up History") {
      setSelectedTab("display");
  } 
  
  

    
      setShowFirmForm(false);
      setShowProjectForm(false); 
      setShowLandownerForm(false); 
      
      setShowFlatForm(false);
    };
  
    const [newPhase, setNewPhase] = useState({
      phaseNo: '',
      wingNo: '',
      mahareraNo: ''
    });
  
    
     {/* Table Section */}
     {selectedTab === "firm" && <FirmTable />}
   
  
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
  
    // const handlePanChange = (e) => {
    //   setPanNumber(e.target.value); // Updates only PAN field
    // };
    
    const handlePanChange = (e) => {
      const value = e.target.value.toUpperCase(); // Convert input to uppercase
    
      // PAN regex pattern: First 5 letters, 4 numbers, last 1 letter
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    
      if (value.length > 10) {
        setPanError("PAN No. must be exactly 10 characters");
      } else if (value.length === 10 && !panRegex.test(value)) {
        setPanError("Invalid PAN No. format");
      } else {
        setPanError(""); // Clear error if valid
      }
    
      setPanNumber(value);
    };
    // const handleAadharChange = (e) => {
    //   setAadharNumber(e.target.value); // Updates only AADHAR field
    // };
    
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
    
    const handleAadharCoChange =() =>{

    }
  
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
        setMobileError('Mobile number should only contain digits.');
      } else if (value.length > 10) {
        setMobileError('Mobile number cannot exceed 10 digits.');
      } else {
        setMobileError(''); 
      }
    
     
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
  
    // const handleMobileChange = (e) => {
    //   const value = e.target.value;
    
    //   // Ensure only numbers are entered and max length is respected
    //   if (value.length > 10) {
    //     setMobileError("Mobile number cannot exceed 10 digits");
    //   } else if (!/^\d*$/.test(value)) {
    //     setMobileError("Only numbers are allowed");
    //   } else {
    //     setMobileError(""); // Clear error if input is valid
    //   }
    
    //   setMobileNumber(value); // Update the state with the entered value
    // };
  
    const handlePartnerNameChange = (e, index) => {
      const value = e.target.value;
      const partnerCopy = [...partners];
      
     
      if (/\d/.test(value)) {
        setNameError("Name should only contain letters"); 
      } else {
        setNameError(""); 
      }
  
      partnerCopy[index] = { ...partnerCopy[index], name: value };
      setPartners(partnerCopy);
    };
  
  
    const handleFirmNameChange = (e) => {
      const value = e.target.value;
  
    
      if (/\d/.test(value)) {
        setFirmNameError("Firm Name should only contain letters"); 
      } else {
        setFirmNameError("");
      }
  
    
      setFirmName(value);
    };
  
    const handleEmailChange1 = (e) => {
      setEmailId1(e.target.value); // Update email state correctly
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
    
      // const handleToggleSection = (index) => {
      //   setExpandedSection(expandedSection === index ? null : index);
      // };
      
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };


    return (
      <div className="main-content">
        <h6>Sales Module / Booking Management</h6>
       
  
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
       
{/*     
      
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
              startIcon={isExpanded ? <FaRegUser/> : <FaRegUser />}
            >
              {isExpanded && "Registration"}
            </Button> */}
  
       
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
              + New Booking
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
          

          {/* <LostVisitTable data={data} /> */}
          {/* <LostVisitTable data={dummyData} /> */}
          <BookingFormTable data ={dummyData} />
          </div>
        </>
      ) : (
     
  
      <div className="firm-form mt-4 p-3" style={{ maxHeight: "500px", overflowY: "auto", paddingRight: "10px" }}>
      <Paper className="p-4" elevation={4} style={{ borderRadius: "12px", paddingBottom: "20px" }}>
        <Typography variant="h5" gutterBottom sx={{ paddingTop: 3 }}>
        Section 1: Personal Information
        </Typography>
  
       
        
        <Grid container spacing={2}>
    <Grid item xs={6}>
      <TextField
        label="Enquiry No."
        fullWidth
        variant="outlined"
        value={firmName}
        onChange={handleFirmNameChange} 
        error={!!firmNameError} 
        helperText={firmNameError} 
        required 
      />
    </Grid>
   
      <Grid item xs={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="closing-executive-label">Project Name</InputLabel>
          <Select
            labelId="closing-executive-label"
            id="closing-executive"
            value={closingExecutive}
            onChange={handleClosingExecutiveChange}
            label="Select Sales Person"
          >
            {/* Sales Person options */}
            <MenuItem value="Shilpha Mewada 1">Project Name</MenuItem>
            <MenuItem value="Tic Tac Toe Sohan">Project Name</MenuItem>
            <MenuItem value="Shilpha Mewada">Sohan Enterprised</MenuItem>
           
          </Select>
        </FormControl>
      </Grid>
   

  
    

<Grid item xs={6}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Date Of Flat Booking"
      value={dateOfFlatBooking}
      onChange={(newValue) => setDateOfFlatBooking(newValue)}
      renderInput={(params) => (
        <TextField 
          {...params} 
          fullWidth 
          variant="outlined" 
        />
      )}
    />
  </LocalizationProvider>
</Grid>
    <Grid item xs={6}>
      <TextField
        label="NAME OF ALOTEE"
        fullWidth
        variant="outlined"
        value={firmPan}
              onChange={handleFirmPanChange}
              error={!!firmPanError}  // Show error if there is an error
              helperText={firmPanError}
              required 
      />
    </Grid>
    
    
    <Grid item xs={6}>
  <TextField
    type="datetime-local" // Use datetime-local for date and time input
    label="Source Name"
    fullWidth
    variant="outlined"
    required // Correct way to add required prop
    InputLabelProps={{
      shrink: true, // Ensures label is above the input
    }}
  />
</Grid>
{/* <Grid item xs={6}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Date Of Birth"
      value={dateOfBirth}
      onChange={(newValue) => setDateOfBirth(newValue)}
      renderInput={(params) => (
        <TextField 
          {...params} 
          fullWidth 
          variant="outlined" 
        />
      )}
    />
  </LocalizationProvider>
</Grid> */}


<Grid item xs={6}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Date Of Birth"
      value={dateOfFlatBooking}
      onChange={(newValue) => setDateOfFlatBooking(newValue)}
      renderInput={(params) => (
        <TextField 
          {...params} 
          fullWidth 
          variant="outlined" 
        />
      )}
    />
  </LocalizationProvider>
</Grid>

<Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <InputLabel htmlFor="occupation">Occupation</InputLabel>
    <TextField
      id="occupation"
      label="Occupation"
      variant="outlined"
      value={leadType} // Bind to state for the occupation value
      onChange={(e) => setLeadType(e.target.value)} // Update the state on change
      required
    />
  </FormControl>
</Grid>

{/* <Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <TextField
      label="PAN No."
      variant="outlined"
      value={panNumber} // Uses PAN-specific state
      onChange={(e) => setPanNumber(e.target.value)} // Updates only PAN field
    />
  </FormControl>
</Grid> */}
<Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <TextField
      label="PAN No."
      variant="outlined"
      value={panNumber}
      onChange={handlePanChange} // Apply validation
      error={!!panError} // Show red border if error exists
      helperText={panError} // Show validation message below field
      inputProps={{ maxLength: 10 }} // Prevent entering more than 10 characters
    />
  </FormControl>
</Grid>
<Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <TextField
      label="AADHAR No."
      variant="outlined"
      value={aadharNumber} // Uses AADHAR-specific state
      onChange={(e) => setAadharNumber(e.target.value)} // Updates only AADHAR field
    />
  </FormControl>
</Grid>

{/* 
<Grid item xs={6}>
  <TextField
    label="Mobile No."
    fullWidth
    variant="outlined"
    value={mobileNumber}
    onChange={handleMobileChange}
    error={!!mobileError} // Show error styling if there's an error
    helperText={mobileError} // Display the error message
    inputProps={{
      maxLength: 10, // Ensure max length
      pattern: "[0-9]*", // Allow only numbers
    }}
  />
</Grid> */}
{/* <Grid item xs={6}>
  <TextField
    label="Mobile No."
    fullWidth
    variant="outlined"
    value={mobileNumber}
    onChange={handleMobileChange}
    error={!!mobileError} // Show error if there's an error
    helperText={mobileError} // Display the error message
    inputProps={{
      maxLength: 10, // Limit input to 10 characters
      pattern: "[0-9]*", // Allows only numbers
      inputMode: "numeric", // Opens the numeric keyboard on mobile
    }}
  />
</Grid> */}
<Grid item xs={6}>
  <TextField
    label="Mobile No"
    fullWidth
    variant="outlined"
    value={alternateMobileNo}
    onChange={(e) => {
      const value = e.target.value;

      // Check if the value length exceeds 10
      if (value.length <= 10) {
        setAlternateMobileNo(value); // Update value if it's less than or equal to 10
        setAlternateMobileError(""); // Clear error message
      } else {
        setAlternateMobileError("Mobile number cannot exceed 10 digits"); // Set error if length exceeds 10
      }
    }}
    error={!!alternateMobileError} // Show error if there's an error
    helperText={alternateMobileError} // Display error message
    inputProps={{
      maxLength: 10, // Limit to 10 digits in the input field
    }}
  />
</Grid>
<Grid item xs={6}>
  <TextField
    label="Alternate Mobile No"
    fullWidth
    variant="outlined"
    value={alternateMobileNo}
    onChange={(e) => {
      const value = e.target.value;

      // Check if the value length exceeds 10
      if (value.length <= 10) {
        setAlternateMobileNo(value); // Update value if it's less than or equal to 10
        setAlternateMobileError(""); // Clear error message
      } else {
        setAlternateMobileError("Mobile number cannot exceed 10 digits"); // Set error if length exceeds 10
      }
    }}
    error={!!alternateMobileError} // Show error if there's an error
    helperText={alternateMobileError} // Display error message
    inputProps={{
      maxLength: 10, // Limit to 10 digits in the input field
    }}
  />
</Grid>

<Grid item xs={6}>
  <TextField
    label="WhatsApp No."
    fullWidth
    variant="outlined"
    value={whatsAppNo}
    onChange={handleWhatsAppChange}
    error={!!whatsAppError} // Show error if there's a validation error
    helperText={whatsAppError} // Display the error message
    inputProps={{
      maxLength: 10, // Limit to 10 digits
    }}
  />
</Grid>

{/* 
<Grid item xs={6}>
  <TextField
    label="Email ID"
    fullWidth
    variant="outlined"
    value={emailId}
    onChange={handleEmailChange}
    error={!!emailError} // Show error if there's a validation error
    helperText={emailError} // Display the error message
  />
</Grid> */}
<Grid item xs={6}>
  <TextField
    label="Email ID"
    fullWidth
    variant="outlined"
    value={emailId1} // Ensure this matches the defined state variable
    onChange={handleEmailChange1} // Ensure this updates the correct state
    error={!!emailError}
    helperText={emailError}
  />
</Grid>


<Grid item xs={6}>
  <TextField
    label="AADHAR No."
    fullWidth
    variant="outlined"
    value={aadharNo} // Use state for AADHAR No.
    onChange={(e) => handleAadharChange(e)} // Handle the change
    error={!!aadharError} // Show error if there's a validation error
    helperText={aadharError} // Display the error message
    inputProps={{
      maxLength: 12, // Limit to 12 digits
    }}
  />
</Grid>

<Grid item xs={6}>
  <TextField
    label="Address"
    fullWidth
    variant="outlined"
    value={address}
    onChange={(e) => setAddress(e.target.value)} // Update state with entered value
  />
</Grid>


<Grid item xs={6}>
  <TextField
    label="Name of Co-Allottee"
    fullWidth
    variant="outlined"
    value={coAllotteeName}
    onChange={(e) => setCoAllotteeName(e.target.value)} // Update state with entered value
  />
</Grid>


<Grid item xs={6}>
  <TextField
    label="Date Of Birth (Co-Allottee)"
    fullWidth
    variant="outlined"
    type="date"
    value={coAllotteeDob} // Make sure to define this state in your component
    onChange={(e) => setCoAllotteeDob(e.target.value)} // Updates state with the entered value
    InputLabelProps={{
      shrink: true, // Ensures the label stays above the field when a date is selected
    }}
  />
</Grid>


<Grid item xs={6}>
  <TextField
    label="Occupation (Co-Allottee)"
    fullWidth
    variant="outlined"
    value={coAllotteeOccupation} // Make sure to define this state in your component
    onChange={(e) => setCoAllotteeOccupation(e.target.value)} // Updates state with the entered value
  />
</Grid>

<Grid item xs={6}>
  <TextField
    label="PAN No. (Co-Allottee)"
    fullWidth
    variant="outlined"
    value={coAllotteePan} // Uses second PAN-specific state
    onChange={handleCoAllotteePanChange} // Second PAN handler
  />
</Grid>

{/* 
<Grid item xs={6}>
  <TextField
    label="AADHAR No. (Co-Allottee)"
    fullWidth
    variant="outlined"
    value={aadharNo}  // Should be 'aadharNo' and NOT 'panNumber'
    onChange={handleAadharCoChange} // Correct function for AADHAR
    error={!!aadharError}
    helperText={aadharError}
    inputProps={{ maxLength: 12 }} // Ensures AADHAR No. can't exceed 12 digits
  />
</Grid> */}



{/* <Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <InputLabel id="status-label">AADHAR No. (Co-Alotee)</InputLabel>
    <TextField
      id="aadhar-number"
      label="AADHAR No. (Co-Alotee)"
      variant="outlined"
      value={aadharNumber} // Replace with your state value
      onChange={(e) => setAadharNumber(e.target.value)} // Replace with your state setter function
    />
  </FormControl>
</Grid> */}
<Grid item xs={6}>
  <TextField
    label="AADHAR No. (Co-Allottee)"
    fullWidth
    variant="outlined"
    value={coAllotteeAadhar} // Uses second AADHAR-specific state
    onChange={handleCoAllotteeAadharChange} // Second AADHAR handler
    error={!!coAllotteeAadharError} // Shows error if validation fails
    helperText={coAllotteeAadharError} // Displays error message
    inputProps={{ maxLength: 12 }} // Ensures AADHAR No. can't exceed 12 digits
  />
</Grid>


<Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <InputLabel id="status-label"></InputLabel>
    <TextField
      id="mobile-email"
      label="MOBILE No. & EMAIL (Co-Alotee)"
      variant="outlined"
      value={mobileEmail}
      onChange={(e) => setMobileEmail(e.target.value)} // Update the state with the input value
    />
  </FormControl>
</Grid>
</Grid>
<hr/>

<Typography variant="h5" gutterBottom sx={{ paddingTop: 3 }}>
Section 2: Particulars of Flat
        </Typography>

        <Grid container spacing={2}>
  {/* Carpet Area (Sq. Mtr.) */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="carpet-area-label">Carpet Area in (Sq. Mtr.)</InputLabel>
      <Select
        labelId="carpet-area-label"
        id="carpet-area"
        value={carpetArea}
        onChange={(e) => setCarpetArea(e.target.value)}
        label="Carpet Area in (Sq. Mtr.)"
      >
        <MenuItem value="100">100</MenuItem>
        <MenuItem value="150">150</MenuItem>
        <MenuItem value="200">200</MenuItem>
        <MenuItem value="250">250</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Wing */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="wing-label">Wing</InputLabel>
      <Select
        labelId="wing-label"
        id="wing"
        value={wing}
        onChange={(e) => setWing(e.target.value)}
        label="Wing"
      >
        <MenuItem value="A">A</MenuItem>
        <MenuItem value="B">B</MenuItem>
        <MenuItem value="C">C</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Flat No. */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="flat-no-label">FLAT No.</InputLabel>
      <Select
        labelId="flat-no-label"
        id="flat-no"
        value={flatNo}
        onChange={(e) => setFlatNo(e.target.value)}
        label="FLAT No."
      >
        <MenuItem value="101">101</MenuItem>
        <MenuItem value="102">102</MenuItem>
        <MenuItem value="103">103</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Type */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="type-label">Type</InputLabel>
      <Select
        labelId="type-label"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        label="Type"
      >
        <MenuItem value="2BHK">2BHK</MenuItem>
        <MenuItem value="3BHK">3BHK</MenuItem>
        <MenuItem value="4BHK">4BHK</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Sold Rate */}
  <Grid item xs={6}>
    <TextField
      label="Sold Rate"
      fullWidth
      variant="outlined"
      value={soldRate}
      onChange={(e) => setSoldRate(e.target.value)}
      type="number"
    />
  </Grid>

  {/* Enclosed Balcony (Sq. Mtr.) */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="enclosed-balcony-label">Enclosed Balcony in (Sq. Mtr.)</InputLabel>
      <Select
        labelId="enclosed-balcony-label"
        id="enclosed-balcony"
        value={enclosedBalcony}
        onChange={(e) => setEnclosedBalcony(e.target.value)}
        label="Enclosed Balcony in (Sq. Mtr.)"
      >
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="15">15</MenuItem>
        <MenuItem value="20">20</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Open Balcony (Sq. Mtr.) */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="open-balcony-label">Open Balcony in (Sq. Mtr.)</InputLabel>
      <Select
        labelId="open-balcony-label"
        id="open-balcony"
        value={openBalcony}
        onChange={(e) => setOpenBalcony(e.target.value)}
        label="Open Balcony in (Sq. Mtr.)"
      >
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="15">15</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Terrace (Sq. Mtr.) */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="terrace-label">Terrace in (Sq. Mtr.)</InputLabel>
      <Select
        labelId="terrace-label"
        id="terrace"
        value={terrace}
        onChange={(e) => setTerrace(e.target.value)}
        label="Terrace in (Sq. Mtr.)"
      >
        <MenuItem value="30">30</MenuItem>
        <MenuItem value="40">40</MenuItem>
        <MenuItem value="50">50</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Parking */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="parking-label">Parking</InputLabel>
      <Select
        labelId="parking-label"
        id="parking"
        value={parking}
        onChange={(e) => setParking(e.target.value)}
        label="Parking"
      >
        <MenuItem value="Stack Parking">Stack Parking</MenuItem>
        <MenuItem value="Open car parking">Open car parking</MenuItem>
        <MenuItem value="Covered car parking">Covered car parking</MenuItem>
        <MenuItem value="Basement car parking">Basement car parking</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </FormControl>
  </Grid>

  {/* Floor */}
  <Grid item xs={6}>
    <FormControl fullWidth variant="outlined">
      <InputLabel id="floor-label">Floor</InputLabel>
      <Select
        labelId="floor-label"
        id="floor"
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
        label="Floor"
      >
        <MenuItem value="1st">1st</MenuItem>
        <MenuItem value="2nd">2nd</MenuItem>
        <MenuItem value="3rd">3rd</MenuItem>
        <MenuItem value="4th">4th</MenuItem>
        <MenuItem value="5th">5th</MenuItem>
        <MenuItem value="6th">6th</MenuItem>
        <MenuItem value="7th">7th</MenuItem>
        <MenuItem value="8th">8th</MenuItem>
        <MenuItem value="9th">9th</MenuItem>
        <MenuItem value="10th">10th</MenuItem>
      </Select>
    </FormControl>
  </Grid>
</Grid>

<hr/>
  
  
{/*   
<Typography variant="h5" gutterBottom>
Section 3: Consideration
        </Typography> */}
{/* Section 3: Consideration */}
<Typography variant="h5" gutterBottom sx={{ paddingTop: 3 }}>
        Section 3: Consideration
      </Typography>

      <Grid container spacing={2}>
        {/* Total Consideration (Auto Calculated) */}
        <Grid item xs={6}>
          <TextField
            label="Total Consideration / Agreement Value"
            fullWidth
            variant="outlined"
            value={totalConsideration}
            onChange={(e) => setTotalConsideration(e.target.value)}
            type="number"
          />
        </Grid>

        {/* Booking Amount / Advance Payment */}
        <Grid item xs={6}>
          <TextField
            label="Booking Amount / Advance Payment"
            fullWidth
            variant="outlined"
            value={bookingAmount}
            onChange={(e) => setBookingAmount(e.target.value)}
            type="number"
          />
        </Grid>

        <Grid item xs={6}>
  <TextField
    label="Stamp Duty (7% of Agreement Cost)"
    fullWidth
    variant="outlined"
    value={stampDuty} // Bind state to allow manual input
    onChange={(e) => setStampDuty(e.target.value)} // Update state on input
  />
</Grid>


         {/* Registration Fee */}
  <Grid item xs={6}>
    <TextField
      label="Registration Fee (Auto Calculated)"
      fullWidth
      variant="outlined"
      value={registrationFee}
      onChange={(e) => setRegistrationFee(e.target.value)}
    />
  </Grid>

  {/* GST Amount */}
  <Grid item xs={6}>
    <TextField
      label="GST Amount (Auto Calculated)"
      fullWidth
      variant="outlined"
      value={gstAmount}
      onChange={(e) => setGstAmount(e.target.value)}
    />
  </Grid>
     
      </Grid>

      {/* Section 4: Documents */}
      <Typography variant="h5" gutterBottom sx={{ paddingTop: 3 }}>
        Section 4: Documents
      </Typography>

      <Grid container spacing={2}>
  {/* PAN Card */}
  {/* <Grid item xs={6}>
    <Typography variant="body1">PAN Card (of both)</Typography>
    <Button variant="contained" component="label">
      Choose File
      <input type="file" hidden onChange={(e) => setPanCard(e.target.files[0])}  />
    </Button>
    {panCard && <Typography variant="body2">{panCard.name}</Typography>}
  </Grid> */}
  <Grid item xs={6}>
    <Typography variant="body1">PAN Card (of both)</Typography>
    <Button 
      variant="contained" 
      component="label"
      sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }}
    >
      Choose File
      <input type="file" hidden onChange={(e) => setPanCard(e.target.files[0])} />
    </Button>
    {panCard && <Typography variant="body2">{panCard.name}</Typography>}
  </Grid>

  {/* AADHAR Card */}
  <Grid item xs={6}>
    <Typography variant="body1">AADHAR Card (of both)</Typography>
    <Button 
      variant="contained" 
      component="label"
      sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }}
    >
      Choose File
      <input type="file" hidden onChange={(e) => setAadhaarCard(e.target.files[0])} />
    </Button>
    {aadhaarCard && <Typography variant="body2">{aadhaarCard.name}</Typography>}
  </Grid>

  {/* Marriage Certificate */}
  <Grid item xs={6}>
    <Typography variant="body1">MARRIAGE CERTIFICATE (If Available)</Typography>
    <Button 
      variant="contained" 
      component="label"
      sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }}
    >
      Choose File
      <input type="file" hidden onChange={(e) => setMarriageCertificate(e.target.files[0])} />
    </Button>
    {marriageCertificate && <Typography variant="body2">{marriageCertificate.name}</Typography>}
  </Grid>

  {/* Passport Size Photo */}
  <Grid item xs={6}>
    <Typography variant="body1">PASSPORT SIZE PHOTO (of both)</Typography>
    <Button 
      variant="contained" 
      component="label"
      sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }}
    >
      Choose File
      <input type="file" hidden onChange={(e) => setPassportPhoto(e.target.files[0])} />
    </Button>
    {passportPhoto && <Typography variant="body2">{passportPhoto.name}</Typography>}
  </Grid>

  {/* Any Other Documents */}
  <Grid item xs={6}>
    <Typography variant="body1">Any Other</Typography>
    <Button 
      variant="contained" 
      component="label"
      sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }}
    >
      Choose File
      <input type="file" hidden onChange={(e) => setOtherDocuments(e.target.files[0])} />
    </Button>
    {otherDocuments && <Typography variant="body2">{otherDocuments.name}</Typography>}
  </Grid>
</Grid>


      {/* Section 5: Booking Payment Mode */}
      <Typography variant="h5" gutterBottom sx={{ paddingTop: 3 }}>
        Section 5: Booking Payment Mode
      </Typography>

      <Grid container spacing={2}>
        {/* Booking Amount */}
        <Grid item xs={6}>
          <TextField
            label="Booking Amount"
            fullWidth
            variant="outlined"
            value={bookingAmount}
            onChange={(e) => setBookingAmount(e.target.value)}
            type="number"
            
          />
        </Grid>

        {/* Payment Mode */}
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="payment-mode-label">Payment Mode</InputLabel>
            <Select
              labelId="payment-mode-label"
              id="payment-mode"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              label="Payment Mode"
            >
              <MenuItem value="Cheque">Cheque</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              <MenuItem value="Cash">Cash</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Cheque/TRN No. */}
        <Grid item xs={6}>
          <TextField
            label="Cheque/TRN No."
            fullWidth
            variant="outlined"
            value={chequeNo}
            onChange={(e) => setChequeNo(e.target.value)}
          />
        </Grid>

      
       
<LocalizationProvider dateAdapter={AdapterDateFns}>
  <Grid item xs={6}>
    <DatePicker
      label="Cheque/TRN Date"
      value={chequeDate}
      onChange={(newValue) => setChequeDate(newValue)} 
      renderInput={(params) => (
        <TextField 
          {...params} 
          fullWidth 
          variant="outlined" 
          sx={{ width: '100%' }} 
        />
      )}
    />
  </Grid>
</LocalizationProvider>

       
        <Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
    <InputLabel id="bank-name-label">Bank Name</InputLabel>
    <Select
      labelId="bank-name-label"
      id="bank-name"
      value={bankName}
      onChange={(e) => setBankName(e.target.value)}
      label="Bank Name"
    >
      <MenuItem value="State Bank of India (SBI)">State Bank of India (SBI)</MenuItem>
      <MenuItem value="HDFC">HDFC Bank</MenuItem>
      <MenuItem value="ICICI Bank">ICICI Bank</MenuItem>
      <MenuItem value="Punjab National Bank">Punjab National Bank</MenuItem>
      <MenuItem value="Bank of Baroda">Bank of Baroda</MenuItem>
      <MenuItem value="Axis Bank">Axis Bank</MenuItem>
      <MenuItem value="Canara Bank">Canara Bank</MenuItem>
      <MenuItem value="Union Bank of India">Union Bank of India</MenuItem>
      <MenuItem value="Bank of India">Bank of India</MenuItem>
      <MenuItem value="Kotak Mahindra Bank">Kotak Mahindra Bank</MenuItem>
      <MenuItem value="IndusInd Bank">IndusInd Bank</MenuItem>
      <MenuItem value="Yes Bank">Yes Bank</MenuItem>
      <MenuItem value="IDBI Bank">IDBI Bank</MenuItem>
      <MenuItem value="Indian Bank">Indian Bank</MenuItem>
      <MenuItem value="Central Bank of India">Central Bank of India</MenuItem>
      <MenuItem value="Indian Overseas Bank">Indian Overseas Bank</MenuItem>
      <MenuItem value="Federal Bank">Federal Bank</MenuItem>
      <MenuItem value="UCO Bank">UCO Bank</MenuItem>
      <MenuItem value="Bandhan Bank">Bandhan Bank</MenuItem>
    </Select>
  </FormControl>
</Grid>


        {/* Bank Details */}
        <Grid item xs={6}>
          <TextField
            label="Bank Details"
            fullWidth
            variant="outlined"
            value={bankDetails}
            onChange={(e) => setBankDetails(e.target.value)}
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
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
    </div>
    )
  };
     
   
    


export default BookingForm;