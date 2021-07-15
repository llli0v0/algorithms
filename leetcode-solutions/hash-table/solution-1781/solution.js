/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  let result = 0;
  let count = [new Array(26).fill(0)];
  for (let i = 0; i < s.length; i++) {
    let a = JSON.parse(JSON.stringify(count[count.length - 1]));
    let idx = s[i].charCodeAt() - 97;
    a[idx]++;
    for (let j = 0; j < count.length; j++) {
      let b = [];
      for (let x = 0; x < a.length; x++) {
        b.push(a[x] - count[j][x]);
      }
      b = b.filter(item => item);
      result += Math.max(...b) - Math.min(...b);
    }
    count.push(a);
  }
  return result;
};
