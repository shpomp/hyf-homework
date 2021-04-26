const express = require("express");
const app = express();

// import data here
// Remember: Ensure you haved done a require on the meals and reservations json files

const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});


// /meals: Respond with the json for all the meals. 
// For each meal, if there are reviews matching it's meal ID, add these reviews 
// to each meal in the form of an array. 
// For meals that do not have any reviews, 
// the "reviews" property will be an empty array. 
const mealsAndReviews = meals.map(meal => {
  meal.reviews = reviews.filter(review => review.meal_id === meal.id);
  return meal;
});

app.get("/meals", async (request, response) => {
  response.send(mealsAndReviews);
});


// /cheap-meals: Respond with the json for all the meals (including it's reviews) 
// that are cheap (you define what a cheap meal is)
const cheapMeals = mealsAndReviews.filter(meal => meal.price < 50);
  
app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeals);
});


// /large-meals Respond with the json for all the meals 
// (including it's reviews) that can fit lots of people
const largeMeals = mealsAndReviews.filter(meal => meal.max_guests > 5);

app.get("/large-meals", async (request, response) => {
  response.send(largeMeals);
});


// /meal: Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const random = Math.floor(Math.random() * mealsAndReviews.length);
  response.send(mealsAndReviews[random]);
});


// /reservations: Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});


// /reservation: Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const random = Math.floor(Math.random() * reservations.length);
  response.send(reservations[random]);
});


module.exports = app;
