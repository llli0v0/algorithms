/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let res = 1;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set = new Set()
      res++;
    }
    set.add(s[i]);
  }
  return res;
};
