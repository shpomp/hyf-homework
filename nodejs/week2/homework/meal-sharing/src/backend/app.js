const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reservationsRouter = require("./api/reservations-router");
const reviewsRouter = require("./api/reviews-router");


// app.use binds middleware to your application. 
// You can give app.use a path and router. 
// The mini router will take care of all requests with the path
app.use("/api/meals", mealsRouter);
app.use("/api/reservations", reservationsRouter);
app.use("/api/reviews", reviewsRouter);

module.exports = app;




// app.get("/", async (request, response) => {
//   response.send("Meal Sharing Web App");
// });



// const mealsAndReviews = meals.map(meal => {
//   meal.reviews = reviews.filter(review => review.meal_id === meal.id);
//   return meal;
// });

// app.get("/meals", async (request, response) => {
//   response.send(mealsAndReviews);
// });




// const cheapMeals = mealsAndReviews.filter(meal => meal.price < 50);
  
// app.get("/cheap-meals", async (request, response) => {
//   response.send(cheapMeals);
// });




// const largeMeals = mealsAndReviews.filter(meal => meal.max_guests > 5);

// app.get("/large-meals", async (request, response) => {
//   response.send(largeMeals);
// });


// app.get("/meal", async (request, response) => {
//   const random = Math.floor(Math.random() * mealsAndReviews.length);
//   response.send(mealsAndReviews[random]);
// });


// app.get("/reservations", async (request, response) => {
//   response.send(reservations);
// });


// app.get("/reservation", async (request, response) => {
//   const random = Math.floor(Math.random() * reservations.length);
//   response.send(reservations[random]);
// });


