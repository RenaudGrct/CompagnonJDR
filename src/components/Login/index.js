import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './style.scss';
import Field from '../InputField';

import { changeInputField, submitLogin } from '../../actions/user';

export default function Login() {
  const {
    email,
    password,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

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
              dispatch(submitLogin());
            }}
          >

            <Field
              required
              id="outlined-required"
              label="E-mail"
              name="email"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={email}
            />
            <Field
              required
              id="outlined-required"
              label="Mot de passe"
              type="password"
              name="password"
              onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
              value={password}
            />
            <div>
              <Button
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
