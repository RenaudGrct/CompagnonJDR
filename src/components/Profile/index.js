import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ProfileDeleteAlert from 'src/components/ProfileDeleteAlert';

import Field from 'src/components/InputField';

import {
  changeInputField,
  toggleIsReadOnly,
  toggleIsChangePassword,
  updateUserProfile,
  updateUserPassword,
  handleProfileMenu,
  verifyPassword,
} from 'src/actions/user';

export default function Profile() {
  const {
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
    isReadOnly,
    isChangePassword,
    errorMessage,
    isLoading,
    submitError,
    isLogged,
    isSamePassword,
  } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  async function handleSubmitChangePassword() {
    if (userPassword === userConfirmPassword) {
      await dispatch(updateUserPassword());
    }
    else {
      dispatch(verifyPassword());
    }
  }

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          component="form"
          sx={{
            backgroundColor: 'primary.main',
            opacity: [0.7, 0.7, 0.7],
            marginTop: '5rem',
            padding: '1rem',
            gap: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          {isLoading && <CircularProgress color="secondary" />}

          {submitError && <Alert severity="error">{errorMessage}!</Alert>}

          { isReadOnly && !isChangePassword && (
            <><TextField
              sx={{ input: { color: 'primary', backgroundColor: 'primary.contrastText' } }}
              color="secondary"
              disabled
              id="outlined-disabled"
              label="Nom d'utilisateur"
              name="userName"
              value={userName}
              InputProps={{
                readOnly: true,
              }}
            />
              <TextField
                sx={{ input: { color: 'primary', backgroundColor: 'primary.contrastText' } }}
                color="secondary"
                disabled
                id="outlined-disabled"
                label="Email"
                name="userEmail"
                value={userEmail}
                InputProps={{
                  readOnly: true,
                }}
              />
              <Button
                sx={{
                  width: '15rem',
                }}
                color="secondary"
                variant="contained"
                type="button"
                onClick={() => dispatch(toggleIsReadOnly())}
              >
                Modifier mon identité
              </Button>
              <Button
                sx={{
                  width: '15rem',
                }}
                color="secondary"
                variant="contained"
                type="button"
                onClick={() => dispatch(toggleIsChangePassword())}
              >
                Modifier mon mot de passe
              </Button>
            </>
          )}

          {!isReadOnly && (
          <><Field
            required
            id="outlined-required"
            label="Nom d'utilisateur"
            name="userName"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userName}
          /><Field
            required
            id="outlined-required"
            label="Email"
            name="userEmail"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userEmail}
          />
          </>
          )}
          {isSamePassword && <Alert severity="error">Les mots de passe ne sont pas identiques !</Alert>}
          {isChangePassword && (
          <><Field
            required
            id="outlined-required"
            label="Mot de passe"
            type="password"
            name="userPassword"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userPassword}
          /><Field
            required
            id="outlined-required"
            label="Confirmation mot de passe"
            type="password"
            name="userConfirmPassword"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userConfirmPassword}
          />
          </>
          )}

          { !isReadOnly && (
          <Button
            sx={{
              width: '15rem',
            }}
            color="secondary"
            variant="contained"
            type="button"
            onClick={() => dispatch(updateUserProfile())}
          >
            Enregistrer
          </Button>
          )}
          { isChangePassword && (
          <Button
            sx={{
              width: '15rem',
            }}
            color="secondary"
            variant="contained"
            type="button"
            onClick={() => handleSubmitChangePassword()}
          >
            Enregistrer
          </Button>
          )}

          {(!isReadOnly || isChangePassword) && (
          <>
            <Button
              sx={{
                width: '15rem',
              }}
              color="secondary"
              variant="contained"
              type="button"
              onClick={() => dispatch(handleProfileMenu())}
            >
              Annuler
            </Button>
            <ProfileDeleteAlert />
          </>
          )}
        </Box>
      </Container>
    </>
  );
}
