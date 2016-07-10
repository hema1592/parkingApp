var router = require('express').Router(),
    service = require('../services/uservehicle');

router.post('/:userid/:vehicledimensionid/:regnum', service.addUserVehicleDetails);

router.delete('/:userid/:uid/:upass', service.deleteUserVehicleDetails);

router.put('/:uservehicleid/:userid/:carid/:vehicledimensionid/:regnum', service.updateUserVehicleDetails);

router.get('/:uservehicleid', service.getUserVehicleDetailsById);

module.exports = router;