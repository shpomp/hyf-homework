console.log("hola");
const {addition: add , multiplication: multiply } = require("./utils/operations")

const message1 = `Addition ${add(3,4)}`
const message2 = `Multiplication ${multiply(3,4)}`


console.log(message1);
console.log(message2);