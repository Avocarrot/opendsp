var router = require('koa-router')();

router.get('/bid', function *(next) {
  this.body = {};
});

module.exports = router;
