import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Background from './Background';
import Class from './Class';
import Name from './Name';
import Race from './Race';
import Stats from './Stats';
import Validate from './Validate';
import { NavLink } from 'react-router-dom';

import './characterCreation.scss';

export default function CharacterCreation() {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'secondary.main' }}>
          <TabList
            centered
            fixed
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example">
            <Tab label="Nom" value="0" />
            <Tab label="Race" value="1" />
            <Tab label="Classe" value="2" />
            <Tab label="Histoire" value="3" />
            <Tab label="Stats" value="4" />
            <Tab label="Valider" value="5" />
          </TabList>
        </Box>
        <TabPanel value="0"><Name/></TabPanel>
        <TabPanel value="1"><Race/></TabPanel>
        <TabPanel value="2"><Class/></TabPanel>
        <TabPanel value="3"><Background/></TabPanel>
        <TabPanel value="4"><Stats/></TabPanel>
        <TabPanel value="5"><Validate/></TabPanel>
      </TabContext>
    </Box>
  );
}
