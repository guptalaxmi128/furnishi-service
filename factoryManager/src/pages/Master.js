import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';
import {
  Box,
  Card,
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
  Tab,
  Tabs,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Source from '../components/Master/Source';
import ArchitectDesignerCordinator from '../components/Master/Architect.Designer.Cordinator';
import Product from '../components/Master/Product';
import CordinatorType from '../components/Master/CordinatorType';
import Cordinator from '../components/Master/Cordinator';
import FactoryInfo from '../components/Master/FactoryInfo';
import StatusAction from '../components/Master/StatusAction';
import Status from '../components/Master/Status';
import SnagIssue from '../components/Master/SnagIssue';
import SnagSolution from '../components/Master/SnagSolution';
import SnagAction from '../components/Master/SnagAction';
import SnagCost from '../components/Master/SnagCost';
import Location from '../components/Master/Location';
import WorkType from '../components/Master/WorkType';
import Carcass from '../components/Master/Carcass';
import Shutter from '../components/Master/Shutter';
import SalesPerson from '../components/Master/SalesPerson';
import Designer from '../components/Master/Designer';
import SiteSurveyor from '../components/Master/SiteSurveyor';
import Planner from '../components/Master/Planner';
import FactoryEngineer from '../components/Master/FactoryEngineer';
import Panel from '../components/Master/Panel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Master = () => {
  const products = useSelector((state) => state.product.products);
  const sources = useSelector((state) => state.source.sources);
  const cordinatorTypes = useSelector((state) => state.cordinatorType.cordinatorTypes);
  const cordinators = useSelector((state) => state.cordinator.cordinators);
  const factoryInfos = useSelector((state) => state.factoryInfo.factoryInfos);
  const statusActions = useSelector((state) => state.statusAction.statusActions);
  const statuses = useSelector((state) => state.status.statuses);
  const snagIssues = useSelector((state) => state.snagIssue.snagIssues);
  const snagSolutions = useSelector((state) => state.snagSolution.snagSolutions);
  const snagActions = useSelector((state) => state.snagAction.snagActions);
  const snagCosts = useSelector((state) => state.snagCost.snagCosts);
  const locations = useSelector((state) => state.location.locations);
  const workTypes = useSelector((state) => state.workType.workTypes);
  const carcasses = useSelector((state) => state.carcass.carcasses);
  const shutters = useSelector((state) => state.shutter.shutters);
  const salesPersons = useSelector((state) => state.salesPerson.salesPersons);
  const designers = useSelector((state) => state.designer.designers);
  const siteSurveyors = useSelector((state) => state.siteSurveyor.siteSurveyors);
  const planners = useSelector((state) => state.planner.planners);
  const factoryEngineers = useSelector((state) => state.factoryEngineer.factoryEngineers);
  const panels = useSelector((state) => state.panel.panels);

  const [headTab, setHeadTab] = useState(0);
  const [subTab, setSubTab] = useState(0);

  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
  };

  // const handleSubtabChange = (event, newValue) => {
  //   setSubTab(newValue);
  // };

  // const handleChange = ({ currentTarget: input }) => {
  //   setRateMasterData({ ...rateMasterData, [input.name]: input.value });
  //   console.log(rateMasterData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <Page title="Master">
        {/* <Container> */}
          {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Master
            </Typography>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button>
          </Stack> */}
          <Card 
          sx={{ paddingLeft: 1,paddingRight:1 }}
          >
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={headTab}
                  onChange={handleHeadTabChange}
                  variant="scrollable"
                  aria-label="basic tabs example"
                  TabIndicatorProps={{
                  style: { backgroundColor: "#284F49" }
                  }}
                >
                  <Tab label=<Typography variant="h6" style={{ fontSize:12 ,color:"#284F49"}} > Source</Typography> {...a11yProps(0)}/>
                  <Tab label= <Typography variant="h6" style={{ fontSize:12,color:"#284F49"}}>Cordinator Type</Typography> {...a11yProps(1)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Cordinator</Typography> {...a11yProps(2)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Product</Typography> {...a11yProps(3)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Factory Info</Typography> {...a11yProps(4)} />
                  <Tab label= <Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Status/Action</Typography> {...a11yProps(5)} />
                  <Tab label= <Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Status</Typography> {...a11yProps(6)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Snag Issue</Typography> {...a11yProps(7)} />
                  <Tab label= <Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Snag Solution</Typography>{...a11yProps(8)} />
                  <Tab label= <Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Snag Action</Typography>{...a11yProps(9)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Snag Cost</Typography> {...a11yProps(10)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Location</Typography> {...a11yProps(11)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Carcass</Typography>{...a11yProps(12)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Shutter</Typography> {...a11yProps(13)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Sales Person</Typography> {...a11yProps(14)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Designer</Typography> {...a11yProps(15)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Planner</Typography>{...a11yProps(16)} />
                  <Tab label= <Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Site Surveyor</Typography> {...a11yProps(17)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} >Factory Engineer</Typography> {...a11yProps(18)} />
                  <Tab label=<Typography variant="h6" style={{ fontSize:12,color:"#284F49"}} > Panel</Typography> {...a11yProps(19)} />
                  {/* <Tab label="Work Type" {...a11yProps(12)} /> */}
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <Source sources={sources} />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <CordinatorType cordinatorTypes={cordinatorTypes} />
              </TabPanel>
              <TabPanel value={headTab} index={2}>
                <Cordinator sources={sources} cordinatorTypes={cordinatorTypes} cordinators={cordinators} />
              </TabPanel>
              <TabPanel value={headTab} index={3}>
                <Product products={products} />
              </TabPanel>
              <TabPanel value={headTab} index={4}>
                <FactoryInfo factoryInfos={factoryInfos} />
              </TabPanel>
              <TabPanel value={headTab} index={5}>
                <StatusAction statusActions={statusActions} />
              </TabPanel>
              <TabPanel value={headTab} index={6}>
                <Status statuses={statuses} />
              </TabPanel>
              <TabPanel value={headTab} index={7}>
                <SnagIssue snagIssues={snagIssues} />
              </TabPanel>
              <TabPanel value={headTab} index={8}>
                <SnagSolution snagSolutions={snagSolutions} />
              </TabPanel>
              <TabPanel value={headTab} index={9}>
                <SnagAction snagActions={snagActions} />
              </TabPanel>
              <TabPanel value={headTab} index={10}>
                <SnagCost snagCosts={snagCosts} />
              </TabPanel>
              <TabPanel value={headTab} index={11}>
                <Location locations={locations} />
              </TabPanel>
              {/* <TabPanel value={headTab} index={12}>
                <WorkType workTypes={workTypes} />
              </TabPanel> */}
              <TabPanel value={headTab} index={12}>
                <Carcass carcasses={carcasses} />
              </TabPanel>
              <TabPanel value={headTab} index={13}>
                <Shutter shutters={shutters} />
              </TabPanel>
              <TabPanel value={headTab} index={14}>
                <SalesPerson salesPersons={salesPersons} />
              </TabPanel>
              <TabPanel value={headTab} index={15}>
                <Designer designers={designers} />
              </TabPanel>
              <TabPanel value={headTab} index={16}>
                <Planner planners={planners} />
              </TabPanel>
              <TabPanel value={headTab} index={17}>
                <SiteSurveyor siteSurveyors={siteSurveyors} />
              </TabPanel>
              <TabPanel value={headTab} index={18}>
                <FactoryEngineer factoryEngineers={factoryEngineers} />
              </TabPanel>
              <TabPanel value={headTab} index={19}>
                <Panel panels={panels} />
              </TabPanel>
            </Box>
          </Card>
        {/* </Container> */}
      </Page>
    </>
  );
};

export default Master;
