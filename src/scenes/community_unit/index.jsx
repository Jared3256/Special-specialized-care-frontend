import { Box, Button, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/components/Header'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataCommunityUnit } from '../../data/mockData';
import { tokens } from '../../components/components/Theme';
import { useNavigate } from 'react-router-dom';

function Community_Unit() {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


    const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "registraId",
      headerName: "Registrar ID",
      flex:1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "district",
      headerName: "Sub-County",
      flex: 1,
    },
    {
      field: "population",
      type:"number",
      headerName: "Population",
      flex: 1,
      headerAlign: "left",
      align: "left",
    }
    ];
    

  return (
      <Box m="20px">
          <Header title="Community Unit" subtitle="Manage Community Unit from here"/>
          <Box display="flex" justifyContent="end" mt="20px">
        <Button
          sx={{ mr: 2 }}
          color="secondary"
          variant="contained"
          onClick={()=>navigate("/info/community_unit/register")}
        >
                  Register Community 
              </Button>
          </Box>
        <Box
              m="40px 0 0 0" height="70vh"
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
                  rows={mockDataCommunityUnit}
                  columns={columns}
                  components={{Toolbar : GridToolbar}}
              />
        </Box>
      </Box>
  )
};


export default Community_Unit;