var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addSeasonalBookingDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to add seasonal booking : ' + req.params.sp_parkingid + " " + req.params.sp_vendorid + " " + req.params.sp_carid + " " + req.params.sp_bookingfrom + " " + req.params.sp_bookingto + " " + req.params.sp_workdaysid + " " + req.params.sp_paymentmethodid + " " + req.params.sp_paymentstatus);

        console.log("CALL spAddSeasonalBookingDetails(" + connection.escape(req.params.sp_parkingid) + "," + connection.escape(req.params.sp_vendorid) + "," + connection.escape(req.params.sp_carid) + "," + connection.escape(req.params.sp_bookingfrom) + "," + connection.escape(req.params.sp_bookingto) + "," + connection.escape(req.params.sp_workdaysid) + "," + connection.escape(req.params.sp_paymentmethodid) + "," + connection.escape(req.params.sp_paymentstatus) + ");");

        connection.query("CALL spAddSeasonalBookingDetails(" + connection.escape(req.params.sp_parkingid) + "," + connection.escape(req.params.sp_vendorid) + "," + connection.escape(req.params.sp_carid) + "," + connection.escape(req.params.sp_bookingfrom) + "," + connection.escape(req.params.sp_bookingto) + "," + connection.escape(req.params.sp_workdaysid) + "," + connection.escape(req.params.sp_paymentmethodid) + "," + connection.escape(req.params.sp_paymentstatus) + ");", function(err, rows){          
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