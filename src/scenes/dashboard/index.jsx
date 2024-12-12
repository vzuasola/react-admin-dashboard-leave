import * as React from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Request from "../request";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="0 20px 0">
      {/* Dashboard Menu */}
      <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
          ".css-gupip1-MuiButtonBase-root-MuiTab-root.Mui-selected": {
            color: "#ffffff",
          },

          ".css-1pnbnb3-MuiTabs-indicator": {
            backgroundColor: "#726ee0"
          },

          ".css-8je8zh-MuiTouchRipple-root": {
            borderBottom: "transparent"
          },
        }}>
          <Tab label="Leave Management" {...a11yProps(0)} />
          <Tab label="Leave Request" {...a11yProps(1)} />
          <Tab label="Leave Types" {...a11yProps(2)} />
          <Tab label="Leave Calendar" {...a11yProps(3)} />
          <Tab label="Leave Report" {...a11yProps(4)} />
          <Tab label="Leave Approver" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" />
        </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          CONTENT HERE ...
        </Box>
      </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Request m="10px" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Five
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Six
      </CustomTabPanel>
    </Box>
    </Box>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default Dashboard;
