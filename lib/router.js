var router = require('koa-router')();
var bid = require('./middleware/bid');

router.post('/bid', bid.request, function *(next) {
  this.bids = [ {
    "id": "123123214",
    "impid": "31243341",
    "price": 5.80,
    "nurl": "http://example.com/track/win",
    "adomain": ["ford.com"],
    "iurl": "http://example.com/assets/image.png",
    "cid": "xxsw655xas",
    "cat": ["IAB1-4", "IAB1-5"],
    "adm": "{\"native\":{\"assets\":[{\"id\":0,\"title\":{\"text\":\"This is a sample ad from%s\"}},{\"id\":1,\"img\":{\"url\":\"http://cdn.exampleimage.com/2639042\",\"w\":100,\"h\":100}},{\"id\":2,\"img\":{\"url\":\"http://cdn.exampleimage.com/a/50/50/2639042 \",\"w\":50,\"h\":50}},{\"id\":3,\"data\":{\"value\":\"This is the ad description\"}},{\"id\":4,\"data\":{\"value\":4.5}},{\"id\":5,\"data\":{\"value\":\" Install now\"}}],\"link\":{\"url\":\"http://trackclick.com/Click\"},\"imptrackers\":[\"http://example.com/tracker\"]}}"
  } ];
  yield next;
}, bid.response);

module.exports = router;
