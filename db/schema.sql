CREATE DATABASE cookbook_db;

USE cookbook_db;

CREATE TABLE recipes (
  id INT(11) UNSIGNED auto_increment,
  recipe_name VARCHAR(255),
  description VARCHAR(255),
  img_url VARCHAR(255),
  ingredients JSON,
  instructions JSON,
  PRIMARY KEY (id)
);