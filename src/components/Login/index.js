import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './style.scss';
import Field from 'src/components/InputField';
import Header from 'src/components/Header';

import { changeInputField, submitLogin } from 'src/actions/user';

export default function Login() {
  const {
    userEmail,
    userPassword,
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
              dispatch(submitLogin());
            }}
          >

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
            <div>
              <Button
                color="secondary"
                variant="contained"
                type="submit"
              >Se connecter
              </Button>
            </div>
          </Box>
        </Box>

      </Container>
    </>

  );
}
