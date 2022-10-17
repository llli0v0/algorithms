/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
  let A = [];
  let B = [];
  for (let i = 0; i < transactions.length; i++) {
    let [a, b] = item = transactions[i];
    if (b >= a) A.push(item);
    else B.push(item);
  }
  transactions = (B.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  })).concat(A.sort((a, b) => {
    if (b[0] === a[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0]
  }));
  let res = 0;
  let cur = 0;
  for (let i = 0; i < transactions.length; i++) {
    let [a, b] = transactions[i];
    if (cur >= a) {
      cur = cur - a + b;
    } else {
      res += a - cur;
      cur = b;
    }
  }
  return res;
};
