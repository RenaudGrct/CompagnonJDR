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
// import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import characterList from 'src/assets/D&D/characterList';
// import avatar from 'src/assets/images/races/Demi-Elfe.jpg';

import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  return (
    <>
      {isSuccess && <Alert severity="success">Votre Profil a bien été mis a jour !</Alert>}
      <IconButton
        sx={{ transform: 'scale(3)' }}
        color="secondary"
        aria-label="delete"
        size="large"
      />

      <Box sx={{
        flexGrow: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Link to="/creation/name">
          <Button
            color="secondary"
            variant="contained"
            type="button"
            sx={{
              width: '15rem',
              marginTop: '5rem',
            }}
          >
            Créer un Personnage
          </Button>
        </Link>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} container spacing={2}>
          {characterList.map((character) => (

            <Grid sx={{ transform: 'scale(0.6)' }} item xs={7} sm={6} md={3}>
              <Card>

                <CardMedia
                  component="img"
                  src={`${character.avatar}`}
                  alt="green iguana"  
                  height='300px'
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
                      <VisibilityIcon
                        onClick={() => {
                          navigate('/character');
                        }}
                        fontSize="inherit"
                        color="primary"
                      />
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
