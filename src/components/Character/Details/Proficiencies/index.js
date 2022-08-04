import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CharacterDetails from 'src/components/Character/Details';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import CharacterCreation from 'src/components/Character/Creation';

export default function CharacterProficiencies() {
  return (

    <>
      <CharacterCreation />
      <CharacterDetails />
      <CssBaseline />
      <Container sx={{ mt: '2rem' }} maxWidth="sm">
        <Box sx={{ bgcolor: '#fefefe', height: '35vh' }}>

          <Typography sx={{ display: 'block' }} variant="h7">
            Points de vie
            DV : 1d10 par niveau de guerrier
            pv au niveau 1 : 10 + votre modificateur de Constitution
            pv aux niveaux suivants : 1d10 (ou 6) + votre modificateur de Constitution

            Maîtrises
            Armures : toutes les armures, boucliers
            Armes : armes courantes, armes de guerre
            Outils : aucun
            Jets de sauvegarde : Force, Constitution
            Compétences : choisissez deux compétences parmi Acrobaties,
            Athlétisme, Dressage, Histoire, Intimidation, Intuition, Perception et Survie

            É
          </Typography>
        </Box>
      </Container>

    </>
  );
}
