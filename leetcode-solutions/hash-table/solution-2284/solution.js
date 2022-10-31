/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  let counter = {};
  let res = [];
  let max = 0;
  for (let i = 0; i < messages.length; i++) {
    let msg = messages[i];
    let co = 1;
    for (let j = 0; j < msg.length; j++) {
      if (msg[j] === ' ') co++;
    }
    let sender = senders[i];
    if (counter[sender] === undefined) counter[sender] = 0;
    let count = counter[sender] += co;
    if (count > max) {
      max = count;
      res = [sender];
    } else if (count === max) {
      res.push(sender);
    }
  }
  return res.sort((a, b) => {
    let len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      let x = a.charCodeAt(i);
      let y = b.charCodeAt(i);
      if (x !== y) return x - y;
    }
    if (a.length !== b.length) return a.length - b.length;
    return 0;
  })[res.length - 1];
};
