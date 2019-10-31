DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured tinyint NOT NULL DEFAULT 0, 
    -- isRated tinyint NOT NULL DEFAULT 0, 
    -- rating tinyint NULL,
    -- isReviewed tinyint NOT NULL DEFAULT 0,
    -- review VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;