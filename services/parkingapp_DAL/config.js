//config.js
var convict = require('convict'),
    check = require('validator').check;

var conf = convict({
	env: {
		doc: 'The Server Environment',
		format: ['development','production'],
		default: 'production',
		env: 'NODE_ENV'
	},
	db: {
		host: {
			doc: 'DB Host IP Address',
			default: '54.169.36.209'
		},
		user: {
			doc: 'DB User',
			default: 'parkingAppDAL'	
		},
		password: {
			doc: 'DB Password',
			default: 'ourpassword'
		},
		database: {
			doc: 'DB database',
			default: 'parkingapp'
		},
		connectionLimit: {
			doc: 'DB Max. Connections',
			default: '100'
		}
	}
});

var env = conf.get('env');
var envConfigFile = './config/' + env + '.json';

try {
	var files = [ envConfigFile];

	conf.loadFile(files);
}
catch(e) {
	console.error('Could not load configuration: %s', e);
}

conf.validate();

module.exports = conf;