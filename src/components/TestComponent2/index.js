import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import characterList from 'src/assets/D&D/characterList';
import logo from 'src/assets/images/drakeide.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CharacterManagement() {
  return (
    <Box sx={{ flexGrow: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center' }} container spacing={2}>

        <Grid item xs={7} md={3}>
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

          <Grid sx={{ transform: 'scale(0.5)' }} item xs={7} md={3}>
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
  // </Box>
  );
}
