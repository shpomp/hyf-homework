const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");


router.get("/", async (req, res) => {
    console.log("Reservations-router in use");
    res.send(reservations);
});
// http://localhost:3000/api/reservations

router.get("/:id", async (req, res) => {
    const resID = parseInt(req.params.id);
    console.log(resID);
  
    if (!resID) {
        res.status(400).send({error: "invalid ID!"});
    }
    else {
      const resByID = reservations.filter(reservation => reservation.id == resID);
      resByID.length > 0? res.send(resByID[0]) : res.status(400).send({result: "no reservation found"});
    }
    // resByID[0] to pass the test 
  });
  // http://localhost:3000/api/reservations/2

  module.exports = router;
