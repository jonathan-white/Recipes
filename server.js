
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 6700;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var recipes = [
	{
		name: "Spicy Chicken",
		desc: "A delicious description of the recipe goes here...",
		img: "https://c.stocksy.com/a/ZwD800/z0/1960227.jpg",
		ingredients: [
			{
				name: "chicken",
				quantity: "1 pound",
			},
			{
				name: "paprika",
				quantity: "1 teaspoon",
			},
			{
				name: "seasoning salt",
				quantity: "1 tablespoon",
			}
		],
		calories: 800
	},
	{
		name: "Roasted Tomatoes with Tagliatelle Pasta",
		desc: "A delicious description of the recipe goes here...",
		img: "https://c.stocksy.com/a/ZwD800/z0/1960227.jpg",
		ingredients: [
			{
				name: "chicken",
				quantity: "1 pound",
			},
			{
				name: "paprika",
				quantity: "1 teaspoon",
			},
			{
				name: "seasoning salt",
				quantity: "1 tablespoon",
			}
		],
		calories: 800
	}

];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all recipes
app.get("/recipes", function(req, res) {
  return res.json(recipes);
});

// Displays a single recipe, or returns false
app.get("/recipes/:id", function(req, res) {
  var chosen = parseInt(req.params.id);

  if(isNaN(chosen)){
  	return res.end("No match found!");
  }
  console.log(chosen);

  for (var i = 0; i < recipes.length; i++) {
    if (chosen === i) {
      return res.json(recipes[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/recipes", function(req, res) {
  var newrecipe = req.body;

  console.log(newrecipe);

  recipes.push(newrecipe);

  res.json(newrecipe);
});

app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
