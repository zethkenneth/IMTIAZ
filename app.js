const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({limmit: "200mb"}));
app.use(express.urlencoded({ extended: true}))

let d = new Date();

app.get("/", (req, res) => {
    res.status(200).send(`Healty since ${d.toString()}`);
})

app.use("*", (req, res) => {
    res.send("NOT FOUND");
})

module.exports = app;