import { Box, Checkbox, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../components/components/Theme';
import { HeartBrokenTwoTone, HourglassBottomTwoTone, VolunteerActivismOutlined } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import PatientVisitHeader from '../global/header';

export default function Diagnosis() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const navigate = useNavigate();

    const handleBoxClickEvent = ( link ) => {
        navigate(link);
        console.log(link)
    }
  return (
      <Box m={"20px"}>
          <PatientVisitHeader/>
          <Box mt={"20px"} display="flex" justifyContent={"space-between"}>
              <Box
                  onClick={() => {
                      handleBoxClickEvent("/info/diagnosis/medical_records")
                  }}
                  alignItems={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  height={"40px"}
                  width={"100%"}
                  mr={"5px"}
                  bgcolor={colors.blueAccent[400]}>
                  <VolunteerActivismOutlined/>
                  <Typography
                      sx={{ml:"5px"}}
                      variant='h5'>
                      MEDICAL RECORDS
                  </Typography>
              </Box>
             
              <Box
                   onClick={() => {
                      handleBoxClickEvent("/info/diagnosis/consultation")
                  }}
                  alignItems={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  height={"40px"}
                  width={"100%"}
                  mr={"5px"}
                  bgcolor={colors.greenAccent[400]}>
                  <VolunteerActivismOutlined/>
                  <Typography
                      sx={{ml:"5px"}}
                      variant='h5'>
                      CONSULTATION
                  </Typography>
              </Box>
             
          </Box>
          
          <Box mt="20px" display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h4">
                  Treatment Details
              </Typography>

              <Box display={"flex"} alignItems={"center"}>
                  <Checkbox sx={{mr:"4px"}} />
                  <Typography sx={{mr:"4px"}} variant='h5'>
                      Release
                  </Typography>
                  <HeartBrokenTwoTone sx={{mr:"4px"}}/>
              </Box>
          </Box>

          <Outlet/>
      </Box>
  )
}
