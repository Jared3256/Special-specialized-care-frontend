import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { tokens } from '../../../../components/components/Theme'

export default function Consultation() {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
  return (
      <Box minHeight={ "700px"}
          mt="20px"
          display={"grid"}
          gridTemplateColumns="repeat(12, 1fr)"
          gap="0px">
          <Box display={"flex"} flexDirection={"column"}  gridColumn="span 3" bgcolor={colors.grey[400]}>
              <BoxElement label={"Nurse Assessment"} link={ "/info/diagnosis/consultation/nurse_assessment"} />
              <BoxElement label={"Current Medication"} link={ "/info/diagnosis/consultation/current_medication"} />
              <BoxElement label={"Presenting Complaint"} link={ "/info/diagnosis/consultation/complaint"} />
              <BoxElement label={"History & Examination"} link={ "/info/diagnosis/consultation/history_examination"} />
              <BoxElement label={"Diagnosis"} link={ "/info/diagnosis/consultation/diagnosis"} />
              <BoxElement label={"Prescription Medicine"} link={ "/info/diagnosis/consultation/diagnosis"} />
              <BoxElement label={"Advice"} link={ "/info/diagnosis/consultation/diagnosis"} />
              
          </Box>
          <Box gridColumn="span 9" >
              <Outlet/>
          </Box>
      </Box>

  )
}

const BoxElement = ({ label, link }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleBoxClickEvent = ({link}) => {
        navigate( link  );
  }
  

  return (
    <Box
            height={"40px"} bgcolor={colors.blueAccent[300]}
            paddingLeft={"5px"} onClick={() => {
            handleBoxClickEvent({link});
      }}>
      <Typography variant='h5'>
                { label}
      </Typography>
    </Box>
  );
}
