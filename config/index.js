var nconf = require('nconf');
var util = require('util');

var env = (process.env.NODE_ENV || 'dev');
var file = util.format('%s/%s.json', __dirname, env);

nconf.argv()
  .env()
  .file({ file: file })
  .load();

module.exports = nconf;
