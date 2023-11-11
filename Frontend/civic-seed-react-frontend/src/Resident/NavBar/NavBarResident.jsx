// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBarResident = () => {
    return (
      <>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CivicSeed
            </Typography>
            <div sx={{ display: 'flex', gap: 2 }}>
              <Link to="/browse" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Browse ideas</Button>
              </Link>
              <Link to="/create" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Create an idea</Button>
              </Link>
              <Link to="/my-ideas" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">My ideas</Button>
              </Link>
            </div>
            <div style={{ cursor: 'pointer' }}>
              <span role="img" aria-label="Search Icon">
                🔍
              </span>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  export default NavBarResident;