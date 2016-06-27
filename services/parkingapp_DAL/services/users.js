var usersRepo = require('../data/users');

exports.getUserDetails = function (req, res) {
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        usersRepo.getUserDetails(req, function (err, result) {            
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
        console.log("getUserDetails Over and out..");
    }
};

exports.getUserDetailsById = function (req, res) {
    try {
        if(!req.params.id) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : " + req.params.id);
        usersRepo.getUserDetailsById (req.params.id, function (err, result) {
            //console.log("Request returned some value. Res : " + res + " Result : " + result);
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();                
            }          
            console.log("Status: Success | Status Code: 200 | " + result);   
            return res.status(200).set('Content-Type', 'application/json').send(result).end();      
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("getUserDetailsById Over and out..");
    }
};