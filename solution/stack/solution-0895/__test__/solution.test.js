const { solution } = require('../solution');

describe('it should return max count element', () => {
  it('should return max count element', () => {
    let stack = new solution();
    stack.push(5);
    stack.push(7);
    stack.push(5);
    stack.push(7);
    stack.push(4);
    stack.push(5);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(5);
  });
});