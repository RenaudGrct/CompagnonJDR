import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  handleIsRedirect,
} from 'src/actions/user';

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleIsRedirect());
  }, []);
  return (

    <>
      <CssBaseline />
      <Container
        fixed
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          color="primary"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            marginTop: '10rem',
            padding: '1rem',
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
