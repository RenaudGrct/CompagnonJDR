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


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleIsRedirect,
} from 'src/actions/user';

import logo from 'src/assets/images/drakeide.jpg';
import characterList from 'src/assets/D&D/characterList';

export default function CharacterManagement() {
  const {
    isSuccess,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
  }, []);

  return (

    <Box sx={{ transform: 'scale(0.70)' }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem',
      }}
      >
        {isSuccess && <Alert severity="success">Votre Profil a bien été mis a jour !</Alert>}
        <IconButton
          sx={{ transform: 'scale(3)' }}
          color="secondary"
          aria-label="delete"
          size="large"
        >
          <AddIcon fontSize="inherit" />

        </IconButton>
        <Card sx={{
          maxWidth: 200,
          // margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        >

          <CardMedia
            component="img"
            height="140"
            image={logo}
            alt="green iguana"
          />
          <CardContent>
            <Typography align="center" gutterBottom variant="h5" component="div">
              Morad
            </Typography>
            <Typography align="center" gutterBottom variant="h7" component="div">
              Guerrier Drakéide
            </Typography>
            <Typography align="center" gutterBottom variant="h7" component="div">
              Niveau 6
            </Typography>
            <Box sx={{
              mt: '0.5rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: '1.5rem',
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

        <Card sx={{
          maxWidth: 200,
          // margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        >

          <CardMedia
            component="img"
            height="140"
            image={logo}
            alt="green iguana"
          />
          <CardContent>
            <Typography align="center" gutterBottom variant="h5" component="div">
              Morad
            </Typography>
            <Typography align="center" gutterBottom variant="h7" component="div">
              Guerrier Drakéide
            </Typography>
            <Typography align="center" gutterBottom variant="h7" component="div">
              Niveau 6
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              mt: '1rem',
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
        
      </Box>
    </Box>
  );
}
