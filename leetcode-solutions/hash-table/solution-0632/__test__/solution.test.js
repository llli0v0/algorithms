const { solution } = require('../solution');

describe('it should find the smallest range', () => {
  it('should find the smallest range', () => {
    expect(solution([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]).toString()).toBe('20,24');
  });
});