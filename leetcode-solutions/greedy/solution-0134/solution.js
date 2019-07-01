/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let l = [];
  for (let i = 0; i < gas.length; i++) {
    l.push([gas[i] - cost[i], i]);
  }
  let s = 0;
  for (let i = 0; i < l.length; i++) {
    s += l[i][0];
  }
  if (s < 0) return -1;
  let sum = 0;
  let result = 0;
  for (let i = 0; i < l.length; i++) {
    sum += l[i][0];
    if (l[i][0] > sum) {
      result = l[i][1];
      sum = l[i][0];
    }
  }
  if (sum < 0) return -1;
  return result;
};