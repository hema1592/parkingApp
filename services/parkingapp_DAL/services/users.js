var usersRepo = require('../data/users');

exports.getUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");
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
    console.log("\nUser Service Contacted...");
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

exports.addUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.username == 'undefined' || typeof req.params.phoneno == 'undefined' || typeof req.params.firstname == 'undefined' || typeof req.params.lastname == 'undefined' || typeof req.params.email == 'undefined' || typeof req.params.userpass == 'undefined' || typeof req.params.usertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Username : " + req.params.username + " Phone# : " + req.params.phoneno + " Firstname : " + req.params.firstname + " Lastname : " + req.params.lastname + " Email Id : " + req.params.email + " User Type : " + req.params.usertype);

        usersRepo.addUserDetails(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.deleteUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.userid == 'undefined' || typeof req.params.uid == 'undefined' || typeof req.params.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.params.userid + " User UID : " + req.params.uid);

        usersRepo.deleteUserDetails(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.updateUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.userid == 'undefined' || typeof req.params.username == 'undefined' || typeof req.params.phoneno == 'undefined' || typeof req.params.firstname == 'undefined' || typeof req.params.lastname == 'undefined' || typeof req.params.email == 'undefined' || typeof req.params.userpass == 'undefined' || typeof req.params.usertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.params.userid +" Username : " + req.params.username + " Phone# : " + req.params.phoneno + " Firstname : " + req.params.firstname + " Lastname : " + req.params.lastname + " Email Id : " + req.params.email + " User Type : " + req.params.usertype);

        usersRepo.updateUserDetails(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.getUserDetailsByUserType = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.usertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Type : " + req.params.usertype);

        usersRepo.getUserDetailsByUserType(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};