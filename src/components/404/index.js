import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from '../../assets/images/vecna.jpg';

function NotFound() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Container>
        <Typography
          variant="h1"
          color="gainsboro"
          sx={{
            fontFamily: 'fantasy',
            p: 10,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          color="gainsboro"
          sx={{
            fontFamily: 'fantasy',
            fontWeight: 'bold',
            marginBottom: 2,
          }}
        >
          Nous ne trouvons pas cette page
        </Typography>
        <Typography
          variant="body1"
          color="gainsboro"
          sx={{
            fontFamily: 'fantasy',
            p: 1.5,
            marginLeft: 1,
          }}
        >
          Partez vite avant que Vecna vous attrape !
        </Typography>
        <Button
          href="/"
          variant="contained"
          sx={{
            alignContent: 'flex-start',
            marginLeft: 13,
            marginTop: 5,
          }}
        >
          Accueil
        </Button>
      </Container>
    </Box>
  );
}

export default NotFound;
