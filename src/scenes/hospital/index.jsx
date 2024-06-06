import { Box, Button, ListSubheader, MenuItem, Select, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../components/components/Theme';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SearchOffRounded } from '@mui/icons-material';
import HospitaTable from './table';

export default function Hospital_Management() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname)

    return (
        <Box m="20px">
            {location.pathname == "/info/hospital/register" ? undefined :
                <Box display="flex" p="8px" bgcolor={colors.primary[400]}>
                <Typography variant='h5' sx={{ mr: "25px" }}>
                    Search by
                </Typography>

                <Select defaultValue={""} label="Grouping" size='small' sx={{ ml: "10px", minWidth: "180px" }}>
                    <MenuItem value="">
                        <em>none</em>
                    </MenuItem>
                    <ListSubheader>Category</ListSubheader>
                    <MenuItem value={"nurse"}>Nurse Seen</MenuItem>
                    <MenuItem value={"doctor"}>Doctor Seen</MenuItem>
                    <MenuItem value={"visit"}>Visit complete</MenuItem>
                </Select>

                <Typography variant='h5' sx={{ mr: "25px", ml: "20px" }}>
                    Doctor
                </Typography>

                <Select defaultValue={""} label="Grouping" size='small' sx={{ ml: "10px", minWidth: "180px" }}>
                    <MenuItem value="">
                        <em>none</em>
                    </MenuItem>
                    <ListSubheader>Category</ListSubheader>
                    <MenuItem value={"nurse"}>Nurse Seen</MenuItem>
                    <MenuItem value={"doctor"}>Doctor Seen</MenuItem>
                    <MenuItem value={"visit"}>Visit complete</MenuItem>
                </Select>

                <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}>
                    <Button
                        onClick={() => {
                           
                        }}
                        color="secondary"
                        variant="contained" sx={{ mr: "20px" }}>
                        <SearchOffRounded sx={{ width: "25px", height: "25px" }} />
                        Search
                    </Button>

                    
                        <Button
                        onClick={() => {
                            console.log("dsdffdf")
                           navigate("/info/hospital/register")
                        }}
                        color="secondary"
                        variant="contained" sx={{ mr: "40px" }}>
                        <SearchOffRounded sx={{ width: "25px", height: "25px" }} />
                        Register
                    </Button>
                    
                    
                </Box>
            </Box>
            }
            
            <Outlet/>
      </Box>
  )
}
