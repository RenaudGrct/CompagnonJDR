import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';

import {
  handleIsRedirect,
  logAsGuest,
} from 'src/actions/user';

function Homepage() {
  const { isLogged, submitError, errorMessage } = useSelector((state) => state.user);
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
            marginTop: '10rem',
            padding: '1rem',
            gap: '2rem',
            color: 'primary.main',
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],

          }}
        >
          { !isLogged && (
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
          ) }
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
          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
          { !isLogged && (
            <Button
              onClick={() => dispatch(logAsGuest())}
              color="secondary"
              variant="contained"
              type="submit"
              sx={{
                width: '20rem',
              }}
            >
              Se connecter en tant qu'invité
            </Button>
          )}

        </Box>
      </Container>
    </>
  );
}

export default Homepage;
