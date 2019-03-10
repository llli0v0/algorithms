/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  let str = '', current = 0;
  while (current < N) {
    let sign = '';
    if (current % 4 === 0) {
      sign = '-Math.floor(';
    } else if (current % 4 === 1) {
      sign = '*';
    } else if (current % 4 === 2) {
      sign = '/';
    } else {
      sign = '+';
    }
    str = str + sign + (N - current) + (current % 4 === 2 ? ')' : '');
    current++;
  }
  if (str[str.length - 2] === '*' || str[str.length - 2] === '/' || str[str.length - 2] === '-' || str[str.length - 2] === '(') str += ')';
  return eval(str.slice(1));
};