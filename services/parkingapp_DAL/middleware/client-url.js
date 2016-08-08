var url = require('url');
var config  = require('../config');

var hostUrl = config.get('url') + ':' + config.get('port');

module.exports = function client_uri(req, res,next) {
    var scheme = req.protocol || 'http';
    
    if((req.header('host') != undefined) && (req.header('origin') != undefined) && (req.header('host') != req.header('origin')) && scheme == 'http') {
        var clientUrl = scheme + '://' + req.header('host') + req.url;
        req.clientUrl = url.parse(clientUrl);
        console.log(scheme + " " + req.header('origin') + " " + req.header('host') + " " + req.url + " " + clientUrl);
    }
    else if((req.header('host') == hostUrl) && (req.header('origin') == undefined) && scheme == 'http') {
        console.log(scheme + " " + req.header('origin') + " " + req.header('host') + " " + req.url + " " + " Direct API CALL");
    }

    next();    
};