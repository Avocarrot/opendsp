var nconf = require('./config');
var DSP = require('./lib/dsp');

var server = new DSP({
  lag: (nconf.get('server:lag') || 0)
});

server.listen((nconf.get('server:port') || nconf.get('port') || 3000));
