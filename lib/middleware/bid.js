var openrtb = require('openrtb');

var request_builder = openrtb.getBuilder({
  builderType: 'bidRequest'
});
var response_builder = openrtb.getBuilder({
  builderType: 'bidResponse'
});

var util = require('util');

function *bid_request(next) {
  try {
    var bid_request = request_builder
      .id(this.request.body.id)
      .build();

    this.bid = { req: bid_request };
    yield next;
  } catch(err) {
    this.response.body = { error: err.message };
    this.response.status = 400;
  }
};

function *bid_response(next) {
  if ( !this.bids || this.bids.length === 0 ) {
    this.response.status = 204;
    yield next;
    return;
  }

  try { 
    var bid_response = response_builder
      .id(this.bid.req.id)
      .bidderName(this.dsp.name)
      .seatbid([ { bid: this.bids }])
      .build();

    bid_response.bidId = util.format('%s-%s', this.bid.req.id, this.dsp.name);
    this.response.body = bid_response;
    yield next;
  } catch(err) {
    this.response.body = { error: err.message };
    this.response.status = 500;
  }
};

module.exports = {
  request: bid_request,
  response: bid_response
};
