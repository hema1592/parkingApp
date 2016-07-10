var vehicletypeRepo = require('../data/vehicle_type');

exports.addVehicleType = function (req, res) {
    console.log("Vehicle Type Service Contacted...");  
    try {
        if(typeof req.params.newvehicletype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle Type : " + req.params.newvehicletype);

        vehicletypeRepo.addVehicleType(req, function (err, result) {            
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
        console.log("vehicle type Over and out..");
    }
};

exports.deleteVehicleType = function (req, res) {
    console.log("Vehicle Type Service Contacted...");  
    try {
        if(typeof req.params.vehicletypeid == 'undefined' || typeof req.params.uid == 'undefined' || typeof req.params.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle Type Id : " + req.params.vehicletypeid + " User Id : " + req.params.uid);

        vehicletypeRepo.deleteVehicleType(req, function (err, result) {            
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
        console.log("vehicle type Over and out..");
    }
};

exports.updateVehicleType = function (req, res) {
    console.log("Vehicle Type Service Contacted...");  
    try {
        if(typeof req.params.vehicletypeid == 'undefined' || typeof req.params.newvehicletype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle Type Id : " + req.params.vehicletypeid + " New Vehicle Type : " + req.params.newvehicletype);

        vehicletypeRepo.updateVehicleType(req, function (err, result) {            
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
        console.log("vehicle type Over and out..");
    }
};

exports.getListAllVehicleTypes = function (req, res) {
    console.log("Vehicle Type Service Contacted...");  
    try {
    
        console.log("Service Request Vehicle Type : all");

        vehicletypeRepo.getListAllVehicleTypes(req, function (err, result) {            
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
        console.log("vehicle type Over and out..");
    }
};

exports.getVehicleTypeById = function (req, res) {
    console.log("Vehicle Type Service Contacted...");  
    try {
        if(typeof req.params.vehicletypeid == 'undefined') {
            return res.status(400).end();
        }  
        console.log("Service Request Vehicle Type : " + req.params.vehicletypeid);

        vehicletypeRepo.getVehicleTypeById(req, function (err, result) {            
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
        console.log("vehicle type Over and out..");
    }
};