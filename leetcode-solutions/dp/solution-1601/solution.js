/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
  let combination = [];
  helper('');
  let computed = { 0: {} };
  let result = 0;
  for (let i = 0; i < combination.length; i++) dp(combination[i]);
  return result;

  function dp(num) {
    if (computed[num]) return computed[num];
    for (let i = 0; i < requests.length; i++) {
      if (((1 << i) & num) === (1 << i)) {
        let obj = JSON.parse(JSON.stringify(dp(num - (1 << i))));
        let req = requests[requests.length - i - 1];
        let from = req[0];
        let to = req[1];
        if (obj[from] === undefined) obj[from] = 0;
        obj[from]--;
        if (!obj[from]) delete obj[from];
        if (obj[to] === undefined) obj[to] = 0;
        obj[to]++;
        if (!obj[to]) delete obj[to];
        if (Object.keys(obj).length === 0) {
          let len = 0;
          for (let j = 0; j < requests.length; j++) {
            if (((1 << j) & num) === (1 << j)) len++;
          }
          result = Math.max(result, len);
        }
        return computed[num] = obj;
      }
    }
  }

  function helper(s) {
    if (s.length === requests.length) return combination.push(parseInt(s, 2));
    helper(s + '1');
    helper(s + '0');
  }
};