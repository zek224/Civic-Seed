import React from 'react';
import { Button, TextField, Container, Typography, CssBaseline, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function IdeaComponentResident(props) {

    const navigate = useNavigate();
    const { user } = props; // Destructure user from props

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const apiUrl ='http://localhost:5000';
    const data = new FormData(event.currentTarget);
    const ideaId = uuidv4();

    try {
        const response = await fetch(`${apiUrl}/ideas/create`,{
            method: 'POST',
            header:{
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify({
                ideaId: ideaId,
                username: user,
                title: data.get('title'),
                description: data.get('summary'),
                bloom: 0,
                wither:0,
                reports: 0,
                hidden: false,
                fundable: false,
                fundingAmount: 0
            }),
        });

        if(response.ok){
            // Handle a successful response from the server
            // You might want to clear the form or show a success message
            alert("Idea created successfully!");
            // Redirect to the ideas list or another appropriate page
            navigate('/ideas-page-residents'); // Adjust the route as needed
        } else{
            // Handle errors if the server response is not 'ok'
            // This could be due to validation or other server-side errors
            const errorResult = await response.json();
            alert(`Error creating idea: ${errorResult.message}`);
        }
    }catch(error){
        alert(`There was an error submitting the idea: ${error.message}`);
    };
  }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // Implement post creation logic here
//     console.log({
//       title: data.get('title'),
//       summary: data.get('summary'),
//     });
//   };

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
        <Typography component="h1" variant="h4" sx={{ textAlign: 'center', width: '100%', marginBottom: 2 }}>
          CivicSeed
        </Typography>
        <Typography component="h1" variant="h5">
          Create an Idea
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            name="description"
            label="Description"
            type="description"
            id="description"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Idea
          </Button>

          <Box textAlign="center">
            <Link to="/ideas-resident" style={{ textDecoration: 'none' }}>
              <Button variant="text">
                Back to Ideas
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default IdeaComponentResident;
