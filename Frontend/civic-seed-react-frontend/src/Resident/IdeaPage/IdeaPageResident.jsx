import React from 'react';
import { Box, Card, CardContent, IconButton, Typography, Chip } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FlagIcon from '@mui/icons-material/Flag';
import NavBarResident from '../NavBar/NavBarResident';

const IdeaPageResident = () => {
  const ideas = [
    { title: 'Fun Fridays', description: 'Allow for students in grades 1-12 to have half days on Friday', funded: true, funding: '$1000' },
    { title: 'Idea 2', description: 'Description of Idea 2', funded: false, funding: '$0' },
    // Add more ideas here
  ];

  return (
    <>
      <NavBarResident /> {/* Fixed navbar at the top of the page */}
      <Box sx={{ overflowY: 'auto', height: 'calc(100vh - 64px)', padding: 2 }}>
        {/* Subtracting the height of the navbar (adjust the value based on your actual navbar height) */}
        {ideas.map((idea, index) => (
          <Box key={index} sx={{ display: 'flex', marginBottom: 4, height: '50vh' }}>
            <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 2 }}>
              <Chip
                label={`Approved for funding: ${idea.funded ? 'Yes' : 'No'}`}
                color={idea.funded ? 'success' : 'error'}
                sx={{ marginBottom: 1, fontSize: '1rem' }}
              />
              {idea.funded && (
                <Chip
                  label={`Funding: ${idea.funding}`}
                  color="primary"
                  sx={{ marginTop: 1, fontSize: '1rem' }}
                />
              )}
              <IconButton
                color="secondary"
                sx={{ mt: 2 }}
                aria-label="report"
                size="large"
                onClick={() => console.log(`Report for idea "${idea.title}" clicked`)}
              >
                <FlagIcon fontSize="large" />
              </IconButton>
            </Card>
            <Card sx={{ flex: 2, height: '100%', marginRight: 1 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>{idea.title}</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>{idea.description}</Typography>
              </CardContent>
            </Card>
            <IconButton
              color="primary"
              sx={{ flex: 1, maxHeight: '100%', borderRadius: '20px', boxShadow: 3 }}
              aria-label="vote yes"
            >
              <ThumbUpAltIcon sx={{ fontSize: '3rem' }} />
            </IconButton>
            <IconButton
              color="secondary"
              sx={{ flex: 1, maxHeight: '100%', borderRadius: '20px', boxShadow: 3 }}
              aria-label="vote no"
            >
              <ThumbDownAltIcon sx={{ fontSize: '3rem' }} />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default IdeaPageResident;
