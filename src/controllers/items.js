const router = require('express').Router()
const logger = require('../core/logger')

router.get('/', (res, req) => {
    logger.log({
        timestamp: new Date().toDateString(),
        label: "server",
        level: "info",
        message: `GET API ITEMS`,
    });
    return req.status(200).send("THIS IS GET ITEMS")
})

router.get("/item", (res, req) => {
  logger.log({
    timestamp: new Date().toDateString(),
    label: "server",
    level: "info",
    message: `GET API ITEMS`,
  });
  return req.status(200).send("THIS IS GET ITEMS");
});

module.exports = router;