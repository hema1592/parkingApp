var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.login = function(req, res) {
    console.log(JSON.stringify(req));
    try {
        var user_id = req.params.user_id;
        var x = user_id/1;
        if(x) {
            mode = 1;
            console.log(mode);
        }    
    }
    catch(err) {
        mode = 0;
        console.log(mode);
    }
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to verify login : ' + mode + req.params.user_id + " " + req.params.user_password);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.params.user_id) + "," + connection.escape(req.params.user_password) +");", function(err, rows){          
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