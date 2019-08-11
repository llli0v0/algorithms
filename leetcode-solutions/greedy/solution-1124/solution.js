/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  let H = [];
  
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) {
      H.push(1);
    } else {
      H.push(-1);
    }
  }
  
  let hash = {};
  let result = 0;
  let S = 0;

  for (let i = 0; i < H.length; i++) {
    S += H[i];
    if (hash[S] === undefined) hash[S] = i;

    if (S >= 1) result = i + 1;

    if (hash[S - 1] !== undefined) {
      result = Math.max(result, i - hash[S - 1]);
    }
  }

  return result;
};