///
// ITEM ARRAY REMOVAL

// Remove the item in names array that is equal to nameToRemove

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
  "Ahmad",
];
const nameToRemove = "Ahmad";

console.log(names);

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === nameToRemove) {
//     names.splice(i, 1);
//     //break; commented out as per feedback
//   }
// }

function notThisName(name) {
  return name != nameToRemove;
}

console.log(names.filter(notThisName));

console.log("\n");

///
// WHEN WILL WE BE THERE??

//Write a function where you speficy your speed in km/h and how far you have to go in km.
//The function has to return the time it will take to arrive at your destination.
//The time should be formatted like this: 3 hours and 34 minutes.

function countTravelTime(travelInformation) {
  const travelTimeInteger =
    travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(travelTimeInteger);
  const minutes = Math.floor((travelTimeInteger - hours) * 60);

  return `The journey will take ${hours} hours and ${minutes} minutes.`;
}

const travelInformation = {
  speed: 70,
  destinationDistance: 482,
};

const travelTime = countTravelTime(travelInformation);
console.log(travelTime);
console.log("\n");

///
// SERIES DURATION OF MY LIFE

// Create a function that, using the seriesDurations array, logs out smth like this:
// Game of thrones took 0.01% of my life (take 80 years for life duration)
// Sopranos took 0.012% of my life
// The Wire took 0.007% of my life
// In total that is 0.2% of my life

const seriesDurations = [
  {
    title: "True Detective",
    days: 1,
    hours: 0,
    minutes: 0,
  },
  {
    title: "Twin Peaks",
    days: 2,
    hours: 12,
    minutes: 48,
  },
  {
    title: "Black Mirror",
    days: 3,
    hours: 9,
    minutes: 48,
  },
];

let lifeSpanMinutes = 40471200; // 77 years * 365 days * 24 hours * 60 minutes

function logOutSeriesText(seriesDurations) {
  let totalPercentage = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let percentage =
      ((seriesDurations[i].days * 24 * 60 +
        seriesDurations[i].hours * 60 +
        seriesDurations[i].minutes) /
        lifeSpanMinutes) *
      100;

    console.log(
      `"${seriesDurations[i].title}" took ${percentage.toFixed(3)}% of my life.`
    );

    totalPercentage = (percentage + percentage).toFixed(3);
  }
  return console.log(`In total that is ${totalPercentage}% of my life!`);
}

logOutSeriesText(seriesDurations);
// when trying to make it more compact, I get various problems, so left it as is,
// any advice how to make it not so cluncky would be much appreciated! <3

console.log("\n");

///
// NOnoN0nOYes (NOTE TAKING APP)

// The saveNote function should push an object to the notes array with the keys content and id.
// Example: [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

let notes = [];

function saveNote(content, id) {
  let note = {
    content: content,
    id: id,
  };
  return notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// Get a note
// Now a user can save a note, but what if a user wants to see a specific note,
// but only remembers the id?

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

// Log out notes
// What if the user just wants to read all his notes?
// example: The note with id: 1, has the following note text: Pick up groceries

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
  return;
}

logOutNotesFormatted();

// Unique feature
// this allows to add a status update on the notes that are done, by giving note ID as a parameter

function noteDone(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return (notes[i].status = "DONE!");
    }
  }
}

noteDone(2);
console.log(notes);

///
// CactusIO-interactive (Smart phone usage app) OPTIONAL

// A user can add smartphone activities. Then he can see a status on how his smartphone usage is going.

// Adding an activity
// Ekstra task: Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is.

let activities = [];

function addActivity(activity, duration) {
  const today = new Date();
  let date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  let activitiesObject = {
    date: date,
    activity: activity,
    duration: duration,
  };
  if (typeof activity === "string" && !isNaN(duration) && activity != "") {
    return activities.push(activitiesObject);
  } else {
    return console.log(
      "Wrong input! Activity should not be empty, it should be a string and duration should be a number!"
    );
  }
}

// addActivity("", 30); // for testing
addActivity("Youtube", 30);
addActivity("gmail", 10);
addActivity("freeCodeCamp", 50);

console.log(activities);

// Show my status
// Usage limit
//Create a function  showStatus. This function should use the activities variable and return a string saying the following:
// "You have added 3 activities. They amount to 78 min. of usage"

function showStatus(activities) {
  let limit = 100;
  let activitiesCount = 0;
  let activitiesTime = 0;
  for (let i = 0; i < activities.length; i++) {
    activitiesCount++;
    activitiesTime += activities[i].duration;
  }
  let activitiesStatus = "";
  if (activitiesTime >= limit) {
    activitiesStatus = `You have reached your limit, no more smartphoning for you! You have added ${activitiesCount} activities. They amount to ${activitiesTime} min. of usage.`;
  } else {
    activitiesStatus = `You have added ${activitiesCount} activities. They amount to ${activitiesTime} min. of usage. You have ${
      limit - activitiesTime
    } minutes of smartphoning left until you reach your daily limit.`;
  }
  console.log(activitiesStatus);
}

showStatus(activities);
