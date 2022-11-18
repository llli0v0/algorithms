/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
  let counter = [];
  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    counter.push([String.fromCharCode(i), 0]);
  }
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 97;
    counter[index][1]++;
  }
  counter.sort((a, b) => b[0].charCodeAt() - a[0].charCodeAt());
  let res = '';
  while (true) {
    if (!counter.length || counter.length === 1 && counter[0][0] === res[res.length - 1]) break;
    if (res[res.length - 1] === counter[0][0]) {
      if (counter[1]) {
        if (counter[1][1] === 0) {
          counter.splice(1, 1);
          continue;
        }
        let len;
        res += counter[1][0];
        counter[1][1]--;
        if (counter[1][1] === 0) {
          counter.splice(1, 1);
        }
      } else {
        break;
      }
    } else {
      if (counter[0][1] === 0) {
        counter.shift();
        continue;
      }
      let len;
      res += new Array(len = Math.min(repeatLimit, counter[0][1])).fill(counter[0][0]).join('');
      counter[0][1] -= len;
      if (counter[0][1] === 0) {
        counter.shift();
      }
    }
  }
  return res;
};
