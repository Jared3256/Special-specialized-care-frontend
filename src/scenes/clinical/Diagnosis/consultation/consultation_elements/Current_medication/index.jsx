import { Box, Radio, RadioGroup, Typography, colors, useTheme } from '@mui/material'
import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataCurrentMedication } from '../../../../../../data/mockData';
import { tokens } from '../../../../../../components/components/Theme';

export default function Current_Medication() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box paddingX={"15px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant='h4'>
          Current Medication
        </Typography>
        <Box>
          <RadioGroup sx={{display:"flex"}}>
            <Radio/>
            <Radio/>
          </RadioGroup>
        </Box>
      </Box>

      <Box
        height="63vh"
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
        }}mt="0px">
        <DataGrid
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rows={mockDataCurrentMedication} />
      </Box>
      
    </Box>
  )
}

const columns = [
  { field: "id", headerName: "SN.", flex: 0.5 },
  { field: "medicine", headerName: "Medicine",cellClassName:"name-column--cell", flex:1 },
  { field: "dosage", headerName: "Dosage" , cellClassName:"name-column--cell",flex:1},
  {
      field: "frequency",
      headerName: "Frequency",
      flex: 1
    },
  {
      field: "foodRelation",
      headerName: "Food Relation",
      cellClassName:"name-column--cell",
      flex: 1
  },
  {
      field: "route",
      headerName: "Route",
      flex: 1
    },
  {
      field: "startDate",
      headerName: "Start",
      flex: 1
    },
  {
      field: "endDate",
      headerName: "End",
      flex: 1
    },
  {
    field: "stop",
    headerName: "Stop",
    flex: 1,
    renderCell: ({ row: { stop } }) => {
        return (
          <Box onClick={() => {
            console.log("working as expected")
          }}
            height={"20px"} width={"20px"} bgcolor={"red"} />
        )
      }
  }

]
