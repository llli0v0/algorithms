/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  let current = [0, 0, 0];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'a') {
      current[0]++;
    } else if (S[i] === 'b') {
      current[1]++;
    } else {
      current[2]++;
    }
    if (current[0] < current[1] || current[0] < current[2] || current[1] < current[2]) return false;
  }
  if (current[0] === current[1] && current[1] === current[2]) return true;
  return false;
};
