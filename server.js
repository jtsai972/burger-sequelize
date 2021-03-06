// * Requires
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller")
var db = require("./models")

/* ----------------------------------------------
 * SET UP App
 * ---------------------------------------------- */
var PORT = process.env.PORT || 8080;

// * App creation
var app = express();

// * Serving public files
app.use(express.static("public"));

// * App parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Adding routes
routes(app);

/* ----------------------------------------------
 * SET UP Handlebars
 * ---------------------------------------------- */
// * Adding handlebars to the app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/* ----------------------------------------------
 * START Server
 * ---------------------------------------------- */

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });
});
