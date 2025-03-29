

// import React, { useState } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { 
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaUser, FaSignOutAlt 
// } from 'react-icons/fa';

// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [developerOpen, setDeveloperOpen] = useState(false);
//   const [salesOpen, setSalesOpen] = useState(false);
//   const [crmOpen, setCrmOpen] = useState(false);

//   const navigate = useNavigate();

//   const toggleSidebar = () => setCollapsed(!collapsed);

//   const handleLogout = () => {
   
//     localStorage.removeItem('authToken');
//     navigate('/login');
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark bg-dark px-3">
//         <div className="d-flex align-items-center">
//           <button className="btn btn-dark me-3" onClick={toggleSidebar}>
//             <FaBars size={20} />
//           </button>
//           <span className="navbar-brand mb-0 h1">CRM ERP</span>
//         </div>
//         <div className="mx-auto w-50">
//           <input type="text" className="form-control" placeholder="Search..." />
//         </div>
//         <div>
//           <img 
//             src="https://i.pravatar.cc/40?img=3" 
//             alt="Profile"
//             className="rounded-circle"
//           />
//         </div>
//       </nav>

//       <div className="d-flex flex-grow-1">
//         {/* Sidebar */}
//         <div 
//           className="bg-dark text-white p-3 d-flex flex-column" 
//           style={{ width: collapsed ? '80px' : '250px', transition: 'width 0.3s' }}
//         >
//           <ul className="nav flex-column">
//             <li className="nav-item mb-3">
//               <Link to="/" className="nav-link text-white d-flex align-items-center">
//                 <FaTachometerAlt className="me-2" />
//                 {!collapsed && <span>Dashboard</span>}
//               </Link>
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setAdminOpen(!adminOpen)}
//               >
//                 <FaUserShield className="me-2" />
//                 {!collapsed && <span>Admin Section</span>}
//               </div>
//               {adminOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/admin/salesperson" className="nav-link text-white d-flex align-items-center">
//                       <FaUserShield className="me-2" />
//                       <span>Sales Person</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setDeveloperOpen(!developerOpen)}
//               >
//                 <FaCode className="me-2" />
//                 {!collapsed && <span>Developer Module</span>}
//               </div>
//               {developerOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/developer/sharespace" className="nav-link text-white d-flex align-items-center">
//                       <FaCode className="me-2" />
//                       <span>Share Space</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setSalesOpen(!salesOpen)}
//               >
//                 <FaChartLine className="me-2" />
//                 {!collapsed && <span>Sales Module</span>}
//               </div>
//               {salesOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/sales/lostvisits" className="nav-link text-white d-flex align-items-center">
//                       <FaChartLine className="me-2" />
//                       <span>Lost Visits</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setCrmOpen(!crmOpen)}
//               >
//                 <FaCogs className="me-2" />
//                 {!collapsed && <span>CRM Module</span>}
//               </div>
//               {crmOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/crm/registration" className="nav-link text-white d-flex align-items-center">
//                       <FaUser className="me-2" />
//                       <span>Registration</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>

//           {/* Logout Option */}
//           <div className="mt-auto">
//             <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
//               <FaSignOutAlt className="me-2" />
//               {!collapsed && 'Logout'}
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-grow-1 p-4">
//           <Outlet /> {/* Render the child routes */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useCallback } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import {
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt
// } from 'react-icons/fa';
// import { FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, FaDraftingCompass, FaBell } from "react-icons/fa";
// import { 
//   FaInfoCircle, 
//   FaBuilding, 
//   FaFileInvoiceDollar, 
//   FaBullhorn, 
//   FaUsers,  // <-- Add this
//   FaUserCheck, 
//   FaHome, 
//   FaFileAlt, 
//   FaFileSignature, 
//   FaStamp, 
//   FaDraftingCompass, 
//   FaBell 
// } from "react-icons/fa";

// import React, { useState, useCallback } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import {
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt,
//   FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, 
//   FaDraftingCompass, FaBell, FaInfoCircle, FaBuilding, FaFileInvoiceDollar, FaBullhorn
// } from 'react-icons/fa';

// ===
// import React from "react";
// import { useState, useCallback } from "react";

// import {
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt,
//   FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, FaDraftingCompass, FaBell,
//   FaInfoCircle, FaBuilding, FaFileInvoiceDollar, FaBullhorn
// } from 'react-icons/fa';


