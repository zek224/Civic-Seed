import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const IdeaPageResident = () => {
  const ideas = [
    { title: 'Fun Fridays', description: 'Allow for students in grades 1-12 to have half days on Friday' },
    { title: 'Idea 2', description: 'Description of Idea 2' },
    // Add more ideas here
  ];

  return (
    <Box sx={{ overflowY: 'auto', height: '100vh', padding: 2 }}>
      {ideas.map((idea, index) => (
        <Box key={index} sx={{ display: 'flex', marginBottom: 4, height: '50vh' }}>
          <Card sx={{ flex: 3, marginRight: 1, height: '100%' }}>
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
  );
}

export default IdeaPageResident;
