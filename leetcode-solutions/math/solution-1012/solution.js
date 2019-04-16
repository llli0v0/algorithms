/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  if (!N) return 1;
  let bit = toBit(N);
  bit = bit.split('');
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === '1') {
      bit[i] = '0';
    } else {
      bit[i] = '1';
    }
  }
  let t = 0, result = 0;
  for (let i = bit.length - 1; i >= 0; i--) {
    if (bit[i] === '1') result += 2**t;
    t++;
  }
  return result;
  function toBit() {
    let n = 1, s = '';
    while (N) {
      let m = N % 2**n;
      n++;
      N = N - m;
      if (m) {
        s = 1 + s;
      } else {
        if (N) {
          s = 0 + s;
        } else {
          s = 1 + s;
        }
      }
    }
    return s;
  }
};