/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
  let computed = {};
  let cache = {};
  houses = houses.sort((a, b) => a - b);
  return dp(houses.length - 1, k);

  function dp(index, k) {
    if (k === 0 && index >= 0) return Infinity;
    else if (k === 1) {
      let minDis = Infinity;
      for (let i = 0; i <= houses[index]; i++) {
        let dis = 0;
        for (let j = 0; j <= index; j++) dis += Math.abs(houses[j] - i);
        minDis = Math.min(minDis, dis);
      }
      return minDis;
    }
    let key = index + '-' + k;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    for (let i = index; i >= 0; i--) {
      let curHouses = houses.slice(i, index + 1);
      let minDis = Infinity;
      let key2 = i + '-' + (index + 1);
      if (cache[key2] !== undefined) minDis = cache[key2];
      else {
        for (let j = curHouses[0]; j <= curHouses[curHouses.length - 1]; j++) {
          let dis = 0;
          for (let g = 0; g < curHouses.length; g++) dis += Math.abs(curHouses[g] - j);
          minDis = Math.min(minDis, dis);
        }
        cache[key2] = minDis
      }
      computed[key] = Math.min(computed[key], minDis + dp(i - 1, k - 1));
    }
    return computed[key];
  }
};