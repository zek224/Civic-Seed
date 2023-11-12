const express = require("express");
const dbo = require("../db/conn");
const db_connect = dbo.getDb();

const ideasRouter = express.Router();


router.post('/ideas/create', isAuthenticated, async (req, res) => {
  try {
    // Replace 'db' with your actual database interface or ORM method
    const idea = await db.collection('ideas').insertOne({
      ideaID: req.body.ideaId, // Ensure that randomId is generated correctly before sending it to the server
      username: req.body.username,
      title: req.body.title,
      description: req.body.description,
      bloom: req.body.bloom,
      wither: req.body.wither,
      reports: req.body.reports,
      hidden: req.body.hidden,
      fundable: req.body.fundable,
      fundingAmount: req.body.fundingAmount,
    });

    // Send success response
    res.status(201).json({
      message: 'Idea created successfully',
      idea: idea.ops[0], // Assuming you're using MongoDB, 'ops' contains the document(s) inserted
    });
  } catch (error) {
    // Send error response
    res.status(500).json({
      message: 'Error creating idea',
      error: error.message,
    });
  }
});

module.exports = router;
