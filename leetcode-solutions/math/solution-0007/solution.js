/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  x = String(x);
  let xNoSing = '';
  let biggerThenZero = false;
  if (x[0] === '-') {
    xNoSing = x.slice(1);
  } else {
    xNoSing = x;
    biggerThenZero = true;
  }
  let reversedString = xNoSing.split('').reverse().join('');
  if (
    biggerThenZero && (parseInt(reversedString) < Math.pow(2, 31) - 1) ||
    !biggerThenZero && (parseInt(reversedString) < Math.pow(2, 31))
  ) {
    if (biggerThenZero) {
      return parseInt(reversedString);
    } else {
      return parseInt('-' + reversedString);
    }
  }
  return 0;
};