import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper ,IconButton,Tooltip, } from "@mui/material";
import { Edit, WhatsApp, Email } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";


// const openDocument = (url) => {
//   if (url) {
//     window.open(url, "_blank"); // Opens the document in a new tab
//   }
// };

const openDocument = (url) => {
  if (!url) return; // If URL is empty, just return

  // Open the document in a new tab, no matter what
  window.open(url, "_blank");
};

const BookingFormTable= ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
           <TableRow sx={{background:"#3621a9"}}>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ACTION</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>ENQUIRY NO.</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PROJECT NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>DATE OF FLAT BOOKING</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NAME OF ALOTEE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>SOURCE NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>DATE OF BIRTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OCCUPATION</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PAN NO.</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>AADHAR NO.</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>MOBILE NO.</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ALTERNATE MOBILE NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>WHATSAPP NO.</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>EMAIL ID</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ADDRESS</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NAME OF CO-ALOTEE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>DATE OF BIRTH (CO-ALOTEE)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OCCUPATION (CO-ALOTEE)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PAN NO. (CO-ALOTEE)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>AADHAR NO. (CO-ALOTEE)</TableCell>

            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>MOBILE NO. & EMAIL (CO-ALOTEE)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>FLAT NO.</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>TYPE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>WING</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>SOLD RATE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>CARPET AREA IN (SQ. MTR.)</TableCell>


            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ENCLOSED BALCONY IN (SQ. MTR.)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OPEN BALCONY IN (SQ. MTR.)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>TERRACE IN (SQ. MTR.)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PARKING</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>FLOOR</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>TOTAL CONSIDERATION /AGREEMENT VALUE	</TableCell>

            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>BOOKING AMOUNT / ADVANCE PAYMENT</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>STAMP DUTY (7% OF AGREEMENT COST)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>REGISTRATION FEE(1% OF AGREEMENT COST)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>GST AMOUNT</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PAN CARD(OF BOTH)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>AADHAR CARD(OF BOTH)</TableCell>


            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>MARRIAGE CERTIFICATE (IF AVAILABLE)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PASSPORT SIZE PHOTO (OF BOTH)</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ANY OTHER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>BOOKING AMOUNT</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>PAYMENT MODE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>CHEQUE/TRN NO.</TableCell>

            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>CHEQUE/TRN DATE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>BANK NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>BANK DETAILS</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
           
          
           {/* <TableCell sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
  <IconButton 
    sx={{ background: "#1976D2", color: "white", borderRadius: "50%", width: 38, height: 38, p: 0.5 }}
    onClick={() => handleEditClick(item)}
  >
    <Edit sx={{ fontSize: 18 }} />
  </IconButton>
  <IconButton 
    sx={{ background: "#25D366", color: "white", borderRadius: "50%", width: 38, height: 38, p: 0.5 }}
    onClick={() => handleWhatsAppClick(item)}
  >
    <WhatsApp sx={{ fontSize: 18 }} />
  </IconButton>
  <IconButton 
    sx={{ background: "#D44638", color: "white", borderRadius: "50%", width: 38, height: 38, p: 0.5 }}
    onClick={() => handleEmailClick(item)}
  >
    <Email sx={{ fontSize: 18 }} />
  </IconButton>
</TableCell> */}

<TableCell sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
  <Tooltip title="Edit" arrow>
    <IconButton 
      sx={{ background: "#1976D2", color: "white", borderRadius: "50%", width: 38, height: 38, p: 0.5 }}
      onClick={() => handleEditClick(item)}
    >
      <Edit sx={{ fontSize: 18 }} />
    </IconButton>
  </Tooltip>

  <Tooltip title="WhatsApp" arrow>
    <IconButton 
      sx={{ background: "#25D366", color: "white", borderRadius: "50%", width: 38, height: 38, p: 0.5 }}
      onClick={() => handleWhatsAppClick(item)}
    >
      <WhatsApp sx={{ fontSize: 18 }} />
    </IconButton>
  </Tooltip>

  <Tooltip title="Email" arrow>
    <IconButton 
      sx={{ background: "#D44638", color: "white", borderRadius: "50%", width: 38, height: 38, p: 0.5 }}
      onClick={() => handleEmailClick(item)}
    >
      <Email sx={{ fontSize: 18 }} />
    </IconButton>
  </Tooltip>
