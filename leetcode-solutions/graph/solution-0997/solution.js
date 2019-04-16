/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  if (N === 1) return 1;
  let G = {};
  for (let i = 0; i < trust.length; i++) {
    if (G[trust[i][0]] === undefined) G[trust[i][0]] = 0;
    if (G[trust[i][1]] === undefined) G[trust[i][1]] = 0;
    G[trust[i][0]]--;
    G[trust[i][1]]++;
  }
  for (let key in G) {
    if (G[key] === N - 1) return key;
  }
  return -1;
};