/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
  let toppingCombinations = [];
  toppingCosts = toppingCosts.concat(toppingCosts);
  for (let i = 0; i < 2**toppingCosts.length; i++) {
    let cost = 0;
    for (let j = 0; j < toppingCosts.length; j++) {
      if (((1 << j) & i) === (1 << j)) cost += toppingCosts[j];
    }
    toppingCombinations.push(cost);
  }
  let result1 = -Infinity;
  let result2 = Infinity;
  for (let i = 0; i < toppingCombinations.length; i++) {
    for (let j = 0; j < baseCosts.length; j++) {
      let r = toppingCombinations[i] + baseCosts[j];
      if (r < target) result1 = Math.max(result1, r);
      else result2 = Math.min(result2, r);
    }
  }
  if (target - result1 > result2 - target) return result2;
  return result1;
};