/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  return helper(1, 0, n);
  
  // 这个方法适用的范围是1--9，原因是我在做1067的时候漏掉了0，凑巧发现这道题不需要考虑0
  function helper(d, low, high) {
    let M = { 0: 0, 9: 1 };
    let s = '9';
    for (let i = 2; i < 10; i++) {
      M[s + '9'] = 10**(i - 1) + 10 * M[s];
      s += '9'
    }
    let a = String(low);
    let c = 0;
    for (let i = 0; i < a.length; i++) {
      if (parseInt(a[i]) === d) c++;
    }
    return helper2(high) - helper2(low) + c;

    function helper2(num) {
      let len = String(num).length;
      let c = 0;
      while (num) {
        let a = 10**(len - 1);
        let b = Math.floor(num / a);
        if (b > d) {
          c += a;
        } else if (b === d) {
          c += num % a + 1;
        }
        c += M[a - 1] * b;
        num -= a * b;
        len--;
      }
      return c;
    }
  };
};