const express = require("express");
const dbo = require("../db/conn");
const ideasRouter = express.Router();

// This route will deal with creating an idea
ideasRouter.post('/ideas/create', async (req, res) => {
  const db_connect = dbo.getDb(); // Get the database connection object
  try {
    const idea = await db_connect.collection('ideas').insertOne({
      ideaID: req.body.ideaId,
      // ... rest of your idea properties
    });

    // Send success response
    res.status(201).json({
      message: 'Idea created successfully',
      idea: idea.ops[0],
    });
  } catch (error) {
    // Send error response
    res.status(500).json({
      message: 'Error creating idea',
      error: error.message,
    });
  }
});

// This route will fetch ideas that are not hidden
ideasRouter.get('/ideas-officials', async (req, res) => {
  const db_connect = dbo.getDb(); // Get the database connection object
  try {
    const ideas = await db_connect.collection("ideas").find({ hidden: false }).toArray();
    res.json(ideas);
  } catch (e) {
    console.error('Error fetching ideas:', e);
    res.status(500).json({ message: 'Error fetching ideas' });
  }
});

module.exports = ideasRouter;
