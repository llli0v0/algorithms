/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let subNumTrees = {};
  for (let i = 0; i <= n; i++) {
    if (i <= 2) {
      i === 0 && (subNumTrees[0] = 0);
      i === 1 && (subNumTrees[1] = 1);
      i === 2 && (subNumTrees[2] = 2);
    } else {
      let current = i - 1;
      let currentLR = [];
      let count = 0;
      while (current >= 0) {
        currentLR = [i - 1 - current, current];
        if (!currentLR[0] || !currentLR[1]) {
          count = count + (currentLR[0] ? subNumTrees[currentLR[0]] : subNumTrees[currentLR[1]]);
        } else {
          count = subNumTrees[currentLR[0]] * subNumTrees[currentLR[1]] + count;
        }
        current--;
      }
      subNumTrees[i] = count;
    }
  }
  return subNumTrees[n];
};

module.exports = { solution: numTrees };