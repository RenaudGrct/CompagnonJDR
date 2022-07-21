import { Link } from 'react-router-dom';
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
          <Link to="/login">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '20rem',
              }}
            >
              Se connecter
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '20rem',
              }}
            >
              Créer un compte
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '20rem',
              }}
            >
              Se connecter en tant qu'invité
            </Button>
          </Link>

        </Box>
      </Container>
    </>
  );
}

export default Homepage;
