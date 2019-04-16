const { solution } = require('../solution');

describe('it should find the max in window', () => {
  it('should find the max in window', () => {
    expect(solution([1,3,-1,-3,5,3,6,7], 3).toString()).toBe('3,3,5,5,6,7');
  });
});