import { useDispatch } from 'react-redux';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import {
  deleteUserProfile,
} from 'src/actions/user';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function ProfileDeleteAlert() {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserDeletion = () => {
    dispatch(deleteUserProfile());
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          width: '15rem',
        }}
        variant="contained"
        type="button"
        color="error"
      > Supprimer
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ color: 'secondary' }}
      >
        <DialogTitle>ÊTES-VOUS SÛR DE VOULOIR SUPPRIMER LE COMPTE ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            CETTE ACTION EST DÉFINITIVE ET VOUS PERDREZ TOUS VOS PERSONNAGES.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleUserDeletion}>SUPPRIMER</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
