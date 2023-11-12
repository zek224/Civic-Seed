// const express = require("express");
// const app = express();
// const cors = require("cors");
// const path = require("path");

// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/userpass"));
// app.use(express.static(path.join(__dirname, 'public')));
// // get driver connection
// const dbo = require("./db/conn");

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//    });
//   console.log(`Server is running on port: ${port}`);
// });


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hsamir347:HELLO@cluster0.whlgxj0.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
