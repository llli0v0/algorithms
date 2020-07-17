/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
  let computed = {};
  for (let i = 0; i <= n; i++) {
    computed[i] = 0;
    for (let j = 1; i - j**2 >= 0; j++) {
      if ((1 + computed[i - j**2]) % 2) {
        computed[i] = 1 + computed[i - j **2];
        break;
      }
    }
  }
  return computed[n] % 2 ? true : false;
};