/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
  let mod = 10**9 + 7;
  let man = 0;
  let computed = {};
  for (let i = 0; i < hats.length; i++) hats[i] = new Set(hats[i]);
  for (let i = 0; i < hats.length; i++) man += (1 << i);
  return dp(man, 40);

  function dp(man, maxHat) {
    if (maxHat < 1) return 0;
    else if (Math.log2(man) % 1 === 0) {
      let count = 0;
      for (let i = 1; i <= maxHat; i++) if (hats[Math.log2(man)].has(i)) count++;
      return count;
    }
    let key = man + '-' + maxHat;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = 0;
    for (let i = 0; i < hats.length; i++) {
      if (((1 << i) ^ man) !== ((1 << i) | man)) {
        for (let j = 1; j <= maxHat; j++) {
          if (hats[i].has(j)) computed[key] = (computed[key] + dp((1 << i) ^ man, j - 1)) % mod;
        }
      }
    }
    return computed[key];
  }
};