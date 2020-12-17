/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function(cuboids) {
  cuboids.forEach(item => item.sort((a, b) => b - a));
  cuboids.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) return b[2] - a[2];
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });
  let computed = { 0: cuboids[0][0] };
  let result = computed[0];
  for (let i = 1; i < cuboids.length; i++) {
    computed[i] = cuboids[i][0];
    for (let j = i - 1; j >= 0; j--) {
      if (cuboids[i][1] <= cuboids[j][1] && cuboids[i][2] <= cuboids[j][2]) {
        computed[i] = Math.max(computed[i], computed[j] + cuboids[i][0]);
        result = Math.max(result, computed[i]);
      }
    }
  }
  return result;
};