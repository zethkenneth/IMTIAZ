const router = require('express').Router();
const logger = require('../core/logger');

/*
    Things to do
    1. get all users
    2. create user 
    3. update user
    4. update status user
*/

router.get('/',(req, res) => {
    logger.log({
    timestamp: new Date().toDateString(),
    label: "server",
    level: "info",
    message: `GET API USERS`,
    });
    res.status(200).send("THIS IS A GET USER ROUTE")
})

module.exports = router