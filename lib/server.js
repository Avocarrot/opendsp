var json_res = require('koa-json');
var json_req = require('koa-json-body');

var lag = require('./middleware/lag');
var logger = require('./middleware/clogger');
var server = require('koa')();
var router = require('./router');

// logger
server.use(logger());

server.use(json_req());
server.use(lag());
server.use(json_res());

server.use(router.routes())
  
module.exports = server;
