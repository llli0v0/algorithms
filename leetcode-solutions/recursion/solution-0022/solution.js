/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let results = [];
  next(0, 0, '');
  return results;
  function next(leftCount, rightCount, result) {
    if (leftCount === n && rightCount === n) return results.push(result);
    if (leftCount === rightCount) next(leftCount + 1, rightCount, result + '(');
    if (leftCount < n && leftCount !== rightCount) next(leftCount + 1, rightCount, result + '(');
    if (leftCount > rightCount) next(leftCount, rightCount + 1, result + ')');
  }
};