var json = require('koa-json');
var lag = require('./lag');
var server = require('koa')();
var router = require('./router');

// logger
server.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
});

server.use(lag());
server.use(json());

server.use(router.routes())
  
module.exports = server;
