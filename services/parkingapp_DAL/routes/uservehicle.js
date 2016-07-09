var router = require('express').Router(),
    service = require('../services/uservehicle');

router.get('/:userid/:vehicledimensionid/:regnum', service.addUserVehicleDetails);

module.exports = router;