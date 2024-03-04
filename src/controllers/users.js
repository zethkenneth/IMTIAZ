const router = require('express').Router();
const usersSevices = require('../services/users.js')

router.get('/', async (req, res) => {
   const result = await usersSevices.getAllUsers();
   return res.status(200).send(result)
});

router.post('/', async (req, res) => {
    const result = await usersSevices.addUser(req.body)
    return res.status(200).send(result);
})

router.put('/', async (req, res) => {
    const result = await usersSevices.updateUser(req.body)
    return res.status(200).send(result)
})
module.exports = router