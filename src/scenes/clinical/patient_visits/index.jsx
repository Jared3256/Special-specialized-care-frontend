import {
  AutoModeTwoTone, BalconyTwoTone,
  CheckBox, Diversity2TwoTone,
  FavoriteTwoTone, Folder,
  GrassTwoTone, HdrPlusTwoTone,
  HeartBrokenTwoTone, HourglassBottomTwoTone
} from '@mui/icons-material'
import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../components/components/Theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataClinicalPatient } from '../../../data/mockData';
import VitalSigns from './vital_signs';
import PatientVisitHeader from '../global/header';


const BoxElement = ({ icon, label }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const height = "40px";
    
    return (
         <Box
                  display={"flex"}
                  bgcolor={colors.blueAccent[400]}
                  width={"100%"}
                  height={height}
                  alignItems={"center"}
                   justifyContent={"center"}
                  mr="4px"
        >
                {icon}
            <Typography
                sx={{ml:"5px"}}
                variant="h5">
                
                      {label}
                  </Typography>
              </Box>
    );
}
export default function PatientVisit() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
   
  return (
    <Box m="20px">
      <PatientVisitHeader/>
          <Box mt="20px" display="flex" justifyContent="space-between">
              <BoxElement icon={ <Folder/>} label={"MEDICAL RECORDS"}/>
              <BoxElement icon={ <Diversity2TwoTone/>} label={"HISTORY"}/>
              <BoxElement icon={<FavoriteTwoTone />} label={"VITALS"} />
              <BoxElement icon={<BalconyTwoTone />} label={"ALLERGIES"}  />
              <BoxElement icon={ <HdrPlusTwoTone/>} label={"MEDICAL DETAILS"}/>
              <BoxElement icon={ <GrassTwoTone/>} label={"PRESCRIPTION MEDICINE"}/>
              
          </Box>

          <Box mt="40px" display={"flex"} justifyContent={"space-between"}>
              <Box>
                  <Typography variant='h4'>
                      Vital Signs
                  </Typography>
              </Box>

              <Box display={"flex"}>
                  <CheckBox sx={{mr:"4px"}} />
                  <Typography sx={{mr:"4px"}} variant='h5'>
                      Release
                  </Typography>
                  <HeartBrokenTwoTone sx={{mr:"4px"}}/>
                  <HourglassBottomTwoTone/>
              </Box>
          </Box>
          <hr />
          <VitalSigns/>
          
          <Box mt="30px" >
              <Box mb="20px">
                  <Typography variant='h4'>
                      Current Vitals
                  </Typography>
              </Box>
              <Box
                  height="60vh"
                  display="flex"
                   sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cellContent": {
            fontSize: "15px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "15px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
              >
                  <DataGrid
                      columns={columns}
                      rows={mockDataClinicalPatient}
                      components={{ Toolbar: GridToolbar }} />
            </Box>
          </Box>
          
      </Box>
  )
}


const columns = [
    { field: "id", headerName: "SN", flex: 0.5 },
    { field: "visitType", headerName: "Visit Type" },
    {
      field: "score",
      headerName: "Score",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dateTime",
      headerName: "Date & Time",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1
    },
    {
      field: "sbp",
      headerName: "SBP",
      flex: 1
    },
    {
      field: "dbp",
      headerName: "DBP",
      flex: 1
    },
    {
      field: "temp",
      headerName: "Temp",
      flex: 1
    },
    {
      field: "rr",
      headerName: "RR",
      flex: 1
    },
    {
      field: "hr",
      headerName: "HR",
      flex: 1
    },
    {
      field: "trauma",
      headerName: "Trauma",
      flex: 1
    },
]