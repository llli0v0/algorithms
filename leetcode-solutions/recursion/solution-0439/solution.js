/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function(expression) {
  return helper(expression);

  function helper(expression) {
    if (expression.length === 1) return expression;

    let c = 0;

    let i = 2;

    for (; i < expression.length; i++) {
      if (expression[i] === '?') c++;
      if (expression[i] === ':') c--;
      if (expression[i] === ':' && c === -1) break;
    }

    return expression[0] === 'T' ? helper(expression.slice(2, i)) : helper(expression.slice(i + 1));
  }
};