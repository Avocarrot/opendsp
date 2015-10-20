var openrtb = require('openrtb');

var request_builder = openrtb.getBuilder({
  builderType: 'bidRequest'
});
var response_builder = openrtb.getBuilder({
  builderType: 'bidResponse'
});

function *bid_request(next) {
  try {
    var bid_request = yield request_builder
      .id(this.request.body.id)
      .build();

    this.bid = { req: bid_request };
  } catch(err) {
    this.response.body = { error: err.message };
    this.response.status = 400;
    return;
  }
  yield next;
};

function *bid_response(next) {
  try { 
    var bid_response = yield response_builder
      .id(this.bid.req.id)
      .build();

    this.response.body = bid_response;
  } catch(err) {
    this.response.body = { error: err.message };
    this.response.status = 500;
    return;
  }
  yield next;
};

module.exports = {
  request: bid_request,
  response: bid_response
};
