var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.addSeasonalBookingDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

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

exports.deleteSeasonalBookingDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete seasonal booking : ' + req.params.bookingid + " " + req.params.uid);

        console.log("CALL spDeleteSeasonalBookingDetails(" + connection.escape(req.params.bookingid) + "," + connection.escape(req.params.uid) + ");");

        connection.query("CALL spDeleteSeasonalBookingDetails(" + connection.escape(req.params.bookingid) + "," + connection.escape(req.params.uid) + ");", function(err, rows){          
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

exports.updateSeasonalBookingDetails = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update seasonal booking : ' + req.params.bookingid + " Parking Id : " + req.params.parkingid + " Vendor Id : " + req.params.vendorid + " User Car Id : " + req.params.usercarid + " From time : " + req.params.fromtime + " To Time : " + req.params.totime + " Workdays Id : " + req.params.workdaysid + " Payment Method Id : " + req.params.paymentmethodid + " Payment Status : " + req.params.paymentstatus);

        console.log("CALL spUpdateSeasonalBookingDetails(" + connection.escape(req.params.bookingid) + "," + connection.escape(req.params.parkingid) + "," + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.usercarid) + "," + connection.escape(req.params.fromtime) + "," + connection.escape(req.params.totime) + "," + connection.escape(req.params.workdaysid) + "," + connection.escape(req.params.paymentmethodid) + "," + connection.escape(req.params.paymentstatus) + ");");

        connection.query("CALL spUpdateSeasonalBookingDetails(" + connection.escape(req.params.bookingid) + "," + connection.escape(req.params.parkingid) + "," + connection.escape(req.params.vendorid) + "," + connection.escape(req.params.usercarid) + "," + connection.escape(req.params.fromtime) + "," + connection.escape(req.params.totime) + "," + connection.escape(req.params.workdaysid) + "," + connection.escape(req.params.paymentmethodid) + "," + connection.escape(req.params.paymentstatus) + ");", function(err, rows){          
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