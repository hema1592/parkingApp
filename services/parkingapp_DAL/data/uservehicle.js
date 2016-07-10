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

        console.log('Attempting to add user vehicle : ' +  req.params.userid + " " + req.params.vehicledimensionid + " " + req.params.regnum);

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

exports.deleteUserVehicleDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete user vehicle : ' +  req.params.uservehicleid + " " + req.params.uid);

        console.log("CALL spDeleteUserVehicleDetails(" + connection.escape(req.params.uservehicleid) + "," + connection.escape(req.params.uid) + ");");

        connection.query("CALL spDeleteUserVehicleDetails(" + connection.escape(req.params.uservehicleid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
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

exports.updateUserVehicleDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update user vehicle : ' +  req.params.uservehicleid + " " +  req.params.userid + " " + req.params.carid + " " + req.params.vehicledimensionid + " " + req.params.regnum);

        console.log("CALL spUpdateUserVehicleDetails(" + connection.escape(req.params.uservehicleid) + "," + connection.escape(req.params.userid) + "," + connection.escape(req.params.carid) + ","  + connection.escape(req.params.vehicledimensionid) + "," + connection.escape(req.params.regnum) + ");");

        connection.query("CALL spUpdateUserVehicleDetails(" + connection.escape(req.params.uservehicleid) + "," + connection.escape(req.params.userid) + "," + connection.escape(req.params.carid) + ","  + connection.escape(req.params.vehicledimensionid) + "," + connection.escape(req.params.regnum) + ");", function(err, rows){          
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

exports.getUserVehicleDetailsById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get user vehicle info : ' +  req.params.uservehicleid);

        console.log("CALL spGetUserVehicleDetailsById(" + connection.escape(req.params.uservehicleid) + ");");

        connection.query("CALL spGetUserVehicleDetailsById(" + connection.escape(req.params.uservehicleid) + ");", function(err, rows){          
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