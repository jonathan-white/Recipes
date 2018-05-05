var orm = require("../config/orm");

var recipe = {
	all: function(cb){
		orm.selectAll("recipes",function(res){
			cb(res);
		});
	},
	one: function(id, cb){
		orm.selectOne("recipes", id, function(res){
			cb(res);
		});
	},
	add: function(newRecipe, cb){
		orm.insertOne("recipes", newRecipe, function(res){
			cb(res);
		});
	},
	search: function(query, cb){
		orm.searchFor("recipes","recipe_name",query, function(res){
			cb(res);
		});
	}
};

module.exports = recipe;