import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBurger, faHatWizard, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
import Register from "./Register";
import FavouritesView from "./FavouritesView";
import {Link, Route, Routes} from 'react-router-dom';

const pages = ['My Recipes', 'Matcher'];
const settings = ['Register', 'Login', 'Logout'];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="fixed" >
      <Box  bgcolor= '#154c79'  >
        <Toolbar disableGutters >
          <Box sx={{
        ml: 2.4
      }}>
            <FontAwesomeIcon 
              icon={faBurger}
              color='#F09851'
              x={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              fontSize= '21'
              bounce
            />
            <FontAwesomeIcon 
              icon={faHatWizard}
              color='#59A3D9'
              x={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              fontSize= '21'
              bounce
            />
            <FontAwesomeIcon 
              icon={faWandMagicSparkles}
              color='#B9C2F9'
              x={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              fontSize= '21'
              bounce
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: '0.5em'
            }}
          >
            Kitsch'n Magician
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none', xl: 'none' } }} bgcolor= '#154c79'>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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

                <MenuItem onClick={props.switch} >
                  <Typography textAlign="center">
                    My Recipes
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Matcher</Typography>
                  
                </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kitsch'n Magician
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} bgcolor= '#154c79' >
              <Link to="/favourites">
              <Button
                onClick={props.switchFavourites}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >My Recipes  
              </Button>
              </Link>
              <Button
                onClick={props.switchMatcher}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Matcher
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0, mr: 2.4 }} bgcolor= '#154c79'>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
              
                <MenuItem onClick={() => props.transition("LOGIN")}>
                  <Typography textAlign="center">
                    <Link to="/login">
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
                
                <MenuItem >
                  <Typography textAlign="center" onClick={() => props.transition("REGISTER")}>
                    <Link to="/register">
                      Register
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

            </Menu>




          </Box>
        </Toolbar>
      </Box>
      </AppBar>
      <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favourties" element={<FavouritesView />} />
      </Routes>
      </>
      
 

  );
}
export default Navbar;