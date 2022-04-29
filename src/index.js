const express = require("express");
const app = express();
const PORT = 5000;

app.get('/', function(res, req) {
    req.send("WORKING")
});

app.listen(process.env.PORT || PORT);
console.log(`Running ${PORT}`);