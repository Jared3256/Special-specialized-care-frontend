import { AddTaskTwoTone } from '@mui/icons-material'
import { Box, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

export default function Presenting_Complaint() {
  return (
      <Box paddingX={"15px"}>
          <Box>
              <Typography variant="h4">
                  Presenting Complaint
              </Typography>
          </Box>

          <Box mt="20px">
              <Box display={"flex"} alignItems={"center"} >
                  <TextField variant='outlined' fullWidth />
                  <AddTaskTwoTone sx={{ ml: "10px", width:"30px" , height:"30px"}} />
              </Box>
              <Box mt="20px">
                  <TextField
                      sx={{ height: "100px", width: "100%" }}
                      placeholder='Presenting Complaint' />
              </Box>
          </Box>

          <Box>
              <Typography variant="h4">
                  Initial Complaint
              </Typography>
              <Box mt="20px">
                  <TextField
                      sx={{ height: "100px", width: "100%" }}
                      placeholder='Presenting Complaint' />
              </Box>
          </Box>
      </Box>
  )
}
