import { useDispatch, useSelector } from 'react-redux';
import { changeNameInput } from 'src/actions/characters';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
import Avatar from 'src/components/CharacterCreation/Name/Avatar';

import CharacterCreation from 'src/components/CharacterCreation';

export default function Name() {
  const dispatch = useDispatch();
  const { characterName } = useSelector((state) => state.characters);

  return (

    <>
      <CharacterCreation />

      <Container
        maxWidth="sm"
        sx={{
          height: '75vh', display: 'flex', gap: '3rem', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
      >

        <Typography
          variant="h4"
          color="white"
          gutterBottom
          component="div"
        >
          Choix du Nom
        </Typography>

        <TextField
          required
          label="Nom du personnage"
          name="name"
          value={characterName}
          onChange={(event) => dispatch(changeNameInput(event.target.value))}
          sx={{ input: { color: 'primary', backgroundColor: 'primary.contrastText' } }}
          color="secondary"
        />

        <Typography
          variant="h4"
          color="white"
          gutterBottom
          component="div"
        >

          Choix de l'avatar
        </Typography>

        <Avatar />

      </Container>

    </>
  );
}
