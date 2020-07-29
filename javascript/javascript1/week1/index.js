// Age-ify (A future age calculator)

console.log("\n");
const yearOfBirth = 1989; // typeof = number
let yearFuture = 2077; // typeof = number
let age = yearFuture - yearOfBirth;

//console.log("You will be " + age + " years old in " + yearFuture + ".");
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)

console.log("\n");
const dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true; // boolean; change this for different calculation
let dogAge = dogYearFuture - dogYearOfBirth; // dogYear renamed

if (shouldShowResultInDogYears == true) {
  console.log(
    `Your dog will be ${dogAge * 7} dog years old in ${dogYearFuture}.`
  );
} else {
  console.log(
    `Your dog will be ${dogAge} human years old in ${dogYearFuture}.`
  );
}

// Housey pricey (A house price estimator)

console.log("\n");
let houseWidth = 5; // change this
let houseDepth = 11; // change this
let houseHeight = 8; // change this
let gardenSizeInM2 = 70; // change this
const volumeInMeters = houseWidth * houseDepth * houseHeight;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let houseCosts = 1000000; //change this

console.log(
  `The house price should be around ${housePrice}. The actual price is ${houseCosts}.`
);
if (housePrice >= houseCosts) {
  console.log("The house price is good, buy it!");
} else console.log("The house is too expensive!");

// Ez Namey (Startup name generator)

console.log("\n");
let firstWords = [
  "easy",
  "fine",
  "fly",
  "amazing",
  "super",
  "fun",
  "awesome",
  "instant",
  "best",
  "cool",
];
let secondWords = [
  "fix",
  "service",
  "solution",
  "up",
  "improve",
  "option",
  "example",
  "switch",
  "tune",
  "repair",
];

let startupName = `${
  firstWords[Math.floor(Math.random() * firstWords.length)]
} ${secondWords[Math.floor(Math.random() * secondWords.length)]}`;

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);
