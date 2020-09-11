// Doubling of number

// program that doubles the odd numbers in an array and throws away the even number.

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

//console.log("The doubled numbers are", newNumbers); // [2, 6]

//Rewrite the above program using map and filter don't forget to use arrow functions.
//map allows to apply function to it
//filter picks out

let oddNumbers = numbers.filter((number) => number % 2 != 0);
let doubledOddNumbers = oddNumbers.map((number) => number * 2);

console.log("the odd numbers are:", oddNumbers);
console.log("the doubled odd numbers are", doubledOddNumbers);
