const express = require("express");
const app = express();
const add = require("./utils/operations")
const message = `Addition: ${add(3,4)}`

app.get("/", (req, res) =>
    {res.send(
        ``
    )})

app.listen(3000);
