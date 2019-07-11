/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  if (Math.max(tx, ty) / Math.min(tx, ty) > 2**5) {
    if (tx > ty) {
      tx = ty + tx % ty;
    } else {
      ty = tx + ty % tx;
    }
  }

  while (tx > 0 && ty > 0 && sx + sy !== tx + ty) {
    if (tx > ty) {
      tx -= ty
    } else {
      ty -= tx;
    }
  }
  return sx === tx && sy === ty;
};