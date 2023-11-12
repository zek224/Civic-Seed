import React from 'react';
import { Button, TextField, Container, Typography, CssBaseline, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function IdeaComponentResident() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Implement post creation logic here
    console.log({
      title: data.get('title'),
      summary: data.get('summary'),
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
            name="summary"
            label="Summary"
            type="summary"
            id="summary"
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
            <Link to="/ideas" style={{ textDecoration: 'none' }}>
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
