var router = require('express').Router(),
    service = require('../services/seasonal_booking');

router.get('/:sp_parkingid/:sp_vendorid/:sp_carid/:sp_bookingfrom/:sp_bookingto/:sp_workdaysid/:sp_paymentmethodid/:sp_paymentstatus', service.addSeasonalBookingDetails);

module.exports = router;