var router = require('express').Router(),
    service = require('../services/location');

router.get('/:loc_address/:loc_area/:loc_landmark/:loc_city', service.addLocation);

module.exports = router;