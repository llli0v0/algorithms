/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
  let word1Counter = new Map();
  let word2Counter = new Map();
  for (let i = 0; i < word1.length; i++) {
    let w = word1[i];
    word1Counter.set(w, (word1Counter.get(w) ?? 0) + 1);
  }
  for (let i = 0; i < word2.length; i++) {
    let w = word2[i];
    word2Counter.set(w, (word2Counter.get(w) ?? 0) + 1);
  }
  for (let i = 97; i < 123; i++) {
    for (let j = 97; j < 123; j++) {
      let a = String.fromCharCode(i);
      let b = String.fromCharCode(j);
      if (word1Counter.has(a) && word2Counter.has(b)) {
        let map1 = clone(word1Counter);
        let map2 = clone(word2Counter);
        map1.set(a, map1.get(a) - 1);
        if (map1.get(a) === 0) map1.delete(a);
        map1.set(b, (map1.get(b) ?? 0) + 1);
        map2.set(b, map2.get(b) - 1);
        if (map2.get(b) === 0) map2.delete(b);
        map2.set(a, (map2.get(a) ?? 0) + 1);
        if (map1.size === map2.size) return true;
      }
    }
  }
  return false;

  function clone(map) {
    let newMap = new Map();
    for (let [k, v] of map.entries()) {
      newMap.set(k, v);
    }
    return newMap;
  }
};
