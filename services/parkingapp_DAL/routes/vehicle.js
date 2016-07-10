var router = require('express').Router(),
    service = require('../services/vehicle');

router.get('/types/:vehicletypeid', service.getListAllVehiclesByVehicleType);

router.get('/make/:vehiclemake', service.getVehicleDescByVehicleMake);

router.get('/:vehicleid', service.getVehicleDetailsById);

router.get('/type/:vehicletype', service.getVehicleMakeByVehicleType);

router.get('/all/:vehicletypeid', service.getVehiclesByVehicleType);

module.exports = router;