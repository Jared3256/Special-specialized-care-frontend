import {
  Box,
  TextField,
  useTheme, useMediaQuery,
  Button, Select,
  MenuItem, ListSubheader,
  InputLabel, FormControl, Alert
} from '@mui/material'
import React, { useState } from 'react'
import Header from '../../../components/components/Header'
import { Formik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { categories } from '../../../data/mockData';
import axios from 'axios';

export default function CommunityUnitRegistration() {

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [county, setcounty] = useState("");
  const [subCounty, setsubCounty] = useState("");
  const [population, setPopulation] = useState("");
  const [name, setName] = useState("");
  const [registraId, setRId] = useState("");

  const [community, setCommunity] = useState({
    registraId: "",
    name: "",
    population: "",
    county: "",
    subCounty:""
  })

  const handleCategoryChange = (event) => {
    setcounty(event.target.value);
    setsubCounty("");
  }

  const handleOptionChange = (event) => {
    setsubCounty(event.target.value);
  
  }

  const copyToCommunity = () => {
    community.county = county;
    community.subCounty = subCounty;
    community.population = population;
    community.name = name;
    community.registraId = registraId;
  }
  const handleSubmitButton = () => {
    
    copyToCommunity();
    axios
      .post("http://localhost:4500/sphcs/community/o/create",community)
      .then(response => console.log(response))
      .catch(error => console.log(error.code))
    
  }
  

  const handleFormSubmit = () => {
    handleSubmitButton();
    console.log(community);
    //  navigate("/info/community_unit");
    };

  return (
    <Box m="20px">
      <Header title="Registration" subtitle="Register or Update Community Unit" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={community}
        validationSchema={checkoutSchema}
      >

        {({
          values, errors, touched, handleSubmit, handleBlur, handleChange
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                }}
            >

              <TextField
                            fullWidth
                            required
                            variant="filled"
                            type="number"
                            label="Registra Id"
                            onBlur={handleBlur}
                onChange={(e) => {
                              setRId(e.target.value)
                            }}
                            value={registraId}
                            size='medium'
                            name="registraId"
                            error={!!touched.registraId && !!errors.registraId}
                            helperText={touched.registraId && errors.registraId}
                            sx={{ gridColumn: "span 2" }}
                          />
              <TextField
                            fullWidth
                            required
                            variant="filled"
                            type="text"
                            label="Name"
                            onBlur={handleBlur}
                onChange={(e) => {
                              setName(e.target.value)
                            }}
                            value={name}
                            size='medium'
                            name="name"
                            error={!!touched.name && !!errors.name}
                            helperText={touched.name && errors.name}
                            sx={{ gridColumn: "span 2" }}
              />

              <FormControl sx={{ gridColumn: "span 4" }}>
                <InputLabel id='demo-controlled-open-select-label'>County</InputLabel>
                <Select
                  onChange={handleCategoryChange}
                variant='filled'
                required
                value={county}
                labelId='demo-controlled-open-select-label'
                
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Object.keys(categories).map((category) => (
                  <MenuItem key={category} value={category}>
                    { category}
                  </MenuItem>
                ))}
              </Select>
              </FormControl>
              
             
              <FormControl sx={{ gridColumn: "span 4" }}>
                <InputLabel id='demo-controlled-open-select-label'>Sub-County</InputLabel>
              <Select
                variant='filled'
                required
                onChange={handleOptionChange}
                defaultValue={""}
                value={subCounty}
                labelId='demo-controlled-open-select-label'
                
              >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {categories[county] ?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              </FormControl>

              <TextField
                            fullWidth
                            required
                            variant="filled"
                            type="number"
                            label="Population"
                            onBlur={handleBlur}
                onChange={(e) => {
                              setPopulation(e.target.value)
                            }}
                            value={population}
                            size='medium'
                            name="population"
                            error={!!touched.population && !!errors.population}
                            helperText={touched.population && errors.population}
                            sx={{ gridColumn: "span 4" }}
                          />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={() => {
                handleSubmitButton();
              }}>
                 Create Community
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

const initialValues = {
    registraId: "",
    name: "",
  population: "",
  subCounty:"",
    county:""
};

const checkoutSchema = yup.object().shape({
  registraId: yup.string().required("id is required"),
  name: yup.string().required("Name is required"),
  population: yup.number().required("Population is required")
});


