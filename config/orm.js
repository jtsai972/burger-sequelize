const connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        //SELECT ALL
        connection.query(
            "SELECT * FROM ??", 
            table, // this is the table name (burgers)
            function(err, result) {
                if (err) throw err;
                //Setting the variable cb to the value of result and returning it to the function that called this one.
                cb(result);
            }
        )

    },
    insertOne: function(table, newBurger, cb) {
        //INSERT INTO
        connection.query(
            "INSERT INTO ?? (burger_name) VALUES (?)",
			// ["burgers", new burger we're adding ]
            [table, newBurger], 
            function(err, result) {
                if(err) throw err;
                //Setting the variable cb to the value of result and returning it to the function that called this one.
                cb(result);
            }
        )

    },
    updateOne: function(table, isEaten, id, cb) {
        // console.log("In orm: " + isEaten + " " + id);
        //UPDATE SET
        connection.query(
            "UPDATE ?? SET ? WHERE ?",
			//["burgers", "set if eaten" for the id of the burger clicked]
            [ table, {devoured: isEaten}, {id: id} ], 
            function(err, result) {
                if(err) throw err;
                //Setting the variable cb to the value of result and returning it to the function that called this one.
                cb(result);
            }
        )
    },
    deleteOne: function(table, id, cb) {
        //DELETE BURGER
        connection.query(
            "DELETE FROM ?? WHERE ?",
			//["burgers", "set if eaten" for the id of the burger clicked]
            [ table, {id: id} ], 
            function(err, result) {
                if(err) throw err;
                //Setting the variable cb to the value of result and returning it to the function that called this one.
                cb(result);
            }
        )
    }
};

module.exports = orm;