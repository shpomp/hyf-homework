console.log("script loaded!");

// Movies
// This exercise is repetition of array functions.
// you dont have to use chaining or anything fancy. 
// Just fetch the movies and use the correct array function to get the following movies:
// Create an array of bad movies
// Create an array of bad movies since year 2000

const moviesAPIurl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

function findBadMovies(moviesArray){
    return moviesArray.filter((movie) => movie.rating < 4);
}

function findMoviesSince2000(moviesArray){
    return moviesArray.filter((movie) => movie.year >= 2000);
}

async function findMovies() {
    try {
      const fetchedData = await fetch(moviesAPIurl);
      const moviesJsonArray = await fetchedData.json();
  
      const badMovies = findBadMovies(moviesJsonArray);
      //console.log(badMovies);
  
      const badMoviesSince2000 = findMoviesSince2000(badMovies);
      //console.log(badMoviesSince2000);

    } catch {
      console.log("an error has occured!");
    }
  }
  
  
  findMovies();


 // Promise that resolves after set time
 // Create a function that has one parameter: resolveAfter. 
 // Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

 const resolveAfter = 3;

 const myFunction = (resolveAfter) => {
  return new Promise((resolve) => {
   setTimeout(() => {
     resolve();
   }, resolveAfter * 1000);
 })};


  myFunction(resolveAfter).
  then(()=> console.log(`I am a promise resolved after ${resolveAfter}s!`));

  // When you have written the promise, use it with async/await

  const asyncAwait = async (resolveAfter) => {
    await myFunction(resolveAfter);
    console.log(`I am a promise consumed with async await after ${resolveAfter}s!`);
  };
  asyncAwait(resolveAfter);

// Rewrite time
// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// The getCurrentPosition function is probably going to throw an error, but that is fine. 
// As long as you can use it as a promise.


// setTimeout rewritten to promise: 

const timeoutPromise = (miliseconds) => {
    new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, miliseconds);
    })
};


// navigator.geolocation.getCurrentPosition
// MDN:

function success(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error);

  // rewritten to promise: 

  const locationPromise = () => {
    return new Promise ((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error);
    })
  };

  locationPromise()
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  })



// Fetching and waiting
// Do the 3 steps below using promises and .then.
// Do the 3 steps below using async/await
// 1.Wait 3 seconds
// 2.After 3 seconds fetch some data from any api you like
// 3.Log out the data from the api

// promise.then()
const time = 3;


const fetchingAndWaitingPromise = (time) => {
  return new Promise((resolve) => {
   setTimeout(() => {
    const astronauts =  fetch("http://api.open-notify.org/astros.json");
     resolve(astronauts);
   }, time * 1000);
 })};

 fetchingAndWaitingPromise(time)
 .then(response => response.json())
 .then(astronautData => {
   return astronautData.people.forEach(astronaut => {
     console.log(astronaut.name);
   });
   })

   // async/await

   const fetchingAndWaitingAsyncAwait = async () => {
     try {
       const fetchedData = await fetchingAndWaitingPromise(time);
       const astronautsData = await fetchedData.json();
       astronautsData.people.forEach(astronaut => {
        console.log("hej, " + astronaut.name +"!");
      });
     }
     catch (error) {
       console.log(error);
     }
   }

   fetchingAndWaitingAsyncAwait(time);

