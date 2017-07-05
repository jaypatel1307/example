const restify = require("restify");

var sequilize = require('./db').getDb();

var User = require('./models/users')(sequilize);

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

var index = require('./routes/index')(server,User);

/*server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);

    return next();
});*/
/*

server.get('/', index.get);
server.post('/', index.post);
server.put('/', index.put);
server.del('/', index.del);
*/


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

