import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../../components/components/Theme';
import { AutoModeTwoTone } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

export default function PatientVisitHeader() {

    const [params, setParams] = useSearchParams()
    console.log(params.get("id"))
    
   
  return (
    <Box display="flex"justifyContent="space-between">
              <Box>
                  <Typography
                      fontWeight="bold"
                      variant='h4'
                  >
                      Patient Visits
                  </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
              <TypographyElement fLabel="Reg. No.:" sLabel={ params.get("id")} />
                  <TypographyElement fLabel="Name.:" sLabel="Jared Odhiambo"/>
                  <TypographyElement fLabel="Age/Gender.:" sLabel="24/M"/>
                 
                  <AutoModeTwoTone/>
              </Box>
          </Box>
  )
}

const TypographyElement = ({ fLabel, sLabel }) => {
     const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            mr="20px"
            display={"flex"}>
                      <Typography
                          variant='h6'
                          fontStyle={"bold"}
                          fontFamily={"Times new Roman"}
                          sx={{mr:"3px"}}
                          color={colors.blueAccent[400]}>
                          {fLabel}
                      </Typography>
            <Typography fontFamily={"Times new Roman"}>{ sLabel}</Typography>
                  </Box>
    );
}

