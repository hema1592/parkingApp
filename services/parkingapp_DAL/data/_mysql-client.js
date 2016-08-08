var mysql   = require('mysql');
var config  = require('../config');

var db_connectionLimit = config.get('db.connectionLimit');
var db_host = config.get('db.host');
var db_user = config.get('db.user');
var db_password = config.get('db.password');
var db_database = config.get('db.database');
var db_debug = config.get('db.debug');
var db_multipleStatements = config.get('db.multipleStatements');

var pool    = mysql.createPool({
    /*connectionLimit     : 100, //important
    host                : '192.168.10.20',
    user                : 'parkingAppDAL',
    password            : 'ourpassword',
    database            : 'parkingapp',
    debug               : false,
    multipleStatements  : true */

    connectionLimit     :  db_connectionLimit, //important
    host                :  db_host,
    user                :  db_user,
    password            :  db_password,
    database            :  db_database,
    debug               :  db_debug,
    multipleStatements  :  db_multipleStatements
});

console.log(" db_connectionLimit : " + db_connectionLimit + 
            "\n db_host : " + db_host + 
            "\n db_user : " + db_user + 
            "\n db_password : " + db_password + 
            "\n db_database : " + db_database + 
            "\n db_debug : " + db_debug + 
            "\n db_multipleStatements : " + db_multipleStatements + "\n");

module.exports = pool;