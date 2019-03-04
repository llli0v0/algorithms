const { solution } = require('../solution');

describe('it should find the min steps jump to end', () => {
  it('should find the min steps jump to end', () => {
    expect(solution([2,3,1,1,4])).toBe(2);
  });
});