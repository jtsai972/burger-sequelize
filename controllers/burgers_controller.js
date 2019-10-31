const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// * HANDLING GET REQUEST: return all burgers in the db
router.get("/", function(req, res) {
    burger.all(function(data){
      var handlebarsObj = {
        burgers: data
      };
      //console.log(handlebarsObj);
      res.render("index", handlebarsObj);
    })
})

// * HANDLING POST REQUEST: 
router.post("/api/burgers", function(req, res) {
  burger.create(req.body.name, function(result) {
    res.json({ id: result.insertId })
  })
});

// * HANDLING PUT REQUEST:
router.put("/api/burgers/:id", function(req, res) {
  burger.update(
    req.body, 
    req.params.id, 
    function(result) {
      return result.changedRows === 0 ? 
        res.status(404).end() : 
        res.status(200).end();
    })
});

// * HANDLING DELETE REQUEST:
router.delete("/api/burgers/:id", function(req, res) {
  burger.delete(req.params.id, function(result) {
    return result.changedRows === 0 ? 
        res.status(404).end() : 
        res.status(200).end();
  })
});


module.exports = router;