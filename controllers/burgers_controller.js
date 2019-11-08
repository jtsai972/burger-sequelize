var db = require("../models");
console.log(db.Burger);

module.exports = function(app) {
  // * HANDLING GET REQUEST: return all burgers in the db
  app.get("/", function(req, res) {
    db.Burger
      .findAll({})
      .then(function(data){
        var handlebarsObj = {
          burgers: data
        };
        res.render("index", handlebarsObj);
      })
  });
  
  // * HANDLING POST REQUEST: 
  app.post("/api/burgers", function(req, res) {
    db.Burger
      .create({burger_name: req.body.name})
      .then( function(result) {
        res.json({ id: result.insertId })
      })
  });
  
  // * HANDLING PUT REQUEST:
  app.put("/api/burgers/:id", function(req, res) {
    console.log("REQUEST: " + req.body);
    db.Burger.update(
      {devoured: 1},
      { where: {id: req.params.id} }
    )
      .then( function(result) {
        return result.changedRows === 0 ? 
          res.status(404).end() : 
          res.status(200).end();
      })
        
  });
  
  // * HANDLING DELETE REQUEST:
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger
      .destroy({where: {id: req.params.id}})
      .then( function(result) {
      return result.changedRows === 0 ? 
          res.status(404).end() : 
          res.status(200).end();
    })
  });
}
