import React from 'react';
import { Button, TextField, Container, Typography, CssBaseline, Box } from '@mui/material';
import {Link} from 'react-router-dom';

function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginUrl ='http://localhost:5000/login'; 


    try{
        let response = await fetch(loginUrl, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usr: data.get("username"),
                pwd: data.get("password"),
            }),
        });

        if(response.ok){
            // Assuming login returns some user data or a token to make subsequent requests
            let loginResult = await response.json();
            // You can log the result of login here if needed
            console.log(loginResult);
            // Now fetch the user data - replace '/getUserData' with your actual API endpoint
            const userDataUrl = 'http://localhost:5000/getUserData'; // Endpoint to get user data
            response = await fetch(userDataUrl,{
                method: 'GET',
                headers:{
                    // You may need to include authorization headers depending on your backend
                    'Authorization': `Bearer ${loginResult.token}`, // Example authorization header
                }
            });

            if(response.ok){
                const userData = await response.json();
                console.log({
                    username: userData.usr,
                    zipcode: userData.zipcode,
                    type: userData.type,
                });
            } else{
                 // Handle errors if the second request was not successful
                console.error('Failed to fetch user data.');
            }
        } else{
            console.log("Login failed");
        }
    }catch(error){
        console.log("There was an error",error);
    }
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
