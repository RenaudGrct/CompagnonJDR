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
          color="primary"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#cfe8fc',
            height: '80vh',
            gap: '2rem',
            color: 'primary.main',
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],

          }}
        >
          <Link to="/login">
            <Button
              color="secondary"
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
              color="secondary"
              variant="contained"
              type="submit"
              sx={{
                width: '20rem',
              }}
            >
              Créer compte
            </Button>
          </Link>
          <Link to="/register">
            <Button
              color="secondary"
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
