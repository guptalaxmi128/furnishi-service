import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import {
  Box,
  Card,
  Grid,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

// import { useDispatch, useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CordinatorMaster = () => {
    // const user = JSON.parse(localStorage.getItem('profile')).data;
    // const products = useSelector((state) => state.product.products);
    // console.log('products', products);
  
    const [cordinator, setCordinator] = useState({
    sourceCode:'',
    firmName:'',
    firmAddress:'',
    cordinatorType:'',
    cordinatorName:'',
    cordinatorNumber:'',
    emailId:'',
    });
  
    const handleChange = ({ currentTarget: input }) => {
        setCordinator({
        ...cordinator,
        [input.name]: input.value,
      });
      console.log(cordinator);
    };
  
    const [age, setAge] = React.useState('');
  
    const handleSourceCodeChange = (event) => {
        setCordinator({
        ...cordinator,
        sCode: event.target.value,
      });
      console.log(cordinator);
    };
    const handleSourceChange = (event) => {
        setCordinator({
        ...cordinator,
        source: event.target.value,
      });
      console.log(cordinator);
    };
    const handleFNameChange = (event) => {
      setCordinator({
        ...cordinator,
        fName: event.target.value,
      });
      console.log(cordinator);
    };
    const handleFAddressChange = (event) => {
      setCordinator({
        ...cordinator,
        fAddress: event.target.value,
      });
      console.log(cordinator);
    };
    const handleCTypeChange = (event) => {
      setCordinator({
        ...cordinator,
        cType: event.target.value,
      });
      console.log(cordinator);
    };
  
    // const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(cordinator);
        // dispatch(addcordinator(cordinator));
        setCordinator({
          sourceCode:'',
          source:'',
          firmName:'',
          firmAddress:'',
          cordinatorType:'',
          cordinatorName:'',
          cordinatorNumber:'',
          emailId:'',
        });
        alert("cordinator submitted successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            {/* <Box mt={2}>
            <Typography variant="h6">Cordinator Master</Typography>
          </Box> */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Source Code</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.sourceCode}
                label="Source Code"
                onChange={handleSourceCodeChange}
              >
                <MenuItem value={'Site Survey'}>Site Survey</MenuItem>
                <MenuItem value={'Kitchen Installation'}>Kitchen Installation</MenuItem>
                <MenuItem value={'Wardrobe Installation'}>Wardrobe Installation</MenuItem>
                <MenuItem value={'Product Service'}>Product Service</MenuItem>
              </Select>
            </FormControl> 
            <FormControl fullWidth sx={{ ml: { md: 1 },  }}>
              <InputLabel id="demo-simple-select-label">Source</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.source}
                label="Source"
                onChange={handleSourceChange}
              >
                <MenuItem value={'Site Survey'}>Site Survey</MenuItem>
                <MenuItem value={'Kitchen Installation'}>Kitchen Installation</MenuItem>
                <MenuItem value={'Wardrobe Installation'}>Wardrobe Installation</MenuItem>
                <MenuItem value={'Product Service'}>Product Service</MenuItem>
              </Select>
            </FormControl> 
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Firm Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.firmName}
                label="Firm Name"
                onChange={handleFNameChange}
              >
                <MenuItem value={'Site Survey'}>Site Survey</MenuItem>
                <MenuItem value={'Kitchen Installation'}>Kitchen Installation</MenuItem>
                <MenuItem value={'Wardrobe Installation'}>Wardrobe Installation</MenuItem>
                <MenuItem value={'Product Service'}>Product Service</MenuItem>
              </Select>
            </FormControl> 
            <FormControl fullWidth sx={{ ml: { md: 1 }, }}>
              <InputLabel id="demo-simple-select-label">Firm Address</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.firmAddress}
                label="Firm Address"
                onChange={handleFAddressChange}
              >
                <MenuItem value={'Site Survey'}>Site Survey</MenuItem>
                <MenuItem value={'Kitchen Installation'}>Kitchen Installation</MenuItem>
                <MenuItem value={'Wardrobe Installation'}>Wardrobe Installation</MenuItem>
                <MenuItem value={'Product Service'}>Product Service</MenuItem>
              </Select>
            </FormControl> 
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Cordinator Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.cordinatorType}
                label="Cordinator Type"
                onChange={handleCTypeChange}
              >
                <MenuItem value={'Site Survey'}>Site Survey</MenuItem>
                <MenuItem value={'Kitchen Installation'}>Kitchen Installation</MenuItem>
                <MenuItem value={'Wardrobe Installation'}>Wardrobe Installation</MenuItem>
                <MenuItem value={'Product Service'}>Product Service</MenuItem>
              </Select>
            </FormControl> 
            <TextField
              label="Cordinator Name"
              variant="outlined"
              fullWidth
              type="text"
              name="cName"
              value={cordinator.cordinatoName}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="Cordinator Number"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="number"
              name="cNo"
              value={cordinator.cordinatorNumber}
              onChange={handleChange}
            />
            <TextField
              label="Email Id"
              variant="outlined"
              fullWidth
              type="email"
              name="emailId"
              value={cordinator.emailId}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </>
    );
  };
  
  export default CordinatorMaster;