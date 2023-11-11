import React from 'react';
import { Button, TextField, Container, Typography, CssBaseline, Box } from '@mui/material';
import {Link} from 'react-router-dom';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Implement login logic here
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <Typography component="h1" variant="h4" sx={{textAlign: 'center', width: '100%', marginBottom:2}}>
          Civic Seed
        </Typography>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Box textAlign="center">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="text">
                Don't have an account? Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
