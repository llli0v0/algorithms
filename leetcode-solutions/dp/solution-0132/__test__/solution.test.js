const { solution } = require('../solution');

describe('it should find min cut', () => {
  it('test 1', () => {
    expect(solution('a')).toBe(0);
  });
  it('test 2', () => {
    expect(solution('aa')).toBe(0);
  });
  it('test 3', () => {
    expect(solution('aab')).toBe(1);
  });
  it('test 4', () => {
    expect(solution('aabb')).toBe(1);
  });
  it('test 5', () => {
    expect(solution('aabbcc')).toBe(2);
  });
  it('test 6', () => {
    expect(solution('aabbccbbaa')).toBe(0);
  });
});