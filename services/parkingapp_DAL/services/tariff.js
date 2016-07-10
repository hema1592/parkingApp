var tariffRepo = require('../data/tariff');

exports.addTariffDetails = function (req, res) {
    console.log("Tariff Service Contacted...");  
    try {
        if(typeof req.params.locationid == 'undefined' || typeof req.params.vehicletypeid == 'undefined' || typeof req.params.tariffamount == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Tariff Location Id : " + req.params.locationid + " Vehicle Type Id : " + req.params.vehicletypeid + " Tariff Amount : " + req.params.tariffamount);

        tariffRepo.addTariffDetails(req, function (err, result) {            
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
        console.log("tariff Over and out..");
    }
};

exports.deleteTariffDetails = function (req, res) {
    console.log("Tariff Service Contacted...");  
    try {
        if(typeof req.params.tariffid == 'undefined' || typeof req.params.uid == 'undefined' || typeof req.params.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Tariff Id : " + req.params.tariffid + " User Id : " + req.params.uid);

        tariffRepo.deleteTariffDetails(req, function (err, result) {            
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
        console.log("tariff Over and out..");
    }
};

exports.updateTariffDetails = function (req, res) {
    console.log("Tariff Service Contacted...");  
    try {
        if(typeof req.params.tariffid == 'undefined' || typeof req.params.locationid == 'undefined' || typeof req.params.vehicletypeid == 'undefined' || typeof req.params.tariffamount == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Tariff id " + req.params.tariffid + " Location Id : " + req.params.locationid + " Vehicle Type Id : " + req.params.vehicletypeid + " Tariff Amount : " + req.params.tariffamount);

        tariffRepo.updateTariffDetails(req, function (err, result) {            
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
        console.log("tariff Over and out..");
    }
};

exports.getTariffDetailsById = function (req, res) {
    console.log("Tariff Service Contacted...");  
    try {
        if(typeof req.params.tariffid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Tariff id " + req.params.tariffid);

        tariffRepo.getTariffDetailsById(req, function (err, result) {            
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
        console.log("tariff Over and out..");
    }
};