var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.getLoginVerified = function(req, res) {
    console.log("Data : " + req.params.user_id + " " + req.params.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;   
    try {
        var user_id = req.params.user_id;
        console.log("User ID : " + user_id);
        var x = user_id/1;
        console.log("After computation : " + user_id + " X : " + x);
        if(x) {
            mode = 2;
            console.log(mode);
        }    
    }
    catch(err) {
        mode = 1;
        console.log(mode);
    }
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to verify login : ' + req.params.user_id + " " + req.params.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.params.user_id) + "," + connection.escape(req.params.user_pass) +");", function(err, rows){          
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