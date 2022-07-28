import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import characterList from 'src/assets/D&D/characterList';
import logo from 'src/assets/images/drakeide.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item>

            <Card>

              <CardMedia
                component="img"
                height="140"
                image={logo}
                alt="green iguana"
              /> <CardContent>
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
          </Item>

        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
