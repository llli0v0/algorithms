/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let arr = str.split('');
  let validStr = '';
  let len = arr.length;
  let started = false;
  for (let i = 0; i < len; i++) {
    if (arr[i] === ' ' && !started) continue;
    if (arr[i] === ' ' && started) break;
    if (/\d|-|\+/.test(arr[i]) && !started) {
      validStr = validStr + arr[i];
      started = true;
    } else if (/\d/.test(arr[i])) {
      validStr = validStr + arr[i];
    } else {
      break;
    }
  }
  if (String(parseInt(validStr)) === 'NaN') return 0;
  let biggerThanZero = true;
  if (validStr[0] === '-') {
    biggerThanZero = false;
    validStr = validStr.slice(1);
  }
  if (
    (parseInt(validStr) < Math.pow(2, 31) && !biggerThanZero) ||
    (parseInt(validStr) < Math.pow(2, 31) - 1 && biggerThanZero)
  ) {
    if (biggerThanZero) return parseInt(validStr);
    return parseInt('-' + validStr);
  }
  if (biggerThanZero) return 2147483647;
  return -2147483648;
};