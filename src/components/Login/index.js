import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import './style.scss';
import Field from 'src/components/InputField';

import {
  changeInputField,
  submitLogin,
  handleIsRedirect,
  handleIsSubmitError,
  // getUserProfile,
} from 'src/actions/user';

export default function Login() {
  const {
    userEmail,
    userPassword,
    isLoading,
    errorMessage,
    submitError,
    isLogged,
  } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
    dispatch(handleIsSubmitError());
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate('/characters');
    }
  }, [isLogged]);

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
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10rem',
            padding: '1rem',
            gap: '2rem',
            backgroundColor: 'primary.main',
            opacity: [0.7, 0.7, 0.7],
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(submitLogin());
            // dispatch(getUserProfile());
          }}
        >
          {isLoading && <CircularProgress color="secondary" />}

          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
          <Field
            required
            id="outlined-required"
            label="E-mail"
            name="userEmail"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userEmail}
          />
          <Field
            required
            id="outlined-required"
            label="Mot de passe"
            type="password"
            name="userPassword"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userPassword}
          />
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            sx={{
              width: '15rem',
            }}
          >Se connecter
          </Button>
          <Link to="/register">
            <Button
              color="secondary"
              variant="contained"
              type="button"
              sx={{
                width: '15rem',
              }}
            >
              Créer compte
            </Button>
          </Link>
        </Box>
      </Container>
    </>

  );
}