import React, { useState, useCallback } from "react"; 
import { 
  FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt,
  FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, FaDraftingCompass, FaBell,
  FaInfoCircle, FaBuilding, FaFileInvoiceDollar, FaBullhorn , FaUserTie ,FaLandmark,FaCalendarAlt,FaPeopleArrows
} from "react-icons/fa";  
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import {  FaClipboardList, FaCalendarCheck, FaRegHandshake, FaRegClock, FaTasks, FaRegTimesCircle, FaClipboard, FaRegEdit } from 'react-icons/fa';

import {  FaMicrophone } from "react-icons/fa";
import VoiceNavigation from "./VoiceNavigation";
// import { useNavigate } from "react-router-dom";




const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [sections, setSections] = useState({
    admin: false,
    developer: false,
    sales: false,
    crm: false,
  });
  const [showVoiceRecognition, setShowVoiceRecognition] = useState(false);
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Memoized toggle functions
  const toggleSidebar = useCallback(() => setCollapsed((prev) => !prev), []);
 
  const toggleSection = useCallback((section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('authToken');
    navigate('/login');
  }, [navigate]);


  // const menuItems = [
  //   { to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" },
  //   { to: "/developer/basicinfo", icon: <FaInfoCircle />, label: "Basic Information" },
  //   { to: "/developer/projectinventory", icon: <FaBuilding />, label: "Project Inventory" },
  //   { to: "/developer/costsheet", icon: <FaFileInvoiceDollar />, label: "Cost Sheet Details" },
  //   { to: "/developer/salesmis", icon: <FaChartLine />, label: "Sales MIS" },
  //   { to: "/developer/marketing", icon: <FaBullhorn />, label: "Marketing" },
  // ];


  // handleClose function that will be passed to VoiceNavigation as a prop
  const handleClose = () => {
    console.log("Closing the voice navigation.");
    setShowVoiceRecognition(false); // Hide the voice recognition when it's closed
  };


  // const moduleData = [
  //   {name :"CRM" ,path: "CRM"},
  //   {name :"Share Space" ,path: "CRM > Share Space"},
  //   { name : "Home Loan Applicability" , path :"CRM > Home Loan Applicability"},
  //   { name : "CRM" , path :"CRM > CRM"},
  //   { name : "OCR Collection" , path :"CRM > OCR Collection"},
  //   { name : "Agreement" , path :"CRM > Agreement"},
  //   { name : "Registration" , path :"CRM > Registration"},
  //   { name: "Engineer & Architect Letter", path: " CRM > Engineer & Architect Letter" },
  //   { name: "Demand Raised", path: " CRM > Demand Raised" },
  //   { name: "Daily Collection", path: " CRM > Daily Collection" },
  //   { name: "Flat Allotement Report", path: " CRM > Flat Allotement Report" },
  //   { name: "Parking Report", path: " CRM > Parking Report" },
  //   { name: "MIS Report", path: " CRM > MIS Report" },

  //   {name : "Sales" , path :"Sales"},
  //   {name: "Dashboard" , path :" Sales > Dashboard"},
  //   {name: "Calendar" , path :" Sales > Calendar"},
  //   {name: "Share Space" , path :" Sales > Share Space"},
  //   {name: "Shared By Developer" , path :" Sales > Shared By Developer"},
  //   {name: "Leads" , path :" Sales > Leads"},
  //   {name: "Leads Follow Up" , path :" Sales > Leads Follow Up"},
  //   {name: "Lost Leads" , path :" Sales > Lost Leads"}, 
  //   {name: "First Visit" , path :" Sales >First Visit"}, 
  //   {name: "First Visit Follow Up" , path :" Sales > First Visit Follow Up"},
  //   {name: "First Visit Steps" , path :" Sales > First Visit Steps"},
  //   {name: "Lost Visits" , path :" Sales > Lost visits"},
  //   {name: "Templates" , path :" Sales > Templates"},
  //   { name: "Booking Form", path: "Sales > Booking Form" },
  //   { name: "Channel Partner", path: "Sales > Channel Partner" },


    
  // ];

  const moduleData = [
    { name: "CRM", path: "CRM", to: "/crm" },
    { name: "Share Space", path: "CRM > Share Space", to: "/crm/sharespace" },
    { name: "Home Loan Applicability", path: "CRM > Home Loan Applicability", to: "/crm/homeloan" },
    { name: "OCR Collection", path: "CRM > OCR Collection", to: "/crm/ocrcollection" },
    { name: "Agreement", path: "CRM > Agreement", to: "/crm/agreement" },
    { name: "Registration", path: "CRM > Registration", to: "/crm/registration" },
    { name: "Engineer & Architect Letter", path: "CRM > Engineer & Architect Letter", to: "/crm/engineer-architect" },
    { name: "Demand Raised", path: "CRM > Demand Raised", to: "/crm/demand-raised" },
    { name: "Daily Collection", path: "CRM > Daily Collection", to: "/crm/daily-collection" },
    { name: "Flat Allotment Report", path: "CRM > Flat Allotment Report", to: "/crm/flat-allotment" },
    { name: "Parking Report", path: "CRM > Parking Report", to: "/crm/parking-report" },
    { name: "MIS Report", path: "CRM > MIS Report", to: "/crm/mis-report" },
  
    { name: "Sales", path: "Sales", to: "/sales" },
    { name: "Dashboard", path: "Sales > Dashboard", to: "/sales/dashboard" },
    { name: "Calendar", path: "Sales > Calendar", to: "/sales/calendar" },
    { name: "Share Space", path: "Sales > Share Space", to: "/sales/sharespace" },
    { name: "Shared By Developer", path: "Sales > Shared By Developer", to: "/sales/shared-by-developer" },
    { name: "Leads", path: "Sales > Leads", to: "/sales/leads" },
    { name: "Leads Follow Up", path: "Sales > Leads Follow Up", to: "/sales/leads-followup" },
    { name: "Lost Leads", path: "Sales > Lost Leads", to: "/sales/lost-leads" },
    { name: "First Visit", path: "Sales > First Visit", to: "/sales/first-visit" },
    { name: "First Visit Follow Up", path: "Sales > First Visit Follow Up", to: "/sales/first-visit-followup" },
    { name: "First Visit Steps", path: "Sales > First Visit Steps", to: "/sales/first-visit-steps" },
    { name: "Lost Visits", path: "Sales > Lost Visits", to: "/sales/lost-visits" },
    { name: "Templates", path: "Sales > Templates", to: "/sales/templates" },
    { name: "Booking Form", path: "Sales > Booking Form", to: "/sales/booking-form" },
    { name: "Channel Partner", path: "Sales > Channel Partner", to: "/sales/channel-partner" },
  ];
  

