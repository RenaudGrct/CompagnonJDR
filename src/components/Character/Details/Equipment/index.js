import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Details from 'src/components/Character/Details';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

export default function Equipment() {
  return (

    <><Details />
      <CssBaseline />
      <Container sx={{ mt: '2rem' }} maxWidth="sm">
        <Box sx={{ bgcolor: '#fefefe', height: '35vh' }}>

          <Typography sx={{ display: 'block' }} variant="h7">
            Je suis l'équipement du personnage de Morad
          </Typography>
        </Box>
      </Container>

    </>
  );
}
