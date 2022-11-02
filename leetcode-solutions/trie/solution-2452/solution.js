/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
  let tree = {};
  for (let i = 0; i < dictionary.length; i++) {
    let dic = dictionary[i];
    let cur = tree;
    for (let j = 0; j < dic.length; j++) {
      let d = dic[j];
      if (cur[d] === undefined) cur[d] = { letter: d, next: {} };
      cur = cur[d].next;
    }
  }
  let res = [];
  let done = false;
  for (let i = 0; i < queries.length; i++) {
    helper(queries[i], 0, tree, 0);
    done = false;
  }
  return res;

  function helper(word, index, node, count) {
    if (index === word.length) {
      if (count <= 2 && !done) {
        res.push(word);
        done = true;
      }
      return;
    }
    for (let key in node) {
      let nod = node[key];
      if (nod.letter === word[index]) {
        helper(word, index + 1, nod.next, count);
      } else {
        helper(word, index + 1, nod.next, count + 1);
      }
    }
  }
};
