/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  let L = Math.floor(text.length / 2);
  let result = 0;

  for (let i = 0; i <= L; i++) {
    let j = i + 1;

    while (text.slice(i, j) !== text.slice(text.length - j, text.length - i)) j++;

    if (i === text.length - j) {
      result++;
    } else if (i !== text.length / 2) {
      result += 2;
    }

    i = j - 1;
  }

  return result;
};