import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box
      bgcolor="text.secondary"
      color="gray"
      sx={{
        marginTop: 33,
      }}
    >
      <Container
        maxWidth="100%"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'rows',
            justifyContent: 'space-around',
            alignItems: 'center',

          }}
        >
          <Link
            href="/"
            underline="hover"
            sx={{
              color: 'gray',
              p: 2,
            }}
          >
            Contact
          </Link>
          <Link
            href="/"
            underline="hover"
            sx={{
              color: 'gray',
              p: 2,
            }}
          >
            A propos
          </Link>
        </Box>
        <Box
          sx={{
            paddingBottom: 2,
          }}
        >
          Compagnon-JDR est un contenu de fan non officiel autorisé dans le cadre de la Politique
          des contenus de fans. Ni approuvé, ni promu par Wizards of the Coast.
          Certaines parties des matériaux utilisés sont la propriété de Wizards of the Coast.
          ©Wizards of the Coast LLC.
        </Box>
      </Container>
    </Box>
  );
}
