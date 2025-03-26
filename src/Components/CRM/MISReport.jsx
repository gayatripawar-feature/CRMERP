import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const MISReport = () => {
  // Initializing state for form inputs
  const [flatNo, setFlatNo] = useState('');
  const [allotteeName, setAllotteeName] = useState('');
  const [status, setStatus] = useState('');
  const [ownerType, setOwnerType] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');

  return (
  
    
    <div className="container mt-5 shadow p-4 rounded">
    

      <form>
        <div className="row g-3">
          {/* Flat No */}
          <div className="col-md-2">
            <label className="form-label">Flat No:</label>
            <select 
              className="form-select" 
              value={flatNo} 
              onChange={(e) => setFlatNo(e.target.value)}
            >
              <option value="">Select Flat No</option>
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
              <option value="104">104</option>
            </select>
          </div>

          {/* Name of Allottee */}
          <div className="col-md-3">
            <label className="form-label">Name of Allottee:</label>
            <select 
              className="form-select" 
              value={allotteeName} 
              onChange={(e) => setAllotteeName(e.target.value)}
            >
              <option value="">Select Allottee</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Michael Johnson">Michael Johnson</option>
              <option value="Emma Brown">Emma Brown</option>
            </select>
          </div>

          {/* Status */}
          <div className="col-md-2">
            <label className="form-label">Status:</label>
            <select 
              className="form-select" 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="sold">Sold</option>
              <option value="unsold">Unsold</option>
            </select>
          </div>

          {/* Owner Type */}
          <div className="col-md-2">
            <label className="form-label">Owner Type:</label>
            <select 
              className="form-select" 
              value={ownerType} 
              onChange={(e) => setOwnerType(e.target.value)}
            >
              <option value="">Select Owner Type</option>
              <option value="landowner">Landowner</option>
              <option value="tenant">Tenant</option>
            </select>
          </div>

          {/* Approval Status */}
          <div className="col-md-2">
            <label className="form-label">Approval Status:</label>
            <select 
              className="form-select" 
              value={approvalStatus} 
              onChange={(e) => setApprovalStatus(e.target.value)}
            >
              <option value="">Select Approval Status</option>
              <option value="approved">Approved</option>
              <option value="unapproved">Unapproved</option>
            </select>
          </div>
        </div>

      
      </form>
    </div>
  );
};

export default MISReport;
