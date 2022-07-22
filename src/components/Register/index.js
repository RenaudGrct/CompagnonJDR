import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Field from 'src/components/InputField';
import Header from 'src/components/Header';

import { changeInputField, submitRegister } from 'src/actions/user';

export default function Register() {
  const {
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
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
            color: 'primary.main',
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > :not(style)': { m: '1rem', width: '30ch' },
              color: 'primary.main',
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(submitRegister());
            }}
          >
            <Field
              required
              id="outlined-required"
              label="Nom d'utilisateur"
              name="userName"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={userName}
            />
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
            <Field
              required
              id="outlined-required"
              label="Confirmation mot de passe"
              type="password"
              name="userConfirmPassword"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={userConfirmPassword}
            />
            <Button
              color="secondary"
              variant="contained"
              type="submit"
            >
              Créer compte
            </Button>

          </Box>
        </Box>
      </Container>
    </>
  );
}
