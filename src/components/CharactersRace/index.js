import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import avatar from 'src/assets/images/elfe.png';

export default function CharactersRace() {
  return (
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
            color: 'text.primary',
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
            color: 'text.primary',
            gap: '3rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar alt="User Avatar" src={avatar} sx={{ width: 84, height: 84 }} />
            <FormControlLabel value="elf" control={<Radio sx={{ color: 'text.primary' }} />} label="elf" labelPlacement="top" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar alt="User Avatar" src={avatar} sx={{ width: 84, height: 84 }} />
            <FormControlLabel value="nain" control={<Radio sx={{ color: 'text.primary' }} />} label="nain" labelPlacement="top" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar alt="User Avatar" src={avatar} sx={{ width: 84, height: 84 }} />
            <FormControlLabel value="drakeide" control={<Radio sx={{ color: 'text.primary' }} />} label="drakeide" labelPlacement="top" />
          </Box>
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
