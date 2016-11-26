/**
 * Empty bid middleware.
 *
 * Return an empty response with probability `prob`.
 * E.g: if `prob` is 0.9 (90%), then about 9 out of 10
 * requests will return an empty body and only 1 in 10
 * will return a bid.
 *
 * @param {double} prob
 *     a number in the range [0, 1]
 */
module.exports = function(prob) {
  return function *(next) {
    if (prob > Math.random()) {
      this.response.status = 204;
    }

    yield next;
  };
}
