/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
  let W = {};
  let B = {};

  for (let i = 0; i < workers.length; i++) {
    W[i] = 1 << i;
  }

  for (let i = 0; i < bikes.length; i++) {
    B[i] = 1 << (workers.length - 1 + i);
  }

  let result = Infinity;

  helper(0, 0, 0);

  return result;

  function helper(A, L, S) {
    if (S === workers.length) {
      result = Math.min(result, L);
      return;
    }

    for (let i = 0; i < workers.length; i++) {
      if (A & W[i]) continue;
      for (let j = 0; j < bikes.length; j++) {
        if (A & B[j]) continue;
        helper(A + W[i] + B[j], L + Math.abs(workers[i][0] - bikes[j][1]) + Math.abs(workers[i][1] - bikes[j][1]), S + 1);
      }
    }
  }
};
