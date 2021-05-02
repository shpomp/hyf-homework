console.log("script");

//Click counter
//When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.
//Clicking the second button should also count up and logout the same variable.

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let count = 0;

button1.addEventListener("click", firstClickCount);
button2.addEventListener("click", firstClickCount);

function firstClickCount() {
  console.log(count);
  count++;
}
