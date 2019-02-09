const { solution } = require('../solution');

describe('it should find the min water level', () => {
  it('should find the min water level', () => {
    expect(solution(
      [
        [ 7,34,16,12,15, 0],
        [10,26, 4,30, 1,20],
        [28,27,33,35, 3, 8],
        [29, 9,13,14,11,32],
        [31,21,23,24,19,18],
        [22, 6,17, 5, 2,25]
      ]
    )).toBe(26);
  });
});