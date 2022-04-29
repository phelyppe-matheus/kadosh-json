const express = require("express");
const fs = require("fs")

let raw_data = fs.readFileSync('initial_data.json');
let posts = JSON.parse(raw_data);

const app = express();
const PORT = 5000;

app.get('/', function (req, res) {
    res.json(posts);
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening from port ${PORT}`));