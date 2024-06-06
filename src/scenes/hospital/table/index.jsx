import { Box, Button, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { mockDataClinicalPatient } from '../../../data/mockData'
import { tokens } from '../../../components/components/Theme';

export default function HospitaTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
      <Box
          paddingX={"5px"} height="68vh"
          display="flex" mt="50px"
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
              components={{ Toolbar: GridToolbar }}
              rows={mockDataClinicalPatient}
              columns={columns}
          />
    </Box>
  )
}

 const columns = [
    { field: "id", headerName: "SN", flex: 0.5 },
    { field: "visitNo", headerName: "Registra No." },
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
      headerName: "Beds",
      flex: 1
    },
    {
      field: "patientStatus",
      headerName: "Status",
      flex: 1
    }
  ]
