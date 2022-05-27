/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {
  let index = expression.indexOf('+');
  let min = Infinity;
  let result = '';
  for (let i = 0; i < index; i++) {
    for (let j = index + 1; j <= expression.length; j++) {
      let str = expression.slice(0, i) + '*(' + expression.slice(i, j) + ')*' + expression.slice(j);
      if (str[0] === '*') str = str.slice(1);
      if (str[str.length - 1] === '*') str = str.slice(0, str.length - 1);
      let a = str.indexOf('(');
      if (str[a + 1] === '+') continue;
      let b = str.indexOf(')');
      if (str[b - 1] === '+') continue;
      if (eval(str) < min) {
        min = eval(str);
        while (str.indexOf('*') > -1) {
          let cur = str.indexOf('*');
          str = str.slice(0, cur) + str.slice(cur + 1);
        }
        result = str;
      }
    }
  }
  return result;
};