var express = require("express");
var router = express.Router();
var recipe = require("../models/recipe");
var video = require("../models/video");

var path = require("path");

// HTML Routes
// ============================================================
// This route works!
router.get("/", function(req, res) {
	recipe.all(function(data){

		res.redirect("/index.html"); // Temporarily redirect to 404 page
		// res.render("index", {recipes: data, videos: video});
	});
});

router.get("/index.html", function(req, res) {
	recipe.all(function(data){
		res.sendFile(path.join(__dirname, "../public/404.html"));
	});
});

// API Routes
// =====================================================

router.get("/api/search/:query", function(req, res){
	recipe.search(req.params.query, function(data){
		console.log(data);

		res.render("search_results", {recipes: data});
	});
});

// Displays Recipe page with details related to the selected recipe
router.get("/api/recipe/:id", function(req, res) {
	recipe.one(req.params.id, function(data){

		const recipe = {
			recipe_name: data[0].recipe_name,
			description: data[0].description,
			img_url: data[0].img_url,
			ingredients: JSON.parse(data[0].ingredients),
			instructions: JSON.parse(data[0].instructions)
		};

		res.render("view_recipe", recipe);
	});
});

// // This route works!
// router.get("/add-a-recipe", function(req, res) {
// 	recipe.all(function(data){
// 		res.sendFile(path.join(__dirname, "../public/add.html"));
// 	});
// });


// router.post("/api/new-recipe", function(req, res) {
// 	recipe.add(req.body, function(data){
// 		console.log('Record added successfully!');
// 		res.redirect("/");
// 	});
// });

module.exports = router;
