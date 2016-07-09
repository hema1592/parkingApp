var uservehicleRepo = require('../data/uservehicle');

exports.addUserVehicleDetails = function (req, res) {
    console.log("User Vehicle Service Contacted...");  
    try {
        if(typeof req.params.userid == 'undefined' || typeof req.params.vehicledimensionid == 'undefined' || typeof req.params.regnum == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.userid + " Vehicle Dimension DB Id : " + req.params.vehicledimensionid + " Vehicle Registration Number : " + req.params.regnum);

        uservehicleRepo.addUserVehicleDetails(req, function (err, result) {            
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