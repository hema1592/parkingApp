var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addParkingLotDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add parking : ' + req.params.parking_name + req.params.parking_vendor_id + req.params.parking_loc_id + req.params.parking_tariff_id + req.params.parking_slots + req.params.parking_from_time + req.params.parking_to_time + req.params.parking_workdays_id + req.params.parking_managed_status);

        connection.query("CALL spAddParkingLotDetails("  + connection.escape(req.params.parking_name) + "," + connection.escape(req.params.parking_vendor_id) + "," + connection.escape(req.params.parking_loc_id) + "," + connection.escape(req.params.parking_tariff_id) + "," + connection.escape(req.params.parking_slots) + "," + connection.escape(req.params.parking_from_time) + "," + connection.escape(req.params.parking_to_time) + "," + connection.escape(req.params.parking_workdays_id) + "," + connection.escape(req.params.parking_managed_status) + ");", function(err, rows){          
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