import { useSelector, useDispatch } from 'react-redux';
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

import { logOut } from 'src/actions/user';

const isLoggedSettings = [
  {
    label: 'Profil',
    url: '/profile',
  }, {
    label: 'Personnages',
    url: '/characters',
  },
  {
    label: 'Se déconnecter',
    url: '/logout',
  }];

const isGuestSettings = [
  {
    label: 'Personnages',
    url: '/characters',
  },
  {
    label: 'Valider inscription',
    url: '/register',
  },
  {
    label: 'Se connecter',
    url: '/login',
  }];

export default function Header() {
  const {
    isLogged,
    isLoggedAsGuest,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDisconnect = () => {
    dispatch(logOut());
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
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

          {isLogged && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ouvrir Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
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

              {isLoggedSettings.map((setting) => (

                <Link to={setting.url}>
                  <MenuItem
                    key={setting.label}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <Link to="/">
                <MenuItem
                  key="Me deconnecter"
                  onClick={handleDisconnect}
                >
                  <Typography textAlign="center">Me déconnecter</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          )}

          {isLoggedAsGuest && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ouvrir Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
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

              {isGuestSettings.map((setting) => (

                <Link to={setting.url}>
                  <MenuItem
                    key={setting.label}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {isLogged && (
              <Link to="/">
                <MenuItem
                  key="Me deconnecter"
                  onClick={handleDisconnect}
                >
                  <Typography textAlign="center">Me déconnecter</Typography>
                </MenuItem>
              </Link>
              )}
            </Menu>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
