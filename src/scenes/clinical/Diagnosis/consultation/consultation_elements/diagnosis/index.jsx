import { ArtTrackSharp, Save } from '@mui/icons-material'
import { Box, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbarColumnsButton } from '@mui/x-data-grid'
import React from 'react'
import { mockDataClinicalPatient } from '../../../../../../data/mockData'
import { tokens } from '../../../../../../components/components/Theme'

export default function Diagnosis_Structure() {
    const shape = 400
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
      <Box paddingLeft={"15px"}>
          <Box>
              <Typography variant='h4'>
                  Diagnosis
              </Typography>
          </Box>
          <Box mt="10px" display="flex" justifyContent={"space-between"}>
              <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
                  <Box width={"100%"} mr={"40px"}>
                      <InputElement label={"Attendance"} />
                      <InputElement label={"Type"} />
                      <InputElement label={"Diagnosis"} />
                      <InputElement label={"Category"} />
                  </Box>

                  <Box width={"100%"}>
                      <InputElement label={"D-GRD Code"} />
                      <InputElement label={"ICD-10"} />
                      <InputElement label={"Diagnosis status"} />
                      <InputElement label={"Adverse Effects"} />
                  </Box>
                  
              </Box>
              <Box alignItems={ "flex-end"} display={"flex"} ml={ "30px"} width={"100px"}>
                  <Save sx={{ marginRight:"10px", width:"25px", height:"25px"}} />
                  <ArtTrackSharp sx={{marginRight:"10px", width:"25px", height:"25px"}}/>
              </Box>
          </Box>

          <Box mt={"20px"} height={"40vh"}
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
              <DataGrid columns={ columns} rows={mockDataClinicalPatient} components={{Toolbar: GridToolbarColumnsButton}}/>
          </Box>
      </Box>
  )
}

const InputElement = ({label}) => {
    return (
        <Box  mt="10px" display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize="14px" variant='label' mr={"10px"}>
                {label}
            </Typography>
            <TextField variant='outlined' size='small' sx={{ width: "200px"}} />
        </Box>
    );
}

const columns = [
    { field: "id", headerName: "SN", flex: 0.5 },
    { field: "registrarId", headerName: "Attendance"  },
    {
      field: "name",
      headerName: "Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "category", headerName: "Category",flex:1 },
    { field: "diagnosis", headerName: "Diagnosis"  ,flex:1},
    { field: "visitType", headerName: "Visit Type" ,flex:1 },
    { field: "icd10", headerName: "ICD 10" ,flex:1 },
    { field: "dgrdCode", headerName: "D-GRG Code" ,flex:1 },
]
