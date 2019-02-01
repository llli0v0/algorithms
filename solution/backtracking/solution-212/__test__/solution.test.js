const { solution } = require('../solution');

describe('it should find all word', () => {
  it('test 1', () => {
    expect(solution(['a'], 'a').toString()).toBe('a');
  });
  it('test 2', () => {
    expect(solution(
      [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v']
      ], ['oath', 'pea', 'eat', 'rain']
    ).toString()).toBe('oath,eat');
  });
  it('test 3', () => {
    expect(solution([['a', 'a']], ['a']).toString()).toBe('a');
  });
  it('test 4', () => {
    expect(solution(
      [
        ['a', 'b'],
        ['c', 'd']
      ], ['acdb']
    ).toString()).toBe('acdb');
  });
});