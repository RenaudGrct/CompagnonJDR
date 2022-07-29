import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleIsRedirect,
} from 'src/actions/user';

import logo from 'src/assets/images/drakeide.jpg';

export default function CharacterManagement() {
  const {
    isSucces,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {isSucces && <Alert severity="success">Votre Profil a bien été mis a jour !</Alert>}
      <Card sx={{ maxWidth: 345, margin: '2rem' }}>

        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Drakéide_du_Royaume
          </Typography>
          <Typography variant="body2">
            force: 11 vitesse: 16 ...
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
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
      <Link to="/creation/name">
        <Button
          color="secondary"
          variant="contained"
          type="submit"
        >Créer un personnage
        </Button>
      </Link>
    </Box>
  );
}
