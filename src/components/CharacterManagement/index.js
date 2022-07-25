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

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  handleIsRedirect,
} from 'src/actions/user';

import logo from 'src/assets/images/elfe.png';

export default function CharacterManagement() {
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
      <Card sx={{ maxWidth: 345, margin: '2rem' }}>

        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="secondary.main">
            Elfe_du_Royaume
          </Typography>
          <Typography variant="body2" color="secondary.main">
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
              <VisibilityIcon fontSize="inherit" />
            </IconButton>
            <IconButton>
              <ModeEditIcon fontSize="inherit" />
            </IconButton>
            <IconButton>
              <DeleteForeverIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </CardContent>

      </Card>
      <Button
        color="secondary"
        variant="contained"
        type="submit"
      >Créer un personnage
      </Button>
    </Box>
  );
}
