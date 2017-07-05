//Including dependency
var Sequelize = require("sequelize");

function Db(){}
Db.getDb = function() {
//Setting up the config
    var sequelize = new Sequelize('example', 'jay', 'jay', {
        host: "192.168.100.204",
        port: 3306,
        dialect: 'mysql'
    });


//Checking connection status
    sequelize.authenticate()
        .then(function () {
            console.log("CONNECTED! ");
        })
        .catch(function (err) {
            console.log(err);
        })
        .done();

    return sequelize;
}

module.exports = Db;