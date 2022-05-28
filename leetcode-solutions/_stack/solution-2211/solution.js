/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < directions.length; i++) {
    let d = directions[i];
    if (!stack.length) stack.push(d);
    else if (stack[stack.length - 1] === 'R' && d === 'L') {
      result += 2;
      stack.pop();
      while (stack.length && stack[stack.length - 1] === 'R') {
        stack.pop();
        result += 1;
      }
      stack.push('S');
    } else if (stack[stack.length - 1] === 'S' && d === 'L') {
      result += 1;
    } else if (stack[stack.length - 1] === 'L' && d === 'L') {
      stack.push(d);
    } else if (d === 'R') {
      stack.push(d);
    } else if (d === 'S') {
      while (stack.length && stack[stack.length - 1] === 'R') {
        stack.pop();
        result += 1;
      }
      stack.push(d);
    }
  }
  return result;
};