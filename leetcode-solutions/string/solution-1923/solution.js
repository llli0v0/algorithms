/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
var longestCommonSubpath = function(n, paths) {
  n = BigInt(n);
  for (let i = 0; i < paths.length; i++) {
    for (let j = 0; j < paths[i].length; j++) {
      paths[i][j] = BigInt(paths[i][j]);
    }
  }
  let mod = 10n**11n + 7n;
  let l = 0;
  let r = Math.min(...new Array(paths.length).fill(null).map((a, index) => paths[index].length));
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let hashMap = {};
    let maxCount = 0;
    for (let i = 0; i < paths.length; i++) {
      let path = paths[i];
      let x = 1n;
      let rollhash = 0n;
      for (let j = 0; j < m; j++) {
        if (j !== m - 1) x = x * n % mod;
        rollhash = (rollhash * n + BigInt(path[j])) % mod;
      }
      if (hashMap[rollhash] === undefined) hashMap[rollhash] = new Set();
      hashMap[rollhash].add(i);
      maxCount = Math.max(maxCount, hashMap[rollhash].size);
      for (let j = 1; j + m - 1 < path.length; j++) {
        rollhash = ((rollhash - path[j - 1] * x + mod * n) * n + path[j + m - 1]) % mod;
        if (hashMap[rollhash] === undefined) hashMap[rollhash] = new Set();
        hashMap[rollhash].add(i);
        maxCount = Math.max(maxCount, hashMap[rollhash].size);
      }
    }
    if (maxCount === paths.length) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  return l;
};
