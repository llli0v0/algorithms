/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  let S = new Array(target.length + 1).fill(null);
  S[0] = -1;

  for (let i = 0; i < target.length; i++) {
    for (
      let j = S[i] + 1 === source.length ? 0 : S[i] + 1;
      j < source.length;
      j++
    ) {
      if (source[j] === target[i]) {
        S[i + 1] = j;
        break;
      }
      if (j === source.length - 1) {
        let F = false;
        for (let n = 0; n < S[i] + 1; n++) {
          if (source[n] === target[i]) {
            S[i + 1] = n;
            F = true;
            break;
          }
        }
        if (!F) return -1;
      }
    }
  }

  let result = 1;
  for (let i = 1; i < S.length; i++) {
    if (S[i] <= S[i - 1]) result++;
  }
  return result;
};