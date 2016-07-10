var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addVendorDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add vendor : ' +  req.params.userid + " " + req.params.ownername + " " + req.params.owneraddress + " " + req.params.ownerlocationid);

        console.log("CALL spAddVendorDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.ownername) + "," + connection.escape(req.params.owneraddress) + "," + connection.escape(req.params.ownerlocationid) + ");");

        connection.query("CALL spAddVendorDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.ownername) + "," + connection.escape(req.params.owneraddress) + "," + connection.escape(req.params.ownerlocationid) + ");", function(err, rows){          
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

exports.deleteVendorDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete vendor : ' +  req.params.vendorid);

        console.log("CALL spDeleteVendorDetails(" + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");");

        connection.query("CALL spDeleteVendorDetails(" + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
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

exports.updateVendorDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update vendor : ' + req.params.vendorid + " " + req.params.userid + " " + req.params.ownername + " " + req.params.owneraddress + " " + req.params.ownerlocationid);

        console.log("CALL spUpdateVendorDetails(" + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.userid) + "," + connection.escape(req.params.ownername)  + "," + connection.escape(req.params.owneraddress) + "," + connection.escape(req.params.ownerlocationid) + ");");

        connection.query("CALL spUpdateVendorDetails(" + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.userid) + "," + connection.escape(req.params.ownername)  + "," + connection.escape(req.params.owneraddress) + "," + connection.escape(req.params.ownerlocationid) + ");", function(err, rows){          
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

exports.getVendorDetailsById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get vendor info : ' + req.params.vendorid);

        console.log("CALL spGetVendorDetailsById(" + connection.escape(req.params.vendorid) + ");");

        connection.query("CALL spGetVendorDetailsById(" + connection.escape(req.params.vendorid) + ");", function(err, rows){          
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