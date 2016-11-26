var nconf = require('./config');
var DSP = require('./lib/dsp');

var server = new DSP({
  lag: (nconf.get('server:lag') || 0),
  details: (nconf.get('dsp') || { name: 'jack-hammerton' }),
  timeout: (nconf.get('server:timeout') || 0),
  empty_bid: (nconf.get('server:empty_bid') || 0)
});

server.listen((nconf.get('port') || nconf.get('server:port') || 3000));
