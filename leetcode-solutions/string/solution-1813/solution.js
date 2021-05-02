/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  sentence1 = sentence1.split(' ');
  sentence2 = sentence2.split(' ');
  if (sentence1.length === sentence2.length) {
    if (sentence1.join() !== sentence2.join()) return false;
    return true;
  }
  let a = sentence1.length > sentence2.length ? sentence1 : sentence2;
  let b = sentence1.length > sentence2.length ? sentence2 : sentence1;
  let len = a.length - b.length;
  for (let i = 0; i + len <= a.length; i++) {
    let c = a.slice(0, i).concat(a.slice(i + len));
    if (c.join() === b.join()) return true;
  }
  return false;
};