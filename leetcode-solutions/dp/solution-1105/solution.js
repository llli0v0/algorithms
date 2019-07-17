/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  let dp = new Array(books.length).fill(null);

  dp[-1] = [0, 0, 0];
  dp[0] = [books[0][1], books[0][1], shelf_width - books[0][0]];

  for (let i = 1; i < books.length; i++) {
    dp[i] = [dp[i - 1][0] + books[i][1], books[i][1], shelf_width - books[i][0]];

    let j = i - 1;

    while (j >= 0) {
      let m = 0;
      let w = 0;

      for (let n = j; n <= i; n++) {
        m = Math.max(m, books[n][1]);
        w += books[n][0];
      }

      if (w > shelf_width) break;

      if (m + dp[j - 1][0] < dp[i][0]) {
        dp[i] = [m + dp[j - 1][0], m, shelf_width - w];
      }

      j--;
    }
  }

  return dp[dp.length - 1][0];
};