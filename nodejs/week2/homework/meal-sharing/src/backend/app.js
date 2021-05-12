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





