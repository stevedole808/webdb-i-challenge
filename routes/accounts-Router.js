const express = require('express');

const router = express.Router();
const connect = require( '../data/dbConfig')
const Accounts = require("../data/seeds/accounts")

router.get('/', (req, res) => {
    Accounts.get()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            errorMessage: "Error, data could not be found"
        })
    })
})

module.exports = router;