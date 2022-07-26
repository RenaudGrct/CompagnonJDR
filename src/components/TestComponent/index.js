import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
// import * as React from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
import Field from 'src/components/InputField';
import ProfileDeleteAlert from 'src/components/ProfileDeleteAlert';

import {
  changeInputField,
  submitRegister,
  toggleIsReadOnly,
  // deleteUserProfile,
  updateUserProfile,
} from 'src/actions/user';

export default function TestComponent() {
  const {
    // userId,
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

  // const handleUserDeletion = () => {
  //   dispatch(deleteUserProfile());
  //   console.log(`je delete ${userId}`);
  // };

  // const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (

    <>

      <CssBaseline />
      <Container fixed>
        {isLoading && <CircularProgress />}
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
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(submitRegister());
          }}
        >
          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
          {isReadOnly ? (
            <TextField
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
              sx={{ input: { color: 'primary', backgroundColor: 'primary.contrastText' } }}
              color="secondary"
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
              sx={{
                width: '15rem',
              }}
              color="secondary"
              variant="contained"
              type="button"
              onClick={() => dispatch(toggleIsReadOnly())}
            >
              Modifier
            </Button>
          ) : (
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

          {isReadOnly ? null : (
            <Button
              sx={{
                width: '15rem',
              }}
              color="secondary"
              variant="contained"
              type="button"
              onClick={() => dispatch(toggleIsReadOnly())}
            >
              Annuler
            </Button>
          )}

          {isReadOnly ? null : (

            // <div>
            //   <Button
            //     sx={{
            //       width: '15rem',
            //     }}
            //     variant="contained"
            //     type="button"
            //     color="error"
            //     onClick={() => handleClickOpen()}
            //   >

            //     Supprimer le compte
            //   </Button>
            //   <Dialog
            //     open={open}
            //     TransitionComponent={Transition}
            //     keepMounted
            //     onClose={handleClose}
            //     aria-describedby="alert-dialog-slide-description"
            //   >
            //     <DialogTitle>Etes-vous sûr de vouloir supprimer le compte ?</DialogTitle>
            //     <DialogContent>
            //       <DialogContentText id="alert-dialog-slide-description">
            //         Cette action est définitive et vous perdrez tous vos personnages.
            //       </DialogContentText>
            //     </DialogContent>
            //     <DialogActions>
            //       <Button onClick={handleClose}>Annuler</Button>
            //       <Button onClick={handleUserDeletion}>SUPPRIMER COMPTE</Button>
            //     </DialogActions>
            //   </Dialog>
            // </div>

<ProfileDeleteAlert />

          // <Button
          //   sx={{
          //     width: '15rem',
          //   }}
          //   variant="contained"
          //   type="button"
          //   color="error"
          //   onClick={() => handleUserDeletion()}
          // >
          //   Supprimer le compte
          // </Button>
          )}

        </Box>
      </Container>
    </>
  );
}
