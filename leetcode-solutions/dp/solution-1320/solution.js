/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
  let computed = {};
  let result = Infinity;
  result = Math.min(result, dp(word.length - 1, word.length - 1, null), dp(word.length - 1, null, word.length - 1));
  for (let i = 0; i < word.length - 1; i++) result = Math.min(result, dp(word.length - 1, word.length - 1, i));
  return result;

  function dp(lastIndex, p1, p2) {
    if (lastIndex === 0) return 0;
    let key = p1 + '-' + p2;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    let cur = word[lastIndex];
    cur = [Math.floor((cur.charCodeAt() - 65) / 6), (cur.charCodeAt() - 65) % 6];
    if (p1 === null || p2 === null) {
      let last = word[lastIndex - 1];
      last = [Math.floor((last.charCodeAt() - 65) / 6), (last.charCodeAt() - 65) % 6];
      let dis = Math.abs(cur[0] - last[0]) + Math.abs(cur[1] - last[1]);
      if (p1 === lastIndex) {
        computed[key] = Math.min(computed[key], dp(lastIndex - 1, p1 - 1, p2) + dis);
      } else {
        computed[key] = Math.min(computed[key], dp(lastIndex - 1, p1, p2 - 1) + dis);
      }
    } else if (p1 !== null && p2 !== null && Math.abs(p1 - p2) > 1) {
      let last = word[lastIndex - 1];
      last = [Math.floor((last.charCodeAt() - 65) / 6), (last.charCodeAt() - 65) % 6];
      let dis = Math.abs(cur[0] - last[0]) + Math.abs(cur[1] - last[1]);
      if (p1 === lastIndex) computed[key] = Math.min(computed[key], dp(lastIndex - 1, p1 - 1, p2) + dis);
      else computed[key] = Math.min(computed[key], dp(lastIndex - 1, p1, p2 - 1) + dis);
    } else {
      if (p1 === lastIndex) {
        for (let i = 0; i < lastIndex; i++) {
          if (i === p2) continue;
          let last = word[i];
          last = [Math.floor((last.charCodeAt() - 65) / 6), (last.charCodeAt() - 65) % 6];
          computed[key] = Math.min(computed[key], dp(lastIndex - 1, i, p2) + Math.abs(cur[0] - last[0]) + Math.abs(cur[1] - last[1]));
        }
        computed[key] = Math.min(computed[key], dp(lastIndex - 1, null, p2));
      } else {
        for (let i = 0; i < lastIndex; i++) {
          if (i === p1) continue;
          let last = word[i];
          last = [Math.floor((last.charCodeAt() - 65) / 6), (last.charCodeAt() - 65) % 6];
          computed[key] = Math.min(computed[key], dp(lastIndex - 1, p1, i) + Math.abs(cur[0] - last[0]) + Math.abs(cur[1] - last[1]));
        }
        computed[key] = Math.min(computed[key], dp(lastIndex - 1, p1, null));
      }
    }
    return computed[key];
  }
};