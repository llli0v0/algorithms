/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let hasSet = new Set([0]);
  let result = [0];
  let current = new Array(n).fill(0).join('');
  let len = 1;
  let targetLen = 2**n;
  while (len < targetLen) {
    for (let i = 0; i < current.length; i++) {
      let s1, s2;
      if (current[i] === '0') {
        s1 = current.slice(0, i) + '1' + current.slice(i + 1);
      } else {
        s2 = current.slice(0, i) + '0' + current.slice(i + 1);
      }
      let int = parseInt(s1 || s2, 2);
      if (!hasSet.has(int)) {
        hasSet.add(int);
        result.push(int);
        current = s1 || s2;
        len += 1;
        break;
      }
    }
  }
  return result;
};