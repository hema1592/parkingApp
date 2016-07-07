var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addLocation = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add location : ' + req.params.loc_address + " " + req.params.loc_area + " " + req.params.loc_landmark + " " + req.params.loc_city);

        connection.query("CALL spAddLocationDetails(" + connection.escape(req.params.loc_address) + "," + connection.escape(req.params.loc_area) + "," + connection.escape(req.params.loc_landmark) + "," + connection.escape(req.params.loc_city) +");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows); 
                return res(null,response); 
            }
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};