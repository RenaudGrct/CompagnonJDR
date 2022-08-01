import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CharacterDetails from 'src/components/Character';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

export default function CharacterProficiencies() {
  return (

    <><CharacterDetails />
      <CssBaseline />
      <Container sx={{ mt: '2rem' }} maxWidth="sm">
        <Box sx={{ bgcolor: '#fefefe', height: '35vh' }}>

          <Typography sx={{ display: 'block' }} variant="h7">
            Je suis les aptitudes du personnage de Morad
          </Typography>
        </Box>
      </Container>

    </>
  );
}
