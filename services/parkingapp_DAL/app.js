var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    routes = require('./routes');

var app = express();
app.use(bodyParser.json({ type: [ 'json', '+json' ] }));

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