var router = require('express').Router(),
    service = require('../services/seasonal_booking');

router.post('/:sp_parkingid/:sp_vendorid/:sp_carid/:sp_bookingfrom/:sp_bookingto/:sp_workdaysid/:sp_paymentmethodid/:sp_paymentstatus', service.addSeasonalBookingDetails);

router.delete('/:bookingid/:uid/:upass', service.deleteSeasonalBookingDetails);

router.put('/:bookingid/:parkingid/:vendorid/:usercarid/:fromtime/:totime/:workdaysid/:paymentmethodid/:paymentstatus', service.updateSeasonalBookingDetails);

module.exports = router;