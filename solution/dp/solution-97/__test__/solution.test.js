const { solution } = require('../solution');

describe('It should determine if s3 is interleaved with s1 and s2', () => {
  it('should determine if s3 is interleved with s1 and s2', () => {
    expect(solution('abbbbbbcabbacaacccababaabcccabcacbcaabbbacccaaaaaababbbacbb', 'ccaacabbacaccacababbbbabbcacccacccccaabaababacbbacabbbbabc', 'cacbabbacbbbabcbaacbbaccacaacaacccabababbbababcccbabcabbaccabcccacccaabbcbcaccccaaaaabaaaaababbbbacbbabacbbacabbbbabc')).toBe(true);
  });
});