var loginRepo = require('../data/login');

exports.login = function (req, res) {
    console.log(JSON.stringify(req));
    /*try {
        if(!req.params.user_id || !req.params.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.params.user_id + " Password : " + req.params.user_pass);
        loginRepo.login(mode, req.params.user_id, req.params.user_pass, function (err, result) {            
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
        console.log("login Over and out..");
    }*/
};