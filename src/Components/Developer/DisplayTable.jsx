import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper,Tooltip,IconButton } from "@mui/material";
import { EditIcon } from "lucide-react";
const DisplayTable = ({ data }) => {

  const data1 = [{
    action: 'Edit',
    firmName: 'ABC Firm',
    timestamp: '2025-03-31 10:00 AM',
    projectName: 'Project X',
    projectAddress: '123, Street, City',
    oldSurveyNumber: '12345',
    newSurveyNumber: '54321',
    village: 'Village A',
    taluka: 'Taluka B',
    district: 'District C',
    sanctionAuthority: 'Authority 1',
    east: '10m',
    west: '20m',
    north: '15m',
    south: '30m',
    latitude: '28.7041° N',
    longitude: '77.1025° E',
    landmark: 'Near Park',
    phaseNo: 'Phase 1',
    wingNo: 'Wing A',
    mahareraNo: 'MH123456',
  }];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
           <TableRow sx={{background:"#3621a9"}}>
            <TableCell  sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>ACTION</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>TIMESTAMP</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>FIRM NAME</TableCell>
       
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>PROJECT NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>PROJECT ADDRESS</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>OLD SURVEY NUMBER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }}>NEW SURVEY NUMBER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>VILLAGE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>TALUKA</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>DISTRICT</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>SANCTION AUTHORITY</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>EAST</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>WEST</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>NORTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>SOUTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>LATITUDE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>LONGITUDE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>LANDMARK</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>PHASE NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>WING NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" , whiteSpace: "nowrap"}}>MAHARERA NO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data1.map((item, index) => (
            <TableRow key={index}>
              {/* <TableCell>{item.action}</TableCell> */}
               <TableCell>
                      
                            
                         <Tooltip title="Edit">
                           <IconButton 
                             size="small" 
                             sx={{ backgroundColor: "#1976D2", color: "white", borderRadius: "50%", "&:hover": { backgroundColor: "#1565C0" } }} 
                             onClick={() => handleEdit(item)}
                           >
                             <EditIcon sx={{ fontSize: "18px" }} />
                           </IconButton>
                         </Tooltip>
                         </TableCell>
              <TableCell>{item.firmName}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.projectName}</TableCell>
              <TableCell>{item.projectAddress}</TableCell>
              <TableCell>{item.oldSurveyNumber}</TableCell>
              <TableCell>{item.newSurveyNumber}</TableCell>
              <TableCell>{item.village}</TableCell>
              <TableCell>{item.taluka}</TableCell>
              <TableCell>{item.district}</TableCell>
              <TableCell>{item.sanctionAuthority}</TableCell>
              <TableCell>{item.east}</TableCell>
              <TableCell>{item.west}</TableCell>
              <TableCell>{item.north}</TableCell>
              <TableCell>{item.south}</TableCell>
              <TableCell>{item.latitude}</TableCell>
              <TableCell>{item.longitude}</TableCell>
              <TableCell>{item.landmark}</TableCell>
              <TableCell>{item.phaseNo}</TableCell>
              <TableCell>{item.wingNo}</TableCell>
              <TableCell>{item.mahareraNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayTable;
