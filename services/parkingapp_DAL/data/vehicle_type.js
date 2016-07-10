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

exports.deleteVehicleType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete vehicle type : ' +  req.params.vehicletypeid + " User Id : " + req.params.uid);

        console.log("CALL spAdminDeleteVehicleType(" + connection.escape(req.params.vehicletypeid) + "," + connection.escape(req.params.uid) + ");");

        connection.query("CALL spAdminDeleteVehicleType(" + connection.escape(req.params.vehicletypeid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
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

exports.updateVehicleType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update vehicle type Id : ' +  req.params.vehicletypeid + " New Vehicle Type : " + req.params.newvehicletype);

        console.log("CALL spAdminUpdateVehicleType(" + connection.escape(req.params.vehicletypeid) + "," + connection.escape(req.params.newvehicletype) + ");");

        connection.query("CALL spAdminUpdateVehicleType(" + connection.escape(req.params.vehicletypeid) + "," + connection.escape(req.params.newvehicletype) + ");", function(err, rows){          
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

exports.getListAllVehicleTypes = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get all vehicle types..');

        console.log("CALL spGetListAllVehicleTypes();");

        connection.query("CALL spGetListAllVehicleTypes();", function(err, rows){          
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

exports.getVehicleTypeById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get vehicle type by Id : ' + req.params.vehicletypeid);

        console.log("CALL spGetVehicleTypeById(" + connection.escape(req.params.vehicletypeid) + ");");

        connection.query("CALL spGetVehicleTypeById(" + connection.escape(req.params.vehicletypeid) + ");", function(err, rows){          
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