var router = require('express').Router(),
    service = require('../services/vehicle_type');

router.get('/:newvehicletype', service.addVehicleType);

module.exports = router;