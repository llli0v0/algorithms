const { solution } = require('../solution');

describe('it should return n nodes trees', () => {
  it('should return number trees', () => {
    expect(solution(0)).toBe(0);
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(2);
    expect(solution(3)).toBe(5);
    expect(solution(4)).toBe(14);
    expect(solution(5)).toBe(42);
    expect(solution(6)).toBe(132);
  });
});