</TableCell>


<TableCell>{item.timestamp}</TableCell>
<TableCell>{item.enquiryNo}</TableCell>
<TableCell>{item.projectName}</TableCell>
<TableCell>{item.dateOfFlatBooking}</TableCell>
<TableCell>{item.nameOfAllotee}</TableCell>
<TableCell>{item.sourceName}</TableCell>
<TableCell>{item.dateOfBirth}</TableCell>
<TableCell>{item.occupation}</TableCell>
<TableCell>{item.panNo}</TableCell>
<TableCell>{item.aadharNo}</TableCell>
<TableCell>{item.mobileNo}</TableCell>
<TableCell>{item.alternateMobileNo}</TableCell>
<TableCell>{item.whatsappNo}</TableCell>
<TableCell>{item.emailId}</TableCell>
<TableCell>{item.address}</TableCell>
<TableCell>{item.nameOfCoAllotee}</TableCell>
<TableCell>{item.dateOfBirthCoAllotee}</TableCell>
<TableCell>{item.occupationCoAllotee}</TableCell>
<TableCell>{item.panNoCoAllotee}</TableCell>
<TableCell>{item.aadharNoCoAllotee}</TableCell>
<TableCell>{item.mobileEmailCoAllotee}</TableCell>
<TableCell>{item.flatNo}</TableCell>
<TableCell>{item.type}</TableCell>
<TableCell>{item.wing}</TableCell>
<TableCell>{item.soldRate}</TableCell>
<TableCell>{item.carpetAreaSqMtr}</TableCell>
<TableCell>{item.enclosedBalconySqMtr}</TableCell>
<TableCell>{item.openBalconySqMtr}</TableCell>
<TableCell>{item.terraceSqMtr}</TableCell>
<TableCell>{item.parking}</TableCell>
<TableCell>{item.floor}</TableCell>
<TableCell>{item.totalConsideration}</TableCell>
<TableCell>{item.bookingAmount}</TableCell>
<TableCell>{item.stampDuty}</TableCell>
<TableCell>{item.registrationFee}</TableCell>
<TableCell>{item.gstAmount}</TableCell>

 <TableCell>
  <IconButton 
    sx={{ color: "#1976D2" }} 
    onClick={() => openDocument(item.panCardBoth)}
  >
    <Visibility />
  </IconButton>
</TableCell> 


<TableCell>
  <IconButton 
    sx={{ color: "#1976D2" }} 
    onClick={() => openDocument(item.aadharCardBoth)}
  >
    <Visibility />
  </IconButton>
</TableCell>


<TableCell>
  <IconButton 
    sx={{ color: "#1976D2" }} 
    onClick={() => openDocument(item.marriageCertificate)}
  >
    <Visibility />
  </IconButton>
</TableCell>

<TableCell>
  <IconButton 
    sx={{ color: "#1976D2" }} 
    onClick={() => openDocument(item.passportSizePhotoBoth)}
  >
    <Visibility />
  </IconButton>
</TableCell>

<TableCell>
  <IconButton 
    sx={{ color: "#1976D2" }} 
    onClick={() => openDocument(item.anyOther)}
  >
    <Visibility />
  </IconButton>
</TableCell>
<TableCell>{item.bookingAmount}</TableCell>
<TableCell>{item.paymentMode}</TableCell>
<TableCell>{item.chequeTrnNo}</TableCell>
<TableCell>{item.chequeTrnDate}</TableCell>
<TableCell>{item.bankName}</TableCell>
<TableCell>{item.bankDetails}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingFormTable;
