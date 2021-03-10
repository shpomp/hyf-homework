console.log("script loaded");

//1. Log out the text "Called after 2.5 seconds" 2.5 seconds after the script is loaded.
let miliseconds = 2500;
let seconds = miliseconds / 1000;

let after2point5seconds = setTimeout(
  () => console.log(`Called after ${seconds} seconds`),
  miliseconds
);

//console.log(after2point5seconds);

//2. Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should lo g out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

const stringToLog = "what a beautiful day!";
let delay = 3;

function delayedString(delay, stringToLog) {
  delay = delay * 1000;

  setTimeout(() => console.log(stringToLog), delay);
}

delayedString(delay, stringToLog);
// const callDelayed = () => delayedString(delay, stringToLog);

//----3. Create a button in html. When clicking this button,
// use the function you created in the previous task to log out the text:
// "Called after 5 seconds", 5 seconds after the button is clicked.
const newDelay = 5;
const newStringToLog = "Logged after 5 seconds";

let buttonClick = document.createElement("button");
buttonClick.innerText = "clickity click";
document.body.appendChild(buttonClick);

buttonClick.addEventListener("click", () =>
  delayedString(newDelay, newStringToLog)
);
// Note to self: was not working while trying to just call the function there. Remember to not pass it in a calling way!

// 4. Create two functions and assign them to two different variables.
// One function logs out "Earth", the other function logs out "Saturn".
// Create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Call the third function once with the Earth function and once with the Saturn function.

const earth = () => console.log("Earth");
const saturn = () => console.log("Saturn");

const planetLogging = (planetLogFunction) => {
  planetLogFunction();
};

planetLogging(earth);
planetLogging(saturn);

// 5. Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
// // 6. Optional Now show that location on a map using fx the Google maps api

// in geo folder

// 7. Create a function called runAfterDelay.
// It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions

function runAfterDelay(delay1, callback) {
  setTimeout(callback, delay1 * 1000);
}

let delay2 = 7;
runAfterDelay(delay2, function () {
  console.log(`Logged after 7 seconds`);
});

let delay3 = 9;
runAfterDelay(delay3, function () {
  appearingButton = document.createElement("button");
  appearingButton.innerText = `I appeared after ${delay3} seconds!`;
  document.body.appendChild(appearingButton);
});

// 8. Check if we have double clicked on the page.
// A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"

function doubleclicked() {
  const dblclck = document.createElement("p");
  dblclck.innerText = "Double click!";
  document.body.appendChild(dblclck);
  console.log("double click!");
}

document.addEventListener("dblclick", doubleclicked);

// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
// If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.
// And vice versa.

function funnyJoke() {
  console.log(
    "Q: Why did the web designer drown? A: She didn’t know if she should float:left or float:right."
  );
}

function badJoke() {
  console.log('if (happy && knowIt) console.log("ReferenceError!");');
}

function whichJoke(boolean) {
  return boolean ? funnyJoke() : badJoke();
}
let randomBoolean = Math.random() >= 0.5;
whichJoke(randomBoolean, funnyJoke, badJoke);

// Function as a variable
//Create funtions that are used in these different ways:
// 1. Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
// 2. Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested: https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
// 3. Create an object that has a key whose value is a function. Try calling this function.

// 1., 2.

const mew = () =>
    console.log("mew!")


const woof = () =>
    console.log("woof!")


function hello () {
    console.log("hello!");}

    const functions = [mew, woof, hello];


    functions.forEach((fnction) => fnction());

// 3.

const IamObject = {
  key: () => console.log("I am an object key!")
}

IamObject.key();
