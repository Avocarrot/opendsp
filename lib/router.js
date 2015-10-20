var router = require('koa-router')();

router.post('/bid', function *(next) {
  this.body = this.request.body;
});

module.exports = router;
