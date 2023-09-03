const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup', (req, res) => {
    let user = req.body;
    query = 'select email, password, role, status from user where email=?';
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "insert into user(name, user, contactnumber, email, password, status, role) values(?, ?, ?, ?, ?,'False', 'user')";
                connection.query(query, [user.name, user.contactName, user.email, user.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "Successfully Registered" })
                    }
                    else {
                        return res.status(500).json(err);
                    }
                });
            }
            else {
                return res.status(400).json({ message: 'Email already exists.' })
            }
        }
        else {
            return res.status(500).json(err);
        }
    });

});

module.exports = router;