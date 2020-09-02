const movies = require("./moviesArray.json");
const { O_DIRECT } = require("constants");

//1+ an array of movies containing the movies with a short title (you define what short means)
let shortTitleMovies = movies.filter((movie) => movie.title.length < 7);
console.log("----- movies with a short title -----");
console.log(shortTitleMovies);

//2+ an array of movie titles with long movie titles
let longTitleMovies = movies.filter((movie) => movie.title.length >= 7);
console.log("----- long movie titles -----");
console.log(longTitleMovies);

//3- Count the number of movies made between 1980-1989 (including both the years)

console.log("----- made between 1980-1989 -----");
let moviesMadeIn = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
//console.log(moviesMadeIn.length);

//4- new array that has an extra key called tag.
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

console.log("----- extra key called tag -----");
let moviesRatingTag = movies.map(function (array) {
  if (array.rating < 4) {
    array.tag = "Bad";
  } else if (array.rating >= 4 && array.rating < 7) {
    array.tag = "Average";
  } else {
    array.tag = "Good";
  }
});

console.log(moviesRatingTag);

//5+ Using chaining, first filter the movies array to only contain the movies rated higher than 6.
//Now map the movies array to only the rating of the movies.

let moviesRatedMoreThanSix = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

//console.log("----- rated higher than 6, only the rating -----");
//console.log(moviesRatedMoreThanSix);

//6- Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
//
let keywords = ["surfer, alien, benjamin"];
//console.log("----- includes keyword -----");

//7- Create an array of movies where a word in the title is duplicated.
//Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

//console.log("----- duplicated words -----");

//8+ Calculate the average rating of all the movies using reduce. Optional
let onlyRatings = movies.map((movie) => movie.rating);
let ratingsAverage = (
  onlyRatings.reduce((total, rating) => total + rating) / movies.length
).toFixed(2);
//console.log("----- average rating of all the movies -----");
//console.log(ratingsAverage);

//9- Count the total number of Good, Average and Bad movies using reduce.
//A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
