var router = require('koa-router')();

router.post('/bid', function *(next) {
  this.body = this.request.body;
});

router.post('/impression', function *(next) {
});

router.post('/click', function *(next) {
});

module.exports = router;
