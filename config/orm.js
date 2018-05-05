var connection = require("../config/connection");

var orm = {
	selectAll: function(db_table, cb){
		connection.query("SELECT * FROM "+ db_table +";", function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	selectOne: function(db_table, id, cb){
		connection.query("SELECT * FROM "+ db_table +" WHERE id= ? ;", id, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(db_table, userInput, cb){
		connection.query("INSERT INTO "+ db_table +" SET ? ;", userInput, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	searchFor: function(db_table, searchCol, userInput, cb){
		var queryString = "SELECT * FROM " + db_table + " WHERE "+ searchCol +" LIKE ?;";
		connection.query(queryString, "%"+userInput+"%", function(err, result){
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;