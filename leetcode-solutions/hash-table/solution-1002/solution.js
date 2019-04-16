/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let collection = {}, result = [];
  for (let i = 0; i < A.length; i++) {
    collection[i] = {};
    for (let n = 0; n < A[i].length; n++) {
      collection[i][A[i][n]] === undefined && (collection[i][A[i][n]] = 0);
      collection[i][A[i][n]]++;
    }
  }
  for (let key in collection[0]) {
    let currentMin = collection[0][key];
    for (let i = 1; i < A.length; i++) {
      if (collection[i][key] < currentMin) {
        currentMin = collection[i][key];
      }
      if (collection[i][key] === undefined) break;
      if (i === A.length - 1) {
        while (currentMin) {
          result.push(key);
          currentMin--;
        }
      }
    }
  }
  return result;
};

commonChars(["cool","lock","cook"]);