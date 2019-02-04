const { solution } = require('../solution');

describe('it should find the min edit distance', () => {
  it('should find the min edit distance', () => {
    expect(solution('horse', 'ros')).toBe(3);
  });
});