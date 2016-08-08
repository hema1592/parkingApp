var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    routes = require('./routes'),
    cors = require('cors');

var app = express();

//app.use(require('./middleware/client-url'));

app.use(bodyParser.json({ type: [ 'json', '+json' ] }));

/*// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}); */

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();

router.use('/location', routes.location);
router.use('/login', routes.login);
router.use('/parking', routes.parking);
router.use('/payment_method', routes.payment_method);
router.use('/seasonal_booking', routes.seasonal_booking);
router.use('/tariff', routes.tariff);
router.use('/user_type', routes.user_type);
router.use('/users', routes.users);
router.use('/uservehicle', routes.uservehicle);
//router.use('/vehicle', routes.vehicle);
router.use('/vehicle_type', routes.vehicle_type);
router.use('/vendor', routes.vendor);
router.use('/workdays', routes.workdays);

app.use(router);

app.use(function(req,res) {
    return res.status(404).end();
});

module.exports = app;