const { solution } = require('../solution');

describe('it should find all three sum', () => {
  it('should find all three sum', () => {
    expect(solution([-1, 0, 1, 2, -1, -4]).toString()).toBe('-1,-1,2,-1,0,1');
  });
});