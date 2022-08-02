import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { NavLink } from 'react-router-dom';

import './characterCreation.scss';

export default function CharacterCreation() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsList = [

    {
      label: 'Nom',
      url: '/name',
    },
    {
      label: 'Race',
      url: '/race',
    },
    {
      label: 'Classe',
      url: '/class',
    },
    {
      label: 'Histoire',
      url: '/background',
    },
    {
      label: 'Stats',
      url: '/stats',
    },
    {
      label: 'Valider',
      url: '/validate',
    },
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList
            centered
            sx={{ color: 'white' }}
            onChange={handleChange}
            aria-label="character creation tabs"
          >

            {tabsList.map((tab) => (

              <NavLink to={`/creation${tab.url}`}>
                <Tab
                  sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                  label={`${tab.label}`}
                />
              </NavLink>

            ))}

          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
