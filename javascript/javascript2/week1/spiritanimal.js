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
  "Trustworthy",
  "Reliable",
  "Ferocious",
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
  "Python",
];

let userNameVar = document.getElementById("userName").value;
let generatedSpiritAnimalName;
const spiritAnimalDiv = document.getElementById("spirit-animal-div");
const spiritButton = document.getElementById("spirit-animal-button");

let newNameButton = document.createElement("button");
newNameButton.setAttribute("id", "newNameButton");
newNameButton.innerText = "want a new name?";
newNameButton.addEventListener("click", newNameButtonClicked);

let resetButton = document.createElement("button");
resetButton.setAttribute("id", "resetButton");
resetButton.innerText = "reset";
resetButton.addEventListener("click", resetButtonClicked);
const generatedNameBox = document.createElement("h2");

function userNameAdded() {
  userNameVar = document.getElementById("userName").value;

  if (userNameVar.length === 0) {
    alert("Enter your name!");
  } else if (generatedSpiritAnimalName == undefined) {
    // the prettier extension does such weird things:
    generatedSpiritAnimalName = ` the ${
      spiritAdjectivesArr[
        Math.floor(Math.random() * spiritAdjectivesArr.length)
      ]
    } ${spiritAnimalsArr[Math.floor(Math.random() * spiritAnimalsArr.length)]}`;
    generatedNameBox.innerText = userNameVar + generatedSpiritAnimalName;

    spiritAnimalDiv.appendChild(generatedNameBox);
    document.getElementById("userName").disabled = true;

    spiritAnimalDiv.appendChild(newNameButton);
    spiritAnimalDiv.appendChild(resetButton);
  }
}

function newNameButtonClicked() {
  generatedSpiritAnimalName = ` the ${
    spiritAdjectivesArr[Math.floor(Math.random() * spiritAdjectivesArr.length)]
  } ${spiritAnimalsArr[Math.floor(Math.random() * spiritAnimalsArr.length)]}`;
  generatedNameBox.innerText = userNameVar + generatedSpiritAnimalName;
  newNameButton.innerText = "try again?";
}

function resetButtonClicked() {
  location.reload();
}
