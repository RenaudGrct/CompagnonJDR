import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Field from 'src/components/InputField';
import Header from 'src/components/Header';

import { changeInputField, submitRegister, toggleIsReadOnly } from 'src/actions/user';

export default function TestComponent() {
  const {
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
    isReadOnly,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
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
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > :not(style)': { m: '1rem', width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(submitRegister());
            }}
          >
            {isReadOnly ? (
              <TextField
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
                variant="contained"
                type="button"
                onClick={() => dispatch(toggleIsReadOnly())}
              >
                Modifier
              </Button>
            ) : (
              <Button
                variant="contained"
                type="button"
                onClick={() => dispatch(toggleIsReadOnly())}
              >
                Enregistrer
              </Button>
            )}

            {isReadOnly ? null : (
              <Button
                variant="contained"
                type="button"
                onClick={() => dispatch(toggleIsReadOnly())}
              >
                Annuler
              </Button>
            )}
            <Button
              variant="contained"
              type="button"
            >
              Supprimer
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
