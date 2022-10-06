// const express = require('express');
// const router = express.Router();
// const mysql = require('mysql');
// const db = require('../configs/db.configs');
// const { query } = require('express');

// const connection = mysql.createConnection(db.database);

// connection.connect(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('connected to the MySQL Server');
//         var loginTableQuery = "CREATE TABLE IF NOT EXISTS logins ( username VARCHAR(255) PRIMARY KEY, password VARCHAR(255))";
//         connection.query(userTableQuery, function (err, result) {
//             if (result.warningCount === 0) {
//                 console.log("Login table created");
//             }
//         })
//     }
// })


// router.post('/', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     console.log(req.body);

//     var query = "INSERT INTO logins (username,password) VALUES (?,?)";

//     connection.query(query, [ username, password], (err) => {
//         if (err) {
//             res.send({
//                 "status": "500",
//                 "message": "Username Already Exists!"
//             });
//         } else {
//             res.send({
//                 "status": "200",
//                 "message": "User saved successfully"
//             });
//         }
//     })

// });


// module.exports = router