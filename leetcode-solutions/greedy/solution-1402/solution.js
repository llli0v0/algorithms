/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction = satisfaction.sort((a, b) => b - a);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    sum += satisfaction[i];
    result = result + sum < result ? result : result + sum;
  }
  return result;
};