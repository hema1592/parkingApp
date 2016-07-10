var mysql   = require('mysql'),
    pool = require('./_mysql-client');

/*exports.addUserVehicleDetails = function(req, res) {  
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
};*/

exports.getListAllVehiclesByVehicleType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get all vehicles by type : ' +  req.params.vehicletypeid);

        console.log("CALL spGetListAllVehiclesByVehicleType(" + connection.escape(req.params.vehicletypeid) + ");");

        connection.query("CALL spGetListAllVehiclesByVehicleType(" + connection.escape(req.params.vehicletypeid) + ");", function(err, rows){          
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

exports.getVehicleDescByVehicleMake = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get vehicles by make : ' +  req.params.vehiclemake);

        console.log("CALL spGetVehicleDescByVehicleMake(" + connection.escape(req.params.vehiclemake) + ");");

        connection.query("CALL spGetVehicleDescByVehicleMake(" + connection.escape(req.params.vehiclemake) + ");", function(err, rows){          
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

exports.getVehicleDetailsById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get vehicle by Id : ' +  req.params.vehicleid);

        console.log("CALL spGetVehicleDetailsById(" + connection.escape(req.params.vehicleid) + ");");

        connection.query("CALL spGetVehicleDetailsById(" + connection.escape(req.params.vehicleid) + ");", function(err, rows){          
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

exports.getVehicleMakeByVehicleType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get vehicle make by type : ' +  req.params.vehicletype);

        console.log("CALL spGetVehicleMakeByVehicleType(" + connection.escape(req.params.vehicletype) + ");");

        connection.query("CALL spGetVehicleMakeByVehicleType(" + connection.escape(req.params.vehicletype) + ");", function(err, rows){          
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

exports.getVehiclesByVehicleType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get vehicle make by type : ' +  req.params.vehicletypeid);

        console.log("CALL spGetVehiclesByVehicleType(" + connection.escape(req.params.vehicletypeid) + ");");

        connection.query("CALL spGetVehiclesByVehicleType(" + connection.escape(req.params.vehicletypeid) + ");", function(err, rows){          
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