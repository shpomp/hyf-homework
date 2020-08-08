// FLIGHT BOOKING

function getFullname(firstName, surName, useFormalName) {
  const fullName = `${firstName} ${surName}`;
  if (firstName === "" || surName === "") {
    alert("Please provide first and last names!");
    return ""; // to not display 'undefined' in Boarding card
  } else {
    return useFormalName ? `Lord ${fullName}` : fullName;
  }
}

let fullname1 = getFullname("Richard", "Sanchez", false);
let fullname2 = getFullname("Sponge", "Bob", true);
console.log(fullname1);
console.log(fullname2);

// EVENT APPLICATION

const today = new Date();
const todayNumber = today.getDay();

function getEventWeekday(daysFromToday) {
  const eventDays = (todayNumber + daysFromToday) % 7;
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return week[eventDays];
}

const eventDate = getEventWeekday(13);
console.log(eventDate);

// WEATHER WEAR

function whatToWear(temperature) {
  let youShouldWear;
  if (temperature <= 5) {
    youShouldWear = "Long-sleeved fur jumpsuit";
  } else if (temperature > 5 && temperature <= 13) {
    youShouldWear = "Long-sleeved wool jumpsuit";
  } else if (temperature > 13 && temperature <= 22) {
    youShouldWear = "Long-sleeved cotton jumpsuit and a jacket";
  } else if (temperature > 22 && temperature <= 30) {
    youShouldWear = "short-sleeved cotton jumpsuit";
  } else if (temperature > 30 && temperature <= 35) {
    youShouldWear = "Shorts and a tank-top";
  } else {
    youShouldWear = "Stay in a cool pool!";
  }
  return youShouldWear;
}

const clothesToWear = whatToWear(36);
console.log(clothesToWear);

// STUDENT MANAGER
/* 
-There can be only 6 students in a class. Otherwise log out: "Cannot add more students to class 07".
-The same person cannot be added to the class, otherwise log out : 'Student Benjamin is already in the class'.
-If the Queen is added to the class she should always get a space. Even if the class has been filled out.
-You cannot add an empty string to a class */

let class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length < 6) {
    if (class07Students.includes(studentName)) {
      alert(`Student ${studentName} is already in the class`); // return changed to alert after testing in CodePen
    } else if (studentName === "") {
      alert("Please provide the student's name");
    } else {
      class07Students.push(studentName);
    }
  } else {
    if (studentName === "queen") {
      if (class07Students.includes("queen")) {
        alert("The Queen is already in the class");
      } else {
        class07Students.push(studentName);
      }
    } else {
      alert("Cannot add more students to class 07");
    }
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
