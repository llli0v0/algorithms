const { solution } = require('../solution');

describe('it should find the max envelopes', () => {
  it('should find the max envelopes', () => {
    expect(solution([[5, 4], [6, 4], [6, 6], [6, 7], [2, 3], [3, 3]])).toBe(3);
    expect(solution([[10, 1], [8, 2], [9, 3], [4, 5], [7, 6], [3, 8]])).toBe(2);
    expect(solution([[1, 1]])).toBe(1);
    expect(solution([[1, 15], [7, 18], [7, 6], [7, 100], [2, 200], [17, 30], [17, 45], [3, 5], [7, 8], [3, 6], [3, 10], [7, 20], [17, 3], [17, 45]])).toBe(3);
  });
});