/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  skill.sort((a, b) => a - b);
  let sum = skill.reduce((pre, cur) => pre + cur);
  let single = sum / skill.length * 2;
  let res = 0;
  for (let i = 0, n = skill.length / 2; i < n; i++) {
    if (skill[i] + skill[skill.length - 1] === single) {
      res += skill[i] * skill.pop();
    } else {
      return -1;
    }
  }
  return res;
};
