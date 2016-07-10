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

exports.deleteLocation = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete location : ' + req.params.locationid + " " + req.params.uid + " " + req.params.upass);

        connection.query("CALL spDeleteLocationDetails(" + connection.escape(req.params.locationid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) +");", function(err, rows){          
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

exports.updateLocation = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update location : ' + req.params.locationid + " " + req.params.loc_address + " " + req.params.loc_area + " " + req.params.loc_landmark + " " + req.params.loc_city);

        connection.query("CALL spUpdateLocationDetails(" + connection.escape(req.params.locationid) + "," + connection.escape(req.params.loc_address) + "," + connection.escape(req.params.loc_area) + "," + connection.escape(req.params.loc_landmark) + "," + connection.escape(req.params.loc_city) + ");", function(err, rows){          
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

exports.getLocationById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get location info : ' + req.params.locationid);

        connection.query("CALL spGetLocationById(" + connection.escape(req.params.locationid) + ");", function(err, rows){          
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