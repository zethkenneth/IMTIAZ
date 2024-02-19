const router = require('express').Router();
const logger = require('../core/logger');

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