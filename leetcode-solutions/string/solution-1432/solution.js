/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
  num = String(num);
  let max = '';
  let min = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== '9') {
      for (let j = 0; j < num.length; j++) {
        if (num[j] === num[i]) max += '9';
        else max += num[j];
      }
      break;
    }
  }
  if (max === '') max = num;
  if (num[0] === '1') {
    min = '1';
    for (let i = 1; i < num.length; i++) {
      if (num[i] !== '0' && num[i] !== '1') {
        for (let j = 1; j < num.length; j++) {
          if (num[j] === num[i]) min += '0';
          else min += num[j];
        }
        break;
      }
    }
    if (min === '1') min = num;
  } else {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === num[0]) min += '1';
      else min += num[i];
    }
  }
  return Number(max) - Number(min);
};