/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  text = text[0].toLowerCase() + text.slice(1);
  text = text.split(' ');
  let counter = {};
  for (let i = 0; i < text.length; i++) {
    let len = text[i].length;
    if (counter[len] === undefined) {
      counter[len] = [];
    }
    counter[len].push(text[i]);
  }
  let result = [];
  for (let i = 0; i < 100000; i++) {
    if (counter[i] !== undefined) {
      result = result.concat(counter[i]);
    }
  }
  result = result.join(' ');
  result = result[0].toUpperCase() + result.slice(1);
  return result;
};