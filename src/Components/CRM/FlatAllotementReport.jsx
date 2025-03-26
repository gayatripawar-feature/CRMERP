


import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const FlatAllotmentReport = () => {
  const [formData, setFormData] = useState({
    project: '',
    wing: '',
    floor: '',
    flatNo: '',
    flatType: '',
    approvalStatus: '',
    ownership: '',
    saleStatus: '',
    startDate: null,
    endDate: null,
  });

  const [summaryData, setSummaryData] = useState({
    approvalStatusSummary: { approved: 10, rejected: 5 },
    ownershipSummary: { landowner: 8, developer: 12, investor: 3 },
    saleStatusSummary: { sold: 15, unsold: 5 },
    flatTypeSummary: { "1BHK": 5, "2BHK": 8, "3BHK": 4 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, newDate) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: newDate,
    }));
  };

  return (
    <div className="container mt-3" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <h5 className="mb-5">Reports / Flat Allotment Report</h5>

      {/* Form Wrapper */}
      <div className="form-wrapper shadow-lg p-4 rounded" style={{ boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 0.7)', overflowX: 'auto', whiteSpace: 'nowrap' }}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <form>
      {/* First Row - 4 Fields */}
      <div className="row mb-3 pt-3">
        {/* Project Selection */}
        <div className="col-md-3">
          <label htmlFor="project" className="form-label">Project:</label>
          <select id="project" name="project" className="form-select" value={formData.project} onChange={handleChange}>
            <option value="">--Select Project--</option>
            <option value="all">All</option>
            <option value="shubhElara">Shubh Elara</option>
          </select>
        </div>

        {/* Wing Selection */}
        <div className="col-md-3">
          <label htmlFor="wing" className="form-label">Wing:</label>
          <select id="wing" name="wing" className="form-select" value={formData.wing} onChange={handleChange}>
            <option value="">Select Wing</option>
            <option value="all">All</option>
            <option value="j">J</option>
          </select>
        </div>

        {/* Floor Selection */}
        <div className="col-md-3">
          <label htmlFor="floor" className="form-label">Floor:</label>
          <select id="floor" name="floor" className="form-select" value={formData.floor} onChange={handleChange}>
            <option value="">Select Floor</option>
            {[...Array(20).keys()].map((i) => (
              <option key={i + 1} value={`${i + 1}st floor`}>{`${i + 1}st floor`}</option>
            ))}
          </select>
        </div>

        {/* Flat No Field */}
        <div className="col-md-3">
          <label htmlFor="flatNo" className="form-label">Flat No:</label>
          <select id="flatNo" name="flatNo" className="form-select" value={formData.flatNo} onChange={handleChange}>
            <option value="">Select Flat No</option>
            {/* Add options here */}
          </select>
        </div>
      </div>

      {/* Second Row - 3 Fields */}
      <div className="row mb-3 pt-3">
        {/* Flat Type */}
        <div className="col-md-4">
          <label htmlFor="flatType" className="form-label">Flat Type:</label>
          <select id="flatType" name="flatType" className="form-select" value={formData.flatType} onChange={handleChange}>
            <option value="">Select Flat Type</option>
            <option value="all">All</option>
            <option value="1bhk">1 BHK</option>
            <option value="1_5bhk">1.5 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="2_5bhk">2.5 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
            <option value="4_5bhk">4.5 BHK</option>
          </select>
        </div>

        {/* Approval Status */}
        <div className="col-md-4">
          <label htmlFor="approvalStatus" className="form-label">Approval Status:</label>
          <select id="approvalStatus" name="approvalStatus" className="form-select" value={formData.approvalStatus} onChange={handleChange}>
            <option value="">--Select Approval Status--</option>
            <option value="approved">Approved</option>
            <option value="unapproved">Unapproved</option>
          </select>
        </div>

        {/* Ownership */}
        <div className="col-md-4">
          <label htmlFor="ownership" className="form-label">Ownership:</label>
          <select id="ownership" name="ownership" className="form-select" value={formData.ownership} onChange={handleChange}>
            <option value="">Select Ownership</option>
            <option value="all">All</option>
            <option value="landowner">Landowner</option>
            <option value="developer">Developer</option>
            <option value="investor">Investor</option>
          </select>
        </div>
      </div>

      {/* Third Row - 3 Fields */}
      <div className="row mb-3 pt-3">
        {/* Sale Status */}
        <div className="col-md-4">
          <label htmlFor="saleStatus" className="form-label">Sale Status:</label>
          <select id="saleStatus" name="saleStatus" className="form-select" value={formData.saleStatus} onChange={handleChange}>
            <option value="">Select Sale Status</option>
            <option value="sold">Sold</option>
            <option value="unsold">Unsold</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="col-md-4 pt-4">
          <label htmlFor="startDate" className="form-label pt-3 p-1">Start Date:</label>
          <DatePicker
            value={formData.startDate}
            onChange={(date) => handleDateChange('startDate', date)}
            renderInput={(props) => (
              <TextField
                {...props}
                fullWidth
                InputProps={{
                  ...props.InputProps,
                  style: { textAlign: 'center' },
                }}
              />
            )}
          />
        </div>

        {/* End Date */}
        <div className="col-md-4 pt-4">
          <label htmlFor="endDate" className="form-label pt-3 p-1">End Date:</label>
          <DatePicker
            value={formData.endDate}
            onChange={(date) => handleDateChange('endDate', date)}
            renderInput={(props) => (
              <TextField
                {...props}
                fullWidth
                InputProps={{
                  ...props.InputProps,
                  style: { textAlign: 'center' },
                }}
              />
            )}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="row mb-3">
        <div className="col-md-12 text-end">
          <button type="submit" className="btn btn-primary mt-4 w-25">Submit</button>
        </div>
      </div>

    </form>
  </LocalizationProvider>
</div>


      

<div className="row mt-5">
  {/* Approval Status Summary */}
  <div className="col-md-3 mb-4">
    <div className="card">
      <div className="card-header bg-primary text-white m-2 p-3">Approval Status Summary</div>
      <div className="card-body d-flex justify-content-between">
        <div>Approved:</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#e0f7fa', color: '#00796b' }}>
          {summaryData.approvalStatusSummary.approved}
        </div>
      </div>
      <div className="card-body d-flex justify-content-between">
        <div>Unapproved:</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#ffebee', color: '#d32f2f' }}>
          {summaryData.approvalStatusSummary.rejected}
        </div>
      </div>
    </div>
  </div>

  {/* Ownership Summary */}
  <div className="col-md-3 mb-4">
    <div className="card">
      <div className="card-header bg-success text-white m-2 p-3">Ownership Summary</div>
      <div className="card-body d-flex justify-content-between">
        <div>Developer :</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#c8e6c9', color: '#388e3c' }}>
          {summaryData.ownershipSummary.landowner}
        </div>
      </div>
      <div className="card-body d-flex justify-content-between">
        <div>Investor:</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#c8e6c9', color: '#388e3c' }}>
          {summaryData.ownershipSummary.developer}
        </div>
      </div>
      <div className="card-body d-flex justify-content-between">
        <div>Landowner:</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#c8e6c9', color: '#388e3c' }}>
          {summaryData.ownershipSummary.investor}
        </div>
      </div>
    </div>
  </div>


  {/* <div className="col-md-3 mb-4">
    <div className="card">
      <div className="card-header bg-danger text-white m-2 p-3">Flat Type Summary</div>
      <div className="card-body">
        {Object.entries(summaryData.flatTypeSummary).map(([key, value]) => (
          <div className="d-flex justify-content-between mt-2" key={key}>
            <div>{key}:</div>
            <div className="bg-light rounded px-2" style={{ backgroundColor: '#ffccbc', color: '#d32f2f' }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div> */}


  <div className="col-md-3 mb-4">
    <div className="card">
      <div className="card-header bg-danger text-white m-2 p-3">Flat Type Summary</div>
      <div className="card-body">
        {/* List flat types in a specific order */}
        {["2.5 BHK", "4 BHK", "2 BHK", "3 BHK", "1 BHK", "1.5 BHK", "4.5 BHK"].map((flatType) => (
          <div className="d-flex justify-content-between mt-2" key={flatType}>
            <div>{flatType}:</div>
            <div
              className="bg-light rounded px-2"
              style={{ backgroundColor: '#ffccbc', color: '#d32f2f' }}
            >
              {summaryData.flatTypeSummary[flatType] || 0} {/* Display 0 if not found */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


  {/* Sale Status Summary */}
  <div className="col-md-3 mb-4">
    <div className="card">
      <div className="card-header bg-warning text-white m-2 p-3">Sale Status Summary</div>
      <div className="card-body d-flex justify-content-between">
        <div>Unsold :</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#fff9c4', color: '#f57f17' }}>
          {summaryData.saleStatusSummary.sold}
        </div>
      </div>
      <div className="card-body d-flex justify-content-between">
        <div>Sold:</div>
        <div className="bg-light rounded px-2" style={{ backgroundColor: '#fff9c4', color: '#f57f17' }}>
          {summaryData.saleStatusSummary.unsold}
        </div>
      </div>
    </div>
  </div>

  
 
</div>


    </div>
  );
};

export default FlatAllotmentReport;
