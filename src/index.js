const express = require("express");
const app = express();
const PORT = 5000;

app.get('/', function(res, req) {
    res.send("WORKING");
});

app.listen(process.env.PORT || PORT);
console.log(`Running ${PORT}`);