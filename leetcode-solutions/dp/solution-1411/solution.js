/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
  let arr = ['123', '321', '121', '131', '212', '313', '213', '312', '323', '232', '231', '132'];
  let map = {};
  for (let i = 0; i < arr.length; i++) map[arr[i]] = [];
  for (let key in map) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] !== key[0] && arr[i][1] !== key[1] && arr[i][2] !== key[2]) map[key].push(arr[i]);
    }
  }
  let result = 0;
  let computed = {};
  let mod = 10**9 + 7;
  for (let i = 0; i < arr.length; i++) result = (result + dp(arr[i], n - 1)) % mod;
  return result;

  function dp(s, n) {
    if (n === 0) return 1;
    let key = s + '-' + n;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = 0;
    for (let i = 0; i < map[s].length; i++) computed[key] = (computed[key] + dp(map[s][i], n - 1)) % mod;
    return computed[key];
  }
};