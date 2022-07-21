import { NavLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



function Homepage() {
  return (
    <>
    <CssBaseline />
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#cfe8fc',
          height: '80vh',
          gap: '2rem',

        }}
      >
          <NavLink to="/login">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width:'20rem',
              }}
            >
              Se connecter
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width:'20rem',
              }}
            >
              Créer un compte
            </Button>
          </NavLink>
          <NavLink to="/register">
          <Button
            variant="contained"
            type="submit"
            sx={{
              width:'20rem',
            }}
          >
            Se connecter en tant qu'invité
          </Button>
          </NavLink>  

        </Box>
    </Container>
  </>
  )
};

export default Homepage;