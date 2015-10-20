var nconf = require('./config');
var server = require('./lib/server');

server.listen(nconf.get('port') || 3000);
