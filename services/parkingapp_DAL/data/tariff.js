var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addTariffDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add tariff : ' + req.params.locationid + " " + req.params.vehicletypeid + " " + req.params.tariffamount);

        console.log("CALL spAddTariffDetails(" + connection.escape(req.params.locationid) + "," + connection.escape(req.params.vehicletypeid) + "," + connection.escape(req.params.tariffamount) + ");");

        connection.query("CALL spAddTariffDetails(" + connection.escape(req.params.locationid) + "," + connection.escape(req.params.vehicletypeid) + "," + connection.escape(req.params.tariffamount) + ");", function(err, rows){          
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