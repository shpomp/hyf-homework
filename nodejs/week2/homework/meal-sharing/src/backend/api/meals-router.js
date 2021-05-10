const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");


// QUERY: undefined, maxPrice, title, createdAfter, limit
router.get("/", async (req, res) => {
  console.log("Meals-router in use");
  console.log({"query_params":req.query});

  // UNDEFINED
  if (Object.keys(req.query).length === 0){
    res.send(meals);
    return;
  }

  // MAX PRICE
  if (req.query.maxPrice){
    if (isNaN(req.query.maxPrice)){
      res.status(400).send({result: `invalid maxPrice!`});
      return;

    }
    else { 
      const mealsMaxPrice = meals.filter((meal) => meal.price <= parseInt(req.query.maxPrice));
      mealsMaxPrice.length > 0? res.send(mealsMaxPrice) : res.status(400).send({result: `no meals under ${req.query.maxPrice} DKK`});
      return;
    }
   
  }
  // http://localhost:3000/api/meals?maxPrice=60

  // TITLE
  if (req.query.title){
    const mealsTitle = meals.filter((meal) => meal.title.toLowerCase().includes(req.query.title));
    mealsTitle.length > 0? res.send(mealsTitle) : res.status(400).send({result: "no meals found"});
    return;
  }
  // http://localhost:3000/api/meals?title=apple


 // CREATED AFTER
  if (req.query.createdAfter){
    const createdAfterDate = new Date(req.query.createdAfter);
    const mealsAfterDate = meals.filter((meal) => createdAfterDate <= new Date(meal.createdAt));
    mealsAfterDate.length > 0? res.send(mealsAfterDate) : res.status(400).send({result: "no meals found"});
    return;
  }
  // http://localhost:3000/api/meals?createdAfter=2019-04-05


  // LIMIT
  if (req.query.limit){
    if (isNaN(req.query.limit)){
      res.status(400).send({result: `invalid limit!`});
      return;
    }
    else {
      const limit = parseInt(req.query.limit);
      meals.length >= limit ? res.send(meals.slice(0,limit)) : res.status(400).send({result: `limit too high!`});
      return;
    }
    
  }
  // http://localhost:3000/api/meals?limit=2

  //res.send({error: "no valid query params", meals: meals});
  
});



router.get("/:id", async (req, res) => {
  const mealID = parseInt(req.params.id);
  console.log(mealID);

  if (!mealID || isNaN(mealID)) {
    res.status(400).send({error: "invalid ID!"});
    return;

  }
  else {
    const mealByID = meals.filter(meal => meal.id === mealID)
    mealByID.length > 0? res.send(mealByID[0]) : res.status(400).send({result: "no meals found"});
  }
  // mealByID[0] to pass the test
});

module.exports = router;
