/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  let dp = new Array(arr1.length).fill(null).map(() => new Array(arr2.length + 1).fill(Infinity));

  arr2 = [...new Set(arr2)].sort((a, b) => a - b);

  for (let i = 0; i < arr2.length; i++) dp[0][i] = 1;

  dp[0][arr2.length] = 0;

  for (let i = 1; i < arr1.length; i++) {
    if (arr2[0] > arr1[i - 1]) {
      dp[i][0] = dp[i - 1][arr2.length] === -1 ? -1 : 1 + dp[i - 1][arr2.length];
    } else {
      dp[i][0] = -1;
    }

    if (arr1[i] > arr1[i - 1]) dp[i][arr2.length] = dp[i - 1][arr2.length];

    let index = 0;

    while (arr1[i] > arr2[index]) index++;

    if (index - 1 > -1) {
      dp[i][arr2.length] = Math.min(
        dp[i - 1][index - 1] === -1 ? Infinity : dp[i - 1][index - 1],
        dp[i][arr2.length] === -1 ? Infinity : dp[i][arr2.length]
      );
    }

    if (dp[i][arr2.length] > 2000) dp[i][arr2.length] = -1;

    for (let j = 1; j < arr2.length; j++) {
      dp[i][j] = Math.min(
        (dp[i - 1][j - 1] === -1 ? Infinity : dp[i - 1][j - 1]) + 1,
        arr2[j] > arr1[i - 1] ? (dp[i - 1][arr2.length] === -1 ? Infinity : dp[i - 1][arr2.length]) + 1 : Infinity
      );

      dp[i][j] = dp[i][j] > 2000 ? -1 : dp[i][j];
    }
  }

  let result = Infinity;

  for (let i = 0; i < dp[arr1.length - 1].length; i++) {
    if (dp[arr1.length - 1][i] !== -1) result = Math.min(result, dp[arr1.length - 1][i]);
  }

  return result > 2000 ? -1 : result;
};