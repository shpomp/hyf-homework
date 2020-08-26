//
// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord() {
  let danishWordsInLength = danishWords.map(function (str) {
    return str.length;
  });

  let shortestLengthIndex = danishWordsInLength.indexOf(
    Math.min.apply(Math, danishWordsInLength)
  );

  let shortestWord = danishWords[shortestLengthIndex];

  return console.log(shortestWord);
}
findShortestWord(danishWords);

//
// Find and count the Danish letters

const danishString = "Jeg hører og ændrer og har en blå bil med en grå ting";
const danishString2 = "Jeg hører og støtter og har en blå bil med en grå ting";
const danishString3 = "bleh";
const danishString4 = "";

function countDanishLetters(danishString) {
  let danishLettersRegEx = new RegExp(/([ÅÆØåæø])/g);
  let danishLettersFound = danishString.match(danishLettersRegEx);
  const danishLettersCounted = {};

  if (danishString.length === 0) {
    return console.log("String is empty!");
  }
  if (danishLettersFound === null) {
    return console.log("No danish letters in the string!");
  }

  let danishAA = danishLettersFound.filter(function (value) {
    return value === "å";
  }).length;
  let danishAE = danishLettersFound.filter(function (value) {
    return value === "æ";
  }).length;
  let danishOE = danishLettersFound.filter(function (value) {
    return value === "ø";
  }).length;

  //result:
  danishLettersCounted.total = danishAA + danishAE + danishOE;
  if (danishAA !== 0) {
    danishLettersCounted["å"] = danishAA;
  }
  if (danishAE !== 0) {
    danishLettersCounted["æ"] = danishAE;
  }
  if (danishOE !== 0) {
    danishLettersCounted["ø"] = danishOE;
  }

  console.log(danishLettersCounted);
}

countDanishLetters(danishString);
countDanishLetters(danishString2);
countDanishLetters(danishString3);
countDanishLetters(danishString4);

//
// Spirit animal name generator

const spiritAdjectivesArr = [
  "Assertive",
  "Sleepy",
  "Sharp",
  "Imaginary",
  "Loyal",
  "Lazy",
  "Three-eyed",
  "Exotic",
  "Sensual",
  "Sassy",
  "Hypnotic",
  "Howling",
  "Promiscuous",
  "Melancholic",
  "Feisty",
  "Lame",
  "Beloved",
  "Fluffy",
  "Self-confident",
  "Friendly",
  "Gentle",
  "Observant",
  "Goofy",
  "Responsible",
  "Sneaky",
  "Slippery",
  "Standard",
  "Neutral",
  "Hopeful",
  "Timid",
  "Private",
  "Shy",
  "Political",
];

const spiritAnimalsArr = [
  "Crab",
  "Snail",
  "Armadillo",
  "Shark",
  "Dolphin",
  "Fly",
  "Griffin",
  "Frog",
  "Donkey",
  "Moose",
  "Goose",
  "Chicken",
  "Tiger",
  "Antilope",
  "Llama",
  "Starfish",
  "Yellyfish",
  "Kangaroo",
  "Pony",
  "Flamingo",
  "Monkey",
  "Spider",
  "Dragon",
  "Hippopotamus",
  "Cobra",
  "Chipmunk",
  "Piranha",
  "Whale",
  "Octopus",
  "Panda",
];
let userNameVar = document.getElementById("userName").value;
let generatedSpiritAnimalName;
const body = document.getElementsByTagName("body");
const spiritAnimalDiv = document.getElementById("spirit-animal-div");
const spiritButton = document.getElementById("spirit-animal-button");
let newNameButton;
let resetButton;

function userNameAdded() {
  userNameVar = document.getElementById("userName").value;
  if (userNameVar.length === 0) {
    alert("Enter your name!");
  } else if (generatedSpiritAnimalName == undefined) {
    const generatedNameBox = document.createElement("h2");
    // the prettier extension does such weird things:
    generatedSpiritAnimalName = ` the ${
      spiritAdjectivesArr[
        Math.floor(Math.random() * spiritAdjectivesArr.length)
      ]
    } ${spiritAnimalsArr[Math.floor(Math.random() * spiritAnimalsArr.length)]}`;

    generatedNameBox.innerText = userNameVar + generatedSpiritAnimalName;
    generatedNameBox.setAttribute("id", "generatedNameBox"); /// for the replaceChild to pick it up

    spiritAnimalDiv.appendChild(generatedNameBox);
    document.getElementById("userName").disabled = true;

    newNameButton = document.createElement("button");
    newNameButton.setAttribute("id", "newNameButton");
    newNameButton.innerText = "want a new name?";
    newNameButton.addEventListener("click", newNameButtonClicked);

    spiritAnimalDiv.appendChild(newNameButton);
  }

  function newNameButtonClicked() {
    let replaceBox = document.createElement("h2");
    replaceBox.setAttribute("id", "replaceBox");
    replaceBox.innerText = ` ${userNameVar} the ${
      spiritAdjectivesArr[
        Math.floor(Math.random() * spiritAdjectivesArr.length)
      ]
    } ${spiritAnimalsArr[Math.floor(Math.random() * spiritAnimalsArr.length)]}`;
    let whatToReplace = document.getElementById("generatedNameBox");
    spiritAnimalDiv.replaceChild(replaceBox, whatToReplace);
  }
}
function resetButtonClicked() {}
