/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  N = String(N).split('').map(i => parseInt(i));
  for (let i = N.length - 1; i > 0; i--) {
    if (N[i] < N[i - 1]) {
      N[i - 1] = N[i - 1] - 1;
      for (let j = i; j < N.length; j++) {
        N[j] = 9;
      }
    }
  }
  return parseInt(N.join(''));
};
