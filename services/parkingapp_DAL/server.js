var config  = require('./config');
var app     = require('./app');

var url = config.get('url');
var port = config.get('port');
var server = app.listen(port, function () {

  console.log("DAL API Server listening at http://%s:%s", url, port);

});