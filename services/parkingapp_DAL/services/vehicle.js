var vehicleRepo = require('../data/vehicle');

/*exports.addUserVehicleDetails = function (req, res) {
    console.log("Vehicle Service Contacted...");  
    try {
        if(typeof req.params.userid == 'undefined' || typeof req.params.vehicledimensionid == 'undefined' || typeof req.params.regnum == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.userid + " Vehicle Dimension DB Id : " + req.params.vehicledimensionid + " Vehicle Registration Number : " + req.params.regnum);

        vehicleRepo.addUserVehicleDetails(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};*/

exports.getListAllVehiclesByVehicleType = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehicletypeid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehicletypeid);

        vehicleRepo.getListAllVehiclesByVehicleType(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};

exports.getVehicleDescByVehicleMake = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehiclemake == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehiclemake);

        vehicleRepo.getVehicleDescByVehicleMake(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};

exports.getVehicleDetailsById = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehicleid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehicleid);

        vehicleRepo.getVehicleDetailsById(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};

exports.getVehicleMakeByVehicleType = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehicletype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehicletype);

        vehicleRepo.getVehicleMakeByVehicleType(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};

exports.getVehiclesByVehicleType = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehicletypeid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehicletypeid);

        vehicleRepo.getVehiclesByVehicleType(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};