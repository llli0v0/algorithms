/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let S = arr[0];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (S < arr[i]) {
      S = arr[i];
    } else if (S === i) {
      S = arr[i + 1];
      result++;
    }
  }
  return result;
};