/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(num, change) {
  for (let i = 0; i < num.length; i++) {
    if (change[num[i]] > num[i]) {
      let idx = i;
      let result = num.slice(0, idx);
      while (change[num[idx]] >= num[idx]) {
        result += String(change[num[idx]]);
        idx++;
      }
      return result + num.slice(idx);
    }
  }
  return num;
};