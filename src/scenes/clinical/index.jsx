import {
  Alert,
  AlertTitle,
  Box,
  Button,
  ListSubheader,
  MenuItem,
  Select,
  Typography,
  useTheme
} from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../components/components/Theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataClinicalPatient} from '../../data/mockData';
import {useNavigate } from 'react-router-dom';
import { SearchOffRounded } from '@mui/icons-material';


export default function ClinicalManagement() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [patient, setPatient] = useState();
  const [doctor, setDoctor] = useState();
  const [category, setCategory] = useState();

  const handleSearchButtonEvent = () => {
    console.log({ patient }, { doctor }, { category })
    
  }

  const showAlert=() => {
    return (
      <Alert
        variant='filled'
        severity='success'>
        <AlertTitle>Success</AlertTitle>
        Search was successful
      </Alert>
    );
  }

  const columns = [
    { field: "id", headerName: "SN", flex: 0.5 },
    { field: "visitNo", headerName: "Visit No" },
    {
      field: "dateTime",
      headerName: "Date & Time",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "clinicDepartment",
      headerName: "Clinical Department",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "regNo",
      headerName: "Reg. No.",
      flex: 1
    },
    {
      field: "patientName",
      headerName: "Name",
      flex: 1,
       cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1
    },
    {
      field: "assignedUser",
      headerName: "Assigned User",
      flex: 1
    },
    {
      field: "patientStatus",
      headerName: "Status",
      flex: 1
    },
    {
      field: "acknowledge",
      headerName: "Acknowledgement",
      flex: 1,
      renderCell: ({ row: { acknowledge } }) => {
        return (
          <>
            <Button
              sx={{ mr: 2 }}
              color="secondary"
              variant="contained"
              onClick={() => {
                  handleRowClick}}>
                  ACK
                </Button>
          </>
        )
      }
    },
  ]

  const handleRowClick = (params) => {
    const regNo = params.row.regNo;
    navigate("/info/patient_visits?id=" + regNo)
  }
  return (
    <Box
      
      m="20px"
    >
      <Box display="flex" p="8px" bgcolor={colors.primary[400]}> 
        <Typography
          variant='h5'
          sx={{mr:"25px"}}
        >
          Search by
        </Typography>

        <Select
          defaultValue={""}
          label="Grouping"
          size='small'
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          sx={{ ml: "10px", minWidth: "180px" }} >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category</ListSubheader>
          <MenuItem value={"nurse"}>Nurse Seen</MenuItem>
          <MenuItem value={"doctor"}>Doctor Seen</MenuItem>
          <MenuItem value={"visit"}>Visit complete</MenuItem>
        </Select>

        <Typography
          variant='h5'
          sx={{mr:"25px", ml:"20px"}}
        >
          Doctor
        </Typography>

        <Select
          onChange={(e) => {
            setDoctor(e.target.value)
        }}
          defaultValue={""}
          label="Grouping"
          size='small'
          sx={{ ml: "10px", minWidth: "180px" }} >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Doctor</ListSubheader>
          <MenuItem value={"pharmacist"}>Pharmacist</MenuItem>
          <MenuItem value={"df"}>DF</MenuItem>
          <MenuItem value={"lab"}>Lab</MenuItem>
        </Select>
                
        <Typography
          variant='h5'
          sx={{mr:"25px", ml:"20px"}}
        >
         Patient Type
        </Typography>
                
        <Select
          onChange={(e) => {
            setPatient(e.target.value)
          }}
          defaultValue={""}
          label="Grouping"
          size='small'
          sx={{ ml: "10px", minWidth: "180px" }} >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Patient</ListSubheader>
          <MenuItem value={"out"}>Out Patient</MenuItem>
          <MenuItem value={"in"}>In Patient</MenuItem>
          <MenuItem value={"discharged"}>Discharged</MenuItem>
        </Select>
        

        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"flex-end"}
          alignItems={"center"}>
          <Button
            onClick={() => {
              handleSearchButtonEvent();
              showAlert();
              
            }}
            color="secondary"
              variant="contained" sx={{mr:"40px"}}>
            <SearchOffRounded sx={{ width: "25px", height: "25px" }} />
            Search
          </Button>
          
        </Box>

      </Box>

      <Box display="flex" mt="20px" >
        {/* New Patient Box */}
        <Box
          display="flex"
          justifyContent="space-around"
          bgcolor={colors.greenAccent[600]}
          alignItems="center"
          mr="10px"
          sx={{
            minWidth: "180px", height:"40px", borderRadius:"5px"
          }}
        >
          <Typography
            fontSize="16px"
          >
            New Patient [ 14 ]
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          bgcolor={colors.blueAccent[600]}
          alignItems="center"
          mr="10px"
          sx={{
            minWidth: "180px", height:"40px", borderRadius:"5px"
          }}
        >
          <Typography
            fontSize="16px"
          >
            Nurse Seen [ 0 ]
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          bgcolor={colors.blueAccent[600]}
          alignItems="center"
          mr="10px"
          sx={{
            minWidth: "180px", height:"40px", borderRadius:"5px"
          }}
        >
          <Typography
            fontSize="16px"
          >
           Doctor Seen [ 0 ]
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          bgcolor={colors.blueAccent[600]}
          alignItems="center"
          mr="10px"
          sx={{
            minWidth: "180px", height:"40px", borderRadius:"5px"
          }}
        >
          <Typography
            fontSize="16px"
          >
           Visit Complete [ 0 ]
          </Typography>
        </Box>
      
      </Box>

      <Box
        height="68vh"
        display="flex"
        mt="50px"
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
          onRowClick={handleRowClick}
          components={{ Toolbar: GridToolbar }}
          rows={mockDataClinicalPatient}
          columns={columns} />
      </Box>

    </Box>
  );
    
}
