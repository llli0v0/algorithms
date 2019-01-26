const { solution } = require('../solution');

describe('it should find all palindrome pairs', () => {
  it('should find all palindrome pairs', () => {
    expect(solution(['abcd','dcba','lls','s','sssll']).map(i => i.toString()).toString()).toBe('0,1,1,0,3,2,2,4');
    expect(solution(['bat','tab','cat']).map(i => i.toString()).toString()).toBe('0,1,1,0');
  });
});