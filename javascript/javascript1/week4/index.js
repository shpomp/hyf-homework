//
// Voice assistant
//Create a function called getReply(command). The function should return a response that corresponds to the command!

let human = new Object();
human.todo = [];
let command;

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const regexNum = /\d+/g;

function assistantSetsTimer(command) {
  let commandTime = parseInt(command.match(regexNum), 10);
  let timerTime = commandTime * 60000; //milisec
  console.log(`Timer set for ${commandTime} min`);
  setTimeout(function () {
    alert("Timer done!");
  }, timerTime);
}

function addToToDo(command) {
  let commandString = command.split(" ");
  let activity = commandString[1];
  human.todo.push(activity);
  console.log(`${activity} added to todo`);
}
//tried to make sure activity is not the same but got totally stuck for hours upon hours

function removeTodo(command) {
  let commandString = command.split(" ");
  let activity = commandString[1];
  for (let i = 0; i < human.todo.length; i++) {
    if (human.todo[i] === activity) {
      human.todo.splice(i, 1);
      return console.log(`${activity} removed from todo`);
    }
  }
}

function stringToMath(command) {
  const extractedInt = [];
  const extractedNumStrings = command.match(regexNum);
  for (let i = 0; i < extractedNumStrings.length; i++) {
    extractedInt.push(parseInt(extractedNumStrings[i], 10));
  }
  if (command.includes("+")) {
    return console.log(extractedInt[0] + extractedInt[1]);
  } else if (command.includes("-")) {
    return console.log(extractedInt[0] - extractedInt[1]);
  } else if (command.includes("/")) {
    let division = extractedInt[0] / extractedInt[1];
    return console.log(division.toFixed(2));
  } else if (command.includes("*")) {
    return console.log(extractedInt[0] * extractedInt[1]);
  } else {
    console.log("not sure what you want me to do :/");
  }
  return extractedInt;
}

/// GET REPLY FUNCTION

function getReply(command) {
  let lowCaseCommand = command.toLowerCase();
  let response;

  //name
  if (lowCaseCommand.includes("my name is")) {
    let name = command.slice(16).trim();
    //if there is no name yet
    if (human.name === undefined) {
      human.name = name;
      response = `nice to meet you ${name}`;
      return console.log(response);
      //if name already has been told
    } else if (human.hasOwnProperty("name")) {
      response = `You have told us your name, ${human.name}. Once again, nice to meet you!`;
      return console.log(response);
    }
    //what is my name
  } else if (lowCaseCommand.includes("what is my name")) {
    //if name not known yet
    if (human.name === undefined) {
      response = "You haven't told us your name yet!";
      return console.log(response);
      //if we know name already
    } else if (human.hasOwnProperty("name")) {
      response = `Your name is ${human.name}`;
      return console.log(response);
    }
    //todo
  } else if (
    lowCaseCommand.endsWith("my todo") ||
    lowCaseCommand.endsWith("my to-do")
  ) {
    if (lowCaseCommand.startsWith("add")) {
      addToToDo(command);
    } else if (lowCaseCommand.startsWith("remove")) {
      removeTodo(command);
    } else if (lowCaseCommand.startsWith("what is")) {
      if (human.todo.length === 0) {
        return console.log(`You have no todos!`);
      } else {
        return console.log(
          `You have ${human.todo.length} todos: ${human.todo.join(", ")}.`
        );
      }
    } else {
      response = "Huh? What to do with your todo?";
      return console.log(response);
    }
    //what day is it today
  } else if (lowCaseCommand.includes("day" || "today")) {
    const today = `Today is the ${date.getDate()} of ${
      months[date.getMonth()]
    }, ${date.getFullYear()}. Hope it is a good day for you!`;
    return console.log(today);
  }
  //math
  else if (command.match(regexNum) && command.includes("what is")) {
    stringToMath(command);
    //timer
  } else if (command.match(regexNum) && command.includes("set a timer for")) {
    assistantSetsTimer(command);
  } else {
    console.log("idk ;/");
  }
}

// TESTING :
console.log("-----------TESTING-----------");
getReply("Hello My name is Benji");
getReply("Hello my name is Buba");
getReply("what is my name");
console.log(human);
getReply("what is 3+14");
getReply("what is 3/14");
getReply("what is 3-14");
getReply("what is 3*14");
getReply("what is 3 and 14");
getReply(" is what day?");
getReply("what is today?");
//getReply("set a timer for 1 minute");
getReply("quack");
getReply("add washing to my todo");
getReply("add fishing to my todo");
getReply("add fishing to my todo");
getReply("add painting to my todo");
getReply("remove painting from my todo");
console.log(human);
getReply("what is on my todo");
human.todo = [];
getReply("what is on my todo");
delete human.name;
getReply("what is my name");
