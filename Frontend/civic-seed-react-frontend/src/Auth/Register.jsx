import React from "react";
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";

export default function Register(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // Here you can call an API or perform a sign-up logic
        console.log({
          username: data.get('username'),
          email: data.get('email'),
          password: data.get('password'),
          zipcode: data.get('zipcode'),
        });
      };

      return(
       
        <Container component="main" maxWidth="xs">
         <Typography component="h1" variant="h4" sx={{textAlign: 'center', width: '100%', marginBottom:2, marginTop:2}}>
          Civic Seed
        </Typography>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="zipcode"
            label="Zip/Postal Code"
            name="zipcode"
            autoComplete="postal-code"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>

        <Box textAlign="center">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="text">
                Already have an account? Login
              </Button>
            </Link>
          </Box>
      </Container>


      );
}