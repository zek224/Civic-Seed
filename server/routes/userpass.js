const express = require("express");
const crypto = require('crypto');

const loginRoutes = express.Router();

const dbo = require("../db/conn");
const db_connect = dbo.getDb();

const zipCodes = Array.from({length: 200}, (value, index) => index + 18000);

loginRoutes.route("/signup").post((req, response) => {
    if(zipCodes.contains(req.body.zip)){
        const pass_salt = Math.random().toString(36).substring(0, 32);
        const pass_hash = crypto.createHash('sha1').update(req.body.pwd + salt).digest('hex');
        const newUser = {
            user: req.body.user,
            salt: pass_salt,
            hash: pass_hash
        };
        db_connect.collection("users").insertOne(newUser, function (err, res) {
            if (err) throw err;
            response.json(res);
          });
    } else{
        response.json({succeeded: false});
    }
});

module.exports = loginRoutes;