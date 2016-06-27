var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    routes = require('./routes');

var app = express();
app.use(bodyParser.json({ type: [ 'json', '+json' ] }));

var router = express.Router();

router.use('/users', routes.users);

app.use(router);

app.use(function(req,res) {
    return res.status(404).end();
});

module.exports = app;