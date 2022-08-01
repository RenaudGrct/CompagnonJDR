import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import CharacterCreation from 'src/components/Character/Creation';

import avatar from 'src/assets/images/elfe.png';
import classes from 'src/assets/Data/classes.json';

import { selectClass, handleModalIsClosed } from 'src/actions/characters';
import { useDispatch, useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(121,103,72,0.54)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));

export default function Class() {
  const dispatch = useDispatch();
  const { characterClass, raceIsClosed } = useSelector((state) => state.characters);

  const handleClose = () => {
    dispatch(handleModalIsClosed());
  };

  return (
    <>
      <CharacterCreation />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              // color: 'primary.contrastText',
              textDecoration: 'none',
              marginBottom: '5rem',
            }}
          >Choix de la Classe
          </Typography>
          <RadioGroup
          // row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{
              gap: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {
                 classes.map((classe) => (
                   <>
                     <Box
                       sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         justifyContent: 'center',
                       }}
                     >
                       <Item sx={{
                         display: 'flex',
                         justifyContent: 'space-between',
                         padding: '1rem',
                         width: '20rem',
                       }}
                       >
                         <Avatar alt="User Avatar" src={avatar} sx={{ width: 54, height: 54 }} />
                         <FormControlLabel
                           labelPlacement="start"
                           value={classe.name}
                           label={classe.name}
                           checked={characterClass === classe.name}
                           onChange={(event) => dispatch(selectClass(event.target.value))}
                           control={<Radio sx={{ color: 'primary.contrastText' }} />}
                           sx={{ display: 'flex', justifyContent: 'space-between' }}
                         />

                       </Item>
                     </Box>
                     <Dialog
                       open={!raceIsClosed && (characterClass === classe.name)}
                       onClose={handleClose}
                       aria-labelledby="alert-dialog-title"
                       aria-describedby="alert-dialog-description"
                     >
                       <DialogTitle id="alert-dialog-title">
                         {classe.name}
                       </DialogTitle>
                       <DialogContent>
                         <DialogContentText id="alert-dialog-description">
                           <p>Point de vie : {classe.hit_point}</p>
                           <p>competence de :</p>
                           {
                           classe.proficiencies.map((proficiencie) => (
                             proficiencie.saving_throw.map((save) => (
                               <p>{save.name},</p>
                             ))
                           ))
}

                           <p>aptitudes :</p>
                           {classe.proficiencies.map((proficiencie) => (
                             proficiencie.skills.map((skill) => (
                               <p>{skill.name},</p>
                             ))

                           ))}

                           <p>caracteristiques :</p>
                           {classe.proficiencies.map((proficiencie) => (
                             proficiencie.features.map((feature) => (
                               <>
                                 <p>{feature.name} : </p>
                                 <p>{feature.description}</p>
                                 <p>nombre d'utilistation: {feature.number_of_use}</p>
                                 <p>réinitialisation : {feature.reset}</p>
                               </>
                             ))
                           ))}
                         </DialogContentText>
                       </DialogContent>
                       <DialogActions>
                         <Button onClick={handleClose} autoFocus>
                           OK
                         </Button>
                       </DialogActions>
                     </Dialog>
                   </>
                 ))
          }

          </RadioGroup>
        </FormControl>
      </Container>
    </>
  );
}
