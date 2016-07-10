var router = require('express').Router(),
    service = require('../services/location');

router.post('/:loc_address/:loc_area/:loc_landmark/:loc_city', service.addLocation);

router.delete('/:locationid/:uid/:upass', service.deleteLocation);

router.put('/:locationid/:loc_address/:loc_area/:loc_landmark/:loc_city', service.updateLocation);

router.get('/:locationid', service.getLocationById);

module.exports = router;