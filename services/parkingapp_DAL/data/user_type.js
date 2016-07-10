var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addUserType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add user type : ' + req.params.newusertype);

        console.log("CALL spAdminAddUserType(" + connection.escape(req.params.newusertype) + ");");

        connection.query("CALL spAdminAddUserType(" + connection.escape(req.params.newusertype) + ");", function(err, rows){          
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

exports.deleteUserType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete user type : ' + req.params.usertypeid + " User Id: " + req.params.uid);

        console.log("CALL spAdminDeleteUserType(" + connection.escape(req.params.usertypeid) + "," + connection.escape(req.params.uid) + ");");

        connection.query("CALL spAdminDeleteUserType(" + connection.escape(req.params.usertypeid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
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

exports.updateUserType = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update user type : ' + req.params.usertypeid + " " + req.params.newusertype);

        console.log("CALL spAdminUpdateUserType(" + connection.escape(req.params.usertypeid) + "," + connection.escape(req.params.newusertype) + ");");

        connection.query("CALL spAdminUpdateUserType(" + connection.escape(req.params.usertypeid) + "," + connection.escape(req.params.newusertype) + ");", function(err, rows){          
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