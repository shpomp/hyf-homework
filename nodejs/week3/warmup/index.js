const { response } = require("express");
const express = require("express");
const app = express();
const router = express.Router();


app.get("/", (req, res) => res.send("nodejs week3 homework"));

// www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
// https://stackoverflow.com/questions/32817027/check-if-an-array-contains-only-numeric-values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const extractQueryNumbers = (object) => {
  const unnestQueryNumbers = Object.values(object).flat();
  const numbers =
    unnestQueryNumbers.some(isNaN) || unnestQueryNumbers.length < 2
      ? []
      : unnestQueryNumbers.map((i) => Number(i));
  return numbers;
};

// repeating code of each path into a function:
const processQuery = (action, object) => {
  console.log(object);
  const response =
    extractQueryNumbers(object).length == 0
      ? { status: 406, error: "Insufficient query params" }
      : {
          params: extractQueryNumbers(object),
          result:
            Math.round(extractQueryNumbers(object).reduce(action) * 100) / 100,
        };
  console.log(response);
  return response;
};

const add = (accumulator, currentValue) => accumulator + currentValue;
const subtract = (accumulator, currentValue) => accumulator - currentValue;
const multiply = (accumulator, currentValue) => accumulator * currentValue;
const divide = (accumulator, currentValue) => accumulator / currentValue;

// -- ADD
app.get("/add", (req, res) => {
  console.log("add");
  res.send(processQuery(add, req.query));
});
// http://localhost:3000/add?num=1&number=2&number=5
// http://localhost:3000/add?num=1&number=2&number=a

// -- SUBTRACT
app.get("/subtract", (req, res) => {
  console.log("subtract");
  res.send(processQuery(subtract, req.query));
});
// http://localhost:3000/subtract?num=10&number=2&number=5

// -- MULTIPLY
app.get("/multiply", (req, res) => {
  console.log("multiply");
  res.send(processQuery(multiply, req.query));
});
// http://localhost:3000/multiply?num=10&number=2&number=5

// -- DIVIDE
app.get("/divide", (req, res) => {
  console.log("divide");
  res.send(processQuery(divide, req.query));
});

app.use("/calculator", router);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
