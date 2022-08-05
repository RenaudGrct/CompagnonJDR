import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Details from 'src/components/Character/Details';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import CharacterCreation from 'src/components/Character/Creation';

export default function Equipment() {
  return (

    <>
      <CharacterCreation />
      <Details />
      <CssBaseline />
      <Container sx={{ mt: '2rem' }} maxWidth="sm">
        <Box sx={{ bgcolor: '#fefefe', height: '35vh' }}>

          <Typography sx={{ display: 'block' }} variant="h7">
            Vous commencez avec l'équipement suivant,
            en plus de l'équipement accordé par votre historique :

            (a) une cotte de mailles ou (b) une armure de cuir, un arc long et 20 flèches
            (a) une arme de guerre et un bouclier ou (b) deux armes de guerre
            (a) une arbalète légère et 20 carreaux ou (b) deux hachettes
            (a) un sac d'exploration souterraine ou (b) un sac d'explorateur
          </Typography>
        </Box>
      </Container>

    </>
  );
}
