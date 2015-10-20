var nconf = require('./config');

var lag = require('./lib/lag');
var server = require('./lib/server');

server.listen(nconf.get('port') || 3000);
