const movies = require("./moviesArray.json");
const { O_DIRECT } = require("constants");

//1+ an array of movies containing the movies with a short title (you define what short means)
let shortTitleMovies = movies.filter((movie) => movie.title.length < 7);
console.log("----- movies with a short title -----");
//console.log(shortTitleMovies);

//2+ an array of movie titles with long movie titles
let longTitleMovies = movies.filter((movie) => movie.title.length >= 7);
console.log("----- long movie titles -----");
//console.log(longTitleMovies);

//3+- Count the number of movies made between 1980-1989 (including both the years)

console.log("----- made between 1980-1989 -----");
let moviesMadeIn = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
//console.log(moviesMadeIn.length);
// is it ok to do just with .length? Was trying with reduce() initially, but could not manage.

//4+ new array that has an extra key called tag.
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

console.log("----- extra key called tag -----");
let moviesRatingTag = movies.map(function (movie) {
  if (movie.rating < 4) {
    movie.tag = "Bad";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  } else {
    movie.tag = "Good";
  }
  return movie;
});
//console.log(moviesRatingTag);

//5+ Using chaining, first filter the movies array to only contain the movies rated higher than 6.
//Now map the movies array to only the rating of the movies.

let moviesRatedMoreThanSix = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
//console.log("----- rated higher than 6, only the rating -----");
//console.log(moviesRatedMoreThanSix);

//6+- Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
//
//let keywords = ["surfer, alien, benjamin"];
let keywordsRegEx = new RegExp(/\b(?:surfer|alien|benjamin)\b/gi);
let moviesMatchKeywords = movies.filter((movie) =>
  movie.title.match(keywordsRegEx)
);
console.log(moviesMatchKeywords);
console.log(moviesMatchKeywords.length);
//console.log("----- includes keyword -----");
// same concern about .length as in 3) ecercise.

//7+ Create an array of movies where a word in the title is duplicated.
//Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
let duplicateWordsRegEx = new RegExp(/\b(\w+)\b.*\b\1\b/);
let duplicatedWordMovies = movies.filter((movie) =>
  movie.title.match(duplicateWordsRegEx)
);
console.log("----- a word in the title is duplicated -----");
//console.log(duplicatedWordMovies);

//8+ Calculate the average rating of all the movies using reduce. Optional
let onlyRatings = movies.map((movie) => movie.rating);
let ratingsAverage = (
  onlyRatings.reduce((total, rating) => total + rating) / movies.length
).toFixed(2);
console.log("----- average rating of all the movies -----");
//console.log(ratingsAverage);

//9+- Count the total number of Good, Average and Bad movies using reduce.
//A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional

//using moviesRatingTag varray from nr.4 above
//let ratingsCounted = onlyRatings.reduce();

function goodMovies() {
  return moviesRatingTag.reduce(function (sum, movie) {
    if (movie.tag == "Good") return sum + 1;
    else return sum;
  }, 0);
}

function badMovies() {
  return moviesRatingTag.reduce(function (sum, movie) {
    if (movie.tag == "Bad") return sum + 1;
    else return sum;
  }, 0);
}

function averageMovies() {
  return moviesRatingTag.reduce(function (sum, movie) {
    if (movie.tag == "Average") return sum + 1;
    else return sum;
  }, 0);
}

// could not manage to put it all in 1  :((

function moviesCountedByRating() {
  let moviesCountedByRating = new Object();
  moviesCountedByRating["Good movies"] = goodMovies();
  moviesCountedByRating["Average movies"] = averageMovies();
  moviesCountedByRating["Bad movies"] = badMovies();
  return moviesCountedByRating;
}

// is the same name for function and variable bad?

console.log(moviesCountedByRating());
