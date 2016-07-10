var router = require('express').Router(),
    service = require('../services/parking');

router.post('/:parking_name/:parking_vendor_id/:parking_loc_id/:parking_tariff_id/:parking_slots/:parking_from_time/:parking_to_time/:parking_workdays_id/:parking_managed_status', service.addParkingLotDetails);

router.delete('/:parkingid/:uid/:upass', service.deleteParkingLotDetails);

router.put('/:parkingid/:vendorid/:parkingname/:locationid/:tariffid/:totalslots/:fromtime/:totime/:workdaysid/:managedstatus', service.updateParkingLotDetails);

router.get('/:parkingid', service.getParkingLotDetailsById);

module.exports = router;