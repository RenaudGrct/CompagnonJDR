import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';

import logo from 'src/assets/images/drakeide.jpg';
import characterList from 'src/assets/D&D/characterList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleIsRedirect } from 'src/actions/user';

export default function CharacterManagement() {
  const {
    isSuccess,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
  }, []);

  return (
    <>
      {isSuccess && <Alert severity="success">Votre Profil a bien été mis a jour !</Alert>}
      <IconButton
        sx={{ transform: 'scale(3)' }}
        color="secondary"
        aria-label="delete"
        size="large"
      />

      <Box sx={{ flexGrow: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} container spacing={2}>

          <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={7} md={3}>
            <IconButton
              sx={{ transform: 'scale(3)' }}
              color="secondary"
              aria-label="delete"
              size="large"
            >
              <AddIcon fontSize="inherit" />

            </IconButton>

          </Grid>
          {characterList.map((character) => (

            <Grid sx={{ transform: 'scale(0.6)' }} item xs={7} md={3}>
              <Card>

                <CardMedia
                  component="img"
                  image={logo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography align="center" gutterBottom variant="h4" component="div">
                    {character.name}
                  </Typography>
                  <Typography color={character.class.color} align="center" gutterBottom variant="h5" component="div">
                    {character.class.name}
                  </Typography>
                  <Typography color={character.race.color} align="center" gutterBottom variant="h5" component="div">
                    {character.race.name}
                  </Typography>
                  <Typography align="center" gutterBottom variant="h5" component="div">
                    {character.level}
                  </Typography>
                  <Box sx={{
                    mt: '0.5rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: '1rem',
                  }}
                  >
                    <IconButton>
                      <VisibilityIcon fontSize="inherit" color="primary" />
                    </IconButton>
                    <IconButton>
                      <ModeEditIcon fontSize="inherit" color="primary" />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverIcon fontSize="inherit" color="primary" />
                    </IconButton>
                  </Box>
                </CardContent>

              </Card>

            </Grid>

          ))}
        </Grid>
      </Box>
    </>
  );
}
