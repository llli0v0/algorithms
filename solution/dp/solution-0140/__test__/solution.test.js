const { solution } = require('../solution');

describe('it should find all the word combination', () => {
  it('should find all the word combination', () => {
    expect(solution('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']).toString()).toBe('cats and dog,cat sand dog');
  });
});