import { AdminPanelSettingsOutlined, AdminPanelSettingsTwoTone, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { Box, useTheme , Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../components/components/Theme";
import Header from "../../components/components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData"


const IconComponent = (value) => {
  const access = value.access;

  return (
    <Box sx={{ml:2}}> 
      {access === "admin V" && <AdminPanelSettingsTwoTone />}
      {access === "admin" && <AdminPanelSettingsOutlined />}
      {access === "manager" && <SecurityOutlined />}
      {access === "user" && <LockOpenOutlined />}
    </Box>
  );
}


const Team = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
     const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              alignContent:"center"
            }}
            justifyContent="center"
            backgroundColor={
              access === "admin V" 
                ? colors.redAccent[600]
                :access === "admin"
                  ? colors.blueAccent[600]
                    : access === "manager"
                      ? colors.greenAccent[600]
                        : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            <IconComponent access={ access} />
            <Typography
                color={colors.grey[100]} sx={{ ml: "6px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

    return (
        <Box m="20px">
             <Header title="TEAM" subtitle="Managing the Team Members" />
              <Box display="flex" justifyContent="end" mt="20px">
                <Button  sx={{mr:2}}color="secondary" variant="contained"onClick={()=>{
                  navigate("/info/contacts")}}>
                  User Contacts
                </Button>
                <Button  color="secondary" variant="contained"onClick={()=>{
                  navigate("/info/form")}}>
                  Create New User
                </Button>
        </Box>
        <Box
            m="20px 0 0 0"
            height="68vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-cellContent": {
                fontSize: "15px",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontSize: "15px",
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
            }}
          >
            <DataGrid columns={columns} rows={mockDataTeam}/>
        </Box>
      </Box>
    )
}

export default Team;