import React, {useState} from "react";
import { Button, TextField, Container, Typography, Box, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Link } from "react-router-dom";

export default function Register(){
   // Use fetch to post data to your backend
   const [userType, setUserType] = useState('residents'); // Default to 'residents'

   const handleSubmit = async (event) =>{

    event.preventDefault(); // Prevent default form submission behavior 
    const data = new FormData(event.currentTarget); // Create FormData from the current form target

    const apiUrl ='http://localhost:5000';
    try {
        const response = await fetch(`${apiUrl}localhost/signup`, { // Make sure to use your backend server URL if it's not the same origin
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // Convert form data to JSON
        body: JSON.stringify({
            user: data.get('username'),
            pwd: data.get('password'),
            zip: data.get('zipcode'),
            type: userType
        }),
        });

        if (response.ok) {
        // Handle a successful response from the server
        const result = await response.json();
        console.log(result);
        // Redirect to login or other actions on success
        } else {
        // Handle errors if response from server is not 'ok' (e.g., 400 or 500 status codes)
        const errorResult = await response.json();
        console.log(errorResult);
        // Display error message from server or generic error message
        }
    } catch (error) {
        // Handle network errors or other unforeseen errors
        console.error('There was an error!', error);
    }
};


 // Handle change in radio group
 const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
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

        <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">User Type</FormLabel>
                <RadioGroup row aria-label="user-type" name="user-type" value={userType} onChange={handleUserTypeChange}>
                    <FormControlLabel value="residents" control={<Radio />} label="Resident" />
                    <FormControlLabel value="officials" control={<Radio />} label="Official" />
                    <FormControlLabel value="admins" control={<Radio />} label="Admin" />
                </RadioGroup>
        </FormControl>
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