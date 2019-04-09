/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
var mergeStones = function(stones, K) {
  if (stones.length === 1) return 0;
  let dp = new Array(stones.length).fill(null).map(() => new Array(stones.length).fill(0));
  let cases = [];
  for (let i = 0; i < dp.length; i++) {
    dp[i][i] = stones[i];
  }
  for (let i = 1; i < dp.length; i++) {
    cases = [];
    getAllCase(i + 1, K, '');
    for (let d = 0; d < cases.length; d++) {
      cases[d] = cases[d].slice(1).split('_').map(o => parseInt(o));
    }
    for (let x = 0; x < dp.length - i; x++) {
      let currentCases = [];
      for (let r = 0; r < cases.length; r++) {
        currentCases.push([...cases[r]]);
      }
      let y = x + i;
      if (cases.length === 0) {
        dp[x][y] = -1;
        continue;
      }
      for (let w = 0; w < currentCases.length; w++) {
        for (let q = 0; q < currentCases[w].length; q++) {
          if (q === 0) {
            currentCases[w][q] = [x, x + currentCases[w][q] - 1];
          } else {
            currentCases[w][q] = [currentCases[w][q - 1][1] + 1, currentCases[w][q - 1][1] + currentCases[w][q]];
          }
        }
      }
      let best = Infinity;
      for (let n = 0; n < currentCases.length; n++) {
        let sum = 0;
        let lastStepSum = 0;
        for (let m = 0; m < currentCases[n].length; m++) {
          if (currentCases[n][m][1] - currentCases[n][m][0] !== 0) {
            for (let t = currentCases[n][m][0]; t <= currentCases[n][m][1]; t++) {
              lastStepSum += stones[t];
            }
          }
          sum += dp[currentCases[n][m][0]][currentCases[n][m][1]];
        }
        best = Math.min(best, sum + lastStepSum);
      }
      dp[x][y] = best;
    }
  }
  return dp[0][dp.length - 1];
  function getAllCase(l, c, s) {
    if (c === K && (l - 1) % (K - 1)) return;
    if (c === 1 && (l - 1) % (K - 1) === 0) {
      cases.push(s + '_' + l);
      return;
    }
    let n = 0;
    while ((K - 1) * n + 1 < l) {
      let newl = l - ((K - 1) * n + 1);
      getAllCase(newl, c - 1, s + '_' + (((K - 1) * n) + 1));
      n++;
    }
  }
};