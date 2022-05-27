/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
  let result = 0;
  for (let i = 0; i <= Math.floor(total / cost1); i++) {
    let count = cost1 * i;
    result += Math.floor((total - count) / cost2) + 1;
  }
  return result;
};