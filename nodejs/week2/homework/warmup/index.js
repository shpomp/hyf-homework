const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

// Add 2 routes to your index.js:
// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

// /numbers/add?first=<number here>&second=<number here></number>
// QUERY!
app.get("/numbers/add", (req, res) => {
    console.log(req.query);
    const firstNum = parseInt(req.query.first);
    const secondNum = parseInt(req.query.second);
    if (!firstNum || !secondNum) {
        res.status(404).send("Give me some numbers!");
        return;
    }
  
    res.send(`Numbers added: ${firstNum + secondNum} `);
});
// http://localhost:3000/numbers/add?first=3&second=7


// /numbers/multiply/<first number here>/<second number here>
// PARAMS!
app.get("/numbers/multiply/:first/:second", (req, res) => {
    console.log(req.params);
    const firstNum = parseInt(req.params.first);
    const secondNum = parseInt(req.params.second);
    
    if (!firstNum || !secondNum) {
        res.status(404).send("Give me some numbers!")
        return;
    }
  
    res.send(`Numbers multiplied: ${firstNum * secondNum} `);
});
// http://localhost:3000/numbers/multiply/7/7

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
