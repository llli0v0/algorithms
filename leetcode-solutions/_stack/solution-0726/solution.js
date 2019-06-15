/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  let s = helper(formula);
  let stack = getStack(s);
  let hash = {};
  while (stack.length) {
    let a = stack.shift();
    let n = 1;
    if (stack.length && Number.isInteger(parseInt(stack[0]))) n = parseInt(stack.shift());
    if (hash[a]) {
      hash[a] += n;
    } else { hash[a] = n }
  }
  let keys = Object.keys(hash).sort();
  let result = '';
  for (let i = 0; i < keys.length; i++) {
    result = result + keys[i] + (hash[keys[i]] === 1 ? '' : hash[keys[i]]);
  }
  return result;

  function helper(formula) {
    let s = '';
    for (let i = 0; i < formula.length; i++) {
      if (formula[i] === '(') {
        let j = i + 1;
        let cc = 1;
        while (cc !== 0) {
          if (formula[j] === '(') cc++;
          if (formula[j] === ')') cc--;
          j++;
        }
        let a = helper(formula.slice(i + 1, j - 1));
        let n = j;
        while (formula[n] >= '0' && formula[n] <= '9') n++;
        let num = parseInt(formula.slice(j, n));
        let stack = getStack(a, num);
        for (let i = 0; i < stack.length; i++) {
          if (!Number.isInteger(parseInt(stack[i])) && (stack[i + 1] === undefined || !Number.isInteger(parseInt(stack[i + 1])))) stack[i] += num;
        }
        s += stack.join('');
        i = n - 1;
      } else { s += formula[i] }
    }
    return s;
  }

  function getStack(a, num) {
    let stack = [];
    for (let i = 0; i < a.length; i++) {
      if (stack[stack.length - 1] === 'Zr') debugger;
      if (a[i] >= 'a' && a[i] <= 'z' || a[i] >= 'A' && a[i] <= 'Z') {
        if (
          !stack.length ||
          Number.isInteger(parseInt(stack[stack.length - 1])) ||
          a[i] >= 'A' && a[i] <= 'Z'
        ) {
          stack.push(a[i]);
        } else {
          stack[stack.length - 1] += a[i];
        }
      } else {
        if (Number.isInteger(parseInt(stack[stack.length - 1]))) {
          stack[stack.length - 1] += a[i];
        } else {
          stack.push(a[i]);
        }
        if (num !== undefined) {
          if (!Number.isInteger(parseInt(a[i + 1]))) stack[stack.length - 1] = String(parseInt(stack[stack.length - 1]) * num);
        }
      }
    }
    return stack;
  }
};