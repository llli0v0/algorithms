const { solution } = require('../solution');

describe('it should return shortest Palindrome', () => {
  it('should return shortest Palindrome', () => {
    expect(solution('aacecaaa')).toBe('aaacecaaa');
    expect(solution('abcd')).toBe('dcbabcd');
  });
});