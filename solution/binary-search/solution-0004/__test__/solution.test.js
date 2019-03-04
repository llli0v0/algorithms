const { solution } = require('../solution');

describe('it should find the median of two sorted arrays', () => {
  it('test 1', () => {
    expect(solution([1, 3], [2])).toBe(2);
    expect(solution([1], [2])).toBe(1.5);
  });
});