import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatar from 'src/assets/images/elfe.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { NavLink } from 'react-router-dom';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CharacterDetails() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Container
      sx={{
        mt: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem',
      }}
      maxWidth="lg"
    >
      <Stack direction="row" spacing={2}>

        <Avatar
          alt="User Avatar"
          src={avatar}
          sx={{ width: 100, height: 100 }}
        />
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h4">
            Morad
          </Typography>
          <Typography variant="h5">
            Nain Paladin
          </Typography>
          <Typography variant="h5">       Niveau 7
          </Typography>
        </Box>

      </Stack>
      <Grid sx={{ justifyContent: 'center' }} container spacing={{ xs: 1, md: 2 }} columns={{ xs: 36, sm: 24, md: 24 }}>

        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Force
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              12
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Dextérité
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              8
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Intelligence
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              9
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Sagesse
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              3
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Charisme
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              18
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Constitution
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              12
            </Typography>
          </Item>
        </Grid>

      </Grid>
      <Grid sx={{ justifyContent: 'center' }} container spacing={{ xs: 1, md: 2 }} columns={{ xs: 30, sm: 24, md: 12 }}>

        <Grid item xs={12} sm={7} md={4}>
          <NavLink to="/character/proficiencies">
            <Item sx={{ background: 'black', padding: '0.1rem' }}>
              <TabContext value={value}>
                <TabList
                  centered
                  onChange={handleChange}
                >

                  <Tab sx={{ color: 'white', fontWeight: 'bold' }} label="Aptitudes" />

                </TabList>
              </TabContext>

            </Item>
          </NavLink>

        </Grid>

        <Grid item xs={12} sm={7} md={4}>
          <NavLink to="/character/equipment">
            <Item sx={{ background: 'black', padding: '0.1rem' }}>
              <TabContext value={value}>
                <TabList
                  centered
                  onChange={handleChange}
                >
                  <Tab sx={{ color: 'white', fontWeight: 'bold' }} label="Équipement" />

                </TabList>
              </TabContext>

            </Item>
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={7} md={4}>
          <NavLink to="/character/history">
            <Item sx={{ background: 'black', padding: '0.1rem' }}>
              <TabContext value={value}>
                <TabList
                  centered
                  onChange={handleChange}
                >

                  <Tab sx={{ color: 'white', fontWeight: 'bold' }} label="historique" />

                </TabList>
              </TabContext>

            </Item>
          </NavLink>
        </Grid>

      </Grid>

    </Container>

  );
}
