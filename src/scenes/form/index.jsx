import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/components/Header'
import { Formik } from 'formik'
import * as yup from "yup";
import { tokens } from '../../components/components/Theme';

export default function User_Reg_Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [access, setAccess] = useState("");

  const [community, setCommunity] = useState({
    email: "",
    firstName: "",
    lastName: "",
    accessLevel: "",
    contact: "",
    address:""
  })

  const handleFormSubmit = (values) => {
        console.log(values);
  };
  
  const handleAccessChange = (event) => {
    var acc = event.target.value;
    setAccess(acc)
    initialValues.accessLevel = { acc };
    console.log(initialValues.accessLevel)
  }


  return (
      <Box m="20px">
          <Header
              title="CREATE USER"
              subtitle="Create a New User Profile" 
          />

          <Formik
           onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                  <form onSubmit={handleSubmit}>
                      <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                          }}>
                          
                          {/* First name field */}
                          <TextField
                            fullWidth
                            required
                            variant="filled"
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            size='medium'
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2" }}
                          />
                          
                          {/* Last name field */}
                          <TextField
                            fullWidth
                            required
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            size='medium'
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2" }}
                          />
                          
                          {/* Email Field */}
                          <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                          />

              
                          
              {/* Accesss Level Field */}
              
              <FormControl sx={{ gridColumn: "span 4" }} required>
                <InputLabel id='acess-level'>Access Level</InputLabel>
                <Select
                  value={access}
                  onChange={handleAccessChange}
                  variant='filled'>
                  <MenuItem value="">
                    <Typography variant='label'>none</Typography>
                  </MenuItem>
                  <MenuItem value="admin 3">Admin III</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="mdt">MDT</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
                          
                          {/* Contact Number Field */}
                          <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{ gridColumn: "span 4" }}
                          />

                          {/* Address Field */}
                          <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{ gridColumn: "span 4" }}
                          />
                          
                      </Box>
                      <Box display="flex" justifyContent="end" mt="20px">
                          <Button type="submit" color="secondary" variant="contained" >
                              Create new User
                          </Button>
                      </Box>
                  </form>
              )}
              
          </Formik>
      </Box>
  )
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
//   accessLevel: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    accessLevel:"",
    address2: "",
};
