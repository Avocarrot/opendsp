/**
 * Lag middleware.
 *
 * @param {Integer} ms
 * @return {GeneratorFunction}
 * @api public
 */
module.exports = function(ms) {
  ms = ( ms || 200);
  return function *(next) {
    yield function(cb) {
      setTimeout(cb, Math.round(Math.random()* ms));
    };
    yield next;
  };
};
