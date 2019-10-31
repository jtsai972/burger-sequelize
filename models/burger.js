const orm = require("../config/orm");

var burger = {
    //This is for printing all the burgers
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            //return the results to the function that calls this
            cb(res);
        });
    },
    // This is for creating a new burgers
    create: function(newBurger, cb){
        orm.insertOne("burgers", newBurger, function(res) {
            cb(res);
        });
    },
    // This is for updating the burgers eaten status
    // Could change this to update burger name
    update: function(isEaten, id, cb){
        orm.updateOne("burgers", isEaten.devoured, id, function(res) {
            cb(res);
        });
    },
    // This is for deleting a burger
    delete: function(id, cb){
        orm.deleteOne("burgers", id, function(res) {
            cb(res);
        });
    }
}

module.exports=burger;