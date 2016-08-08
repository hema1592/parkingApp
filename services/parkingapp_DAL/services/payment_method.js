var paymentMethodRepo = require('../data/payment_method');

exports.addPaymentMethodDetails = function (req, res) {
    console.log("\nPayment Method Service Contacted...");  
    try {
        if(typeof req.params.method_desc == 'undefined' || typeof req.params.method_redirect_url == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Payment Method Description : " + req.params.method_desc + " Redirect URL : " + req.params.method_redirect_url);
        paymentMethodRepo.addPaymentMethodDetails(req, function (err, result) {            
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
        console.log("payment method Over and out..");
    }
};

exports.deletePaymentMethodDetails = function (req, res) {
    console.log("\nPayment Method Service Contacted...");  
    try {
        if(typeof req.params.method_id == 'undefined' || typeof req.params.uid == 'undefined' || typeof req.params.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Payment Method Id : " + req.params.method_id + " User Id : " + req.params.uid);
        paymentMethodRepo.deletePaymentMethodDetails(req, function (err, result) {            
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
        console.log("payment method Over and out..");
    }
};

exports.updatePaymentMethodDetails = function (req, res) {
    console.log("\nPayment Method Service Contacted...");  
    try {
        if(typeof req.params.paymentmethodid == 'undefined' || typeof req.params.methodname == 'undefined' || typeof req.params.methodurl == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Payment Method Id : " + req.params.paymentmethodid + " Method Name : " + req.params.methodname + " Method URL : " + req.params.methodurl);
        paymentMethodRepo.updatePaymentMethodDetails(req, function (err, result) {            
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
        console.log("payment method Over and out..");
    }
};