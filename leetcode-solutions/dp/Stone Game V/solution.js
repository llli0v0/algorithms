/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
  let computed = {};
  let sumComputed = { '-1': 0 };
  for (let i = 0; i < stoneValue.length; i++) sumComputed[i] = sumComputed[i - 1] + stoneValue[i];
  return dp(0, stoneValue.length - 1);

  function dp(l, r) {
    if (l === r) return 0;
    let key = l + '-' + r;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = -Infinity;
    for (let i = l; i < r; i++) {
      let v1 = sumComputed[i] - sumComputed[l - 1];
      let v2 = sumComputed[r] - sumComputed[i];
      if (v1 === v2) {
        computed[key] = Math.max(computed[key], dp(l, i) + v1, dp(i + 1, r) + v2);
      } else {
        if (v1 > v2) {
          computed[key] = Math.max(computed[key], dp(i + 1, r) + v2);
        } else {
          computed[key] = Math.max(computed[key], dp(l, i) + v1);
        }
      }
    }
    return computed[key];
  }
};