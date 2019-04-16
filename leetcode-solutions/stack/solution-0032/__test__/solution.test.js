const { solution } = require('../solution');

describe('it should find the longest valid parentheses', () => {
  it('should find the longest valid parentheses', () =>{
    expect(solution(')))))((((()(((')).toBe(2);
  });
});