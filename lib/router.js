var router = require('koa-router')();
var bid = require('./middleware/bid');

router.post('/bid', bid.request, function *(next) {
  yield next;
}, bid.response);

module.exports = router;
