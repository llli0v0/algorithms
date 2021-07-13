/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) {
  let all = [];
  helper(m, []);
  let map = {};
  for (let i = 0; i < all.length; i++) {
    let a = all[i];
    map[a.toString()] = [];
    for (let j = 0; j < all.length; j++) {
      let b = all[j];
      let is = true;
      for (let x = 0; x < a.length; x++) {
        if (a[x] === b[x]) is = false;
      }
      if (is) map[a.toString()].push(b.toString());
    }
  }
  all = all.map(item => item.toString());
  let mod = 10**9 + 7;
  let computed = [{}];
  for (let i = 0; i < all.length; i++) computed[0][all[i]] = 1;
  for (let i = 1; i < n; i++) {
    let obj = {};
    for (let j = 0; j < all.length; j++) {
      let cur = all[j];
      obj[cur] = 0;
      for (let x = 0; x < map[cur].length; x++) {
        obj[cur] = (obj[cur] + computed[computed.length - 1][map[cur][x]]) % mod;
      }
    }
    computed.push(obj);
  }
  let result = 0;
  let o = computed[computed.length - 1];
  for (let key in o) result = (result + o[key]) % mod;
  return result;

  function helper(m, arr) {
    if (m === 0) return all.push(arr);
    if (arr[arr.length - 1] !== 1) helper(m - 1, JSON.parse(JSON.stringify(arr)).concat([1]));
    if (arr[arr.length - 1] !== 2) helper(m - 1, JSON.parse(JSON.stringify(arr)).concat([2]));
    if (arr[arr.length - 1] !== 3) helper(m - 1, JSON.parse(JSON.stringify(arr)).concat([3]));
  }
};