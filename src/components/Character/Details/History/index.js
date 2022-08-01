import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Details from 'src/components/Character/Details';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import CharacterCreation from 'src/components/Character/Creation';

export default function History() {
  return (

    <>
      <CharacterCreation />
      <Details />
      <CssBaseline />
      <Container sx={{ mt: '2rem' }} maxWidth="sm">
        <Box sx={{ bgcolor: '#fefefe', height: '35vh' }}>

          <Typography sx={{ display: 'block' }} variant="h7">
            Je suis l'historique du personnage de Morad
          </Typography>
        </Box>
      </Container>

    </>
  );
}
