// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 6700;
// Sets up the Express App
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use Recipe Routes
var routes = require("./controllers/recipe_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
