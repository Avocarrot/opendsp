var json_res = require('koa-json');
var json_req = require('koa-json-body');

var koa = require('koa');

var lag = require('./middleware/lag');
var logger = require('./middleware/clogger');
var router = require('./router');

module.exports = function DSP(config) {
  var server = koa();

  server.context.dsp = config.details;

  // logger
  server.use(logger());
  server.use(json_req());

  if ( config.lag ) {
    server.use(lag(config.lag));
  }
  server.use(json_res());
  server.use(router.routes())

  return server;
};
