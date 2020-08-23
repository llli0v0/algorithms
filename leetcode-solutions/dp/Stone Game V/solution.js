/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
  let computed = {};
  let sumComputed = {};
  return dp(0, stoneValue.length - 1);

  function dp(l, r) {
    if (l === r) return 0;
    let key = l + '-' + r;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = -Infinity;
    for (let i = l; i < r; i++) {
      let k1 = l + '-' + i;
      let v1 = 0;
      if (sumComputed[k1] !== undefined) {
        v1 = sumComputed[k1];
      } else {
        for (let j = l; j <= i; j++) v1 += stoneValue[j];
        sumComputed[k1] = v1;
      }
      let k2 = i + 1 + '-' + r;
      let v2 = 0;
      if (sumComputed[k2] !== undefined) {
        v2 = sumComputed[k2];
      } else {
        for (let j = i + 1; j <= r; j++) v2 += stoneValue[j];
        sumComputed[k2] = v2;
      }
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