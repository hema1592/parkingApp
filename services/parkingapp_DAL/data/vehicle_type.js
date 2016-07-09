var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addVehicleType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add vehicle type : ' +  req.params.newvehicletype);

        console.log("CALL spAdminAddVehicleType(" + connection.escape(req.params.newvehicletype) + ");");

        connection.query("CALL spAdminAddVehicleType(" + connection.escape(req.params.newvehicletype) + ");", function(err, rows){          
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