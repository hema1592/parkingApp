var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addUserVehicleDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add user type : ' +  req.params.userid + " " + req.params.vehicledimensionid + " " + req.params.regnum);

        console.log("CALL spAddUserVehicleDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.vehicledimensionid) + "," + connection.escape(req.params.regnum) + ");");

        connection.query("CALL spAddUserVehicleDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.vehicledimensionid) + "," + connection.escape(req.params.regnum) + ");", function(err, rows){          
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