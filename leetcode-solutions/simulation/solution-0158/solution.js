/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  let cache = [];
  return function(buf, n) {
    if (cache.length >= n) {
      buf.push(...cache.splice(0, n));
      return n;
    }
    while (true) {
      let buffer = new Array(4);
      read4(buffer);
      cache = cache.concat(buffer);
      if (buffer.length === 0) break;
      else if (cache.length >= n) break;
    }
    if (cache.length >= n) {
      buf.push(...cache.splice(0, n));
      return n;
    }
    let res = cache.length;
    buf.push(...cache);
    return res;
  };
};
