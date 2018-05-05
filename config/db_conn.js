// Pull in database connection details from .env file
var db = {
	host: process.env.DATABASE_HOST,
	port: parseInt(process.env.DATABASE_PORT),
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
};

module.exports = db;