const router = require('express').Router()

const users = require('./controllers/users.js');
const items = require('./controllers/items.js');

router.use('/items', items)
router.use('/users', users)

module.exports = router