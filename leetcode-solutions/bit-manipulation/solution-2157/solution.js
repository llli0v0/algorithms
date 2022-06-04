/**
 * @param {string[]} words
 * @return {number[]}
 */
var groupStrings = function(words) {
  let map = {};
  let result = [0, 1];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let key = 0;
    for (let i = 0; i < word.length; i++) {
      let n = word.charCodeAt(i) - 97;
      key += (1 << n);
    }
    if (map[key] === undefined) {
      map[key] = new Node(key);
      result[0]++;
    } else {
      map[key].count++;
      result[1] = Math.max(result[1], map[key].count);
    }
  }
  for (let key in map) {
    key = Number(key);
    for (let i = 0; i < 26; i++) {
      if (((1 << i) & key) === (1 << i)) {
        merge(map[key], map[key - (1 << i)]);
        for (let j = 0; j < 26; j++) {
          if (((1 << j) & key) === 0) merge(map[key], map[key - (1 << i) + (1 << j)]);
        }
      } else {
        merge(map[key], map[key + (1 << i)]);
      }
    }
  }
  return result;

  function merge(a, b) {
    if (!a || !b) return;
    let aRoot = a.getRoot();
    let bRoot = b.getRoot();
    if (aRoot === bRoot) return;
    bRoot.parent = aRoot;
    aRoot.count += bRoot.count;
    result[0]--;
    result[1] = Math.max(result[1], aRoot.count);
  }
};

class Node {
  constructor(val) {
    this.count = 1;
    this.parent = null;
    this.val = val;
  }

  getRoot() {
    if (this.parent === null) return this;
    return this.parent.getRoot();
  }
}
