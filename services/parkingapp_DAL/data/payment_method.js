var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addPaymentMethodDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add payment method : ' + req.params.method_desc + " " + req.params.method_redirect_url);

        connection.query("CALL spAdminAddPaymentMethodDetails(" + connection.escape(req.params.method_desc) + "," + connection.escape(req.params.method_redirect_url) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null,response); 
            }
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.deletePaymentMethodDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);  

        console.log('Attempting to delete payment method : ' + req.params.method_id + " " + req.params.uid);
        
        console.log("CALL spAdminDeletePaymentMethodDetails(" + connection.escape(req.params.method_id) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");");
        
        connection.query("CALL spAdminDeletePaymentMethodDetails(" + connection.escape(req.params.method_id) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null,response); 
            }
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.updatePaymentMethodDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);  

        console.log('Attempting to update payment method : ' + req.params.paymentmethodid + " " + req.params.methodname + " " + req.params.methodurl);
        
        console.log("CALL spAdminUpdatePaymentMethodDetails(" + connection.escape(req.params.paymentmethodid) + "," + connection.escape(req.params.methodname) + "," + connection.escape(req.params.methodurl) + ");");
        
        connection.query("CALL spAdminUpdatePaymentMethodDetails(" + connection.escape(req.params.paymentmethodid) + "," + connection.escape(req.params.methodname) + "," + connection.escape(req.params.methodurl) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null,response); 
            }
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};