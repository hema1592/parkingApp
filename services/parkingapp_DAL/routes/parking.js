var router = require('express').Router(),
    service = require('../services/parking');

router.get('/:parking_name/:parking_vendor_id/:parking_loc_id/:parking_tariff_id/:parking_slots/:parking_from_time/:parking_to_time/:parking_workdays_id/:parking_managed_status', service.addParkingLotDetails);

module.exports = router;