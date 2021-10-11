/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let arr = answerKey[0] === 'T' ? [[1, 0]] : [[0, 1]];
  for (let i = 1; i < answerKey.length; i++) {
    let last = arr[arr.length - 1];
    if (answerKey[i] === 'T') {
      arr.push([last[0] + 1, last[1]]);
    } else {
      arr.push([last[0], last[1] + 1]);
    }
  }
  let l = 0;
  let r = answerKey.length;
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let has = false;
    if (k + arr[m - 1][0] >= m || k + arr[m - 1][1] >= m) has = true;
    for (let i = 1; i + m - 1 < arr.length; i++) {
      if (arr[i + m - 1][0] - arr[i - 1][0] + k >= m || arr[i + m - 1][1] - arr[i - 1][1] + k >= m) {
        has = true;
      }
    }
    if (has) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  return l;
};
