const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (req, res) => {
    console.log("Reviews-router in use");
    res.send(reviews);
});
// http://localhost:3000/api/reviews

router.get("/:id", async (req, res) => {
    const revID = parseInt(req.params.id);
    console.log(revID);
  
    if (!revID || isNaN(revID)) {
        res.status(400).send({error: "invalid ID!"});
    }
    else {
      const revByID = reviews.filter(review => review.id == revID);
      revByID.length > 0? res.send(revByID[0]) : res.status(400).send({result: "no review found"});
    }
    // revByID[0] to pass the test
  });
  // http://localhost:3000/api/reviews/4


module.exports = router;
