import { Box, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../../../../components/components/Theme';
import { PrintRounded } from '@mui/icons-material';


const InputElement = ({label}) => {
    return (
        <Box mt="10px"display={"flex"} justifyContent={"space-between"}>
            <Typography  variant='h5'>
                {label}
            </Typography>
            <TextField
                sx={{width:"500px"}}
                variant='outlined'
                size='small'
            />
        </Box>
    );
}
export default function History_and_Examination() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
      <Box paddingLeft={"15px"}>
          <Box alignItems={"center"}
              paddingLeft={"5px"}
              display={"flex"}
              justifyContent={"space-between"}
              height={"40px"}
              bgcolor={colors.blueAccent[400]}>
              <Typography variant="h4">
                  History and Examination
              </Typography>
              <PrintRounded sx={{mr:"5px", height:"25px", width:"25px"}} />
          </Box>

          <Box>
              <InputElement label="History of Presenting Complaint "/>
              <InputElement label="Systemic Enquiry "/>
              <InputElement label="Physical Examination "/>
              <InputElement label="General Examination "/>
              <InputElement label="Cardiovascular "/>
              <InputElement label="Respiration "/>
              <InputElement label="Gastrointestinal"/>
              <InputElement label="Past Medical/Surgery history "/>
              <InputElement label="Musculoskeletal"/>
              <InputElement label="Family history "/>
              <InputElement label="Peadric history "/>
              <InputElement label="Gynaec/ Obstestic History "/>
              <InputElement label="Vaginal Examination "/>
          </Box>
      </Box>
  )
}
