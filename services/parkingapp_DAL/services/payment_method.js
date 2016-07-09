var paymentMethodRepo = require('../data/payment_method');

exports.addPaymentMethodDetails = function (req, res) {
    console.log("Payment Method Service Contacted...");  
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