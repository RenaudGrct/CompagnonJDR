import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import Field from 'src/components/InputField';

import {
  changeInputField, submitRegister, toggleIsReadOnly, deleteUserProfile,
} from 'src/actions/user';

export default function TestComponent() {
  const {
    userId,
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
    isReadOnly,
    errorMessage,
    isLoading,
    submitError,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleUserDeletion = () => {
    dispatch(deleteUserProfile());
    console.log(`je delete ${userId}`);
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        {isLoading && <CircularProgress />}
        <Box
          component="form"
          sx={{
            color: 'primary.main',
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            height: '90vh',
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
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(submitRegister());
          }}
        >
          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
          {isReadOnly ? (
            <TextField
              sx={{

                // color: 'primary.main',
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              }}
              disabled
              id="outlined-disabled"
              label="Nom d'utilisateur"
              name="userName"
              value={userName}
              InputProps={{
                readOnly: true,
              }}
            />
          ) : (
            <Field
              required
              id="outlined-required"
              label="Nom d'utilisateur"
              name="userName"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={userName}
            />
          )}
          {isReadOnly ? (
            <TextField
              disabled
              id="outlined-disabled"
              label="Email"
              name="userEmail"
              value={userEmail}
              InputProps={{
                readOnly: true,
              }}
            />
          ) : (
            <Field
              required
              id="outlined-required"
              label="Email"
              name="userEmail"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={userEmail}
            />
          )}
          {isReadOnly ? (
            <TextField
              disabled
              id="filled-disabled"
              label="Mot de passe"
              type="password"
              name="userPassword"
              value={userPassword}
              InputProps={{
                readOnly: true,
              }}
            />
          ) : (
            <Field
              required
              id="outlined-required"
              label="Mot de passe"
              type="password"
              name="userPassword"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={userPassword}
            />
          )}

          {!isReadOnly && (
            <Field
              required
              id="outlined-required"
              label="Confirmation mot de passe"
              type="password"
              name="userConfirmPassword"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={userConfirmPassword}
            />
          )}
          {isReadOnly ? (
            <Button
              color="secondary"
              variant="contained"
              type="button"
              onClick={() => dispatch(toggleIsReadOnly())}
            >
              Modifier
            </Button>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              type="button"
              onClick={() => console.log('je suis le bouton enregistrer')}
            >
              Enregistrer
            </Button>
          )}

          {isReadOnly ? null : (
            <Button
              color="secondary"
              variant="contained"
              type="button"
              onClick={() => dispatch(toggleIsReadOnly())}
            >
              Annuler
            </Button>
          )}

          {isReadOnly ? null : (
            <Button
              variant="contained"
              type="button"
              color="error"
              onClick={() => handleUserDeletion()}
            >
              Supprimer le compte
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
}
