const { solution } = require('../solution');

describe('it should find all sub string', () => {
  it('should find all sub string', () => {
    expect(solution('adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc', 'bcddceeeebecbc')).toBe(700531452);
  });
});