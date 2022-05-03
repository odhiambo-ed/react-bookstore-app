import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const pages = ['Books', 'Categories'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [active, setActive] = useState('Books');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    setActive(page);
  };

  return (
    <AppBar
      style={{
        backgroundColor: '#FFFFFF',
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: '#189bed',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Edward-Bookstore App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link
              style={{
                textDecoration: 'none',
              }}
              to="/"
            >
              <Button
                onClick={() => handleCloseNavMenu('Books')}
                sx={{
                  my: 2,
                  mx: 3,
                  color: active === 'Books' ? 'black' : 'gray',
                  display: 'block',
                }}
              >
                Books
              </Button>
            </Link>

            <Link
              style={{
                textDecoration: 'none',
              }}
              to="/categories"
            >
              <Button
                onClick={() => handleCloseNavMenu('Categories')}
                sx={{
                  my: 2,
                  mx: 3,
                  color: active === 'Categories' ? 'black' : 'gray',
                  display: 'block',
                }}
              >
                Categories
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <PersonIcon
                style={{
                  color: '#189bed',
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
