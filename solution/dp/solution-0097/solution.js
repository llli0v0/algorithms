/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1 + s2 === s3 || s2 + s1 === s3) return true;
  let last = [[undefined, undefined]], cache = {};
  for (let i = 0; i < s3.length; i++) {
    let current = [];
    for (let j = 0; j < last.length; j++) {
      if (s1[last[j][0] === undefined ? 0 : last[j][0] + 1] === s3[i]) {
        let arr = [last[j][0] === undefined ? 0 : last[j][0] + 1, last[j][1]];
        if (cache[arr.toString()] === undefined) {
          current.push(arr);
          cache[arr.toString()] = true;
        }
      }
      if (s2[last[j][1] === undefined ? 0 : last[j][1] + 1] === s3[i]) {
        let arr = [last[j][0], last[j][1] === undefined ? 0 : last[j][1] + 1];
        if (cache[arr.toString()] === undefined) {
          current.push(arr);
          cache[arr.toString()] = true;
        }
      }
    }
    if (current.length === 0) return false;
    last = current;
    cache = {};
  }
  if (last[0][0] !== s1.length - 1 || last[0][1] !== s2.length - 1) return false;
  return true;
};

module.exports = { solution: isInterleave };