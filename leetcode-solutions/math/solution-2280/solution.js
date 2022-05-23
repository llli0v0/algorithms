/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  if (stockPrices.length < 2) return 0;
  stockPrices.sort((a, b) => a[0] - b[0]);
  let result = 1;
  for (let i = 2; i < stockPrices.length; i++) {
    let y1 = stockPrices[i][1] - stockPrices[i - 1][1];
    let x1 = stockPrices[i][0] - stockPrices[i - 1][0];
    let y2 = stockPrices[i - 1][1] - stockPrices[i - 2][1];
    let x2 = stockPrices[i - 1][0] - stockPrices[i - 2][0];
    if (BigInt(y1) * BigInt(x2) !== BigInt(y2) * BigInt(x1)) {
      result++;
    }
  }
  return result;
};
