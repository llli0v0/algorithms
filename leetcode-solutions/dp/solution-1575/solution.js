/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
  let mod = 10**9 + 7;
  let computed = {};
  let result = 0;
  for (let i = 0; i <= fuel; i++) {
    result = (result + helper(finish, i)) % mod;
  }
  return result;

  function helper(finish, fuel) {
    if (finish === start && fuel === 0) return 1;
    let key = `${finish} ${fuel}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = 0;
    for (let i = 0; i < locations.length; i++) {
      let cost = Math.abs(locations[finish] - locations[i]);
      if (i !== finish && fuel - cost >= 0) {
        computed[key] = (computed[key] + helper(i, fuel - cost)) % mod;
      }
    }
    return computed[key];
  }
};