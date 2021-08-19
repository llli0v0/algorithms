/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < milestones.length; i++) {
    max = Math.max(max, milestones[i]);
    sum += milestones[i];
  }
  sum -= max;
  if (sum >= max - 1) return sum + max;
  return sum * 2 + 1;
};
