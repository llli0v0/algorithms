const { solution } = require('../solution');

describe('it should determines whether the regex matches the string', () => {
  it('should determines whether the regex matches the string', () => {
    expect(solution('', '?')).toBe(false);
    expect(solution('', '*')).toBe(true);
    expect(solution('a', '?')).toBe(true);
    expect(solution('a', '*')).toBe(true);
    expect(solution('abc', '*')).toBe(true);
    expect(solution('abc', 'a*')).toBe(true);
    expect(solution('abc', 'a*c')).toBe(true);
    expect(solution('abc', 'ab*')).toBe(true);
    expect(solution('abc', 'a*b')).toBe(false);
    expect(solution('abcde', 'a*d*')).toBe(true);
    expect(solution('abcde', 'a?*d*')).toBe(true);
    expect(solution('abcde', 'a?*dc*')).toBe(false);
    expect(solution('abcde', 'a*b*c*d*e')).toBe(true);
    expect(solution('abcde', 'a*b*c*e*d')).toBe(false);
    expect(solution('abcde', 'a*?*?*?*e')).toBe(true);
    expect(solution('mississippi', 'm??*ss*?i*pi')).toBe(false);
    expect(solution('adceb', '*a*b')).toBe(true);
    expect(solution('ababbb', '**??a*')).toBe(true);
    expect(solution('bbbbab', '*a?*b')).toBe(false);
    expect(solution('mississippi', 'm*iss*iss*')).toBe(true);
  });
});