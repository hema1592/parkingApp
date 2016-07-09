var seasonalBookingRepo = require('../data/seasonal_booking');

exports.addSeasonalBookingDetails = function (req, res) {
    console.log("Seasonal Booking Service Contacted...");  
    try {
        if(typeof req.params.sp_parkingid == 'undefined' || typeof req.params.sp_vendorid == 'undefined' || typeof req.params.sp_carid == 'undefined' || typeof req.params.sp_bookingfrom == 'undefined' || typeof req.params.sp_bookingto == 'undefined' || typeof req.params.sp_workdaysid == 'undefined' || typeof req.params.sp_paymentmethodid == 'undefined' || typeof req.params.sp_paymentstatus == 'undefined' ) {
            return res.status(400).end();
        }   
        console.log("Service Request Seasonal Booking Parking Id : " + req.params.sp_parkingid + " Vendor Id : " + req.params.sp_vendorid + " Car Id : " + req.params.sp_carid + " Booking From : " + req.params.sp_bookingfrom + " Booking To : " + req.params.sp_bookingto + " Workdays Id : " + req.params.sp_workdaysid + " Payment Method Id : " + req.params.sp_paymentmethodid + " Payment Status : " + req.params.sp_paymentstatus);
        seasonalBookingRepo.addSeasonalBookingDetails(req, function (err, result) {            
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if(result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {    
        console.log("seasonal booking Over and out..");
    }
};