import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../../components/components/Theme';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Medical_Records() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
  return (
      <Box minHeight={ "700px"}
          mt="20px"
          display={"grid"}
          gridTemplateColumns="repeat(12, 1fr)"
          gap="0px">
          <Box display={"flex"} flexDirection={"column"}  gridColumn="span 3" bgcolor={colors.grey[400]}>
              <BoxElement label={"Allergies"} link={ "/info/diagnosis/medical_records/allergies"} />
              <BoxElement label={"Immunization"} link={ "/info/diagnosis/medical_records/immunization"} />
              <BoxElement label={"Diagnosis"} link={ "/info/diagnosis/medical_records/complaint"} />
              <BoxElement label={"Medication"} link={ "/info/diagnosis/medical_records/history_examination"} />
              <BoxElement label={"Test Results"} link={ "/info/diagnosis/medical_records/diagnosis"} />
              <BoxElement label={"Social History"} link={ "/info/diagnosis/medical_records/diagnosis"} />
              <BoxElement label={"Visit History"} link={ "/info/diagnosis/medical_records/diagnosis"} />
              <BoxElement label={"Clinical History"} link={ "/info/diagnosis/medical_records/diagnosis"} />
              
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
    const colors = tokens(theme.palette.mode)

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
