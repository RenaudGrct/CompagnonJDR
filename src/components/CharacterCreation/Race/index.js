import CharacterCreation from 'src/components/CharacterCreation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import avatar from 'src/assets/images/elfe.png';

import races from 'src/assets/Data/races.json';
import { useDispatch, useSelector } from 'react-redux';

import { selectRace, handleModalIsClosed } from 'src/actions/characters';

export default function Race() {
  const dispatch = useDispatch();

  const { characterRace, raceIsClosed } = useSelector((state) => state.characters);

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
          >Choix de la Race
          </Typography>
          <RadioGroup
          // row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{
              // color: 'primary.contrastText',
              gap: '6rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
            }}
          >
            {
              races.map((race) => (
                <>
                  <Box
                    key={race.name}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Avatar alt="User Avatar" src={avatar} sx={{ width: 84, height: 84 }} />
                    <FormControlLabel
                      value={race.name}
                      label={race.name}
                      checked={characterRace === race.name}
                      onClick={(event) => dispatch(selectRace(event.target.value))}
                      control={<Radio sx={{ color: 'primary.contrastText' }} />}
                      labelPlacement="top"
                    />
                  </Box>
                  <Dialog
                    open={!raceIsClosed && (characterRace === race.name)}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {race.name}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        {race.racial_ability.map((ability) => (
                          <p key={ability.name}>{ability.description}</p>
                        ))}
                        <p>vitesse de : {race.speed}</p>
                        <p>Bonus de Race</p>
                        {race.score_modifier.map((score) => (
                          <p key={score.name}>{score.name}: {score.number}</p>
                        ))}
                        <p>langue parlé :</p>
                        {race.language.map((lang) => (
                          <p>{lang}</p>
                        ))}
                        <p>langue supplémentaire : {race.extra_language}</p>
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
