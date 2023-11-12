const express = require("express");
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const loginRoutes = express.Router();

const dbo = require("../db/conn");
const db_connect = dbo.getDb();

const zipCodes = Array.from({length: 200}, (value, index) => index + 18000);
const saltRounds = 10;

loginRoutes.route("/signup").post(async (req, response) => {
    if(zipCodes.contains(req.body.zip)){
        const check = await db_connect.collection("users").findOne({ user: req.body.user });
        if (check) {
            // Key already exists, return an error response
            return res.status(400).json({ error: 'User already exists.' });
        }
        bcrypt.genSalt(saltRounds, function(err, pass_salt) {
            if(err) throw err;
            bcrypt.hash(myPlaintextPassword, salt, function(err, pass_hash) {
                if(err) throw err;
                const newUser = {
                    user: req.body.user,
                    name: req.body.name,
                    salt: pass_salt,
                    hash: pass_hash,
                    type: req.body.type
                };
                db_connect.collection("users").insertOne(newUser, function (err, res) {
                    if (err) throw err;
                    response.json(res);
                });
            });
        });        
    } else{
        return res.status(400).json({ error: 'Invalid zip.' });
    }
});

loginRoutes.route("/login").post(async (req, response) => {
    const check = await db_connect.collection("users").findOne({ user: req.body.user });
    if (!check) {
        // Key already exists, return an error response
        return res.status(400).json({ error: 'User does not exist.' });
    }
    bcrypt.compare(req.body.pwd, check.hash, function(err, result){
        if(err) throw err;
        if(result){
            return res.status(200).json({ message: 'Logged in.' });
        } else{
            return res.status(400).json({ error: 'Incorrect password.' });
        }
    });
});

module.exports = loginRoutes;