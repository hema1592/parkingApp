var router = require('express').Router(),
    service = require('../services/vehicle_type');

router.post('/:newvehicletype', service.addVehicleType);

router.delete('/:vehicletypeid/:uid/:upass', service.deleteVehicleType);

router.put('/:vehicletypeid/:newvehicletype', service.updateVehicleType);

router.get('/all', service.getListAllVehicleTypes);

router.get('/:id', service.getVehicleTypeById);

module.exports = router;