// const handleSearch = (e) => {
//   const query = e.target.value;
//   setSearchQuery(query);

//   if (query.trim() === "") {
//     setResults([]);
//   } else {
//     const filteredResults = moduleData.filter((module) =>
//       module.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setResults(filteredResults);
//   }
// };

// const handleSearch = (e) => {
//   const query = e.target.value;
//   setSearchQuery(query);

//   if (query.trim() === "") {
//     setResults([]);
//   } else {
//     const filteredResults = moduleData.filter((module) =>
//       module.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setResults(filteredResults);
//   }
// };
// const handleSearch = (event) => {
//   const searchTerm = event.target.value.toLowerCase();
//   setQuery(searchTerm);

//   if (searchTerm) {
//     const filteredResults = menuItems.filter((item) =>
//       item.label.toLowerCase().includes(searchTerm)
//     );
//     setResults(filteredResults);
//   } else {
//     setResults([]);
//   }
// };
const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  setQuery(searchTerm);

  if (searchTerm) {
    const filteredResults = moduleData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setResults(filteredResults);
  } else {
    setResults([]);
  }
};
const handleRedirect = (path) => {
  navigate(path); // Redirect to selected path
  setQuery(""); // Clear search input after selection
  setResults([]); // Hide search results
};
// const handleRedirect = (path) => {
//   // Convert "Sales > Lost visits" into a proper URL path
//   const formattedPath = path.replace(/\s*>\s*/g, "/").toLowerCase(); // Replace " > " with "/"
//   navigate(`/${formattedPath}`); // Redirect to the formatted path
// };

