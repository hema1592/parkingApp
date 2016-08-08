var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addParkingLotDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

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

exports.deleteParkingLotDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete parking : ' + req.params.parkingid + " " + req.params.uid);

        connection.query("CALL spDeleteParkingLotDetails("  + connection.escape(req.params.parkingid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
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

exports.updateParkingLotDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update parking : ' + req.params.parkingid + " " + req.params.vendorid + " " + req.params.parkingname + req.params.locationid + " " + req.params.tariffid + " " + req.params.totalslots + " " + req.params.fromtime + " " + req.params.totime + " " + req.params.workdaysid + " " + req.params.managedstatus);

        connection.query("CALL spUpdateParkingLotDetails("  + connection.escape(req.params.parkingid) + "," + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.parkingname) + connection.escape(req.params.locationid) + "," + connection.escape(req.params.tariffid) + "," + connection.escape(req.params.totalslots) + connection.escape(req.params.fromtime) + "," + connection.escape(req.params.totime) + "," + connection.escape(req.params.workdaysid) + "," + connection.escape(req.params.managedstatus) + ");", function(err, rows){          
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

exports.getParkingLotDetailsById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get parking lot info : ' + req.params.parkingid);

        connection.query("CALL spGetParkingLotDetailsById("  + connection.escape(req.params.parkingid) + ");", function(err, rows){          
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