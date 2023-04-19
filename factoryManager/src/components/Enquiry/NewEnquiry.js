import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Grid,
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

import { useDispatch, useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import EnquiryFMTable from './EnquiryFMTable'
import { addEnquiry } from '../../actions/enquiry/enquiry';
import { addInvoice } from '../../actions/invoice/invoice';

const NewEnquiry = (props) => {
  const { cordinators, products, statusActions, statuses, carcasses, shutters, enquiryCosting } = props;

  const costing = enquiryCosting[0];

  const [enquiry, setEnquiry] = useState({
    targetDate: null,
    sitePincode: '',
    product: '',
    area: '',
    currentStatus: '',
    carcass: '',
    shutter: '',
    workStartTime: null,
    workEndTime: null,
    dispatch: null,
    estimate: '',
    action: '',
    deepClean: '',
    liveStreaming: '',
    installationRecording: '',
    amc: '',
    amcData: '',
    enquiryType: '',
  });

  const costingData = {
    installation: 0,
    survey: 0,
    complaint: 0,
    deepClean: 0,
    amc: 0,
    liveStreaming: 0,
    installationRecording: 0,
    total: 0,
  };

  const [costingDataState, setCostingDataState] = useState();

  const [invoice, setInvoice] = useState({
    installationPrice: 0,
    surveyPrice: 0,
    complaintPrice: 0,
    deepCleanPrice: 0,
    amcPrice: 0,
    liveStreamingPrice: 0,
    installationRecordingPrice: 0,
    total: 0,
    area: 0,
    survey: '',
    complaint: '',
    deepClean: '',
    amc: '',
    amcData: 0,
    liveStreaming: '',
    installationRecording: '',
  });

  const changeTrue = true;
  const changeFalse = false;

  const handleChange = ({ currentTarget: input }) => {
    setEnquiry({
      ...enquiry,
      [input.name]: input.value,
    });
    console.log(enquiry);
  };

  const [age, setAge] = React.useState('');

  const handleStatusChange = (event) => {
    setEnquiry({
      ...enquiry,
      currentStatus: event.target.value,
    });
    console.log(enquiry);
  };
  const handleActionChange = (event) => {
    setEnquiry({
      ...enquiry,
      action: event.target.value,
    });
    console.log(enquiry);
  };
  const handleCarcassChange = (event) => {
    setEnquiry({
      ...enquiry,
      carcass: event.target.value,
    });
  };
  const handleShutterChange = (event) => {
    setEnquiry({
      ...enquiry,
      shutter: event.target.value,
    });
  };

  const handleProductChange = (event) => {
    const product = products.find((product) => product.name === event.target.value);
    setEnquiry({
      ...enquiry,
      product: product.name,
      productCode: product.productCode,
      productId: product.id,
    });
  };

  const handleDeepCleanChange = (event) => {
    setEnquiry({
      ...enquiry,
      deepClean: event.target.value,
    });
  };
  const handleLiveStreamingChange = (event) => {
    setEnquiry({
      ...enquiry,
      liveStreaming: event.target.value,
    });
  };
  const handleInstallationRecordingChange = (event) => {
    setEnquiry({
      ...enquiry,
      installationRecording: event.target.value,
    });
  };
  const handleAMCChange = (event) => {
    setEnquiry({
      ...enquiry,
      amc: event.target.value,
    });
  };
  const handleEnquiryTypeChange = (event) => {
    setEnquiry({
      ...enquiry,
      enquiryType: event.target.value,
    });
  };

  const getEnquiryType = () => {
    if (enquiry.enquiryType === 'installationEnquiry') {
      return (
        <>
          <TextField
            disabled={enquiry.enquiryType === 'surveyEnquiry'}
            label="Area (Sqft)"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="number"
            name="area"
            value={enquiry.area}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontSize: 12 },
            }}
          />
        </>
      );
    }
    if (enquiry.enquiryType === 'surveyEnquiry' || enquiry.enquiryType === 'complaintEnquiry') {
      return (
        <>
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Product
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.product}
              label="Product"
              onChange={handleProductChange}
            >
              {products.map((product) => (
                <MenuItem value={product.name}>{product.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      );
    }
    return null;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateCosting = () => {
    if (enquiry.enquiryType === 'installationEnquiry') {
      console.log(parseInt(costing.installation, 10));
      console.log(parseInt(enquiry.area, 10));
      const installationCost = parseInt(costing.installation, 10) * parseInt(enquiry.area, 10);
      console.log(installationCost);
      costingData.installation = installationCost;
      console.log(costingData);
    }
    if (enquiry.enquiryType === 'surveyEnquiry') {
      costingData.survey = parseInt(costing.survey, 10);
    }
    if (enquiry.enquiryType === 'complaintEnquiry') {
      costingData.complaint = parseInt(costing.complaint, 10);
    }
    if (enquiry.deepClean === 'Yes') {
      costingData.deepClean = parseInt(costing.deepClean, 10);
    }
    if (enquiry.liveStreaming === 'Yes') {
      costingData.liveStreaming = parseInt(costing.liveStreaming, 10);
    }
    if (enquiry.installationRecording === 'Yes') {
      costingData.installationRecording = parseInt(costing.installationRecording, 10);
    }
    if (enquiry.amc === 'Yes') {
      costingData.amc = parseInt(costing.amc, 10) * parseInt(enquiry.amcData, 10);
    }
  };

  const calculateTotal = () => {
    let totalCost = 0;
    Object.keys(costingData).forEach((key) => {
      totalCost += costingData[key];
    });
    costingData.total = totalCost;
  };

  const returnTotal = () => {
    let totalCost = 0;
    Object.keys(costingData).forEach((key) => {
      totalCost += costingData[key];
    });
    return totalCost;
  };

  const invoiceData = async () => {
    setInvoice({
      ...invoice,
      installationPrice: costing.installation,
      surveyPrice: costing.survey,
      complaintPrice: costing.complaint,
      deepCleanPrice: costing.deepClean,
      amcPrice: costing.amc,
      liveStreamingPrice: costing.liveStreaming,
      installationRecordingPrice: costing.installationRecording,
      area: enquiry.area,

      installation: enquiry.installation,
      deepClean: enquiry.deepClean,
      liveStreaming: enquiry.liveStreaming,
      installationRecording: enquiry.installationRecording,
      amc: enquiry.amc,
      amcData: enquiry.amcData,
      total: costingDataState.total,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(enquiry);
      console.log(costing);
      calculateCosting();
      calculateTotal();
      console.log(costingData);
      dispatch(addEnquiry(enquiry));
      setCostingDataState(costingData);
      const invoiceData = {
        installationPrice: costing.installation,
        surveyPrice: costing.survey,
        complaintPrice: costing.complaint,
        deepCleanPrice: costing.deepClean,
        amcPrice: costing.amc,
        liveStreamingPrice: costing.liveStreaming,
        installationRecordingPrice: costing.installationRecording,
        area: enquiry.area,
        enquiryType: enquiry.enquiryType,
        deepClean: enquiry.deepClean,
        liveStreaming: enquiry.liveStreaming,
        installationRecording: enquiry.installationRecording,
        amc: enquiry.amc,
        amcData: enquiry.amcData,
        product: enquiry.product,
        total: returnTotal(),
      };
      dispatch(addInvoice(invoiceData, navigate));
      setEnquiry({
        targetDate: null,
        sitePincode: '',
        product: '',
        area: '',
        currentStatus: '',
        carcass: '',
        shutter: '',
        workStartTime: null,
        workEndTime: null,
        dispatch: null,
        estimate: '',
        action: '',
        deepClean: '',
        liveStreaming: '',
        installationRecording: '',
        amc: '',
        amcData: '',
        enquiryType: '',
      });
      alert('Enquiry submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(costingDataState);
  console.log(enquiry.targetDate)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <Box sx={{ width: '100%', mr: { md: 1 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
              <DatePicker
                fullWidth
                label="Target Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={enquiry.targetDate}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    targetDate: newValue,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: 12 },
                    }}
                    value={enquiry.targetDate}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <TextField
            fullWidth
            sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            label="Site Pincode"
            name="sitePincode"
            onChange={handleChange}
            required
            value={enquiry.sitePincode}
            variant="outlined"
            InputLabelProps={{
              style: { fontSize: 12 },
            }}
          />
        </Box>
        {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: {md: 1} }}>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.product}
                  label="Product"
                  onChange={handleProductChange}
                >
                  {
                    products.map(product => (
                      <MenuItem value={product.name}>{product.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <TextField
                label="Area (Sqft)"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: {xs: 2, md:0} }}
                type="number"
                name="area"
                value={enquiry.area}
                onChange={handleChange}
              />
            </Box> */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.currentStatus}
              label="Status"
              onChange={handleStatusChange}
            >
              {statuses.map((status) => (
                <MenuItem value={status.status}>{status.status}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Carcass
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.carcass}
              label="Carcass"
              onChange={handleCarcassChange}
            >
              {carcasses.map((carcass) => (
                <MenuItem value={carcass.carcass}>{carcass.carcass}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Shutter
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.shutter}
              label="Shutter"
              onChange={handleShutterChange}
            >
              {shutters.map((shutter) => (
                <MenuItem value={shutter.shutter}>{shutter.shutter}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
              <DatePicker
                fullWidth
                label="Dispatch"
                openTo="year"
                views={['year', 'month', 'day']}
                value={enquiry.dispatch}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    dispatch: newValue,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: 12 },
                    }}
                    value={enquiry.dispatch}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
              <TimePicker
                label="Work Start Time"
                value={enquiry.workStartTime}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    workStartTime: newValue,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: 12 },
                    }}
                    value={enquiry.workStartTime}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
              <TimePicker
                label="Work End Time"
                value={enquiry.workEndTime}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    workEndTime: newValue,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: 12 },
                    }}
                    value={enquiry.workEndTime}
                  />
                )}
              />
            </Box>
          </LocalizationProvider>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Estimate"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="estimate"
            value={enquiry.estimate}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontSize: 12 },
            }}
          />
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Action
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.action}
              label="Action"
              onChange={handleActionChange}
            >
              {statusActions.map((status) => (
                <MenuItem value={status.statusAction}>{status.statusAction}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Deep Clean
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.deepClean}
              label="Deep Clean"
              onChange={handleDeepCleanChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Live Streaming
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.liveStreaming}
              label="Live Streaming"
              onChange={handleLiveStreamingChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Installation Recording
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.installationRecording}
              label="Installation Recording"
              onChange={handleInstallationRecordingChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              AMC
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.amc}
              label="amc"
              onChange={handleAMCChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
              Enquiry Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.enquiryType}
              label="Enquiry Type"
              onChange={handleEnquiryTypeChange}
            >
              <MenuItem value="installationEnquiry">Installation Enquiry</MenuItem>
              <MenuItem value="surveyEnquiry">Survey Enquiry</MenuItem>
              <MenuItem value="complaintEnquiry">Complaint Enquiry</MenuItem>
            </Select>
          </FormControl>
          {getEnquiryType() || <Box sx={{ width: '100%', ml: { md: 1 } }} />}
        </Box>
        {enquiry.amc === 'Yes' ? (
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="AMC Data"
              variant="outlined"
              disabled={enquiry.amc === 'No'}
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="text"
              name="amcData"
              value={enquiry.amcData}
              onChange={handleChange}
              InputLabelProps={{
                style: { fontSize: 12 },
              }}
            />
            <Box sx={{ width: '100%', ml: { md: 1 } }} />
          </Box>
        ) : null}
        <Box>
          <Button type="submit" sx={{ fontSize: 12, backgroundColor: "#284F49 !important", color:"#fff" }}>
            Submit
          </Button>
        </Box>
      </form>
      {/* <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom component="div">
          Enquiries
        </Typography>
        {costingDataState.map((item) => {
          return <Box sx={{ mt: 2 }}>{item}</Box>;
        })}
      </Box> */}
    </>
  );
};

export default NewEnquiry;
