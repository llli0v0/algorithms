/**
 * @param {number[]} heights
 * @param {number} V
 * @param {number} K
 * @return {number[]}
 */
var pourWater = function(heights, V, K) {
    while (V) {
      V--;
      let a = heights.slice(0, K + 1);
      let s = [];
      let i = K;
      while (a.length) {
        let b = a.pop();
        if (s.length && b > s[0][0]) break;
        s.unshift([b, i]);
        i--;
      }
      while (s.length > 1 && s[0][0] !== s[s.length - 1][0]) s.pop();
      if (s[0][0] !== heights[K]) {
        heights[s[s.length - 1][1]]++;
        continue;
      }
      a = heights.slice(K);
      s = [];
      i = K;
      while (a.length) {
        let b = a.shift();
        if (s.length && b > s[s.length - 1][0]) break;
        s.push([b, i]);
        i++;
      }
      while (s.length > 1 && s[0][0] !== s[s.length - 1][0]) s.shift();
      if (s[0][0] !== heights[K]) {
        heights[s[0][1]]++;
        continue;
      }
      heights[K]++;
    }
    return heights;
  };