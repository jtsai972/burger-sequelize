Use kqor20jfcj3i0azs;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured tinyint NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);