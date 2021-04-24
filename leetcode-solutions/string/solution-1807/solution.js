/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
 var evaluate = function(s, knowledge) {
  let stack = [''];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(' ');
    } else if (s[i] === ')') {
      stack.push('');
    } else {
      stack[stack.length - 1] += s[i];
    }
  }
  let knowledgeMap = {};
  for (let i = 0; i < knowledge.length; i++) {
    knowledgeMap[knowledge[i][0]] = knowledge[i][1];
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] === ' ') {
      let key = stack[i].slice(1);
      if (knowledgeMap[key] !== undefined) stack[i] = knowledgeMap[key];
      else stack[i] = '?'
    }
  }
  return stack.join('');
};