// const handleRedirect = (to) => {
//   navigate(to); // Navigate directly to the 'to' path
// };
  return (
    <div className="d-flex flex-column vh-100 ">
      {/* Top Navbar */}
      {/* <nav className="navbar navbar-dark bg-primary px-3"> */}
      {/* <nav className="navbar navbar-dark  px-3" style={{background:"#3621a9"}}>
        <div className="d-flex align-items-center">
          <button className="btn btn-dark me-3" onClick={toggleSidebar}>
            <FaBars size={20} />
          </button>
          <span className="navbar-brand mb-0 h1">CRM ERP</span>
        </div>
        <div className="mx-auto w-50">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div>
          
          <img
            src="/unnamed.png"
            alt="Profile"
            className="rounded-circle profile"
          />
        </div>
      </nav> */}
<nav className="navbar navbar-dark px-3" style={{ background: "#3621a9" }}>

  <div className="d-flex align-items-center">
    <button className="btn btn-dark me-3" onClick={toggleSidebar}>
      <FaBars size={20} />
    </button>
    <span className="navbar-brand mb-0 h1">CRM ERP</span>
  </div>
  {/* <div className="mx-auto w-50">
    <input type="text" className="form-control" placeholder="Search..."  onChange={onSearch}/>
  </div> */}

<div className="position-relative">
      {/* ✅ Search Input inside the same component */}
      <div className="mx-auto w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={handleSearch} // ✅ No need to pass props
        />
      </div>

      {/* ✅ Display Search Results */}
      {/* {results.length > 0 && (
        <ul className="list-group mt-2">
          {results.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.path}
            </li>
          ))}
        </ul>


      )} */}

{/* {results.length > 0 && (
    <ul
      className="list-group mt-2 position-absolute bg-white w-100 shadow"
      style={{ zIndex: 1050, maxHeight: "200px", overflowY: "auto" }}
    >
      {results.map((item, index) => (
        <li key={index} className="list-group-item">
          {item.path}
        </li>
      ))}
    </ul>
  )} */}

 
  {/* {results.length > 0 && (
        <ul
          className="list-group mt-2 position-absolute bg-white w-100 shadow"
          style={{ zIndex: 1050, maxHeight: "200px", overflowY: "auto" }}
        >
          {results.map((item, index) => (
            <li
              key={index}
              className="list-group-item cursor-pointer"
              onClick={() => handleRedirect(item.to)}
              style={{ cursor: "pointer" }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )} */}

{results.length > 0 && (
        <ul
          className="list-group mt-2 position-absolute bg-white w-100 shadow"
          style={{ zIndex: 1050, maxHeight: "200px", overflowY: "auto" }}
        >
          {results.map((item, index) => (
            <li
              key={index}
              className="list-group-item cursor-pointer"
              onClick={() => handleRedirect(item.to)}
              style={{ cursor: "pointer" }}
            >
              {/* ✅ Show breadcrumb-style path */}
              {item.path}
            </li>
          ))}
        </ul>
      )}
    </div>
  <div className="d-flex align-items-center">
   
    <FaMicrophone
            size={20}
            className="me-3 text-white"
            style={{ cursor: "pointer" }}
            onClick={() => setShowVoiceRecognition(true)}
          />
    {/* Profile Image */}
    <img
      src="/unnamed.png"
      alt="Profile"
      className="rounded-circle profile"
    />
  </div>
</nav>
{/* {showVoiceRecognition && <VoiceNavigation />} */}
{showVoiceRecognition && <VoiceNavigation onClose={handleClose} />}

       <div className="d-flex w-100">
 
  <div
    className=" text-white p-3 d-flex flex-column"
    style={{
      width: collapsed ? '80px' : '250px',  
      height: '100vh',  
      transition: 'width 0.3s',  
      flexShrink: 0,  
      background:"#3621a9",
      overflowY: 'auto',
      scrollbarWidth: 'none',
      //  background: "linear-gradient(180deg, #ff6347 0%, #2c1a80 100%)",


    }}
  >
    <ul className="nav flex-column">
      <SidebarItem to="/" icon={<FaTachometerAlt />} label="Dashboard" collapsed={collapsed} />

      <SidebarDropdown
        label="Admin Section"
        icon={<FaUserShield />}
        collapsed={collapsed}
        isOpen={sections.admin}
        toggleOpen={() => toggleSection('admin')}
        subItems={[
          // { to: "/admin/salesperson", icon: <FaUserShield />, label: "Sales Person" },
          // { to: "/admin/banker", icon: <FaUserShield />, label: "Banker Details" }
          { to: "/admin/salesperson", icon: <FaUserTie />, label: "Sales Person" },
          { to: "/admin/banker", icon: <FaLandmark />, label: "Banker Details" }
          
        ]}
      />

      <SidebarDropdown
        label="Developer Module"
        icon={<FaCode />}
        collapsed={collapsed}
        isOpen={sections.developer}
        toggleOpen={() => toggleSection('developer')}
        subItems={[
          // { to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" },
          // { to: "/developer/basicinfo", icon: <FaCode />, label: "Basic Information" },
          // {to :"/developer/projectinventory",icon : <FaCode />,label:"Project Inventory" },
          // {to :"/developer/costsheet",icon : <FaCode />,label:"Cost Sheet Details" },
          // {to :"/developer/salesmis",icon : <FaCode />,label:"Sales MIS" },
          // {to :"/developer/marketing",icon : <FaCode />,label:"Marketing" },
          { to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" },
          { to: "/developer/basicinfo", icon: <FaInfoCircle />, label: "Basic Information" },
          { to: "/developer/projectinventory", icon: <FaBuilding />, label: "Project Inventory" },
          { to: "/developer/costsheet", icon: <FaFileInvoiceDollar />, label: "Cost Sheet Details" },
          { to: "/developer/salesmis", icon: <FaChartLine />, label: "Sales MIS" },
          { to: "/developer/marketing", icon: <FaBullhorn />, label: "Marketing" }
         ] }
      />

      <SidebarDropdown
        label="Sales Module"
        icon={<FaChartLine />}
        collapsed={collapsed}
        isOpen={sections.sales}
        toggleOpen={() => toggleSection('sales')}
        subItems={[
          // { to: "/sales/lostvisits", icon: <FaChartLine />, label: "Lost Visits" },
          // { to: "/sales/salesdashboard", icon: <FaChartLine />, label: "Dashboard" },
          // { to: "/sales/salescalander", icon: <FaChartLine />, label: "Calandar" },
       
          // { to: "/sales/sharespace", icon: <FaChartLine />, label: "Share Space" },
          { to: "/sales/salesdashboard", icon: <FaTachometerAlt />, label: "Dashboard" }, 
{ to: "/sales/salescalander", icon: <FaCalendarAlt />, label: "Calendar" }, 
{ to: "/sales/sharespace", icon: <FaPeopleArrows />, label: "Share Space" } ,
// {to : "/sales/sharedbydeveloper" , icon :<FaPeopleArrows />, label: "Shared By Developer" },
// {to : "/sales/leads" , icon :<FaPeopleArrows />, label: "Leads" },
// {to : "/sales/leadsfollowup" , icon :<FaPeopleArrows />, label: "Leads Follow Up" },
// {to : "/sales/lostleads" , icon :<FaPeopleArrows />, label: "Lost Leads" },
// {to : "/sales/firstvisits" , icon :<FaPeopleArrows />, label: "First Visit" },
// {to : "/sales/firstvisitfollowup" , icon :<FaPeopleArrows />, label: "First Visit Follow Up" },
// {to : "/sales/firstvisitsteps" , icon :<FaPeopleArrows />, label: "First Visit Steps" },
// {to : "/sales/saleslostvisits" , icon :<FaPeopleArrows />, label: "Lost Visits" },
// {to : "/sales/salestemplates" , icon :<FaPeopleArrows />, label: "Templates" },
// {to : "/sales/bookingform" , icon :<FaPeopleArrows />, label: "Booking Form" },



  { to: "/sales/sharedbydeveloper", icon: <FaUsers />, label: "Shared By Developer" },
  { to: "/sales/leads", icon: <FaClipboardList />, label: "Leads" },
  { to: "/sales/leadsfollowup", icon: <FaCalendarCheck />, label: "Leads Follow Up" },
  { to: "/sales/lostleads", icon: <FaRegTimesCircle />, label: "Lost Leads" },
  { to: "/sales/firstvisits", icon: <FaRegHandshake />, label: "First Visit" },
  { to: "/sales/firstvisitfollowup", icon: <FaRegClock />, label: "First Visit Follow Up" },
  { to: "/sales/firstvisitsteps", icon: <FaTasks />, label: "First Visit Steps" },
  { to: "/sales/saleslostvisits", icon: <FaRegTimesCircle />, label: "Lost Visits" },
  { to: "/sales/salestemplates", icon: <FaClipboard />, label: "Templates" },
  { to: "/sales/bookingform", icon: <FaRegEdit />, label: "Booking Form" },
  { to: "/sales/channelpartner", icon: <FaRegEdit />, label: "Channel Partner" },

        ]}
      />

      <SidebarDropdown
        label="CRM Module"
        icon={<FaCogs />}
        collapsed={collapsed}
        isOpen={sections.crm}
        toggleOpen={() => toggleSection('crm')}
        subItems={[
        //   { to: "/crm/sharespace", icon: <FaUser />, label: "Share Space" },
        //   { to: "/crm/registration", icon: <FaUser />, label: "Registration" },
        // { to: "/crm/crm", icon: <FaUser />, label: "CRM" },
        // { to: "/crm/HomeLoan", icon: <FaUser />, label: "Home Loan Applicability" },
        // { to: "/crm/OCR", icon: <FaUser />, label: "OCR Collection" },
        // { to: "/crm/Agreement", icon: <FaUser />, label: "Agreement" },
        // { to: "/crm/Architect", icon: <FaUser />, label: "Engineer & Architect Letter" },
        // { to: "/crm/Demand", icon: <FaUser />, label: "Demand Raised" },
        { to: "/crm/sharespace", icon: <FaUsers />, label: "Share Space" },
   
    { to: "/crm/HomeLoan", icon: <FaHome />, label: "Home Loan Applicability" },
    { to: "/crm/crm", icon: <FaUserCheck />, label: "CRM" },
    { to: "/crm/OCR", icon: <FaFileAlt />, label: "OCR Collection" },
    { to: "/crm/Agreement", icon: <FaFileSignature />, label: "Agreement" },
    { to: "/crm/registration", icon: <FaStamp />, label: "Registration" },
    { to: "/crm/Architect", icon: <FaDraftingCompass />, label: "Engineer & Architect Letter" },
    { to: "/crm/Demand", icon: <FaBell />, label: "Demand Raised" },
    { to: "/crm/dailycollection", icon: <FaBell />, label: "Daily Collection" },
    { to: "/crm/flatallotementreport", icon: <FaBell />, label: "Flat Allotement Report" },
    {to :"/crm/parkingreport" ,icon :<FaBell />, label :"Parking Report"},
    {to :"/crm/misreport" ,icon :<FaBell />, label :"MIS Report"},
      ]}
      />
   
    </ul>

    {/* Logout Option */}
    {/* <div className="mt-auto"> */}
    <div style={{ marginTop: "auto", marginBottom: "50px" }}>

      <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
        <FaSignOutAlt className="me-2" />
        {!collapsed && 'SignOut'}
      </button>
    </div>
  </div>

  <div
  className="main-content flex-grow-1 p-3"
  style={{
   
    paddingLeft: collapsed ? "80px" : "250px",  
    transition: "margin-left 0.3s ease-in-out",
    width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)",

    // background: "#f8f9fa",  
    // background: "#ffcdd2",
   background:" #edf7fc",
    minHeight: "100vh",  
    borderRadius: "10px",  
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",  
    
  }}
>
  <Outlet />
</div>

{/* <div
  className="main-content flex-grow-1 p-3"
  style={{
    paddingLeft: collapsed ? "80px" : "250px",
    transition: "all 0.3s ease-in-out",
    background: "#edf7fc",
    minHeight: "100vh",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)", // Adjust width dynamically
  }}
>
  {/* <Outlet /> 
</div> */}


  </div>
</div>

  );
};

const SidebarItem = React.memo(({ to, icon, label, collapsed }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link text-white d-flex align-items-center">
      {icon}
      {!collapsed && <span className="ms-2">{label}</span>}
    </Link>
  </li>
));

const SidebarDropdown = React.memo(({ label, icon, collapsed, isOpen, toggleOpen, subItems }) => (
  <li className="nav-item mb-3">
    <div className="nav-link text-white d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={toggleOpen}>
      {icon}
      {!collapsed && <span className="ms-2">{label}</span>}
    </div>
    {isOpen && !collapsed && (
      <ul className="nav flex-column ps-3">
        {subItems.map((item, index) => (
          <SidebarItem key={index} to={item.to} icon={item.icon} label={item.label} collapsed={collapsed} />
        ))}
      </ul>
    )}
  </li>
));

export default Dashboard; 


