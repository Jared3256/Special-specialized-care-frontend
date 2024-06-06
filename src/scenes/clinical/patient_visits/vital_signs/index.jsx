import { Box, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../../components/components/Theme';


const InputElement = ({label, name, value}) => {
    return (
        <Box
            mb={"25px"}
            paddingTop={"3px"}
            paddingLeft={"3px"}
            display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5">
                {label}
            </Typography>
            <TextField
                sx={{ ml: "10px", maxHeight: "10px" , minWidth:"200px"}}
                size='small'
                value={value}
                variant='outlined'
                name={name} />
        </Box>
    );
}
export default function VitalSigns() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

  return (
      <Box
          mt={"30px"}
          bgcolor={colors.primary[400]}
          display={"flex"} justifyContent={"space-between"}>
          <Box mr="30px" width={"100%"}>
              <InputElement label={"Systolic B.P"} name={"systolicBp"} />
              <InputElement label={"Weight (KG)"} name={"weight"} />
              <InputElement label={"Respiratory Rate (/min)"} name={"respRate"} />
              <InputElement label={"Blood Sugar(F)"} name={"sugarF"} />
              <InputElement label={"AVPU"} name={"avpu"} />
          </Box>
          <Box mr="30px" width={"100%"}>
              <InputElement label={"Dystolic B.P"} name={"dystolicBp"} />
              <InputElement label={"Height (cm)"} name={"height"} />
              <InputElement label={"Heart Rate (BPM)"} name={"heartRate"} />
              <InputElement label={"Blood Sugar(R)"} name={"sugarR"} />
              <InputElement label={"Trauma"} name={"trauma"} />
          </Box>
          <Box mr="30px" width={"100%"}>
              <InputElement label={"Temperature (oC)"} name={"dystolicBp"} />
              <InputElement label={"BMI (kg/m2)"} name={"weight"} />
              <InputElement label={"Urine Output"} name={"urine"} />
              <InputElement label={"SPO2"} name={"spo2"} />
              <InputElement label={"Mobility"} name={"mobility"} />
          </Box>
          
    </Box>
  )
}
