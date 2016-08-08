var parkingRepo = require('../data/parking');

exports.addParkingLotDetails = function (req, res) {
    console.log("\nParking Service Contacted...");  
    try {
        if(typeof req.params.parking_name == 'undefined' || typeof req.params.parking_vendor_id == 'undefined' || typeof req.params.parking_loc_id == 'undefined' || typeof req.params.parking_tariff_id == 'undefined'|| typeof req.params.parking_slots == 'undefined' || typeof req.params.parking_from_time == 'undefined' || typeof req.params.parking_to_time == 'undefined' || typeof req.params.parking_workdays_id == 'undefined' || typeof req.params.parking_managed_status == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Parking Name : " + req.params.parking_name + " Vendor Id : " + req.params.parking_vendor_id + " Location Id : " + req.params.parking_loc_id + " Tariff Id : " + req.params.parking_tariff_id + " Total Slots : " + req.params.parking_slots + " From Time : " + req.params.parking_from_time + " To Time : " + req.params.parking_to_time + " Workdays Id : " + req.params.parking_workdays_id + " Managed Status : " + req.params.parking_managed_status);
        parkingRepo.addParkingLotDetails(req, function (err, result) {            
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
        console.log("parking Over and out..");
    }
};

exports.deleteParkingLotDetails = function (req, res) {
    console.log("\nParking Service Contacted...");  
    try {
        if(typeof req.params.parkingid == 'undefined' || typeof req.params.uid == 'undefined' || typeof req.params.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Parking Id : " + req.params.parkingid + " User Id : " + req.params.uid);
        parkingRepo.deleteParkingLotDetails(req, function (err, result) {            
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
        console.log("parking Over and out..");
    }
};

exports.updateParkingLotDetails = function (req, res) {
    console.log("\nParking Service Contacted...");  
    try {
        if(typeof req.params.parkingid == 'undefined' || typeof req.params.vendorid == 'undefined' || typeof req.params.parkingname == 'undefined' || typeof req.params.locationid == 'undefined'|| typeof req.params.tariffid == 'undefined' || typeof req.params.totalslots == 'undefined' || typeof req.params.fromtime == 'undefined' || typeof req.params.totime == 'undefined' || typeof req.params.workdaysid == 'undefined' || typeof req.params.managedstatus == 'undefined') {
            return res.status(400).end();
        }   

        console.log("Service Request Parking Id : " + req.params.parkingid + " Vendor Id : " + req.params.vendorid + " Parking Name : " + req.params.parkingname + " Location Id : " + req.params.locationid + " Tariff Id : " + req.params.tariffid + " Total Slots : " + req.params.totalslots + " From Time : " + req.params.fromtime + " To Time : " + req.params.totime + " Workdays Id : " + req.params.workdaysid + " Managed Status : " + req.params.managedstatus);
       
        parkingRepo.updateParkingLotDetails(req, function (err, result) {            
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
        console.log("parking Over and out..");
    }
};

exports.getParkingLotDetailsById = function (req, res) {
    console.log("\nParking Service Contacted...");  
    try {
        if(typeof req.params.parkingid == 'undefined') {
            return res.status(400).end();
        }   

        console.log("Service Request Parking Id : " + req.params.parkingid);
       
        parkingRepo.getParkingLotDetailsById(req, function (err, result) {            
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
        console.log("parking Over and out..");
    }
};