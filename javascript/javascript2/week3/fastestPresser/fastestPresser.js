
console.log("script");

const button = document.getElementById("game-start");
const countS = document.getElementById("how-many-S");
const countL = document.getElementById("how-many-L");

let confettiSettings = { target: "my-canvas" };
let confetti = new ConfettiGenerator(confettiSettings);
//confetti.render();
//confetti.clear();

let gameDuration = () => {
  let duration = document.getElementById("game-duration-input").value;

  timer(duration);
  console.log("button clicked");
};

let restart = () => {
  location.reload();
  confetti.clear();
};
button.addEventListener("click", gameDuration);

let SCounted = 1;
let LCounted = 1;

let presser = (press) => {
  let symbol = press.key;

  if (symbol === "s") {
    countS.innerText = SCounted++;
  } else if (symbol === "l") {
    countL.innerText = LCounted++;
  }
};
const timer = (duration) => {
  let result = document.createElement("h1");
  result.setAttribute("id", "result");
  result.innerText = "PRESS!";
  document.getElementById("game-duration-div").appendChild(result);
  document.addEventListener("keypress", presser);
  setTimeout(() => {
    document.removeEventListener("keypress", presser);
    button.removeEventListener("click", gameDuration);
    button.innerHTML = `<p id="game-start-button-txt">Restart</p>`;
    button.addEventListener("click", restart);
    button.style.backgroundColor = "#6575AC";

    //let result = document.createElement("h1");
    //result.setAttribute("id", "result");

    if (SCounted > LCounted) {
      result.innerText = "S is the winner!";
      document.getElementById("game-duration-div").appendChild(result);
      // confetti.render();
    } else if (LCounted > SCounted) {
      result.innerText = "L is the winner!";
      document.getElementById("game-duration-div").appendChild(result);
      // confetti.render();
    } else if ((SCounted = LCounted)) {
      result.innerText = "It's a tie!";
      document.getElementById("game-duration-div").appendChild(result);
    }
    confetti.render();
  }, duration * 1000);
};
