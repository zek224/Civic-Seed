const express = require("express");
const dbo = require("../db/conn");
const db_connect = dbo.getDb();
const MongoClient = require('mongodb').MongoClient;
const uri = "your_mongodb_connection_string"; // Replace with your actual connection string
const ideasRouter = express.Router();


/**this route will deal with creating an idea */

ideasRouter.post('/ideas/create',async (req, res) => {
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



ideasRouter.get('/ideas-officials', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
      await client.connect();
      const collection = client.db("your_db_name").collection("ideas"); // replace 'your_db_name' with your actual database name
      // Fetch all ideas where 'hidden' is False and 'fundable' is False. Assuming they are stored as booleans, not strings.
      const ideas = await collection.find({ hidden: false}).toArray();
      res.json(ideas);
    } catch (e) {
      console.error('Error fetching ideas:', e);
      res.status(500).json({ message: 'Error fetching ideas' });
    } finally {
      await client.close();
    }
  });






module.exports = ideasRouter;
