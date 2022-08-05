import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch } from 'react-redux';

import avatar from 'src/assets/images/Demi-Orc.jpg';

import { getCharacter } from 'src/actions/characters';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MyCharacterDetails() {
  const {
    storedCharacterId,
  } = useSelector((state) => state.characters.character);

  const {
    selectedCharacterName,
    selectedCharacterClass,
    selectedCharacterRace,
    proficiencies,
    features,
    langue,
    abilityRace,
    selectedCharacterBackground,
    abilityBackground,
    abilityBackgroundDescription,
    selectedCharacterSkills,
    selectedStrenght,
    selectedDexterity,
    selectedConstitution,
    selectedWisdom,
    selectedIntelligence,
    selectedCharisma,
  } = useSelector((state) => state.characters.character.selectedCharacter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter());
  }, [storedCharacterId]);

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
            { selectedCharacterName }
          </Typography>
          <Typography variant="h5">
            { selectedCharacterRace }
          </Typography>
          <Typography variant="h5">
            { selectedCharacterClass}
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
              {selectedStrenght}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Dexterité
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {selectedDexterity}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Intelligence
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {selectedIntelligence}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Sagesse
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {selectedWisdom}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Charisme
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {selectedCharisma}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{ padding: '0.25rem' }}>
            <Typography variant="h7">
              Constitution
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {selectedConstitution}
            </Typography>
          </Item>
        </Grid>

      </Grid>
      <Stack sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'space-around' }} container spacing={{ xs: 1, md: 2 }} columns={{ xs: 36, sm: 24, md: 24 }}>
        <Item>Aptitudes de Race</Item>
        {/* {abilityRace.map((abilityR) => (
          <Paper elevation={3}>
            {abilityR.description}
          </Paper>
        ))} */}
        <Item>Aptitude de Classe</Item>
        <Item>Historique</Item>
      </Stack>

    </Container>

  );
}
