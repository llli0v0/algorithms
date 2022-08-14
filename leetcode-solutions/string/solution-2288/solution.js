/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
  let res = '';
  sentence = sentence.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    let sen = sentence[i];
    if (sen[0] === '$') {
      let count = 0;
      let f = false;
      for (let j = 1; j < sen.length; j++) {
        if (sen[j] === '.') count++;
        if (!/\d|\./.test(sen[j])) f = true;
      }
      if (count > 1 || f) res += ' ' + sen;
      else {
        let a = parseFloat(sen.slice(1));
        if (isNaN(a)) {
          res += ' ' + sen;
        } else {
          res += ' $' + (a - a * (discount / 100)).toFixed(2);
        }
      }
    } else {
      res += ' ' + sen;
    }
  }
  return res.slice(1);
};
