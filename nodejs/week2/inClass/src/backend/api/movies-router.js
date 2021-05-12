const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");


router.get("/", async (request, response) => {

  // Returns all movies with year between beginYear and endYear
  // movies?beginYear=<beginYear>&endYear=<endYear>
  if (request.query.beginYear && request.query.endYear){
    const beginYear = parseInt(request.query.beginYear);
    const endYear = parseInt(request.query.endYear);
    const moviesYear = movies.filter((movie) => movie.year >= beginYear && 
      movie.year <= endYear
    );
    const sortByYear = moviesYear.sort((a, b) => a.year - b.year);

    // Returns all movies with year between beginYear and endYear that are also of rating minRating or better
    // http://localhost:3000/api/movies?beginYear=1987&endYear=1990&minRating=7
    if (request.query.minRating){
      const minRating = parseInt(request.query.minRating);
      const moviesYearRating = moviesYear.filter((movie) => movie.rating >= minRating);
      const sortByRating = moviesYearRating.sort((a, b) => a.rating - b.rating);
      response.send({data: sortByRating});

    }
    else {   
      response.send({data: sortByYear});
    }
    
    
  }
  else {  
    response.send({data: movies});
  }
  console.log(request.query);

});

// need to establish good logic and also check isNan!

module.exports = router;

// Return a single movie with that matching ID
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  // if (id && !isNaN(id)){
  //   const moviesByID = movies.filter((movie) => movie.id === id);
  //   // how to check if id does not exist?
  //   console.log(moviesByID[0]);
  //   response.send({data:moviesByID[0]});
  // }
  // else {
  //   response.send({});
  // }
  response.send({data: {...movies.filter((movie) => movie.id === id)}})
  

});


router.get("/year", async (request, response) => {
  const year = parseInt(request.query.year);
  if (!year || isNaN(year)) {
    response.send({})  
  }
  response.send(movies.filter((movie) => movie.year === year));
});