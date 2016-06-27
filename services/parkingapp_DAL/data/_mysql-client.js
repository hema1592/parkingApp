var mysql   = require('mysql');

var pool    = mysql.createPool({
    connectionLimit     : 100, //important
    host                : '54.169.36.209',
    user                : 'parkingAppDAL',
    password            : 'ourpassword',
    database            : 'parkingapp',
    debug               : false,
    multipleStatements  : true  
});

module.exports = pool;