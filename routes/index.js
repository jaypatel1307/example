
var utility = require('../utility');
var validationSchema = require('../validation_schema');


module.exports = function(server, User){

    server.get("/", function (req,res,next) {
        User.findAll({}).then(function (data) {
            return res.send(data);
        }).catch(function (err) {
            return res.send(err);
        });
    });

    server.post("/", utility.validateRequest(validationSchema.user),  function (req,res,next) {
        var firstname = req.body.firstName;
        var lastname = req.body.lastName;

        var newUser = User.build({

          FirstName : firstname,
          LastName : lastname
        });

        newUser.save().then(function (data) {
            res.send(data);
        }).catch(function (err) {
            res.send(err);
        });

    });

    server.put("/", function (req,res,next) {

    });

    server.del("/", function (req,res,next) {

    });

    return this;
}