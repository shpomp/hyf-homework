//
//JS2 week1 in class

const favoriteDishes = [
  "omlette",
  "falafel",
  "avocado toast",
  "watermelon",
  "smoothie",
  "buckwheat",
  "oatmeal",
];

const pageBody = document.querySelector("body");
const varUl = document.createElement("ul");
varUl.innerText = "My favorite dishes:";
pageBody.appendChild(varUl);

for (let i = 0; i < favoriteDishes.length; i++) {
  let dishInList = document.createElement("li");
  dishInList.innerText = favoriteDishes[i];
  varUl.appendChild(dishInList);
}

// Podcast

const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    //imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    //imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    //imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const varUl2 = document.createElement("ul");
varUl2.innerHTML = "<h1>The podcasts</h1>";
pageBody.appendChild(varUl2);

for (let i = 0; i < podcasts.length; i++) {
  let podcastInList = document.createElement("li");
  let h2InPodcastList = document.createElement("h2");
  h2InPodcastList.innerHTML = podcasts[i]["name"];
  podcastInList.appendChild(h2InPodcastList);
  varUl2.appendChild(podcastInList);
  if (podcasts[i]["imageUrl"] !== undefined) {
    let podcastImage = document.createElement("img");
    let podcastImageSRC = podcasts[i]["imageUrl"];
    podcastImage.src = podcastImageSRC;
    podcastInList.appendChild(podcastImage);
  }
}

//Image inserter

const imageInsertHeading = document.createElement("h1");
imageInsertHeading.innerText = "Image inserter";
pageBody.appendChild(imageInsertHeading);

function appendImage(imageUrl, elementToAppendImageTo) {
  let createImage = document.createElement("img");
  createImage.src = imageUrl;
  elementToAppendImageTo.appendChild(createImage);
}

//appendImage("https://picsum.photos/536/354", document.querySelector("body"));

// Simple eventlistener

const simpleEventListener = document.createElement("h1");
simpleEventListener.innerText = "Simple eventlistener";
pageBody.appendChild(simpleEventListener);

const button = document.createElement("button");
button.innerText = "click me now!";
button.addEventListener("click", buttonClicked);
pageBody.appendChild(button);

function buttonClicked() {
  button.innerText = "button clicked!";
}

// Light mode dark mode
// Clicking a button should toggle the background color of the body
// and the text color in the page. If the background is white and the text is black,
//then clicking the button will make the background dark and the text white and vice versa

const lightDarkModeHeading = document.createElement("h1");
lightDarkModeHeading.innerText = "Light mode dark mode";
pageBody.appendChild(lightDarkModeHeading);

const lightDarkButton = document.createElement("button");
lightDarkButton.innerText = "make black";
pageBody.appendChild(lightDarkButton);
lightDarkButton.addEventListener("click", lightDarkButtonClicked);

document.body.style.backgroundColor = "white";
document.body.style.color = "black";

function lightDarkButtonClicked() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    lightDarkButton.innerText = "make white";
  } else if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    lightDarkButton.innerText = "make black";
  }
}
