var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.getUserDetails = function(req, res) {
  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        connection.query("select * from user;", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows); 
                return res(null,response); 
            }

        /*connection.query("CALL spGetAllUserDetails();", function(err, fields, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(fields) + JSON.stringify(rows); 
                console.log("Response res - " + " F: " + fields + " R: " + response);
                //return res(null, response);
                return response; 
            } */ 
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.getUserDetailsById = function(req, res) {

    console.log("Data Request Id: " + req);

    pool.getConnection(function(err, connection){
        if (err) {
            connection.release();
            res.json({"code" : 503, "status" : "Error connecting to database.. :("});
            return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        connection.query("CALL spGetUserDetailsById(" + connection.escape(req) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                //console.log("Response res - " + response);
                return res(null, response); 
            }           
        });

        connection.on('error', function(err) {      
                res.json({"code" : 503, "status" : "Error connecting to database.. :("});
                return;     
        });
    });
};

exports.addUserDetails = function(req, res) {

    console.log("Data Request Id: " + req);

    pool.getConnection(function(err, connection){
        if (err) {
            connection.release();
            res.json({"code" : 503, "status" : "Error connecting to database.. :("});
            return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log("CALL spAddUserDetails(" + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");");

        connection.query("CALL spAddUserDetails(" + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null, response); 
            }           
        });

        connection.on('error', function(err) {      
                res.json({"code" : 503, "status" : "Error connecting to database.. :("});
                return;     
        });
    });
};

exports.deleteUserDetails = function(req, res) {

    console.log("Data Request Id: " + req);

    pool.getConnection(function(err, connection){
        if (err) {
            connection.release();
            res.json({"code" : 503, "status" : "Error connecting to database.. :("});
            return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log("CALL spDeleteUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.uid) + ");");

        connection.query("CALL spDeleteUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null, response); 
            }           
        });

        connection.on('error', function(err) {      
                res.json({"code" : 503, "status" : "Error connecting to database.. :("});
                return;     
        });
    });
};

exports.updateUserDetails = function(req, res) {

    console.log("Data Request Id: " + req);

    pool.getConnection(function(err, connection){
        if (err) {
            connection.release();
            res.json({"code" : 503, "status" : "Error connecting to database.. :("});
            return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log("CALL spUpdateUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");");

        connection.query("CALL spUpdateUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null, response); 
            }           
        });

        connection.on('error', function(err) {      
                res.json({"code" : 503, "status" : "Error connecting to database.. :("});
                return;     
        });
    });
};

exports.getUserDetailsByUserType = function(req, res) {

    console.log("Data Request Id: " + req);

    pool.getConnection(function(err, connection){
        if (err) {
            connection.release();
            res.json({"code" : 503, "status" : "Error connecting to database.. :("});
            return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log("CALL spGetUserDetailsByUserType(" + connection.escape(req.params.usertype) + ");");

        connection.query("CALL spGetUserDetailsByUserType(" + connection.escape(req.params.usertype) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null, response); 
            }           
        });

        connection.on('error', function(err) {      
                res.json({"code" : 503, "status" : "Error connecting to database.. :("});
                return;     
        });
    });
};