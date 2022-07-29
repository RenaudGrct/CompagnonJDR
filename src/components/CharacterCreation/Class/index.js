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

import CharacterCreation from 'src/components/CharacterCreation';

import avatar from 'src/assets/images/elfe.png';
import classes from 'src/assets/D&D/classList';

import { selectClass } from 'src/actions/characters';
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
  const { characterClass } = useSelector((state) => state.characters);

  const HandleClassSelection = (event) => {
    dispatch(selectClass(event.target.value));
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
                 classes.map((cla) => (
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
                         value={cla.label}
                         label={cla.label}
                         onChange={(event) => dispatch(selectClass(event.target.value))}
                         control={<Radio sx={{ color: 'primary.contrastText' }} />}
                         sx={{ display: 'flex', justifyContent: 'space-between' }}
                       />

                     </Item>
                   </Box>
                 ))
          }

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
                  checked
                  value='zob'
                  label='zob'
                  onChange={(event) => dispatch(selectClass(event.target.value))}
                  control={<Radio sx={{ color: 'primary.contrastText' }} />}
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                />

              </Item>
            </Box>

          </RadioGroup>
        </FormControl>
      </Container>
    </>
  );
}
