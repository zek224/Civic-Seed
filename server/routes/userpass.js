const express = require("express");
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const loginRoutes = express.Router();

const dbo = require("../db/conn");
const db_connect = dbo.getDb();

const zipCodes = Array.from({length: 200}, (value, index) => index + 18000);
const saltRounds = 10;


// ... existing code ...

loginRoutes.route("/signup").post(async (req, response) => {
    if (zipCodes.includes(req.body.zip)) { // Fixed to use 'includes' instead of 'contains'
        const check = await db_connect.collection("users").findOne({ user: req.body.user });
        if (check) {
            return response.status(400).json({ error: 'User already exists.' }); // Fixed variable name to 'response'
        }
        bcrypt.genSalt(saltRounds, function(err, salt) { // Fixed variable name to 'salt'
            if (err) return response.status(500).json({ error: 'Server error generating salt.' }); // Proper error handling
            bcrypt.hash(req.body.pwd, salt, function(err, hash) { // Fixed to use 'req.body.pwd' and 'hash'
                if (err) return response.status(500).json({ error: 'Server error hashing password.' }); // Proper error handling
                const newUser = {
                    user: req.body.user,
                    name: req.body.name,
                    pwd: hash, // Only storing hash
                    type: req.body.type,
                    zip: req.body.zip
                };
                db_connect.collection("users").insertOne(newUser, function (err, res) {
                    if (err) return response.status(500).json({ error: 'Error inserting the user.' }); // Proper error handling
                    response.json({ message: 'User created successfully', _id: res.insertedId }); // Send back success message
                });
            });
        });
    } else {
        return response.status(400).json({ error: 'Invalid zip.' }); // Fixed variable name to 'response'
    }
});


loginRoutes.route("/login").post(async (req, response) => {
    const check = await db_connect.collection("users").findOne({ user: req.body.user });
    if (!check) {
        // User does not exist, return an error response
        return response.status(400).json({ error: 'User does not exist.' });
    }
    // Use 'check.pwd' to match the field name in the schema and document
    bcrypt.compare(req.body.pwd, check.pwd, function(err, result) { 
        if (err) {
            // Instead of throwing, we send back a 500 Internal Server Error
            return response.status(500).json({ error: 'Internal server error.' });
        }
        if (result) {
            // Passwords match, return a successful login response with user type and token
            return response.status(200).json({
              message: 'Logged in successfully.',
              type: check.type, // Assuming 'type' is a field in your user document
              user: check.user, // Return the username or user ID as needed
              // token: "YourSessionToken" // If you are using token-based authentication
            });
          } else {
            // Passwords do not match, return an incorrect password error
            return response.status(400).json({ error: 'Incorrect password.' });
          }          
    });
});


module.exports = loginRoutes;