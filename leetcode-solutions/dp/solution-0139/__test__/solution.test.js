const { solution } = require('../solution');

describe('it should determine whether s is a combination of worddict', () => {
  it('should determine whether s is a combination of worddict', () => {
    expect(solution('leetcode', ['leet', 'code'])).toBe(true);
    expect(solution('applepenapple', ['apple', 'pen'])).toBe(true);
    expect(solution('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
  });
});