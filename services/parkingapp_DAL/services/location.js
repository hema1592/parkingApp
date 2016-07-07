var locationRepo = require('../data/location');

exports.addLocation = function (req, res) {
    console.log("Location Service Contacted...");  
    try {
        if(!req.params.loc_address || !req.params.loc_area || !req.params.loc_landmark || !req.params.loc_city) {
            return res.status(400).end();
        }   
        console.log("Service Request Location Address : " + req.params.loc_address + " Area : " + req.params.loc_area + " Landmark : " + req.params.loc_landmark + " City : " + req.params.loc_city);
        locationRepo.addLocation(req, function (err, result) {            
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
        console.log("location Over and out..");
    }
};