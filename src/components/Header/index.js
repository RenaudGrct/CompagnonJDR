import { useSelector } from 'react-redux';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import avatar from 'src/assets/images/elfe.png';
import { Link } from 'react-router-dom';

const settings = [
  {
    label: 'Mon compte',
    url: '/profile',
  }, {
    label: 'Mes perso',
    url: '/characters',
  }, {
    label: 'Se deconnecter',
    url: '/logout',
  }];

export default function Header() {
  const {
    isGuest,
  } = useSelector((state) => state.user);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">COMPAGNON JDR</Link>
          </Typography>
          {!isGuest && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ouvrir Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                // backgroundColor: 'primary.main',
                // color: 'primary.main',
                opacity: [0.1, 0.1, 0.1],
                mt: '45px',
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (

                <Link to={setting.url}>
                  <MenuItem
                    sx={{
                      backgroundColor: 'primary.main',
                      color: '#fff',
                    }}
                    key={setting.label}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
