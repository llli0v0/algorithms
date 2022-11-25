/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let counter = {};
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    counter[cur] = counter[cur] ?? 0;
    counter[cur]++;
  }
  let res = 0;
  for (let i = 0; i < t.length; i++) {
    let cur = t[i];
    if (counter[cur] === undefined) res++;
    else counter[cur]--;
  }
  for (let k in counter) {
    res += Math.abs(counter[k]);
  }
  return res;
};
